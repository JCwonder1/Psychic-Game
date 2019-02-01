var body =  document.querySelector("body");


body.addEventListener('keyup', function(e){
        var guessed = document.querySelector(".guessed");
        guessed.push(e.key);
        guessed.innerHTML = "You guessed: " + e.key;

},false);