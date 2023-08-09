import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './CampaignTopBar.css';


const CampaignTopBar = () => {
    return (
        <div className='campaign-topbar'>
            <Container fluid>
                <Row>
                    <Col>
                        <h5>Campaign settings</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CampaignTopBar;