import React, { Component } from 'react'
import { SunspotLoader } from "react-awesome-loaders";

interface IProps {
}

interface IState {
    ready?: boolean;
    animation?: boolean;
}

export default class Load extends Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            ready: false,
            animation: false
        }
        this.updateReady = this.updateReady.bind(this);
        this.animation = this.animation.bind(this);
    }
    componentDidMount(){
        setTimeout(this.updateReady, 1200);
        setTimeout(this.animation, 1550);
    }

    updateReady(){
        this.setState({ready: true})
    }
    animation(){
        this.setState({animation: true})
    }
    render() {
        const {ready, animation} = this.state;
        return (
            !animation ? 
            <div className={ ready ? 'uk-section uk-section-primary uk-flex uk-flex-center uk-flex-middle uk-animation-slide-right-medium uk-animation-reverse' : 'uk-section uk-section-primary uk-flex uk-flex-center uk-flex-middle'} style={{width: '100vw', height: '100vh', zIndex: 999, top: 0, left: 0, margin: 0, position: 'fixed', backgroundColor: '#121212'}}>
                <SunspotLoader
                    gradientColors={["#FF4742", "#E0E7FF"]}
                    shadowColor={"#000000"}
                    desktopSize={"128px"}
                    mobileSize={"100px"}
                /> 
            </div>
            : ''
        )
    }
}
