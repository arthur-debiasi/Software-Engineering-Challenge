function ProductCard({ src, title, description, price, href }) {

  const handleClick = () => {
    window.open(href, "_blank");
  }

  return (
    <div>
      <img src={src} alt={title} width='200px' />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>{price}</h4>
        <button onClick={handleClick}>Ir para a web</button>
      </div>
    </div>
  );
}

export default ProductCard;
