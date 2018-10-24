# Mobile Web Specialist Restaurant Reviews Project
---

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, the task was to incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, I took a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. I also add a service worker to begin the process of creating a seamless offline experience for your users.

## Target

The main target of this project is to take the provided broken code which was not even working on the desktop-size and fix it to work on mobile and tablet devices. Another target was to make use of service workers to make this app offline ready and add accesibility features to make it more accessible.

## Getting Started

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

* With your server running, visit the site: `http://localhost:8000`.
* Try reducing and increasing the window size of your browser to test the responsive design.
* Mobile-View: Right-Click and click on inspect to open google developer options and from there to the left of the elements tab and click on the phone icon to see the website in the mobile view.
* In this mobile view you can select the dropdown of devices to test on multiple devices.

## Accessibility
* For the screen reader users there is a functionality to skip the map section by pressing tab button on the home screen and the first focus is a button to skip directly to the restaurants.
* There is an alternate text provided with every image.
* The tab to focus on important headings is correctly ordered to flow in one direction.
* Service worker for offline use.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 

## ScreenShots
----------------------
### Home Screen
![Home Screen](/screenshots/screenOne.png)
### Restaurant Screen
![Restaurant Screen](/screenshots/screenTwo.png)
### Mobile View
![Mobile View](/screenshots/screenThree.png) 



