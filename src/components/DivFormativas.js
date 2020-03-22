import React from 'react'
//CSS
import '../css/DivFormativas.css'

class DivFormativas extends React.Component{
    render(){
        return(
            <div className='divOFormativa'>
                <div className='divTituloOFormativaDatos'>
                    <h3>{this.props.titulo}</h3>
                </div>                                
                <p><strong>Centro:</strong> {this.props.centro}</p>
                <p><strong>Municipio:</strong> {this.props.municipio}</p>
                <p><strong>Fecha de inicio:</strong> {this.props.f_inicio}</p>
                <p><strong>Fecha final:</strong> {this.props.f_fin}</p>
                <p><strong>Horario entrada mañana:</strong> {this.props.hora_ini_m}</p>
                <p><strong>Horario fin mañana:</strong> {this.props.hora_fin_m}</p>
                <p><strong>Horario entrada tarde:</strong> {this.props.hora_ini_t}</p>
                <p><strong>Horario fin tarde:</strong> {this.props.hora_fin_t}</p>
                <p><strong>Horas totales:</strong> {this.props.horas}</p>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>L</th>
                            <th>M</th>
                            <th>X</th>
                            <th>J</th>
                            <th>V</th>
                            <th>S</th>
                            <th>D</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.lunes}</td>
                            <td>{this.props.martes}</td>
                            <td>{this.props.miercoles}</td>
                            <td>{this.props.jueves}</td>
                            <td>{this.props.viernes}</td>
                            <td>{this.props.sabado}</td>
                            <td>{this.props.domingo}</td>
                        </tr>
                    </tbody>
                </table>
                <p><a href={this.props.url}>Ver oferta</a></p>
            </div>
        )
    }
}

export default DivFormativas