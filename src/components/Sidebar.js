import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">The Job App</h2>
      <ul className="space-y-2">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/dashboard/job-listings">Job Listings</Link></li>
        <li><Link href="/dashboard/ats-resume-optimizer">ATS Resume Optimizer</Link></li>
        <li><Link href="/dashboard/subscription">Subscription</Link></li>
        <li><Link href="/dashboard/track-update">Track Update</Link></li>
        <li><Link href="/dashboard/events">Events</Link></li>
        <li><Link href="/dashboard/skill-resources">Skill Resources</Link></li>
        <li><Link href="/dashboard/settings">Settings</Link></li>
      </ul>
    </div>
  );
}
