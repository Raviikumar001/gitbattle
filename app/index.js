import React from 'react'
import ReactDOM from 'react-dom'

import Battle from './components/Battle'
import './index.css'
import Popular from './components/popular'
import Nav from './components/Nav'

import { ThemeProvider } from './contexts/theme'
import {
    BrowserRouter,
    Routes,
    Route,
    
  } from "react-router-dom";
import Results from './components/Results'



class App extends React.Component{


    state={
        theme: 'light',
        toggleTheme: ()=> {
            this.setState( ({ theme})=> ({
                theme: theme === 'light' ? 'dark' : 'light'
            }))
        }
   }

    // constructor(props)
    // { 
    //     super(props)
    //     this.state={
    //             theme: 'light',
    //             toggleTheme: ()=> {
    //                 this.setState( ({ theme})=> ({
    //                     theme: theme === 'light' ? 'dark' : 'light'
    //                 }))
    //             }
    //     }

    // }
    //hello app

    render()
    {

         
        return(
            <BrowserRouter>
            
            <ThemeProvider value={this.state}> 
            <div className={this.state.theme}>
                <div className='container'>
                <Nav />
                
                <Routes>
                <Route path='/' element={ <Popular />} /> 
                <Route path='/battle' element={<Battle />} />
                <Route path='/battle/results' element={<Results />} />
                </Routes>
                
                </div>
            </div>
            </ThemeProvider>
=

          
            </BrowserRouter>
        )
    }
}

ReactDOM.render( <App/>,
document.getElementById('app'))