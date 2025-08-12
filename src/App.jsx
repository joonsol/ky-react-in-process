
import './App.css'
import WeatherCard from './components/WeatherCard'
import { useState,useRef,useEffect } from 'react'
function App() {

  const [city, setCity]=useState('seoul')
  const [weather, setWeather]=useState(null)
  const [loading, setLoading]=useState(false)
  const [err, setErr]=useState('')
  const inputRef =useRef(null)
  return (
    <div className='app'>
      <h1>날씨앱</h1>
      <div className="input-wrap">
        <input type="text" placeholder='도시이름을 입력하세요' />
        <button>검색</button>
      </div>
      <WeatherCard/>
    </div>
  )
}

export default App
