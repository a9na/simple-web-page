# Simple Web Page Project

Welcome to my Simple Web Page project! This interactive website features a fractal tree animation, theme switching functionality, and dynamic loading of header and footer components. Built with HTML, SCSS, and JavaScript, this project demonstrates modular design and modern web practices.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)

## Project Overview

This project includes:

- **Interactive Button**: Triggers a message display on click.
- **Fractal Tree Animation**: Rendered on an HTML5 `<canvas>`.
- **Theme Switching**: Toggle between light and dark modes with sun and moon icons.
- **Dynamic Components**: Header and footer are loaded from external HTML files.

## Features

- **Theme Switcher**: Toggle between light and dark modes. The state is saved using `localStorage`.
- **Interactive Button**: Displays a message when clicked.
- **Fractal Tree Animation**: Drawn using the HTML5 `<canvas>` element.
- **Modular HTML**: Header and footer are dynamically loaded for modularity.

## Technologies Used

- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) **HTML5**: Markup language for webpage structure.
- ![SCSS](https://img.shields.io/badge/SCSS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) **SCSS**: CSS preprocessor for modular and maintainable styles.
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) **JavaScript**: Adds interactivity and animations.
- **Canvas API**: For drawing the fractal tree animation.
- **Iconify**: Icon library for theme-related icons (sun and moon).

## File Structure

The project is organized into the following structure:

```
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
```

## Setup Instructions

### Prerequisites

- A web browser (Google Chrome, Firefox, etc.).
- (Optional) Node.js and npm for dependency management or local server.
- (Optional) A local server such as `http-server` or `live-server`.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/a9na/my-web-page.git
    cd my-web-page
    ```

2. Install dependencies (if using npm):

    ```bash
    npm install
    ```

3. (Optional) Run a local server:

    ```bash
    npx live-server
    ```

4. Open `index.html` in your browser to view the webpage.

### Compiling SCSS

To compile SCSS to CSS:

1. Install Sass globally (if not already installed):

    ```bash
    npm install -g sass
    ```

2. Compile SCSS to CSS:

    ```bash
    sass src/scss/styles.scss src/css/styles.css
    ```

## Usage

### Navigating the Website

- **Home Page (index.html)**: Displays a welcome message, interactive button, and fractal tree canvas.
- **About Page (about.html)**: Basic about page.
- **Contact Page (contact.html)**: Basic contact page with placeholder information.

### Switching Themes

Click the theme switcher button in the header to toggle between light and dark modes. The current theme is saved using `localStorage`.

### Fractal Tree Animation

The fractal tree is drawn on a `<canvas>` element and can be customized or expanded by modifying `tree.js`.
