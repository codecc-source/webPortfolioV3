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
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      content: {
        title: "About Me",
        body: (
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-gray-700">
              Hello! I&apos;m a developer passionate about creating unique
              digital experiences.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              With expertise in web development, I specialize in React, Next.js,
              and modern frontend technologies.
            </p>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-500 mb-2">SKILLS</p>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "React", "Next.js", "Tailwind", "Node.js"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        ),
      },
    },
    {
      id: "projects",
      name: "Projects",
      icon: Folder,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      content: {
        title: "My Projects",
        body: (
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                Project Alpha
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                A full-stack application built with React and Node.js.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  React
                </span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  Express
                </span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  MongoDB
                </span>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                Project Beta
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                An innovative mobile-first web application.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  Next.js
                </span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  Tailwind
                </span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  API
                </span>
              </div>
            </div>
          </div>
        ),
      },
    },
    {
      id: "experience",
      name: "Work",
      icon: Briefcase,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      content: {
        title: "Work Experience",
        body: (
          <div className="space-y-6">
            <div>
              <p className="text-base font-semibold text-gray-800">
                Senior Developer
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Tech Company • 2022-Present
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Leading frontend development and mentoring junior developers.
              </p>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-base font-semibold text-gray-800">
                Full Stack Developer
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Startup Inc • 2020-2022
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
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
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      content: {
        title: "Resume",
        body: (
          <div className="space-y-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              Download my complete resume to learn more about my background and
              experience.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium w-full">
              Download Resume
            </button>
          </div>
        ),
      },
    },
    {
      id: "contact",
      name: "Contact",
      icon: Mail,
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
      content: {
        title: "Get In Touch",
        body: (
          <div className="space-y-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              Feel free to reach out for collaborations or opportunities.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">EMAIL</p>
                  <p className="text-sm text-gray-800">
                    your.email@example.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <div>
                  <p className="text-xs text-gray-500 font-medium">GITHUB</p>
                  <p className="text-sm text-gray-800">
                    github.com/yourusername
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <div>
                  <p className="text-xs text-gray-500 font-medium">LINKEDIN</p>
                  <p className="text-sm text-gray-800">
                    linkedin.com/in/yourprofile
                  </p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center p-4">
      <div className="w-full max-w-sm aspect-[9/19] bg-black rounded-[3rem] shadow-2xl relative overflow-hidden border-8 border-gray-900">
        <div className="absolute inset-2 bg-gradient-to-br from-blue-50 to-purple-50 rounded-[2.5rem] overflow-hidden flex flex-col">
          <div className="bg-white/80 backdrop-blur-sm px-6 py-2 flex justify-between items-center text-xs text-gray-700 border-b border-gray-200">
            <span className="font-medium">{currentTime}</span>
            <div className="flex items-center gap-2">
              <Signal size={14} />
              <Wifi size={14} />
              <Battery size={14} />
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Portfolio</h1>
              <p className="text-sm text-gray-600">Tap any app to open</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {apps.map((app) => {
                const IconComponent = app.icon;
                return (
                  <button
                    key={app.id}
                    onClick={() => setSelectedApp(app)}
                    className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
                  >
                    <div
                      className={`${app.color} rounded-2xl p-4 w-full aspect-square flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent
                        size={28}
                        className="text-white"
                        strokeWidth={2}
                      />
                    </div>
                    <span className="text-xs text-gray-700 text-center font-medium">
                      {app.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pb-2 flex justify-center">
            <div className="w-24 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
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
