//file system module to add,read,delete notes in notes.json
const fs=require('fs');
//chalk module to give colourful output msgs
const chalk = require('chalk')

//function to add a note
const addNote=(title,body)=>{
    //loading the required notes
    const notes=loadNotes();
    //checking if any note with same title is there
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        //adding the note
        notes.push({title:title,
            body:body
        })
        //saving the note
        saveNote(notes)
        console.log(chalk.green.inverse('New note added!'))
    }else{
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

//function to remove a note
const removeNote=(title)=>{
    //loading the notes
    const notes=loadNotes();
    //creating a seperate array and keeping all the notes except the one with the title
    const updatedNotes=notes.filter((note)=>{
        return note.title!==title
    })
    //if successfully removed then saving the note
    if(notes.length>updatedNotes.length){
        saveNote(updatedNotes)
        console.log(chalk.green.inverse('Note removed!'))
    }else{
        console.log(chalk.red.inverse('No note found!'))
    }
    
}
//function list all the notes title
const listNotes=()=>{
    //loading the notes
    const notes=loadNotes();
    console.log(chalk.green.inverse('Your Notes'))
    let i=1;
    //if no notes are there then displaying the msg
    if(notes.length==0){
        console.log(chalk.red.inverse('No note found!'))
    }else{
        //listing all the notes
        for(let note of notes){
            console.log(`${i}. ${note.title}`)
            i++;
        }
    }
    
}

//function to read a note
const readNote=(title)=>{
    //loading the notes
    const notes=loadNotes();
    //checking if note with that title is present or not
    const note = notes.find((note) => note.title === title)

    if(note){
        //displaying the note
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse(`No note found with title "${title}"`))
    }
}
//function to load the notes
const loadNotes=()=>{
    try{
        //getting the buffer
        let data=fs.readFileSync('./notes.json')
        //stringifying the data buffer
        data =data.toString();
        //converting the string to object and returning it
        return JSON.parse(data);
    }catch(e){
        return []
    }
  
}
//function to save a note
const saveNote=(notes)=>{
    //stringfying the object
    const dataJSON=JSON.stringify(notes);
    //writing the object in the notes.json file
    fs.writeFileSync('./notes.json',dataJSON)
}

//exporting the modules
module.exports={
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}