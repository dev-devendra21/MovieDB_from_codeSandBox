import "./Card.css";
const Card = ({ title, rating, poster }) => {
  const imgSrc = `https://image.tmdb.org/t/p/w200${poster}`;
  return (
    <>
      <li className="card-container">
        <img src={imgSrc} className="card-img" />
        <section className="card-section">
          <p className="title">{title}</p>
          <p className="rating">Rating: ⭐{rating.toFixed(1)}</p>
        </section>
      </li>
    </>
  );
};

export default Card;
