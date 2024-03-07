onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

document.addEventListener('DOMContentLoaded',  () =>{
    const song =  document.getElementById('song')
    song.play()
});

  