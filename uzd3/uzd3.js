class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.isLoggedIn = false;
  }
  toggleLoginStatus() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  login() {
    return `Welcome, ${this.name}`;
  }
  logout() {
    return `See ya next time!`;
  }
}

function updateMessage(user, h1E) {
  h1E.textContent = user.isLoggedIn ? user.login() : user.logout();
}

document.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submitted");
  const name = document.getElementsByName("name")[0].value;
  const email = document.getElementsByName("email")[0].value;
  const user = new User(name, email);
  user.toggleLoginStatus();
  console.log(user.isLoggedIn);

  const messageDiv = document.querySelector(".message");
  const button = document.createElement("button");
  button.name = "logout";
  button.textContent = "Log out";
  if (!document.querySelector("h1")) {
    messageDiv.appendChild(document.createElement("h1"));
  }
  const h1E = document.querySelector("h1");
  messageDiv.appendChild(h1E);
  messageDiv.appendChild(button);
  updateMessage(user, h1E);
  button.addEventListener("click", () => {
    user.toggleLoginStatus();
    updateMessage(user, h1E);
    console.log(user.isLoggedIn);
    button.remove();
  });
});
