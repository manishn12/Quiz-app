import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';

class Question extends Component {
    constructor(props) {
        super(props);
        this.handleUploadedFiles = this.handleUploadedFiles.bind(this);

        // this.state{
        //   currentTime: time
        // }
    }

    /**
     * Function to upload file
     */
    handleUploadedFiles = (files) => {
        var reader = new FileReader();
        var today = new Date();
        const time =
            today.getHours() +
            ':' +
            today.getMinutes() +
            ':' +
            today.getSeconds();

        reader.onload = (e) => {
            //Split csv file data by new line so that we can skip first row which is header
            let jsonData = reader.result.split('\n');
            let data = [];
            jsonData.forEach((element, index) => {
                if (index || time === '05:00:00') {
                    //Split csv file data by comma so that we will have column data
                    const elementRaw = element.split(',');
                    console.log(element, index);
                    if (element) {
                        let param = {
                            id: elementRaw[0],
                            Question: elementRaw[1],
                            option1: elementRaw[2],
                            option2: elementRaw[3],
                            option3: elementRaw[4],
                            option4: elementRaw[5],
                            answer: elementRaw[6],
                        };
                        data.push(param);
                    }
                }
            });
        };
        console.log('TCL: Dashboard -> reader.readyState', reader.readyState);
        reader.readAsText(files[0]);
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h4>Upload File</h4>
                        <div className="m-b-10">Accepted File format: csv</div>
                    </div>
                    <div className="col-md-12">
                        <p>
                            <ReactFileReader
                                handleUploadedFiles={this.handleUploadedFiles}
                                fileTypes={'.csv'}
                            >
                                <button className="btn btn-primary btn-file">
                                    Upload
                                </button>
                            </ReactFileReader>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Question;
