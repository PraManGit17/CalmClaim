// import About from '@/components/About'
// import Hero from '@/components/Hero'
// import Navbar from '@/components/Navbar'
// import Services from '@/components/Services'
// import FAQ from '@/components/FAQ'
// import React from 'react'
// import Contact from '@/components/Contact'

// const Page = () => {
//   return (
//     <div>
//      <Navbar />
//      <Hero />
//      <About />
//      <Services />
//      <FAQ />
//      <Contact />
//     </div>
//   )
// }

// export default Page


import About from '@/components/About'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import FAQ from '@/components/FAQ'
import React from 'react'
import Contact from '@/components/Contact'

const Page = () => {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}

export default Page
