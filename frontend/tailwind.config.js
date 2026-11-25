/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        sans: ["Figtree", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"]
      },
      colors: {
        ink: {
          950: "#020617",
          900: "#0b1220",
          800: "#111827"
        },
        signal: {
          DEFAULT: "#22d3ee",
          soft: "#67e8f9",
          deep: "#0891b2"
        },
        mint: {
          DEFAULT: "#34d399",
          soft: "#6ee7b7"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.18)",
        panel: "0 20px 50px rgba(2, 6, 23, 0.55)"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)"
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.45s ease-out both",
        floaty: "floaty 7s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
