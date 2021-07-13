function validateForm() {
    let x = document.forms["myForm"]["phonenumber"].value;
    if (x == "") {
        alert)"Name must be filled out");
        return false;
    }
}