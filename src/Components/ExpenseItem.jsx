import "./ExpenseItem.css"
function ExpenseItem(props) {
    return(
        <div className="Card">
            <h2>{props.Title}</h2>
            <p>{props.Description}</p>
            <p>{props.Price}</p>
            <p>{props.Date.toISOString()}</p>
        </div>
    )
}

export default ExpenseItem;