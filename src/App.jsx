import React, {useState} from 'react'



const App = () => {
  const [bgColor, setBgColor] = useState('bg-black');

  const changeToRed = () => setBgColor('bg-red-700')
  const changeToBlue = () => setBgColor('bg-yellow-300')
  const changeToGreen = () => setBgColor('bg-lime-500')


  const buttonStyle = 'rounded-full px-4 py-1 text-white font-bold'

  return (
    <div className={`flex items-center justify-center gap-10 ${bgColor} w-52 h-52 rounded-full m-auto relative top-60`}>
      <div className='flex gap-4'>
        <button 
        onClick={changeToRed}
        className={`${buttonStyle} bg-red-500 relative top-35`}
        >
          Red
        </button>

                <button 
        onClick={changeToGreen}
        className={`${buttonStyle} bg-lime-400 relative top-35`}
        >
          Green
        </button>

                <button 
        onClick={changeToBlue}
        className={`${buttonStyle} bg-yellow-300 relative top-35`}
        >
          Blue
        </button>
      </div>
    </div>
  )
}

export default App