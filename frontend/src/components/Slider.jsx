import React from 'react';
import styles from './styles/Slider.module.css';
// import watchImage from './assets/smartwatch.png'; // Replace with your actual image path

const Slider = () => {
  return (
    <div className='py px'>
        <div className={styles.sliderContainer}>
      <button className={styles.arrowBtn}>‹</button>

      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.tagline}>Best Deal Online on smart watches</p>
          <h2 className={styles.title}>SMART WEARABLE.</h2>
          <p className={styles.discount}>UP to 80% OFF</p>
          <div className={styles.dots}>
            <span className={styles.activeDot}>—</span>
            {[...Array(5)].map((_, i) => (
              <span key={i}>•</span>
            ))}
          </div>
        </div>
        <img src={"https://pngimg.com/uploads/watches/watches_PNG9863.png"} alt="Smart Watch" className={styles.image} />
      </div>

      <button className={styles.arrowBtn}>›</button>
    </div>
    </div>
  );
};

export default Slider;
