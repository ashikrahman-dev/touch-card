import React from 'react';
import CampaignSettings from '../../components/CampaignSettings/CampaignSettings';
import CampaignTopBar from '../../components/CampaignTopBar/CampaignTopBar';
import CampaignType from '../../components/CampaignType/CampaignType';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import './Campaign.css';

const Campaign = () => {
    return (
        <div>
            <NavigationBar />
            <div className="campaign-main">
               <CampaignTopBar />
               <hr />
               <CampaignType />
               <hr />
               <CampaignSettings />
            </div>
        </div>
    );
};

export default Campaign;