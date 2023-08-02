"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import "./globals.css";
import styles from "./page.module.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="main">
          <header className={styles.header}>
            <Image
              src="/logo.svg"
              alt="Coaches voice"
              className="dark:invert"
              width={32}
              height={32}
              priority
            />

            <div className="">
              <button
                type="button"
                className={`${styles.button} ${styles.secondary}`}
                onClick={() => router.push("/login")}
              >
                Log in
              </button>
              <button
                type="button"
                className={`${styles.button} ${styles.primary}`}
                onClick={() => router.push("/")}
              >
                Sign up
              </button>
            </div>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
