'use client'

import { motion } from 'framer-motion'
import GradientText from './GradientText'
import ChromaGrid from './ChromaGrid'

const projects = [
  {
    image: "/wishmart.png",
    title: "E-commerce",
    subtitle: "Next js",
    handle: "Website",
    borderColor: "#3bf6b5",
    gradient: "linear-gradient(145deg, #a1edd3, #036342)",
    url: "https://www.youtube.com/watch?v=WKpAQ3wr0O4"
  },
  {
    image: "/awishmart.png",
    title: "E-commerce",
    subtitle: "Kotlin",
    handle: "Android App",
    borderColor: "rgb(243, 11, 11)",
    gradient: "linear-gradient(180deg, rgb(243, 141, 141), rgb(156, 5, 5))",
    url: "https://www.youtube.com/watch?v=Ornj3_rEpXM"
  },
  {
    image: "/iwishmart.png",
    title: "E-commerce",
    subtitle: "Swift",
    handle: "iOS App",
    borderColor: "rgb(181, 11, 248)",
    gradient: "linear-gradient(145deg, rgb(191, 129, 246), rgb(70, 4, 141))",
    url: "https://www.youtube.com/watch?v=rlI1RuqdS3g"
  },
  {
    image: "/wnote.png",
    title: "Notes",
    subtitle: "Next js",
    handle: "Website",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #4287f6ff, #033789ff)",
    url: "https://youtu.be/mH4dUVTHbYM?si=Vppo3ACjOumX4v1e"
  },
  {
    image: "/anote.png",
    title: "Notes",
    subtitle: "Kotlin",
    handle: "Android App",
    borderColor: "#fa08deff",
    gradient: "linear-gradient(180deg, #f260e1ff, #910581ff)",
    url: "https://youtu.be/i5jb1PCDInw?si=qvnJnkU0E1F5OLkE"
  },
  {
    image: "/inote.png",
    title: "Notes",
    subtitle: "Swift",
    handle: "iOS App",
    borderColor: "#d0f80bff",
    gradient: "linear-gradient(145deg, #ddf271ff, #768d04ff)",
    url: "https://youtu.be/LENpnn86VXM?si=B_NzHXT-EvroX7xR"
  },
  {
    image: "/nweather.png",
    title: "Weather",
    subtitle: "Next js",
    handle: "Website",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #5cedbcff, #03865bff)",
    url: "https://youtu.be/WA3F-7H6Ntk?si=ZjIZ-1kGOd9CS5Ny"
  },
  {
    image: "/iweather.png",
    title: "Weather",
    subtitle: "Swift",
    handle: "iOS App",
    borderColor: "#8d01ffff",
    gradient: "linear-gradient(145deg, #b568f3ff, #56039aff)",
    url: "https://youtu.be/6gzSkEiieL0?si=uKJT41NLY7L0Bk-p"
  },
  {
    image: "/aweather.png",
    title: "Weather",
    subtitle: "Kotlin",
    handle: "Android App",
    borderColor: "#ff6200ff",
    gradient: "linear-gradient(180deg, #f3a16eff, #973c03ff)",
    url: "https://youtu.be/m9Np1_3QlpA?si=Wmyi1wR6APjkNjhX"
  },
  {
    image: "/wsmartlight.png",
    title: "Smart Light",
    subtitle: "Next js",
    handle: "Website",
    borderColor: "#f80404ff",
    gradient: "linear-gradient(180deg, #f87373ff, #930202ff)",
    url: "https://youtu.be/f5LxH1tdxU4?si=nQz5pcnoA0ZWPAqH"
  },
  {
    image: "/asmartlight.png",
    title: "Smart Light",
    subtitle: "Kotlin",
    handle: "Android App",
    borderColor: "#6af804ff",
    gradient: "linear-gradient(180deg, #a0f067ff, #3a8504ff)",
    url: "https://youtu.be/_a4PHGZ6OeQ?si=ukaVwXzoy4Vbgygo"
  },
  {
    image: "/ismartlight.png",
    title: "Smart Light",
    subtitle: "Swift",
    handle: "iOS App",
    borderColor: "#0145ffff",
    gradient: "linear-gradient(145deg, #698cebff, #042e9fff)",
    url: "https://youtu.be/9Js-WFiZjhs?si=teB7j-sJ_LIoI9Lx"
  },
  {
    image: "/wchatbot.png",
    title: "Chat Bot",
    subtitle: "Next js",
    handle: "Website",
    borderColor: "#eeff06ff",
    gradient: "linear-gradient(145deg, #ecf571ff, #838c03ff)",
    url: "https://youtu.be/BWsKtWLlaHA?si=JMxGceklihtEdclV"
  },
  {
    image: "/achatbot.png",
    title: "Chat Bot",
    subtitle: "Kotlin",
    handle: "Android App",
    borderColor: "#ff00a2ff",
    gradient: "linear-gradient(180deg, #f67ecaff, #640341ff)",
    url: "https://youtu.be/m9Np1_3QlpA?si=Wmyi1wR6APjkNjhX"
  },
  {
    image: "/ichatbot.png",
    title: "Chat Bot",
    subtitle: "Swift",
    handle: "iOS App",
    borderColor: "#ff8800ff",
    gradient: "linear-gradient(180deg, #f5b771ff, #834804ff)",
    url: "https://youtu.be/m9Np1_3QlpA?si=Wmyi1wR6APjkNjhX"
  }
]

const Aboutthree = () => {
  return (
    <>
      <h1 className="text-center mx-1 font-bold text-3xl md:text-4xl">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={8}
          showBorder={false}
        >
          My Projects
        </GradientText>
      </h1>

      <p className="text-center text-gray-400">
        Discover the projects that showcase my passion for design and innovation
      </p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-[#060010] px-4 md:px-10 xl:mx-50 item-center justify-center"
      >
        {/* HORIZONTAL SCROLL CONTAINER */}
        <div className="flex overflow-x-auto overflow-y-hidden flex-nowrap scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[320px] h-[500px] md:w-[400px] md:h-[550px]"
            >
              <ChromaGrid
                items={[project]}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default Aboutthree
