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


    if (!place) return null;

    const routes = [
        {
            id: "r1",
            safety: "Safe",
            distanceKm: 1,
            durationMin: 12,
            tags: ["Good Lighting", "Moderate Crowd"],
        },
        {
            id: "r2",
            safety: "Moderately Safe",
            distanceKm: 1,
            durationMin: 12,
            tags: ["Good Lighting", "Moderate Crowd"],
        },
    ];

    const safetyColors = {
        Safe: { bg: "#D9F7BE", text: "#0F9D58" },
        "Moderately Safe": { bg: "#FFE8B0", text: "#C98A00" },
        Unsafe: { bg: "#FFD6D6", text: "#C53D3D" },
    };

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
                {routes.map((route) => (
                    <div
                        key={route.id}
                        style={{
                            border: "1px solid #DADCF3",
                            borderRadius: 14,
                            padding: "22px 24px",
                            marginBottom: 25,
                            background: "white",
                        }}
                    >
                        {/* Current Location + Safety */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 12,
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                {bullet}
                                <span style={{ fontSize: 13, color: "#555" }}>
                                    Current Location
                                </span>
                            </div>

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
                        </div>

                        {/* Divider */}
                        <div
                            style={{
                                width: "100%",
                                height: 1,
                                backgroundColor: "#E5E7FB",
                                marginTop: 6,
                            }}
                        />

                        {/* Destination + Distance */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: 18,
                                    fontWeight: 700,
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
                                    fontWeight: 600,
                                    color: "#2D2A73",
                                    fontSize: 15,
                                }}
                            >
                                <span>{route.distanceKm}km</span>
                                {bullet}
                                <span>{route.durationMin} min</span>
                            </div>
                        </div>

                        {/* Tags */}
                        <div
                            style={{
                                display: "flex",
                                gap: 25,
                                alignItems: "center",
                                marginBottom: 18,
                            }}
                        >
                            {route.tags.map((tag, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                        fontSize: 14,
                                        color: "#555",
                                    }}
                                >
                                    {bullet}
                                    {tag}
                                </div>
                            ))}
                        </div>

                        {/* Bottom Buttons */}
                        <div
                            style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}
                        >
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

                            {/* View Route */}
                            <button
                                onClick={() => onSelectRoute(route)}
                                style={{
                                    padding: "5px 15px",
                                    borderRadius: 20,
                                    border: "2px solid #4B3EC8",
                                    background: "white",
                                    color: "#4B3EC8",
                                    fontWeight: 700,
                                    cursor: "pointer",
                                    fontSize: 15,
                                    transition: "0.2s ease",
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.background = "#4B3EC8";
                                    e.target.style.color = "white";
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.background = "white";
                                    e.target.style.color = "#4B3EC8";
                                }}
                            >
                                View Route
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
