import React from 'react';

const AltChordGrid: React.FC = () => {
  return (
    <div className='altChordSection'>

        <div className="secBlock">

            <div className="h2">Secondary Dominants</div>
            <div className='altChordSecSection'>
                <div className='altChordSecCol1 altChordSecCol'>
                    <div id='secDomC' className='secChordButton altChordButton chordButton'>C7</div>
                    <div id='secDomF#' className='secChordButton altChordButton chordButton'>F#7</div>
                </div>
                <div className='altChordSecCol2 altChordSecCol'>
                    <div id='secDomC#' className='secChordButton altChordButton chordButton'>C#7/Db7</div>
                    <div id='secDomG' className='secChordButton altChordButton chordButton'>G7</div>
                </div>
                <div className='altChordSecCol3 altChordSecCol'>
                    <div id='secDomD' className='secChordButton altChordButton chordButton'>D7</div>
                    <div id='secDomGh' className='secChordButton altChordButton chordButton'>G#7/Ab7</div>
                </div>
            </div>
            <div className='altChordSecSection'>
                <div className='altChordSecCol4 altChordSecCol'>
                    <div id='secDomD#' className='secChordButton altChordButton chordButton'>D#7/Eb7</div>
                    <div id='secDomA' className='secChordButton altChordButton chordButton'>A7</div>
                </div>
                <div className='altChordSecCol5 altChordSecCol'>
                    <div id='secDomE' className='secChordButton altChordButton chordButton'>E7</div>
                    <div id='secDomBb' className='secChordButton altChordButton chordButton'>A#7/Bb7</div>
                </div>
                <div className='altChordSecCol6 altChordSecCol'>
                    <div id='secDomF' className='secChordButton altChordButton chordButton'>F7</div>
                    <div id='secDomB' className='secChordButton altChordButton chordButton'>B7</div>
                </div>
            </div>
        </div>


        <div className="augAndDim">

            <div className="augBlock">
                <div className="h2">Augmented Chords</div>
                <div className='altChordAugSection'>
                    <div className='altChordAugCol1 altChordAugCol'>
                        <div id='augC' className='augChordButton altChordButton chordButton'>C</div>
                        <div id='augCh' className='augChordButton altChordButton chordButton'>C#/Db</div>
                    </div>
                    <div className='altChordAugCol2 altChordAugCol'>
                        <div id='augD' className='augChordButton altChordButton chordButton'>D</div>
                        <div id='augDh' className='augChordButton altChordButton chordButton'>D#/Eb</div>
                    </div>
                </div>
            </div>

            <div className="dimBlock">
                <div className="h2">Diminished Chords</div>
                <div className='altChordDimSection'>
                    <div className='altChordDimCol1 altChordDimCol'>
                        <div id='dimC' className='dimChordButton altChordButton chordButton'>C</div>
                    </div>
                    <div className='altChordDimCol2 altChordDimCol'>
                        <div id='dimF' className='dimChordButton altChordButton chordButton'>F</div>
                        <div id='dimG' className='dimChordButton altChordButton chordButton'>G</div>
                    </div>
                </div>
            </div>

        </div>

    </div>

  );
};

export default AltChordGrid;