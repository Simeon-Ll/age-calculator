import React from 'react'
import arrow from './assets/images/icon-arrow.svg'
import logic from './logic'


function App() {
  const [ageData, setAgeData] = React.useState({
    year: '',
    month: '',
    day: ''
  });

  const [age, setAge] = React.useState(logic.age)

  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAgeData({
      ...ageData,
      [name]: value
    });

  };

  const handleSubmit = (event) => {
      
      let data = logic.calculate(ageData.day, ageData.month - 1, ageData.year)
      setAge(prev => prev = data)
      console.log(data.day, logic.age);
    };

  return (
    <div className='relative w-11/12 bg-White flex flex-col items-center rounded-5xl rounded-br-7xl p-8 py-4 sm:w-128'>

      <div className='flex gap-5 py-5 pb-12 sm:pb-7 border-b-2 w-full justify-center  sm:justify-start '>

        <div>
          <h3 className=' font-semibold text-Smokey-grey text-xs'>DAY</h3>
          <input type="number" name="day" id="day" value={ageData.day} onChange={handleChange} className=' border-2 border-Light-gray rounded-lg w-16 sm:w-24 text-md sm:text-xl h-10 sm:h-12 px-1 font-bold pl-3'/>
        </div>

        <div>
          <h3 className=' font-semibold text-Smokey-grey text-xs'>MONTH</h3>
          <input type="number" name="month" id="month" value={ageData.month} onChange={handleChange} className=' border-2 border-Light-gray rounded-lg w-16 sm:w-24 text-md sm:text-xl h-10 sm:h-12 px-1 font-bold pl-3' />
        </div>

        <div>
          <h3 className=' font-semibold text-Smokey-grey text-xs'>YEAR</h3>
          <input type="number" name="year" id="year" value={ageData.year} onChange={handleChange} className=' border-2 border-Light-gray rounded-lg w-16 sm:w-24 text-md sm:text-xl h-10 sm:h-12 px-1 font-bold pl-3'/>
        </div>

      </div>

      <div className=' absolute top-28 sm:top-24 w-10/12 flex justify-center sm:justify-end' onClick={handleSubmit}>
        <div className='bg-Purple right-0 p-4 rounded-full hover:bg-black ' >
        <img src={arrow} alt="" className='w-8'/>
        </div>
      </div>
      


      <div className='w-full pt-14 sm:pt-8 py-4 '>

        <div className='flex text-5xl sm:text-7xl font-bold italic'>
          <span className='text-Purple mr-2'>{age.year}</span>
          <h1>years</h1>
        </div>

        <div className='flex text-5xl sm:text-7xl font-bold italic'>
          <span className='text-Purple mr-2'>{age.month}</span>
          <h1>months</h1>
        </div>

        <div className='flex text-5xl sm:text-7xl font-bold italic'>
          <span className='text-Purple mr-2'>{age.day}</span>
          <h1>days</h1>
        </div>

      </div>

    </div>
  )
}

export default App
