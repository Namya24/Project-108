function startClassification()
{
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yxeKFg1Yd/model.json', modelReady );
}

function modelReady(){
classifier.classify(gotResults);
}


function gotResults(error, results){
    if (error) {
    console.log(error);
    }
    else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    
    document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label ;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence *100).toFixed(2) + "%";
    document.getElementById("result_label").style.color = "rgb(" + random_number_r+ ","+random_number_g+"," +random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb(" + random_number_r+ ","+random_number_g+"," +random_number_b+")";
    
    img=document.getElementById("listen.gif");
    img=document.getElementById("dog_barking.gif");
    img=document.getElementById("cat_meowing.gif");
    img=document.getElementById("lion_roaring.gif");
    
    if (results[0].label == "Clap") {
    img.src='listen.gif';
    img1.src='dog_barking.gif';
    img2.src='cat_meowing.gif';
    img3.src='lion_roaring.gif';
    }
    else if(results[0].label == "Snapping"){
    img.src='listen.gif';
    img1.src='dog_barking.gif';
    img2.src='cat_meowing.gif';
    img3.src='lion_roaring.gif';
    }
    else if(results[0].label == "Alarm Bell"){
     img.src='listen.gif';
     img1.src='dog_barking.gif';
     img2.src='cat_meowing.gif';
     img3.src='lion_roaring.gif';
    }
    else{
    img.src='listen.gif';
    img1.src='dog_barking.gif';
    img2.src='cat_meowing.gif';
    img3.src='lion_roaring.gif';
    }
    }
    }