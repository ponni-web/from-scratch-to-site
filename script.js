function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("message").value;

  if(name === "" || email === "" || msg === "") {
    alert("All fields are required!");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}
