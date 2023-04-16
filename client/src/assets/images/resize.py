from PIL import Image
import os

def resize_images_in_folder(folder_path):
    # 遍历文件夹下所有图片文件
    for filename in os.listdir(folder_path):
        if filename.endswith('.jpg') or filename.endswith('.jpeg') or filename.endswith('.png'):
            # 打开原始图片
            img = Image.open(os.path.join(folder_path, filename))
            # 将图片分辨率压缩到640*480
            img = img.resize((640, 480))
            # 保存压缩后的图片
            # new_filename = 'resized_' + filename
            new_filename =  filename
            img.save(os.path.join("./client/src/assets/images/resized/", new_filename))

# 使用示例
resize_images_in_folder("./client/src/assets/images/label")
