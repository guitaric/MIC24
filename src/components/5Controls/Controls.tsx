import React from 'react';

interface ControlProps {
  playerElems: string[];
  setPlayerElems: React.Dispatch<React.SetStateAction<string[]>>;
}

const Controls: React.FC<ControlProps> = ({playerElems, setPlayerElems}) => {

  const resetPlayerElems = (event: React.MouseEvent) => {
    setPlayerElems([])
  }


  return (
    <div className='controlsSection section'>

      <div className="info infoMode">i</div>

      <h2 className="h2">Controls</h2>

      <button className="playButton">Play</button> <br /> 
      <button className="clearButton" onClick={resetPlayerElems}>Clear</button> <br /> <br />

      <label htmlFor="bpm">BPM</label> <br />
      <select name="bpm" id="bpm">
        <option value=""></option>
        <option value=""></option>
      </select> <br /> 

      <label htmlFor="synthMode">Synth mode</label> <br />
      <select name="synthMode" id="synthMode">
        <option value=""></option>
        <option value=""></option>
      </select> <br /> 

      <label htmlFor="arpMode">arp mode</label> <br />
      <select name="arpMode" id="arpMode">
        <option value="">Up</option>
        <option value="">Down</option>
        <option value="">Double Up</option>
        <option value="">Double Down</option>
        <option value="">Up Down</option>
        <option value="">Down Up</option>
        <option value="">Random</option>
      </select>  <br /> <br />
      <input type="number" placeholder='100' id="arpMode" min='60' max='180' />


    </div>

  );
};

export default Controls;