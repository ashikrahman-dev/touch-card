import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Doller from "../../icons/dollar-circle.png";
import Info from "../../icons/info-circle.svg";
import Mike from "../../icons/Megaphone.png";
import "./CampaignSettings.css";
import '../../components/CampaignType/CampaignType.css'


const CampaignSettings = () => {
    return (
        <div className="CampainSettingWrapper">
            <div className="campaign-settings">
                <Container fluid>
                    <Row>
                        <Col>
                            <h5>Settings</h5>
                            <label>Campaign Name</label>
                            <div className="top-input">
                                <img src={Mike} alt="icon" />
                                <input type="text" placeholder="Campaign name" />
                            </div>
                            <hr />
                            <h6>Budget</h6>
                            <div className="budget-input-box">
                                <div className="budget-input-item">
                                    <label>
                                        Monthly Budget{" "}
                                        <span>
                                            {" "}
                                            <img src={Info} alt="icon" />{" "}
                                        </span>
                                    </label>
                                    <div className="input-box">
                                        <img src={Doller} alt="icon" />
                                        <input type="text" placeholder="Monthly budget" />
                                    </div>
                                </div>
                                <div className="budget-input-item">
                                    <label>
                                        Daily Spending Limit{" "}
                                        <span>
                                            {" "}
                                            <img src={Info} alt="icon" />{" "}
                                        </span>
                                    </label>
                                    <div className="input-box">
                                        <img src={Doller} alt="icon" />
                                        <input type="text" placeholder="Daily spending limit" />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <h6>Campaign Schedule</h6>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Send my campaign continuously{" "}
                                    <span>
                                        <img src={Info} alt="icon" />
                                    </span>
                                </label>
                            </div>
                            <div className="row">
                                <div className="col-xl-3">
                                    <div className="mb-3 calenderWrapper ">
                                        <label for="exampleFormControlInput1" className="form-label">
                                            Start Date:
                                        </label>
                                        <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="mb-3 calenderWrapper ">
                                        <label for="exampleFormControlInput1" className="form-label">
                                            End Date:
                                        </label>
                                        <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="form-check mt-2">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label mb-0" for="flexCheckDefault">
                                        Set a daily sending schedule for this campaign{" "}
                                        <span>
                                            <img src={Info} alt="icon" />
                                        </span>
                                    </label>
                                </div>

                                <div className="sendMailWrapper mt-3">
                                    <h3 className="sendMailHeading">Only send mail on these days of the week.</h3>
                                    <div className="daySelectWrapper d-flex gap-3 mt-3">
                                        <label htmlFor="Mon" className="dayLabel">
                                            <input id="Mon" type="checkbox" name="Mon" className="d-none" checked />
                                            <h5 className="daySelect mb-0 d-flex align-items-center justify-content-center">Mon</h5>
                                        </label>
                                        <label htmlFor="Tue" className="dayLabel">
                                            <input id="Tue" type="checkbox" name="Tue" className="d-none" />
                                            <h5 className="daySelect mb-0 d-flex align-items-center justify-content-center">Tue</h5>
                                        </label>
                                        <label htmlFor="Wed" className="dayLabel">
                                            <input id="Wed" type="checkbox" name="Wed" className="d-none" />
                                            <h5 className="daySelect mb-0 d-flex align-items-center justify-content-center">Wed</h5>
                                        </label>
                                        <label htmlFor="Thu" className="dayLabel">
                                            <input id="Thu" type="checkbox" name="Thu" className="d-none" />
                                            <h5 className="daySelect mb-0 d-flex align-items-center justify-content-center">Thu</h5>
                                        </label>
                                        <label htmlFor="Fri" className="dayLabel">
                                            <input id="Fri" type="checkbox" name="Fri" className="d-none" />
                                            <h5 className="daySelect mb-0 d-flex align-items-center justify-content-center">Fri</h5>
                                        </label>
                                        <label htmlFor="Sat" className="dayLabel">
                                            <input id="Sat" type="checkbox" name="Sat" className="d-none" />
                                            <h5 className="daySelect mb-0 d-flex align-items-center justify-content-center">Sat</h5>
                                        </label>
                                        <label htmlFor="Sun" className="dayLabel">
                                            <input id="Sun" type="checkbox" name="Sat" className="d-none" />
                                            <h5 className="daySelect mb-0 d-flex align-items-center justify-content-center">Sun</h5>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="tracking my-4 ">
                <div className="trackingWrapper">
                    <h4 className="trackHeader mb-4">Tracking</h4>
                    <div className="form-check d-flex align-items-center ">
                        <div>
                            <input className="form-check-input" type="checkbox" value="" id="trackingCheck" />
                            <label className="form-check-label" for="trackingCheck">
                                Direct customers to a specific URL
                            </label>
                        </div>
                        <svg className="ms-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.00016 14.6666C11.6668 14.6666 14.6668 11.6666 14.6668 7.99992C14.6668 4.33325 11.6668 1.33325 8.00016 1.33325C4.3335 1.33325 1.3335 4.33325 1.3335 7.99992C1.3335 11.6666 4.3335 14.6666 8.00016 14.6666Z"
                                stroke="#9B95A9"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path d="M8 11.3333V7.99992" stroke="#9B95A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.99609 6H8.00208" stroke="#9B95A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className="row">
                        <div className="col-xl-3">
                            <div className="my-3 formProject">
                                <label for="url" className="form-label w-100">
                                    Destination URL
                                </label>
                                <input type="email" className="form-control " id="url" placeholder="aquabliss.com/special-offer" />
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-end">
                        <div className="col-xl-3">
                            <div className="form-check d-flex align-items-center mt-2">
                                <div>
                                    <input className="form-check-input" type="checkbox" value="" id="trackingCheck2" />
                                    <label className="form-check-label" for="trackingCheck2">
                                        Track customer action with a tracking URL
                                    </label>
                                </div>
                                <svg className="ms-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.00016 14.6666C11.6668 14.6666 14.6668 11.6666 14.6668 7.99992C14.6668 4.33325 11.6668 1.33325 8.00016 1.33325C4.3335 1.33325 1.3335 4.33325 1.3335 7.99992C1.3335 11.6666 4.3335 14.6666 8.00016 14.6666Z"
                                        stroke="#9B95A9"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path d="M8 11.3333V7.99992" stroke="#9B95A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.99609 6H8.00208" stroke="#9B95A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className="my-3 formProject">
                                <label for="selects" className="form-label w-100">
                                    Select a tracking domain
                                </label>
                                <select className="form-select" id="selects" aria-label="Default select example">
                                    <option selected>aquablissoffer.com</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="my-3 formProject">
                                <label for="url" className="form-label w-100">
                                    Create subdomain
                                </label>
                                <input type="text" className="form-control " id="url" placeholder=".aquablissoffer.com" />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col-xl-3">
                            <div className="form-check d-flex align-items-center mt-2">
                                <div>
                                    <input className="form-check-input" type="checkbox" value="" id="trackingCheck3" />
                                    <label className="form-check-label" for="trackingCheck3">
                                        Add UTM codes to tracking URL
                                    </label>
                                </div>
                                <svg className="ms-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.00016 14.6666C11.6668 14.6666 14.6668 11.6666 14.6668 7.99992C14.6668 4.33325 11.6668 1.33325 8.00016 1.33325C4.3335 1.33325 1.3335 4.33325 1.3335 7.99992C1.3335 11.6666 4.3335 14.6666 8.00016 14.6666Z"
                                        stroke="#9B95A9"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path d="M8 11.3333V7.99992" stroke="#9B95A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.99609 6H8.00208" stroke="#9B95A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                            <div className="my-3 formProject">
                                <label for="utm_source" className="form-label w-100">
                                    utm_source
                                </label>
                                <input type="text" className="form-control " id="utm_source" placeholder="utm_source" />
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="my-3 formProject">
                                <label for="utm_medium" className="form-label w-100">
                                    utm_medium
                                </label>
                                <input type="text" className="form-control " id="utm_medium" placeholder="utm_medium" />
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="my-3 formProject">
                                <label for="utm_name" className="form-label w-100">
                                    utm_name
                                </label>
                                <input type="text" className="form-control " id="utm_name" placeholder="utm_name" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3">
                            <div className="my-3 formProject">
                                <label for="utm_medium" className="form-label w-100">
                                    utm_term
                                </label>
                                <input type="text" className="form-control " id="utm_term" placeholder="utm_term" />
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="my-3 formProject">
                                <label for="utm_content" className="form-label w-100">
                                    utm_content
                                </label>
                                <input type="text" className="form-control " id="utm_content" placeholder="utm_content" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="returnAddress">
                <div className="edit-border">
                    <div>
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <h4 className="returnHeader mb-1">Add return address</h4>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.00016 14.6666C11.6668 14.6666 14.6668 11.6666 14.6668 7.99992C14.6668 4.33325 11.6668 1.33325 8.00016 1.33325C4.3335 1.33325 1.3335 4.33325 1.3335 7.99992C1.3335 11.6666 4.3335 14.6666 8.00016 14.6666Z"
                                    stroke="#9B95A9"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path d="M8 11.3333V7.99992" stroke="#9B95A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.99609 6H8.00208" stroke="#9B95A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <a className=" addAddress text-decoration-none d-flex align-items-center justify-content-start ps-4 gap-3 mb-5" data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="30.5" cy="30.5" r="30" fill="white" />
                                <path d="M25 30H37" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M31 36V24" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="mb-0 text-clr-dark fw-medium">Add new address</p>
                        </a>
                    </div>

                    <div className="d-flex align-items-center gap-2 mb-3">
                        <h4 className="returnHeader mb-1">Return address</h4>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.00016 14.6666C11.6668 14.6666 14.6668 11.6666 14.6668 7.99992C14.6668 4.33325 11.6668 1.33325 8.00016 1.33325C4.3335 1.33325 1.3335 4.33325 1.3335 7.99992C1.3335 11.6666 4.3335 14.6666 8.00016 14.6666Z"
                                stroke="#9B95A9"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path d="M8 11.3333V7.99992" stroke="#9B95A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.99609 6H8.00208" stroke="#9B95A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="editAddress">
                        <div className="d-flex align-items-center gap-2 justify-content-between">
                            <h4 className="editAddressHeading">Acme Corp Inc.</h4>
                            <div className="d-flex align-items-center gap-2">
                                <svg className="editCursor" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M13.8542 3.59561C13.8541 3.59568 13.8542 3.59555 13.8542 3.59561L4.80915 12.6503L3.81363 16.189L7.35682 15.1957L16.4018 6.14C16.4746 6.06722 16.5161 5.96795 16.5161 5.86503C16.5161 5.76221 16.4753 5.6636 16.4026 5.59083C16.4025 5.59076 16.4026 5.59091 16.4026 5.59083L14.4038 3.59568C14.3309 3.52292 14.232 3.48197 14.1289 3.48197C14.026 3.48197 13.927 3.52297 13.8542 3.59561ZM12.8051 2.54754C13.1562 2.19695 13.6324 2 14.1289 2C14.6254 2 15.1016 2.19693 15.4527 2.54747C15.4527 2.5475 15.4527 2.54745 15.4527 2.54747L17.4515 4.54263C17.8026 4.89333 18 5.36914 18 5.86503C18 6.36091 17.8028 6.8365 17.4518 7.18719L8.26993 16.3799C8.17984 16.4701 8.06798 16.5356 7.94516 16.57L2.94244 17.9724C2.68418 18.0448 2.4069 17.9723 2.21725 17.7829C2.0276 17.5934 1.95512 17.3165 2.02768 17.0586L3.43296 12.0633C3.46728 11.9413 3.53237 11.8301 3.62199 11.7404L12.8051 2.54754Z"
                                        fill="#9B95A9"
                                    />
                                </svg>
                                <svg className="editCursor" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.1665 4.16675L15.8332 15.8334" stroke="#9B95A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.16684 15.8334L15.8335 4.16675" stroke="#9B95A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-2">
                            <p className="editAddressPra mb-0">123 Upper Main Street, Suite #555555 New York, NY, 10001</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="continueBtn mt-4">
                <a className="d-flex justify-content-center align-items-center text-decoration-none fs-6 fw-semibold text-white" href="">
                    Continue
                </a>
            </div>

            <div className="AddAddressmodal">
                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content addressFirstModal">
                            <div className="modal-header border-bottom-0 mb-5 d-block p-0">
                                <div className="d-flex justify-content-between">
                                    <h5 className="modal-title" id="exampleModalToggleLabel">
                                        Return Address
                                    </h5>
                                    <div>
                                        <button className="addAddressBtn" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">
                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.25 8.5H12.75" stroke="#632CC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M8.5 12.75V4.25" stroke="#632CC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <p className="mb-0 ms-3">Add a new return address</p>
                                        </button>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <div className="row">
                                        <div className="col-xl-6 mb-4">
                                            <div className="type-item">
                                                <div className="form-check">
                                                    <label className="form-check-label d-flex align-items-center bg-white p-4 radius-8 position-relative w-100" for="Acme">
                                                        <div className="inputF">
                                                            <input className="input-radio" type="radio" name="radio" id="Acme" />
                                                            <div className="shadow-active"></div>
                                                        </div>
                                                        <div className="itemInfo">
                                                            <div className="editAddress px-0 py-0">
                                                                <div className="d-flex align-items-center gap-2 justify-content-between">
                                                                    <h4 className="editAddressHeading">Acme Corp Inc.</h4>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <svg className="editCursor" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                fill-rule="evenodd"
                                                                                clip-rule="evenodd"
                                                                                d="M13.8542 3.59561C13.8541 3.59568 13.8542 3.59555 13.8542 3.59561L4.80915 12.6503L3.81363 16.189L7.35682 15.1957L16.4018 6.14C16.4746 6.06722 16.5161 5.96795 16.5161 5.86503C16.5161 5.76221 16.4753 5.6636 16.4026 5.59083C16.4025 5.59076 16.4026 5.59091 16.4026 5.59083L14.4038 3.59568C14.3309 3.52292 14.232 3.48197 14.1289 3.48197C14.026 3.48197 13.927 3.52297 13.8542 3.59561ZM12.8051 2.54754C13.1562 2.19695 13.6324 2 14.1289 2C14.6254 2 15.1016 2.19693 15.4527 2.54747C15.4527 2.5475 15.4527 2.54745 15.4527 2.54747L17.4515 4.54263C17.8026 4.89333 18 5.36914 18 5.86503C18 6.36091 17.8028 6.8365 17.4518 7.18719L8.26993 16.3799C8.17984 16.4701 8.06798 16.5356 7.94516 16.57L2.94244 17.9724C2.68418 18.0448 2.4069 17.9723 2.21725 17.7829C2.0276 17.5934 1.95512 17.3165 2.02768 17.0586L3.43296 12.0633C3.46728 11.9413 3.53237 11.8301 3.62199 11.7404L12.8051 2.54754Z"
                                                                                fill="#9B95A9"
                                                                            />
                                                                        </svg>
                                                                        <svg className="editCursor" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M4.1665 4.16675L15.8332 15.8334"
                                                                                stroke="#9B95A9"
                                                                                stroke-width="1.5"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M4.16684 15.8334L15.8335 4.16675"
                                                                                stroke="#9B95A9"
                                                                                stroke-width="1.5"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-2">
                                                                    <p className="editAddressPra mb-0">123 Upper Main Street, Suite #555555 New York, NY, 10001</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-4">
                                            <div className="type-item">
                                                <div className="form-check">
                                                    <label className="form-check-label d-flex align-items-center bg-white p-4 radius-8 position-relative w-100" for="Gohe">
                                                        <div className="inputF">
                                                            <input className="input-radio" type="radio" name="radio" id="Gohe" />
                                                            <div className="shadow-active"></div>
                                                        </div>
                                                        <div className="itemInfo">
                                                            <div className="editAddress px-0 py-0">
                                                                <div className="d-flex align-items-center gap-2 justify-content-between">
                                                                    <h4 className="editAddressHeading">Gohe Design Inc.</h4>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <svg className="editCursor" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                fill-rule="evenodd"
                                                                                clip-rule="evenodd"
                                                                                d="M13.8542 3.59561C13.8541 3.59568 13.8542 3.59555 13.8542 3.59561L4.80915 12.6503L3.81363 16.189L7.35682 15.1957L16.4018 6.14C16.4746 6.06722 16.5161 5.96795 16.5161 5.86503C16.5161 5.76221 16.4753 5.6636 16.4026 5.59083C16.4025 5.59076 16.4026 5.59091 16.4026 5.59083L14.4038 3.59568C14.3309 3.52292 14.232 3.48197 14.1289 3.48197C14.026 3.48197 13.927 3.52297 13.8542 3.59561ZM12.8051 2.54754C13.1562 2.19695 13.6324 2 14.1289 2C14.6254 2 15.1016 2.19693 15.4527 2.54747C15.4527 2.5475 15.4527 2.54745 15.4527 2.54747L17.4515 4.54263C17.8026 4.89333 18 5.36914 18 5.86503C18 6.36091 17.8028 6.8365 17.4518 7.18719L8.26993 16.3799C8.17984 16.4701 8.06798 16.5356 7.94516 16.57L2.94244 17.9724C2.68418 18.0448 2.4069 17.9723 2.21725 17.7829C2.0276 17.5934 1.95512 17.3165 2.02768 17.0586L3.43296 12.0633C3.46728 11.9413 3.53237 11.8301 3.62199 11.7404L12.8051 2.54754Z"
                                                                                fill="#9B95A9"
                                                                            />
                                                                        </svg>
                                                                        <svg className="editCursor" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M4.1665 4.16675L15.8332 15.8334"
                                                                                stroke="#9B95A9"
                                                                                stroke-width="1.5"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M4.16684 15.8334L15.8335 4.16675"
                                                                                stroke="#9B95A9"
                                                                                stroke-width="1.5"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-2">
                                                                    <p className="editAddressPra mb-0">4517 Washington Ave. Manchester, Kentucky 39495</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-4">
                                            <div className="type-item">
                                                <div className="form-check">
                                                    <label className="form-check-label d-flex align-items-center bg-white p-4 radius-8 position-relative w-100" for="Gohe2">
                                                        <div className="inputF">
                                                            <input className="input-radio" type="radio" name="radio" id="Gohe2" />
                                                            <div className="shadow-active"></div>
                                                        </div>
                                                        <div className="itemInfo">
                                                            <div className="editAddress px-0 py-0">
                                                                <div className="d-flex align-items-center gap-2 justify-content-between">
                                                                    <h4 className="editAddressHeading">Gohe Design Inc.</h4>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <svg className="editCursor" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                fill-rule="evenodd"
                                                                                clip-rule="evenodd"
                                                                                d="M13.8542 3.59561C13.8541 3.59568 13.8542 3.59555 13.8542 3.59561L4.80915 12.6503L3.81363 16.189L7.35682 15.1957L16.4018 6.14C16.4746 6.06722 16.5161 5.96795 16.5161 5.86503C16.5161 5.76221 16.4753 5.6636 16.4026 5.59083C16.4025 5.59076 16.4026 5.59091 16.4026 5.59083L14.4038 3.59568C14.3309 3.52292 14.232 3.48197 14.1289 3.48197C14.026 3.48197 13.927 3.52297 13.8542 3.59561ZM12.8051 2.54754C13.1562 2.19695 13.6324 2 14.1289 2C14.6254 2 15.1016 2.19693 15.4527 2.54747C15.4527 2.5475 15.4527 2.54745 15.4527 2.54747L17.4515 4.54263C17.8026 4.89333 18 5.36914 18 5.86503C18 6.36091 17.8028 6.8365 17.4518 7.18719L8.26993 16.3799C8.17984 16.4701 8.06798 16.5356 7.94516 16.57L2.94244 17.9724C2.68418 18.0448 2.4069 17.9723 2.21725 17.7829C2.0276 17.5934 1.95512 17.3165 2.02768 17.0586L3.43296 12.0633C3.46728 11.9413 3.53237 11.8301 3.62199 11.7404L12.8051 2.54754Z"
                                                                                fill="#9B95A9"
                                                                            />
                                                                        </svg>
                                                                        <svg className="editCursor" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M4.1665 4.16675L15.8332 15.8334"
                                                                                stroke="#9B95A9"
                                                                                stroke-width="1.5"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M4.16684 15.8334L15.8335 4.16675"
                                                                                stroke="#9B95A9"
                                                                                stroke-width="1.5"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-2">
                                                                    <p className="editAddressPra mb-0">4517 Washington Ave. Manchester, Kentucky 39495</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="continueBtn mt-4">
                                    <a className="d-flex justify-content-center align-items-center text-decoration-none fs-6 fw-semibold text-white" href="">
                                        Continue
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content addressSecondModal">
                            <div className="modal-header border-bottom-0 mb-3 d-block p-0">
                                <h5 className="modal-title" id="exampleModalToggleLabel">
                                    Return Address
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <div className="row">
                                        <div className="col-xl-6 mb-4">
                                            <div className=" formProject">
                                                <label for="Name" className="form-label w-100">
                                                    Name
                                                </label>
                                                <input type="text" className="form-control " id="Name" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-4">
                                            <div className=" formProject">
                                                <label for="address" className="form-label w-100">
                                                    Address line 1
                                                </label>
                                                <input type="text" className="form-control " id="address" placeholder="Address line 1" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-4">
                                            <div className=" formProject">
                                                <label for="address2" className="form-label w-100">
                                                    Address line 2
                                                </label>
                                                <input type="text" className="form-control " id="address2" placeholder="Address line 1" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-4">
                                            <div className=" formProject">
                                                <label for="City" className="form-label w-100">
                                                    City
                                                </label>
                                                <input type="text" className="form-control " id="City" placeholder="City" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-4">
                                            <div className=" formProject">
                                                <label for="selects" className="form-label w-100">
                                                    State
                                                </label>
                                                <select className="form-select" id="selects" aria-label="Default select example">
                                                    <option selected>Select state</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-4">
                                            <div className=" formProject">
                                                <label for="Zip" className="form-label w-100">
                                                    Zip Code
                                                </label>
                                                <input type="text" className="form-control " id="Zip" placeholder="Zip Code" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-4">
                                            <div className=" formProject">
                                                <label for="selects" className="form-label w-100">
                                                    Country
                                                </label>
                                                <select className="form-select" id="selects" aria-label="Default select example">
                                                    <option selected>Uk</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="continueBtn mt-4">
                                    <a className="d-flex justify-content-center align-items-center text-decoration-none fs-6 fw-semibold text-white" href="">
                                        Save
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignSettings;
