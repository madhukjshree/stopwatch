import React, { useEffect, useState } from 'react'

const App = () => {
    const [isRunning , setIsRunning] = useState(false)
    const [elapsedTime , setElapsedTime] = useState(0)

    useEffect(() => {

      let intervalId ;

      if(isRunning){
        intervalId = setInterval(() => {
          setElapsedTime(prev => prev + 1)
        } , 1000)
      }else{
        clearInterval(intervalId)
      }

      return () => clearInterval(intervalId)

    } , [isRunning])


    const startStopwatch = () => {
      setIsRunning(true);
    };
  
    const stopStopwatch = () => {
      setIsRunning(false);
    };
  
    const resetStopwatch = () => {
      setIsRunning(false);
      setElapsedTime(0);
    };

    const formatTime = (time) => {
      const minutes = Math.floor(time / 60).toString().padStart(2);
      const seconds = (time % 60).toString().padStart(2, '0');
      return `${minutes}:${seconds}`;
    }

    return (
      <section className=' h-[70vh] flex items-center justify-center'>
        <div className=' w-[40%] m-auto text-center'>
          <h1 className=' text-[2rem] mb-5'>Stopwatch</h1>
          <p>Time: {formatTime(elapsedTime)}</p>
          <div className=' flex items-start justify-center gap-3 mt-[1rem]'>
          {!isRunning ? (

            <button 
              className='py-1 px-5 bg-green-800 rounded-md'
              onClick={startStopwatch}
            >
              Start
            </button>
          ) : (
            <button 
              className='py-1 px-5 bg-red-800 rounded-md'
              onClick={stopStopwatch}
            >
              Stop
            </button>
          )}

          <button 
              className='py-1 px-5 bg-orange-800 rounded-md'
              onClick={resetStopwatch}
            >
              Reset
            </button>
          </div>
        </div>
      </section>
    )
}

export default App