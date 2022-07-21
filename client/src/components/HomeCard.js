import wallet from '../images/wallet.svg'
import largestar from '../images/largestar.svg'
import { Link } from "react-router-dom"
import smallstar from '../images/smallstar.svg'

const HomeCard = () => {
  return (
    <div className="page-container">
      <div className="homecard-container">
        <div className="homecard-text-container">
          <h1>All the <span>experience</span> of the new portfolio tracker </h1>
          <h3>
          We help you track all of your investments on the Celo blockchain from one place!
          </h3>
          <div className="button-container">
            <button className="enter-button">
              <Link to={"/portfolio"}>Get Started</Link>
            </button>
            <button className="learn-more-button">How it Works<box-icon name='chevron-right' class="chevron-right"></box-icon></button>
          </div>
        </div>
        <div className="homecard-image-container">
            <div className="star-container">
                <div className="large-star">
                    <img src={largestar} alt="" />
                </div>
                <div className="small-star">
                    <img src={smallstar} alt="" />
                </div>
            </div>
          <img src={wallet} alt="" />
        </div>
      </div>
    </div>
  );
};


export default HomeCard;
