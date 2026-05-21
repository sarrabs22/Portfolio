import React from 'react'

const icons = {
  arrowDown: (
    <path d="M12 4v14m0 0 5-5m-5 5-5-5" />
  ),
  arrowRight: (
    <path d="M4 12h14m0 0-5-5m5 5-5 5" />
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H7a3 3 0 0 0-3 3V5.5Z" />
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M8 7h8" />
    </>
  ),
  briefcase: (
    <>
      <path d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7" />
      <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5v8A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-8Z" />
      <path d="M4 11.5h16" />
      <path d="M10 12h4" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12.2 2.2 2.2 4.8-5" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.5 8.5-2.2 5-4.8 2 2.2-5 4.8-2Z" />
    </>
  ),
  eye: (
    <>
      <path d="M3.5 12s3-5 8.5-5 8.5 5 8.5 5-3 5-8.5 5-8.5-5-8.5-5Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  galaxy: (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M4 13.5c2.5 3.8 10.5 4.4 14.4 1.1 3.7-3.1.5-7.2-4.7-7.8-4.6-.5-8.5 1.3-9.7 4" />
      <path d="M20 10.5c-2.5-3.8-10.5-4.4-14.4-1.1-3.7 3.1-.5 7.2 4.7 7.8 4.6.5 8.5-1.3 9.7-4" />
    </>
  ),
  linkedin: (
    <>
      <path d="M6.5 10v7" />
      <path d="M10.5 17v-4a3 3 0 0 1 6 0v4" />
      <path d="M10.5 10v7" />
      <circle cx="6.5" cy="7" r="1" />
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
    </>
  ),
  mail: (
    <>
      <path d="M4 6.5h16v11H4z" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2" />
    </>
  ),
  moon: (
    <path d="M20 15.2A7.8 7.8 0 0 1 8.8 4 8.6 8.6 0 1 0 20 15.2Z" />
  ),
  phone: (
    <path d="M8 4.5 10.2 8 8.7 9.6c1 2.1 2.6 3.7 4.7 4.7l1.6-1.5 3.5 2.2-.5 3.2c-.1.7-.8 1.2-1.5 1.1C9.8 18.5 5.5 14.2 4.7 7.5c-.1-.7.4-1.4 1.1-1.5L8 4.5Z" />
  ),
  rocket: (
    <>
      <path d="M13.5 4.5c2.5-.8 5-.3 6-.1.2 1 .7 3.5-.1 6-1 3.1-3.7 6-7.8 8.4l-3.9-3.9c2.4-4.1 5.3-6.8 8.4-7.8Z" />
      <path d="M8 14.5 4.5 18l1.5 1.5 3.5-3.5" />
      <path d="M14.5 9.5h.01" />
    </>
  ),
  satellite: (
    <>
      <path d="m10 14 4-4" />
      <path d="m14 6 4 4-4 4-4-4 4-4Z" />
      <path d="m6 14 4 4" />
      <path d="M4 16h4v4H4z" />
      <path d="M18.5 15.5a6 6 0 0 1-10-10" />
    </>
  ),
  send: (
    <>
      <path d="M21 3 10 14" />
      <path d="m21 3-7 18-4-7-7-4 18-7Z" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3 13.4 8.6 19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4L12 3Z" />
      <path d="M5 16.5 5.6 19l2.4.6-2.4.6L5 22.5l-.6-2.3-2.4-.6 2.4-.6.6-2.5Z" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.9 4.9 1.4 1.4" />
      <path d="m17.7 17.7 1.4 1.4" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m4.9 19.1 1.4-1.4" />
      <path d="m17.7 6.3 1.4-1.4" />
    </>
  ),
  wrench: (
    <path d="M15.5 4.5a5 5 0 0 0-6 6L4 16v4h4l5.5-5.5a5 5 0 0 0 6-6l-3.2 3.2-3-3 3.2-3.2Z" />
  ),
}

const PortfolioIcon = ({ name, className = '', size = 20, title }) => (
  <svg
    className={`portfolio-icon ${className}`.trim()}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden={title ? undefined : 'true'}
    role={title ? 'img' : undefined}
  >
    {title && <title>{title}</title>}
    {icons[name] || icons.compass}
  </svg>
)

export default PortfolioIcon
