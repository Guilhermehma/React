import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './Componentes/Primeiro'
import Saudacao from './Componentes/Saudacao'
import BomDia from './Componentes/BomDia'
import Botoes from './Componentes/Botoes'

ReactDOM.render(
    <div>
        <Primeiro/>
        <BomDia/>
        <Saudacao tipo = "Bom dia " nome = "Guilherme"/>
        <Botoes/>
    </div>,
    document.getElementById('root'))