import React from 'react';

const Player: React.FC = ({playerElems}) => {

  const iterations = Array.from({ length: 16 }, (_, index) => index + 1);

  return (
    <div className='playerSection section'>

        <div className="info infoPlayer">i</div>

        <h2 className="h2">Player</h2>

        <div className="playerGrid">

          {iterations.map((iteration) => (
              <div className='playerChord' key={iteration}>{playerElems[iteration]}</div>
          ))}


        </div>


    </div>

  );
};

export default Player;