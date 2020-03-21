import React from 'react'
//componentes
import Header from './Header'
import Section from './Section'
import Footer from './Footer'
//css
import '../css/App.css'

class App extends React.Component{
    render(){
        return(
            <div>
                <Header titulo='JOBNUARL'></Header>
                <Section></Section>
                <Footer></Footer>
            </div>
        )
    }
}

export default App