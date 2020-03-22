import React from 'react'
import firebase from 'firebase'
//COMPONENTE
import DivLaborales from './DivLaborales'
//CSS
import '../css/OLaborales.css'

const keys = {

}

const databaseOLaborales = firebase.initializeApp(keys,'secondary');

class OLaborales extends React.Component{
    _isMounted = true;

    constructor(props){
        super(props);
        this.state = 
            {
                array:[],
                arrayFiltrado:[],
                load:true
            }
    }

    componentDidMount(){
        this._isMounted = true;

        databaseOLaborales.database().ref().on('value',(snap) => {
           
            if(this._isMounted){
                this.setState({array:snap.val()})
            }            
        })
    }

    filstrarArray = (dato,bool) =>{
        // console.log(dato)
        this.setState({load:false})
        //creamos un array vacio para el push de abajo
        let aux = [];
        //limpiamos el array que muestra las ofertas
        this.setState({arrayFiltrado:[]})
        //recorremos cada indice del valor que nos devuelve la bd y si coincide con
        //el parametro que es el resultado del select
        //lo añadimos al array aux
        this.state.array.forEach((d,key) => {
            if(bool){
                if(d.municipio == dato){
                    aux.push(d);
                }  
            }else{
                if(d.provincia == dato){
                    aux.push(d);
                } 
            }
            
        })          
        //en aux estan todos los arrays filtrados por el parametro que es lo que hemos
        //selecionado en el select
        //y lo metemos en el array estado
        this.setState({arrayFiltrado:aux});           
    }

    porMunicipio = (param) => {
        let opcion = document.getElementsByTagName('select');
        if(param.target.value != '0'){
            //llamamos a la funcion
            this.filstrarArray(param.target.value,true);
            //hacemos que el otro select tenga el valor 0
            opcion[1].value = '0';
        }else{
            alert('Escoja un Municipio')
        }        
    }

    porProvincia = (param) => {
        let opcion = document.getElementsByTagName('select');
        if(param.target.value != '0'){
            //llamamos a la funcion
            this.filstrarArray(param.target.value,false);
            //hacemos que el otro select tenga el valor 0
            opcion[0].value = '0';
        }else{
            alert('Escoja una Provincia')
        }   
    }   

    componentWillUnmount(){
        this._isMounted = false;
    }
//------------------------------------------------------------------------------------------
    render(){

        //estos dos arrays cogen los valores de minucipio y de provincia del array principal
        //y coge los valores sin que se repitan en los 2 select
        const arrayMunicipio = [];
        const arrayProvincia = [];
       
        this.state.array.map((data,key) => {
            if(arrayMunicipio.indexOf(data.municipio) == -1){ 
                arrayMunicipio.push(data.municipio);
            }
        })

        this.state.array.map((data,key) => {
            if(arrayProvincia.indexOf(data.provincia) == -1){ 
                arrayProvincia.push(data.provincia);
            }
        })
        

        return(
            <article className='articleOLaborales'>
                <div className='divTituloOLaborales'>
                    <h2>{this.props.titulo}</h2>
                </div>
                <div className='divContenedor'>
                    <div className='formularioBuscador'>
                        <select onChange={this.porMunicipio}>
                        <option value='0'>--Municipio--</option>
                        {
                            arrayMunicipio.map((data,key) => {
                                return(
                                    <option key={key} value={data}>{data}</option>
                                )
                            })
                        }
                        </select> 
                        
                        <select onChange={this.porProvincia}>
                        <option value='0'>--Provincia--</option>
                        {
                            arrayProvincia.map((data,key) => {
                                return(
                                    <option key={key} value={data}>{data}</option>
                                )
                            })
                        }
                        </select> 
                    </div>
                {
                    this._isMounted && this.state.array && this.state.load
                    ?
                    this.state.array.map((data , key) => {
                        return(
                            <DivLaborales 
                            key={key} 
                            desempleo={data.desEmpleo} 
                            despuesto={data.desPuesto.toLowerCase()} 
                            fecpub={data.fecPub}
                            municipio={data.municipio}
                            provincia={data.provincia}
                            url={data.url}
                            ></DivLaborales>
                        )
                    })
                    :this._isMounted && this.state.array && !this.state.load
                    ?
                    this.state.arrayFiltrado.map((data , key) => {
                        return(
                            <DivLaborales 
                            key={key} 
                            desempleo={data.desEmpleo} 
                            despuesto={data.desPuesto.toLowerCase()} 
                            fecpub={data.fecPub}
                            municipio={data.municipio}
                            provincia={data.provincia}
                            url={data.url}
                            ></DivLaborales>
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

export default OLaborales
