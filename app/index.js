import React from 'react'
import ReactDOM from 'react-dom'

// import Battle from './components/Battle'
import './index.css'
// import Popular from './components/popular'
import Nav from './components/Nav'
import Loading from './components/loading'
import { ThemeProvider } from './contexts/theme'
import {
    BrowserRouter,
    Routes,
    Route,
    
  } from "react-router-dom";
import { useState,useEffect } from 'react'
// import Results from './components/Results'



const Popular = React.lazy( ()=> import('./components/popular'))
const Battle = React.lazy(() =>import('./components/Battle'))
const Results = React.lazy( ()=>import('./components/Results'))



function App()
{
    const [theme,setTheme] = useState('light')
    const toggleTheme = ()=> setTheme( (theme)=> theme === 'light' ?'dark':'light')
      
    return(
        <BrowserRouter>
        
        <ThemeProvider value={theme}> 
        <div className={theme}>
            <div className='container'>
            <Nav  toggleTheme={toggleTheme} />
            <React.Suspense fallback={<Loading />}>
            <Routes>
            <Route path='/' element={ <Popular />} /> 
            <Route path='/battle' element={<Battle />} />
            <Route path='/battle/results' element={<Results />} />
            </Routes>
            </React.Suspense>
            </div>
        </div>
        </ThemeProvider>


      
        </BrowserRouter>
    )
}


// class App extends React.Component{


//     state={
//         theme: 'light',
//         toggleTheme: ()=> {
//             this.setState( ({ theme})=> ({
//                 theme: theme === 'light' ? 'dark' : 'light'
//             }))
//         } 
//    }

    

//     render()
//     {

         
//         return(
//             <BrowserRouter>
            
//             <ThemeProvider value={this.state}> 
//             <div className={this.state.theme}>
//                 <div className='container'>
//                 <Nav />
//                 <React.Suspense fallback={<Loading />}>
//                 <Routes>
//                 <Route path='/' element={ <Popular />} /> 
//                 <Route path='/battle' element={<Battle />} />
//                 <Route path='/battle/results' element={<Results />} />
//                 </Routes>
//                 </React.Suspense>
//                 </div>
//             </div>
//             </ThemeProvider>
// =

          
//             </BrowserRouter>
//         )
//     }
// }

ReactDOM.render( <App/>,
document.getElementById('app'))