import React from 'react';

interface AltChordProps {
  id: string;
  label: string;
  note: string | null;
  type: string | null;
  altChordType: string,
  doubleClick: (event: React.MouseEvent) => void;
}

const AltChordButton: React.FC<AltChordProps> = ({ id, label, note, type, altChordType, doubleClick }) => {
  return (
    <div id={id} data-note={note} data-type={type} className={`${altChordType} altChordButton chordButton`} onDoubleClick={doubleClick}>
      {label}
    </div>
  );
};

export default AltChordButton;
