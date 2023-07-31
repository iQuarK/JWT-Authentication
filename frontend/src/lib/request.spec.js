import { login, register } from "./request";
import axios from "axios";

describe("Login and register", () => {
  describe("login", () => {
    jest.mock("axios", async () => {
      post: (url, data) => new Promise((resolve) => "this is a token");
    });

    it("should login the user if it exists", () => {
      const email = "john@doe.com";
      const password = "johndoe";

      expect(login(email, password)).toBe("this is a token");
    });

    it("should fail the login the user if it does not exists", () => {
      const email = "john@doe.com";
      const password = "johndoe";

      expect(login(email, password)).toBe(null);
    });
  });
  describe("register", () => {
    const payload = {
      payload: {
        name: "John Doe",
        email: "john@doe.com",
      },
    };
    jest.mock("axios", async () => {
      post: (url, data) => new Promise((resolve) => payload);
    });

    it("should register the user", () => {
      const email = "john@doe.com";
      const password = "johndoe";

      expect(login(email, password)).toBeEqual(payload);
    });
  });
});
