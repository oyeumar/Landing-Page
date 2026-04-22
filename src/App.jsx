import React, { useEffect, useState } from 'react';

const metrics = [
  {
    label: 'Uptime',
    value: 99.98,
    format: (value) => `${value.toFixed(2)}%`,
  },
  {
    label: 'Assets secured',
    value: 2400,
    format: (value) => `$${(value / 1000).toFixed(1)}T`,
  },
  {
    label: 'Latency',
    value: 12,
    format: (value) => `< ${Math.max(1, Math.round(value))}ms`,
  },
  {
    label: 'Signals monitored',
    value: 184,
    format: (value) => `${Math.round(value)}M`,
  },
];

const featureCards = [
  {
    icon: '⌬',
    title: 'Autonomous controls',
    description:
      'Route approvals, anomaly detection, and settlement checks through a single policy engine that explains every decision before capital moves.',
  },
  {
    icon: '◌',
    title: 'Confidential inference',
    description:
      'Keep prompts, features, and outputs inside encrypted execution paths so proprietary models never leak institutional memory.',
  },
  {
    icon: '⟠',
    title: 'Precision telemetry',
    description:
      'Watch latency, cost, and exposure in real time with event-level traces that preserve compliance evidence by default.',
  },
];

const partners = [
  'Northstar Bank',
  'Helix Treasury',
  'Arclight Capital',
  'Parallax Payments',
  'Vector Ledger',
  'Citadel Grid',
  'Motive Markets',
  'Aster Clearing',
];

const floatingHexes = [
  { text: '0x7E1F', left: '5%', top: '70%', size: '0.78rem', delay: '0s', duration: '16s' },
  { text: '0xA94C', left: '14%', top: '84%', size: '0.68rem', delay: '2s', duration: '18s' },
  { text: '0x1C9D', left: '22%', top: '64%', size: '0.72rem', delay: '5s', duration: '19s' },
  { text: '0xF02B', left: '36%', top: '78%', size: '0.72rem', delay: '1s', duration: '15s' },
  { text: '0x5B8E', left: '48%', top: '88%', size: '0.74rem', delay: '4s', duration: '20s' },
  { text: '0xC31A', left: '60%', top: '72%', size: '0.68rem', delay: '7s', duration: '17s' },
  { text: '0x8D4F', left: '69%', top: '90%', size: '0.7rem', delay: '3s', duration: '21s' },
  { text: '0x3F9C', left: '77%', top: '63%', size: '0.74rem', delay: '6s', duration: '16s' },
  { text: '0xD18A', left: '86%', top: '82%', size: '0.66rem', delay: '0.5s', duration: '18s' },
  { text: '0x4EA7', left: '92%', top: '68%', size: '0.72rem', delay: '8s', duration: '22s' },
];

const App = () => {
  const [countValues, setCountValues] = useState(metrics.map(() => 0));

  useEffect(() => {
    const fontId = 'cipher-font-links';

    if (!document.getElementById(fontId)) {
      const preconnectGoogle = document.createElement('link');
      preconnectGoogle.rel = 'preconnect';
      preconnectGoogle.href = 'https://fonts.googleapis.com';

      const preconnectStatic = document.createElement('link');
      preconnectStatic.rel = 'preconnect';
      preconnectStatic.href = 'https://fonts.gstatic.com';
      preconnectStatic.crossOrigin = 'anonymous';

      const stylesheet = document.createElement('link');
      stylesheet.id = fontId;
      stylesheet.rel = 'stylesheet';
      stylesheet.href =
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap';

      document.head.appendChild(preconnectGoogle);
      document.head.appendChild(preconnectStatic);
      document.head.appendChild(stylesheet);
    }

    document.body.style.margin = '0';
    document.body.style.background = '#030303';
    document.body.style.color = '#F8FAFC';
    document.body.style.fontFamily = 'Inter, system-ui, sans-serif';
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  useEffect(() => {
    let animationFrame = 0;
    const duration = 1800;
    const startedAt = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCountValues(metrics.map((metric) => metric.value * eased));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="cipher-app">
      <style>{`
        :root {
          --bg: #030303;
          --bg-soft: rgba(255, 255, 255, 0.04);
          --panel: rgba(8, 8, 12, 0.66);
          --panel-border: rgba(255, 255, 255, 0.1);
          --text: #f8fafc;
          --muted: rgba(226, 232, 240, 0.72);
          --line: rgba(148, 163, 184, 0.18);
          --violet: #8b5cf6;
          --violet-glow: rgba(139, 92, 246, 0.42);
          --cyan: #06b6d4;
          --cyan-glow: rgba(6, 182, 212, 0.36);
          --serif: 'Instrument Serif', Georgia, serif;
          --sans: 'Inter', system-ui, sans-serif;
          --mono: 'IBM Plex Mono', 'SFMono-Regular', Consolas, monospace;
        }

        * {
          box-sizing: border-box;
        }

        html {
          background: var(--bg);
        }

        body {
          background:
            radial-gradient(circle at top, rgba(139, 92, 246, 0.14), transparent 32%),
            radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.12), transparent 24%),
            var(--bg);
          color: var(--text);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .cipher-app {
          min-height: 100vh;
          background: var(--bg);
          overflow: hidden;
        }

        .page-shell {
          position: relative;
          isolation: isolate;
        }

        .section-reveal {
          opacity: 0;
          transform: translateY(24px);
          animation: rise 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: var(--delay, 0ms);
        }

        .hero {
          position: relative;
          min-height: 100vh;
          display: grid;
          align-items: center;
          padding: 1.25rem;
        }

        .hero-inner,
        .metrics-inner,
        .features-inner,
        .trust-inner,
        .cta-inner,
        .footer-inner {
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 1.5rem;
          align-items: center;
          grid-template-columns: 1fr;
          padding: 5rem 0 2rem;
        }

        .hero-copy-block {
          max-width: 42rem;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.5rem 0.85rem;
          margin-bottom: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.03);
          color: rgba(248, 250, 252, 0.8);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          backdrop-filter: blur(14px);
        }

        .eyebrow::before {
          content: '';
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 999px;
          background: linear-gradient(135deg, var(--violet), var(--cyan));
          box-shadow: 0 0 18px var(--violet-glow);
        }

        .hero-title,
        .cta-title {
          margin: 0;
          font-family: var(--serif);
          font-size: clamp(3.4rem, 9vw, 7.8rem);
          line-height: 0.92;
          letter-spacing: -0.04em;
          font-weight: 400;
        }

        .shimmer-text {
          display: inline-block;
          background: linear-gradient(90deg, #ffffff 0%, #a78bfa 30%, #06b6d4 60%, #ffffff 100%);
          background-size: 280% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 7s linear infinite;
          text-shadow: 0 0 28px rgba(255, 255, 255, 0.08);
        }

        .hero-copy {
          max-width: 38rem;
          margin: 1.25rem 0 0;
          color: var(--muted);
          font-size: clamp(1rem, 2vw, 1.15rem);
          line-height: 1.75;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.875rem;
          margin-top: 1.6rem;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3.25rem;
          padding: 0.85rem 1.25rem;
          border-radius: 999px;
          border: 1px solid transparent;
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            border-color 180ms ease,
            background 180ms ease;
          will-change: transform;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .button-primary {
          background: linear-gradient(135deg, var(--violet), #6d28d9 58%, var(--cyan));
          color: white;
          box-shadow: 0 18px 40px rgba(139, 92, 246, 0.22);
        }

        .button-primary:hover {
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.05),
            0 18px 44px rgba(139, 92, 246, 0.32),
            0 0 36px rgba(6, 182, 212, 0.16);
        }

        .button-ghost {
          border-color: rgba(6, 182, 212, 0.36);
          background: rgba(255, 255, 255, 0.03);
          color: rgba(226, 232, 240, 0.96);
        }

        .button-ghost:hover {
          border-color: rgba(6, 182, 212, 0.62);
          box-shadow: 0 0 0 1px rgba(6, 182, 212, 0.1), 0 0 26px rgba(6, 182, 212, 0.16);
        }

        .hero-panel {
          position: relative;
          padding: 1.25rem;
          border: 1px solid var(--panel-border);
          border-radius: 1.75rem;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03)),
            var(--panel);
          backdrop-filter: blur(20px) saturate(145%);
          box-shadow:
            0 24px 80px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .hero-panel::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.65), rgba(6, 182, 212, 0.46), transparent 62%);
          mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0.7;
        }

        .panel-label {
          margin: 0 0 1rem;
          color: rgba(226, 232, 240, 0.62);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .panel-title {
          margin: 0;
          font-family: var(--serif);
          font-size: clamp(1.85rem, 4vw, 2.65rem);
          font-weight: 400;
          line-height: 1.02;
        }

        .panel-copy {
          margin: 0.95rem 0 1.25rem;
          color: var(--muted);
          line-height: 1.75;
        }

        .panel-list {
          display: grid;
          gap: 0.75rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .panel-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.8rem 0.9rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.03);
        }

        .panel-badge {
          width: 2rem;
          height: 2rem;
          display: grid;
          place-items: center;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.22), rgba(6, 182, 212, 0.18));
          color: white;
          font-family: var(--mono);
          font-size: 0.72rem;
        }

        .panel-list strong {
          display: block;
          margin-bottom: 0.15rem;
          color: rgba(248, 250, 252, 0.96);
          font-size: 0.92rem;
        }

        .panel-list span {
          color: rgba(226, 232, 240, 0.68);
          font-size: 0.88rem;
          line-height: 1.45;
        }

        .mesh {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .mesh::before,
        .mesh::after,
        .mesh .mesh-third {
          content: '';
          position: absolute;
          filter: blur(32px);
          opacity: 0.9;
          mix-blend-mode: screen;
          transform: translate3d(0, 0, 0);
        }

        .mesh::before {
          width: 38rem;
          height: 38rem;
          left: -10%;
          top: -8%;
          background: radial-gradient(circle at 35% 35%, rgba(139, 92, 246, 0.72), rgba(139, 92, 246, 0.08) 58%, transparent 72%);
          animation: blobOne 24s ease-in-out infinite;
        }

        .mesh::after {
          width: 32rem;
          height: 32rem;
          right: -8%;
          top: 8%;
          background: radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.7), rgba(6, 182, 212, 0.08) 56%, transparent 72%);
          animation: blobTwo 28s ease-in-out infinite;
        }

        .mesh .mesh-third {
          width: 30rem;
          height: 30rem;
          left: 32%;
          bottom: -14%;
          background: radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.45), rgba(139, 92, 246, 0.03) 56%, transparent 72%);
          animation: blobThree 30s ease-in-out infinite;
        }

        .cipher-float {
          position: absolute;
          color: rgba(191, 219, 254, 0.7);
          font-family: var(--mono);
          letter-spacing: 0.14em;
          text-shadow: 0 0 18px rgba(6, 182, 212, 0.18);
          animation: floatUp linear infinite;
          user-select: none;
        }

        .metrics-strip {
          padding: 0 1.25rem 2rem;
        }

        .metrics-bar {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          padding: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .metric-card {
          padding: 1rem 1rem 1.1rem;
          border-radius: 1.1rem;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
        }

        .metric-value {
          display: block;
          color: var(--violet);
          font-family: var(--mono);
          font-size: clamp(1.4rem, 3vw, 1.8rem);
          font-weight: 700;
          letter-spacing: -0.04em;
        }

        .metric-label {
          margin-top: 0.35rem;
          color: rgba(226, 232, 240, 0.72);
          font-family: var(--mono);
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .features {
          padding: 2rem 1.25rem 1rem;
        }

        .section-heading {
          margin: 0 0 0.9rem;
          color: rgba(248, 250, 252, 0.86);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .section-title {
          margin: 0;
          max-width: 40rem;
          font-family: var(--serif);
          font-size: clamp(2.1rem, 5vw, 4rem);
          line-height: 1;
          font-weight: 400;
        }

        .section-copy {
          max-width: 40rem;
          margin: 1rem 0 0;
          color: var(--muted);
          line-height: 1.7;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-top: 1.6rem;
        }

        .feature-card {
          position: relative;
          padding: 1.35rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(20px);
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            border-color 220ms ease;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.14), transparent 36%, rgba(6, 182, 212, 0.12));
          opacity: 0;
          transition: opacity 220ms ease;
          pointer-events: none;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          border-color: rgba(139, 92, 246, 0.34);
          box-shadow:
            0 22px 44px rgba(0, 0, 0, 0.42),
            0 0 0 1px rgba(139, 92, 246, 0.08),
            0 0 40px rgba(139, 92, 246, 0.12);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-icon {
          width: 2.8rem;
          height: 2.8rem;
          display: grid;
          place-items: center;
          border-radius: 0.9rem;
          margin-bottom: 1rem;
          color: white;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.35), rgba(6, 182, 212, 0.2));
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.12);
          font-size: 1.35rem;
        }

        .feature-title {
          margin: 0;
          font-family: var(--serif);
          font-size: 1.65rem;
          font-weight: 400;
          line-height: 1;
        }

        .feature-copy {
          margin: 0.85rem 0 0;
          color: var(--muted);
          line-height: 1.72;
        }

        .trust {
          padding: 2rem 1.25rem 1rem;
        }

        .marquee {
          position: relative;
          overflow: hidden;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          padding: 1rem 0;
          mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%);
        }

        .marquee-track {
          display: flex;
          width: max-content;
          gap: 0.75rem;
          animation: marquee 28s linear infinite;
        }

        .partner-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 2.75rem;
          padding: 0.6rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.03);
          color: rgba(226, 232, 240, 0.86);
          white-space: nowrap;
          font-family: var(--mono);
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .trust-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .trust-badge {
          padding: 0.65rem 0.9rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.03);
          color: rgba(248, 250, 252, 0.78);
          font-family: var(--mono);
          font-size: 0.74rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .cta {
          padding: 3.25rem 1.25rem 3.5rem;
        }

        .cta-card {
          position: relative;
          padding: clamp(2rem, 6vw, 4.2rem) 1.35rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 2rem;
          background:
            radial-gradient(circle at top, rgba(139, 92, 246, 0.12), transparent 32%),
            rgba(255, 255, 255, 0.03);
          text-align: center;
          overflow: hidden;
        }

        .cta-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 20%, rgba(6, 182, 212, 0.08), transparent 72%);
          pointer-events: none;
        }

        .cta-title {
          max-width: 15ch;
          margin: 0 auto;
        }

        .cta-copy {
          max-width: 48rem;
          margin: 1rem auto 0;
          color: var(--muted);
          line-height: 1.75;
        }

        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.875rem;
          margin-top: 1.6rem;
        }

        .footer {
          padding: 0 1.25rem 2rem;
        }

        .footer-inner {
          border-top: 1px solid var(--line);
          padding-top: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          color: rgba(226, 232, 240, 0.72);
        }

        .footer-meta,
        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          font-family: var(--mono);
          font-size: 0.74rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .footer-nav a {
          color: rgba(226, 232, 240, 0.72);
          transition: color 180ms ease;
        }

        .footer-nav a:hover {
          color: white;
        }

        @media (min-width: 768px) {
          .hero {
            padding: 1.75rem;
          }

          .hero-inner {
            gap: 2rem;
          }

          .metrics-strip,
          .features,
          .trust,
          .cta,
          .footer {
            padding-left: 1.75rem;
            padding-right: 1.75rem;
          }

          .metrics-bar {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .features-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .feature-card:first-child {
            grid-column: span 2;
          }

          .footer-inner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        @media (min-width: 1024px) {
          .hero-inner {
            grid-template-columns: minmax(0, 1.35fr) minmax(360px, 0.82fr);
            gap: 2.5rem;
            padding: 6rem 0 2.5rem;
          }

          .metrics-bar {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .features-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .feature-card:first-child {
            grid-column: span 2;
          }

          .hero-copy {
            max-width: 34rem;
          }
        }

        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 300% 50%;
          }
        }

        @keyframes blobOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            border-radius: 45% 55% 58% 42% / 44% 43% 57% 56%;
          }
          50% {
            transform: translate3d(7%, 8%, 0) scale(1.1);
            border-radius: 54% 46% 43% 57% / 52% 34% 66% 48%;
          }
        }

        @keyframes blobTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            border-radius: 58% 42% 44% 56% / 40% 50% 50% 60%;
          }
          50% {
            transform: translate3d(-8%, 6%, 0) scale(1.08);
            border-radius: 38% 62% 58% 42% / 52% 46% 54% 48%;
          }
        }

        @keyframes blobThree {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            border-radius: 49% 51% 38% 62% / 54% 42% 58% 46%;
          }
          50% {
            transform: translate3d(5%, -7%, 0) scale(1.12);
            border-radius: 62% 38% 55% 45% / 39% 59% 41% 61%;
          }
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          15% {
            opacity: 0.52;
          }
          100% {
            transform: translateY(-44vh) translateX(12px);
            opacity: 0;
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <main className="page-shell">
        <section className="hero section-reveal" style={{ '--delay': '0ms' }}>
          <div className="mesh" aria-hidden="true">
            <span className="mesh-third" />
            {floatingHexes.map((item) => (
              <span
                key={`${item.text}-${item.left}`}
                className="cipher-float"
                style={{
                  left: item.left,
                  top: item.top,
                  fontSize: item.size,
                  animationDelay: item.delay,
                  animationDuration: item.duration,
                }}
              >
                {item.text}
              </span>
            ))}
          </div>

          <div className="hero-inner">
            <div className="hero-copy-block">
              <div className="eyebrow">CIPHER // Intelligence. Encrypted.</div>
              <h1 className="hero-title">
                <span className="shimmer-text">Intelligence. Encrypted.</span>
              </h1>
              <p className="hero-copy">
                CIPHER hardens AI-driven treasury, payments, and risk operations with governed automation,
                encrypted inference, and audit-ready observability. Ship faster without letting the model
                outrun your controls.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#cta">
                  Request a private pilot
                </a>
                <a className="button button-ghost" href="#platform">
                  Explore the platform
                </a>
              </div>
            </div>

            <aside className="hero-panel" aria-label="CIPHER platform snapshot">
              <p className="panel-label">Encrypted control plane</p>
              <h2 className="panel-title">Decisioning that keeps capital, models, and compliance in lockstep.</h2>
              <p className="panel-copy">
                CIPHER turns model output into governed action: policy checks, secure execution, and live
                telemetry stitched into one operational surface.
              </p>
              <ul className="panel-list">
                <li>
                  <span className="panel-badge">01</span>
                  <div>
                    <strong>Policy before payout</strong>
                    <span>Every high-risk action passes through a programmable approval and evidence trail.</span>
                  </div>
                </li>
                <li>
                  <span className="panel-badge">02</span>
                  <div>
                    <strong>Confidential by design</strong>
                    <span>Prompts and features stay protected with encrypted execution paths and scoped access.</span>
                  </div>
                </li>
                <li>
                  <span className="panel-badge">03</span>
                  <div>
                    <strong>Latency you can budget</strong>
                    <span>Operational traces reveal exactly where time and cost accumulate across the workflow.</span>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="metrics-strip section-reveal" style={{ '--delay': '120ms' }}>
          <div className="metrics-inner">
            <div className="metrics-bar">
              {metrics.map((metric, index) => (
                <div className="metric-card" key={metric.label}>
                  <span className="metric-value">{metric.format(countValues[index] ?? 0)}</span>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="platform" className="features section-reveal" style={{ '--delay': '220ms' }}>
          <div className="features-inner">
            <p className="section-heading">Platform</p>
            <h2 className="section-title">A bento of controls for AI systems that move money.</h2>
            <p className="section-copy">
              The stack is designed for teams who want model velocity without losing traceability, policy
              enforcement, or encryption boundaries.
            </p>

            <div className="features-grid">
              {featureCards.map((card) => (
                <article className="feature-card" key={card.title}>
                  <div className="feature-icon" aria-hidden="true">
                    {card.icon}
                  </div>
                  <h3 className="feature-title">{card.title}</h3>
                  <p className="feature-copy">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust section-reveal" style={{ '--delay': '320ms' }}>
          <div className="trust-inner">
            <p className="section-heading">Trust</p>
            <h2 className="section-title">Built for institutions that cannot afford black-box confidence.</h2>
            <p className="section-copy">
              CIPHER slots into regulated operations where scrutiny is constant and trust must be earned with
              evidence, not adjectives.
            </p>

            <div className="marquee" aria-label="Partner and customer logos">
              <div className="marquee-track">
                {partners.concat(partners).map((partner, index) => (
                  <span className="partner-pill" key={`${partner}-${index}`}>
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            <div className="trust-grid" aria-label="Security badges">
              <span className="trust-badge">SOC 2 Type II</span>
              <span className="trust-badge">ISO 27001</span>
              <span className="trust-badge">PCI DSS Ready</span>
              <span className="trust-badge">Zero-Trust Access</span>
              <span className="trust-badge">Audit Logs by Default</span>
            </div>
          </div>
        </section>

        <section id="cta" className="cta section-reveal" style={{ '--delay': '420ms' }}>
          <div className="cta-inner">
            <div className="cta-card">
              <p className="section-heading">Get started</p>
              <h2 className="cta-title">
                <span className="shimmer-text">Ship intelligence into the financial stack without opening the vault.</span>
              </h2>
              <p className="cta-copy">
                Move from demo to deployment with a private CIPHER rollout that aligns product, risk, and
                compliance around one encrypted operating model.
              </p>
              <div className="cta-actions">
                <a className="button button-primary" href="mailto:hello@cipher.ai">
                  Start a private pilot
                </a>
                <a className="button button-ghost" href="#platform">
                  Read the architecture
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-meta">
              <span>© 2026 CIPHER</span>
              <span>Intelligence. Encrypted.</span>
            </div>
            <nav className="footer-nav" aria-label="Footer navigation">
              <a href="#platform">Platform</a>
              <a href="#cta">Security</a>
              <a href="#cta">Contact</a>
            </nav>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;