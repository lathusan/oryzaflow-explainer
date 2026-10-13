import type { FaceKey } from "@/lib/content";

type P = { size?: number };
const base = (size = 24) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export const Grain = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <path d="M12 21V9" />
    <path d="M12 9c0-3 2-5 4-6 0 3-1 5-4 6Z" />
    <path d="M12 9c0-3-2-5-4-6 0 3 1 5 4 6Z" />
    <path d="M12 14c0-2.5 2-4.5 4.5-5-.3 2.6-1.8 4.5-4.5 5Z" />
    <path d="M12 14c0-2.5-2-4.5-4.5-5 .3 2.6 1.8 4.5 4.5 5Z" />
  </svg>
);
export const Monitor = ({ size }: P) => (
  <svg {...base(size)}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>
);
export const Mobile = ({ size }: P) => (
  <svg {...base(size)}><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M11 18h2" /></svg>
);
export const Store = ({ size }: P) => (
  <svg {...base(size)}><path d="M4 10v10h16V10" /><path d="M3 10l2-6h14l2 6" /><path d="M3 10c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3" /><path d="M10 20v-5h4v5" /></svg>
);
export const Truck = ({ size }: P) => (
  <svg {...base(size)}><path d="M2 6h11v10H2z" /><path d="M13 9h4l4 4v3h-8" /><circle cx="6" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>
);
export const Factory = ({ size }: P) => (
  <svg {...base(size)}><path d="M3 21V10l6 4V10l6 4V5h4v16z" /><path d="M7 17h2M12 17h2M17 17h1" /></svg>
);
export const Chip = ({ size }: P) => (
  <svg {...base(size)}><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /><rect x="10" y="10" width="4" height="4" /></svg>
);
export const Download = ({ size = 18 }: P) => (
  <svg {...base(size)}><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>
);
export const Arrow = ({ size = 16 }: P) => (
  <svg {...base(size)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export const FaceIcon = ({ k, size = 24 }: { k: FaceKey; size?: number }) => {
  switch (k) {
    case "mill": return <Monitor size={size} />;
    case "dealer": return <Store size={size} />;
    case "driver": return <Truck size={size} />;
    case "receiver": return <Factory size={size} />;
    case "iot": return <Chip size={size} />;
  }
};
