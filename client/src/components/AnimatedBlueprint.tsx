import { motion } from 'framer-motion';

// Blueprint grid generator
// (scaled for 360x360 canvas)
type BlueprintGridProps = {
  width: number;
  height: number;
  spacing?: number;
  color?: string;
};
function BlueprintGrid({ width, height, spacing = 32, color = '#c7d2fe' }: BlueprintGridProps) {
  const lines = [];
  for (let x = spacing; x < width; x += spacing) {
    lines.push(<line key={`v${x}`} x1={x} y1={0} x2={x} y2={height} stroke={color} strokeWidth={0.7} />);
  }
  for (let y = spacing; y < height; y += spacing) {
    lines.push(<line key={`h${y}`} x1={0} y1={y} x2={width} y2={y} stroke={color} strokeWidth={0.7} />);
  }
  return <g>{lines}</g>;
}

export default function AnimatedBlueprint() {
  // Animation timing
  const baseDelay = 0.2;
  const drawDuration = 1.2;
  const repeatDelay = 1.5;

  return (
    <svg
      width={360}
      height={360}
      viewBox="0 0 360 360"
      style={{ background: '#e0e7ff', borderRadius: 32, boxShadow: '0 2px 24px #0001' }}
    >
      {/* Static grid background */}
      <BlueprintGrid width={360} height={360} />

      {/* Blueprint scroll (left) */}
      <motion.path
        d="M70 300 Q50 200 70 70 Q90 50 210 70"
        fill="none"
        stroke="#f59e42"
        strokeWidth={14}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: drawDuration, delay: baseDelay * 1, repeat: Infinity, repeatType: 'loop', repeatDelay }}
      />
      {/* Scroll inner shadow */}
      <motion.circle
        cx={70} cy={300} r={18}
        fill="#fff7ed"
        stroke="#f59e42"
        strokeWidth={7}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: baseDelay * 2, repeat: Infinity, repeatType: 'loop', repeatDelay }}
      />
      {/* Blueprint paper */}
      <motion.rect
        x={110} y={90} width={200} height={200} rx={18}
        fill="#f3f4f6"
        stroke="#22223b"
        strokeWidth={6}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: drawDuration, delay: baseDelay * 3, repeat: Infinity, repeatType: 'loop', repeatDelay }}
      />
      {/* House outline */}
      <motion.path
        d="M160 260 V170 L210 130 L260 170 V260 Z"
        fill="none"
        stroke="#6366f1"
        strokeWidth={8}
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: drawDuration, delay: baseDelay * 4, repeat: Infinity, repeatType: 'loop', repeatDelay }}
      />
      {/* Door */}
      <motion.rect
        x={200} y={220} width={20} height={40}
        fill="#fff"
        stroke="#6366f1"
        strokeWidth={5}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: drawDuration, delay: baseDelay * 5, repeat: Infinity, repeatType: 'loop', repeatDelay }}
      />
      {/* Window (circle) */}
      <motion.circle
        cx={210} cy={150} r={10}
        fill="#fff"
        stroke="#6366f1"
        strokeWidth={3}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: baseDelay * 6, repeat: Infinity, repeatType: 'loop', repeatDelay }}
      />
      {/* Pencil */}
      <motion.rect
        x={140} y={295} width={90} height={13} rx={4}
        fill="#f59e42"
        stroke="#22223b"
        strokeWidth={4}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: drawDuration, delay: baseDelay * 7, repeat: Infinity, repeatType: 'loop', repeatDelay }}
      />
      <motion.rect
        x={220} y={295} width={9} height={13} rx={2}
        fill="#ef4444"
        stroke="#22223b"
        strokeWidth={2}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: baseDelay * 8, repeat: Infinity, repeatType: 'loop', repeatDelay }}
      />
    </svg>
  );
} 