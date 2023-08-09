import Steps, { Step } from 'rc-steps';
import React from 'react';


const description =
  'alid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles'

const CampaignStep = () => {
    return (
        <div>
            <Steps labelPlacement="vertical" current={1}>
              <Step title="已完成" description={description} />
              <Step title="进行中" description={description} />
              <Step title="待运行" description={description} />
              <Step title="待运行" description={description} />
              <Step title="待运行" description={description} />
            </Steps>
        </div>
    );
};

export default CampaignStep;