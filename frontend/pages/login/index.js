import "@/app/layout";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { login } from "@/lib/request.js";

export default function Login() {
  const router = useRouter();
  const [fetching, setFetching] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Image
          src="/logo.svg"
          alt="Coaches voice"
          className="dark:invert"
          width={32}
          height={32}
          priority
        />

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
          <button
            type="button"
            class="seconday"
            onClick={() => router.push("/login")}
          >
            Log in
          </button>
          <button
            type="button"
            class="primary"
            onClick={() => router.push("/register")}
          >
            Sign up
          </button>
        </div>
      </div>

      <div className="relative flex">
        <div class="flex min-h-full flex-col justify-start px-6 py-12 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login to your account
            </h2>
            <div class="text-base text-gray-600 mt-5">
              Welcome back! Please enter your details.
            </div>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
              <div>
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    placeholder="Enter your email"
                    required
                    onChange={(value) => setEmail(value)}
                    class="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div class="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    placeholder="Password"
                    required
                    onChange={(value) => setPassword(value)}
                    class="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  disabled={fetching}
                  type="submit"
                  class="primary flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={login(email, password)}
                >
                  Sign up
                </button>
              </div>
            </form>
            <div class="text-sm text-gray-600 mt-5">
              Don’t have an account? <a href="/register">Sign up</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
