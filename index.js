/* #region  PLANET SELECT */
let selectedPlanet;

let selectSnd = new Audio("snds/9.mp3");
selectSnd.volume = .01;


const Actions = {
    nextPlanet()  {
        Actions.hideTut()
        console.log("highlighting next planet...");
        if (selectedPlanet == null){
            selectedPlanet = $(".planet.one");
        }
        else{
            selectedPlanet.removeClass('selected')
            selectedPlanet = selectedPlanet.next();
            if(!selectedPlanet.hasClass("planet")){
                selectedPlanet = $(".planet.one");
            }
        }
        selectedPlanet.addClass("selected");
        selectSnd.currentTime = 0;
        selectSnd.play();
    },
    prevPlanet()  { 
        Actions.hideTut()
        console.log("highlighting previous planet..."); 
        if (selectedPlanet == null){
            selectedPlanet = $(".planet").last();
        }
        else{
            selectedPlanet.removeClass('selected')
            selectedPlanet = selectedPlanet.prev();
            if(!selectedPlanet.hasClass("planet")){
                selectedPlanet = $(".planet").last();
            }
        }
        selectedPlanet.addClass("selected")
        selectSnd.currentTime = 0;
        selectSnd.play();
    },
    hideTut(){
      $('.startingText').addClass('hide')
      $('.helpText').removeClass('hide')
    },
    showTut(){
      $('.startingText').removeClass('hide')
      $('.helpText').addClass('hide')
    },
    fullScreen(){
      if(document.fullscreenElement !== null){
        // we are in fullscreen so exit
        document.exitFullscreen();
      }
      else{
        document.getElementById('body').requestFullscreen()
      }
      
    }
  };

  const keyAction = {
    a: { keydown: Actions.prevPlanet },
    d: { keydown: Actions.nextPlanet },
    h: { keydown: Actions.showTut },
    f: { keydown: Actions.fullScreen },
  };

  const keyHandler = (ev) => {
    if (ev.repeat) return;                             
    if (!(ev.key in keyAction) || !(ev.type in keyAction[ev.key])) return;
    keyAction[ev.key][ev.type]();
  };

  ['keydown', 'keyup'].forEach((evType) => {
    document.body.addEventListener(evType, keyHandler);
  });
/* #endregion */

let stars = ['<img src="imgs/star1.gif?v=1"/>','<img src="imgs/star1.gif?v=2"/>','<img src="imgs/star1.gif?v=3"/>','<img src="imgs/star1.gif?v=4"/>','<img src="imgs/star2.gif?v=5"/>','<img src="imgs/star2.gif?v=6"/>','<img src="imgs/star2.gif?v=7"/>','<img src="imgs/star2.gif?v=8"/>','<img src="imgs/star3.gif?v=9"/>'];

for (let i = 0; i < stars.length; ++i) {
  (function (i) {
    setTimeout(function () {
        $('.stars').append(stars[i])
    }, 1500*i);
  })(i);
};

document.onmousemove = function(e){
    var x = e.pageX;
    var y = e.pageY;
    e.target.title = "X is "+x+" and Y is "+y;
    };