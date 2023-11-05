import React from 'react'
import Tarifa from "../components/other/Tarifas"

export default function Matricula() {
  return (
    <div className='mt-10 items-center justify-center flex flex-col h-full'>

      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='text-2xl md:text-6xl flex-col mb-6 md:mb-10 text-center'><b><i>Inscripciones y Tarifas</i></b></h1>
      </div>

      <div className='flex flex-col items-center justify-center w-full'>
        <h2 className='text-xl md:text-4xl flex-col mb-6 md:mb-10 text-center'><b><i>Inscripciones</i></b></h2>
      </div>
      
      <div className='text-small md:text-2xl mt-6 mr-4 ml-4 md:mr-6 md:ml-6 mb-4'>
        <p className='text-slate-900 text-center'><i>Para el proceso de inscripción se puede realizar presencial o vía correo,
          el formulario tiene un costo de $10.000, el cual es diligenciado por los padres o acudientes. Una vez realicen su
          inscripción se procede al proceso de admisión donde se hará una entrevista a los padres con el niño, o si es el caso
          de acudiente.</i></p>
      </div>

      <div className='flex flex-col items-center justify-center w-full'>
        <h2 className='text-xl md:text-4xl flex-col mb-6 md:mb-10 text-center'><b><i>Tarifas 2024</i></b></h2>
      </div>

      <div className='flex items-center justify-center mb-3'>
        <Tarifa />
      </div>

      <div className='text-small md:text-2xl mt-6 mr-4 ml-4 md:mr-6 md:ml-6 mb-4'>
        <p className='text-slate-900 text-center'><i>•	Los estudiantes de cada grupo que ocupen el primer puesto en el periodo
          tienen un descuento del 15% en el pago de la mensualidad.</i></p>
      </div>
      <div className='text-small md:text-2xl mt-6 mr-4 ml-4 md:mr-6 md:ml-6 mb-4'>
        <p className='text-slate-900 text-center'><i>•	Los estudiantes que representen el colegio en juegos departamentales o
          nacionales tendrán un descuento del 20% en matricula y mensualidad.</i></p>
      </div>
      <div className='text-small md:text-2xl mt-6 mr-4 ml-4 md:mr-6 md:ml-6 mb-10'>
        <p className='text-slate-900 text-center'><i>•	Si hay estudiantes hermanos, tiene un descuento del 10% cada uno en la
          matrícula y 5% en la mensualidad.</i></p>
      </div>
    </div>
  )
}
