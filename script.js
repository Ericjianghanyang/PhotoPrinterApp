document.getElementById('image-input').addEventListener('change', function() {
    var fileInput = this;
    var file = fileInput.files[0];

    // 检查是否选择了图片
    if (file) {
        // 显示打印按钮
        document.getElementById('print-button').style.display = 'block';

        // 预览图片
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('image-preview').src = e.target.result;
            document.getElementById('image-preview').style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        // 如果没有选择图片，则隐藏按钮和预览图片
        document.getElementById('print-button').style.display = 'none';
        document.getElementById('image-preview').style.display = 'none';
    }
});

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
