import image1 from '../../assets/winterboots/WinterBlack.webp';
import image2 from '../../assets/winterboots/WinterBlackSide.webp';
import image3 from '../../assets/winterboots/WinterBlacktop.webp';
import image4 from '../../assets/winterboots/BlackSquareLifestyleProductPage.webp';

const Product = () => {
  return (
    <section>
      <div>
        <img src={image1} alt="product-image" />
        <img src={image2} alt="product-image" />
        <img src={image3} alt="product-image" />
        <img src={image4} alt="product-image" />
      </div>
      <div>
        <h1>The Modern Winter Boot in Black</h1>
        <div>294.00 USD</div>
        <span>Shipping calculated at checkout</span>
        <div>
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
        <p>
          The Modern Winter Boot is your cold-weather essential. Each pair is made with a durable Vibram sole and is waterproof for all-day wear. Wear
          them on your commute - keep them on long after you get there.
        </p>
      </div>
    </section>
  );
};

export default Product;
