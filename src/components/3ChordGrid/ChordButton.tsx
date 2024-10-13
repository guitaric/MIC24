// ChordButton.tsx
import React from 'react';

interface ChordButtonProps {
    id: string;
    className: string;
    name: string;
    type: string;
    note: string | null;
    onDoubleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ChordButton: React.FC<ChordButtonProps> = ({ id, className, name, type, note, onDoubleClick }) => {
    return (
        <div id={id} data-note={note} data-type={type} className={`chordButton ${className}`} onDoubleClick={onDoubleClick}>
            {name}
        </div>
    );
};

export default ChordButton;
