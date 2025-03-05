import React from "react";
import styles from "./ProductCard.module.css";

function ProductCard({ title, price, image, isDiscount, quantity, rate, sp }) {
  return (
    <div className={styles.container}>
      {sp && <p className={styles.sp}>SPECIAL OFFER</p>}
      <img className={styles.img} src={image} />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.detail}>
        <p className={styles.rate}>
          <i className={`fa-solid fa-star ${styles.star}`}></i> {rate}{" "}
        </p>

        {quantity < 10 && quantity > 0 ? (
          <p className={styles.quant}>
            {" "}
            تنها {quantity} عدد در انبار باقی مانده
          </p>
        ) : (
          <p></p>
        )}
      </div>
      <div className={styles.takhfif}>
        {isDiscount ? (
          <p className={styles.newPrice}>
            <h2>{price - (price / 100) * 20}$</h2>
            <h2 className={styles.darsad}>20%</h2>
          </p>
        ) : (
          <h3>{price}$</h3>
        )}
        {isDiscount && <p className={styles.oldPrice}>{price}$</p>}
      </div>
    </div>
  );
}

export default ProductCard;
