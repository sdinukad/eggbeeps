# Egg Hatch Tick Alarm for Pokemmo
Simple app to help keep track of egg ticks when hatching eggs in PokeMMO. Created with help of ChatGPT for personal use.

## Details
* It will emit a slight beep at 1 tick and a louder double beep when eggs are hatched.
* Settings page will allow you to select if you have donator status or flame body which will reduce the tick count to hatch.
* Continous mode will keep going after one set is hatched so you don't need to click start after each set.

>The countdown to next tick display may stop working when running on the browser and is left in the background for a while. However it is only a visual bug and you will still hear the egg beeps at the correct time for each tick.

## Live version [here](https://pkmneggticker.netlify.app/)

### Screenshots
![Mini Size](https://github.com/user-attachments/assets/bd2031d9-a350-40aa-851e-e1591a9a1988)
![Hatch Complete](https://github.com/user-attachments/assets/dde665f5-016c-487a-ac96-12115f5b4b31)
![Full Screen App](https://github.com/user-attachments/assets/510b7d80-402c-488e-bebb-ffe1a7560662)
![Settings Page](https://github.com/user-attachments/assets/3cf4c942-5822-457c-9e63-619011295ae2)


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
