Webcam.set({
    width:350,
    height:350,
    png_quality:90
})
camera=document.getElementById("camera")
Webcam.attach('#camera')
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("pic").innerHTML='<img id="image" src="'+data_uri+'" width="350" height="300">'
    
    })
}
console.log(ml5.version)
classifier=ml5.imageClassifier('MobileNet',modelLoaded)
function modelLoaded(){
    console.log("modelLoadel")
}
function check(){
    img=document.getElementById('image');
    classifier.classify(img,gotResult)
}
function gotResult(error,results){
 
    if(error){
        console.log(error)
    }
    else{
        var res=results[0].label
        console.log(results)
        document.getElementById("objectname").innerHTML=res
        console.log(results[0])
    }
}
