import React from 'react';
import sequencerData from './sequencerData';
import SequencerElem from '../6.1SequencerElem/SequencerElem';


const Sequencer: React.FC = () => {

  const iterations = Array.from({ length: 16 }, (_, index) => index);

  return (
    <div className='sequencerSection section'>

      <div className="info infoSequencer">i</div>

      <h2 className="h2">Sequencer</h2>

      <div className="sequencerHolder">

        {sequencerData.map((column, colIndex) => (
          <div key={colIndex}>
              <div className="seqRow">
                <div className="seqName">{sequencerData[colIndex]}</div>
                <div className="seqBoxes">
                  {iterations.map((iteration) => (
                    <SequencerElem key={iteration} />
                  ))} 
                </div>
              </div>
          </div>
        ))}

      </div>

    </div>

  );
};

export default Sequencer;