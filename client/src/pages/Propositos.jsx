import React from 'react'

export default function Propostos() {
  return (
    <div className='mt-10 items-center justify-center flex flex-col h-full'>
      <h1 className=' text-2xl md:text-4xl text-center'><b><i>Filosofía</i></b></h1>
      <div className='text-small md:text-2xl mt-6 mr-4 ml-4 md:mr-6 md:ml-6 mb-4'>
        <p className='text-slate-900 text-center'><i>Avanza la implementación de los principios filosóficos de Reggio Emilia
        en el Colegio Campestre Las Palmas, con experiencias que permiten a los
        estudiantes construir desde la escucha y las dinámicas colectivas e individuales,
        bajo un enfoque de aprendizaje activo a partir del dinamismo de las acciones que ellos
        mismos estructuran desde la imaginación.</i></p>
      </div>
      <div className='flex justify-center items-center mt-7'>
        <img src="https://res.cloudinary.com/dsnq0pvey/image/upload/v1698972222/Colegio/dgtf5axhylss3e48uu0g.jpg"
        className='w-2/3'/>
      </div>
    </div>
  )
}