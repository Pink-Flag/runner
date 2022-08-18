# An endless runner game

by Kristina Petrova and Matthew Johnson

[You can see live upto date version at -> https://climaterunner.netlify.app/](https://climaterunner.netlify.app/)

This is an endless runner where the player must collect plastic bottles to slow the rising sea levels. When the bottles are deposited in the bin the sea drops depending on the number of bottles you have collected. All game assets are open source or created by ourselves.<br>
The game features a day and night cycle with different assets for each. The random rain and sparks effect when the character hits the bin are created by using vectors. We implemented gravity on the character, and gravity and random wind conditions on the rain so it looks more natural. The animations for the explosion and the splash are created by using royalty-free spritesheets and we have added velocity to the background in order to achive a parallax scrolling effect. All of the elements in the game are randomised, and all the platforms, bottles, bins, and clouds are dynamically generated within the game - no two plays are the same!

We check for the type of device running the game and display different screen settings depending on the result.

## Tools used

- P5.js - a JavaScript libary for creative coding
- ImageMagic - to automate the creation of different length platforms and water sprites
- Local Tunnel - to generate a tunnel and test the game on different browsers and devices
- GIMP - for image editing and creating the assets we needed
- Google Chrome DevTools
- Apple Logic - to create and edit some of the sounds

## Mobile Version

The game is also available on mobile, but is not yet fully optomised for all devices. <br>
In order to improve performance we have:

- Disabled Friendly Error System
- Minimized Seraching by storing references of the elements in setup
- Resized images
- Optimised loops for maximum performance
- Refactored code

We will be returning to work further on the mobile optimisation in the near future.

## Further Features

We plan on adding more features to the game including: <br>

- Original music that dynamically responds to the gameplay
- Completely original artwork
- Scoreboard
- Backend database to store data for scoreboard functionality
- Bottles will be rendered in predefined shapes so they bridge between platforms
