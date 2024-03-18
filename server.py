from gradio_client import Client
from time import sleep
from flask import Flask, render_template, request
import os

app = Flask(__name__)

@app.route('/')

def index():
    return render_template('index1.html')

@app.route('/upload', methods=['POST'])

def upload():
 
    file = request.files['fileinput']
    if file:
        upload_folder = 'static/images'
        if not os.path.exists(upload_folder):
            os.makedirs(upload_folder)

        file_path = os.path.join(upload_folder,file.filename)
        file.save(file_path)
        
        client = Client("https://gnanaprasath-ocr-tamil.hf.space/--replicas/rlzeg/")
        result = client.predict(
                file_path,
                "detect",
                api_name="/predict" )
        

        sleep(30)
        return render_template('index1.html' , file_path=file_path, result = result )
    else:
        return'no file uploaded'
    



if __name__ =='__main__':
    app.run(debug=True)






# from gradio_client import Client

# client = Client("https://gnanaprasath-ocr-tamil.hf.space/--replicas/rlzeg/")
# result = client.predict("static/images/img1.jpeg","detect",api_name="/predict" )
# print(result)
