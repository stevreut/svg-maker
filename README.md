# SVG Maker

## Description

A NodeJS application which creates a simple SVG graphic file based on input
from run-line dialog with the application user.

- Key features of the application are:
    ***TODO - must complete this!!***

## Table of Contents

- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

1. Install NodeJS if it is not already installed.
2. from the [svg-maker repository of GitHub](https://github.com/stevreut/svg-maker):
    - select the green "**<> Code**" button
    - select the "**Download ZIP**" button from the resulting pop-up dialog
3. Placed the resulting `svg-maker-main.zip` file in the location of your choice.
4. Unpack the `svg-maker-main.zip` file, which should resulting in a folder/directory with name `svg-maker-main`:
    - on Mac: double-click
    - on Windows: right-click and [follow these instructions](https://support.microsoft.com/en-us/windows/zip-and-unzip-files-f6dde0a7-0fec-8294-e1d3-703ed85e7ebc)
5. Using bash, Mac terminal, or equivalent utility:
    - `cd` to the resulting `svg-maker-main` directory
    - `npm install` (to install "jest" and "inquirer") 

## Usage

1. Using bash, Mac terminal, or equivalent utility: cd to the "svg-maker-main" directory
2. Once in the "svg-maker-main" directory, node index.js to run the application.
3. You will be prompted for each of the following:
    - *"What are your initials? (no more than 3)?"*
        - (Input will be automatically trimmed of excess spaces and shifted to upper case.)
    - *"What should be the color of the initials? (can be color name or color hex code)"*
    - *"Choose a shape for the background (Use arrow keys)"*
        - Note that a selection is made using the up-arrow or down-arrow keys and [enter]
    - *"Color of background shape (can be color name or color hex code)"*
4. Once all four questions have been answered, a file `logo.svg` will be produced in the same directory in which the application was run.  (Note that any pre-existing `logo.svg` file in the same directory will be overwritten.)

## Credits

Special thanks to the teaching staff of the University of Pennsylvania Full Stack Coding Boot Camp (UPENN-VIRT-FSF-FT-07-2023-U-LOLC-M-F).


- [MDN Web Docs](https://developer.mozilla.org/en-US/)

TODO - credit for (1) list of colors, (2) conversion-to-hex routine

## License

As of this date (21 August 2023), no licensing policy has been established for this project or its repository.
