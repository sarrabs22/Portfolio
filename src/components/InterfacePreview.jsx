import React, { useEffect, useState } from 'react'
import '../styles/InterfacePreview.css'

const getPublicAsset = (path) => `${import.meta.env.BASE_URL}${path}`

const ImagePreview = ({
  imageSrc,
  imageAlt,
  placeholderLabel,
  compact = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(true)
  const imagePath = getPublicAsset(imageSrc)

  useEffect(() => {
    setImageLoaded(true)
  }, [imageSrc])

  return (
    <div className={`interface-preview asset-image-preview ${compact ? 'compact' : ''}`}>
      <div className="preview-image-frame">
        {imageLoaded ? (
          <img
            src={imagePath}
            alt={imageAlt}
            loading="lazy"
            onError={() => setImageLoaded(false)}
          />
        ) : (
          <div className="preview-image-missing">
            <strong>Image preview manquante</strong>
            <span>{placeholderLabel || `Ajoute ${imageSrc} dans public/`}</span>
          </div>
        )}
      </div>
    </div>
  )
}

const InterfacePreview = ({
  title,
  subtitle,
  variant = 'product',
  tags = [],
  compact = false,
  imageSrc,
  imageAlt,
  placeholderLabel,
}) => {
  if (imageSrc) {
    return (
      <ImagePreview
        imageSrc={imageSrc}
        imageAlt={imageAlt || `Capture du projet ${title}`}
        placeholderLabel={placeholderLabel}
        compact={compact}
      />
    )
  }

  return (
    <div className={`interface-preview ${compact ? 'compact' : ''} variant-${variant}`}>
      <div className="preview-window">
        <div className="preview-chrome">
          <span></span>
          <span></span>
          <span></span>
          <div className="preview-address">{variant}.preview</div>
        </div>

        <div className="preview-screen">
          <div className="preview-sidebar">
            <div className="preview-logo"></div>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="preview-main">
            <div className="preview-hero-line">
              <div>
                <p className="preview-kicker">{subtitle}</p>
                <h4>{title}</h4>
              </div>
              <div className="preview-status">Live</div>
            </div>

            <div className="preview-grid">
              <div className="preview-card preview-card-large">
                <div className="preview-chart">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="preview-card">
                <div className="preview-orbit"></div>
              </div>
              <div className="preview-card preview-card-list">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="preview-tags">
              {tags.slice(0, 4).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InterfacePreview
