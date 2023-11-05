import React from 'react'
import Grados from "../components/other/Grados"

export default function GradosOferta() {
  return (
    <div className="flex flex-col items-center justify-center">
      
      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='text-2xl md:text-6xl flex-col mb-6 md:mb-10 text-center'><b><i>Grados que Ofertamos</i></b></h1>
      </div>

      <div className='flex mb-6'>
        <Grados />
      </div>
      
    </div>
  )
}