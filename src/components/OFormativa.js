import React from 'react'
//CSS
import '../css/OFormativa.css'
//firebase
import firebase from 'firebase'

const key = {

}
   
const databaseOFormativas = firebase.initializeApp(key);

class OFormativa extends React.Component{

    _isMount = true;

    constructor(props){
        super(props)
        this.state = 
            {
                load:true,
                array:[],
                buscar:'',
                arrayFiltrado:[]
            }
    }

    componentDidMount(){
        this._isMount = true;

        databaseOFormativas.database().ref().on('value',(snap) => {
            if(this._isMount){
                this.setState({array:snap.val()})
            }   
        })
    }
    
    componentWillUnmount(){
        this._isMount = false;
    }

    filtrarArray = (dato) => {
        let aux = [];

        this.state.array.map((data) => {
            if(dato == data.municipio){
                aux.push(data);
            }
        })
        this.setState({load:false,arrayFiltrado:aux});
    } 
    
    buscardor = (param) => {
        if(param.target.value != '0'){           
            this.filtrarArray(param.target.value)
        }else{
            alert('Escoja un Municipio')
            this.setState({load:true})
        }
    }

    render(){
        const arrayMunicipios = [];

        this.state.array.map((data, key) => {
            if(arrayMunicipios.indexOf(data.municipio) == -1){
                arrayMunicipios.push(data.municipio)
            }           
        })

        return(
            <article className='articleOFormativas'>
                <div className='divTituloOFormativa'>
                    <h2>{this.props.titulo}</h2>
                </div>
                
                <div className='divContenedorOFormativas'>
                    <div className='divSelectOFormativa'>
                        <select style={{marginLeft:'35%'}} onChange={this.buscardor}>
                            <option value='0'>--Municipio--</option>
                            {
                                arrayMunicipios.map((data,key) => {
                                    return(
                                        <option key={key} value={data}>{data}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                {
                    this._isMount && this.state.load && this.state.array
                    ?
                    this.state.array.map((data, key) => {
                        return(
                            <div key={key} className='divOFormativa'>
                                <div className='divTituloOFormativaDatos'>
                                    <h3>{data.titulo}</h3>
                                </div>                                
                                <p><strong>Centro:</strong> {data.centro}</p>
                                <p><strong>Municipio:</strong> {data.municipio}</p>
                                <p><strong>Fecha de inicio:</strong> {data.f_inicio}</p>
                                <p><strong>Fecha final:</strong> {data.f_fin}</p>
                                <p><strong>Horario entrada mañana:</strong> {data.hora_ini_m}</p>
                                <p><strong>Horario fin mañana:</strong> {data.hora_fin_m}</p>
                                <p><strong>Horario entrada tarde:</strong> {data.hora_ini_t}</p>
                                <p><strong>Horario fin tarde:</strong> {data.hora_fin_t}</p>
                                <p><strong>Horas totales:</strong> {data.horas}</p>
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
                                            <td>{data.lunes}</td>
                                            <td>{data.martes}</td>
                                            <td>{data.miercoles}</td>
                                            <td>{data.jueves}</td>
                                            <td>{data.viernes}</td>
                                            <td>{data.sabado}</td>
                                            <td>{data.domingo}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p><a href={data.url}>Ver oferta</a></p>
                            </div>
                        )
                    })
                    :
                    this._isMount && !this.state.load
                    ?
                    this.state.arrayFiltrado.map((data, key) => {
                        return(
                            <div key={key} className='divOFormativa'>
                                <div className='divTituloOFormativaDatos'>
                                    <h3>{data.titulo}</h3>
                                </div>                                
                                <p><strong>Centro:</strong> {data.centro}</p>
                                <p><strong>Municipio:</strong> {data.municipio}</p>
                                <p><strong>Fecha de inicio:</strong> {data.f_inicio}</p>
                                <p><strong>Fecha final:</strong> {data.f_fin}</p>
                                <p><strong>Horario entrada mañana:</strong> {data.hora_ini_m}</p>
                                <p><strong>Horario fin mañana:</strong> {data.hora_fin_m}</p>
                                <p><strong>Horario entrada tarde:</strong> {data.hora_ini_t}</p>
                                <p><strong>Horario fin tarde:</strong> {data.hora_fin_t}</p>
                                <p><strong>Horas totales:</strong> {data.horas}</p>
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
                                            <td>{data.lunes}</td>
                                            <td>{data.martes}</td>
                                            <td>{data.miercoles}</td>
                                            <td>{data.jueves}</td>
                                            <td>{data.viernes}</td>
                                            <td>{data.sabado}</td>
                                            <td>{data.domingo}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p><a href={data.url}>Ver oferta</a></p>
                            </div>
                        )
                    })
                    :
                    <div>argando</div>

                }
                </div>
            </article>
        )
    }
}

export default OFormativa