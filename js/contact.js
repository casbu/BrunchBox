//validating empty field
function check_empty() {
  if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
    alert('Please fill out all required fields!')
    // Swal.fire({
    //   icon: 'error',
    //   title: 'Oops...',
    //   text: 'Please fill in all required fields!',
    //   footer: '<a href>Why do I have this issue?</a>'
    // });
  } else {
    alert('Thanks! We will contact you within 24-48 hours.')
    // Swal.fire({
    //   icon: 'success',
    //   title: 'Thanks for reaching out!',
    //   text: 'Please give us 24-48 hours to get back with you.',
    // });
  }
}
//function to display popup
function contact_show() {
  document.getElementById('popupContact').style.display = "block";
}
//function to hide popup
function contact_hide() {
  document.getElementById('popupContact').style.display = "none";
}