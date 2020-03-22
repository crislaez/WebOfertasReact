import React from 'react'
//COMPONENTES
import DivFormativas from './DivFormativas'
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
        //creamos un array vacio para coger todos los municipios
        //del array principal para que no se repitan
        //ya que el array tiene 700 y pico indices
        //y queremos filtrar por municipios
        const arrayMunicipios = [];

        this.state.array.map((data, key) => {
            //si el municipio no esta dentro del nuevo arrayMunicipios
            //lo añadimos con un push
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
                            <DivFormativas
                            key={key}
                            titulo={data.titulo}
                            centro={data.centro}
                            municipio={data.municipio}
                            f_inicio={data.f_inicio}
                            f_fin={data.f_fin}
                            hora_ini_m={data.hora_ini_m}
                            hora_fin_m={data.hora_fin_m}
                            hora_ini_t={data.hora_ini_t}
                            hora_fin_t={data.hora_fin_t}
                            horas={data.horas}
                            lunes={data.lunes}
                            martes={data.martes}
                            miercoles={data.miercoles}
                            jueves={data.jueves}
                            viernes={data.viernes}
                            sabado={data.sabado}
                            domingo={data.domingo}
                            url={data.url}
                            ></DivFormativas>
                        )
                    })
                    :
                    this._isMount && !this.state.load
                    ?
                    this.state.arrayFiltrado.map((data, key) => {
                        return(
                            <DivFormativas
                            key={key}
                            titulo={data.titulo}
                            centro={data.centro}
                            municipio={data.municipio}
                            f_inicio={data.f_inicio}
                            f_fin={data.f_fin}
                            hora_ini_m={data.hora_ini_m}
                            hora_fin_m={data.hora_fin_m}
                            hora_ini_t={data.hora_ini_t}
                            hora_fin_t={data.hora_fin_t}
                            horas={data.horas}
                            lunes={data.lunes}
                            martes={data.martes}
                            miercoles={data.miercoles}
                            jueves={data.jueves}
                            viernes={data.viernes}
                            sabado={data.sabado}
                            domingo={data.domingo}
                            url={data.url}
                            ></DivFormativas>
                        )
                    })
                    :
                    <div>Cargando...</div>
                }
                </div>
            </article>
        )
    }
}

export default OFormativa