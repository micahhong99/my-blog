你可以使用 Python 和 OpenCV 实现一个简单的人脸识别项目，主要包含以下步骤：  

1. **安装依赖**：安装 OpenCV 和 dlib 进行人脸检测，并使用 face_recognition 进行人脸识别。  
2. **人脸数据采集**：收集并存储人脸图像数据。  
3. **训练模型**：使用 face_recognition 提取面部特征并存储。  
4. **实时人脸识别**：通过摄像头检测和识别人脸。  

---

## **项目实现**

### **1. 安装依赖**
确保你已安装 Python，并使用以下命令安装所需的库：
```bash
pip install opencv-python numpy dlib face_recognition
```

### **2. 采集人脸数据**
创建 `face_dataset.py`，用于收集人脸数据并存储：
```python
import cv2
import os

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

name = input("请输入你的姓名: ")
save_path = f"faces/{name}"
os.makedirs(save_path, exist_ok=True)

cap = cv2.VideoCapture(0)
count = 0

while count < 20:
    ret, frame = cap.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.3, 5)
    
    for (x, y, w, h) in faces:
        face_img = frame[y:y+h, x:x+w]
        cv2.imwrite(f"{save_path}/{count}.jpg", face_img)
        count += 1
        cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)
    
    cv2.imshow("Face Collection", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
```
运行该脚本，输入姓名，并采集 20 张人脸图片。

---

### **3. 训练模型**
创建 `train_faces.py`，用于提取人脸特征并存储：
```python
import os
import face_recognition
import pickle

dataset_path = "faces"
known_encodings = []
known_names = []

for name in os.listdir(dataset_path):
    person_path = os.path.join(dataset_path, name)
    if os.path.isdir(person_path):
        for img_name in os.listdir(person_path):
            img_path = os.path.join(person_path, img_name)
            image = face_recognition.load_image_file(img_path)
            encodings = face_recognition.face_encodings(image)
            if encodings:
                known_encodings.append(encodings[0])
                known_names.append(name)

data = {"encodings": known_encodings, "names": known_names}
with open("face_encodings.pkl", "wb") as f:
    pickle.dump(data, f)

print("训练完成，数据已保存！")
```
运行该脚本，会在 `face_encodings.pkl` 文件中保存已知人脸的特征信息。

---

### **4. 实时人脸识别**
创建 `face_recognition.py`，用于通过摄像头检测和识别人脸：
```python
import cv2
import face_recognition
import pickle

# 加载已知人脸特征
with open("face_encodings.pkl", "rb") as f:
    data = pickle.load(f)

cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    face_locations = face_recognition.face_locations(rgb_frame)
    face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)

    for (top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
        matches = face_recognition.compare_faces(data["encodings"], face_encoding)
        name = "Unknown"
        
        if True in matches:
            matched_idxs = [i for i, match in enumerate(matches) if match]
            name_counts = {data["names"][i]: matched_idxs.count(i) for i in matched_idxs}
            name = max(name_counts, key=name_counts.get)

        cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)
        cv2.putText(frame, name, (left, top - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)

    cv2.imshow("Face Recognition", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
```
运行 `face_recognition.py`，摄像头将识别已训练的人脸，并显示姓名。

---

## **总结**
这个项目实现了一个简单的人脸识别系统，包括：
- **人脸数据采集**  
- **训练并保存人脸特征**  
- **实时摄像头识别人脸**  

你可以进一步优化：
- **支持多张人脸同时识别**  
- **改进 GUI 界面**（如使用 PyQt 或 Tkinter）  
- **使用深度学习模型**（如 FaceNet 或 OpenCV 的 DNN）  

你想添加其他功能吗？😊