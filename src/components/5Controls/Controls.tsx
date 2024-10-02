import React from 'react';

const Controls: React.FC = () => {
  return (
    <div className='controlsSection'>

      <button className="playButton">Play</button> <br /> <br />
      <button className="clearButton">Clear</button> <br /> <br />

      <label htmlFor="bpm">BPM</label> <br />
      <select name="bpm" id="bpm">
        <option value=""></option>
        <option value=""></option>
      </select> <br /> <br />

      <label htmlFor="synthMode">Synth mode</label> <br />
      <select name="synthMode" id="synthMode">
        <option value=""></option>
        <option value=""></option>
      </select> <br /> <br />  

      <label htmlFor="arpMode">arp mode</label> <br />
      <select name="arpMode" id="arpMode">
        <option value=""></option>
        <option value=""></option>
      </select>  <br /> <br />


    </div>

  );
};

export default Controls;