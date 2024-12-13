import React from 'react'
 import Hero from './Hero'
import AboutSection from './AboutSectio'
import ServiceSection from './ServiceSection'
import Stastistics from './Stastistics'
import Portfolio from './Portfolio'
import ClientSection from './ClientSection'
import Company from './Company'
import Catogries from './Catogries'
import Location from './Location'
import Worktogether from './Worktogether'
import ClientReview from './ClientReview'







const Home = () => {
  return (
    <div>
        
      { <Hero/> }
      { <AboutSection/> }
      { <ServiceSection/> }
      { <Stastistics/> }
      { <Portfolio/> }
      { <ClientSection/> }
      { <Company/> }
      { <Catogries/> }
      { <ClientReview/> }
      { <Worktogether/> }
      { <Location/> }







    </div>
  )
}

export default Home
