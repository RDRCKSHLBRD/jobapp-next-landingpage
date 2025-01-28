import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar /> {/* Shared Sidebar Component */}
      <div className="flex-grow p-6">{children}</div> {/* Render Subpage */}
    </div>
  );
}
