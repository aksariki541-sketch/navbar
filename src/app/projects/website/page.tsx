'use client'

import React from 'react'
import GooeyNav from '@/components/GooeyNav'
import GradientText from '@/components/GradientText'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const website = [
  {
    image: '/wishmart.png',
    title: 'E-commerce Website',
    resource: 'TypeScript, Next.js, MongoDB',
    description:
      'The E-commerce Website is a modern full-stack shopping platform built with Next.js, TypeScript, and MongoDB. It offers secure data storage, a responsive design, and smooth UI interactions for an intuitive shopping experience. Users can create, edit, and manage products and orders easily — all within a fast and scalable web app.',
    youtube: 'https://www.youtube.com/watch?v=WKpAQ3wr0O4',
    github: 'https://github.com/wlprojt/wishmart',
  },
  {
    image: '/wnote.png',
    title: 'Notes Website',
    resource: 'TypeScript, Next.js, MongoDB',
    description:
      'The Notes Website is a modern full-stack note-taking platform built with Next.js, TypeScript, and MongoDB. It offers secure data storage, a responsive design, and smooth UI interactions for an intuitive writing experience. Users can create, edit, and manage notes easily — all within a fast and scalable web app.',
    youtube: 'https://youtu.be/mH4dUVTHbYM?si=wDCQAeVstidKOzL9',
    github: 'https://github.com/wlprojt/nnotes',
  },
  {
    image: '/nweather.png',
    title: 'Weather Website',
    resource: 'TypeScript, Next.js, API',
    description:
      'The Weather Website is a lightweight and responsive web app that fetches live weather data using an external Weather API. Built with pure HTML, CSS, and JavaScript, it provides real-time forecasts, temperature updates, and animated weather icons in a clean, user-friendly interface.',
    youtube: 'https://youtu.be/WA3F-7H6Ntk?si=ZjIZ-1kGOd9CS5Ny',
    github: 'https://github.com/wlprojt/nweather',
  },
  {
    image: '/wsmartlight.png',
    title: 'Smart Light',
    resource: 'TypeScript, Next.js, Firebase',
    description:
      'A cloud-controlled smart lighting system built with Next.js and Firebase. Users can toggle lights remotely through a real-time web interface, making it ideal for home automation and IoT learning.',
    youtube: 'https://youtu.be/374NSkIIrk4?si=_EfEXZFwrfU88b9-',
    github: 'https://github.com/wlprojt/W-Smart-Light',
  },
  {
    image: '/wchatbot.png',
    title: 'Chat Bot Website',
    resource: 'TypeScript, Next.js, Gemini API',
    description:
      'The Chat Bot Website is an AI-powered conversational web app built with Next.js, TypeScript, and Google’s Gemini API. It features real-time chat responses, a minimal UI, and smooth message animations — offering users an interactive and intelligent assistant experience directly in the browser.',
    youtube: 'https://youtu.be/Mus3M6am0mw?si=ujrKPBEshO581AWm',
    github: 'https://github.com/wlprojt/Chatbot',
  }
];


export default function Page() {

  return (
    <div
      className="mt-20 flex flex-col items-center"
    >
      {/* Title Animation */}
      <motion.h1
        className="text-center mx-2 font-bold text-3xl md:text-4xl"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
      >
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={8}
          showBorder={false}
          className="custom-class"
        >
          Website Projects
        </GradientText>
      </motion.h1>

      {/* Subtitle Animation */}
      <motion.p
        className="text-center text-gray-400 mt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
      >
        Discover the projects that showcase my passion for innovation
      </motion.p>
      {/* Project Grid */}
      <div className="mt-10 mb-10 grid grid-cols-1 gap-8 w-90 md:w-150 xl:w-200">
        {website.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900/40 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Image */}
            <div className="relative w-full h-90 md:h-150 xl:h-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title + Description */}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-white">
                {project.title}
              </h2>
              <p className="text-sm mb-2">{project.resource}</p>
              <p className="text-gray-400 text-sm mb-2">{project.description}</p>
              <div className="flex gap-4 mt-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="flex items-center gap-2">
                    <FaGithub /> GitHub
                  </Button>
                </a>
                <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="flex items-center gap-2">
                    <FaYoutube /> YouTube
                  </Button>
                </a>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </ div>
  )
}
