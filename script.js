let log_arr = []
log("GET http://127.0.0.1:5000/server.py")
log("GET http://127.0.0.1:5000/templates/index.html")
log("GET http://127.0.0.1:5000//static/style.css")
log("GET http://127.0.0.1:5000/static/script.js")
log("Local Flask server has been fetched [server.py]")

let file 


function get_img(event){
    file_in = document.querySelector('#fileselect');    
    if(event.target.files.length == 0){ return;}
    file = event.target.files[0];
    let url =URL.createObjectURL(file);
    document.querySelector('#imgtag').src = url;

    log("GET http://127.0.0.1:5000/test images/"+file.name)
    log("image file has been selected")
}

function clear_img(){
    if (file){
        document.querySelector('#imgtag').src='';
        log("selected image"+' ['+ file.name +'] '+"has been cleared") }
    else{
        document.querySelector('#imgtag').src='';
        log("No image has been selected to clear !!!") }
}


function  copy_text(){
    let copytext = document.querySelector("#textarea1");
    copytext.select();
    navigator.clipboard.writeText(copytext.value)

    log("Extracted text has been copied")
}

function log(text){
        let log_box = document.querySelector('#log-box')
        let timestamp = new Date().toLocaleTimeString([],{hour12:false})
    
        let log_txt = '['+ timestamp +']  '+"server.py  $: "+ text +"\n"
        log_arr.push(log_txt)
        console.log(log_txt)
        log_box.textContent += '['+ timestamp +']  '+"server.py  $: "+ text +"\n" 
        log_box.scrollTop = log_box.scrollHeight
    }


function ex_log(){

setTimeout(
    function(){log("fetching image");},2000
    )
setTimeout(
    function(){log("binarize image");},5000
)
setTimeout(
    function(){log("denozing image");},10000
)
setTimeout(
    function(){log("tokenze  image");},13000
)
}