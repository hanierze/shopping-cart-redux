import React from "react";

//styles
import styles from "./AboutUs.module.scss";

import woman from "../../assets/images/woman.jpg";

const AboutUs = () => {
  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <img src={woman} alt="woman" />
      </div>

      <div className={styles.textContainer}>
        <h2 className={styles.title}>Welcome to Women's clothing store</h2>
        <p>
          Discover a world of stylish and trendy women's clothing at Your Store
          Name. We believe that fashion is an art of self-expression, and our
          collection is designed to empower women to embrace their individuality
          with confidence.
        </p>
        <h3>Our Mission</h3>
        <p>
          Our mission is to provide high-quality clothing that caters to diverse
          tastes and occasions. We curate our collection to reflect the latest
          trends and timeless classics, offering you a range of options to
          choose from.
        </p>
        <h3>What We Offer</h3>
        <ul>
          <li>Fashionable Clothing</li>
          <li>Quality Assurance</li>
          <li>Affordable Elegance</li>
          <li>Customer Experience</li>
          <li>Community and Empowerment</li>
        </ul>
        <p>
          Your satisfaction is our priority, and we're committed to offering
          affordable elegance without compromising on quality. Join our
          community of empowered women and embark on a stylish journey with us.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
