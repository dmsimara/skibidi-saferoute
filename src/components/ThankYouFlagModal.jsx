// src/components/ThankYouFlagModal.jsx
import React from "react";
import colors from "../styles/colors";
import checkIcon from "../assets/images/report/check.png";

export default function ThankYouFlagModal({ isOpen, onClose, onOpenEmergencyTools, onOpenLocationShare }) {
    if (!isOpen) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.35)",
                backdropFilter: "blur(4px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
            }}
        >
            <div
                style={{
                    width: 430,
                    background: "white",
                    borderRadius: 22,
                    padding: "35px 35px",
                    textAlign: "center",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                }}
            >
                <img
                    src={checkIcon}
                    alt="check"
                    style={{ width: 55, marginBottom: 20 }}
                />

                <h2
                    style={{
                        fontSize: 22,
                        fontWeight: 700,
                        color: colors.purpleDark,
                        marginBottom: 10,
                    }}
                >
                    Thank you for helping the Liwa community!
                </h2>

                <p
                    style={{
                        fontSize: 14,
                        color: "#555",
                        lineHeight: "22px",
                        marginBottom: 22,
                    }}
                >
                    Your report helps make routes safer and more reliable for everyone.
                    Our team will review this as soon as possible.
                </p>

                {/* ---- NEW HEADING ---- */}
                <p
                    style={{
                        fontWeight: 700,
                        fontSize: 14,
                        color: colors.purpleDark,
                        marginBottom: 10,
                        textAlign: "left",
                        width: "85%",
                        margin: "0 auto",
                    }}
                >
                    Other steps you can take
                </p>

                {/* Useful Links */}
                <ul
                    style={{
                        fontSize: 14,
                        color: "#555",
                        lineHeight: "22px",
                        textAlign: "left",
                        margin: "0 auto 20px",
                        width: "85%",
                        cursor: "pointer",
                        listStyle: "none",
                        paddingLeft: 0,
                    }}
                >
                    <li onClick={onOpenEmergencyTools}>
                        View emergency tools and resources
                    </li>
                    <li onClick={() => (window.location.href = "/reports")}>
                        Check nearby reports
                    </li>
                    <li onClick={onOpenLocationShare}>
                        Share your live location with someone you trust
                    </li>
                    <li onClick={() => (window.location.href = "/settings")}>
                        Adjust your safety preferences
                    </li>
                    <li onClick={() => (window.location.href = "/report")}>
                        Report an incident
                    </li>
                </ul>

                <button
                    onClick={onClose}
                    style={{
                        marginTop: 10,
                        padding: "10px 30px",
                        background: colors.purple,
                        color: "white",
                        border: "none",
                        borderRadius: 18,
                        fontWeight: 700,
                        cursor: "pointer",
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    );
}
