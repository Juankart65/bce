import React from 'react'

export default function Filosofia() {
  return (
    <div className='mt-10 items-center justify-center flex flex-col h-full'>
      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='text-2xl md:text-6xl flex-col mb-6 md:mb-10 text-center'><b><i>Filosofía</i></b></h1>
      </div>
      <div className='text-small md:text-2xl mt-6 mr-4 ml-4 md:mr-6 md:ml-6 mb-4'>
        <p className='text-slate-900 text-center'><i>La implementación de la Filosofía Reggio Emilia desde
          grado transición a Quinto, ha permitido tener una mirada diferente de nuestra educación, adoptar un
          enfoque más participativo y centrado en el estudiante, lo que ha llevado a una nueva perspectiva sobre
          la educación. En lugar de ser un enfoque tradicional de enseñanza y aprendizaje, se ha optado por un
          enfoque más dinámico y orientado al desarrollo integral de los estudiantes, lo que se considera beneficioso
          para el proceso educativo en general.</i></p>
      </div>
      <div className='flex justify-center items-center mt-7 mb-10'>
        <img src="https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/Colegio/adfdeqaopiqk0eiexpae"
        className='w-2/3'/>
      </div>
    </div>
  )
}
