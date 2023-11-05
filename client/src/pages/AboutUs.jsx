import React from 'react'

export default function AboutUs() {
  return (
    
    <div className='flex flex-col items-center justify-center'>

      <div className='flex flex-col items-center justify-center mt-10'>
        <h1 className='text-2xl md:text-6xl flex-col text-center'><b><i>Sobre Nosotros</i></b></h1>
      </div>

      <div className='items-center justify-center flex flex-row mt-32'>

        <div className='flex flex-col items-center justify-center mb-3'>
          
          <div className='flex flex-row items-center justify-center mr-4'>
            <img className='mr-4 w-8 md:w-12'
              src="https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/Colegio/u51pio9moapkx9nvpruq" />
            <h1 className='text-center text-small md:text-xl'>@colegiolaspalmas</h1>
          </div>

          <div className='flex flex-row items-center justify-center mr-4'>
            <img className='mr-4 w-8 md:w-12'
              src="https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/Colegio/x4hoyzbw2ffzikfeqty2" />
            <h1 className='text-center text-small md:text-xl'>Colegio Campestre Las Palmas</h1>
          </div>

          <div className='flex flex-row items-center justify-center mr-4'>
            <img className='mr-4 w-14 md:w-20'
              src="https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/Colegio/lgtmekfvjmvwxhbx6nbj" />
            <h1 className='text-center text-small md:text-xl'>Km. 12 vía La Tebaida, Quindío</h1>
          </div>

        </div>

        <div className='flex flex-row items-center justify-center'>
          <img className='w-40 md:w-2/3' src="https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/Colegio/ic5flpkpiexhkyirs1k2"/>
        </div>
        
      </div>
    </div>
  )
}