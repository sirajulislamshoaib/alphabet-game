// function play(){
//     // hide the home screen and show the playground

//     const homeScreen=document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playGroundScreen=document.getElementById('play-graound');
//     playGroundScreen.classList.remove('hidden');

// }

function handleKeyboardButtonPress(event){
// console.log(event.key);
const gamerPressed=event.key;
// console.log('Player Pressed key: ', gamerPressed);

// stop the game if user press "Esc"
if(gamerPressed==='Escape'){
  gameOver();
}

  // get the expected to press
  const currentAlphabet= document.getElementById('current-alphabet');
  const targetAlphabet=currentAlphabet.innerText;
  const expectedAlphabet= targetAlphabet.toLowerCase();
  console.log(gamerPressed,expectedAlphabet);

  //check key match or not
  if(gamerPressed===expectedAlphabet){
    console.log('You Win and get a point');
    const currentScore = getTextElementValueById('current-score');
    const newScore=currentScore+1;
    setTextElementValueById('current-score', newScore);
    removeBackgroundColorById(expectedAlphabet);
    continueGame();


    // anther method
    // console.log('You have pressed correctly',expectedAlphabet);
    // update score
    // const currentScoreElement=document.getElementById('current-score');
    // const currentScoreText=currentScoreElement.innerText;
    // const currentScore=parseInt(currentScoreText);
    

    // const newScore=currentScore+1;
    // currentScoreElement.innerText=newScore;
    // start a new round
    // removeBackgroundColorById(expectedAlphabet);
    // continueGame();
  }else{
    console.log('You missed.You lost a life');
    const currentLife = getTextElementValueById('current-life');
    const newLife=currentLife-1;
    setTextElementValueById('current-life', newLife);

    if(newLife===0){
      console.log('Game Over');
      gameOver()
    }

    // anther method
    // reduce life by 1
    // const currentLifeElement=document.getElementById('current-life');
    // const currentLifeText=currentLifeElement.innerText;
    // const currentLife=parseInt(currentLifeText);

    // const newLife=currentLife - 1;
    // currentLifeElement.innerText=newLife;
  }

}

document.addEventListener('keyup',handleKeyboardButtonPress)

function continueGame(){
        //  create random alphabet
      const alphabet= getRandomAlphabet();
      // console.log('Your random Alphabet: ',alphabet);

    // set current-alphabet
    const currentAlphabet=document.getElementById('current-alphabet');
    currentAlphabet.innerText=alphabet;
    setBackgroundColorById(alphabet);

}


function play(){
  // hide everything ,show only playground
      hideElementById('home-screen');
      hideElementById('final-score');
      showElementById('play-graound');

      // reset score and life
      setTextElementValueById('current-life', 3);
      setTextElementValueById('current-score', 0);

      continueGame();
    
    }


function gameOver(){
  hideElementById('play-graound');
  showElementById('final-score');

  // update final score game-score
  const lastScore=getTextElementValueById('current-score');
  setTextElementValueById('last-score', lastScore);

  // clear last text color
  const currentAlphabet=getTextElementTextById('current-alphabet');
  removeBackgroundColorById(currentAlphabet);

}