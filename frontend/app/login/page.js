"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../page.module.scss";
import { login } from "../../lib/request";

export default function Login() {
  const router = useRouter();
  const [fetching, setFetching] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="Enter your email"
              type="text"
              onChange={(data) => setEmail(data.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={(data) => setPassword(data.target.value)}
            />
            <input
              type="submit"
              className={`${styles.button} ${styles.primary}`}
              value="Sign in"
              onClick={async () => {
                alert(email);
                console.log("sending", email, password);
                setFetching(true);
                await login(email, password);
                setFetching(false);
              }}
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
