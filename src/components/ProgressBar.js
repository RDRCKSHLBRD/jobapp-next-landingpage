// ProgressBar.js
export default function ProgressBar({ progress }) {
  return (
    <div
      className="relative"
      style={{
        width: "683px", // Total width of the progress bar
        height: "8px", // Total height
        backgroundColor: "#D1E9CD", // Light green background
        borderRadius: "8px", // Rounded edges for the background
        overflow: "hidden", // Ensures the dark green bar stays inside
      }}
    >
      <div
        className="absolute top-0 left-0 h-full"
        style={{
          backgroundColor: "#176D22", // Dark green (progress bar)
          borderRadius: "8px", // Rounded edges for the background
          width: `${progress}%`, // Dynamic width based on progress
          height: "100%", // Matches the container height
        }}
      ></div>
    </div>
  );
}
