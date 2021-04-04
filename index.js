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
    },
    selectPlanet(){
      let accoutrement = '<img class="parallaxStars" src="imgs/selection.gif" alt=""><div class="flash"></div><img class="panel" src="imgs/panel.gif" alt="">'

      if(selectedPlanet && $('.layer_3').is(':empty')){
        let planetClone = selectedPlanet.clone()
        $('.layer_3').append(accoutrement)
        $('.layer_3').append(planetClone)
        

        setTimeout(function(){
          $('.layer_3').empty();
        }, 10000)
      }

      
    }
  };

  const keyAction = {
    a: { keydown: Actions.prevPlanet },
    d: { keydown: Actions.nextPlanet },
    h: { keydown: Actions.showTut },
    f: { keydown: Actions.fullScreen },
    Enter: { keydown: Actions.selectPlanet }
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



/* #region  SCALE GAME */
function scaleGame(){
  var viewportWidth = $(window).width();
  var viewportHeight = $(window).height();
  var resizeH = viewportHeight / 1080
  var resizeW = viewportWidth / 1920
  if(resizeH >  resizeW){
    $('#game').css('transform', 'scale(' + resizeW + ')')
  }else{
    $('#game').css('transform', 'scale(' + resizeH + ')')
  }
}

scaleGame()

$(window).resize(function() {
  scaleGame()
});
/* #endregion */