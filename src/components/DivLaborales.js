import React from 'react'
//CSS
import '../css/DivLaborales.css'

class DivLaborales extends React.Component{

    render(){
        return(
            <div className='divOferta'>
                <div className='divTituliOferta'>
                    <h3><strong>{this.props.desempleo}</strong></h3>
                </div>                                
                <p style={{marginBottom:'2em'}}>{this.props.despuesto}</p>
                <p><strong>Fecha:</strong> {this.props.fecpub}</p>
                <p className='parrafoFinal'><strong>Ubicacion:</strong> {this.props.municipio}</p>
                <p className='parrafoFinal'><strong>Provincia:</strong> {this.props.provincia}</p>
                <p><a className='parrafoFinal' href={this.props.url}>Ver oferta</a></p>
            </div>
        )
    }
}

export default DivLaborales