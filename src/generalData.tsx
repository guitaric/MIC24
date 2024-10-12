export const allNotes =  [

    { id: 0, note: "C", sharp: '', flat: '' },
    { id: 1, note: "C#/Db", sharp: 'C#', flat: 'Db' },
    { id: 2, note: "D", sharp: '', flat: '' },
    { id: 3, note: "D#/Eb", sharp: 'D#', flat: 'Eb' },
    { id: 4, note: "E", sharp: '', flat: '' },
    { id: 5, note: "F", sharp: '', flat: '' },
    { id: 6, note: "F#'/Gb", sharp: 'F#', flat: 'Gb' },
    { id: 7, note: "G", sharp: '', flat: '' },
    { id: 8, note: "G#/Ab", sharp: 'G#', flat: 'Ab' },
    { id: 9, note: "A", sharp: '', flat: '' },
    { id: 10, note: "A#/Bb", sharp: 'A#', flat: 'Bb' },
    { id: 11, note: "B", sharp: '', flat: '' },

]


export const chordDistance =  [

    { id: 'maj', type: 'major', distance: [0, 4, 7], bass: '0' },
    { id: 'min', type: 'minor', distance: [0, 3, 7], bass: '0' },
    { id: 'dim', type: 'diminished', distance: [0, 3, 6], bass: '0' },
    { id: 'aug', type: 'augmented', distance: [0, 4, 8], bass: '0' },
    { id: 'sus2', type: 'suspended', distance: [0, 2, 7], bass: '0' },
    { id: 'sus4', type: 'suspended', distance: [0, 5, 7], bass: '0' },

    { id: 'maj7', type: 'major', distance: [0, 4, 7, 11], bass: '0' },
    { id: 'min7', type: 'minor', distance: [0, 3, 7, 10], bass: '0' },
    { id: 'dom7', type: 'dominant', distance: [0, 4, 7, 10], bass: '0' },
    { id: 'halfdim7', type: 'diminished', distance: [0, 3, 6, 10], bass: '0' },
    { id: 'dim7', type: 'diminished', distance: [0, 3, 6, 9], bass: '0' },


]

export const pianoNotes = [
    { id: 0, note: "C0" }, { id: 1, note: "C#0" }, { id: 2, note: "D0" }, { id: 3, note: "D#0" },
    { id: 4, note: "E0" }, { id: 5, note: "F0" }, { id: 6, note: "F#0" }, { id: 7, note: "G0" },
    { id: 8, note: "G#0" }, { id: 9, note: "A0" }, { id: 10, note: "A#0" }, { id: 11, note: "B0" },

    { id: 12, note: "C1" }, { id: 13, note: "C#1" }, { id: 14, note: "D1" }, { id: 15, note: "D#1" },
    { id: 16, note: "E1" }, { id: 17, note: "F1" }, { id: 18, note: "F#1" }, { id: 19, note: "G1" },
    { id: 20, note: "G#1" }, { id: 21, note: "A1" }, { id: 22, note: "A#1" }, { id: 23, note: "B1" },

    { id: 24, note: "C2" }, { id: 25, note: "C#2" }, { id: 26, note: "D2" }, { id: 27, note: "D#2" },
    { id: 28, note: "E2" }, { id: 29, note: "F2" }, { id: 30, note: "F#2" }, { id: 31, note: "G2" },
    { id: 32, note: "G#2" }, { id: 33, note: "A2" }, { id: 34, note: "A#2" }, { id: 35, note: "B2" },

    { id: 36, note: "C3" }, { id: 37, note: "C#3" }, { id: 38, note: "D3" }, { id: 39, note: "D#3" },
    { id: 40, note: "E3" }, { id: 41, note: "F3" }, { id: 42, note: "F#3" }, { id: 43, note: "G3" },
    { id: 44, note: "G#3" }, { id: 45, note: "A3" }, { id: 46, note: "A#3" }, { id: 47, note: "B3" },

    { id: 48, note: "C4" }, { id: 49, note: "C#4" }, { id: 50, note: "D4" }, { id: 51, note: "D#4" },
    { id: 52, note: "E4" }, { id: 53, note: "F4" }, { id: 54, note: "F#4" }, { id: 55, note: "G4" },
    { id: 56, note: "G#4" }, { id: 57, note: "A4" }, { id: 58, note: "A#4" }, { id: 59, note: "B4" },

    { id: 60, note: "C5" }, { id: 61, note: "C#5" }, { id: 62, note: "D5" }, { id: 63, note: "D#5" },
    { id: 64, note: "E5" }, { id: 65, note: "F5" }, { id: 66, note: "F#5" }, { id: 67, note: "G5" },
    { id: 68, note: "G#5" }, { id: 69, note: "A5" }, { id: 70, note: "A#5" }, { id: 71, note: "B5" },

    { id: 72, note: "C6" }, { id: 73, note: "C#6" }, { id: 74, note: "D6" }, { id: 75, note: "D#6" },
    { id: 76, note: "E6" }, { id: 77, note: "F6" }, { id: 78, note: "F#6" }, { id: 79, note: "G6" },
    { id: 80, note: "G#6" }, { id: 81, note: "A6" }, { id: 82, note: "A#6" }, { id: 83, note: "B6" },

    { id: 84, note: "C7" }, { id: 85, note: "C#7" }, { id: 86, note: "D7" }, { id: 87, note: "D#7" },
    { id: 88, note: "E7" }, { id: 89, note: "F7" }, { id: 90, note: "F#7" }, { id: 91, note: "G7" },
    { id: 92, note: "G#7" }, { id: 93, note: "A7" }, { id: 94, note: "A#7" }, { id: 95, note: "B7" },

    { id: 96, note: "C8" }, { id: 97, note: "C#8" }, { id: 98, note: "D8" }, { id: 99, note: "D#8" },
    { id: 100, note: "E8" }, { id: 101, note: "F8" }, { id: 102, note: "F#8" }, { id: 103, note: "G8" },
    { id: 104, note: "G#8" }, { id: 105, note: "A8" }, { id: 106, note: "A#8" }, { id: 107, note: "B8" },

];