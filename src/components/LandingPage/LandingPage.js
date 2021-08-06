import './LandingPage.scss';
import shirt1 from '../../assets/shirt1.jpg';
import shirt2 from '../../assets/shirt2.jpg';
import shirt3 from '../../assets/shirt3.jpg';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LandingPage = (props) => {
    return (
        <div className="main">
            <div className="carousel">
                {/* <button
                    // onClick={prevSlide}
                    className="prev"><i className="fas fa-chevron-left"></i></button> */}

                <div className="slide slide--1">
                    <LazyLoadImage effect="blur" src={shirt1} alt="shirt--1" className="slide__img slide__img--1" />
                </div>

                <div className="slide slide--2 active">
                    <LazyLoadImage effect="blur" src={shirt2} alt="shirt--2" className="slide__img slide__img--2" />
                </div>

                <div className="slide slide--3">
                    <LazyLoadImage effect="blur" src={shirt3} alt="shirt--3" className="slide__img slide__img--3" />
                </div>

                {/* <button
                    // onClick={nextSlide}
                    className="next"><i className="fas fa-chevron-right"></i></button> */}
            </div>
        </div>
    );
}

export default LandingPage;




















// removeActive(slides[startingPosition]);
//         if (startingPosition === 2)
//             startingPosition = 0;
//         else
//             startingPosition++;
//         addActive(slides[startingPosition]);