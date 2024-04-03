export default function ColorTinterIcon({ color = "currentColor", size = 24 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.5104 8.04545C12.5809 7.22506 11.36 6.72726 10.0227 6.72726C7.11068 6.72726 4.75 9.08794 4.75 12C4.75 14.912 7.11068 17.2727 10.0227 17.2727C11.36 17.2727 12.5809 16.7749 13.5104 15.9545M10.0227 12H19.25M19.25 12V6.72726M19.25 12V17.2727"
        stroke={color}
        strokeWidth="1.31818"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
