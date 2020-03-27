import React from "react";

export default function Twostem({ vocals, accompaniment }) {
    console.log("vocals: ", vocals);
    if (vocals && accompaniment) {
        return (
            <div id="twostem-container">
                <div>
                    <h3>Vocals</h3>
                    <br />
                    <br />
                    <audio
                        type="audio/wav"
                        key={vocals}
                        controls
                        src={vocals}
                    ></audio>
                    <br />
                    <br />
                    <audio
                        type="audio/wav"
                        controls
                        src="./output/Z3eOIRHhQqeJRd-dtoycmWkCkqr33C-6/vocals.wav"
                    ></audio>
                </div>

                <div>
                    <h3>Accompaniment</h3>
                    <br />
                    <br />
                    <audio
                        type="audio/wav"
                        controls
                        key={accompaniment}
                        src={accompaniment}
                    ></audio>
                    <br />
                    <br />
                    <audio controls>
                        <source
                            src="./output/Z3eOIRHhQqeJRd-dtoycmWkCkqr33C-6/accompaniment.wav"
                            type="audio/wav"
                        />
                    </audio>
                </div>
            </div>
        );
    } else {
        return (
            <div id="error">
                Something went wrong. <br />
                Please <a href="/">try again</a>!
            </div>
        );
    }
}