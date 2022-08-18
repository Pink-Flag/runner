# An endless runner game
 by Kristina Petrova and Matthew Johnson

[You can see live upto date verion at -> https://climaterunner.netlify.app/](https://climaterunner.netlify.app/)
 

The idea behind this game is that the sea level rises unless you continue to collect the plastic bottles. When these are deposited in the bin the sea level drops depending on how many bottles you have collected. All game assets are open source or created by ourselves.<br>
 The game features a day and night cycle with different assets for each.  The random rain and sparks effect when the character hits the bin are created by using vectors. We implemented gravity on the character and gravity and random wind conditions on the rain so it looks more natural. The animations for the explosion and the splash are created by using royalty-free spritesheets and we have also added velocity to the background in order to achive a parallax scrolling effect. All of the elements in the game are randomised. All the platforms, bottles, bins, and clouds are dynamically generated within the game - no two plays are the same!

We also check for the type of device running the game and u display different  settings depending on the result.


## Tools used
- ImageMagic - to automate the creation of different length platforms and water sprites
- Local Tunnel -  to generate a tunnel and test the game on different browsers and devices
- GIMP - for image editing and creating the assets we needed 
- Google Chrome DevTools 
- Apple Logic - to create and edit some of the sounds

## Mobile Version
 The game is also available on mobile, but after testing on various devices, we encounterd some performance issues on some of them. <br>
  In order to improve performance we have:
  
  - Disabled Friendly Error System
  - Minimized Seraching by storing references of the elements in setup
  - Resized images 
  - Optimised loops for maximum performance 
  - Refactored code

We will be returning to work further on the mobile optimisation in near future.

## Further Features
We plan on adding more features to the game including: <br>
 
 - Original music (music that dynamically responds to the gameplay)
 - Original graphics
 - Scoreboard
 - Backend database to store  data for scoreboard functionality
 - Bottles will be rendered in predefined shapes so they bridge between platforms



