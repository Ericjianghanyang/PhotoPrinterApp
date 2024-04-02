document.getElementById('image-input').addEventListener('change', function() {
    var fileInput = this;
    var file = fileInput.files[0];

    // 检查是否选择了图片
    if (file) {
        // 预览图片
        var reader = new FileReader();
        reader.onload = function(e) {
            var image = document.getElementById('image-preview');
            image.src = e.target.result;
            image.style.display = 'inline';
            
            // 检测图片方向
            checkImageOrientation(image);
        };
        reader.readAsDataURL(file);
    } else {
        // 如果没有选择图片，则隐藏预览图片
        document.getElementById('image-preview').style.display = 'none';
    }
});

function checkImageOrientation(image) {
    if (image.naturalWidth > image.naturalHeight) {
        image.classList.add('horizontal');
    }
}
