const loginForm = document.querySelector(".login-box form");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = loginForm.querySelector(
            'input[placeholder="Email"]'
        ).value.trim();

        const password = loginForm.querySelector(
            'input[placeholder="Password"]'
        ).value;


        // Check empty fields
        if (!email || !password) {
            alert("Please enter your email and password.");
            return;
        }


        // Get registered users
        const users = JSON.parse(
            localStorage.getItem("remindpro_users")
        ) || [];


        // Find user
        const user = users.find(
            user =>
                user.email === email &&
                user.password === password
        );


        // Login successful
        if (user) {


            // Save current logged-in user
            localStorage.setItem(
                "remindpro_users",
                JSON.stringify(user)
            );

            alert("Login successful!");


            // Go to dashboard
            window.location.href = "dashboard.php";

        } else {

            alert("Invalid email or password.");

        }

    });
}