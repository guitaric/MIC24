import React from 'react';

const ChordGrid: React.FC = () => {
  return (
    <div className='chordSection'>

      <div className='chordGridHolder'>

        <div className='chordGrid'>
          <div className='gridCol1 gridCol'>
            <div id='I-maj' className='chordButton romanI'>CMaj7</div>
            <div id='I-dom' className='chordButton romanI'>C7</div>
            <div id='I-min' className='chordButton romanI'>Cmin7</div>
            <div id='I-halfdim' className='chordButton romanI'>Cm7b5</div>
          </div>
          <div className='gridCol2 gridCol'>
            <div id='II-dom' className='chordButton romanII'>D7</div>
            <div id='II-min' className='chordButton romanII'>Dmin7</div>
            <div id='II-halfdim' className='chordButton romanII'>Dm7b5</div>
            <div id='IIb-maj' className='chordButton romanII'>DMaj7</div>
          </div>
          <div className='gridCol3 gridCol'>
            <div id='III-min' className='chordButton romanIII'>Emin7</div>
            <div id='III-halfdim' className='chordButton romanIII'>Em7b5</div>
            <div id='IIIb-maj' className='chordButton romanIII'>EMaj7</div>
            <div id='IIIb-dom' className='chordButton romanIII'>E7</div>
            <div id='IIIb-min' className='chordButton romanIII'>Ebmin7</div>
          </div>
          <div className='gridCol4 gridCol'>
            <div id='IVh-halfdim' className='chordButton romanIV'>F#m7b5</div>
            <div id='IV-maj' className='chordButton romanIV'>FMaj7</div>
            <div id='IV-dom' className='chordButton romanIV'>F7</div>
            <div id='IV-min' className='chordButton romanIV'>Fmin7</div>
          </div>
          <div className='gridCol5 gridCol'>
            <div id='V-maj' className='chordButton romanV'>GMaj7</div>
            <div id='V-dom' className='chordButton romanV'>G7</div>
            <div id='V-min' className='chordButton romanV'>Gmin7</div>
            <div id='V-halfdim' className='chordButton romanV'>Gm7b5</div>
            <div id='Vb-maj' className='chordButton romanV'>GbMaj7</div>
          </div>
          <div className='gridCol6 gridCol'>
            <div id='VI-min' className='chordButton romanVI'>Amin7</div>
            <div id='VI-halfdim' className='chordButton romanVI'>Am7b5</div>
            <div id='VIb-maj' className='chordButton romanVI'>AbMaj7</div>
            <div id='VIb-dom' className='chordButton romanVI'>Ab7</div>
          </div>
          <div className='gridCol7 gridCol'>
            <div id='VII-min' className='chordButton romanVII'>Bmin7</div>
            <div id='VII-halfdim' className='chordButton romanVII'>Bm7b5</div>
            <div id='VIIb-maj' className='chordButton romanVII'>BbMaj7</div>
            <div id='VIIb-dom' className='chordButton romanVII'>Bb7</div>
            <div id='VIIb-min' className='chordButton romanVII'>Bbmin7</div>
          </div>


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