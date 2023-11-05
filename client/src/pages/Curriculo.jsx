import React from 'react'
import Asignaturas from "../components/other/Asignaturas"

export default function Curriculo() {
  return (
    <div className="flex flex-col items-center justify-center">

      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='text-2xl md:text-6xl flex-col mb-6 md:mb-6 text-center'><b><i>Currículo</i></b></h1>
      </div>

      <div className='text-small md:text-2xl mt-6 mr-4 ml-4 md:mr-6 md:ml-6 mb-10'>
        <p className='text-slate-900 text-center'><i>El propósito curricular del colegio campestre Las Palmas es permitir
          que los estudiantes encuentren en su proceso de educación un espacio para la práctica deportiva. Dentro del horario
          académico, los estudiantes todos los días cuentan con hora y media para entrenar el deporte preferido, para esto,
          es muy importante la disciplina y la motivación. De otra manera, si el estudiante no tiene interés por alguno de los
          deportes que se ofertan pueden hacer su práctica en las artes, bien sea en danza o teatro.</i></p>
      </div>

      <div className='mb-6 flex flex-col'>
        <Asignaturas />
      </div>
      
    </div>
  )
}
