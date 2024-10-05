// ChordButton.tsx
import React from 'react';

interface ChordButtonProps {
    id: string;
    className: string;
    name: string;
    onDoubleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ChordButton: React.FC<ChordButtonProps> = ({ id, className, name, onDoubleClick }) => {
    return (
        <div id={id} className={`chordButton ${className}`} onDoubleClick={onDoubleClick}>
            {name}
        </div>
    );
};

export default ChordButton;
