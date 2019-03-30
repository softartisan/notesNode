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
    handler: (argv) => {
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
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
});

yargs.command ({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe:'titulo a buscar',
            type:'string',
            demandOption:true
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title);
    }
});

yargs.command ({
    command: 'list',
    describe: 'list a note',
    handler: () => {
        notes.listNotes();
    }
});

yargs.parse();


