const fs = require('fs');
const chalk = require('chalk');

const addNote = (title,body) => {
    const loadedNotes = loadNotes();
    const duplicateNotes = loadedNotes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0){
        const notesToSave = [...loadedNotes,{title,body}];
        saveNotes(notesToSave);
        console.log(chalk.green(`Note with title "${title}" added.`));
    }else{
        console.log(chalk.red(`Can't add,note with the title "${title}" is duplicated.`));
    }
}

const readNote = (title) => {
    const loadedNotes = loadNotes();
    const noteToRead = loadedNotes.find((note) => note.title === title);
    if(noteToRead){
        console.log(chalk.green('Your note:'));
        console.log(`Title: ${noteToRead.title}`);
        console.log(`Title: ${noteToRead.body}`);
    }else{
        console.log(chalk.red(`Note with title "${title}" not founded.`));
    }
}

const listNotes = () => {
    const loadedNotes = loadNotes();
    console.log(chalk.inverse('Your notes:'));
    loadedNotes.forEach((note) => console.log(`- ${note.title}`) );
}

const removeNote = (title) => {
    const loadedNotes = loadNotes();
    const notesToKeep = loadedNotes.filter((note) => note.title !== title);
    if(loadedNotes.length === notesToKeep.length){
        console.log(chalk.red(`Can't delete, note with title "${title}" not founded."`));
    }else{
        saveNotes(notesToKeep);
        console.log(chalk.green(`Note with title "${title}" removed.`));
    }
}

const loadNotes = () => {
    try {
        const notesJSON = fs.readFileSync('notes.json').toString();
        const notes = JSON.parse(notesJSON);
        return notes;
    }catch(e){
        return [];
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',notesJSON);
}


module.exports = {
   removeNote,
    addNote,
    listNotes,
    readNote
}