import Header from '../components/Header/Header';
import { Layout, Space } from 'antd';
import Banner from '../components/Banner/Banner';
import Trailer from '../components/Trailer/Trailer';
import Customer from '../components/Customer/Customer';
import Bussiness from '../components/Bussiness/Bussiness';
import Choose from '../components/Choose/Choose';
import ClientApp from '../components/ClientApp/ClientApp';
import Manager from '../components/Manager/Manager';
import Service from '../components/Service/Service';
import People from '../components/People/People';
import Feedback from '../components/Feedback/Feedback';


const Home = () => {

    return (
        <section>
        <Header/>
        <Banner/>
        <Trailer/>
        <Customer/>
        <ClientApp/>
        <Bussiness/>
        <Manager/>
        <Choose/>
        <Service/>
        <People/>
        <Feedback/>
        </section>
       
      
    );
  };
  
  export default Home;
  