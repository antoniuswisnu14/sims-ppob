import Image from "next/image";
import React from "react";
import styles from "./promoBanner.module.css";
const promoBanner = [
  {
    image: (
      <Image src={"/banner 1.png"} alt={"banner 1"} width={250} height={120} />
    ),
  },
  {
    image: (
      <Image src={"/banner 2.png"} alt={"banner 2"} width={250} height={120} />
    ),
  },
  {
    image: (
      <Image src={"/banner 3.png"} alt={"banner 3"} width={250} height={120} />
    ),
  },
  {
    image: (
      <Image src={"/banner 4.png"} alt={"banner 4"} width={250} height={120} />
    ),
  },
  {
    image: (
      <Image src={"/banner 5.png"} alt={"banner 1"} width={250} height={120} />
    ),
  },
];

const PromoBanner = () => {
  return (
    <div className={styles.promoBannerLayout}>
      <h2>Temukan promo menarik</h2>
      <div className={styles.promoBannerImageLayout}>
        {promoBanner.map((value, index) => (
          <div key={index}>
            <div>{value.image}</div>
            <p className={styles.serviceText}>{value.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoBanner;
