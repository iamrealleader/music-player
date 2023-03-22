 
  let previous = document.querySelector('.prev');
  let play = document.querySelector('.playy');
  let next = document.querySelector('.nextt');
  let duration = document.querySelector('.duration');
  let gif = document.querySelector('.gif');
  let progress = document.querySelector('#progressBar');
  let currentAudio = document.querySelector('.currentAudio');
  let audioElement = new Audio('songs/song 1.mp3');
  let index = 1;

  let audioElements = [
    { song : 'Aaja wa mahiya', path : './songs/song 1.mp3'},
    { song : 'Let me down slowly', path : './songs/song 2.mp3'},
    { song : 'Ma roya', path : './songs/song 3.mp3'},
    { song : 'Grind ', path : './songs/song 4.mp3'},
    { song : 'Alan walker  ', path : './songs/song 5.mp3'},
    { song : 'Alan walker  ', path : './songs/song 6.mp3'}
  ]

   play.addEventListener('click', (e) => {
        
        if(audioElement.paused || audioElement.currentTime <= 0)
        {
            e.target.src = '../assets/pause button 3.png';
            audioElement.play();
            gif.style.opacity = '1'
        }
        else  {
            e.target.src = '../assets/play button 2.png';
            audioElement.pause();
            gif.style.opacity = '0'
        }

   })

   const allPause  = () =>{
    Array.from(document.querySelectorAll('.currentSong')).forEach( (e) =>{
      e.src = '../assets/play button 2.png';
    })
   }
  Array.from(document.querySelectorAll('.currentSong')).forEach( (e) => {
    e.addEventListener('click' , (element) => {
              allPause();
              index = parseInt(element.target.id);
              element.target.src = '../assets/pause button 3.png';
              play.src = '../assets/pause button 3.png';
              audioElement.currentTime = 0;
              audioElement.src = `songs/song ${index}.mp3`
              audioElement.play();
              gif.style.opacity = '1'
            })
  })

  audioElement.addEventListener('timeupdate', (e) => {
    progress.value = parseInt(audioElement.currentTime/audioElement.duration *100);
    if(audioElement.currentTime <60)
    {
      duration.innerHTML = ` 00 : ${parseInt(audioElement.currentTime)}`;
    }
    else
    {

      duration.innerHTML = ` 0${ parseInt(audioElement.currentTime/60)} :  ${ parseInt(audioElement.currentTime % 60)} `;
    }
  })

  progress.addEventListener('change', (e) => {
    audioElement.currentTime = parseInt(progress.value*audioElement.duration /100);
  })
  previous.addEventListener('click', (element) => {
   if(index<=0)
   {
    index = 6;
   }
   else{
    index -= 1;
   }
    allPause();
     audioElement.src = `songs/song ${index}.mp3`;
     audioElement.currentTime = 0;
     audioElement.play();
     gif.style.opacity = '1'
  })
  next.addEventListener('click', (element) => {
    if(index>=6)
   {
    index = 1;
   }
   else{
    index += 1;
   }
    allPause();
    audioElement.src = `songs/song ${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = '1'
  })
 