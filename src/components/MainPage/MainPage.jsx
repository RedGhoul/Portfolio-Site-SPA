import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import About from './About/About';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import HireMe from './HireMe/HireMe';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import config from '../../config/config';
export class MainPage extends Component {
    componentDidMount() {
        NotificationManager.info(config.notifyMSG, '', config.notifyMSGTimeOut);
    }

    render() {
        return (
            <div>
                <NotificationContainer />
                <ScrollAnimation animateIn="fadeIn" duration={2} >
                    <Header></Header>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" duration={2} >
                    <Resume></Resume>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" duration={2}>
                    <About></About>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" duration={2} >
                    <Projects></Projects>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" duration={2}>
                    <Skills />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" duration={2}>
                    <HireMe />
                </ScrollAnimation>
                <Footer></Footer>
            </div>
        )
    }
}

export default MainPage
