# Simple React Projects

## About

This repository contains a collection of beginner-friendly React projects that help make learning React an enjoyable and practical experience. Each project focuses on common tasks and components often seen in real-world applications and company interviews. These projects can serve as useful references, especially for those preparing for interviews or looking to strengthen their React skills. We encourage you to explore, modify, and contribute to this repository. Your ideas and improvements can benefit the whole community and inspire others!

**Deployed Link:** [Click here to view the project](https://react-tasks-keh6.onrender.com/)

![react-logo](https://creativebits.org/wp-content/uploads/2023/07/8mx2wdq04h271.png)

## Tech Stack

This repository uses the following technologies and tools:
- **React (Vite):** Fast, modern frontend build tool for optimized React applications.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **React-Router-DOM:** Library for managing routes and navigation within React applications.
- **React-Icons:** Popular collection of SVG icons for easy integration into React projects.


## Folder Structure

Here's a look at the general folder structure of the project. This organization promotes modularity and reusability:

```
project-root
├── src
│   ├── assets                    # Image and other media files
│   ├── Components                # Contains all tasks inside 
│   │   ├── Password_Generator    # Password generator task files
│   │   ├── To-Do_List            # To-do list task files
│   │   ├── TicTacToe             # Tic Tac Toe task files
│   │   ├── Comment_Section       # Comment section task files
│   │   ├── Shooting_Guns         # Shooting guns task files
│   │   ├── Diwali_Gifts          # Diwali gifts task files
│   │   ├── Fetch_Posts           # Fetch posts task files
│   │   ├── Diwali_Lights         # Diwali lights task files
│   │   └── Home                  # Contains main components for 
│   ├── Pages                     # Contains Welcome Page and all 
│   ├── Utils                     # Contains Theme functionality, 
│   ├── App.js                    # Main app component
│   ├── index.css                 # Global styles
│   └── main.js                   # Entry point for the application
├── package.json                  # Project dependencies and scripts
├── tailwind.config.js            # Tailwind CSS configuration
└── README.md                     # Project documentation
```

## Installation and Setup

To set up the projects locally and start exploring, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sanketkedare/simple-react-projects.git
   ```
2. **Navigate to the Project Directory**
   ```bash
   cd simple-react-projects
   ```
3. **Install Dependencies**
   Use npm to install the required packages:
   ```bash
   npm install
   ```
4. **Start the Development Server**
   Run the app locally:
   ```bash
   npm run dev
   ```
   Your app should be available at `http://localhost:5173`.

5. **Build for Production** (Optional)
   If you’d like to create a production build of the project:
   ```bash
   npm run build
   ```



## Project Showcase

This repository includes a collection of projects showcasing various aspects of React development. Each project demonstrates unique functionalities, UI designs, and interactive elements to enhance user experience. Explore the descriptions, features, and paths to learn more.

---

### 1. Password Generator
- **Path:** `password-generator`
- **Description:** Developed with React, Vite, and Tailwind CSS, this tool creates tailored passwords of varied lengths and complexities. Users can select letters-only, letters with numbers, letters with symbols, or a mix of all, ensuring strong, unique passwords for added security.
- **Features:**
  - Dynamic length selection
  - Options for letters, numbers, and symbols
  - Copy to clipboard functionality

---

### 2. To-Do List
- **Path:** `todo-list`
- **Description:** A clean, efficient app for daily task management, built with React and Vite for optimized performance. It enables users to add, edit, or delete tasks, using a component-based design for seamless organization and workflow.
- **Features:**
  - Add, edit, and delete tasks
  - Component-based structure
  - User-friendly interface

---

### 3. Comment Section
- **Path:** `comment-section`
- **Description:** An interactive space for users to exchange opinions and discuss topics. This app enables posting comments, replying to others, and engaging in constructive dialogue on shared interests or tech insights.
- **Features:**
  - Post comments and replies
  - Engage in threaded discussions
  - Upvote and downvote options

---

### 4. Shooting Guns
- **Path:** `shooting-guns`
- **Description:** This project illustrates debouncing and throttling concepts through three unique gun models, each with its own firing mechanism. It visually demonstrates these essential programming techniques with engaging functionality.
- **Features:**
  - Interactive gun firing mechanics
  - Visual demonstration of debouncing and throttling
  - Engaging animations

---

### 5. Diwali Gifts
- **Path:** `diwali-gifts`
- **Description:** An app for assigning Diwali gifts to friends and family, ensuring each gift is unique. It includes options to shuffle, assign, or reset as desired, designed with React for smooth, interactive experiences that bring festive joy.
- **Features:**
  - Unique gift assignment per user
  - Shuffle and reset functionalities
  - Festive-themed interface

---

### 6. Tic Tac Toe Game
- **Path:** `tic-tac-toe`
- **Description:** This React-based Tic Tac Toe game features a user-friendly interface for two players. It handles win or tie scenarios smoothly, delivering a fun and classic gaming experience in a digital format.
- **Features:**
  - Two-player interactive game board
  - Win and draw condition handling
  - Game reset option

---

### 7. Fetch Posts
- **Path:** `fetch-posts`
- **Description:** This project teaches data fetching and storage in component state variables, with a focus on logical rendering, such as conditional rendering, and a better understanding of asynchronous code in React.
- **Features:**
  - Fetch and display data
  - Conditional rendering
  - Handling asynchronous functions

---

### 8. Diwali Lights
- **Path:** `diwali-lights`
- **Description:** Explore conditional rendering in depth, featuring options for Static, Blinking, and Fading Lights based on user selection. The project utilizes `setInterval` to create dynamic lighting effects and includes controls to manage the display easily.
- **Features:**
  - Choose between Static, Blinking, or Fading Lights
  - Adjustable duration and control buttons
  - Dynamic lighting using `setInterval`

---

### 9. User Profile
- **Path:** `user-profile`
- **Description:** A User Profile Dashboard displaying user information with an option to edit details. Provides a straightforward interface for updating profile attributes.
- **Features:**
  - Display user information (name, email, profile picture)
  - Edit functionality for name and email
  - Simple, clean dashboard interface

---

### 10. Image Slider
- **Path:** `image-slider`
- **Description:** The ImageSlider component is an animated image carousel using Framer Motion, cycling through images with auto-slide, manual navigation, and preloaded images for seamless transitions.
- **Features:**
  - Auto and manual navigation
  - Smooth, animated transitions
  - Preloaded images for optimal performance

---

### 11. Calculator
- **Path:** `calculator`
- **Description:** A responsive React-based calculator with real-time calculation display, clear functionality, and interactive buttons. Designed with a modern UI, it offers smooth transitions and enhanced user interaction.
- **Features:**
  - Real-time calculations and display
  - Clear and reset functionalities
  - Interactive buttons for numbers and operators


## Contribution

Contributions are encouraged! If you’d like to add a feature, improve an existing one, or introduce a new project, please follow these steps to contribute:

1. **Fork the Repository**  
   Click the “Fork” button on the top right to create a copy of the repository in your GitHub account.

2. **Clone the Fork**  
   Clone your forked repository to your local machine using the following command:  
   ```bash
   git clone https://github.com/sanketkedare/simple-react-projects.git
   ```

3. **Create a Branch**  
   Navigate to your cloned repository and create a new branch for your feature:  
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**  
   Implement your changes while adhering to the project's coding style:
   - Add a new JSON object in `src/Utils/Projects.json`.
   - Create a new page file named `yourTask.jsx` in `src/Pages`.
   - Create a separate folder for all your JSX files in `src/Components`.
   - Place all your JSX files in this new folder.
   - Update the routing in `App.jsx` with a path to your new component. For example:
     ```jsx
     <Route path={"your-path"} element={<YourComponent />} />
     ```

5. **Test Your Changes**  
   Ensure that your code functions as expected and does not break any existing functionality.

6. **Commit and Push**  
   Use descriptive commit messages to document your changes. Push your branch to GitHub:  
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**  
   Open a pull request from your branch on GitHub to the main branch of this repository.


### Contribution Ideas

- **New Project Ideas:** Add small React projects relevant to interviews or real-world applications.
- **Enhancements:** Improve the functionality or UI of existing projects.
- **Bug Fixes:** Spot an issue? Squash those bugs!
- **Documentation:** Enhance documentation, code comments, or update README for better clarity.
- **Styling Improvements:** Improve UI/UX with updated styling, animations, or layouts.

## License

This repository is licensed under the MIT License. You are free to use, modify, and distribute this project, but please provide proper attribution back to this repository.
