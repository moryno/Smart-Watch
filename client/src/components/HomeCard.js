import logo from '../images/logo.jpg'

const HomeCard = () => {
    return ( 
        <div className="page-container">
            <div className="homecard-container">
                <img src={logo} alt="" />
                <h1>Be a DeFi Chef with Sushi.</h1>
                <h3>Swap, earn, stack yields, lend, borrow, leverage all on one decentralized, community driven platform. Welcome home to DeFi.</h3>
                <div className="button-container">
                    <button className="enter-button">Enter App</button>
                    <button className="learn-more-button">Learn More</button>
                </div>
            </div>
        </div>
     );
}
 
export default HomeCard;