// Select the form element
const form = document.querySelector("form");

// Add an event listener for the form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form values
    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const travelDate = document.getElementById("travelDate").value;
    const passengerName = document.getElementById("passengerName").value.trim();
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const seatPreference = document.getElementById("seatPreference").value;
    const travelClass = document.getElementById("class").value;

    // Validate form fields
    if (from === "" || to === "" || travelDate === "" || passengerName === "" || age === "" || gender === "" || seatPreference === "" || travelClass === "") {
        alert("Please fill out all fields.");
        return;
    }

    if (age < 1 || age > 120) {
        alert("Please enter a valid age.");
        return;
    }

    // Show a simulated search result
    alert(`Searching for trains from ${from} to ${to} on ${travelDate} for ${passengerName}, ${age} years old, Gender: ${gender}, Seat Preference: ${seatPreference}, Class: ${travelClass}.`);
});
