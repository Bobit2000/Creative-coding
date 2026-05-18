# Experiment 1 - A playful control panel, where pressing buttons or interacting with the screen produces interesting effects. #

[Play cookie clicker](ex1_cookieClicker/index.html)

## Overview ##
For the first experiment, i decided i would recreate the game cookie clicker, primarily because it satisfied the prompt, being a series of buttons which produce an effect, but also because it gave me a reason to play cookie clicker in class, so that after collecting a reasonable amount of knowledge about how the game works (and also 83 sexdecillion cookies) i would have a good idea of where to start.

## the cookie ##
![image of the cookie](image.png)
It all started with a cookie.

The cookie can be clicked to increase the players score by 1 each click. The player can then spend their score on one of two upgrades:
- increase cookies per second, which is the amount of cookies the player gets every second while idling.
- upgrade the mouse, which means that each click will give you more cookies.

The upgrades were made scalable to fit with the stage the player is in.

## the oreo ## 
![image of the oreo](image-1.png)

The oreo is the main update the game went through, it generates in a random position on the screen every minute, growing for 5 seconds, then idling for 5 seconds, then shrinking for 5 seconds until it disappears. Clicking the oreo while it is on screen gives the user the ability to gain strong power ups to give them a huge boost for a period of time.

These power ups are:
- 7x boost to cookies per second for 1 minute.
- 77x boost to mouse level for 7 seconds.
- doubles your banked score.

# critical reflection #
The thing with cookie clicker, is it's a far more complex game than you could possibly anticipate, with magic spells and temples and a stock market. I could have spent hours making it more and more engaging. But i'm glad i stopped where i did, because its a game about sitting there and clicking a png.

I started this project as i first started learning javascript, meaning its a bit of a mess, which is evident in the long list of variables i made. I have since learned about the use of classes, which i would have implimented to make the code more robust and conventional.