## Project Notes

Project notes is a command-line interface npm package that lets you maintain quick notes about your project right from your terminal.

### Installation

    npm i project-notes

### Usage

_In app.js file_

    const notes=require('project-notes')
    notes.use()

_Now from the terminal use the following commands_

1. To add a note

   `node app.js add --title="First Note" --body="This is my first note"`

   `New note added!`

2. To list all the notes

   `node app.js list`

   ```
   Your Notes
   1. First Note
   2. Second Note
   ```

3. To read a note

   `node app.js read --title="First Note"`

   ```
   First Note
   This is my first note
   ```

4. To remove a note

   `node index.js remove --title="First Note"`

   ```
   Note removed!
   ```
