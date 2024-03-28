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
    var fileInput = document.getElementById('image-input');
    var file = fileInput.files[0];
    
    var formData = new FormData();
    formData.append('photo', file);
    
    // 发送照片信息到后端
    fetch('/print', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log(data);
        alert('照片已发送到打印机，正在打印中...');
    })
    .catch(error => {
        console.error('There was an error!', error);
        alert('打印失败，请重试');
    });
});
