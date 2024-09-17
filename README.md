Simple Web Page Project
Welcome to my Simple Web Page project! This is a simple, interactive website that includes a fractal tree animation, theme switching functionality, and dynamic loading of header and footer components. The project is built with HTML, SCSS, and JavaScript.

Table of Contents

Project Overview
Features
Technologies Used
File Structure
Setup Instructions
Usage


Project Overview

This project is a simple webpage that demonstrates the following:

A button interaction that triggers a message display.
A fractal tree animation drawn on an HTML5 <canvas>.
Theme switching functionality (light/dark mode) with icons for a sun and moon.
Dynamically loaded header and footer HTML components using JavaScript.
The project is built using a modular folder structure to organize HTML, CSS, SCSS, and JavaScript files.


Features

Theme Switcher: Users can toggle between light and dark modes. The state is persisted using localStorage.
Interactive Button: A button that displays a message when clicked.
Fractal Tree Animation: A fractal tree is drawn using the HTML5 <canvas> element.
Modular HTML: The header and footer are dynamically loaded from external HTML files to maintain modularity.


Technologies Used

HTML5: Markup language used to structure the webpage.
SCSS (Sassy CSS): Preprocessor to write modular and maintainable CSS.
JavaScript (ES6): Core scripting language for adding interactivity and animations.
Canvas API: Used for drawing the fractal tree animation.
Iconify: Icon library used for theme-related icons (sun and moon).


File Structure

The project is organized into the following structure:

/project-root
    /src
        /assets
            /images
                ana-profile.jpg
            /icons
                favicon.ico
        /css
            /partials
                _header.scss
                _footer.scss
                _variables.scss
                _mixins.scss
            styles.scss
            styles.css
            styles.css.map
        /js
            button.js
            tree.js
            update-icons.js
        /html
            header.html
            footer.html
            about.html
            contact.html
    index.html
    README.md
    package.json
    package-lock.json


Setup Instructions

Prerequisites

To run this project, you need the following installed:

A web browser (Google Chrome, Firefox, etc.).
(Optional) Node.js and npm (if using npm for dependency management or running a local server).
(Optional) A local server such as http-server or live-server.


Installation

Clone the repository:

git clone https://github.com/a9na/my-web-page.git
cd my-web-page

Install dependencies (if using npm):

npm install

(Optional) Run a local server:

npx live-server

Open index.html in your browser to view the webpage.

Compiling SCSS

If you make changes to the SCSS, you'll need to compile it into CSS. You can do this using the sass command or by using npm scripts if you have node-sass set up.

Install Sass globally (if you haven't already):

npm install -g sass

Compile the SCSS to CSS:

sass src/scss/styles.scss src/css/styles.css

Usage

Navigating the Website

Home Page (index.html): The homepage displays a welcome message, an interactive button, and a fractal tree canvas.
About Page (about.html): A basic about page.
Contact Page (contact.html): A basic contact page with placeholder information.

Switching Themes
Click the theme switcher button in the header to toggle between light and dark modes. The current theme is saved using localStorage so that it persists across sessions.

Fractal Tree Animation
The fractal tree is drawn on a <canvas> element. This can be customized or expanded by modifying tree.js.

