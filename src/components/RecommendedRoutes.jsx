// src/components/RecommendedRoutes.jsx
import React, { useState } from "react";
import colors from "../styles/colors";
import flagIcon from "../assets/images/home/flag.webp";
import FlagRouteModal from "./FlagRouteModal";
import FlagReasonModal from "./FlagReasonModal";
import LocationAccessModal from "./LocationAccessModal";
import ThankYouFlagModal from "./ThankYouFlagModal";
import EmergencyToolsModal from "./EmergencyToolsModal";
import LiveLocationShareModal from "./LiveLocationShareModal";

export default function RecommendedRoutes({ place, onSelectRoute, onBack }) {
    const [showFlagModal, setShowFlagModal] = useState(false);
    const [showReasonModal, setShowReasonModal] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [showEmergencyTools, setShowEmergencyTools] = useState(false);
    const [showLocationAccess, setShowLocationAccess] = useState(false);
    const [showLiveShare, setShowLiveShare] = useState(false);

    const [openWhyRouteId, setOpenWhyRouteId] = useState(null);

    if (!place) return null;

    const routes = [
        {
            id: "r1",
            status: "Generally Safe",
            safety: "Safe",
            distanceKm: 1.0,
            durationMin: 12,
            description:
                "This route has consistently shown low safety risk based on recent community reports and environmental indicators. Lighting is good, crowds are present, and conditions remain stable.",
            tags: ["Good Lighting", "Moderate Crowd"],
        },
        {
            id: "r2",
            status: "Use Caution",
            safety: "Moderately Safe",
            distanceKm: 1.4,
            durationMin: 16,
            description:
                "Some segments may have reduced lighting or lower foot traffic at certain hours. Stay alert and consider traveling during busier times.",
            tags: ["Mixed Lighting", "Low Foot Traffic"],
        },
        {
            id: "r3",
            status: "Avoid if Possible",
            safety: "Unsafe",
            distanceKm: 0.9,
            durationMin: 10,
            description:
                "Community reports indicate frequent safety concerns in this area, especially at night. Consider using an alternative route if possible.",
            tags: ["Poor Lighting", "Quiet Area"],
        },
    ];


    const statusMeta = {
        Safe: { color: "#09B000" },
        "Generally Safe": { color: "#FFC727" },
        "Use Caution": { color: "#FF9327" },
        "Avoid if Possible": { color: "#FF0000" },
    };

    const bulletDot = (
        <span
            style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#FFC727",
                display: "inline-block",
            }}
        />
    );

    // ✅ Always-green info icon color (as you requested)
    const INFO_GREEN = "#09B000";

    return (
        <>
            {/* FLAG ROUTE CONFIRM MODAL */}
            {showFlagModal && (
                <FlagRouteModal
                    visible={showFlagModal}
                    onClose={() => setShowFlagModal(false)}
                    onContinue={() => {
                        setShowFlagModal(false);
                        setShowReasonModal(true);
                    }}
                />
            )}

            {/* FLAG REASON MODAL */}
            {showReasonModal && (
                <FlagReasonModal
                    visible={showReasonModal}
                    onClose={() => setShowReasonModal(false)}
                    onSubmit={(reason) => {
                        console.log("Route flagged for:", reason);
                        setShowReasonModal(false);
                        setShowThankYou(true);
                    }}
                />
            )}

            {/* THANK YOU MODAL */}
            <ThankYouFlagModal
                isOpen={showThankYou}
                onClose={() => setShowThankYou(false)}
                onOpenEmergencyTools={() => {
                    setShowThankYou(false);
                    setShowEmergencyTools(true);
                }}
                onOpenLocationShare={() => {
                    setShowThankYou(false);
                    setShowLocationAccess(true);
                }}
            />

            {/* EMERGENCY TOOLS MODAL */}
            <EmergencyToolsModal
                isOpen={showEmergencyTools}
                onClose={() => setShowEmergencyTools(false)}
            />

            {showLocationAccess && (
                <LocationAccessModal
                    onClose={() => setShowLocationAccess(false)}
                    onEnable={() => {
                        setShowLocationAccess(false);
                        setShowLiveShare(true);
                    }}
                />
            )}

            <LiveLocationShareModal
                isOpen={showLiveShare}
                onClose={() => setShowLiveShare(false)}
            />

            {/* MAIN UI */}
            <div
                style={{
                    width: "100%",
                    maxWidth: 850,
                    backgroundColor: "#F4F6FF",
                    padding: 20,
                    borderRadius: 18,
                    margin: "0 auto",
                    marginBottom: 30,
                }}
            >
                {/* Header */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 10,
                    }}
                >
                    <h2
                        style={{
                            fontSize: 24,
                            fontWeight: 700,
                            color: "#2D2A73",
                        }}
                    >
                        Recommended Routes
                    </h2>

                    <button
                        onClick={onBack}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            border: "none",
                            background: "none",
                            cursor: "pointer",
                            color: "#2D2A73",
                            fontSize: 14,
                            fontWeight: 600,
                        }}
                    >
                        <span style={{ fontSize: 14 }}>←</span> go back
                    </button>
                </div>

                {/* ROUTE CARDS */}
                {routes.map((route) => {
                    const meta = statusMeta[route.status] || statusMeta["Generally Safe"];
                    const isWhyOpen = openWhyRouteId === route.id;

                    return (
                        <div
                            key={route.id}
                            style={{
                                border: "1px solid #DADCF3",
                                borderRadius: 14,
                                padding: "18px 20px",
                                marginBottom: 22,
                                background: "white",
                            }}
                        >
                            {/* Top: Current Location */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    paddingBottom: 10,
                                    borderBottom: "1px solid #E8E9FF",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 13,
                                        color: "#2D2A73",
                                        opacity: 0.85,
                                    }}
                                >
                                    Current Location
                                </span>
                            </div>

                            {/* Title row */}
                            <div
                                style={{
                                    marginTop: 14,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    gap: 12,
                                }}
                            >
                                <h3
                                    style={{
                                        margin: 0,
                                        fontSize: 22,
                                        fontWeight: 800,
                                        color: "#2D2A73",
                                    }}
                                >
                                    {place.name}
                                </h3>

                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 12,
                                        color: "#2D2A73",
                                        fontSize: 13,
                                        fontWeight: 600,
                                    }}
                                >
                                    <span>{route.distanceKm}km</span>
                                    <span style={{ color: "#FFC727" }}>•</span>
                                    <span>{route.durationMin} min</span>
                                </div>
                            </div>

                            {/* Status row (icon ALWAYS GREEN + clickable popover) */}
                            <div
                                style={{
                                    marginTop: 10,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    position: "relative", // ✅ anchor popover to this row
                                }}
                            >
                                {/* ✅ Clickable info icon (ALWAYS #09B000) */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenWhyRouteId((prev) => (prev === route.id ? null : route.id))
                                    }
                                    style={{
                                        width: 18,
                                        height: 18,
                                        borderRadius: "50%",
                                        border: `2px solid ${INFO_GREEN}`,
                                        background: "transparent",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: 11,
                                        fontWeight: 900,
                                        color: INFO_GREEN,
                                        lineHeight: 1,
                                        cursor: "pointer",
                                        padding: 0,
                                    }}
                                    aria-label="Why this route?"
                                >
                                    i
                                </button>

                                {/* Status pill (color depends on status) */}
                                <span
                                    style={{
                                        padding: "4px 12px",
                                        borderRadius: 18,
                                        fontSize: 12,
                                        fontWeight: 700,
                                        color: meta.color,
                                        border: `2px solid ${meta.color}`,
                                        background: "#FFFFFF",
                                    }}
                                >
                                    {route.status}
                                </span>

                                {/* ✅ Popover modal (exactly below the icon/row area) */}
                                {isWhyOpen && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            left: 0,
                                            top: 30, // just below row
                                            width: 330,
                                            background: "#2D2A73",
                                            borderRadius: 12,
                                            padding: "14px 16px",
                                            color: "white",
                                            boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
                                            zIndex: 20,
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 10,
                                                justifyContent: "center",
                                                marginBottom: 10,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: 22,
                                                    height: 22,
                                                    borderRadius: "50%",
                                                    border: "2px solid rgba(255,255,255,0.85)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 900,
                                                    fontSize: 12,
                                                    lineHeight: 1,
                                                }}
                                            >
                                                i
                                            </div>
                                            <div
                                                style={{
                                                    fontWeight: 900,
                                                    fontSize: 13,
                                                    letterSpacing: 0.6,
                                                }}
                                            >
                                                WHY THIS ROUTE?
                                            </div>
                                        </div>

                                        <p
                                            style={{
                                                margin: 0,
                                                fontSize: 12,
                                                lineHeight: "16px",
                                                opacity: 0.95,
                                                fontStyle: "italic",
                                                textAlign: "center",
                                            }}
                                        >
                                            Safety rating based on aggregated, anonymous community signals and
                                            environmental indicators.
                                        </p>

                                        <p
                                            style={{
                                                margin: "10px 0 0",
                                                fontSize: 12,
                                                lineHeight: "16px",
                                                opacity: 0.9,
                                                fontStyle: "italic",
                                                textAlign: "center",
                                            }}
                                        >
                                            LIWA does not track individual users or show exact incident locations.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Description */}
                            <p
                                style={{
                                    marginTop: 12,
                                    marginBottom: 14,
                                    fontSize: 12,
                                    lineHeight: "16px",
                                    color: "#5B57A6",
                                    fontStyle: "italic",
                                    opacity: 0.95,
                                }}
                            >
                                {route.description}
                            </p>

                            {/* Divider (NO avatar) */}
                            <div
                                style={{
                                    height: 1,
                                    background: "#E8E9FF",
                                    width: "100%",
                                    marginBottom: 12,
                                }}
                            />

                            {/* Bottom tags + actions */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: 14,
                                    flexWrap: "wrap",
                                }}
                            >
                                {/* Tags (left) */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 22,
                                        flexWrap: "wrap",
                                        color: "#2D2A73",
                                        fontSize: 12,
                                        fontWeight: 600,
                                    }}
                                >
                                    {route.tags.map((t, i) => (
                                        <span
                                            key={i}
                                            style={{ display: "flex", alignItems: "center", gap: 8 }}
                                        >
                                            {bulletDot}
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions (right) */}
                                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                    {/* Flag */}
                                    <button
                                        onClick={() => setShowFlagModal(true)}
                                        style={{
                                            width: 42,
                                            height: 42,
                                            borderRadius: 12,
                                            border: "2px solid transparent",
                                            background: "white",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <img src={flagIcon} alt="flag" style={{ width: 20 }} />
                                    </button>

                                    {/* View Route */}
                                    <button
                                        onClick={() => onSelectRoute(route)}
                                        style={{
                                            padding: "6px 16px",
                                            borderRadius: 20,
                                            border: "2px solid #4B3EC8",
                                            background: "white",
                                            color: "#4B3EC8",
                                            fontWeight: 700,
                                            cursor: "pointer",
                                            fontSize: 13,
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 10,
                                            transition: "0.2s ease",
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.background = "#4B3EC8";
                                            e.currentTarget.style.color = "white";
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.background = "white";
                                            e.currentTarget.style.color = "#4B3EC8";
                                        }}
                                    >
                                        View Route
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
