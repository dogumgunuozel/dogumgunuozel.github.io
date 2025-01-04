$(document).ready(function() {
    setTimeout(function() {
        $('.birthday-message').removeClass('animate__fadeInDown').addClass('animate__animated animate__bounce');
    }, 2000);

    // Sürpriz butonu için işlev
    $('#surprise-button').click(function() {
        $('#cake-container').show();
    });

    // Mumları üfle işlevi
    $('#blow-out-candles').click(function() {
        alert('Mumlar söndü! Doğum günün kutlu olsun!');
        $('#birthday-cake').attr('src', 'https://example.com/cake_without_candles.jpg'); // Mumsuz pasta resmi
    });

    // Sparkles
    for (let i = 0; i < 100; i++) {
        let sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.left = Math.random() * 100 + '%';
        document.getElementById('sparkles').appendChild(sparkle);
    }

    // Balonlar
    for (let i = 0; i < 20; i++) {
        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        balloon.style.animationDuration = 4 + Math.random() * 3 + 's';
        balloon.addEventListener('animationend', function() {
            balloon.style.animationName = 'pop';
        });
        document.getElementById('balloons').appendChild(balloon);
    }

    // Konfeti
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.top = Math.random() * 100 + '%';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.getElementById('confetti').appendChild(confetti);
    }
});
