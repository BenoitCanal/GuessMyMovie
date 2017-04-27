import React from "react";
import {Route} from "react-router-dom";
import {EndOfGame} from "./EndOfGame";

export class Game extends React.Component {
    URL = "http://localhost:9000";
    session = Math.floor(Math.random() * 1000);
    playURL = `${this.URL}/play?sessionId=${this.session}`;

    constructor(props) {
        super(props);

        this.state = {
            score: 0,
            answers: [],
            title: null,
            image: null,
            isGameOver: false,
            history: [],
        };
    }

    render() {
        console.log(this.session);
        console.log(this.state);
        if (this.state.isGameOver) {
            return <EndOfGame score={this.state.score}/>
        } else if (this.state.image) {
            const answers = this.state.answers.map(ans => <button key={ans} onClick={() => this.doAnswer(ans)}>{ans}</button>);
            return (
                <div>
                    <img src={this.state.image} style={{width: "100vw"}}/>
                    {answers}
                </div>
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
    }

    doAnswer(answerByUser) {
        console.log(answerByUser);
        if (this.state.title === answerByUser) {
            this.get(this.playURL).then(resp => {
                if (resp.status === 204) {
                    this.setState({
                        isGameOver: true
                    })
                } else {
                    resp.json().then(body => {
                            console.log(body);
                            this.setState({
                                answers: body.answers,
                                title: body.title,
                                image: body.image,
                                score: this.state.score + 1
                            })
                        }
                    )
                }
            })
        } else {
            this.get(this.playURL).then(resp => {
                if (resp.status === 204) {
                    this.setState({
                        isGameOver: true
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