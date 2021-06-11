
<h1 align="center">Team Builder</h1>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Safe](https://img.shields.io/badge/Stay-Safe-red?logo=data:image/svg%2bxml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEwIDUxMCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTAgNTEwIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxnPjxwYXRoIGQ9Im0xNzQuNjEgMzAwYy0yMC41OCAwLTQwLjU2IDYuOTUtNTYuNjkgMTkuNzJsLTExMC4wOSA4NS43OTd2MTA0LjQ4M2g1My41MjlsNzYuNDcxLTY1aDEyNi44MnYtMTQ1eiIgZmlsbD0iI2ZmZGRjZSIvPjwvZz48cGF0aCBkPSJtNTAyLjE3IDI4NC43MmMwIDguOTUtMy42IDE3Ljg5LTEwLjc4IDI0LjQ2bC0xNDguNTYgMTM1LjgyaC03OC4xOHYtODVoNjguMThsMTE0LjM0LTEwMC4yMWMxMi44Mi0xMS4yMyAzMi4wNi0xMC45MiA0NC41LjczIDcgNi41NSAxMC41IDE1LjM4IDEwLjUgMjQuMnoiIGZpbGw9IiNmZmNjYmQiLz48cGF0aCBkPSJtMzMyLjgzIDM0OS42M3YxMC4zN2gtNjguMTh2LTYwaDE4LjU1YzI3LjQxIDAgNDkuNjMgMjIuMjIgNDkuNjMgNDkuNjN6IiBmaWxsPSIjZmZjY2JkIi8+PHBhdGggZD0ibTM5OS44IDc3LjN2OC4wMWMwIDIwLjY1LTguMDQgNDAuMDctMjIuNjQgNTQuNjdsLTExMi41MSAxMTIuNTF2LTIyNi42NmwzLjE4LTMuMTljMTQuNi0xNC42IDM0LjAyLTIyLjY0IDU0LjY3LTIyLjY0IDQyLjYyIDAgNzcuMyAzNC42OCA3Ny4zIDc3LjN6IiBmaWxsPSIjZDAwMDUwIi8+PHBhdGggZD0ibTI2NC42NSAyNS44M3YyMjYuNjZsLTExMi41MS0xMTIuNTFjLTE0LjYtMTQuNi0yMi42NC0zNC4wMi0yMi42NC01NC42N3YtOC4wMWMwLTQyLjYyIDM0LjY4LTc3LjMgNzcuMy03Ny4zIDIwLjY1IDAgNDAuMDYgOC4wNCA1NC42NiAyMi42NHoiIGZpbGw9IiNmZjRhNGEiLz48cGF0aCBkPSJtMjEyLjgzIDM2MC4xMnYzMGg1MS44MnYtMzB6IiBmaWxsPSIjZmZjY2JkIi8+PHBhdGggZD0ibTI2NC42NSAzNjAuMTJ2MzBoMzYuMTRsMzIuMDQtMzB6IiBmaWxsPSIjZmZiZGE5Ii8+PC9nPjwvc3ZnPg==)](https://www.cdc.gov/coronavirus/2019-ncov/)

This command line application builds a team roster page based on user inputs. Running the application prompts the user for information about first, the team manager and then, the team members. The user inputs any number of team members, which can be a mix of engineers and interns. When all team members have been input, the application will create a HTML file that displays a nicely formatted team roster based on the information provided by the user.

---

## Table of Contents
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)
- [Credits](#credits)

---

## Demo

### Sample Usage
<img src="https://i.imgur.com/fx8ZFVI.gif" align="center" alt="Screenshot of Application Usage">

### Sample Output 
<img src="https://i.imgur.com/YyvBVIt.png" align="center" alt="Screenshot of Application Output">
<a href="https://diaseu.github.io/teamBuilder/">Link to Deployed Sample Output of Application</a>


## Installation

Run  `npm install` to install all dependencies. 


## Usage

Run `app.js` in command line with >`node app.js` to start the application.
Enter the manager information and hit `enter`. 
Select a type of team member to add (Engineer or Intern). 
Enter the employee information as prompted. 
Select the Done option when finished inputting all team members. 
This will generate a `index.html` file that will have the team roster.

## Tests

Run `npm run test` to run test

Test Result: 
<img src="https://i.imgur.com/15wmAo1.png" alt="Test Result">

## Credits

<a href="https://getbootstrap.com/">Bootstrap</a> CSS Framework, <a href="https://nodejs.org/en/">Node.js</a>, <a href="https://www.npmjs.com/package/inquirer">Inquirer</a> npm and <a href="https://jestjs.io/">Jest.js</a> for testing
