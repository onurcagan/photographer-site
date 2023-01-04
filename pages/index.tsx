import { Carousel } from '../src/components/Carousel'
import { CarouselData } from '../src/data/CarouselData'
import Hero from '../src/components/Hero'
import Instagram from '../src/components/Instagram'

export default function Home() {
  return (
    <>
      <Hero heading="Blanc Photography" message="I capture moments and keep them alive." />
      <Carousel slides={CarouselData} />
      <Instagram />
    </>
  )
}
