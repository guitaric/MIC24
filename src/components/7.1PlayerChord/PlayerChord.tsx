// ChordButton.tsx
import React from 'react';



const ChordButton: React.FC<PlayerChordProps> = ({}) => {
    return (
        <div id={id} className={`chordButton ${className}`} onDoubleClick={onDoubleClick}>
            {name}
        </div>
    );
};

export default ChordButton;
