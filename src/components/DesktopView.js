"use client";

import { useState } from "react";
import { Folder, FileText, Mail, User, Briefcase } from "lucide-react";
import Modal from "./Modal";

export default function DesktopView() {
  const [selectedFolder, setSelectedFolder] = useState(null);

  const folders = [
    {
      id: "about",
      name: "ABOUT.EXE",
      icon: User,
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
      name: "PROJECTS",
      icon: Folder,
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
      name: "WORK.TXT",
      icon: Briefcase,
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
      name: "RESUME.PDF",
      icon: FileText,
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
      name: "CONTACT.EXE",
      icon: Mail,
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
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-black p-8">
      <div className="mb-8">
        <h1 className="text-xl md:text-2xl text-green-400 mb-2">
          MY PORTFOLIO
        </h1>
        <p className="text-xs text-green-300">Double-click any icon to open</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl">
        {folders.map((folder) => {
          const IconComponent = folder.icon;
          return (
            <button
              key={folder.id}
              onClick={() => setSelectedFolder(folder)}
              className="flex flex-col items-center gap-3 group hover:scale-110 transition-transform cursor-pointer"
            >
              <div className="pixel-borders p-4 bg-gray-800 group-hover:bg-gray-700 transition-colors">
                <IconComponent
                  size={48}
                  className="text-green-400"
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-[10px] md:text-xs text-green-300 text-center break-words max-w-[120px]">
                {folder.name}
              </span>
            </button>
          );
        })}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 pixel-borders border-t-2 border-green-500 p-2">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="pixel-borders px-3 py-2 bg-green-500 text-black text-xs">
              START
            </div>
          </div>
          <div className="text-xs text-green-400">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>

      {selectedFolder && (
        <Modal
          isOpen={!!selectedFolder}
          onClose={() => setSelectedFolder(null)}
          title={selectedFolder.content.title}
        >
          {selectedFolder.content.body}
        </Modal>
      )}
    </div>
  );
}
