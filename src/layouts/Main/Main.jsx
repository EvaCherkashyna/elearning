import React from 'react'
import {  Services,KnowMore, InstructionalDesign, AboutClients, ContactUs } from '../../components'


const Main = () => {
  return (
    <main className='common_style_container'>
      <Services/>
      <KnowMore></KnowMore>
      <InstructionalDesign></InstructionalDesign>
      <AboutClients/>
      <ContactUs/>
    </main>
  )
}

export default Main
