import { login, register } from "./request";
import axios from "axios";

describe("Login and register", () => {
  describe("login", () => {
    jest.mock("axios", async () => {
      get: (url, data) =>
        new Promise((resolve) => ({ data: "this is a token" }));
    });

    it("should login the user if it exists", async () => {
      const email = "john@doe.com";
      const password = "johndoe";

      login(email, password).then((data) =>
        expect(data).toBe("this is a token")
      );
    });

    it("should fail the login the user if it does not exists", async () => {
      const email = "john@doe.com";
      const password = "johndoe";

      login(email, password).then((data) => expect(data).toBe(null));
    });
  });
  describe("register", () => {
    const payload = {
      payload: {
        name: "John Doe",
        email: "john@doe.com",
        password: "password",
      },
    };
    jest.mock("axios", async () => {
      post: (url, data) =>
        new Promise((resolve) => ({
          payload: {
            name: "John Doe",
            email: "john@doe.com",
          },
        }));
    });

    it("should register the user", () => {
      const email = "john@doe.com";
      const password = "johndoe";
      const name = "John Doe";

      register(name, email, password).then((data) =>
        expect(data).toEqual(payload)
      );
    });
  });
});
