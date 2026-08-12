'use client'

import Image from 'next/image'
import GradientText from './GradientText'
import Link from 'next/link'
import LogoLoop from './LogoLoop'

const testimonials = [
  {
    name: '@SarahThompson',
    img: '/face.jpeg',
    testimonial:
      'Working with Rakesh was an absolute pleasure. He built our custom mobile app for both Android and iOS, and it runs flawlessly.'
  },
  {
    name: '@MichaelRodriguez',
    img: '/facea.jpeg',
    testimonial:
      'Rakesh brought our web platform to life with speed and precision. Everything exceeded expectations!'
  },
  {
    name: '@AditiSharma',
    img: '/faceb.jpeg',
    testimonial:
      'He completely transformed our MVP into a polished, scalable app. We saw a 40% increase in user engagement after launch!'
  },
  {
    name: '@DavidLee',
    img: '/facec.jpeg',
    testimonial:
      'He developed our cross-platform learning app with clean code and zero bugs. Truly professional!'
  }
]

const testimonialtwo = [
  {
    name: "@BrianJohnson",
    img: '/faced.jpeg',
    testimonial: "Working with Wish-Light was a game-changer for our digital platform. Their team delivered a beautifully designed product on time and exceeded our expectations at every step. Communication was clear, development was smooth, and the final result was exactly what we needed to grow our business. Highly recommended!"
  },
  {
    name: "@JohnDoe",
    img: '/facee.jpeg',
    testimonial: "We’re so glad we chose Wish-Light for our app development. They really listened to our needs and turned our ideas into reality. The final app works flawlessly and looks amazing. We couldn’t be happier with the results!"
  },
  {
    name: "@SarahWilson",
    img: '/facef.jpeg',
    testimonial: "Wish-Light helped us increase user engagement by 40% with a fresh redesign and performance-focused build. Their expertise in both design and development made all the difference. We saw real results — fast."
  },
  {
    name: "@JamesCarter",
    img: '/faceg.jpeg',
    testimonial: "Rakesh’s ability to handle full-stack development is rare. He built both our admin dashboard and mobile app with perfect API integration. Clear communication and zero missed deadlines!"
  }
]

const testimonialthree = [
  {
    name: "@LindaMartinez",
    img: '/faceh.jpeg',
    testimonial: "Our eCommerce site redesign was handled brilliantly. The new layout loads faster, looks beautiful, and works perfectly on all devices. Rakesh’s attention to detail is remarkable."
  },
  {
    name: "@DavidKim",
    img: '/facei.jpeg',
    testimonial: "Fast, talented, and reliable — Wish-Light delivered beyond our expectations. A fantastic partner for any digital project!"
  },
  {
    name: "@EmilyClark",
    img: '/facej.jpeg',
    testimonial: "The Wish-Light team showcased exceptional technical skill and project ownership. From architectural decisions to UI polish, they delivered high-quality code and seamless user experience. We’re thrilled with the product and the process."
  },
  {
    name: "@MarkAnderson",
    img: '/facek.jpeg',
    testimonial:
      "Wish-Light transformed our idea into a polished, production-ready product. Their attention to detail, clean design approach, and technical expertise made the entire process smooth and stress-free. We felt supported from concept to launch — truly outstanding work."
  }
]

const Homethree = () => {
  const velocity = 35

  const testimonialCard = (t: any, i: React.Key) => (
  <div
    key={i}
    aria-label={`Testimonial from ${t.name}`}
    className="min-w-[300px] max-w-[350px]"
  >
    <div
      className="flex flex-col bg-gradient-to-b from-[#0f0f0f] to-[#050505] border border-[#1f1f1f] rounded-2xl p-6 text-white/90 transition-transform duration-300 hover:-translate-y-1"
    >
      <p
        title={t.testimonial}
        className="text-gray-300 text-sm italic mb-4 leading-relaxed line-clamp-4"
      >
        “{t.testimonial}”
      </p>

      <div className="flex items-center gap-4 mt-auto">
        <Image
          src={t.img}
          alt={`Avatar of ${t.name}`}
          width={50}
          height={50}
          loading="lazy"
          className="rounded-full"
        />
        <h3 className="font-semibold text-sm">{t.name}</h3>
      </div>
    </div>
  </div>
)



  return (
    <section className="relative w-full bg-black flex flex-col items-center justify-center overflow-hidden py-20">
      <h1 className=" text-center mx-1 font-bold text-3xl md:text-4xl">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={8}
          showBorder={false}
          className="custom-class"
        >
          Loved by users worldwide
        </GradientText>
      </h1>
      <p className='text-center mb-12 text-gray-400'>
        See what users are saying about wish-light
      </p>

      {/* Scroll wrapper */}
      <div className="relative w-full max-w-6xl overflow-hidden">
        <div className="flex flex-col gap-8">
          <LogoLoop
            logos={testimonials as any}
            speed={80}
            direction="left"
            logoHeight={20}
            gap={20}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Client testimonials"
            renderItem={(item, i) => testimonialCard(item, i)}
          />


          <LogoLoop
            logos={testimonialtwo as any}
            speed={80}
            direction="right"
            logoHeight={20}
            gap={20}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Client testimonials"
            renderItem={(item, i) => testimonialCard(item, i)}
          />


          <LogoLoop
            logos={testimonialthree as any}
            speed={80}
            direction="left"
            logoHeight={20}
            gap={20}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Client testimonials"
            renderItem={(item, i) => testimonialCard(item, i)}
          />

        </div>

        </div>
      
      <div className="relative flex items-center justify-center py-20">
  <div className="start-building-card relative z-10 text-center p-10 rounded-2xl bg-[#060010]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
    <div className="white-glow">
      <h2 className="text-3xl font-bold mb-4 text-white">Start Building</h2>
      <p className="text-gray-300 mb-6">
        futuristic app and web development. Sign up now and get started!
      </p>
      <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition-all text-white py-2 px-6 rounded-lg shadow-lg">
        <Link href="/dashboard">
          Get Started
        </Link>
      </button>
    </div>
  </div>
</div>


    </section>
  )
}

export default Homethree
