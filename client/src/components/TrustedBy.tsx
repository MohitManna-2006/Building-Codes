import React from "react";

const logos = [
  // Replace these with real logo SVGs or images when available
  {
    name: "City of San Francisco",
    svg: (
      <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="32" rx="8" fill="#E5E7EB" />
        <text x="40" y="20" textAnchor="middle" fill="#6B7280" fontSize="12" fontFamily="Inter, sans-serif">Coming Soon</text>
      </svg>
    ),
  },
  {
    name: "City of Austin",
    svg: (
      <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="32" rx="8" fill="#E5E7EB" />
        <text x="40" y="20" textAnchor="middle" fill="#6B7280" fontSize="12" fontFamily="Inter, sans-serif">Coming Soon</text>
      </svg>
    ),
  },
  {
    name: "City of Seattle",
    svg: (
      <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="32" rx="8" fill="#E5E7EB" />
        <text x="40" y="20" textAnchor="middle" fill="#6B7280" fontSize="12" fontFamily="Inter, sans-serif">Coming Soon</text>
      </svg>
    ),
  },
  {
    name: "City of Miami",
    svg: (
      <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="32" rx="8" fill="#E5E7EB" />
        <text x="40" y="20" textAnchor="middle" fill="#6B7280" fontSize="12" fontFamily="Inter, sans-serif">Coming Soon</text>
      </svg>
    ),
  },
  {
    name: "City of Boston",
    svg: (
      <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="32" rx="8" fill="#E5E7EB" />
        <text x="40" y="20" textAnchor="middle" fill="#6B7280" fontSize="12" fontFamily="Inter, sans-serif">Coming Soon</text>
      </svg>
    ),
  },
];

export default function TrustedBy() {
  return (
    <section className="w-full py-4 bg-[#f7fafd] border-y border-gray-100 flex justify-center">
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 max-w-4xl w-full mx-auto">
        {logos.map((logo) => (
          <div key={logo.name} className="opacity-70 grayscale flex items-center" title={logo.name} aria-label={logo.name}>
            {logo.svg}
          </div>
        ))}
      </div>
    </section>
  );
} 