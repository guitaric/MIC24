import React from 'react';
import chordData from './chordData';
import ChordButton from './ChordButton';

interface ChordGridProps {
  doubleClick: (event: React.MouseEvent) => void; // Define the prop type for the double-click handler
}

const ChordGrid: React.FC<ChordGridProps> = ({doubleClick}) => {

  return (
    <div className='chordSection section'>

        <div className="romanHolder">
          <div className='roman romanI'>I</div>
          <div className='roman romanII'>II</div>
          <div className='roman romanIII'>III</div>
          <div className='roman romanIV'>IV</div>
          <div className='roman romanV'>V</div>
          <div className='roman romanVI'>VI</div>
          <div className='roman romanVII'>VII</div>
        </div>

      <div className='chordGridHolder'>

        <div className='chordGrid'>

          {chordData.map((column, colIndex) => (
            <div key={colIndex} className={`gridCol${colIndex + 1} gridCol`}>
              {column.map((chord) => (
                <ChordButton 
                    key={chord.id} 
                    id={chord.id} 
                    note={chord.note}
                    type={chord.type}
                    className={chord.className} 
                    name={chord.name} 
                    onDoubleClick={doubleClick} 
                />
                ))}
            </div>
          ))}

        </div>

        <div className='lineGrid'>
          <div className='bgLine'></div>
          <div className='bgLine'></div>
          <div className='bgLine'></div>
          <div className='bgLine'></div>
          <div className='bgLine'></div>
          <div className='bgLine'></div>
          <div className='bgLine'></div>
        </div>

      </div>

    </div>
  );
};

export default ChordGrid;