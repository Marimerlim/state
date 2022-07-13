// Crie uma class component
// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.
// Renderize na tela:
// Seu nome em um h1
// Sua idade em um h2
// Sua comida favorita em um h3
// Suas músicas favoritas em uma lista (ul / ol)
//**Bônus
// Adicione uma imagem da sua fruta favorita via import

import React from "react";

export default class App extends React.Component {
  state = {
    nome: "Mariana",
    idade: 19,
    comidaFavorita: "Fígado com batata-frita",
    musica: ["Sharks", "Demons", "Higher Ground"]
  };
  render() {
    return (
      <div>
        <h1>Nome: {this.state.nome} </h1>
        <h2>{this.state.idade} anos </h2>
        <h3> Ponto fraco: {this.state.comidaFavorita}</h3>
        <nav>
          <li>
            <ul>{this.state.musica[0]}</ul>
            <ul>{this.state.musica[1]}</ul>
            <ul>{this.state.musica[2]}</ul>
          </li>
        </nav>
      </div>
    );
  }
}
