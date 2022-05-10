import React from 'react'

import { ThemeConsumer} from '../contexts/theme'

export default function Nav()
{
    return (
        <ThemeConsumer>
         { ({theme, toggleTheme})=> (
             <nav className='row space-between'>
             <ul>
                 
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