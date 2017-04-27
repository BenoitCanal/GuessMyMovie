import React from "react";
import {Route} from "react-router-dom";
import {EndOfGame} from "./EndOfGame";

export class Game extends React.Component {
    URL = "http://192.168.43.17:9000";
    session = Math.floor(Math.random() * 1000);
    playURL = `${this.URL}/play?sessionId=${this.session}`;
    delta = 600;

    constructor(props) {
        super(props);

        this.state = {
            score: 0,
            answers: [],
            title: null,
            image: null,
            isGameOver: false,
            history: [],
            barWidth: 100,
        };
    }

    render() {
        console.log(this.session);
        console.log(this.state);
        if (this.state.isGameOver) {
            return <EndOfGame score={this.state.score} history={this.state.history}/>
        } else if (this.state.image) {
            const answers = this.state.answers.map(ans => <button key={ans} className="Game_answers-element" onClick={() => this.doAnswer(ans)}>{ans}</button>);
            return (
                <section className="Game menuScreen">
                    <header className="Game_header">
                        <div className="Game_header-jokerHalf"></div>
                        <div className="Game_header-score">{this.state.score}</div>
                        <div className="Game_header-jokerSkip"></div>
                    </header>
                    <h1>De quel film vient cette image ?</h1>
                    <div style={{width: `${this.state.barWidth}vw`, backgroundColor: "red", height: "10px"}}/>
                    <img src={this.state.image} style={{width: "100vw"}}/>
                    <div className="Game_answers">
                        {answers}
                    </div>
                </section>
            );
        }
        else return null;

    }

    get(URL) {
        const params = {
            method: "GET"
        };
        return window.fetch(URL, params);
    }

    animation() {
        console.log(this.state.barWidth)
        if (this.state.barWidth === 0) {
            this.setState({ isGameOver: true })
        } else {
            this.setState({ barWidth: this.state.barWidth - 1});
            setTimeout(this.animation.bind(this), this.delta);
        }
    }

    componentDidMount() {
        console.log("Test")
        this.get(this.playURL).then(resp =>
            resp.json().then( body => {
                    console.log(body)
                    this.setState({
                        answers: body.answers,
                        title: body.title,
                        image: body.image
                    })
                }
            )
        )
        setTimeout(this.animation.bind(this), this.delta);
    }

    doAnswer(answerByUser) {
        console.log(answerByUser);
        if (this.state.title === answerByUser) {
            this.state.history.push([this.state.image, this.state.title, true])
            this.get(this.playURL).then(resp => {
                if (resp.status === 204) {
                    this.setState({
                        isGameOver: true,
                    })
                } else {
                    resp.json().then(body => {
                            console.log(body);
                            this.setState({
                                answers: body.answers,
                                title: body.title,
                                image: body.image,
                                score: this.state.score + 1,
                            })
                        }
                    )
                }
            })
        } else {
            this.state.history.push([this.state.image, this.state.title, false]);
            this.get(this.playURL).then(resp => {
                if (resp.status === 204) {
                    this.setState({
                        isGameOver: true,
                    })
                } else {
                    resp.json().then( body => {
                            console.log(body);
                            this.setState({
                                answers: body.answers,
                                title: body.title,
                                image: body.image,
                            })
                        }
                    )
                }
            })
        }
    }
}