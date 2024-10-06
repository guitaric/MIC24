import React from 'react';
import AltChordButton from '../4.1AltChordButton/AltChordButton';

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
                    <AltChordButton id='secDomC' label='C7' altChordType='secChordButton' doubleClick={doubleClick} />
                    <AltChordButton id='secDomF#' label='F#7' altChordType='secChordButton'  doubleClick={doubleClick} />
                </div>
                <div className='altChordSecCol2 altChordSecCol'>
                    <AltChordButton id='secDomC#'  label='C#7/Db7' altChordType='secChordButton'  doubleClick={doubleClick} />
                    <AltChordButton id='secDomG'  label='G7' altChordType='secChordButton'  doubleClick={doubleClick} />
                </div>
                <div className='altChordSecCol3 altChordSecCol'>
                    <AltChordButton id='secDomD'  label='D7' altChordType='secChordButton'  doubleClick={doubleClick} />
                    <AltChordButton id='secDomGh'  label='G#7/Ab7' altChordType='secChordButton'  doubleClick={doubleClick} />
                </div>
            </div>
            <div className='altChordSecSection'>
                <div className='altChordSecCol4 altChordSecCol'>
                    <AltChordButton id='secDomD#'  label='D#7/Eb7' altChordType='secChordButton'  doubleClick={doubleClick} />
                    <AltChordButton id='secDomA'  label='A7' altChordType='secChordButton'  doubleClick={doubleClick} />
                </div>
                <div className='altChordSecCol5 altChordSecCol'>
                    <AltChordButton id='secDomE'  label='E7' altChordType='secChordButton'  doubleClick={doubleClick} />
                    <AltChordButton id='secDomBb'  label='A#7/Bb7' altChordType='secChordButton'  doubleClick={doubleClick} />
                </div>
                <div className='altChordSecCol6 altChordSecCol'>
                    <AltChordButton id='secDomF'  label='F7' altChordType='secChordButton'  doubleClick={doubleClick} />
                    <AltChordButton id='secDomB'  label='B7' altChordType='secChordButton'  doubleClick={doubleClick} />
                </div>
            </div>
        </div>
        <br />

        <div className="augAndDim">

            <div className="augBlock">
                <div className="h2">Augmented</div>
                <div className='altChordAugSection'>
                    <div className='altChordAugCol1 altChordAugCol'>
                        <AltChordButton id='augC' label='Caug' altChordType='augChordButton'  doubleClick={doubleClick} />
                        <AltChordButton id='augCh' label='C#aug' altChordType='augChordButton'  doubleClick={doubleClick} />
                    </div>
                    <div className='altChordAugCol2 altChordAugCol'>
                        <AltChordButton id='augD' label='Daug' altChordType='augChordButton'  doubleClick={doubleClick} />
                        <AltChordButton id='augDh' label='D#aug' altChordType='augChordButton'  doubleClick={doubleClick} />
                    </div>
                </div>
            </div>

            <div className="dimBlock">
                <div className="h2">Diminished</div>
                <div className='altChordDimSection'>
                    <div className='altChordDimCol1 altChordDimCol'>
                        <AltChordButton id='dimC' label='C°' altChordType='dimChordButton'  doubleClick={doubleClick} />
                    </div>
                    <div className='altChordDimCol2 altChordDimCol'>
                        <AltChordButton id='dimF' label='F°' altChordType='dimChordButton'  doubleClick={doubleClick} />
                        <AltChordButton id='dimG' label='G°' altChordType='dimChordButton'  doubleClick={doubleClick} />
                    </div>
                </div>
            </div>

        </div>

    </div>

  );
};

export default AltChordGrid;