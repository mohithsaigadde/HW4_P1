# Dynamic Multiplication Table

*A jQuery + Validation Project (HW4 – Part 1)*

This project generates a dynamic multiplication table based on user-defined integer ranges.
It includes full input validation, custom range checks, and error handling using the jQuery Validation plugin.

---

## Project Files

* **index.html** – main structure, form layout, input fields, and table container. 
* **script.js** – JavaScript logic for validation, custom rules, table generation, and reset operations. 
* **style.css** – styling for layout, cards, buttons, inputs, and responsive table design. 

---

## Features

### Dynamic Table Generation

* Automatically creates a multiplication table using horizontal (hStart–hEnd) and vertical (vStart–vEnd) ranges.

### Full Validation (jQuery Validation Plugin)

* Accepts integers only.
* Values must be between **–50 and 50**.
* Horizontal start must be ≤ horizontal end.
* Vertical start must be ≤ vertical end.
* Maximum of **10,000 cells** allowed.

### Custom Validator Rules

* `horizRange` – checks horizontal range ordering
* `vertRange` – checks vertical range ordering
* `maxCells` – prevents overly large tables

### Clean UI

* Responsive design
* Highlights invalid inputs
* Error messages appear under each field
* Reset button clears table and validation state

---

## How the Program Works

1. User enters values for:

   * hStart
   * hEnd
   * vStart
   * vEnd

2. Validation runs using jQuery Validation.

3. If all inputs are valid:

   * JavaScript generates a `<table>` dynamically.
   * Header row = horizontal values.
   * First column = vertical values.
   * Table cells = `x * y`.

4. Table is displayed inside `#tableShell`.

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* jQuery 3.7.1
* jQuery Validation 1.19.5

---

## How to Run the Project

### Method 1: Run Locally

1. Download the files:

   * index.html
   * script.js
   * style.css
2. Place them in the same folder.
3. Open **index.html** in your browser.

### Method 2: Visual Studio Code (Live Server)

1. Install the Live Server extension.
2. Right-click **index.html** → “Open with Live Server”.

---

## How to Use

1. Enter values between **–50 and 50** for all four fields.
2. Click **Generate Table** to create the multiplication table.
3. Click **Clear** to reset the form and remove the table.
4. Modify values and generate again as needed.

---

## Author Information

Name: Mohith Sai Gadde
Student ID: 02209215
Email:[MohithSai_Gadde@student.uml.edu]

# LINK:
## GitHub Repository: 
## GitHub Pages (Live Demo):