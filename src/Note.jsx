import React, { Component } from 'react'

export class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genreId:-1,
            searchKey:'',
            quality:'All',
            imdb:[2.5,10],
            release_year:[]
        }
    }

    handleChange = e=>{
        const {name,value}=e.target;
        // switch (key) {
        //     case value:
                
        //         break;
        
        //     default:
        //         break;
        // }
        this.setState({genreId:3})
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Note
