import { HeroSection } from 'components/home/hero-section'
import { JoinWithUs } from 'components/home/join-with-us'
import { OutObjective } from 'components/home/our-objective'
import { OurPrinciples } from 'components/home/our-principles'
import { OutInvester } from 'components/home/out-invester'
import { TeamPartner } from 'components/home/team-partner'
import { VisionSection } from 'components/home/vision-section'
import { useEffect } from 'react'

export const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div className='overflow-hidden scroll-smooth pt-6 lg:pt-[70px]' id='about'>
      <HeroSection />

      <VisionSection />

      <OutObjective />

      <OurPrinciples />

      <TeamPartner />

      {/* <OutInvester /> */}

      {/* <JoinWithUs /> */}
    </div>
  )
}
