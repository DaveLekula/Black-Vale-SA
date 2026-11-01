// Lightweight image wrapper — avoids Next.js 10 Image layout type conflicts.
// Uses native img with object-fit; parent must have position:relative and defined height.
import React from 'react';

interface ImgProps {
  src: string;
  alt: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
  objectPosition?: string;
  style?: React.CSSProperties;
  className?: string;
  priority?: boolean;
}

export default function Img({ src, alt, objectFit = 'cover', objectPosition = 'center', style, className, priority }: ImgProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%',
        height: '100%',
        objectFit,
        objectPosition,
        ...style,
      }}
      className={className}
    />
  );
}
