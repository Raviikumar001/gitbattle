import React from 'react'
import ReactDOM from 'react-dom'

import Battle from './components/Battle'
import './index.css'
import Popular from './components/popular'
import Nav from './components/Nav'
import { ThemeProvider } from './contexts/theme'
class App extends React.Component{

    constructor(props)
    { 
        super(props)
        this.state={
                theme: 'light',
                toggleTheme: ()=> {
                    this.setState( ({ theme})=> ({
                        theme: theme === 'light' ? 'dark' : 'light'
                    }))
                }
        }

    }
    //hello app

    render()
    {

         
        return(
            <ThemeProvider value={this.state}> 
            <div className={this.state.theme}>
                <div className='container'>
                <Nav />
                <Battle />
                </div>
            </div>
            </ThemeProvider>
        )
    }
}

ReactDOM.render( <App/>,
document.getElementById('app'))