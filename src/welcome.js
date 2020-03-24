import React from "react";
import Uploader from "./uploader.js";
import { BrowserRouter, Route } from "react-router-dom";
import Captcha from "./captcha.js";
import axios from "./axios.js";
import { Link } from "react-router-dom";

export default class Welcome extends React.component {
    constructor() {
        super();
        this.state = {
            whatevs: true
        };
        this.submitUpload = this.submitUpload.bind(this);
    }
    submitUpload(file) {
        // e.preventDefault();
        var formData = new FormData();
        formData.append("file", file);
        axios
            .post("/upload", formData)
            .then(resp => {
                console.log("stuff just happened");
                console.log("new profile pic URL: ", resp.data.profile_pic);
                console.log("state before set: ", this.state);
                this.setState({
                    profile_pic: resp.data.profile_pic,
                    uploader: false
                });
            })
            .catch(err => {
                console.log("err in POST /upload: ", err);
            });
    }
    render() {
        return (
            <div>
                <div id="title-container">
                    <h2>Spleet up your audio files!</h2>
                    <h1>
                        <img src="/logo.png" />
                    </h1>
                    <h3>
                        A powerful tool for musicians and music-lovers alike
                    </h3>
                    <a href="/uploader">Proceed to the upload page</a>
                    <BrowserRouter>
                        <Route exact path="/" component={Captcha} />
                        <Route
                            exact
                            path="/uploader"
                            render={() => (
                                <Uploader
                                    handleChange={e => {
                                        e.preventDefault();
                                        console.log(
                                            "handleChange is happening"
                                        );
                                        console.log(e.target.files);
                                    }}
                                    submitUpload={this.submitUpload}
                                />
                            )}
                        />
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}
