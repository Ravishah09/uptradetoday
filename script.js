// Open Terms and Conditions Dialog Box
document.getElementById('terms-link').addEventListener('click', function() {
    document.getElementById('terms-dialog').style.display = 'block';
});

// Close Dialog Box
document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('terms-dialog').style.display = 'none';
});

// Close Dialog Box when clicking outside the box
window.addEventListener('click', function(event) {
    var dialog = document.getElementById('terms-dialog');
    if (event.target == dialog) {
        dialog.style.display = 'none';
    }
});
