const VERSES = [
    {
        id: 1,
        location: 'Romans 8:37',
        verse: '...In all these things we are more than conquerors'
    },
    {
        id: 2,
        location: 'John 10:10',
        verse: 'The theif cometh not but for to steal, to kill and to destroy, but I am come that they might have life and have it more abundantly'
    },
    {
        id: 3,
        location: 'I Timothy 1:7',
        verse: 'For God has not given us the spirit of fear, but of power and of love and of a sound mind'
    }
    ]
export function getVerse(callback) {
        // let r = Math.floor(Math.random() * 3) + 1;
        // console.log(r);
        callback(VERSES);       
}
