import React from 'react';

interface AltChordProps {
  id: string;
  label: string;
  altChordType: string,
  doubleClick: (event: React.MouseEvent) => void;
}

const AltChordButton: React.FC<AltChordProps> = ({ id, label, altChordType, doubleClick }) => {
  return (
    <div id={id} className={`${altChordType} altChordButton chordButton`} onDoubleClick={doubleClick}>
      {label}
    </div>
  );
};

export default AltChordButton;
