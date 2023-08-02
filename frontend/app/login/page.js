"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../page.module.scss";

export default function Login() {
  const router = useRouter();
  return (
    <>
      <div className={`${styles.centered} ${styles.marginTop100}`}>
        <div className={`${styles.column} ${styles.half} ${styles.centered}`}>
          <h1>Log in to your account</h1>
          <small className={styles.smallText}>
            Welcome back! Please enter your details.
          </small>
          <form
            className={`${styles.form} ${styles.column} ${styles.allWidth}`}
          >
            <label for="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="Enter your email"
              type="text"
            />
            <label for="password">Password</label>
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
            Don’t have an account? <Link href="/">Sign up</Link>
          </small>
        </div>
      </div>
    </>
  );
}
