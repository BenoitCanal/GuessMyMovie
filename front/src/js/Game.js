import React from "react";
import {Route} from "react-router-dom";

export class Game extends React.Component {
    URL = "http://localhost:9000";

    constructor(props) {
        super(props);

        this.state = {
            score: 0,
            answers: [],
            title: null,
            img: null,
        };
    }

    render() {
        if (this.state.image !== null) {
            return (
                <img src={this.state.image}/>
            );
        }

    }

    get(URL) {
        const params = {
            method: "GET"
        };
        return window.fetch(URL, params);
    }

    componentDidMount() {
        get(`${URL}/play`).then( resp =>
            this.setState({
                answers: resp.answers,
                title: resp.title,
                image: resp.image,
            })
        )
    }
}