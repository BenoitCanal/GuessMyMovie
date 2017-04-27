import React from "react";
import {Route} from "react-router-dom";
import {EndOfGame} from "./EndOfGame";

export class Game extends React.Component {
    URL = "http://localhost:9000";

    constructor(props) {
        super(props);

        this.state = {
            score: 0,
            answers: [],
            title: null,
            image: null,
            isGameOver: false,
        };
    }

    render() {
        console.log(this.state);
        if (this.state.isGameOver) {
            return <EndOfGame score={this.state.score}/>
        } else if (this.state.image) {
            const answers = this.state.answers.map(ans => <button key={ans} onClick={() => this.doAnswer(ans)}>{ans}</button>);
            return (
                <div>
                    <img src={this.state.image} width="640px"/>
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
        this.get(`${this.URL}/play/1`).then(resp =>
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
            this.get(`${this.URL}/play/1`).then(resp =>
                resp.json().then( body => {
                    console.log(body);
                    this.setState({
                            answers: body.answers,
                            title: body.title,
                            image: body.image,
                            score: this.state.score + 1
                        })
                    }
                )
            )
        } else {
            this.setState({
                score: this.state.score,
                isGameOver: true,
            });
        }
    }
}