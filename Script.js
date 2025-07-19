

$(document).ready(function () {
    $("form").submit(function (e) {
        e.preventDefault();
        $(".error").text("");

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();


        if (name === "") {
            $("#nameerror").text("Name is required.");
            return;
        }
        if (name.length < 2) {
            $("#nameerror").text("Name must be at least 2 characters.");
            return;
        }

        //email validation
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            $("#emailerror").text("Email is required.");
            return;
        }
        if (!emailPattern.test(email)) {
            $("#emailerror").text("Enter a valid email address.");
            return;
        }


        //password validation
        if (password === "") {
            $("#passworderror").text("Password is required.");
            return;
        }
        if (password.length < 6) {
            $("#passworderror").text("Password must be atleast 6 characters.");
            return;


        }
        alert("Form submitted successfully!");

    });
});