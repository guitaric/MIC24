// import React, {  } from 'react';
import { Dispatch, SetStateAction } from 'react';

interface SequencerElemProps {
  toggleChecked: () => void; 
  checkedArray: boolean;
  setCheckedArray: Dispatch<SetStateAction<boolean[]>>; 
}

  const SequencerElem: React.FC<SequencerElemProps> = ({checkedArray, toggleChecked}) => {
  
    const switchChecked = () => {
      toggleChecked(); // Call the parent's toggleChecked function
    };

    return (
      <div 
        className={`seqElem checkbox ${checkedArray ? "checked" : ""}`} 
        onClick={switchChecked}>
      </div>
    );
};

export default SequencerElem;
