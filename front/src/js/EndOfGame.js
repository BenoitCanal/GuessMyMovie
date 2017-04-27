import React from 'react'
import {Link, Route} from "react-router-dom";
import {rankings} from "./Ranking";

import logo from '../assets/img/logoWhite.png'; 

export const EndOfGame = (props) => {
    rankings.push(["Demo", props.score]);
    var rows = [];
    props.history.map(function(answer) {
        rows.push(
         <div key={answer} style={{ 
          display: "flex", 
          height: "60px", 
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        paddingLeft: "1em", 
        }}> 
 
          <img src={answer[0]} style={{ 
            display: "block", 
          width: "25%", 
          height: "auto", 
          }}/> 
          <div className={"title " + answer[2] ? "valid" : "fail"} style={{ flex: 1 }}>{answer[1]}</div> 
        </div> 
        );
    }.bind(this))

    return (
        <section className="EndOfGame menuScreen"> 
          <header className="Header"> 
        <img src={logo} className="Header_logo" alt="logo" /> 
      </header> 
            <h2 style={{ margin: "1em 0" }}>{`Score: ${props.score}`}</h2> 
            <h2 style={{ marginBottom: "1em" }} >Liste des films</h2> 
            <div style={{ height: "300px", overflowX: "hidden", overflowY: "scroll" }}> 
              {rows} 
            </div> 
            <ul className="EndOfGame_menu"> 
              <li className="EndOfGame_menu-element"><Link to="/ranking">Classement</Link></li> 
              <li className="EndOfGame_menu-element"><Link to="/">Retour</Link></li> 
            </ul> 
        </section> 
    );
};