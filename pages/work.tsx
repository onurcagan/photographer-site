import React from 'react'
import Hero from '../src/components/Hero'
import Portfolio from '../src/components/Portfolio'

const Index = () => {
  return (
    <>
      <Hero heading="My Work" message="This is some of my recent work traveling the world!" btn="Scroll Down" />
      <Portfolio />
    </>
  )
}

export default Index
