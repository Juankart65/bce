import React from 'react'

export default function Filosofia() {
  return (
    <div className='mt-10 items-center justify-center flex flex-col h-full'>
      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='text-xl md:text-4xl flex-col mb-6'><b><i>Modelo, Método Pedagógico y Requisitos</i></b></h1>
      </div>
      <h2 className=' text-x md:text-2xl'><b><i>Método Pedagógico</i></b></h2>
      <div className='text-small md:text-xl mt-6 ml-4 md:ml-8 mb-4'>
        <p className='text-slate-900'><i>Avanza la implementación de los principios filosóficos de Reggio Emilia
        en el Colegio Campestre Las Palmas, con experiencias que permiten a los
        estudiantes construir desde la escucha y las dinámicas colectivas e individuales,
        bajo un enfoque de aprendizaje activo a partir del dinamismo de las acciones que ellos
        mismos estructuran desde la imaginación.</i></p>
      </div>
      <div className='flex justify-center items-center mt-7'>
        <img src="https://res.cloudinary.com/dsnq0pvey/image/upload/v1698972222/Colegio/dgtf5axhylss3e48uu0g.jpg"
        className='w-2/3'/>
      </div>
        <div className='text-small md:text-xl mt-6 ml-4 md:ml-8 mb-4'>
        <p className='text-slate-900'><i>La experiencia Reggio Emilia se vive en el Colegio a través del deporte,
          la danza y el teatro, la corporeidad, la participación en asambleas y la experimentación de los
          educandos desde el grado de transición hasta quinto. En los centros de interés, dinámicos y cambiantes,
          recrean pensamientos individuales y satisfacen la necesidad de conocer, crear e interactuar con sus inventos,
          antes de abrirse a un mundo de posibilidades.</i></p>
      </div>
        <div className='flex justify-center items-center mt-7'>
        <img src="https://res.cloudinary.com/dsnq0pvey/image/upload/v1698972867/Colegio/ajqcwsf0bx6uobnzmqne.jpg"
        className='w-2/3'/>
      </div>
        <div className='text-small md:text-xl mt-6 ml-4 md:ml-8 mb-10'>
        <p className='text-slate-900'><i>Las características de cada clase responden a las edades de los niños, a partir
          de proyectos. Los talentos son abordados desde las inteligencias múltiples, que permiten un aprendizaje global
          y particular en el que se potencian todas sus capacidades, habilidades y destrezas.</i></p>
      </div>
    </div>
  )
}