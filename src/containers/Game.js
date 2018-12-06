import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

export default class Game extends Component {
  _btnClicked = (name) => {
    const {
      config: { resposta }
    } = this.props;

    return !(name === resposta.nome);
  };

  _renderButtons = ({ palavras }) => {
    const { gameOver } = this.props;

    return palavras.map((palavra) => {
      const { nome } = palavra;
      return (
        <Button
          title={nome}
          key={nome}
          onClick={() => this._btnClicked(nome)}
          onWin={gameOver}
        />
      );
    });
  };

  render() {
    const { config } = this.props;

    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around'
        }}
      >
        {this._renderButtons(config)}
      </div>
    );
  }
}

Game.propTypes = {
  config: PropTypes.object,
  gameOver: PropTypes.func
};
