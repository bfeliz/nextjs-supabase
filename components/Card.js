// set up card component to display user form data
const Card = (item) => {
  const phone = item.phone.toString();
  return (
    <div className='column is-one-third'>
      <div className='card'>
        <div className='card-content'>
          <p className='title is-4 has-text-centered'>Your Form</p>
          <div className='content'>
            <p className='name-wrap'>{`First Name: ${item.first_name}`}</p>
            <p className='name-wrap'>{`Last Name: ${item.last_name}`}</p>
            <p>{`Email: ${item.email}`}</p>
            <p>
              {phone.length === 11
                ? `Phone: (${phone.substr(1, 3)}) ${phone.substr(
                    4,
                    3
                  )}-${phone.substr(7, 4)}`
                : `+${phone}`}
            </p>
            <p>{`Favorite Type of Pizza: ${item.favorite_pizza}`}</p>
            <p>{`Last Time You Ate Pizza: ${item.pizza_date}`}</p>
            <p>
              {`Pizza Cost: ${new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(item.pizza_cost)}`}
            </p>
            <p>{`Was It Delicious: ${item.delicious}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
