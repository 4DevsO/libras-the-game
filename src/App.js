import React, { Component } from "react";
import Logo from "./components/Logo";
import Container from "./components/Container";
import Icon from "./components/Icon";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container title="O Jogo" center>
          <Logo />
        </Container>
        <Container
          center
          style={{
            position: "absolute",
            bottom: "94px",
            top: "146.5px",
            right: 0,
            left: 0
          }}
        >
          <Icon size="extra-large" />
          JOGAR
        </Container>
        <Container
          title="Por"
          center
          style={{ position: "fixed", bottom: 0, right: 0, left: 0 }}
        >
          Equipe CdC
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
