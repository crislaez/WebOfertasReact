import React from 'react'
//css
import '../css/Nav.css'
//FONT AWESOME
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faFacebook, faTwitter} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'

class Nav extends React.Component{
    render(){
        return(
            <nav>
                <button onClick={this.props.eventoMenu}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
                <input id='bOfertasLaborales' type='button' value='OFERTAS LABORALES' onClick={this.props.evento}></input>
                <input id='bOfertasFormativas' type='button' value='OFERTAS FORMATIVAS' onClick={this.props.evento}></input>
                <input id='bNoticias' type='button' value='NOTICIAS' onClick={this.props.evento}></input>
                <input id='bContacto' type='button' value='CONTACTO' onClick={this.props.evento}></input>
            </nav>
        )
    }
}

export default Nav