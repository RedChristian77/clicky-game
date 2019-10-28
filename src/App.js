import React, {useState} from 'react';
import Wrapper from "./components/wrapper"
import './App.css';
import photoArraySet from './components/photostoarray'
import Card from './components/card';

 function looptest(array, search){
    for(let i=0; i<array.length; i++){
      if(array[i].id === search){
        return i;
      }
    }
  }

export default function App() {


  let [currentScore, setCurrentScore] = useState(0);
  let [highscore, setCurrentHighScore] = useState(0);
  let [photos, setPhotos] = useState(photoArraySet);
  let [ifClicked, setIfClicked] = useState(photoArraySet);




  return (
    <Wrapper>
    <div className="App">
      <header className="App-header">
        <div>Clicky Game</div>
        <div>Press any Photo to Start</div>
        <div>
          <div id="currentScore">Current Score: {currentScore} </div>
          <div id="bestScore">High Score: {highscore} </div>
        </div>
      </header>
      <div className="columns">
        {photos.map(photo => (
          <Card
            onclicking={(id) => {
              //if not already clicked
              let test = photo.id;
              let index = looptest(photos, test);

              if(ifClicked[index].clicked === false){
                let thing = ifClicked;
                thing[index].clicked = true;

               setCurrentScore(currentScore += 1);
               setIfClicked(ifClicked = thing);
               
               if(highscore < currentScore){
                 setCurrentHighScore(highscore = currentScore);
               }
              }
              else{
                setCurrentScore(currentScore = 0);
                setIfClicked(photoArraySet);
              }
              setPhotos([...photos.sort((a,b) => (Math.random() >= 0.5 ? 1:-1))])
            }}
            
            key = {photo.id}
            name = {photo.name}
            image = {photo.source}
            />
        ))}
      </div>
    </div>
    </Wrapper>
  );
}
