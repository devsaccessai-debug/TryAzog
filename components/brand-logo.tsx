import * as React from 'react'

/**
 * TryAzog "A" mark (a wide mark, roughly 1.6:1, so it is sized by height and keeps its proportions).
 * `tone="white"` sits the mark on a white rounded tile so it stays crisp on blue panels.
 */
export function BrandMark({
  className,
  style,
  tone = 'color',
}: {
  className?: string
  style?: React.CSSProperties
  tone?: 'color' | 'white'
}) {
  const img = (
    <img
      src="/logo-mark-sm.png"
      alt=""
      aria-hidden="true"
      draggable={false}
      decoding="async"
      className={tone === 'white' ? 'block shrink-0 object-contain' : `object-contain ${className ?? ''}`}
      style={tone === 'white' ? { width: '78%', height: '78%', minWidth: 0 } : style}
    />
  )
  if (tone !== 'white') return img
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[28%] bg-white shadow-sm ${className ?? ''}`}
      style={style}
    >
      {img}
    </span>
  )
}

/** What the letters of "Azog" stand for, shown under the wordmark. */
export const BRAND_TAGLINE = 'Agentic Zenith of Generation'

/**
 * Full TryAzog logo: mark + wordmark, with the tagline underneath unless `tagline={false}`.
 * `size` sets the overall height; `tone="white"` is for blue panels.
 */
export function BrandLogo({
  size = 40,
  className,
  tone = 'color',
  tagline = true,
}: {
  size?: number
  className?: string
  tone?: 'color' | 'white'
  tagline?: boolean
}) {
  const white = tone === 'white'
  return (
    <span
      className={`inline-flex items-center select-none ${className ?? ''}`}
      style={{ height: size, gap: size * 0.24 }}
    >
      {white ? (
        <BrandMark tone="white" className="shrink-0" style={{ width: size, height: size }} />
      ) : (
        <BrandMark className="w-auto shrink-0" style={{ height: size * 0.82 }} />
      )}
      <span className="flex flex-col" style={{ gap: size * 0.08 }}>
        <span
          className="font-sans font-extrabold leading-none tracking-[-0.03em] whitespace-nowrap"
          style={{ fontSize: size * 0.52 }}
        >
          <span className={white ? 'text-white' : 'text-[#050b2e]'}>Try</span>
          <span className={white ? 'text-[#bfe3ff]' : 'text-[#0a66ff]'}>Azog</span>
        </span>
        {tagline && (
          <span
            className={`font-sans font-semibold leading-none whitespace-nowrap ${
              white ? 'text-white/70' : 'text-[#5a6b8a]'
            }`}
            style={{ fontSize: Math.max(10, size * 0.25) }}
          >
            {BRAND_TAGLINE}
          </span>
        )}
      </span>
    </span>
  )
}
