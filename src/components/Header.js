import React from 'react'
//css
import '../css/Header.css'

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className='divTituloHeader'>
                    <h1>{this.props.titulo}</h1>
                </div>
            </header>
        )
    }
}

export default Header