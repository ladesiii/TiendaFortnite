document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#cancion img');

    images.forEach(img => {
        const audioSrc = img.dataset.audio;
        let audio;

        if (audioSrc) {
            img.addEventListener('mouseenter', () => {
                audio = new Audio(audioSrc);
                audio.play();
            });

            img.addEventListener('mouseleave', () => {
                if (audio) {
                    audio.pause();
                    audio.currentTime = 0; 
                }
            });
        }
    });
});