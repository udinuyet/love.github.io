function choose(option) {
    if (option === 'iya') {
        var audio = document.getElementById('audio');
        audio.play(); // Memainkan suara
        document.getElementById('result').innerHTML = "yeeyy, will u marry me beybehh? <br> mwahh❤️❤️❤️";
    } else {
        runAway();
    }
}

function runAway() {
    var nggakButton = document.querySelector('.options button:nth-child(2)');
    var container = document.querySelector('.container');
    var randomX = Math.random() * (container.offsetWidth - nggakButton.offsetWidth);
    var randomY = Math.random() * (container.offsetHeight - nggakButton.offsetHeight);
    nggakButton.style.left = randomX + 'px';
    nggakButton.style.top = randomY + 'px';
    var result = document.getElementById('result');
}
