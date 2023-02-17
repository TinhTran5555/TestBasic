import { Steps } from 'antd';
import { useState } from 'react';
import "./style.scss";
import phoneImg from "../../../Images/iPhone 12 Mini.png";

const ClientApp = () => {
  const [current, setCurrent] = useState(1);
  const onChange = (value) => {
    console.log('onChange:', current);
    setCurrent(value);
  };
  return (
    <div className="container mx-auto mb-36 flex justify-center ClientApp" >
      <h1>Outstanding features of the Client App</h1>
    <div className="flex justify-center w-full">
      <div className="customer-left w-1/2 flex justify-center ">
        <div className="itemImg1">

          <img src={phoneImg} alt="iphone12" />
        </div>
      </div>
      <div className="customer-right w-1/2">
        <div className="">
        <Steps
        current={current}
        onChange={onChange}
        direction="vertical"
        className='text-xl'
        items={[
          {
            title: 'Search service in just one button',
            description:"Enjoy convenience in just one app.",
          },
          {
            title: 'Connecting diverse information',
            description:"Not only chat now you can voice chat and make calls to quickly connect with the performer."
          },
          {
            title: 'Update status service ',
           description:" You can know the status of repair or work completed while away from home."
          },
          {
            title: 'Complete safe and quality service',
           description:"You will feel secure when you see the report image and easily evaluate quality service whenever"
          },
        ]}
      />
        </div>
      </div>
    </div>
  </div>
    
  );
};
export default ClientApp;