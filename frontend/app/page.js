"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";
import { register } from "../lib/request";

export default function Home() {
  const router = useRouter();
  const [fetching, setFetching] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className={`${styles.centered} ${styles.marginTop100}`}>
        <div className={`${styles.column} ${styles.half} ${styles.centered}`}>
          <h1>Create an account</h1>
          <form
            className={`${styles.form} ${styles.column} ${styles.allWidth}`}
          >
            <input
              id="name"
              name="name"
              placeholder="Name"
              type="text"
              onChange={(data) => setName(data.target.value)}
            />
            <input
              id="email"
              name="email"
              placeholder="Enter your email"
              type="text"
              onChange={(data) => setEmail(data.target.value)}
            />
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
              value="Get started"
              disabled={fetching}
              onClick={async () => {
                setFetching(true);
                await register(name, email, password);
                setFetching(false);
              }}
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
