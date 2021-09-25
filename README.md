# Cam Moodle Auto Login

<p align="center">
  <a href="https://jojo.fandom.com/wiki/King_Crimson">
  <img src="./public/icon128.png" />
  </a>
</p>

# Aim

Many Cambridge students find it annoying that Moodle session timeouts (logging you out) way too quickly. This simple extension aims to eradicate this daily annoyance by automatically logging you back into Moodle through Raven.

This chrome extension helps you to save a few seconds.

# Demo

![demo gid](img/demo.gif)

From this demo, you can see that it will automatically select "Login in By Raven", enter you details into the Raven Login, then click Login.

# Set Up

Firstly install the extension. Then click the extension symbol.

You should see something like this

<p align="center">
  <img src="./img/enter_details.PNG" width="60%"/>
</p>

Click the "Set Login Details" button. This should open up a drawer where you can enter your login details and set them. Your login details will be encrypted and stored in the extensions local storage.

After that you are ready to go, and it should work as expected.

## Removing Data

After you are all set up, the popup for the extension should look something like this

<p align="center">
  <img src="./img/remove_data.PNG" width="60%"/>
</p>

Clicking the "Remove Stored Data" should allow you to remove all of the data store in `chrome.storage.local`
