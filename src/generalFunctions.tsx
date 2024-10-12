import { chordDistance, pianoNotes } from "./generalData";

export function chordMaker(root: number, type: string) {

  const chordArray = chordDistance.find(chord => chord.id === type);
  if(chordArray != undefined) {
    let chordType = chordArray.distance
    let chordNumbers = chordType.map(elem => elem + root + 48)
    console.log(chordNumbers)
    let returnChord : string[] = [];
    chordNumbers.forEach(elem => {
      const note = pianoNotes.find(note => note.id === elem);
      if (note) {
          returnChord.push(note.note);
      }
    });

    return returnChord
  }

}