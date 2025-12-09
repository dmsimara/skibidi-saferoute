import React, { useState } from "react"; 
import colors from "../styles/colors";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

// LOGO + ICONS
import logo from "../assets/images/splash/logo-title.png";
import emailIcon from "../assets/icons/icon-email.png";
import passwordIcon from "../assets/icons/icon-password.png";
import facebookIcon from "../assets/icons/icon-facebook.png";
import googleIcon from "../assets/icons/icon-google.png";
import appleIcon from "../assets/icons/icon-apple.png";

export default function SignUp() {
    const navigate = useNavigate();

    // --------------------------
    // FORM STATE
    // --------------------------
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthMM, setBirthMM] = useState("");
    const [birthDD, setBirthDD] = useState("");
    const [birthYYYY, setBirthYYYY] = useState("");

    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [loading, setLoading] = useState(false);

    // --------------------------
    // SIGN UP HANDLER
    // --------------------------
    async function handleSignUp() {
        setErrorMsg("");
        setSuccessMsg("");

        if (!email || !password) {
            setErrorMsg("Email and password are required.");
            return;
        }

        let birthdate = null;
        if (birthMM && birthDD && birthYYYY) {
            birthdate = `${birthYYYY}-${birthMM.padStart(2, "0")}-${birthDD.padStart(2, "0")}`;
        }

        try {
            setLoading(true);

            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: { birthdate: birthdate || null },
                },
            });

            if (error) {
                setErrorMsg(error.message);
                return;
            }

            // Inline success message instead of alert
            setSuccessMsg("Account created! Please check your email to confirm.");

            // Auto redirect after 2 seconds
            setTimeout(() => navigate("/signin"), 2000);

        } catch (err) {
            console.error(err);
            setErrorMsg("Something went wrong. Try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: `radial-gradient(circle, ${colors.offWhite} 0%, ${colors.purpleLight} 100%)`,
                overflow: "auto",
                padding: "40px 0",
            }}
        >
            {/* CARD */}
            <div
                style={{
                    maxWidth: "600px",
                    width: "90%",
                    background: "white",
                    borderRadius: "22px",
                    padding: "40px 45px",
                    boxShadow: "0px 8px 26px rgba(0,0,0,0.15)",
                    textAlign: "center",
                }}
            >
                {/* LOGO */}
                <img src={logo} alt="Liwa" style={{ width: 110, marginBottom: 20 }} />

                {/* TITLE */}
                <h2 style={{ fontSize: 24, margin: 0, fontWeight: 700, color: colors.purple }}>
                    Create Account
                </h2>

                <p style={{ color: colors.purpleDark, opacity: 0.7, marginTop: 4, marginBottom: 30, fontSize: 14 }}>
                    Please enter your details to sign up.
                </p>

                {/* EMAIL LABEL */}
                <label style={labelStyle}>Email</label>

                {/* EMAIL INPUT */}
                <InputRow>
                    <img src={emailIcon} alt="email" style={inputIconStyle} />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={inputStyle}
                    />
                </InputRow>

                {/* PASSWORD LABEL */}
                <label style={labelStyle}>Password</label>

                {/* PASSWORD INPUT */}
                <InputRow>
                    <img src={passwordIcon} alt="password" style={inputIconStyle} />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={inputStyle}
                    />
                </InputRow>

                {/* BIRTHDATE LABEL */}
                <label style={labelStyle}>Birthdate</label>

                {/* BIRTHDATE GROUP */}
                <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                    <input placeholder="MM" maxLength={2} value={birthMM} onChange={(e) => setBirthMM(e.target.value)} style={birthInputStyle} />
                    <input placeholder="DD" maxLength={2} value={birthDD} onChange={(e) => setBirthDD(e.target.value)} style={birthInputStyle} />
                    <input placeholder="YYYY" maxLength={4} value={birthYYYY} onChange={(e) => setBirthYYYY(e.target.value)} style={birthInputStyle} />
                </div>

                {/* ERROR MESSAGE (same style as SignIn) */}
                {errorMsg && (
                    <p style={{
                        color: "#E32626",
                        marginBottom: 10,
                        fontSize: 13,
                        textAlign: "left",
                        width: "95%",
                        fontWeight: 600
                    }}>
                        {errorMsg}
                    </p>
                )}

                {/* SUCCESS MESSAGE */}
                {successMsg && (
                    <p style={{
                        color: "#1A8F3A",
                        marginBottom: 10,
                        fontSize: 13,
                        textAlign: "left",
                        width: "95%",
                        fontWeight: 600
                    }}>
                        {successMsg}
                    </p>
                )}

                {/* SIGN UP BUTTON */}
                <button
                    onClick={handleSignUp}
                    disabled={loading}
                    style={{
                        width: "100%",
                        padding: "12px 0",
                        background: colors.purple,
                        color: "white",
                        fontWeight: 700,
                        border: "none",
                        borderRadius: 18,
                        fontSize: 15,
                        cursor: loading ? "default" : "pointer",
                        marginBottom: 20,
                        transition: "0.2s ease",
                        opacity: loading ? 0.6 : 1,
                    }}
                    onMouseEnter={(e) => {
                        if (!loading) {
                            e.target.style.background = "white";
                            e.target.style.color = colors.purple;
                            e.target.style.border = `2px solid ${colors.purple}`;
                        }
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = colors.purple;
                        e.target.style.color = "white";
                        e.target.style.border = "none";
                    }}
                >
                    {loading ? "Creating account..." : "Sign up"}
                </button>

                {/* SOCIAL BUTTONS */}
                <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 18 }}>
                    <button style={socialBtnStyle}><img src={facebookIcon} alt="facebook" style={{ width: 16 }} />Facebook</button>
                    <button style={socialBtnStyle}><img src={googleIcon} alt="google" style={{ width: 16 }} />Google</button>
                    <button style={socialBtnStyle}><img src={appleIcon} alt="apple" style={{ width: 16 }} />Apple</button>
                </div>

                {/* FOOTER LINK */}
                <p style={{ fontSize: 14, color: colors.purpleDark }}>
                    Already have an account?{" "}
                    <span style={{ fontWeight: 700, cursor: "pointer" }} onClick={() => navigate("/signin")}>
                        Sign in
                    </span>
                </p>

                {/* TERMS */}
                <p
                    style={{
                        fontSize: 11,
                        opacity: 0.6,
                        marginTop: 20,
                    }}
                >
                    By continuing, you agree to our{" "}
                    <span style={{ textDecoration: "underline" }}>Terms & Conditions</span>{" "}
                    and{" "}
                    <span style={{ textDecoration: "underline" }}>Privacy Policies</span>.
                </p>
            </div>
        </div>
    );
}

const InputRow = (props) => (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div style={{ width: "95%", background: "#F4F4FF", borderRadius: 12, display: "flex", alignItems: "center", padding: "12px 14px", marginBottom: 18 }}>
            {props.children}
        </div>
    </div>
);

const labelStyle = {
    display: "block",
    textAlign: "left",
    color: colors.purpleDark,
    fontSize: 13,
    fontWeight: 600,
    marginBottom: 6,
};

const inputStyle = {
    border: "none",
    outline: "none",
    background: "transparent",
    width: "100%",
    fontSize: 14,
    color: colors.purpleDark,
};

const inputIconStyle = { width: 18, opacity: 0.7, marginRight: 10 };

const birthInputStyle = {
    flex: 1,
    background: "#F4F4FF",
    borderRadius: 10,
    border: "none",
    padding: "10px 0",
    textAlign: "center",
    fontSize: 14,
    color: colors.purpleDark,
    outline: "none",
};

const socialBtnStyle = {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 14px",
    borderRadius: 12,
    background: "#F4F4FF",
    border: "2px solid #DDD",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 600,
    color: colors.purpleDark,
};
