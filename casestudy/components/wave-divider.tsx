const wavePaths = [
  'M0,120 C170,120 250,120 390,120 C540,120 590,92 720,96 S900,132 1030,150 S1250,154 1440,118',
  'M0,132 C180,132 260,132 400,132 C550,132 610,104 735,108 S920,144 1050,162 S1260,166 1440,135',
  'M0,146 C190,146 275,146 415,146 C560,146 630,116 750,120 S940,156 1070,174 S1270,178 1440,142',
  'M0,160 C180,160 285,160 430,160 C575,160 645,128 770,132 S955,168 1090,186 S1280,188 1440,150',
  'M0,174 C175,174 295,174 445,174 C590,174 660,140 790,144 S970,180 1110,198 S1290,198 1440,168',
]

const strokes = [
  { stroke: 'rgba(244, 94, 43, 0.96)', width: 1.8, delay: '-1.1s' },
  { stroke: 'rgba(233, 102, 55, 0.9)', width: 2.2, delay: '-0.6s' },
  { stroke: 'rgba(223, 110, 66, 0.82)', width: 1.9, delay: '-1.8s' },
  { stroke: 'rgba(210, 118, 76, 0.72)', width: 2.6, delay: '-0.2s' },
  { stroke: 'rgba(196, 126, 88, 0.7)', width: 2.1, delay: '-1.4s' },
]

export function WaveDivider() {
  return (
    <div aria-hidden="true" className="relative w-full overflow-hidden bg-background pb-2">
      <div className="h-[120px] w-full md:h-[132px]">
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="block h-full w-full overflow-visible"
        >
          {wavePaths.map((d, index) => (
            <path
              key={d}
              d={d}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="wave-path"
              style={{
                stroke: strokes[index].stroke,
                strokeWidth: strokes[index].width,
                animationDelay: strokes[index].delay,
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  )
}
