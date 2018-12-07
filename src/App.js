import React, { Component } from 'react';
import Logo from './components/Logo';
import Container from './components/Container';
import Icon from './components/Icon';
import Game from './containers/Game';

import api from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGame: undefined,
      instructions: undefined,
      blank: undefined
    };
  }

  _onHome = () => {
    this.setState({
      currentGame: undefined,
      instructions: undefined,
      blank: undefined
    });
  };

  _onPlay = async () => {
    const game = await api('game');

    this.setState({ currentGame: game });
  };

  _onNextGame = async () => {
    const game = await api('game');

    this.setState({ currentGame: undefined });
    setTimeout(() => {
      this.setState({ currentGame: game });
    }, 0);
  };

  _onInstructions = () => {
    const { instructions, blank } = this.state;
    this.setState({ instructions: !instructions, blank: !blank });
  };

  render() {
    const { currentGame, instructions, blank } = this.state;
    return (
      <React.Fragment>
        {!currentGame && (
          <Container title="O Jogo" center>
            <Logo />
          </Container>
        )}
        {currentGame && (
          <Container title={currentGame.configuracao.nome} center>
            <img src={currentGame.configuracao.imagem} height="83" />
          </Container>
        )}
        {instructions && (
          <Container title="Instruções" center>
            <p>
              Este jogo tem o objetivo de auxiliar no aprendizado das
              configurações de mãos em libras. Aperte o botão Jogar e aguarde a
              configuração de mão, serão exibidas 4 opções, escolha a palavra
              que utiliza tal configuração. Ao escolher uma opção errada ela se
              tornará indisponível, e você poderá escolher outra opção até que
              acerte e passe para a próxima fase.
            </p>
          </Container>
        )}
        {!instructions && (
          <React.Fragment>
            <Container
              center
              style={{
                position: 'absolute',
                bottom: '94px',
                top: '146.5px',
                right: 0,
                left: 0
              }}
            >
              {!currentGame && !blank && (
                <React.Fragment>
                  <button
                    onClick={() => this._onPlay()}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      background: 'transparent',
                      border: 0
                    }}
                  >
                    <Icon size="extra-large" />
                    JOGAR
                  </button>
                </React.Fragment>
              )}
              {currentGame && (
                <Game
                  config={currentGame}
                  gameOver={() => this._onNextGame()}
                />
              )}
            </Container>
            <Container
              title="Por"
              center
              style={{ position: 'fixed', bottom: 0, right: 0, left: 0 }}
            >
              3Devs1Eletrician
            </Container>
          </React.Fragment>
        )}
        {!currentGame && (
          <button
            onClick={() => this._onInstructions()}
            style={{
              position: 'fixed',
              background: 'transparent',
              border: 0,
              right: 5,
              bottom: 102
            }}
          >
            <Icon type="question" size="small" />
          </button>
        )}
      </React.Fragment>
    );
  }
}

export default App;
