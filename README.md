
---

# Findly - Lost and Found Platform

![Findly Logo](src/assets/logo.png)

**Findly** is a modern, elegant web platform designed to help communities reconnect with their lost belongings. Built for the University of Science and Technology of Southern Philippines - Cagayan De Oro (USTP-CDO) community, Findly enables students, faculty, staff, and visitors to report, search, and recover lost items or return found ones, fostering a more connected and responsible campus.

## Features

- **Report Items**: Users can submit details about lost or found items, including images, locations, and descriptions.
- **Search & Browse**: Search for lost or found items with filters by category (e.g., Electronics, Jewelry, Keys).
- **Dynamic Header**: A responsive header that transitions from transparent to white on scroll.
- **Authentication**: Secure login and registration pages with password strength validation and social login options (Google, Facebook).
- **Item Matching**: Automatic matching of lost and found items based on descriptions, locations, and dates (simulated in the demo).
- **Responsive Design**: Fully responsive across desktops, tablets, and mobiles.
- **Statistics**: Displays platform impact with animated counters for total items, items returned, success rate, and active users.
- **Notifications**: Toast-style notifications for successful login/registration.

## Installation

To run Findly locally, follow these steps:

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox)
- A text editor (e.g., VS Code)
- Basic knowledge of HTML, CSS, and JavaScript

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/findly.git
   cd findly
   ```

2. **Project Structure**
   ```
   findly/
   ├── src/
   │   ├── assets/
   │   │   ├── logo.png        # Logo image
   │   │   └── USTP.jpg        # Hero section image
   │   ├── css/
   │   │   ├── auth.css        # Authentication-specific styles
   │   │   └── styles.css      # Main stylesheet
   │   ├── html/
   │   │   ├── login.html      # Login page
   │   │   └── register.html   # Registration page
   │   ├── js/
   │   │   ├── auth.js         # Authentication JavaScript logic
   │   │   └── script.js       # Main JavaScript logic
   │   └── index.html          # Homepage
   └── README.md               # This file
   ```

3. **Serve the Project**
   - No server is required for basic functionality since it’s static HTML/CSS/JS.
   - Open `src/index.html` in your browser:
     ```
     open src/index.html
     ```
   - Alternatively, use a local server for better testing (e.g., with VS Code’s Live Server extension or Python’s HTTP server):
     ```bash
     python -m http.server 8000
     ```
     Then visit `http://localhost:8000/src`.

4. **Test Pages**
   - Homepage: `http://localhost:8000/src/index.html`
   - Login: `http://localhost:8000/src/html/login.html`
   - Register: `http://localhost:8000/src/html/register.html`

## Usage

1. **Homepage**
   - Scroll to see the header transition from transparent to white.
   - Browse recent lost/found items, filter by "All," "Lost," or "Found."
   - Use the search bar to find items (currently static demo data).

2. **Login**
   - Enter an email and password (demo mode logs to console).
   - Toggle password visibility with "Show/Hide."
   - Use Google/Facebook buttons for simulated social login.

3. **Register**
   - Fill in details, including a strong password (strength meter included).
   - Accept terms and submit (demo mode redirects to login).

4. **Responsive Features**
   - Test on mobile devices or resize the browser to see the mobile menu and layout adjustments.

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with custom properties (variables), Flexbox, Grid, and animations
- **JavaScript (ES6)**: Dynamic functionality, event handling, and DOM manipulation
- **Google Fonts**: Inter font family for typography
- **Unsplash**: Sample images for demo items

## Contributing

We welcome contributions to improve Findly! Here’s how to get started:

1. **Fork the Repository**
   - Click "Fork" on GitHub to create your own copy.

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   - Add new features, fix bugs, or improve documentation.
   - Ensure code follows the existing style (e.g., consistent variable naming like `--primary`).

4. **Commit and Push**
   ```bash
   git add .
   git commit -m "Add your descriptive message"
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**
   - Go to your fork on GitHub and click "New Pull Request."
   - Describe your changes and submit for review.

### Ideas for Contributions
- Add backend integration (e.g., Node.js, Firebase) for real data storage.
- Implement actual item matching algorithms.
- Enhance search functionality with live filtering.
- Add unit tests for JavaScript functions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. *(Create a `LICENSE` file if you choose to include one.)*

## Acknowledgments

- Inspired by the USTP-CDO community’s need for a lost-and-found solution.
- Built with ❤️ by Clint John N. Mila and contributors.

---