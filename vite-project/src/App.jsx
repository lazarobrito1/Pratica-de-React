import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OutroCompo from './OutroCompo'
import Compo from './Compo'
import Form from './Form'
import Estado from './Estado'
import Evento from './Evento'
import Condicional from './condicional'




function App() {
  

  return (
  <div >
   <Compo nome="Lázaro" idade='24'/>
   <OutroCompo numero="1"/>
   <Form/>
   <Estado/>
   <Evento />
   <Condicional/>
  </div>
  )
}

export default App
