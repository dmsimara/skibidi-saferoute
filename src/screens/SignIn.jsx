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

export default function SignIn() {
    const navigate = useNavigate();

    // --------------------------
    // FORM STATE
    // --------------------------
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    // --------------------------
    // SIGN IN HANDLER
    // --------------------------
    async function handleSignIn() {
        setErrorMsg("");

        if (!email || !password) {
            setErrorMsg("Please enter both email and password.");
            return;
        }

        try {
            setLoading(true);

            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                setErrorMsg(error.message || "Invalid login credentials.");
                return;
            }

            console.log("Signed in user:", data.user);

            navigate("/home");  
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

                <h2
                    style={{
                        fontSize: 24,
                        margin: 0,
                        fontWeight: 700,
                        color: colors.purple,
                    }}
                >
                    Welcome
                </h2>

                <p
                    style={{
                        color: colors.purpleDark,
                        opacity: 0.7,
                        marginTop: 4,
                        marginBottom: 30,
                        fontSize: 14,
                    }}
                >
                    Please enter your details to Sign in.
                </p>

                {/* -------------------------
                    EMAIL INPUT
                ------------------------- */}
                <label
                    style={{
                        display: "block",
                        textAlign: "left",
                        color: colors.purpleDark,
                        fontSize: 13,
                        fontWeight: 600,
                        marginBottom: 6,
                    }}
                >
                    Email or Phone Number
                </label>

                <div
                    style={{
                        width: "95%",
                        background: "#F4F4FF",
                        borderRadius: 12,
                        display: "flex",
                        alignItems: "center",
                        padding: "12px 14px",
                        marginBottom: 18,
                    }}
                >
                    <img
                        src={emailIcon}
                        alt="email"
                        style={{ width: 18, opacity: 0.7, marginRight: 10 }}
                    />
                    <input
                        type="text"
                        placeholder="Enter your email or phone number"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            border: "none",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                            fontSize: 14,
                            color: colors.purpleDark,
                        }}
                    />
                </div>

                {/* -------------------------
                    PASSWORD INPUT
                ------------------------- */}
                <label
                    style={{
                        display: "block",
                        textAlign: "left",
                        color: colors.purpleDark,
                        fontSize: 13,
                        fontWeight: 600,
                        marginBottom: 6,
                    }}
                >
                    Password
                </label>

                <div
                    style={{
                        width: "95%",
                        background: "#F4F4FF",
                        borderRadius: 12,
                        display: "flex",
                        alignItems: "center",
                        padding: "12px 14px",
                        marginBottom: 18,
                    }}
                >
                    <img
                        src={passwordIcon}
                        alt="password"
                        style={{ width: 18, opacity: 0.7, marginRight: 10 }}
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            border: "none",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                            fontSize: 14,
                            color: colors.purpleDark,
                        }}
                    />
                </div>

                {/* ERROR MESSAGE */}
                {errorMsg && (
                    <p
                        style={{
                            color: "#E32626",
                            fontSize: 13,
                            marginBottom: 10,
                            textAlign: "left",
                            width: "95%",
                        }}
                    >
                        {errorMsg}
                    </p>
                )}

                {/* REMEMBER + FORGOT */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 22,
                        fontSize: 14,
                        color: colors.purpleDark,
                    }}
                >
                    <div
                        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                        onClick={() => setRememberMe(!rememberMe)}
                    >
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            readOnly
                            style={{ marginRight: 6 }}
                        />
                        Remember me
                    </div>

                    <span style={{ cursor: "pointer", textDecoration: "underline" }}>
                        Forgot Password?
                    </span>
                </div>

                {/* -------------------------
                    SIGN IN BUTTON (WITH HOVER)
                ------------------------- */}
                <button
                    onClick={handleSignIn}
                    disabled={loading}
                    onMouseEnter={(e) => {
                        e.target.style.background = "white";
                        e.target.style.color = colors.purple;
                        e.target.style.border = `2px solid ${colors.purple}`;
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = colors.purple;
                        e.target.style.color = "white";
                        e.target.style.border = "none";
                    }}
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
                >
                    {loading ? "Signing in..." : "Sign in"}
                </button>

                {/* OR DIVIDER */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "20px 0",
                    }}
                >
                    <div style={{ flex: 1, height: 1, background: "#DDD", opacity: 0.6 }} />
                    <span
                        style={{
                            margin: "0 12px",
                            color: colors.purpleDark,
                            opacity: 0.7,
                            fontSize: 13,
                            fontWeight: 600,
                        }}
                    >
                        OR
                    </span>
                    <div style={{ flex: 1, height: 1, background: "#DDD", opacity: 0.6 }} />
                </div>

                {/* SOCIAL BUTTONS */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 12,
                        marginBottom: 18,
                    }}
                >
                    <button
                        style={socialBtnStyle}
                        onClick={() => alert("Facebook login coming soon")}
                    >
                        <img src={facebookIcon} style={{ width: 16 }} alt="" /> Facebook
                    </button>

                    <button
                        style={socialBtnStyle}
                        onClick={() => alert("Google login coming soon")}
                    >
                        <img src={googleIcon} style={{ width: 16 }} alt="" /> Google
                    </button>

                    <button
                        style={socialBtnStyle}
                        onClick={() => alert("Apple login coming soon")}
                    >
                        <img src={appleIcon} style={{ width: 16 }} alt="" /> Apple
                    </button>
                </div>

                {/* SIGNUP LINK */}
                <p style={{ fontSize: 14, color: colors.purpleDark }}>
                    Don’t have an account?{" "}
                    <span
                        style={{ fontWeight: 700, cursor: "pointer" }}
                        onClick={() => navigate("/signup")}
                    >
                        Sign up
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

// Reusable style
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
    color: colors?.purpleDark || "#4B3EC8",
};
