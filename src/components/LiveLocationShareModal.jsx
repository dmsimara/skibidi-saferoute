import React from "react";
import colors from "../styles/colors";
import PrimaryButton from "./PrimaryButton";
import OutlineButton from "./OutlineButton";
import copyIcon from "../assets/images/home/copy.webp";

export default function LiveLocationShareModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const sessionLink = "https://liwa.app/live-location/?session=lk29f-82mh1-qp93a-77fd9";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(sessionLink);
    };

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.25)",
                backdropFilter: "blur(4px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
            }}
        >
            <div
                style={{
                    width: 520,
                    background: "white",
                    borderRadius: 26,
                    padding: "40px 45px",
                    boxShadow: "0 8px 26px rgba(0,0,0,0.15)",
                }}
            >
                {/* HEADER WITH BACK BUTTON */}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h2
                        style={{
                            fontSize: 26,
                            fontWeight: 700,
                            color: colors.purpleDark,
                            marginBottom: 10,
                        }}
                    >
                        Share your live location
                    </h2>

                    <button
                        onClick={onClose}
                        style={{
                            background: "none",
                            border: "none",
                            color: colors.purpleDark,
                            fontSize: 15,
                            fontWeight: 600,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        ← Go Back
                    </button>
                </div>

                <p style={{ color: "#555", marginBottom: 28 }}>
                    Let a trusted contact follow your trip in real time.
                </p>

                {/* SHARE BOX */}
                <div
                    style={{
                        background: "#F5F6FF",
                        borderRadius: 18,
                        padding: "18px 18px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 28,
                        border: "1px solid #E4E5FA",
                    }}
                >
                    <div>
                        <p
                            style={{
                                margin: 0,
                                fontSize: 14,
                                opacity: 0.6,
                                marginBottom: 4,
                            }}
                        >
                            Share your location now:
                        </p>
                        <p
                            style={{
                                margin: 0,
                                color: colors.purple,
                                fontSize: 14,
                                fontWeight: 600,
                                wordBreak: "break-all",
                            }}
                        >
                            {sessionLink}
                        </p>
                    </div>

                    <img
                        src={copyIcon}
                        alt="copy"
                        onClick={copyToClipboard}
                        style={{
                            width: 28,
                            height: 28,
                            cursor: "pointer",
                            marginLeft: 12,
                        }}
                    />
                </div>

                {/* TERMS */}
                <p
                    style={{
                        fontSize: 13,
                        opacity: 0.55,
                        textAlign: "center",
                        marginBottom: 30,
                    }}
                >
                    By continuing, you agree to our{" "}
                    <span style={{ color: colors.darkPurple, cursor: "pointer" }}>
                        Terms & Conditions
                    </span>{" "}
                    and{" "}
                    <span style={{ color: colors.darkPurple, cursor: "pointer" }}>
                        Privacy Policies
                    </span>
                    .
                </p>

                {/* BUTTON ROW */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 18,
                    }}
                >
                    <OutlineButton
                        onClick={onClose}
                        style={{ fontSize: 16, padding: "10px 35px" }}
                    >
                        Cancel
                    </OutlineButton>

                    <PrimaryButton
                        onClick={onClose}
                        style={{ fontSize: 16, padding: "10px 40px" }}
                    >
                        Done
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
}
