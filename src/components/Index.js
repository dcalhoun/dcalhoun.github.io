'use strict'

import About from './About'
import Projects from './Projects'
import React from 'react'

const Index = React.createClass({
  render (props) {
    return (
      <main>
        <About/>
        <Projects/>
      </main>
    )
  }
})

export default Index