import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import colors from "../../styles/colors";

export default function TermsAndConditions({ onClose }) {
    const [scale, setScale] = useState(1);

    const navigate = useNavigate();

    useEffect(() => {
        const updateScale = () => {
            const baseWidth = 760;
            const baseHeight = 1250;

            const screenW = window.innerWidth;
            const screenH = window.innerHeight;

            const scaleW = screenW / (baseWidth + 160);
            const scaleH = screenH / (baseHeight + 160);

            let final = Math.min(scaleW, scaleH);
            final = Math.max(final, 0.88);
            final = Math.min(final, 1);

            setScale(final);
        };

        updateScale();
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale);
    }, []);

    // Consistent spacing system
    const sectionTitleBase = {
        fontWeight: 700,
        color: colors.purpleDark,
        fontSize: 16,
        marginBottom: 6,
    };

    const paragraph = {
        fontSize: 14,
        lineHeight: 1.5,
        opacity: 0.85,
        marginBottom: 12,
    };

    const listStyle = {
        paddingLeft: 20,
        fontSize: 14,
        lineHeight: 1.45,
        opacity: 0.85,
        marginTop: -2,
        marginBottom: 12,
    };

    const cardBox = {
        backgroundColor: "#F8F8FF",
        padding: "16px 18px",
        borderRadius: 12,
        marginBottom: 18,
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                width: "100vw",
                overflowY: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingTop: 32,
                paddingBottom: 40,
                background: `radial-gradient(circle, ${colors.offWhite} 0%, ${colors.purpleLight} 100%)`,
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "center top",
                    width: 760,
                }}
            >
                <div
                    style={{
                        backgroundColor: colors.whiteSoft,
                        padding: 28,
                        borderRadius: 30,
                        boxShadow: "0px 6px 22px rgba(0,0,0,0.10)",
                        width: "100%",
                    }}
                >
                    {/* TITLE */}
                    <h1
                        style={{
                            fontSize: 26,
                            fontWeight: 700,
                            color: colors.purpleDark,
                            marginTop: 0,
                            marginBottom: 10,
                        }}
                    >
                        Terms & Conditions
                    </h1>

                    {/* INTRO */}
                    <p style={paragraph}>
                        LIWA helps people navigate public spaces more safely through community
                        reports and smart route suggestions. By using the app, you agree to the
                        terms below.
                    </p>

                    {/* CARD 1 – AGE REQUIREMENT */}
                    <div style={cardBox}>
                        <div style={{ ...sectionTitleBase, marginTop: 0 }}>
                            Age Requirement
                        </div>
                        <p style={paragraph}>You must be 18 years or older to use LIWA.</p>
                    </div>

                    {/* CARD 2 – USING LIWA RESPONSIBLY */}
                    <div style={cardBox}>
                        <div style={{ ...sectionTitleBase, marginTop: 0 }}>
                            Using LIWA Responsibly
                        </div>

                        <p style={paragraph}>
                            By using the app, you agree to follow our Community Guidelines:
                        </p>

                        <ul style={listStyle}>
                            <li>No false or exaggerated reports</li>
                            <li>No harassment, spam, or harmful content</li>
                            <li>No misuse of safety tools</li>
                        </ul>

                        <p style={paragraph}>
                            Breaking these rules may lead to warnings, suspension, or a permanent ban.
                        </p>
                    </div>

                    {/* CARD 3 – PRIVACY + INCIDENT + CONTENT + USER RESPONSIBILITY + ACCOUNT + PROHIBITED + LIMITATIONS */}
                    <div style={cardBox}>
                        <div style={{ ...sectionTitleBase, marginTop: 0 }}>
                            Privacy & Safety First
                        </div>

                        <p style={paragraph}>Your privacy is protected by default:</p>

                        <ul style={listStyle}>
                            <li>Location sharing is off unless you enable it</li>
                            <li>You can change or remove permissions anytime</li>
                            <li>Only essential data is collected</li>
                            <li>Route suggestions prioritize safer, verified paths</li>
                        </ul>

                        <p style={paragraph}>
                            Your location is stored approximately (not exact), encrypted,
                            anonymized, and deleted after set periods. LIWA does not track you
                            in the background when the app is closed.
                        </p>

                        <div style={{ ...sectionTitleBase, marginTop: 16 }}>
                            Incident Reporting
                        </div>

                        <p style={paragraph}>
                            You can report anonymously or with a nickname. Reports must:
                        </p>

                        <ul style={listStyle}>
                            <li>Be honest and accurate</li>
                            <li>Not target individuals or invent situations</li>
                            <li>Not spam or flood the system</li>
                        </ul>

                        <div style={{ ...sectionTitleBase, marginTop: 16 }}>
                            Content Rules
                        </div>
                        <p style={paragraph}>
                            Do not upload harmful, graphic, staged, or misleading content.
                            Violations may result in account action.
                        </p>

                        <div style={{ ...sectionTitleBase, marginTop: 16 }}>
                            User Responsibility
                        </div>
                        <p style={paragraph}>
                            Provide honest feedback based on real experiences. Do not manipulate
                            route data, ratings, or reports.
                        </p>

                        <div style={{ ...sectionTitleBase, marginTop: 16 }}>
                            Account Security
                        </div>
                        <p style={paragraph}>
                            You may use LIWA anonymously. If you create an account, protect your
                            login info and enable 2FA.
                        </p>

                        <div style={{ ...sectionTitleBase, marginTop: 16 }}>
                            Strictly Prohibited
                        </div>

                        <ul style={listStyle}>
                            <li>Tracking or monitoring others without consent</li>
                            <li>Extracting private information</li>
                            <li>Impersonating officials or others</li>
                            <li>Submitting automated or spam reports</li>
                            <li>Using LIWA to stalk, harass, or harm anyone</li>
                        </ul>

                        <div style={{ ...sectionTitleBase, marginTop: 16 }}>
                            Limitations
                        </div>
                        <p style={paragraph}>
                            LIWA is a safety tool, not a replacement for emergency services.
                            Use judgment and contact authorities if needed.
                        </p>
                    </div>

                    {/* CARD 4 – YOUR DATA RIGHTS + AI + ENFORCEMENT + COMMITMENT + ACCEPTANCE */}
                    <div style={cardBox}>
                        <div style={{ ...sectionTitleBase, marginTop: 0 }}>
                            Your Data Rights
                        </div>
                        <p style={paragraph}>
                            You may view, edit, export, or delete your data anytime. LIWA also
                            publishes transparency reports related to safety and moderation.
                        </p>

                        <div style={{ ...sectionTitleBase, marginTop: 16 }}>
                            AI Safety Checks
                        </div>
                        <p style={paragraph}>
                            AI helps detect spam, suspicious patterns, and duplicate reports.
                            Flagged content is reviewed before appearing publicly.
                        </p>

                        <div style={{ ...sectionTitleBase, marginTop: 16 }}>
                            Enforcement
                        </div>
                        <p style={paragraph}>
                            Accounts involved in harmful activity may be suspended or removed.
                            Severe violations may be escalated to authorities.
                        </p>

                        <div style={{ ...sectionTitleBase, marginTop: 16 }}>
                            Our Commitment
                        </div>
                        <p style={paragraph}>
                            LIWA follows Safety by Design principles—prioritizing prevention,
                            transparency, user control, and community well-being.
                        </p>

                        <div style={{ ...sectionTitleBase, marginTop: 16 }}>
                            Acceptance
                        </div>
                        <p style={paragraph}>By continuing, you confirm that:</p>

                        <ul style={listStyle}>
                            <li>You are at least 18 years old</li>
                            <li>You agree to these terms and community guidelines</li>
                            <li>You will use LIWA responsibly to help keep the community safe</li>
                        </ul>
                    </div>

                    {/* BUTTON */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: 12,
                        }}
                    >
                        <button
                            onClick={() => {
                                onClose?.();
                                navigate("/home");
                            }}
                            style={{
                                border: "none",
                                backgroundColor: colors.purpleLight,
                                padding: "10px 28px",
                                borderRadius: 20,
                                fontSize: 14,
                                fontWeight: 600,
                                color: colors.purpleDark,
                                cursor: "pointer",
                                boxShadow: "0px 4px 12px rgba(0,0,0,0.10)",
                            }}
                        >
                            I accept
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
