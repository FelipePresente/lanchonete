import { useState } from 'react'
import './App.css'
import mac1 from './assets/mac1.png'
import mac2 from './assets/mac2.webp'

function App() {
  const dadosCombo = {
    casal: {
      imagem: mac1,
      titulo: 'Combo para duas pessoas',
      preco: "R$ 65,00",
      descricao: 'descricao 1'
    },
    familia: {
      imagem: mac2,
      titulo: 'Combo para quatro pessoas',
      preco: "R$ 100,00",
      descricao: "descricao 2",
    }
  }

  const [combo, setCombo] = useState(dadosCombo.casal)

  const alterarCombo = () => {
  }

  return (
    <>
      <div className="container">
        <h1>Escolha o seu combo</h1>
        <button onClick={alterarCombo}>Mudar Combo</button>
      </div>

       <img src={combo.imagem} alt="" />
    </>
  )
}

export default App
