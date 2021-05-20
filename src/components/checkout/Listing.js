import './../../assets/css/checkoutListing.css';

const Listing = (props) => {
    let start = props.startDate.getUTCDate()+"/"+props.startDate.getMonth()+"/"+props.startDate.getFullYear(),
        end = props.endDate.getUTCDate()+"/"+props.endDate.getMonth()+"/"+props.endDate.getFullYear();

    return (
        <div className="listingContainer">
            <h2>Review trip details and adjust options if needed</h2>

            <div className="priceDetail">
                <h5>Dates: </h5>
                <span>
                    <b>{start}</b> to <b>{end}</b>
                </span>
            </div>

            <div className="priceDetail">
                <h5>Guests: </h5>
                <span>
                    <b>{props.guests} Guest</b>
                </span>
            </div>

            <div className="priceDetail">
                <h5>Trip duration: </h5>
                <span>
                    <b>{props.calculateDays(props.startDate,props.endDate)} nights</b>
                </span>
            </div>

            <div className="priceDetail">
                <h5>Base price: </h5>
                <span>
                    <b>195.62$</b>
                </span>
            </div>

            <div className="messageContainer">
                <h5>Say hello to your host (optional):</h5>
                <textarea name="" id=""></textarea>

                <button className="reserve"> continue </button>
            </div>
        </div>
    )
}

export default Listing