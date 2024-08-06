# Egg Hatch Tick Alarm for Pokemmo
Simple app to help keep track of egg ticks when hatching eggs in PokeMMO.

## Details
* It will emit a slight beep at 1 tick and a louder double beep when eggs are hatched.
* Settings page will allow you to select if you have donator status or flame body which will reduce the tick count to hatch.
* Continous mode will keep going after one set is hatched so you don't need to click start after each set.

>If the next tick countdown gets bugged, you will need to reload the page. However it is only visual and you will still hear the egg beeps. (Possibly fixed already more testing needed)

## Live version [here](https://pkmneggticker.netlify.app/)

#### Read further if you want to package the app and run as a standalone app locally

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (which includes npm)
- [Git](https://git-scm.com/)

### Getting Started

1. **Download the Project:**

    - Open your terminal or command prompt.
    - Type the following command to download the project to your computer:

    ```sh
    git clone https://github.com/sdinukad/eggbeeps.git
    cd eggbeeps
    ```

2. **Install Necessary Files:**

    - This step installs all the necessary packages for the application to work. Simply type the following command:

    ```sh
    npm install
    ```

3. **Run the Application:**

    - Now, you can start the application by typing:

    ```sh
    npm start
    ```

## Packaging the Application

To create a standalone application, you can package it for macOS or Windows.

#### For macOS Users

1. **Install Electron Packager:**

    - First, you need to install a tool to help package the application. Type:

    ```sh
    npm install electron-packager --save-dev
    ```

2. **Package the Application:**

    - To package the application for macOS, type:

    ```sh
    npx electron-packager . eggbeeps --platform=darwin --arch=x64 --out=dist --icon=icon.icns
    ```

    - This will create a packaged application for macOS in the `dist` folder.

#### For Windows Users

1. **Install Electron Packager:**

    - First, you need to install a tool to help package the application. Type:

    ```sh
    npm install electron-packager --save-dev
    ```

2. **Package the Application:**

    - To package the application for Windows, type:

    ```sh
    npx electron-packager . eggbeeps --platform=win32 --arch=x64 --out=dist --icon=icon.ico
    ```

    - This will create a packaged application for Windows in the `dist` folder.

Might be a bit slow to launch first time