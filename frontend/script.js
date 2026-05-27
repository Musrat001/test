
async function getUsers() {
    try {
        const response = await fetch("http://localhost:2026/users");
        const data = await response.json();
        alert(data.message);

        // console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getUsers();



// document.getElementById("loginForm").addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     const res = await fetch("http://localhost:2026/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ email, password })
//     });

//     const data = await res.json();

//     if (data.token) {
//         const tttt = localStorage.setItem("token", data.token);
//         console.log("token", tttt);

//         alert("Login successful");
//     } else {
//         alert(data.message);
//     }
// });

// function logout() {
//     // 1. Remove token
//     const x = localStorage.removeItem("token");
//     console.log("taken while logout", x);


//     // 2. Optional message
//     alert("Logged out successfully");

//     // 3. Redirect to login page
//     window.location.href = "index.html";
// }
