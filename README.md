# Welcome to Oramatismós!

**Oramatismós** is a Greek word which means **visualization**. This app is called **Oramatismós** because it is used to visualise classic sorting algorithmes.

## Description
This is a progressive web app built with React. This app is used for visualizing different algorithms. The description of these algorithms is explained in the app. In addition to this, their time complexity in different cases (Best, Average & Worst) and space complexity is also given.
## Developers

 - Saqib Rasheed
 - Kainat Fatima

## Algorithms
It visualises following algorithms:

 1. Bubble Sort
 2. Selection Sort
 3. Insertion Sort
 4. Merge Sort
 5. Quick Sort
 6. Quick Sort 3
 7. Heap Sort
 8. Shell Sort

## Purpose

This app is our ESP (End Semester Project) of the course CS250 - Data Structures & Algorithms. Purpose of this app is to learn and improve web development & DSA skills.

## Target Audience

The basic audience of our project are those students who are trying to learn different algorithms and their functioning.

## Demo
This app is deployed using **netlify** (free). You can visit this app [**here**](https://oramatismos.netlify.app/).

These images show this app on different devices.
#### Desktop
![enter image description here](https://1.bp.blogspot.com/-MlL-xYSOm_4/X_8ys7SK9DI/AAAAAAAAAx0/ptp-fmFetQMdqPZZzIm5dUwjVAW5wLqlQCLcBGAsYHQ/s320/oramatismos.netlify.app+%25280%2529.jpg)
#### Tablet
![enter image description here](https://1.bp.blogspot.com/--CcmmPuAeK0/X_8ysx1ie7I/AAAAAAAAAx4/i_sEhHq6N_A--fiypvQa-pw80-nyFVp3wCLcBGAsYHQ/s320/oramatismos.netlify.app+%25281%2529.jpg)
#### Mobile
![enter image description here](https://1.bp.blogspot.com/-w7N1uTSPVdA/X_8ys3opLOI/AAAAAAAAAxw/jaSWq5IFGRcX7OWapa7ZeX7m95x6viHbwCLcBGAsYHQ/s320/oramatismos.netlify.app+%25282%2529.jpg)

## Installation

If you want to use this app, clone this repository:
```
$ git clone https://github.com/rasheedsaqib/Oramatismos.git
$ cd oramatismos
$ npm i
```
## App Structure
The `src` folder contains following 4 folders:

 - `algorithms` - This folder contains files for all the different algorithms. File of each algorithm contains its function. Files import helper functions like **swap** & **createRange** from `helper.js` file. Files import functions to track data like **newTrackingData**, **addToTrackingData** & **lastSorted** from `trackingData.js`.
 - `assets`  - This folder containers **.svg** files of different icons.
 - `components` - This folder contains state-less components of the app.
 
	- `Header` - This folder contains files of header like **header.js**. It has further components for **Algorithm Selection** and **Array Size Selection**.
	- `Middle` - This folder contains middle part of the app. It includes **Bars**, **Controls**, **Process Colors** & **Description**.
	- `Footer` - This folder contains `footer.js` which styles footer of the app.
	- `UI` - This folder contains Ui elements like **Backdrop**.
- `container` - This folder contains stateful components. Following are 2 main stateful components:

	- `Main` - This component is the base of the app. It manages state for app drawer, algorithm selection and array size selection. 
	- `Content` - This is second component which manages state of visualization e.g play, pause, steps, tracking data and speed.

## License
This app is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).