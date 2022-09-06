import axios from "axios";

const API_URL = "http://localhost:8087/api/v1.0/tweets/";
class AuthService {
  login(username, password) {
    return axios.post(API_URL + "login", {
      username,
      password,
    });
  }

  register(
    loginId,
    firstName,
    lastName,
    emailId,
    username,
    password,
    confirmPassword,
    contactNumber
  ) {
    return axios.post(API_URL + "register", {
      loginId,
      firstName,
      lastName,
      emailId,
      username,
      password,
      confirmPassword,
      contactNumber,
    });
  }

  logout() {
    localStorage.removeItem("user");
  }
  forgot(username, newPassword, confirmPassword) {
    return axios.put(API_URL + username + "/forgot", {
      username,
      newPassword,
      confirmPassword,
    });
  }
  authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.accessToken) {
      return { Authorization: "Bearer " + user.accessToken };
    } else {
      return {};
    }
  }
}
export default new AuthService();
