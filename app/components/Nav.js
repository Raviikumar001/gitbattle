import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import ThemeContext from '../contexts/theme'

 


export default function Nav({ toggleTheme })
{
     const theme = useContext(ThemeContext)
    return (
      
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
    
    )
}