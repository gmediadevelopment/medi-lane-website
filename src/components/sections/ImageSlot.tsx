import type { CSSProperties } from 'react'

interface ImageSlotProps {
  tag?: string
  caption: string
  src?: string
  alt?: string
  className?: string
  style?: CSSProperties
  aspectRatio?: string
}

export default function ImageSlot({
  tag = 'Bildplatzhalter',
  caption,
  src,
  alt,
  className = '',
  style,
  aspectRatio,
}: ImageSlotProps) {
  const mergedStyle: CSSProperties = {
    ...(aspectRatio ? { aspectRatio } : {}),
    ...style,
  }

  return (
    <div className={`img-slot ${className}`} style={mergedStyle}>
      {src ? (
        <img
          src={src}
          alt={alt || caption}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      ) : (
        <>
          <span className="img-slot__crosshatch" />
          <span className="img-slot__label">
            <span className="img-slot__tag">{tag}</span>
            <span className="img-slot__caption">{caption}</span>
          </span>
        </>
      )}
    </div>
  )
}
