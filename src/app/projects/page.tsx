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

const android= [
    {
      image: '/awishmart.png',
      title: 'E-commerce App',
      resource: 'Kotlin, Jetpack Compose, Mongo Database',
      description: 'The E-commerce App is a modern shopping application built with Kotlin, Jetpack Compose, and Mongo Database. It features a clean, intuitive interface with real-time data persistence, Google and email authentication, and smooth animations. Designed for productivity and simplicity, it lets users create, edit, and organize notes effortlessly — all while maintaining a beautiful and responsive UI built entirely with Compose.',
      youtube: 'https://www.youtube.com/watch?v=Ornj3_rEpXM&t=4s',
      github: 'https://github.com/wlprojt/AWishmart'
    },
    {
      image: '/anote.png',
      title: 'Notes App',
      resource: 'Kotlin, Jetpack Compose, Room Database',
      description: 'The Notes App is a modern note-taking application built with Kotlin, Jetpack Compose, and Room Database. It features a clean, intuitive interface with real-time data persistence, dark mode support, and smooth animations. Designed for productivity and simplicity, it lets users create, edit, and organize notes effortlessly — all while maintaining a beautiful and responsive UI built entirely with Compose.',
      youtube: 'https://youtu.be/i5jb1PCDInw?si=i4BiS6Oo7yfUBApz',
      github: 'https://github.com/wlprojt/Notes_app'
    },
    {
      image: '/aweather.png',
      title: 'Weather App',
      resource: 'Kotlin, Jetpack Compose, API',
      description: 'The Weather App is a sleek and responsive Android application developed with Kotlin, Jetpack Compose, and a real-time Weather API. It delivers accurate, up-to-date weather information with beautiful animations, dynamic icons, and smooth transitions. Users can instantly check current conditions, forecasts, and temperature details — all wrapped in a modern, minimal design optimized for both light and dark themes.',
      youtube: 'https://youtu.be/m9Np1_3QlpA?si=wCoZQmjHzsCyNvSK',
      github: 'https://github.com/wlprojt/Weather-App'
    },
    {
      image: '/asmartlight.png',
      title: 'Smart Light App',
      resource: 'Kotlin, Jetpack Compose, Firebase',
      description: 'The Smart Light App is a modern IoT-based Android application built with Kotlin, Jetpack Compose, and Firebase Realtime Database. It allows users to remotely control lights in real time with smooth UI interactions, toggle states, and track device responses instantly. Designed with a clean, minimal interface, the app ensures seamless connectivity between mobile and hardware through Firebase, offering a fast, stable, and intuitive smart home experience.',
      youtube: 'https://youtu.be/_a4PHGZ6OeQ?si=ukaVwXzoy4Vbgygo',
      github: 'https://github.com/wlprojt/Asmart-Light'
    },
    {
      image: '/achatbot.png',
      title: 'Chat Bot App',
      resource: 'Kotlin, Jetpack Compose, API',
      description: 'The Chat Bot App is an innovative Android application developed with Kotlin, Jetpack Compose, and a conversational AI API. It features a sleek, user-friendly interface that allows users to engage in dynamic conversations with an AI-powered chatbot. The app boasts smooth animations, real-time message updates, and a modern design optimized for both light and dark modes. Whether for casual chatting or information retrieval, this app provides an engaging and interactive experience.',
      youtube: 'https://youtu.be/HMqfv_R9HZU?si=2h9L0cleL4-ScLIr',
      github: 'https://github.com/wlprojt/Achatbot'
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
          Android App Projects
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
        {android.map((project, index) => (
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
