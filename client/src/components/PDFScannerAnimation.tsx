import { motion } from 'framer-motion';

export default function PDFScannerAnimation() {
  // Animation timing
  const scanDuration = 2;
  const checkmarkDelay = 0.5;
  const repeatDelay = 1;

  return (
    <svg
      width={360}
      height={360}
      viewBox="0 0 360 360"
      style={{ background: '#f8fafc', borderRadius: 32, boxShadow: '0 2px 24px #0001' }}
    >
      {/* PDF Document */}
      <motion.rect
        x={80}
        y={40}
        width={200}
        height={280}
        rx={12}
        fill="#ffffff"
        stroke="#e2e8f0"
        strokeWidth={3}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* PDF Header */}
      <motion.rect
        x={80}
        y={40}
        width={200}
        height={40}
        rx={12}
        fill="#ef4444"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />

      {/* PDF Icon */}
      <motion.path
        d="M95 55 L105 55 L105 65 L95 65 Z M95 60 L105 60"
        fill="none"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      />

      {/* PDF Text Lines */}
      {[1, 2, 3, 4, 5, 6, 7, 8].map((line, index) => (
        <motion.rect
          key={line}
          x={95}
          y={95 + (line - 1) * 25}
          width={170}
          height={3}
          rx={1.5}
          fill="#e2e8f0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
        />
      ))}

      {/* Purple Scanning Line */}
      <motion.rect
        x={80}
        y={40}
        width={200}
        height={4}
        fill="#8b5cf6"
        initial={{ y: 40 }}
        animate={{ y: 320 }}
        transition={{
          duration: scanDuration,
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay,
          ease: 'easeInOut'
        }}
      />

      {/* Scanning Glow Effect */}
      <motion.rect
        x={80}
        y={40}
        width={200}
        height={8}
        fill="url(#scanGradient)"
        initial={{ y: 40 }}
        animate={{ y: 320 }}
        transition={{
          duration: scanDuration,
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay,
          ease: 'easeInOut'
        }}
      />

      {/* Green Checkmark */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: checkmarkDelay,
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: scanDuration + repeatDelay - checkmarkDelay
        }}
      >
        <circle
          cx={180}
          cy={180}
          r={40}
          fill="#22c55e"
        />
        <motion.path
          d="M165 180 L175 190 L195 170"
          fill="none"
          stroke="#ffffff"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: checkmarkDelay + 0.1 }}
        />
      </motion.g>

      {/* Gradient Definition for Scanning Effect */}
      <defs>
        <linearGradient id="scanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
} 