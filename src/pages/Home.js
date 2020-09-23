import React, { Component } from 'react'
import Bottom from '../components/Bottom'
import Featured from '../components/Featured'
import List from '../components/List'
import Slider from '../components/Slider'

export default class Home extends Component {
    render() {
        return (
            <>
                <Bottom/>
                
                <Featured/>
                <div class="container-fluid margin-top-100 margin-bottom-80">
                <List/>
                <Slider/>
                </div>
            </>
        )
    }
}
