import { useState } from 'react'
import './App.css'
import imgCasal from './assets/casal.jpg'
import imgIndividual from './assets/individual.jpg'
import CardProduto from './components/CardProduto'

function App() {
  const [tipoCombo, setTipoCombo] = useState('casal');
  
  const dadosCombo = {
    casal: {
      imagem: imgCasal,
      titulo: 'Combo para duas pessoas',
      preco: 'R$ 90,00',
      descricao: 'Dois hambúrgueres + batata frita para dois.'
    },

    individual: {
      imagem: imgIndividual,
      titulo: 'Combo individual',
      preco: 'R$ 55,00',
      descricao: 'Hambúrguer + batata frita + bebida.'
    }
  }

  const dados = dadosCombo[tipoCombo]

  const alterarCombo = () => {
    setTipoCombo(tipoCombo === 'casal' ? 'individual' : 'casal')
  }

  return (
    <>
      <div className='container'>
        <h1>Escolha o seu combo</h1>
        <button onClick={alterarCombo}>Mudar combo</button>
      

      <CardProduto imagem={dados.imagem} titulo={dados.titulo} preco={dados.preco} descricao={dados.descricao} />
      </div>
    </>
  )
}

export default App
