// ChordButton.tsx
import React from 'react';

interface SequencerElemProps {
  switchChecked: (event: React.MouseEvent) => string;
}

  const SequencerElem: React.FC<SequencerElemProps> = () => {
  
    const switchChecked = (event: React.MouseEvent) => {
      const target = event.currentTarget as HTMLElement;

      if (target.classList.contains('checked')) {
        target.classList.remove('checked');
      } else {
        target.classList.add('checked');
      }
    }

    return (
      <div className='seqElem checkbox' onClick={switchChecked}></div>
    );
};

export default SequencerElem;
