document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        // Simulate successful login
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);

        // Redirect to successful.html with the username in the URL parameters
        window.location.href = `successful.html?username=${encodeURIComponent(username)}`;
    }
});
