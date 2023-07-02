// Check if user is already logged in
if (localStorage.getItem("loggedInUser")) {
    showLoggedInUser();
  } else {
    showLoginForm();
  }
  
  // Function to show login form
  function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
  }
  
  // Function to show signup form
  function showSignupForm() {
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
  }
  
  // Function to login
  function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Check if user exists and password is correct
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      showLoggedInUser();
    } else {
      alert("Invalid username or password");
    }
  }
  
  // Function to signup
  function signup() {
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;
  
    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Check if username already exists
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      alert("Username already exists. Please choose a different username.");
      return;
    }
  
    // Create new user object
    const newUser = {
      username: username,
      password: password
    };
  
    // Add new user to users array
    users.push(newUser);
  
    // Store updated users array in local storage
    localStorage.setItem("users", JSON.stringify(users));
  
    // Set the newly signed up user as the logged in user
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
  
    showLoggedInUser();
  }
  
  // Function to show logged in user details
  function showLoggedInUser() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const welcomeMsg = document.createElement("p");
    welcomeMsg.textContent = "Welcome, " + loggedInUser.username + "!";
    document.body.appendChild(welcomeMsg);
    
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "none";
  }