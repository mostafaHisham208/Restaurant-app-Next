"use client"
import Countdown from 'react-countdown'

const endingData=new Date("2023-9-29")

const CountDown = () => {
  return (
        <Countdown className='font-bold text-5xl text-yellow-300' date={endingData} />
  )
}

export default CountDown