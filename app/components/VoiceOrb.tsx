interface VoiceOrbProps {
  getLevel: () => number;
  getScale: () => number;
}

export default function VoiceOrb({ getLevel, getScale }: VoiceOrbProps) {
  return (
    <div className="voice-orb" aria-hidden="true">
      <svg viewBox="0 0 200 200" className="orb-visual">
        <defs>
          <radialGradient id="orbGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(232, 103, 46, 0.8)" />
            <stop offset="100%" stopColor="rgba(232, 103, 46, 0.2)" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#orbGradient)" />
        <circle cx="100" cy="100" r="60" fill="rgba(232, 103, 46, 0.4)" />
        <circle cx="100" cy="100" r="40" fill="rgba(232, 103, 46, 0.6)" />
      </svg>
    </div>
  );
}
