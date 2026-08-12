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

const ios= [
  {
      image: '/iwishmart.png',
      title: 'E-commerce App',
      resource: 'Swift, Swift UI, Mongo Database',
      description: 'The E-commerce App is a modern shopping application built with Swift, Swift UI, and Mongo Database. It features a clean, intuitive interface with real-time data persistence, google and email authentication, and smooth animations. Designed for productivity and simplicity, it lets users create, edit, and organize notes effortlessly — all while maintaining a beautiful and responsive UI built entirely with Swift UI.',
      youtube: 'https://www.youtube.com/watch?v=rlI1RuqdS3g',
      github: 'https://github.com/wlprojt/iWihsmart'
    },
    {
      image: '/inote.png',
      title: 'Notes App',
      resource: 'Swift, Swift UI, Local Database',
      description: 'The Notes App is a modern note-taking application built with Swift, Swift UI, and Local Database. It features a clean, intuitive interface with real-time data persistence, dark mode support, and smooth animations. Designed for productivity and simplicity, it lets users create, edit, and organize notes effortlessly — all while maintaining a beautiful and responsive UI built entirely with Swift UI.',
      youtube: 'https://youtu.be/LENpnn86VXM?si=uruPdHI4GMB7n8ug',
      github: 'https://github.com/wlprojt/Notes'
    },
    {
      image: '/iweather.png',
      title: 'Weather App',
      resource: 'Swift, Swift UI, API',
      description: 'The Weather App is a sleek and responsive iOS application developed with Swift, Swift UI, and a real-time Weather API. It delivers accurate, up-to-date weather information with beautiful animations, dynamic icons, and smooth transitions. Users can instantly check current conditions, forecasts, and temperature details — all wrapped in a modern, minimal design optimized for both light and dark themes.',
      youtube: 'https://youtu.be/6gzSkEiieL0?si=L5GpOdQBdRFZYH5-',
      github: 'https://github.com/wlprojt/weather'
    },
    {
      image: '/ismartlight.png',
      title: 'Smart Light',
      resource: 'Swift, SwiftUI, Firebase',
      description:
        'Smart Light is an intuitive iOS app built with SwiftUI that allows users to control lights remotely in real-time using Firebase Realtime Database. The app features a clean UI, instant state syncing, and seamless toggling for IoT-driven home automation.',
      youtube: 'https://youtu.be/9Js-WFiZjhs?si=fqB1lok6pObl30Ua',
      github: 'https://github.com/wlprojt/IsmartLight'
    },
    {
      image: '/ichatbot.png',
      title: 'Chat Bot',
      resource: 'Swift, SwiftUI, API',
      description:
        'Chatbot is an engaging iOS application developed with Swift and SwiftUI that leverages advanced AI APIs to provide intelligent conversational experiences. The app features a sleek, user-friendly interface with smooth animations, allowing users to interact with the chatbot seamlessly. Whether for casual conversation or information retrieval, iChatbot delivers accurate responses in real-time, all while maintaining a visually appealing design optimized for both light and dark modes.',
      youtube: 'https://youtu.be/jn8CXCtKt3g?si=IGS-OAanfWxX3zFU',
      github: 'https://github.com/wlprojt/iChatbot'
    }
  ]

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
          iOS App Projects
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
        {ios.map((project, index) => (
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
