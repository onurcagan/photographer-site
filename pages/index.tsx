import { Carousel } from '../src/components/Carousel'
import { CarouselData } from '../src/components/data/CarouselData'
import Hero from '../src/components/Hero'
import { Navbar } from '../src/components/Navbar'

export default function Home() {
  return (
    <>
      <Hero heading="Blanc Photography" message="I capture moments and keep them alive." />
      <Carousel slides={CarouselData} />
    </>
  )
}
