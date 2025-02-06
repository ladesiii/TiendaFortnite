
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
 }

 document.querySelectorAll('.skin').forEach(skin => {
    const img = skin.querySelector('.skin-img');
    const video = skin.querySelector('.skin-video');

    skin.addEventListener('mouseenter', () => {
        img.style.display = 'none';
        video.style.display = 'block';
        video.play();
    });

    skin.addEventListener('mouseleave', () => {
        img.style.display = 'block';
        video.style.display = 'none';
        video.pause();
        video.currentTime = 0;
    });
});