import React from 'react';
import './VegetableStore.css';
import { FaLeaf, FaShoppingCart, FaArrowRight } from 'react-icons/fa';

const vegetables = [
  { id: 1, name: 'Organic Carrot', price: '$2.99', image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979' },
  { id: 2, name: 'Fresh Tomato', price: '$1.99', image: 'https://plus.unsplash.com/premium_photo-1723377607590-5aac4e48bb06?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Green Broccoli', price: '$3.49', image: 'https://plus.unsplash.com/premium_photo-1702313776847-b90ae4bd048a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdyZWVuJTIwYnJvY29saXxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 4, name: 'Crispy Lettuce', price: '$2.49', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb' },
  {id: 5, name: 'Organic Potato', price: '$2.00', image: 'https://plus.unsplash.com/premium_photo-1675365779531-031dfdcdf947?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG90YXRvfGVufDB8fDB8fHww'},
  {id: 6, name: 'Fresh Coriander', price: '$1.00', image: 'https://images.unsplash.com/photo-1588879460618-9249e7d947d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29yaWFuZGVyfGVufDB8fDB8fHww'}    
];

const VegetableStore = () => {
  return (
    <div className="vegetable-container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <FaLeaf className="leaf-icon" /> Fresh Organic Vegetables
          </h1>
          <p className="hero-subtitle">100% Natural & Healthy Produce</p>
          <button className="cta-button">
            Shop Now <FaArrowRight className="cta-icon" />
          </button>
        </div>
      </header>

      {/* Featured Products */}
      <section className="featured-products">
        <h2 className="section-title">Our Fresh Produce</h2>
        <div className="products-grid">
          {vegetables.map((veg) => (
            <div key={veg.id} className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${veg.image})` }} />
              <h3 className="product-name">{veg.name}</h3>
              <p className="product-price">{veg.price}</p>
              <button className="add-to-cart">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-content">
          <h2 className="section-title1">Get In Touch</h2>
          <form className="contact-form">
            <input type="text" placeholder="Name" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
            <textarea placeholder="Message" className="form-textarea" rows="5" />
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default VegetableStore;