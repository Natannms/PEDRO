let video = document.getElementById('video1')
let images = ["./images/rewind-27431_640.png","./images/icon-1721866_640.png","./images/play-1173495_640.png","./images/pause-97625_640.png","./images/icon-1721865_640.png","./images/arrow-27070_640.png"]
let funcoes = ['retroceder()','diminuirVel()','play()','pause()', 'aumentarVel()', 'avancar()']

function criar(){
    images.forEach((url, index) => {
        let img = document.createElement('img')
        img.setAttribute('id', index)
        img.setAttribute('class', 'btn')
        img.setAttribute('onclick', funcoes[index])
        img.setAttribute('src', url)
        
        document.getElementById('controles').appendChild(img)

    });
}
function apagar(i){
    i.innerHTML = ''
}

function retroceder(){
    video.currentTime -= 15
}
  function diminuirVel(){
    video.playbackRate -= 0.1
}
  
  function play(){
    video.play()
}
  
  function pause(){
    video.pause()
}
  
  function aumentarVel(){
    video.playbackRate += 0.1
}
  
  function avancar(){
    video.currentTime += 15
}
  

  