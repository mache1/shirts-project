import './Home.scss';

import LandingPage from '../LandingPage/LandingPage';
import Products from '../Products/Products';

const Home = (props) => {
    return (
        <div className="home">
            <h1>We offer you the best quality</h1>
            <LandingPage />
            <Products />
        </div>
    );
}

export default Home;