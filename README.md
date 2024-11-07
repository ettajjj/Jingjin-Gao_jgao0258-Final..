# Jingjin-Gao_jgao0258-Final..


## Project Overview

This project uses the p5.js library, combined with course content and additional resources, to create animations of an apple tree growing and a rain effect. Users can control the animations with interactive buttons, and the responsive canvas feature ensures a flexible and immersive experience.

--- 

## Interaction Guide

- **Start Growth Animation**: Click the “Start Growth” button to start the tree growth animation, where the tree structure gradually enlarges.
- **Rain Animation**: Click the “Start Rain” button to start the rain effect, and click the “Pause Rain” button to pause the raindrops. Raindrops fall from the top and disappear at the bottom.
- **Resize**: Adjusting the browser window size will automatically scale the canvas and content to fit the screen dimensions.

---

## Animation Driving Mechanism and Differentiation

In my design, I selected a **Time-Based** approach as the primary method to drive animations, using time to control both the tree growth and raindrop movement to complete the final project. The time factor allows the tree growth animation to expand smoothly, while the raindrops fall at a fixed speed, creating the visual effect of continuous rainfall.

In my project, I focused on adjusting the **scale** of animations rather than changing colors, setting my work apart from my teammates’ projects. The gradual growth animation of the tree structure simulates a natural expansion process, offering users an immersive experience. Additionally, I incorporated dynamic raindrop effects to create the vivid impression of standing under a tree in the rain, adding depth to the animation.

---

## Image Properties and Animation Details

- **Growth Animation**: Each time the `startGrowth` function is called, the `shrinkFactor` variable gradually increases, allowing the tree elements to grow from a smaller scale to their full size, simulating natural growth.
- **Raindrop Animation**: Raindrops are generated periodically and move downwards using the `move` function. Once they reach the bottom of the screen, they are removed from the array to keep the visuals clear.
- **Adjustable Scale Factor**: The `scaleFactor` dynamically adjusts based on the window size, ensuring the canvas and graphics display at an appropriate scale across various screen sizes.
- **Overall Scaling of the Apple Tree**: Using `offsetX` and `offsetY` functions to set offsets ensures that the apple tree remains centered on the canvas regardless of scaling.

---

## Modifications and Iterations

1. **Background and Visual Enhancements**  
   A light background was set to improve contrast, making the animation stand out more effectively. The colors, transparency, and positioning of the circles and lines were adjusted to create a more natural and cohesive visual appearance.

   **Before-and-after map**
![an image of 1](/ReadImage/1.png)
![an image of 2](/ReadImage/2.png)


2. **Scaling and Centering Adjustments**  
   During scaling, the apple tree did not consistently remain centered on the screen, and the scaling factor caused distortion and misalignment on different window sizes. To address this, a `scaleFactor` function was added, along with adjustments to `offsetX` and `offsetY`, to ensure the tree remains centered as it scales. This allows the apple tree to maintain proper proportions and positioning even when the window size changes.

![an image of 3](/ReadImage/3.png)
![an image of 4](/ReadImage/4.png)
![an image of 5](/ReadImage/5.png)


3. **Preventing Multiple Animations**  
   To prevent multiple growth animations from being triggered if the “Start Growth” button is clicked multiple times—causing the animation speed to increase and clutter the visuals—a check function was added. This ensures that only one growth animation is running at a time, avoiding interference from overlapping animations.

   ---

## Inspiration and Technical Overview

The project is inspired by the natural beauty of tree growth and rainfall, combining static shapes (like circles and lines) with animation effects to bring dynamic life to the composition.  
- **Implementation**: `setInterval` controls timing, animating the growth through element scaling, while raindrops fall by updating their y-position within `drawElements`.

---

## Additional Tools and Methods

This project utilizes the p5.js library and content provided in class. Additionally, to enhance the project and improve its visual quality, I referenced external video tutorials. These tutorials covered topics such as overall tree scaling, raindrop creation, and animation techniques, allowing me to expand and refine the project’s features.

--- 

## Resources

- [Growth Animation Tutorial](https://youtu.be/lMJmtlp6Yus)
- [Rain Effect Tutorial](https://www.youtube.com/watch?v=KkyIDI6rQJI)
- [setInterval Function Documentation](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)



