import React from "react";
import { CalendarDays } from "lucide-react";

const announcementes = [
  {
    title: "Streamlined Maintenance Requests!",
    content:
      "We’re excited to introduce a simpler way to report and track maintenance issues directly from your dashboard. Convenience at your fingertips!",
    date: "1/26/2025",
  },
  {
    title: "New Community Guidelines",
    content:
      "Our updated community guidelines are now live! These aim to ensure a safer and more enjoyable living experience for everyone.",
    date: "1/24/2025",
  },
  {
    title: "Enhanced Security Features",
    content:
      "Your safety is our priority. We’ve upgraded the building’s security system with 24/7 monitoring and better access control.",
    date: "1/22/2025",
  },
];

const Announcements = () => {
  return (
    <div className="p-6">
      <h1 className="lg:text-4xl text-xl font-bold text-sky-500 text-center">BUILDING MANAGEMENT</h1>
      <p className="text-center text-lg text-white mt-2">Check out the latest updates for residents and staff.</p>
      <p className="text-center text-green-600 font-semibold mt-1">Total Announcements: {announcementes.length}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {announcementes.map((announcement, index) => (
          <div key={index} className="shadow-lg rounded-2xl border border-gray-200 p-4">
            <h2 className="text-xl font-bold text-sky-500 flex items-center gap-2">
              <span className="text-blue-500">
                <CalendarDays size={20} />
              </span>
              {announcement.title}
            </h2>
            <p className="text-white mt-2">{announcement.content}</p>
            <div className="text-sky-400 text-sm mt-4 flex items-center gap-2">
              <CalendarDays size={16} /> {announcement.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
