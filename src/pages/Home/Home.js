import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Calender from '../../components/Calender/Calender';
import Chart from '../../components/Chart/Chart';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ArrowUp from "../../icons/arrow-up.png";
import Discount from '../../icons/discount-circle.svg';
import MoneyReceive from '../../icons/money-recive.svg';
import MoneySend from '../../icons/money-send.svg';
import Card from '../../icons/postcard.svg';
import './Home.css';


const Home = () => {
    const postCardDatas = [
        {
            title:'Scheduled',
            quantity:106,
            color:'purple'
        },
        {
            title:'Processing',
            quantity:54,
            color:'orange'
        },
        {
            title:'Printing',
            quantity:75,
            color:'blue'
        },
        {
            title:'Mailing',
            quantity:42,
            color:'indigo'
        },
        {
            title:'Delivered',
            quantity:48,
            color:'green'
        },
        {
            title:'Returned',
            quantity:25,
            color:'red-orange'
        },

    ]
    return (
        <div className='home'>
            <NavigationBar />
            <div className='dashboard'>
                <Container fluid>
                    <Row>
                        <Col className='home-container'>
                            <Calender />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <div className="property-box">
                                <div className="property-item">
                                    <div className="left-side">
                                        <div className="icon-box bg-1">
                                            <img src={Card} alt="icon" />
                                        </div>
                                        <div className="text-box">
                                            <p>Delivered cards</p>
                                            <h5>4,982</h5>
                                        </div>
                                    </div>
                                    <div className='percentage-text'>
                                        <img src={ArrowUp} alt="icon" />
                                        <p>13%</p>
                                    </div>
                                </div>
                                <div className="property-item">
                                    <div className="left-side">
                                        <div className="icon-box bg-2">
                                            <img src={MoneySend} alt="icon" />
                                        </div>
                                        <div className="text-box">
                                            <p>Ad spend</p>
                                            <h5>$6,302</h5>
                                        </div>
                                    </div>
                                    <div className='percentage-text'>
                                        <img src={ArrowUp} alt="icon" />
                                        <p>48%</p>
                                    </div>
                                </div>
                                <div className="property-item">
                                    <div className="left-side">
                                        <div className="icon-box bg-3">
                                            <img src={MoneyReceive} alt="icon" />
                                        </div>
                                        <div className="text-box">
                                            <p>Attributed sales</p>
                                            <h5>$47,280</h5>
                                        </div>
                                    </div>
                                    <div className='percentage-text'>
                                        <img src={ArrowUp} alt="icon" />
                                        <p>2%</p>
                                    </div>
                                </div>
                                <div className="property-item">
                                    <div className="left-side">
                                        <div className="icon-box bg-4">
                                            <img src={Discount} alt="icon" />
                                        </div>
                                        <div className="text-box">
                                            <p>ROAS</p>
                                            <h5>48%</h5>
                                        </div>
                                    </div>
                                    <div className='percentage-text'>
                                        <img src={ArrowUp} alt="icon" />
                                        <p>13%</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='area-chart'>
                                <h5>All Campaigns</h5>
                                <Chart />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="post-card">
                                <div className="post-card-top">
                                    <h5>Postcards</h5>
                                    <button>View All Postcard Reports</button>
                                </div>
                                <div className="post-card-data">
                                    {postCardDatas.map(data=>(
                                        <div className="data-item" key={data.color}>
                                            <h6 className={data.color}>{data.title}</h6>
                                            <p>{data.quantity}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;