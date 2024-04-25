import "./Card.css";
const Card = ({ title, rating, poster }) => {
  const imgSrc = `https://image.tmdb.org/t/p/w200${poster}`;
  return (
    <>
      <li className="card-container">
        <img src={imgSrc} />
        <section>
          <p>{title}</p>
          <p>rating: {rating}</p>
        </section>
      </li>
    </>
  );
};

export default Card;
