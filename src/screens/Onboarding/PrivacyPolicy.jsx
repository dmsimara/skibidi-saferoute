import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import colors from "../../styles/colors";

export default function PrivacyPolicy({ onClose }) {
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

    // UPDATED TIGHT SPACING SYSTEM
    const sectionTitle = {
        fontWeight: 700,
        color: colors.purpleDark,
        fontSize: 16,
        marginTop: 4,
        marginBottom: 4,
    };

    const paragraph = {
        fontSize: 14,
        lineHeight: 1.45,
        opacity: 0.85,
        marginBottom: 8,
    };

    const listStyle = {
        paddingLeft: 20,
        fontSize: 14,
        opacity: 0.85,
        lineHeight: 1.4,
        marginTop: -2,
        marginBottom: 8,
    };

    const cardBox = {
        backgroundColor: "#F8F8FF",
        padding: "14px 18px",
        borderRadius: 12,
        marginBottom: 12, // tightened
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
                        Privacy Policy
                    </h1>

                    {/* INTRO */}
                    <p style={paragraph}>
                        SafeRoute is committed to protecting your privacy and ensuring the
                        security of your personal information. This Privacy Policy explains
                        how we collect, use, store, and protect your data, your rights as a
                        user, and how you can manage your privacy settings.
                    </p>

                    {/* SECTION 1 */}
                    <div style={cardBox}>
                        <div style={{ ...sectionTitle, marginTop: 0 }}>1. Information We Collect</div>

                        <p style={paragraph}>
                            We collect only data necessary to provide safe and reliable navigation services.
                        </p>

                        <div style={sectionTitle}>a. Personal Information (Optional)</div>
                        <ul style={listStyle}>
                            <li>Name, email, phone number (only if you create an account).</li>
                            <li>Consent-based information for verified contributors or moderators.</li>
                        </ul>

                        <div style={sectionTitle}>b. Location Data</div>
                        <ul style={listStyle}>
                            <li>Approximate location (e.g., city or barangay level).</li>
                            <li>Location sharing is disabled by default; you may enable it voluntarily.</li>
                        </ul>

                        <div style={sectionTitle}>c. Incident Reports</div>
                        <ul style={listStyle}>
                            <li>Reports of harassment, unsafe routes, or other safety concerns.</li>
                            <li>Media uploads are automatically blurred/redacted.</li>
                        </ul>

                        <div style={sectionTitle}>d. Device & Usage Information</div>
                        <ul style={listStyle}>
                            <li>Device type, operating system, and app usage patterns.</li>
                            <li>Crash reports and technical logs for app maintenance.</li>
                        </ul>
                    </div>

                    {/* SECTION 2 */}
                    <div style={cardBox}>
                        <div style={{ ...sectionTitle, marginTop: 0 }}>
                            2. How We Use Your Information
                        </div>

                        <ul style={listStyle}>
                            <li>Provide route guidance and safety scoring.</li>
                            <li>Allow community reporting of unsafe areas or incidents.</li>
                            <li>Improve app functionality and user experience.</li>
                            <li>Protect users’ privacy and prevent misuse or abuse.</li>
                            <li>Conduct anonymized research and analytics.</li>
                        </ul>

                        <p style={paragraph}>
                            We do not sell or trade your personal information to third parties.
                        </p>
                    </div>

                    {/* SECTION 3 */}
                    <div style={cardBox}>
                        <div style={{ ...sectionTitle, marginTop: 0 }}>
                            3. How We Share Information
                        </div>

                        <ul style={listStyle}>
                            <li>With emergency responders when safety is at risk.</li>
                            <li>With authorized moderators for incident review.</li>
                            <li>In anonymized form for safety trend analysis.</li>
                        </ul>

                        <p style={paragraph}>
                            We never disclose personal data for commercial use without consent.
                        </p>
                    </div>

                    {/* SECTION 4 */}
                    <div style={cardBox}>
                        <div style={{ ...sectionTitle, marginTop: 0 }}>
                            4. Data Retention & Security
                        </div>

                        <ul style={listStyle}>
                            <li>Data is stored only as long as necessary.</li>
                            <li>Personal identifiers are encrypted and anonymized.</li>
                            <li>No background tracking when the app is inactive.</li>
                            <li>Secure servers and restricted access protect your information.</li>
                        </ul>
                    </div>

                    {/* SECTION 5 */}
                    <div style={cardBox}>
                        <div style={{ ...sectionTitle, marginTop: 0 }}>
                            5. User Rights & Controls
                        </div>

                        <ul style={listStyle}>
                            <li>Access, edit, export, or delete personal data anytime.</li>
                            <li>Enable or disable location sharing at any point.</li>
                            <li>Withdraw consent for any feature.</li>
                            <li>Report harmful behavior or misuse directly via the app.</li>
                        </ul>
                    </div>

                    {/* SECTION 6 */}
                    <div style={cardBox}>
                        <div style={{ ...sectionTitle, marginTop: 0 }}>
                            6. Consent & Permissions
                        </div>

                        <ul style={listStyle}>
                            <li>SafeRoute operates entirely on explicit user consent.</li>
                            <li>Users control camera, location, and notification permissions.</li>
                            <li>Revoking permissions may affect certain features.</li>
                        </ul>
                    </div>

                    {/* SECTION 7 */}
                    <div style={cardBox}>
                        <div style={{ ...sectionTitle, marginTop: 0 }}>
                            7. Anonymous Reporting & Safety
                        </div>

                        <ul style={listStyle}>
                            <li>You may report anonymously or with a pseudonym.</li>
                            <li>No personal data is required to submit reports.</li>
                            <li>Media is processed to remove identifying information.</li>
                            <li>False or abusive reports may lead to account suspension.</li>
                        </ul>
                    </div>

                    {/* SECTION 8 */}
                    <div style={cardBox}>
                        <div style={{ ...sectionTitle, marginTop: 0 }}>
                            8. Children’s Privacy
                        </div>

                        <p style={paragraph}>
                            SafeRoute is intended for users aged 18+. If children's data is detected,
                            it will be removed immediately.
                        </p>
                    </div>

                    {/* SECTION 9 */}
                    <div style={cardBox}>
                        <div style={{ ...sectionTitle, marginTop: 0 }}>
                            9. Updates to This Privacy Policy
                        </div>

                        <ul style={listStyle}>
                            <li>We may update this policy periodically.</li>
                            <li>Major updates will be communicated via the app or email.</li>
                            <li>Continued app use signifies acceptance of updates.</li>
                        </ul>
                    </div>

                    {/* SECTION 10 */}
                    <div style={cardBox}>
                        <div style={{ ...sectionTitle, marginTop: 0 }}>
                            10. Contact Us
                        </div>

                        <p style={paragraph}>For privacy-related questions:</p>

                        <ul style={listStyle}>
                            <li>Email: liwa@gmail.com</li>
                            <li>Contact Number/s: Add as needed</li>
                        </ul>
                    </div>

                    {/* CLOSE BUTTON */}
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
                            Close
                        </button>
                    </div>

                </div>
            </motion.div>
        </div>
    );
}
