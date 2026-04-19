const TechIcons: Record<string, (props: { size?: number; color?: string }) => JSX.Element> = {
  HTML5: ({ size = 32, color = "#E44D26" }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M5 3L7.37 28.13L16 31L24.63 28.13L27 3H5Z" fill={color} />
      <path d="M16 5.5V28.87L22.87 26.24L24.8 5.5H16Z" fill={`${color}cc`} />
      <path d="M11.5 10.5H16V14H12.2L12.5 17.5H16V21L12.8 20L12.6 18H10L10.4 22L16 24L21.6 22L22.2 14H13.5L13.8 10.5H22.5L22.8 7.5H9.2L9.5 10.5H11.5Z" fill="white" />
    </svg>
  ),
  CSS3: ({ size = 32, color = "#2965F1" }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M5 3L7.37 28.13L16 31L24.63 28.13L27 3H5Z" fill={color} />
      <path d="M16 5.5V28.87L22.87 26.24L24.8 5.5H16Z" fill={`${color}cc`} />
      <path d="M22.2 10.5L22.5 7.5H9.2L10 17.5H18.5L18 21L16 21.5L14 21L13.8 18.5H10.5L11 23L16 24.5L21 23L21.8 14H12.5L12.2 10.5H22.2Z" fill="white" />
    </svg>
  ),
  JavaScript: ({ size = 32, color = "#F7DF1E" }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="2" y="2" width="28" height="28" rx="2" fill={color} />
      <path d="M21.5 23.5C22.2 24.5 23.2 25.2 24.8 25.2C26.1 25.2 27 24.6 27 23.7C27 22.6 26 22.2 24.6 21.6L23.8 21.3C21.5 20.3 20 19 20 16.5C20 14.2 21.8 12.5 24.5 12.5C26.4 12.5 27.8 13.2 28.8 14.9L26.5 16.4C26 15.5 25.4 15.1 24.5 15.1C23.6 15.1 23 15.7 23 16.4C23 17.3 23.6 17.7 24.9 18.3L25.7 18.6C28.4 19.8 30 21 30 23.7C30 26.6 27.7 28.1 24.9 28.1C22.1 28.1 20.3 26.7 19.5 24.9L21.5 23.5Z" fill="#323330" />
      <path d="M10 23.8C10.5 24.7 10.9 25.5 12.2 25.5C13.4 25.5 14 25 14 23.2V12.7H17V23.3C17 26.6 15.1 28.1 12.3 28.1C9.8 28.1 8.4 26.8 7.7 25.2L10 23.8Z" fill="#323330" />
    </svg>
  ),
  "React.js": ({ size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="3" fill="#61DAFB" />
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.2" transform="" />
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 16 16)" />
    </svg>
  ),
  "Tailwind CSS": ({ size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 8C12.8 8 10.8 9.6 10 12.8C11.2 11.2 12.6 10.6 14.2 11C15.1 11.2 15.8 11.9 16.5 12.7C17.7 14 19.1 15.5 22 15.5C25.2 15.5 27.2 13.9 28 10.7C26.8 12.3 25.4 12.9 23.8 12.5C22.9 12.3 22.2 11.6 21.5 10.8C20.3 9.5 18.9 8 16 8ZM10 16.5C6.8 16.5 4.8 18.1 4 21.3C5.2 19.7 6.6 19.1 8.2 19.5C9.1 19.7 9.8 20.4 10.5 21.2C11.7 22.5 13.1 24 16 24C19.2 24 21.2 22.4 22 19.2C20.8 20.8 19.4 21.4 17.8 21C16.9 20.8 16.2 20.1 15.5 19.3C14.3 18 12.9 16.5 10 16.5Z" fill="#06B6D4" />
    </svg>
  ),
  MongoDB: ({ size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16.5 2C16.5 2 17.5 5 17.5 8C17.5 11 19 14 19 17C19 20 17.5 22 16.5 25C16.5 25 16 28 16 30" stroke="#4FAA41" strokeWidth="1.5" fill="none" />
      <path d="M16 30C16 30 15.5 28 15.5 25C14.5 22 13 20 13 17C13 14 14.5 11 14.5 8C14.5 5 15.5 2 15.5 2" stroke="#4FAA41" strokeWidth="0.5" fill="none" />
      <path d="M13 17C13 12.5 14.5 8 16 4C17.5 8 19 12.5 19 17C19 21.5 17 25 16 28C15 25 13 21.5 13 17Z" fill="#4FAA41" opacity="0.3" />
      <path d="M15.5 25H16.5V30H15.5V25Z" fill="#3F9137" />
      <ellipse cx="16" cy="17" rx="5" ry="8" fill="#4FAA41" opacity="0.15" />
    </svg>
  ),
  "Node.js": ({ size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="#339933" opacity="0.2" />
      <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" stroke="#339933" strokeWidth="1.5" fill="none" />
      <text x="16" y="19" textAnchor="middle" fill="#339933" fontSize="8" fontWeight="bold" fontFamily="monospace">N</text>
    </svg>
  ),
  Git: ({ size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M29.5 15.1L16.9 2.5C16.3 1.9 15.3 1.9 14.7 2.5L11.8 5.4L15.5 9.1C16.2 8.8 17.1 9 17.6 9.5C18.1 10 18.3 10.9 18 11.6L21.5 15.1C22.2 14.8 23.1 15 23.6 15.5C24.3 16.2 24.3 17.3 23.6 18C22.9 18.7 21.8 18.7 21.1 18C20.6 17.4 20.4 16.6 20.7 15.9L17.5 12.7V20.4C17.7 20.5 17.9 20.7 18.1 20.9C18.8 21.6 18.8 22.7 18.1 23.4C17.4 24.1 16.3 24.1 15.6 23.4C14.9 22.7 14.9 21.6 15.6 20.9C15.8 20.7 16.1 20.5 16.3 20.4V12.6C16.1 12.5 15.8 12.3 15.6 12.1C15.1 11.5 14.9 10.7 15.2 10L11.6 6.4L2.5 15.5C1.9 16.1 1.9 17.1 2.5 17.7L15.1 30.3C15.7 30.9 16.7 30.9 17.3 30.3L29.5 18.1C30.1 17.5 30.1 16.5 29.5 15.9V15.1Z" fill="#F05032" />
    </svg>
  ),
  "VS Code": ({ size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M23 3L10 14L5 10L3 11.5V20.5L5 22L10 18L23 29L29 26.5V5.5L23 3Z" fill="#007ACC" />
      <path d="M23 3L10 14L5 10L3 11.5V20.5L5 22L10 18L23 29V3Z" fill="#007ACC" opacity="0.8" />
      <path d="M23 3V29L29 26.5V5.5L23 3Z" fill="#1F9CF0" />
      <path d="M10 14L3 11.5V20.5L10 18V14Z" fill="#0065A9" />
    </svg>
  ),
  Figma: ({ size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="11" cy="7" r="4" fill="#F24E1E" />
      <circle cx="21" cy="7" r="4" fill="#FF7262" />
      <circle cx="11" cy="16" r="4" fill="#A259FF" />
      <circle cx="21" cy="16" r="4" fill="#1ABCFE" />
      <circle cx="11" cy="25" r="4" fill="#0ACF83" />
    </svg>
  ),
};

export default TechIcons;
