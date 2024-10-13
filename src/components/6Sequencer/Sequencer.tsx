import React, { useEffect } from 'react';
import SequencerBlock from '../6Sequencer/SequencerBlock';
import { Dispatch, SetStateAction } from 'react';

interface SequencerProps {
  loopPos: number,
  isPlaying: boolean,
  iterations: number[],
  checkedArrayKick: number[],
  setCheckedArrayKick: Dispatch<SetStateAction<boolean[]>>; 
  checkedArraySnare: number[],
  setCheckedArraySnare: Dispatch<SetStateAction<boolean[]>>; 
  checkedArrayCHH: number[],
  setCheckedArrayCHH: Dispatch<SetStateAction<boolean[]>>; 
  checkedArrayOHH: number[],
  setCheckedArrayOHH: Dispatch<SetStateAction<boolean[]>>; 
}

const Sequencer: React.FC<SequencerProps> = (
  {
  loopPos, isPlaying, iterations, 
  checkedArrayKick, setCheckedArrayKick,
  checkedArraySnare, setCheckedArraySnare,
  checkedArrayCHH, setCheckedArrayCHH,
  checkedArrayOHH, setCheckedArrayOHH
}
) => {

  return (
    <div className='sequencerSection section'>

      <div className="info infoSequencer">i</div>

      <h2 className="h2">Sequencer</h2>

      <div className="sequencerHolder">

        {/* <SequencerBlock name="Chord" loopPos={loopPos} isPlaying={isPlaying} iterations={iterations} checkedArrayKick={checkedArrayKick} setCheckedArrayKick={setCheckedArrayKick}/>
        <SequencerBlock name="Bass Note" loopPos={loopPos} isPlaying={isPlaying} iterations={iterations} checkedArrayKick={checkedArrayKick} setCheckedArrayKick={setCheckedArrayKick}/> */}
        <SequencerBlock name="Open Hi-hat" loopPos={loopPos} isPlaying={isPlaying} iterations={iterations} checkedArray={checkedArrayOHH} setCheckedArray={setCheckedArrayOHH}/>
        <SequencerBlock name="Closed Hi-hat" loopPos={loopPos} isPlaying={isPlaying} iterations={iterations} checkedArray={checkedArrayCHH} setCheckedArray={setCheckedArrayCHH}/>
        <SequencerBlock name="Snare" loopPos={loopPos} isPlaying={isPlaying} iterations={iterations} checkedArray={checkedArraySnare} setCheckedArray={setCheckedArraySnare}/>
        <SequencerBlock name="Kick" loopPos={loopPos} isPlaying={isPlaying} iterations={iterations} checkedArray={checkedArrayKick} setCheckedArray={setCheckedArrayKick}/>



      </div>

    </div>

  );
};

export default Sequencer;