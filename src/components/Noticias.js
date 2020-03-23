import React from 'react'
//CSS
import '../css/Noticias.css'

class Noticias extends React.Component{

    _isMounth = true;

    constructor(props){
        super(props)
        this.state = {};
    }

    componentDidMount(){
        this._isMounth = true;      

        fetch('http://elpais.com/BKMK?id=<clave_API>&c=getfolder',{method:'GET'})
        .then(data => data.json())
        .then(response => {
            console.log(response)
        })
    }

    componentWillUnmount(){
        this._isMounth = false;
    }

    render(){
        return(
            <article className='articleNoticias'>
                <div className='divTituloNoticias'>
                    <h2>{this.props.titulo}</h2>
                </div>

                <div className='divContenedorNoticias'>

                </div>
            </article>
        )
    }
}

export default Noticias