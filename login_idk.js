function checkFields() {
    if (document.getElementById('tfUser').value == "") {
        alert('Username should not be blank!');
        return false;
    } else if (document.getElementById('tfPwd').value != (document.getElementById('tfRPwd').value)) {
        alert('Passwords do not match!')
        return false;
    } else {
        return true;
    }
}