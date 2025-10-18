"use client";

import { useState } from "react";
import {
  Folder,
  FileText,
  Mail,
  User,
  Briefcase,
  Battery,
  Wifi,
  Signal,
} from "lucide-react";
import Modal from "./Modal";

export default function MobileView() {
  const [selectedApp, setSelectedApp] = useState(null);
  const [currentTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  const apps = [
    {
      id: "about",
      name: "About",
      icon: User,
      color: "bg-blue-600",
      content: {
        title: "About Me",
        body: (
          <div className="space-y-4">
            <p className="text-xs leading-relaxed">
              Hello! I&apos;m a developer passionate about creating unique
              digital experiences.
            </p>
            <p className="text-xs leading-relaxed">
              With expertise in web development, I specialize in React, Next.js,
              and modern frontend technologies.
            </p>
            <div className="pt-4 border-t-2 border-green-500">
              <p className="text-[10px] text-green-400">SKILLS:</p>
              <p className="text-xs mt-2">
                JavaScript • React • Next.js • Tailwind • Node.js
              </p>
            </div>
          </div>
        ),
      },
    },
    {
      id: "projects",
      name: "Projects",
      icon: Folder,
      color: "bg-yellow-600",
      content: {
        title: "My Projects",
        body: (
          <div className="space-y-6">
            <div className="pixel-borders p-4 bg-gray-900">
              <h3 className="text-sm text-green-400 mb-2">Project Alpha</h3>
              <p className="text-xs leading-relaxed mb-2">
                A full-stack application built with React and Node.js.
              </p>
              <p className="text-[10px] text-green-400">
                TECH: React, Express, MongoDB
              </p>
            </div>
            <div className="pixel-borders p-4 bg-gray-900">
              <h3 className="text-sm text-green-400 mb-2">Project Beta</h3>
              <p className="text-xs leading-relaxed mb-2">
                An innovative mobile-first web application.
              </p>
              <p className="text-[10px] text-green-400">
                TECH: Next.js, Tailwind, API
              </p>
            </div>
          </div>
        ),
      },
    },
    {
      id: "experience",
      name: "Work",
      icon: Briefcase,
      color: "bg-purple-600",
      content: {
        title: "Experience",
        body: (
          <div className="space-y-4">
            <div>
              <p className="text-sm text-green-400">Senior Developer</p>
              <p className="text-[10px] text-green-300 mb-2">
                Tech Company • 2022-Present
              </p>
              <p className="text-xs leading-relaxed">
                Leading frontend development and mentoring junior developers.
              </p>
            </div>
            <div className="border-t-2 border-green-500 pt-4">
              <p className="text-sm text-green-400">Full Stack Developer</p>
              <p className="text-[10px] text-green-300 mb-2">
                Startup Inc • 2020-2022
              </p>
              <p className="text-xs leading-relaxed">
                Built and maintained multiple client projects.
              </p>
            </div>
          </div>
        ),
      },
    },
    {
      id: "resume",
      name: "Resume",
      icon: FileText,
      color: "bg-red-600",
      content: {
        title: "Resume",
        body: (
          <div className="space-y-4">
            <p className="text-xs leading-relaxed">
              Download my complete resume to learn more about my background and
              experience.
            </p>
            <button className="pixel-borders px-6 py-3 bg-green-500 text-black hover:bg-green-400 transition-colors text-xs">
              DOWNLOAD RESUME
            </button>
          </div>
        ),
      },
    },
    {
      id: "contact",
      name: "Contact",
      icon: Mail,
      color: "bg-green-600",
      content: {
        title: "Get In Touch",
        body: (
          <div className="space-y-4">
            <p className="text-xs leading-relaxed">
              Feel free to reach out for collaborations or opportunities.
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-[10px] text-green-400">EMAIL:</p>
                <p className="text-xs">your.email@example.com</p>
              </div>
              <div>
                <p className="text-[10px] text-green-400">GITHUB:</p>
                <p className="text-xs">github.com/yourusername</p>
              </div>
              <div>
                <p className="text-[10px] text-green-400">LINKEDIN:</p>
                <p className="text-xs">linkedin.com/in/yourprofile</p>
              </div>
            </div>
          </div>
        ),
      },
    },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md aspect-[9/19] pixel-borders bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="bg-black px-4 py-2 flex justify-between items-center text-[10px] text-green-400">
          <span>{currentTime}</span>
          <div className="flex items-center gap-2">
            <Signal size={12} />
            <Wifi size={12} />
            <Battery size={12} />
          </div>
        </div>

        <div className="p-6 pt-8">
          <div className="mb-8">
            <h1 className="text-lg text-green-400 mb-1">MY PORTFOLIO</h1>
            <p className="text-[10px] text-green-300">Tap any app to open</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {apps.map((app) => {
              const IconComponent = app.icon;
              return (
                <button
                  key={app.id}
                  onClick={() => setSelectedApp(app)}
                  className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
                >
                  <div
                    className={`${app.color} pixel-borders p-4 w-16 h-16 flex items-center justify-center`}
                  >
                    <IconComponent
                      size={32}
                      className="text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-[9px] text-green-300 text-center">
                    {app.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-green-500 rounded-full"></div>
      </div>

      {selectedApp && (
        <Modal
          isOpen={!!selectedApp}
          onClose={() => setSelectedApp(null)}
          title={selectedApp.content.title}
        >
          {selectedApp.content.body}
        </Modal>
      )}
    </div>
  );
}
