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
      currentGame: undefined
    };
  }

  _onPlay = () => {
    this.setState({ currentGame: api('game') });
  };

  _onNextGame = () => {
    this.setState({ currentGame: undefined });
    setTimeout(() => {
      this.setState({ currentGame: api('game') });
    }, 0);
  };

  render() {
    const { currentGame } = this.state;
    console.log(currentGame);
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
          {!currentGame && (
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
            <Game config={currentGame} gameOver={() => this._onNextGame()} />
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
    );
  }
}

export default App;
