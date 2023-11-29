import React from 'react'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import { useGlobalContext } from './context'
const ThemeToggle = () => {
  const {isDarkTheme, toggleDarkTheme} = useGlobalContext();
  return (
    <section className='toggle-container' onClick={toggleDarkTheme}>
      <button className='dark-name'>
        {isDarkTheme ? (
          <BsFillMoonFill
            style={{ background: 'black' }}
            className='toggle-icon'
          />
        ) : (
          <BsFillSunFill
            style={{ background: 'white' }}
            className='toggle-icon'
          />
        )}
      </button>
    </section>
  )
}

export default ThemeToggle