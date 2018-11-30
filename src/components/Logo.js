import React, { PureComponent } from "react";
import librasO from "../assets/o-jogo/letter-o.svg";
import librasJ from "../assets/o-jogo/letter-j.svg";
import librasG from "../assets/o-jogo/letter-g.svg";

export default class Logo extends PureComponent {
  render() {
    return (
      <div className="logo">
        <img src={librasO} className="spinning-logo" alt="O" />
        <div className="logo-spacer" />
        <div className="jogo">
          <img src={librasJ} className="spinning-logo" alt="J" />
          <img src={librasO} className="spinning-logo" alt="O" />
          <img src={librasG} className="spinning-logo" alt="G" />
          <img src={librasO} className="spinning-logo" alt="O" />
        </div>
      </div>
    );
  }
}
