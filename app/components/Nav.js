import React from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeConsumer} from '../contexts/theme'

 


export default function Nav()
{
    return (
        <ThemeConsumer>
         { ({theme, toggleTheme})=> (
             <nav className='row space-between'>
             <ul className='row nav'>
              <li>
                  <NavLink 
                  to='/' 
                  exact
                  style={ ({ isActive}) => ({ color: isActive? 'rgb(187,46,31)': 'rgb(0,0,0)' })}
                   
                   className='nav-link' > Poplular</NavLink>
              </li>
              <li>
              <NavLink 
                to='/battle'
              style={ ({ isActive}) => ({ color: isActive? 'rgb(187,46,31)': 'rgb(0,0,0)' })}
              
               className='nav-link' > Battle</NavLink>
              </li>
             </ul>

             <button
             style={{fontSize: 30}}
             className='btn-clear'
             onClick={toggleTheme}

             >
              {theme === 'light' ? '🔦' : '💡'}
             </button>
             </nav>
         ) }
        </ThemeConsumer>
    )
}