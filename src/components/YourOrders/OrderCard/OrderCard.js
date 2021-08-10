import './OrderCard.scss';

const OrderCard = (props) => {
    const fun = (number) => {
        if (number < 10)
            number = '0' + number;
        return number;
    }

    let date = new Date(props.date);
    let seconds = fun(date.getSeconds());
    let minutes = fun(date.getMinutes());
    let hours = fun(date.getHours());
    let day = fun(date.getDatey());
    let month = fun(date.getMonth() + 1);
    let year = fun(date.getFullYear());

    return (
        <div className="order-card">
            <h3 className="order__date">{hours}:{minutes}:{seconds} <br /> {day}.{month}.{year}</h3>
            <p className="order__price">Price: <span>${props.price}</span></p>
        </div>
    );
};

export default OrderCard;