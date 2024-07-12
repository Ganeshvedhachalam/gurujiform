Guruji Astro Form Application
## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Assumptions and Decisions](#assumptions-and-decisions)
- [Technology Stack](#technology-stack)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Next Steps](#next-steps)


## Overview
This project is a multi-step form application built using React and enhanced with Material-UI components for a better user experience.

### Features
- **Multi-step Form:** Guides the user through a series of steps to collect personal details and address information.
- **Local Storage:** Saves form data locally, allowing users to continue where they left off.
- **Snackbar Notifications:** Provides feedback to the user for successful form submissions and validation errors.
- **Responsive Design:** Ensures compatibility across various devices and screen sizes.

### Assumptions and Decisions
- **Form Validation:** Implemented basic validation for the phone number field using JavaScript without external libraries.
- **Styling:** Used Material-UI components and custom CSS for layout and styling to maintain a consistent look and feel.

### Technology Stack
- **React:** Built the application using React library for front-end development.
- **Material-UI:** Leveraged Material-UI components for UI elements and styling.
- **Local Storage API:** Utilized browser's local storage for persisting form data.
- **Snackbar:** Integrated with the Notistack library for displaying notifications.

### Setup Instructions

1. Clone the repository:
bash
Copy code
git clone <https://github.com/Ganeshvedhachalam/gurujiform.gitl>
cd guruji-astro-form

2. Install dependencies:
bash
Copy code
npm install

3. Run the application
bash
Copy code
npm start
Open http://localhost:3000 to view it in the browser.

### Project Structure
- **Components:** Structured the application into reusable components such as `Form`, `Step`, and `Snackbar` for better maintainability and code organization.
- **CSS:** Used custom CSS and Material-UI's styling solutions to style components and ensure a cohesive design.

### Next Steps
- Enhance form validation with more robust checks and error handling.
- Implement server-side validation and integrate with backend services.
- Explore additional Material-UI features for further UI enhancements.


Additional Notes
 Ensure you have an active internet connection during the initial setup to download necessary dependencies.
For development, you may adjust the form's styling and functionality as per your project requirements.
