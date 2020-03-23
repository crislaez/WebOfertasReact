import React from 'react'
//compontes
import Nav from './Nav'
import Aside from './Aside'
import OLaborales from './OLaborales'
import OFormativa from './OFormativa'
import Noticias from './Noticias'
//css
import '../css/Section.css'

class Section extends React.Component{

    _isMount = true;
    _estado = true;
    
    constructor(props){
        super(props);

        this.state = 
            {
                estado:'OFERTAS LABORALES'               
            };
    }

    componentDidMount(){
        this._isMount = true
    }

    componentWillUnmount(){
        this._isMount = false;
    }

    funcionMenu = (event) => {
        let divAside = document.getElementsByTagName('Aside');

        if(this._estado){
            divAside[0].style.width = '20%';
            this._estado = false;
        }else{            
            divAside[0].style.width = '0%';
            this._estado = true;
        }
    }

    cambiarSection = (event) => {
        console.log(event.target.id);
        if(event.target.id == 'bOfertasLaborales'){
            this.setState({estado:'OFERTAS LABORALES'})
        }else if(event.target.id == 'bOfertasFormativas'){
            this.setState({estado:'OFERTAS FORMATIVAS'})
        }else if(event.target.id == 'bNoticias'){
            this.setState({estado:'NOTICIAS'})
        }else if(event.target.id == 'bContacto'){
            this.setState({estado:'CONTACTO'})
        }
    }

    render(){
        return(
            <section>                
                <Nav evento={this.cambiarSection} eventoMenu={this.funcionMenu}></Nav>
                <Aside id='divAside'></Aside>
                {
                    this.state.estado == 'OFERTAS LABORALES'
                    ?
                    <OLaborales titulo={this.state.estado}></OLaborales>
                    :
                    this.state.estado == 'OFERTAS FORMATIVAS'
                    ?
                    <OFormativa titulo={this.state.estado}></OFormativa>
                    :
                    this.state.estado == 'NOTICIAS'
                    ?
                    <Noticias titulo={this.state.estado}></Noticias>
                    :
                    this.state.estado == 'CONTACTO'
                    ?
                    <div><h2>{this.state.estado}</h2></div>
                    :
                    <div>Cargando...</div>
                }
            </section>
        )
    }
}

export default Section