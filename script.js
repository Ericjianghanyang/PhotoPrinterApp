document.getElementById('print-button').addEventListener('click', function() {
    var fileInput = document.getElementById('image-input');
    var file = fileInput.files[0];
    
    var formData = new FormData();
    formData.append('photo', file);
    
    // 发送照片信息到后端
    fetch('http://fe80::c84f:d9f8:b3e6:64a0%39:5000/print', {
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
