import React from 'react'
import ReactDOM from 'react-dom'

import Battle from './components/Battle'
import './index.css'
import Popular from './components/popular'
class App extends React.Component{
    //hello app

    render()
    {

         
        return(
            <div className='container'>

               <Battle />
            </div>
        )
    }
}

ReactDOM.render( <App/>,
document.getElementById('app'))