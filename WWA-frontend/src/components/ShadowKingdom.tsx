import React, { Component } from 'react';
import './ShadowKingdom.css';

class ShadowKingdom extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            gamesList: [],
            agree1: false,
            agree2: false
        };
    }
    async handleSubmit(data: any) {
        console.log('Data on submit', data);
        const response = {
            status: 200
        }
        /*  CALLING ABCKEND */
        // await fetch('/api/registration', {
        //     method: 'POST',
        //     body: JSON.stringify(data)
        // });
        if (response.status === 200) {
            // show success notification
        }
        else {
            throw new Error(`Request failed: ${response.status}`);
        }
    }
    checkBoxClicked(data: any) {
        if (data.target.checked) {
            const list = [...this.state.gamesList, data.target.value];
            this.setState({ gamesList: list });
        } else {
            const list = this.state.gamesList.filter(val => {
                return val != data.target.value
            });
            this.setState({ gamesList: list })
        }

    }
    agreementBtnClicked(data: any) {
        if (data.target.id === 'firstCheckbox') {
            this.state.agree1 = data.target.checked;
        } else if (data.target.id === 'secondCheckbox') {
            this.state.agree2 = data.target.checked;
        }
    }
    render() {
        const list1 = [{ name: 'Game 1', id: 1 }, { name: 'Game 2', id: 2 }, { name: 'Game 3', id: 3 }, { name: 'Game 4', id: 4 }]
        const list2 = [{ name: 'Game 5', id: 5 }, { name: 'Game 6', id: 6 }, { name: 'Game 7', id: 7 }, { name: 'Game 8', id: 8 }]
        return (
            <div className='root'>
                <div className='container pt-3'>
                    <div className='row justify-content-center'>
                        <div className='col-4'><h1>SHADOW KINGDOM</h1></div>
                    </div>
                </div>
                <div className='container pt-4 pb-2 border border-white'>
                    <div className='row justify-content-center'>
                        <div className='col-2'><h2>ADVENTURE</h2></div></div>
                    <div className='row justify-content-center'>

                        <div className='col-5'>
                            <ul className='list-font'>
                                {
                                    list1.map((game) =>
                                        <li className='list-group-item'
                                            key={game.name}>
                                            <input className="form-check-input me-1" type="checkbox" value={game.id} id="firstCheckbox"
                                                onChange={(event) =>
                                                    this.checkBoxClicked(event)
                                                } />
                                            <label className="form-check-label">{game.name}</label>
                                        </li>)
                                }
                            </ul>
                        </div>
                        <div className='col-5'>
                            <ul className='list-font'>
                                {
                                    list2.map((game) =>
                                        <li className='list-group-item'
                                            key={game.name}>
                                            <input className="form-check-input me-1" type="checkbox" value={game.id} id="firstCheckbox"
                                                onChange={(event) =>
                                                    this.checkBoxClicked(event)
                                                } />
                                            <label className="form-check-label">{game.name}</label>
                                        </li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='container mt-5'>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <ul className=''>
                                <li className='list-group-item'>
                                    <input className="form-check-input me-1" type="checkbox" value={this.state.agree1} id="firstCheckbox"
                                        onChange={(event) =>
                                            this.agreementBtnClicked(event)
                                        } />
                                    <label className="form-check-label">I have read and understood the health and warning statement by checking this box.
                                        I acknowledge and accept the risk associated with adventure sports and  <br />confirm my suitability to participate.</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <ul className=''>
                                <li className='list-group-item'>
                                    <input className="form-check-input me-1" type="checkbox" value={this.state.agree2} id="secondCheckbox"
                                        onChange={(event) =>
                                            this.agreementBtnClicked(event)
                                        } />
                                    <label className="form-check-label">I agree for terms and conditions.</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='row justify-content-end'>
                        <div className='col-2'>
                            <button type="button" className="btn btn-light" onClick={() => this.handleSubmit(this.state)}>Book</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShadowKingdom;