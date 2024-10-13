// ChordButton.tsx
import SequencerElem from '../6.1SequencerElem/SequencerElem';

interface SequencerElemProps {
    name: string,
    loopPos: number, 
    isPlaying: boolean,
    iterations: number[],
    checkedArray: boolean[],
    setCheckedArray: () => void
}

const SequencerBlock: React.FC<SequencerElemProps> = ({name, iterations, checkedArray, setCheckedArray}) => {


    const toggleChecked = (index: number) => {
        setCheckedArray((prev) =>
          prev.map((item, i) => (i === index ? !item : item))
        );
      };


    return (
        <div className="seqRow">
            <div className="seqName">{name}</div>
            <div className="seqBoxes">
                {iterations.map((iteration) => {
                    return (
                        <SequencerElem 
                        key={iteration} 
                        checkedArray={checkedArray[iteration]}
                        setCheckedArray={setCheckedArray}
                        toggleChecked={() => toggleChecked(iteration)}
                        />
                    );
                })} 
            </div>
        </div>
    );
};

export default SequencerBlock;
