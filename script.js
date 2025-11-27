function submitForm() {
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let address = document.getElementById("address").value.trim();
    let info = document.getElementById("info").value.trim();
    let error = document.getElementById("errorMsg");

    error.textContent = ""; // Clear previous errors

    if (name === "" || phone === "" || email === "" || address === "") {
        error.textContent = "Please fill all required fields!";
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        error.textContent = "Phone number must be 10 digits!";
        return;
    }

    if (!email.includes("@")) {
        error.textContent = "Invalid email address!";
        return;
    }

    alert("Form submitted successfully!\n\n" +
          "Name: " + name +
          "\nPhone: " + phone +
          "\nEmail: " + email +
          "\nAddress: " + address +
          "\nAdditional Info: " + info);
}
