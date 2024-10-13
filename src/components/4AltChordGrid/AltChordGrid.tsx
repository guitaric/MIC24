import React from 'react';
import AltChordButton from './AltChordButton';

interface AltChordGridProps {
    doubleClick: (event: React.MouseEvent) => void; // Define the prop type for the double-click handler
  }

const AltChordGrid: React.FC<AltChordGridProps> = ({doubleClick}) => {
  return (
    <div className='altChordSection section'>

        <div className="secBlock">

            <div className="h2">Secondary Dominants</div>
            <div className='altChordSecSection'>
                <div className='altChordSecCol1 altChordSecCol'>
                    <AltChordButton id='secDomC' note='0' type='dom' label='C7' altChordType='secChordButton' doubleClick={doubleClick} />
                    <AltChordButton id='secDomF#' note='6' type='dom' label='F#7' altChordType='secChordButton'  doubleClick={doubleClick} />
                </div>
                <div className='altChordSecCol2 altChordSecCol'>
                    <AltChordButton id='secDomC#'  note='1' type='dom' label='C#7/Db7' altChordType='secChordButton'  doubleClick={doubleClick} />
                    <AltChordButton id='secDomG'  note='7' type='dom' label='G7' altChordType='secChordButton'  doubleClick={doubleClick} />
                </div>
                <div className='altChordSecCol3 altChordSecCol'>
                    <AltChordButton id='secDomD'  note='2' type='dom' label='D7' altChordType='secChordButton'  doubleClick={doubleClick} />
                    <AltChordButton id='secDomGh'  note='8' type='dom' label='G#7/Ab7' altChordType='secChordButton'  doubleClick={doubleClick} />
                </div>
            </div>
            <div className='altChordSecSection'>
                <div className='altChordSecCol4 altChordSecCol'>
                    <AltChordButton id='secDomD#'  note='3' type='dom' label='D#7/Eb7' altChordType='secChordButton'  doubleClick={doubleClick} />
                    <AltChordButton id='secDomA'  note='9' type='dom' label='A7' altChordType='secChordButton'  doubleClick={doubleClick} />
                </div>
                <div className='altChordSecCol5 altChordSecCol'>
                    <AltChordButton id='secDomE'  note='4' type='dom' label='E7' altChordType='secChordButton'  doubleClick={doubleClick} />
                    <AltChordButton id='secDomBb'  note='10' type='dom' label='A#7/Bb7' altChordType='secChordButton'  doubleClick={doubleClick} />
                </div>
                <div className='altChordSecCol6 altChordSecCol'>
                    <AltChordButton id='secDomF'  note='5' type='dom' label='F7' altChordType='secChordButton'  doubleClick={doubleClick} />
                    <AltChordButton id='secDomB'  note='11' type='dom' label='B7' altChordType='secChordButton'  doubleClick={doubleClick} />
                </div>
            </div>
        </div>
        <br />

        <div className="augAndDim">

            <div className="augBlock">
                <div className="h2">Augmented</div>
                <div className='altChordAugSection'>
                    <div className='altChordAugCol1 altChordAugCol'>
                        <AltChordButton id='augC' note='0' type='aug' label='Caug' altChordType='augChordButton'  doubleClick={doubleClick} />
                        <AltChordButton id='augCh' note='1' type='aug' label='C#aug' altChordType='augChordButton'  doubleClick={doubleClick} />
                    </div>
                    <div className='altChordAugCol2 altChordAugCol'>
                        <AltChordButton id='augD' note='2' type='aug' label='Daug' altChordType='augChordButton'  doubleClick={doubleClick} />
                        <AltChordButton id='augDh' note='3' type='aug' label='D#aug' altChordType='augChordButton'  doubleClick={doubleClick} />
                    </div>
                </div>
            </div>

            <div className="dimBlock">
                <div className="h2">Diminished</div>
                <div className='altChordDimSection'>
                    <div className='altChordDimCol1 altChordDimCol'>
                        <AltChordButton id='dimC' note='0' type='dim' label='C°' altChordType='dimChordButton'  doubleClick={doubleClick} />
                    </div>
                    <div className='altChordDimCol2 altChordDimCol'>
                        <AltChordButton id='dimF' note='5' type='dim' label='F°' altChordType='dimChordButton'  doubleClick={doubleClick} />
                        <AltChordButton id='dimG' note='7' type='dim' label='G°' altChordType='dimChordButton'  doubleClick={doubleClick} />
                    </div>
                </div>
            </div>

        </div>

    </div>

  );
};

export default AltChordGrid;