import React from "react";
import {Route} from "react-router-dom";

export class Game extends React.Component {
    URL = "http://localhost:9000";

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img src="http://localhost:9000/assets/img/1.jpg"/>
        );
    }

    get(URL) {
        const params = {
            method: "GET"
        };
        window.fetch(URL, params)
    }

    componentDidMount() {
        window.fetch(URL, )
    }
}