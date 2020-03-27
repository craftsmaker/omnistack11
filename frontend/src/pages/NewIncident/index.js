import React from 'react'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './style.css'

import logoImg from '../../assets/logo.svg'

export default function NewIncident(){
	return(
		<div className="new-incident-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be The Hero"/>

					<h1>Cadastro</h1>
					<p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
					<Link to="/" className="back-link">
						<FiArrowLeft/>
						Voltar para home
					</Link>
				</section>

				<form>
					<input placeholder="Título do caso"/>
					<textarea placeholder="Descrição"/>
					<input placeholder="Valor em reais"/>

					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	)
}