import Link from "next/link";
import styles from "../page.module.scss";

export default function Home() {
  return (
    <>
      <div className={`${styles.centered} ${styles.marginTop100}`}>
        <div className={`${styles.column} ${styles.half} ${styles.centered}`}>
          <h1>My details</h1>
          <small className={styles.smallText}>
            Update your personal details
          </small>
          <form
            className={`${styles.form} ${styles.column} ${styles.allWidth}`}
          >
            <div className={styles.fieldBox}>
              <label htmlFor="email">Name</label>
              <input
                className={styles.input}
                id="name"
                name="name"
                placeholder="Full Name"
                type="text"
              />
            </div>
            <div className={styles.fieldBox}>
              <label htmlFor="email">Email address</label>
              <input
                className={styles.input}
                disabled
                id="email"
                name="email"
                placeholder="Enter your email"
                type="text"
              />
            </div>
            <div className={styles.fieldBox}>
              <label htmlFor="email">House Number</label>
              <input
                className={styles.input}
                id="address-number"
                name="address-number"
                placeholder="Your house number"
                type="text"
              />
            </div>
            <div className={styles.fieldBox}>
              <label htmlFor="email">Street address</label>
              <input
                className={styles.input}
                id="address"
                name="address"
                placeholder="Street Name"
                type="text"
              />
            </div>
            <div className={styles.fieldBox}>
              <label htmlFor="email">Postcode</label>
              <input
                className={styles.input}
                id="postcode"
                name="postcode"
                placeholder="Postcode"
                type="text"
              />
            </div>
            <div className={styles.left}>
              <input
                type="button"
                className={`${styles.button} ${styles.secondary} ${styles.withBorder}`}
                value="Cancel"
              />
              <input
                type="submit"
                className={`${styles.button} ${styles.primary}`}
                value="Save"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
