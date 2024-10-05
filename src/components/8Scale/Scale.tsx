import React from 'react';

const Scale: React.FC = () => {
  return (
    <div className='scaleSection section'>

      <div className="scaleHolder">

        <div className="info infoMode">i</div>

        <h2 className="h2 scaleTitle">Mode</h2>

        <div className='churchScales'>
          <div className='churchScale'>C Lydian</div>
          <div className='churchScale'>C Ionian</div>
          <div className='churchScale'>C Mixolydian</div>
          <div className='churchScale'>C Dorian</div>
          <div className='churchScale'>C Aeolian</div>
          <div className='churchScale'>C Phrygian</div>
          <div className='churchScale'>C Locrian</div>
        </div>

      </div>


    </div>

  );
};

export default Scale;