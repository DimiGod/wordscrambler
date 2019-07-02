# JavaScript Assignment

### Overview

In this assignment, you'll create one of two possible computer games: Word Guess or Psychic. These apps will run in the browser, and feature dynamically updated HTML and CSS powered by your JavaScript code.

### Commits

Having an active and healthy commit history on GitHub is important for your future job search. It is also extremely important for making sure your work is saved in your repository. If something breaks, committing often ensures you are able to go back to a working version of your code.

* Committing often is a signal to employers that you are actively working on your code and learning.

  * We use the mantra “commit early and often.”  This means that when you write code that works, add it and commit it!

  * Numerous commits allow you to see how your app is progressing and give you a point to revert to if anything goes wrong.

* Be clear and descriptive in your commit messaging.

  * When writing a commit message, avoid vague messages like "fixed." Be descriptive so that you and anyone else looking at your repository knows what happened with each commit.

* We would like you to have well over 200 commits by graduation, so commit early and often!

### Submission on BCS

* Please submit both the deployed Github.io Project link to your homework AND the link to the Github Repository!

### Before You Begin

1. Create a new GitHub repo called `Word Guess Game` or `Psychic-Game`, in accordance with the assignment you choose to complete. Then, clone it to your computer.

2. Inside your local git repository, create an `index.html`.

3. While still in your local git repo, create a directory called `assets`.
4. `cd` your way into the `assets` folder, then make three additional folders: `javascript`, `css` and `images`.

   * In the `javascript` folder, make a file called `game.js`. Link it with the script element in the header with a source attribute: <script src="assets/javascript/game.js"></script>
   * In the `css` folder, make a file called `reset.css`. Paste into it the code from the Meyerweb reset stylesheet. If you opt to use Bootstrap instead of writing your own CSS, skip this step, and simply include a link to Bootstrap via CDN.
   * In the `css` folder, also make a file called `style.css`.
   * In the `images` folder, save whatever images you plan on using.

```
├── assets
|  ├── css
|  |  └── style.css
|  ├── images
|  └── javascript
|     └── game.js
└── index.html
```

5. Push the above changes to GitHub.

6. Choose whichever game you'd like to build. Making the Psychic game will prove less challenging than coding Word Guess. However, as the challenge of the Word Guess exercise provides a more comprehensive review of this unit's material, we recommend attempting that assignment.

7. Note: There's no shame if you'd prefer submitting Psychic—it's still a proper challenge.

8. Push your selected game to Github Pages.


## Option One: Psychic Game (Basic)

![Psychic](Images/1-Psychic.jpg)

1. [Watch the demo](https://youtu.be/qTc45Lox97g).

2. You're going to make a "guess the letter" game using a procedural programming style. Your program will randomly picks a letter from an array of lowercase letters, and the user has to guess which letter the program chose. Put the following HTML on your page:

   * Guess what letter I'm thinking of:

   * Guesses Left: (add a <span> with an id so you can update it in your program)

   * Your Guesses So Far: (the specific letters that the user typed. add a <span> with an id so you can show the user which letters they guessed - displayed like `l z y h`)

3. Create a function clean() to clean the user's input by receiving the input in a parameter, getting just the first letter of the user's string, and converting it to lowercase. Return the single lowercase letter.

4. Write a loop that contains the code for the game:

   * Use `prompt` to ask the user for a letter. 

   *  Call your clean() function to get the guessed lowercase letter, which you can display with all their previous guesses - displayed like `l z y h`. (Hint - you need to add the new letter to the current value of the span's innerHTML.)

   * If they guessed correctly, use `alert` to tell them they won. Update a variable to indicate the game is over.

   * If they didn't guess correctly, reduce their number of guesses by 1 and show them the new number of guesses left.

   * If they didn't guess correctly, also check if they have run out of guesses, and if they did, use `alert` to tell them they lost. Update a variable to indicate the game is over.

   * The game should loop back and continue until the game is over.

5. BONUS - add another wrapper loop and more code so when the game ends, all the variables are reset and the user can play again. Display the number of wins and losses in the browser.

## Option Two: Word Guess Game (Recommended)

1. [Watch the demo](https://youtu.be/W-IJcC4tYFI).

2. Create a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s CSS aesthetic. You can choose any subject for your theme, though, so be creative!

3. The word guess game is similar to the letter guessing game, except you will program it in an object-oriented style. That means instead of looping for user prompts, you will write a message handler for the keypress event. That will get called every time a letter is guessed. All your game code can go inside the message handler, but any functions you write should be placed outside the handler. Also, do the following:

   * Show the instructions in the HTML: press any key to guess a letter!

   * Instead of randomly choosing a letter from an array of letters, your code will randomly choose a word from an array of words.

   * Display underscores for each letter in the selected word. If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

   * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

   *. After the user wins/loses the game should automatically call a function to reset the game and give the user another word to guess.

##### Word Guess Game Bonuses

1. Write some stylish CSS rules to make a design that fits your game's theme.

2. Play a sound or song when the user guesses their word correctly, like in our demo.

3. **HARD MODE:** Think you understand how to use objects in JavaScript? Organize your game code as an object - including the game properties, game functions as methods, and key event listeners.

- - -

#### A Few Tips

1. **IMPORTANT:** Whichever assignment you choose, code your game one piece at a time! Code all of your apps one piece at a time. _Always code one piece at a time!_

2. Pseudocode your program and break the app down into tiny, manageable fragments. This will make the coding process much less frustrating and a veritable Mach number faster. Otherwise, you'll be chipping away at a giant chunk of abstraction for way too many hours.

   * The ability to solve a large problem by treating it as a set of smaller ones is the hallmark of a strong programmer. Best start adapting this into your development routine now, to better prepare for your more complex future projects.
   * Remember:
     1. Split the whole program into many distinct, pseudocoded problems.
     2. Focus on one of the smaller problems and solve it.
     3. Only when you solve one problem should you then move onto your next problem.

3. When you encounter bugs (and we all do), `console.log` will become your best friend. Regularly check your console to make sure your app is spitting out the right values.

   * As a more advanced—but more powerful—alternative, feel free to experiment with the [Chrome DevTools Debugger](https://developers.google.com/web/tools/chrome-devtools/).

4. Try your best to deliver a 'working/playable game' by the end of the deadline.  Contact your TA/Instructor if you're not making progress after 2 hours. We're here to help!

5. Substance over style! Submitting a working game matters more that making a broken app that at least looks pretty. We're focusing on game mechanics, not just on the look and feel of your app.

6. That said, coding a functional app that also looks pretty would be impressive.

7. Always commit your work and back it up with GitHub pushes. You don't want to lose hours of your work because you didn't push it to GitHub every half hour or so.

   * **Commit often**.

8. Turn in anything you have! Even if you don't finish, we still want to see what you were able to accomplish in the time we gave you. This will help us know what concepts we could help you with, as well as what topics we should focus on in the coming lectures.

### Reminder: Submission on BCS

* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

- - -

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

- - -

### One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!**
