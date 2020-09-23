import React, { Component } from 'react'
import Bottom from '../components/Bottom'
import Featured from '../components/Featured'
import Header from '../components/Header'
import List from '../components/List'
import Slider from '../components/Slider'

export default class Home extends Component {
    render() {
        return (
            <>
                <Header/>
                <Featured/>
                <List/>
                <Slider/>
                <Bottom/>
            </>
        )
    }
}
