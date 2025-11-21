import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import colors from "../../styles/colors";
import liwaLogo from "../../assets/images/splash/logo-text.png";

export default function Splash({ onFinish }) {
  const [showLogo, setShowLogo] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showRipples, setShowRipples] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowRipples(true), 800);
    const t2 = setTimeout(() => setShowLogo(true), 1500);
    const t3 = setTimeout(() => setShowTagline(true), 2600);

    const t5 = setTimeout(() => onFinish(), 6000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t5);
    };
  }, [onFinish]);

  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random(),
    duration: 4 + Math.random() * 4,
    size: 2 + Math.random() * 4,
  }));

  const glowBalls = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    size: 450 + Math.random() * 350,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color:
      i % 3 === 0
        ? colors.purpleLight
        : i % 3 === 1
        ? colors.purple
        : colors.purpleDark,
    delay: Math.random() * 1.5,
  }));

  const ripples = [0, 1, 2];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        overflow: "hidden",
        background: `radial-gradient(circle, ${colors.offWhite}, ${colors.purpleLight})`,
      }}
    >

      {/* Glow balls (same look, less load) */}
      {glowBalls.map((ball) => (
        <motion.div
          key={ball.id}
          style={{
            position: "absolute",
            width: ball.size,
            height: ball.size,
            borderRadius: "50%",
            background: ball.color,
            filter: "blur(80px)",  
            opacity: 0.23,
            left: `${ball.x}%`,
            top: `${ball.y}%`,
            transform: "translate(-50%, -50%)",
            zIndex: -10,
            willChange: "transform, opacity",
          }}
          animate={{
            x: [0, 28, -22, 0],
            y: [0, -18, 12, 0],
            opacity: [0.17, 0.27, 0.21],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: ball.delay,
          }}
        />
      ))}

      {/* Floating dots */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "rgba(100, 80, 255, 0.4)",
            left: `${p.x}%`,
            top: `${p.y}%`,
            willChange: "transform, opacity",
          }}
          animate={{
            y: [-24, 24, -24],
            x: [-8, 8, -8],
            opacity: [0.3, 0.75, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Ripples (same) */}
      {showRipples &&
        ripples.map((r) => (
          <motion.div
            key={r}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              border: `2px solid rgba(100, 80, 255, 0.25)`,
              willChange: "width, height, opacity",
            }}
            initial={{ width: 0, height: 0, opacity: 0.9 }}
            animate={{ width: 450, height: 450, opacity: 0 }}
            transition={{
              duration: 2.4,
              delay: r * 0.4,
              ease: "easeOut",
            }}
          />
        ))}

      {/* Logo + Tagline */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        {showLogo && (
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.4,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            style={{ willChange: "transform, opacity" }}
          >
            <motion.img
              src={liwaLogo}
              alt="Liwa"
              style={{ width: 150, height: "auto" }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            />
          </motion.div>
        )}

        {showTagline && (
          <motion.p
            style={{
              marginTop: 18,
              fontSize: 18,
              color: colors.purpleDark,
              opacity: 0.85,
              fontWeight: 500,
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Where every journey shines safe.
          </motion.p>
        )}
      </div>
    </div>
  );
}
