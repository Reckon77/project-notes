## Project Notes

Project notes is a command-line interface npm package that lets you maintain quick notes about your project right from your terminal.

### Installation

    npm i project-notes

_Or install as a dev dependency_

    npm i project-notes --save-dev

### Usage

_In app.js file_

    const notes=require('project-notes')
    notes.use()

_Now from the terminal use the following commands_

1. To add a note

   `node app.js add --title="Fix css bug" --body="Fix the button position bug in the homepage"`

   ```
   New note added!
   ```

2. To list all the notes

   `node app.js list`

   ```
   Your Notes
   1. Fix css bug
   2. Navbar
   ```

3. To read a note

   `node app.js read --title="Fix css bug"`

   ```
   Fix css bug
   Fix the button position bug in the homepage
   ```

4. To read all the notes

   `node app.js readall`

   ```
   Your Notes
    1. Fix css bug
    Fix the button position bug in the homepage
    2. Navbar
    Make the navbar responsive
   ```

5. To remove a note

   `node app.js remove --title="Fix css bug"`

   ```
   Note removed!
   ```

6. To remove all the notes

   `node app.js removeall`

   ```
   All notes removed successfully
   ```

7. For help

   `node app.js --help`

   ```
   app.js [command]

   Commands:
   app.js add        Add a new note
   app.js remove     Remove a note
   app.js read       Read a note
   app.js list       List all the note
   app.js readall    Read all the note
   app.js removeall  Remove all the notes

   Options:
   --help     Show help                                                 [boolean]
   --version  Show version number                                       [boolean]
   ```

### Contact

Reckon Mazumdar
[LinkedIN](https://www.linkedin.com/in/reckon-mazumdar-49b8a7193/) [Github](https://github.com/Reckon77) [Gmail](mailto:reckonmazumdar12@gmail.com)
