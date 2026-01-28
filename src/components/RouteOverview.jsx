// src/components/RouteOverview.jsx
import React, { useEffect, useState } from "react";
import colors from "../styles/colors";
import PrimaryButton from "./PrimaryButton";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import ViewReviewConfirmModal from "./ViewReviewConfirmModal";
import ReportDetailsModal from "./ReportDetailsModal";
import HeartButton from "./HeartButton";
import flagIcon from "../assets/images/home/flag.webp";
import HeartConfirmModal from "./HeartConfirmModal";
import FlagRouteModal from "./FlagRouteModal";

export default function RouteOverview({ route, place, onBack, onStartNavigation }) {
    const [showFlagModal, setShowFlagModal] = useState(false);
    // ------------------------------------------------------------
    // HOOKS — always top
    // ------------------------------------------------------------
    const navigate = useNavigate();

    const [nearbyReports, setNearbyReports] = useState([]);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);

    // For modal confirmation when viewing review
    const [showReviewConfirm, setShowReviewConfirm] = useState(false);

    // For like (heart) confirmation
    const [showHeartConfirm, setShowHeartConfirm] = useState(false);
    const [reportToLike, setReportToLike] = useState(null);

    // ------------------------------------------------------------
    // LOAD REPORTS
    // ------------------------------------------------------------
    useEffect(() => {
        async function loadReports() {
            if (!place) return;

            const { data, error } = await supabase.from("reports").select("*");
            if (error) {
                console.error("Failed to load reports:", error);
                return;
            }

            const bufferKm = 0.3;
            const filtered = data.filter((r) => {
                if (!r.latitude || !r.longitude) return false;

                const dx = r.latitude - place.lat;
                const dy = r.longitude - place.lng;
                const distanceKm = Math.sqrt(dx * dx + dy * dy) * 111;

                return distanceKm <= bufferKm;
            });

            setNearbyReports(filtered);
        }

        loadReports();
    }, [place]);

    // ------------------------------------------------------------
    // EARLY RETURN — after hooks
    // ------------------------------------------------------------
    if (!route || !place) return null;

    // ------------------------------------------------------------
    // COLORS
    // ------------------------------------------------------------
    const safetyColors = {
        Safe: { bg: "#D9F7BE", text: "#0F9D58" },
        "Moderately Safe": { bg: "#FFE8B0", text: "#C98A00" },
        Unsafe: { bg: "#FFD6D6", text: "#C53D3D" },
    };

    // Bullet UI
    const bullet = (
        <span
            style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#FFC000",
                display: "inline-block",
            }}
        />
    );

    const renderStars = (likes) => {
        const rating = Math.min(5, Math.max(0, Math.floor(likes / 1)));
        // 1 like = 1 star (adjust later)

        return (
            <div style={{ display: "flex", gap: 3 }}>
                {[1, 2, 3, 4, 5].map((num) => (
                    <span
                        key={num}
                        style={{
                            color: num <= rating ? "#FFC107" : "#C9C9C9",
                            fontSize: 22,
                        }}
                    >
                        ★
                    </span>
                ))}
            </div>
        );
    };


    async function handleLike(report) {
        console.log("Attempting to LIKE report:", report);

        if (!report?.id) {
            console.error("❌ No report.id found — cannot update.");
            return;
        }

        const currentLikes = report.likes || 0;
        const newLikes = currentLikes + 1;  // ❤️ each click adds 1

        console.log("Old likes:", currentLikes, "→ New likes:", newLikes);

        const { error } = await supabase
            .from("reports")
            .update({ likes: newLikes })
            .eq("id", report.id);

        if (error) {
            console.error("❌ Supabase LIKE update failed:", error);
            return;
        }

        console.log("✅ LIKE updated successfully in Supabase");

        // Update UI
        setNearbyReports((prev) =>
            prev.map((r) =>
                r.id === report.id
                    ? { ...r, likes: newLikes }
                    : r
            )
        );
    }


    async function confirmLike() {
        console.log("➡️ CONFIRM LIKE triggered for:", reportToLike);

        await handleLike(reportToLike);

        setShowHeartConfirm(false);
        setReportToLike(null);
    }


    // ------------------------------------------------------------
    // UI
    // ------------------------------------------------------------
    return (
        <div
            style={{
                width: "100%",
                maxWidth: 850,
                backgroundColor: "rgb(244, 246, 255)",
                padding: 20,
                borderRadius: 18,
                margin: "0 auto",
                marginBottom: 30,
            }}
        >
            {/* WHITE CARD */}
            <div
                style={{
                    width: "790px",
                    background: "white",
                    borderRadius: 14,
                    padding: "25px 28px",
                }}
            >
                {/* HEADER ROW */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 20,
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        {/* Title */}
                        <h2
                            style={{
                                fontSize: 22,
                                fontWeight: 700,
                                color: colors.purpleDark,
                            }}
                        >
                            Route Overview
                        </h2>

                        {/* Safety pill */}
                        <span
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                                padding: "4px 12px",
                                borderRadius: 20,
                                fontSize: 12,
                                fontWeight: 600,
                                background: safetyColors[route.safety].bg,
                                color: safetyColors[route.safety].text,
                                border: `2px solid ${safetyColors[route.safety].text}`,
                            }}
                        >
                            <span
                                style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    background: safetyColors[route.safety].text,
                                }}
                            />
                            {route.safety}
                        </span>

                        {/* Flag Button */}
                        <button
                            onClick={() => setShowFlagModal(true)}
                            style={{
                                width: 45,
                                height: 45,
                                borderRadius: 12,
                                border: "2px solid transparent",
                                background: "white",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img src={flagIcon} alt="flag" style={{ width: 22 }} />
                        </button>
                    </div>

                    <button
                        onClick={onBack}
                        style={{
                            border: "none",
                            background: "none",
                            cursor: "pointer",
                            color: colors.purpleDark,
                            fontSize: 14,
                            fontWeight: 600,
                        }}
                    >
                        ← go back
                    </button>
                </div>

                {/* DESTINATION + DISTANCE */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 10,
                        alignItems: "center",
                    }}
                >
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: colors.purpleDark }}>
                        {place.name}
                    </h3>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            fontWeight: 600,
                            fontSize: 15,
                            color: colors.purpleDark,
                        }}
                    >
                        <span>{route.distanceKm} km</span>
                        {bullet}
                        <span>{route.durationMin} min</span>
                    </div>
                </div>

                {/* TAGS + DIRECTIONS */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 20,
                        alignItems: "center",
                    }}
                >
                    <div style={{ display: "flex", gap: 20, fontSize: 16, opacity: 0.8 }}>
                        {route.tags.map((tag, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                {bullet}
                                {tag}
                            </div>
                        ))}
                    </div>

                    <PrimaryButton
                        onClick={onStartNavigation}
                        style={{ padding: "10px 25px", fontSize: 15 }}
                    >
                        Directions
                    </PrimaryButton>
                </div>

                {/* DIVIDER */}
                <div
                    style={{
                        width: "100%",
                        height: 1,
                        backgroundColor: "#E5E7FB",
                        marginBottom: 20,
                    }}
                />

                {/* ACCESSIBILITY */}
                <h3 style={{ fontSize: 16, fontWeight: 700, color: colors.purpleDark }}>
                    Accessibility
                </h3>

                <ul
                    style={{
                        listStyle: "none",
                        paddingLeft: 0,
                        marginBottom: 25,
                        opacity: 0.9,
                    }}
                >
                    <li>Biker’s Lane</li>
                    <li>Wheelchair Accessible Parking Lot</li>
                </ul>

                {/* DIVIDER */}
                <div
                    style={{
                        width: "100%",
                        height: 1,
                        backgroundColor: "#E5E7FB",
                        marginBottom: 20,
                    }}
                />

                {/* WRITE REVIEW BUTTON */}
                <div style={{ textAlign: "center" }}>
                    <PrimaryButton
                        style={{ padding: "10px 40px", fontSize: 16 }}
                        onClick={() =>
                            navigate("/report", {
                                state: {
                                    prefillLocation: place.name,
                                    lat: place.lat,
                                    lng: place.lng,
                                },
                            })
                        }
                    >
                        Write a review
                    </PrimaryButton>
                </div>

                {/* MODALS */}
                <ViewReviewConfirmModal
                    isOpen={showReviewConfirm}
                    onClose={() => setShowReviewConfirm(false)}
                    onContinue={() => {
                        setShowReviewConfirm(false);
                        setShowReviewModal(true);
                    }}
                />

                <ReportDetailsModal
                    isOpen={showReviewModal}
                    report={selectedReview}
                    onClose={() => setShowReviewModal(false)}
                />

                <HeartConfirmModal
                    isOpen={showHeartConfirm}
                    onClose={() => setShowHeartConfirm(false)}
                    onConfirm={confirmLike}
                />
            </div>
        </div>
    );
}
