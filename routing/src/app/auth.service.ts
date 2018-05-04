// FAKE AUTH Service
export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1000);
    });
  }

  login() {
    console.log("You are logged in!");
    this.loggedIn = true;
  }
  logout() {
    console.log("You are logged out!");
    this.loggedIn = false;
  }
}
