var dog=0;
var cat=0;
var tiger=0;
var cow=0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XZtzSbJ26/model.json',modelReady);
}

function modelReady(){
    console.log("model is ready");
    classifier.classify(gotResults);
}

function gotResults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById('result_label').innerHTML="DETECTED VOICE IS OF - "+results[0].label;
    document.getElementById('result_count').innerHTML="DETECTED DOG - "+dog+"  DETECTED CAT - "+cat+"  DETECTED TIGER - "+tiger+"  DETECTED COW - "+cow;
    img=document.getElementById('img1');
    if (results[0].label == "DOG") {
        img.src = 'dog gif.gif';
        dog = dog+1;    }
        else if (results[0].label == "CAT") {
            img.src = 'cat gif.gif';
            cat = cat+1;    }
            else if (results[0].label == "TIGER") {
                img.src = 'tiger image.gif';
                tiger = tiger+1;    }
                else if (results[0].label == "COW") {
                    img.src = 'cow gif.gif';
                    cow = cow+1;    }
}
}