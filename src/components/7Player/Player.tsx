import React from 'react';

interface PlayerProps {
  playerElems: { id: string; note: string | null }[];
}

const Player: React.FC<PlayerProps> = ({playerElems}) => {

  const iterations = Array.from({ length: 16 }, (_, index) => index);

  return (
    <div className='playerSection section'>

        <div className="info infoPlayer">i</div>

        <h2 className="h2">Player</h2>

        <div className="playerGrid">

          {iterations.map((iteration) => (
              <div className='playerChord' key={iteration}>
                {playerElems[iteration] ? playerElems[iteration].id || "NO NOTE" : ""} <br></br>
                {playerElems[iteration] ? playerElems[iteration].note || "NO NOTE" : ""}
                </div>
          ))}

        </div>


    </div>

  );
};

export default Player;