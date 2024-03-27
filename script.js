document.getElementById('image-input').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    
    reader.onload = function(e) {
        var img = document.getElementById('image-preview');
        var printButton = document.getElementById('print-button');
        
        img.src = e.target.result;
        img.style.display = 'block';
        printButton.style.display = 'block';
    };
    
    reader.readAsDataURL(file);
});

document.getElementById('print-button').addEventListener('click', function() {
    window.print();
});