import React from "react";
import contactIcon1 from "../../icons/contact-icon1.svg";
import contactIcon2 from "../../icons/contact-icon2.svg";
import contactIcon3 from "../../icons/contact-icon3.svg";
import crossIcon from "../../icons/cross-icon.svg";
import airbnb from "../../icons/airbnb.svg";
import edit from "../../icons/Edit.svg";
import "./CampaignTargetingComponent.css";

const CampaignTargetingComponent = () => {
    return (
        <section className="p-4 mx-2">
            <div className="container-fluid">
                {/* componentHeader */}
                <div className="componentHeader border-bottom pb-4 pt-3">
                    <h2 className="text-clr-dark fs-30 fw-semi-bold">Campaign targeting</h2>
                </div>
                {/* componentHeader -END */}

                {/* campaignContacts */}
                <div className="campaignContacts py-4 border-bottom">
                    <h3 className="fs-18 fw-semi-bold text-clr-dark mb-4 pb-2">Which contacts do you want to target with this campaign?</h3>
                    <div className="row">
                        <div className="col-xl-4 mb-4 mb-xl-0">
                            <div className="contactCard radius-8 bg-white p-4 position-relative h-100">
                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <div className="icon">
                                        <img src={contactIcon1} alt="icon" />
                                    </div>
                                    <div className="contactInfo">
                                        <h4 className="fs-18 text-clr-dark fw-medium">Shopify</h4>
                                        <p className="text-clr-gary fs-14 fw-medium mb-2">My Store Name</p>
                                        <p className="mb-0">
                                            <a className="text-clr-sky fs-6 fw-normal" href="!#">
                                                http://domain.myshopify.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <button className="btn position-absolute top-0 end-0">
                                    <img src={crossIcon} alt="icon" />
                                </button>
                            </div>
                        </div>
                        <div className="col-xl-4 mb-4 mb-xl-0">
                            <div className="contactCard radius-8 bg-white p-4 position-relative h-100">
                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <div className="icon">
                                        <img src={contactIcon2} alt="icon" />
                                    </div>
                                    <div className="contactInfo">
                                        <h4 className="fs-18 text-clr-dark fw-medium">Uploaded Contacts</h4>
                                        <p className="text-clr-gary fs-14 fw-medium mb-3">My Uploaded Contacts Name</p>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a
                                                    href="!#"
                                                    className="radius-6 px-2 py-1 bg-clr-off-white fs-13 fw-medium text-clr-grayDeep text-decoration-none d-inline-flex align-items-center gap-1"
                                                >
                                                    <span className="rounded-circle bg-clr-gray d-inline-block mt-1" style={{ width: "5px", height: "5px" }}></span>
                                                    Tag
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button className="btn position-absolute top-0 end-0">
                                    <img src={crossIcon} alt="icon" />
                                </button>
                            </div>
                        </div>
                        <div className="col-xl-4 mb-4 mb-xl-0">
                            <div className="contactCard radius-8 bg-white p-4 position-relative h-100">
                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <div className="icon">
                                        <img src={contactIcon3} alt="icon" />
                                    </div>
                                    <div className="contactInfo">
                                        <h4 className="fs-18 text-clr-dark fw-medium">Contact Group</h4>
                                        <p className="text-clr-gary fs-14 fw-medium mb-3">My Contact Group Name</p>
                                        <button className="btn p-0">
                                            <img src={airbnb} alt="icon" />
                                        </button>
                                    </div>
                                </div>
                                <button className="btn position-absolute top-0 end-0">
                                    <img src={crossIcon} alt="icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* campaignContacts - END */}

                {/* campaign-type */}
                <div className="campaign-type py-4 border-bottom mb-4">
                    <h4 className="fs-18 fw-semi-bold text-clr-dark mb-4 pb-2">Who would you like this campaign to target?</h4>
                    <div className="type-box">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="type-item">
                                    <div class="form-check">
                                        <label class="form-check-label d-flex align-items-center bg-white p-4 radius-8 position-relative w-100 mb-4" for="VIPs">
                                            <div className="inputF">
                                                <input class="input-radio" type="radio" name="radio" id="VIPs" />
                                                <div className="shadow-active"></div>
                                            </div>
                                            <div className="itemInfo">
                                                <h4 className="fs-6 fw-medium text-clr-dark">VIPs</h4>
                                                <p>
                                                    Reward and engage your high-value <br className="d-none d-xl-inline" /> contacts.
                                                </p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="type-item">
                                    <div class="form-check">
                                        <label class="form-check-label d-flex align-items-center bg-white p-4 radius-8 position-relative w-100 mb-4" for="FirstPurchasers">
                                            <div className="inputF">
                                                <input class="input-radio" type="radio" name="radio" id="FirstPurchasers" />
                                                <div className="shadow-active"></div>
                                            </div>
                                            <div className="itemInfo">
                                                <h4 className="fs-6 fw-medium text-clr-dark">First purchasers</h4>
                                                <p>
                                                    Send to new contacts after their first <br className="d-none d-xl-inline" /> purchase.
                                                </p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="type-item">
                                    <div class="form-check">
                                        <label class="form-check-label d-flex align-items-center bg-white p-4 radius-8 position-relative w-100 mb-4" for="Lapsed">
                                            <div className="inputF">
                                                <input class="input-radio" type="radio" name="radio" id="Lapsed" />
                                                <div className="shadow-active"></div>
                                            </div>
                                            <div className="itemInfo">
                                                <h4 className="fs-6 fw-medium text-clr-dark">Lapsed contacts</h4>
                                                <p>
                                                    Winback lapsed contacts that haven’t
                                                    <br className="d-none d-xl-inline" /> purchased in a while.
                                                </p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="type-item">
                                    <div class="form-check">
                                        <label class="form-check-label d-flex align-items-center bg-white p-4 radius-8 position-relative w-100 mb-4" for="Product">
                                            <div className="inputF">
                                                <input class="input-radio" type="radio" name="radio" id="Product" />
                                                <div className="shadow-active"></div>
                                            </div>
                                            <div className="itemInfo">
                                                <h4 className="fs-6 fw-medium text-clr-dark">Product based</h4>
                                                <p>
                                                    Target contacts based on specific
                                                    <br className="d-none d-xl-inline" /> products they have purchased.
                                                </p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="type-item">
                                    <div class="form-check">
                                        <label class="form-check-label d-flex align-items-center bg-white p-4 radius-8 position-relative w-100 mb-4" for="Abandoned">
                                            <div className="inputF">
                                                <input class="input-radio" type="radio" name="radio" id="Abandoned" />
                                                <div className="shadow-active"></div>
                                            </div>
                                            <div className="itemInfo">
                                                <h4 className="fs-6 fw-medium text-clr-dark">Abandoned checkout</h4>
                                                <p>
                                                    Send to contacts that did not complete
                                                    <br className="d-none d-xl-inline" /> their checkout.
                                                </p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="type-item">
                                    <div class="form-check">
                                        <label class="form-check-label d-flex align-items-center bg-white p-4 radius-8 position-relative w-100 mb-4" for="PackageInserts">
                                            <div className="inputF">
                                                <input class="input-radio" type="radio" name="radio" id="PackageInserts" />
                                                <div className="shadow-active"></div>
                                            </div>
                                            <div className="itemInfo">
                                                <h4 className="fs-6 fw-medium text-clr-dark">Package inserts</h4>
                                                <p>
                                                    Engage contacts with personalized,
                                                    <br className="d-none d-xl-inline" /> handwritten product inserts.
                                                </p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="type-item">
                                    <div class="form-check">
                                        <label class="form-check-label d-flex align-items-center bg-white p-4 radius-8 position-relative w-100 mb-4" for="CustomAudience">
                                            <div className="inputF">
                                                <input class="input-radio" type="radio" name="radio" id="CustomAudience" />
                                                <div className="shadow-active"></div>
                                            </div>
                                            <div className="itemInfo">
                                                <h4 className="fs-6 fw-medium text-clr-dark">Custom audience</h4>
                                                <p>
                                                    Use custom filters
                                                    <br className="d-none d-xl-inline" />
                                                </p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* campaign-type - END */}

                {/* Campaign Filters */}
                <div className="campaignFilters bg-white p-4 radius-8 mb-4">
                    {/* filterHeader */}
                    <div className="filterHeader d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
                        <h4 className="fs-18 fw-bold text-clr-dark">Campaign Filters</h4>
                        <button className="btn-touch-card text-clr-purple fw-semi-bold fs-14 px-4 py-2 radius-8 bg-white d-flex align-items-center gap-1" type="button">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.25 8.5H12.75" stroke="#632CC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.5 12.75V4.25" stroke="#632CC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>Add Filter</span>
                        </button>
                    </div>
                    {/* filterHeader -END */}

                    {/* includeContacts */}
                    <div className="includeContacts border-bottom pb-4 mb-4">
                        <h4 className="fs-18 fw-semi-bold text-clr-dark border-bottom pb-4 mb-4">Include these contacts</h4>
                        <div className="elementBox py-4 d-flex align-items-center gap-3 flex-wrap">
                            <div className="singleElement bg-clr-magnolia radius-8 px-3 py-1 fs-14 fw-medium">
                                <p className="mb-0 text-clr-grayDeep d-flex align-items-center gap-2">
                                    Shipping state: <span className="text-clr-dark">Las Vegas, New York,</span> ...
                                    <a href="#" className="text-clr-dark">
                                        View All
                                    </a>
                                    <button className="btn p-1" type="button">
                                        <img src={edit} alt="icon" />
                                    </button>
                                    <button className="btn p-1">
                                        <img src={crossIcon} alt="icon" />
                                    </button>
                                </p>
                            </div>
                            <div className="singleElement bg-clr-magnolia radius-8 px-3 py-1 fs-14 fw-medium">
                                <p className="mb-0 text-clr-grayDeep d-flex align-items-center gap-2">
                                    Product purchased: <span className="text-clr-dark"> Red widget,</span> ...
                                    <a href="#" className="text-clr-dark">
                                        View All
                                    </a>
                                    <button className="btn p-1" type="button">
                                        <img src={edit} alt="icon" />
                                    </button>
                                    <button className="btn p-1">
                                        <img src={crossIcon} alt="icon" />
                                    </button>
                                </p>
                            </div>
                            <div className="singleElement bg-clr-magnolia radius-8 px-3 py-1 fs-14 fw-medium">
                                <p className="mb-0 text-clr-grayDeep d-flex align-items-center gap-2">
                                    Customer Orders: <span className="text-clr-dark"> 1</span>
                                    <button className="btn p-1" type="button">
                                        <img src={edit} alt="icon" />
                                    </button>
                                    <button className="btn p-1">
                                        <img src={crossIcon} alt="icon" />
                                    </button>
                                </p>
                            </div>
                            <div className="singleElement bg-clr-magnolia radius-8 px-3 py-1 fs-14 fw-medium">
                                <p className="mb-0 text-clr-grayDeep d-flex align-items-center gap-2">
                                    First order date: <span className="text-clr-dark">June 20, 2022</span>
                                    <button className="btn p-1" type="button">
                                        <img src={edit} alt="icon" />
                                    </button>
                                    <button className="btn p-1">
                                        <img src={crossIcon} alt="icon" />
                                    </button>
                                </p>
                            </div>
                            <div className="singleElement bg-clr-magnolia radius-8 px-3 py-1 fs-14 fw-medium">
                                <p className="mb-0 text-clr-grayDeep d-flex align-items-center gap-2">
                                    Last order date: <span className="text-clr-dark"> Sept 12, 2022</span>
                                    <button className="btn p-1" type="button">
                                        <img src={edit} alt="icon" />
                                    </button>
                                    <button className="btn p-1">
                                        <img src={crossIcon} alt="icon" />
                                    </button>
                                </p>
                            </div>
                            <div className="singleElement bg-clr-magnolia radius-8 px-3 py-1 fs-14 fw-medium">
                                <p className="mb-0 text-clr-grayDeep d-flex align-items-center gap-2">
                                    Total spend on last order: <span className="text-clr-dark"> $248: </span>
                                    <button className="btn p-1" type="button">
                                        <img src={edit} alt="icon" />
                                    </button>
                                    <button className="btn p-1">
                                        <img src={crossIcon} alt="icon" />
                                    </button>
                                </p>
                            </div>
                            <div className="singleElement bg-clr-magnolia radius-8 px-3 py-1 fs-14 fw-medium">
                                <p className="mb-0 text-clr-grayDeep d-flex align-items-center gap-2">
                                    Shipping country: <span className="text-clr-dark"> Canada </span>
                                    <button className="btn p-1" type="button">
                                        <img src={edit} alt="icon" />
                                    </button>
                                    <button className="btn p-1">
                                        <img src={crossIcon} alt="icon" />
                                    </button>
                                </p>
                            </div>
                            <div className="singleElement bg-clr-magnolia radius-8 px-3 py-1 fs-14 fw-medium">
                                <p className="mb-0 text-clr-grayDeep d-flex align-items-center gap-2">
                                    Total spend on all order: <span className="text-clr-dark"> $248 </span>
                                    <button className="btn p-1" type="button">
                                        <img src={edit} alt="icon" />
                                    </button>
                                    <button className="btn p-1">
                                        <img src={crossIcon} alt="icon" />
                                    </button>
                                </p>
                            </div>
                            <div className="singleElement bg-clr-magnolia radius-8 px-3 py-1 fs-14 fw-medium">
                                <p className="mb-0 text-clr-grayDeep d-flex align-items-center gap-2">
                                    Total spend is: <span className="text-clr-dark"> $50 - $200, </span>
                                    <button className="btn p-1" type="button">
                                        <img src={edit} alt="icon" />
                                    </button>
                                    <button className="btn p-1">
                                        <img src={crossIcon} alt="icon" />
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* includeContacts - End */}

                    {/* excludeContacts */}
                    <div className="excludeContacts">
                        <h4 className="fs-18 fw-semi-bold text-clr-dark border-bottom pb-4 mb-4">Exclude these contacts</h4>
                        <div className="elementBox py-4 d-flex align-items-center gap-3 flex-wrap">
                            <div className="singleElement bg-clr-magnolia radius-8 px-3 py-1 fs-14 fw-medium">
                                <p className="mb-0 text-clr-grayDeep d-flex align-items-center gap-2">
                                    Shipping state: <span className="text-clr-dark">Las Vegas, New York,</span> ...
                                    <a href="#" className="text-clr-dark">
                                        View All
                                    </a>
                                    <button className="btn p-1" type="button">
                                        <img src={edit} alt="icon" />
                                    </button>
                                    <button className="btn p-1">
                                        <img src={crossIcon} alt="icon" />
                                    </button>
                                </p>
                            </div>
                            <div className="singleElement bg-clr-magnolia radius-8 px-3 py-1 fs-14 fw-medium">
                                <p className="mb-0 text-clr-grayDeep d-flex align-items-center gap-2">
                                    Product purchased: <span className="text-clr-dark"> Red widget,</span> ...
                                    <a href="#" className="text-clr-dark">
                                        View All
                                    </a>
                                    <button className="btn p-1" type="button">
                                        <img src={edit} alt="icon" />
                                    </button>
                                    <button className="btn p-1">
                                        <img src={crossIcon} alt="icon" />
                                    </button>
                                </p>
                            </div>
                            <div className="singleElement bg-clr-magnolia radius-8 px-3 py-1 fs-14 fw-medium">
                                <p className="mb-0 text-clr-grayDeep d-flex align-items-center gap-2">
                                    Customer Orders: <span className="text-clr-dark"> 1</span>
                                    <button className="btn p-1" type="button">
                                        <img src={edit} alt="icon" />
                                    </button>
                                    <button className="btn p-1">
                                        <img src={crossIcon} alt="icon" />
                                    </button>
                                </p>
                            </div>
                            <div className="singleElement bg-clr-magnolia radius-8 px-3 py-1 fs-14 fw-medium">
                                <p className="mb-0 text-clr-grayDeep d-flex align-items-center gap-2">
                                    First order date: <span className="text-clr-dark">June 20, 2022</span>
                                    <button className="btn p-1" type="button">
                                        <img src={edit} alt="icon" />
                                    </button>
                                    <button className="btn p-1">
                                        <img src={crossIcon} alt="icon" />
                                    </button>
                                </p>
                            </div>
                            <div className="singleElement bg-clr-magnolia radius-8 px-3 py-1 fs-14 fw-medium">
                                <p className="mb-0 text-clr-grayDeep d-flex align-items-center gap-2">
                                    Last order date: <span className="text-clr-dark"> Sept 12, 2022</span>
                                    <button className="btn p-1" type="button">
                                        <img src={edit} alt="icon" />
                                    </button>
                                    <button className="btn p-1">
                                        <img src={crossIcon} alt="icon" />
                                    </button>
                                </p>
                            </div>
                            <div className="singleElement bg-clr-magnolia radius-8 px-3 py-1 fs-14 fw-medium">
                                <p className="mb-0 text-clr-grayDeep d-flex align-items-center gap-2">
                                    Total spend on last order: <span className="text-clr-dark"> $248: </span>
                                    <button className="btn p-1" type="button">
                                        <img src={edit} alt="icon" />
                                    </button>
                                    <button className="btn p-1">
                                        <img src={crossIcon} alt="icon" />
                                    </button>
                                </p>
                            </div>
                            <div className="singleElement bg-clr-magnolia radius-8 px-3 py-1 fs-14 fw-medium">
                                <p className="mb-0 text-clr-grayDeep d-flex align-items-center gap-2">
                                    Shipping country: <span className="text-clr-dark"> Canada </span>
                                    <button className="btn p-1" type="button">
                                        <img src={edit} alt="icon" />
                                    </button>
                                    <button className="btn p-1">
                                        <img src={crossIcon} alt="icon" />
                                    </button>
                                </p>
                            </div>
                            <div className="singleElement bg-clr-magnolia radius-8 px-3 py-1 fs-14 fw-medium">
                                <p className="mb-0 text-clr-grayDeep d-flex align-items-center gap-2">
                                    Total spend on all order: <span className="text-clr-dark"> $248 </span>
                                    <button className="btn p-1" type="button">
                                        <img src={edit} alt="icon" />
                                    </button>
                                    <button className="btn p-1">
                                        <img src={crossIcon} alt="icon" />
                                    </button>
                                </p>
                            </div>
                            <div className="singleElement bg-clr-magnolia radius-8 px-3 py-1 fs-14 fw-medium">
                                <p className="mb-0 text-clr-grayDeep d-flex align-items-center gap-2">
                                    Total spend is: <span className="text-clr-dark"> $50 - $200, </span>
                                    <button className="btn p-1" type="button">
                                        <img src={edit} alt="icon" />
                                    </button>
                                    <button className="btn p-1">
                                        <img src={crossIcon} alt="icon" />
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* excludeContacts - End */}
                </div>
                {/* Campaign Filters - END */}

                {/* retroactive */}
                <div className="retroactive bg-white p-4 radius-8">
                    <h4 className="fs-18 fw-bold text-clr-dark d-flex gap-2 align-items-center">
                        Retroactive sending
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.00016 15.1666C11.6668 15.1666 14.6668 12.1666 14.6668 8.49992C14.6668 4.83325 11.6668 1.83325 8.00016 1.83325C4.3335 1.83325 1.3335 4.83325 1.3335 8.49992C1.3335 12.1666 4.3335 15.1666 8.00016 15.1666Z"
                                stroke="#9B95A9"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path d="M8 11.8333V8.49992" stroke="#9B95A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.99609 6.5H8.00208" stroke="#9B95A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </h4>
                    <div className="mt-4">
                        <input className="form-check-input" type="checkbox" value="" id="trackingCheck2" />
                        <label className="form-check-label ms-2" for="trackingCheck2">
                            Send to contacts retroactively
                        </label>
                    </div>
                </div>
                {/* retroactive -end */}
            </div>
        </section>
    );
};

export default CampaignTargetingComponent;
