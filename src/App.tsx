import React, { useState, useEffect } from 'react';


import './App.css'

import './components/1Header/Header.css';
import './components/2Roman/Roman.css';
import './components/3ChordGrid/ChordGrid.css';
import './components/4AltChordGrid/AltChordGrid.css';
import './components/5Controls/Controls.css';
import './components/6Sequencer/Sequencer.css';
import './components/7Player/Player.css';
import './components/8Scale/Scale.css';

import Header from './components/1Header/Header';
import Roman from './components/2Roman/Roman';
import ChordGrid from './components/3ChordGrid/ChordGrid';
import AltChordGrid from './components/4AltChordGrid/AltChordGrid';
import Controls from './components/5Controls/Controls';
import Sequencer from './components/6Sequencer/Sequencer';
import Player from './components/7Player/Player';
import Scale from './components/8Scale/Scale';

import * as Tone from 'tone';

import { chordMaker } from './generalFunctions';



function App() {

  // general variables
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerElems, setPlayerElems] = useState<{ id: string, note: string | null }[]>([]);
  const [loopPos, setLopPos] = useState(0);

  // crerating the instruments
  const [synth] = useState(() => new Tone.PolySynth(Tone.Synth).toDestination());
  const [kick] = useState(() => new Tone.MembraneSynth().toDestination());
  const [snare] = useState(() => new Tone.NoiseSynth().toDestination());
  const closedHiHat = new Tone.Sampler({
    urls: {
        C4: 'samples/HIHAT_053.wav', 
    },
    baseUrl: '/', 
  }).toDestination();
  const openHiHat = new Tone.Sampler({
    urls: {
        C4: 'samples/HIHAT_054.wav', 
    },
    baseUrl: '/', 
  }).toDestination();

  // cfeating the array
  // const [checkedArray, setCheckedArray] = useState(new Array(16).fill(false));
  // const [checkedArray, setCheckedArray] = useState(new Array(16).fill(false));
  const [checkedArrayOHH, setCheckedArrayOHH] = useState(new Array(16).fill(false));
  const [checkedArrayCHH, setCheckedArrayCHH] = useState(new Array(16).fill(false));
  const [checkedArraySnare, setCheckedArraySnare] = useState(new Array(16).fill(false));
  const [checkedArrayKick, setCheckedArrayKick] = useState(new Array(16).fill(false));
  
  const iterations = Array.from({ length: 16 }, (_, index) => index);



  // Function to handle adding a clicked element to the array
  const handleDoubleClick = (event: React.MouseEvent) => {
    const note = (event.currentTarget as HTMLDivElement).dataset.note || null;
    const type = (event.currentTarget as HTMLDivElement).dataset.type || null;
    setPlayerElems(playerElems =>
      [
      ...playerElems,
      {id: (event.target as HTMLElement).id, note, type}
      ]
    )
  }

  const togglePlay = async () => {
    await Tone.start();
    setIsPlaying(prevState => !prevState);
  };


  useEffect(() => {

      const transport = Tone.getTransport();

      const loop = new Tone.Loop(time => {
          // console.log(loopPos);
          if(playerElems[loopPos] != undefined) {
            let chordsToPlay = chordMaker(Number(playerElems[loopPos].note), playerElems[loopPos].type);
            synth.triggerAttackRelease(chordsToPlay, "64n", time);
          }
          if(checkedArrayKick[loopPos]) {
            kick.triggerAttackRelease('c1', '16n', time)
          }
          if(checkedArraySnare[loopPos]) {
            snare.triggerAttackRelease('8n', time);
          }
          if(checkedArrayCHH[loopPos]) {
            closedHiHat.triggerAttack("C4");
          }
          if(checkedArrayOHH[loopPos]) {
            openHiHat.triggerAttack("C4");
          }

        setLopPos((prev) => (prev + 1) % 16);
      }, "0.25");

      if (isPlaying) {
        transport.start();
        loop.start(0);
      } else {
        loop.stop(0);
        transport.stop();
        transport.position = 0;
        setLopPos(0);
      }

      return () => {
          loop.dispose(); 
      };

  }, [isPlaying, playerElems, loopPos]);


  return (
    <>
      <div className="superGrid">
        <Header />
        <Roman/>
        <Scale/>
        <ChordGrid doubleClick={handleDoubleClick} />
        <AltChordGrid doubleClick={handleDoubleClick} />
        <Controls
          togglePlay={togglePlay}
          isPlaying={isPlaying} setIsPlaying={setIsPlaying}
          setPlayerElems={setPlayerElems}
          />
        <Sequencer 
          loopPos={loopPos} 
          isPlaying={isPlaying} 
          iterations={iterations}
          checkedArrayKick={checkedArrayKick}
          setCheckedArrayKick={setCheckedArrayKick}
          checkedArraySnare={checkedArraySnare}
          setCheckedArraySnare={setCheckedArraySnare}
          checkedArrayCHH={checkedArrayCHH}
          setCheckedArrayCHH={setCheckedArrayCHH}
          checkedArrayOHH={checkedArrayOHH}
          setCheckedArrayOHH={setCheckedArrayOHH}
        />
        <Player playerElems={playerElems}/>
      </div>
      <footer>© 2024 Taric Lallai. All Rights Reserved.</footer>
    </>
  )


}

export default App
