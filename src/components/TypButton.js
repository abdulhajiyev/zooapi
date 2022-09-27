import axios from 'axios';
import React, { Component } from 'react';

class TypButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            types: [],
            value: '',
            typeArr: [],
        }
    }

    getTypes() {
        axios.get('http://localhost:3002/api/get/types')
            .then(res => {
                const types = res.data;
                this.setState({ types });
            })
    }

    componentDidMount() {
        this.getTypes();
    }

    render() {
        const { types } = this.state;
        return (
            <div className='flex flex-wrap justify-center m-8'>
                {types.map((type) => (
                    <button className='mt-2 mx-5 px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white shadow rounded-full' key={type.name} onClick={this.props.onClick}>{type.name}</button>
                ))}
            </div>
        )
    }
}

export default TypButton