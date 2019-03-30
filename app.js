const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe:'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
        ,
        body:{
            describe:'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        const {title, body} = argv;
        notes.addNote(title, body);
    }
});

yargs.command ({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
});

yargs.command ({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('The note to read');
    }
});

yargs.command ({
    command: 'list',
    describe: 'list a note',
    handler: function () {
        console.log('listing notes');
    }
});

yargs.parse();


