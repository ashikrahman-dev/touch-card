import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './CampaignType.css';

const CampaignType = () => {
    return (
        <div className="campaign-type">
            <Container fluid>
                <h3 className='optionHeader'>What type of campaign would you like to create?</h3>
                <div className="row">
                    <div className="col-xl-3 mb-4">
                        <div className="type-item bg-white h-100">
                            <div class="form-check">
                                <label class="form-check-label   d-flex align-items-center bg-white p-4 radius-8 position-relative w-100" for="Automation">
                                    <div className="inputF">
                                        <input class="input-radio" type="radio" name="radio" id="Automation" />
                                        <div className="shadow-active"></div>
                                    </div>
                                    <div className="itemInfo">
                                        <div className="editAddress px-0 py-0 ">
                                            <div className="d-flex align-items-center gap-2 justify-content-between">
                                                <h4 className="editAddressHeading mb-0">Automation</h4>
                                            </div>
                                            <div className="mt-2">
                                                <p className="editAddressPra mb-0">Create a campaign that sends to contacts automatically.</p>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 mb-4">
                        <div className="type-item bg-white h-100">
                            <div className="type-item">
                                <div class="form-check">
                                    <label class="form-check-label   d-flex align-items-center bg-white p-4 radius-8 position-relative w-100" for="VIPs">
                                        <div className="inputF">
                                            <input class="input-radio" type="radio" name="radio" id="VIPs" />
                                            <div className="shadow-active"></div>
                                        </div>
                                        <div className="itemInfo">
                                            <div className="editAddress px-0 py-0 ">
                                                <div className="d-flex align-items-center gap-2 justify-content-between">
                                                    <h4 className="editAddressHeading mb-0">One-off</h4>
                                                </div>
                                                <div className="mt-2">
                                                    <p className="editAddressPra mb-0">
                                                        Send a one-time campaign to <br /> contacts.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CampaignType;