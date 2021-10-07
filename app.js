const notes=require("./notes.js")
const yargs = require("yargs")

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
    title: {
    describe: 'Note title',
    demandOption: true,
    type: 'string'
    },
    body: {
    describe: 'Note body',
    demandOption: true,
    type: 'string'
    }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    
    }
   })
//create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder: {
        title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//create read command
yargs.command({
    command:'read',
    describe:'Read a note',
    builder: {
        title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
//create list command
yargs.command({
    command:'list',
    describe:'List all the note',
    handler(){
        notes.listNotes()
    }
})
//read all notes command
yargs.command({
    command:'readall',
    describe:'Read all the note',
    handler(){
        notes.readAllNotes()
    }
})
//remove all notes command
yargs.command({
    command:'removeall',
    describe:'Remove all the notes',
    handler(){
        notes.removeAll()
    }
})
// yargs.parse()
// exporting the yargs function
module.exports={
    use:yargs.parse
}