import React from 'react'

const CheckWeatherConditionalRendering = () => {

    const WeatherCondition = (temp) = {
        if (temp < 15) {
            <div>It's Cold Outside.</div>
        } else if (temp > 15 && temp <25) {
            <div>Temerature is normal and it's nice outside.</div>
        } else {
            <div>It's hot outside.</div>
        }
    }




    return (
        <div className='flex items-center'>
            <div>Enter Temperature: </div>
            <input
                className='bg-transparent border rounded-md border-gray-800 p-1 ml-2'
                type="text"
                placeholder='Enter temperature in Celcius'
            />
        </div>
    )
}

export default CheckWeatherConditionalRendering