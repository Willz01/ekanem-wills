const COLORS = [
  "text-teal-600",
  "text-slate-500",
  "text-orange-500",
  "text-amber-500",
  "text-yellow-400",
  "text-lime-400",
  "text-emerald-600",
  "text-amber-200",
  "text-purple-200",
  "text-blue-600",
  "text-purple-600",
  "text-pink-400",
];

export const getColor = () => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};
