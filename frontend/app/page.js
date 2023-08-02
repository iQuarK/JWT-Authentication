"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className={`${styles.centered} ${styles.marginTop100}`}>
        <div className={`${styles.column} ${styles.half} ${styles.centered}`}>
          <h1>Create an account</h1>
          <form
            className={`${styles.form} ${styles.column} ${styles.allWidth}`}
          >
            <input id="name" name="name" placeholder="Name" type="text" />
            <input
              id="email"
              name="email"
              placeholder="Enter your email"
              type="text"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <input
              type="submit"
              className={`${styles.button} ${styles.primary}`}
              value="Sign in"
              onClick={() => router.push("/user")}
            />
          </form>
          <small className={styles.smallerText}>
            Already have an account? <Link href="/login">Log in</Link>
          </small>
        </div>
      </div>
    </>
  );
}
