/**
 * Day 9 of 100
 *  - Finally got an understanding of a JS problem that had grounded me for 2 days
 *  - Got a way to work around the 'Record Collection' question
 */

const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Ben Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {
    if(prop !== 'tracks' && value !== ""){
        records[id][prop] = value;
    }
    else if(prop === "tracks" && records[id].hasOwnProperty("tracks") === false){
        records[id][prop] = [value];
    }
    else if(prop === "tracks" && value !== ""){
        records[id][prop].push(value);
    }
    else if(value === ''){
        delete records[id][prop];
    }
    return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));