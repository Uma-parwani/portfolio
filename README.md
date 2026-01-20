# Uma Parwani - Portfolio Website

A modern, animated portfolio website showcasing frontend development expertise, data engineering skills, and professional projects.

## 🌟 Features

- **Creative & Bold Design** - Vibrant color scheme with purple, blue, and pink gradients
- **Smooth Animations** - Scroll animations, typing effects, hover transitions, and skill bar animations
- **Glassmorphism Effects** - Modern UI with backdrop blur and transparency
- **Fully Responsive** - Mobile-first design that works on all devices
- **Fast & Optimized** - Pure HTML/CSS/JavaScript, no complex frameworks
- **Vercel-Ready** - Zero-config deployment to Vercel

## 🎨 Design Highlights

- Animated hero section with typing effect
- Gradient orbs with floating animations
- Intersection Observer for scroll-triggered animations
- Animated skill progress bars
- Interactive project cards with hover effects
- Timeline-based experience section
- Glassmorphism UI components
- Smooth scroll navigation
- Mobile hamburger menu

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file (root entry point)
├── vercel.json             # Vercel deployment configuration
├── styles/
│   └── main.css           # All styling with animations
├── scripts/
│   └── main.js            # Interactive features and animations
├── assets/
│   └── (screenshots/images if needed)
└── README.md              # This file
```

## 🚀 Quick Start

### Local Development

1. **Clone or download** the portfolio folder

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   
   # Python
   python -m http.server 8000
   
   # Node.js (with http-server)
   npx http-server -p 8000
   
   # VS Code Live Server extension
   # Right-click index.html → "Open with Live Server"
   ```

3. **View the site**
   - Navigate to `http://localhost:8000`

## 🌐 Deploy to Vercel

### Method 1: Vercel CLI (Fastest - ~30 seconds)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to portfolio folder**
   ```bash
   cd portfolio
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? → **Y**
   - Which scope? → Select your account
   - Link to existing project? → **N**
   - Project name? → `uma-parwani-portfolio` (or your choice)
   - Directory? → `.` (current directory)
   - Override settings? → **N**

5. **Your site is live!**
   - Vercel will provide a URL like: `https://uma-parwani-portfolio.vercel.app`
   - Production deployment URL will be shown

### Method 2: Vercel Dashboard (GitHub Integration)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` branch will auto-deploy
   - Preview deployments for pull requests

### Method 3: Drag & Drop

1. Go to [vercel.com](https://vercel.com)
2. Drag and drop the `portfolio` folder onto the Vercel dashboard
3. Wait for deployment (~30 seconds)
4. Your site is live!

## 📝 Customization

### Update Personal Information

**HTML (`index.html`):**
- Update name, title, and description in hero section
- Modify social links (GitHub, LinkedIn, Email)
- Update project descriptions
- Edit experience timeline
- Update contact information

**CSS (`styles/main.css`):**
- Change color scheme (`:root` variables)
- Modify animations
- Adjust spacing and layout
- Customize typography

**JavaScript (`scripts/main.js`):**
- Update typing animation texts
- Modify animation timings
- Add/remove interactive features

### Add Projects

1. Copy a project card template in `index.html`
2. Update the project details:
   - Title
   - Description
   - Tags
   - Links
   - Gradient background color

### Add Screenshots

1. Create `assets/images/` folder
2. Add project screenshots
3. Replace placeholder `div` with `<img>` tag:
   ```html
   <img src="assets/images/project-name.png" alt="Project Name">
   ```

## 🎯 Portfolio Sections

1. **Hero Section**
   - Animated typing effect showing roles
   - Gradient background with floating orbs
   - Social media links
   - Call-to-action buttons

2. **About Section**
   - Professional introduction
   - Education highlights
   - Experience summary
   - Certifications

3. **Projects Section**
   - **Learning Projects:**
     - WeatherSync Pro
     - Digital Portfolio Suite
     - FormBuilder Enterprise
     - TransitFlow: Logistics Engine
   - **Commercial Projects:**
     - Cadbury India Website
     - Nokia India Website
     - (With explanation about company property)

4. **Skills Section**
   - Frontend Development (JavaScript, React, HTML/CSS)
   - Backend & Data (Python, SQL, ETL)
   - Tools & Technologies (Git, AWS, VS Code)
   - Animated progress bars

5. **Experience Section**
   - Timeline-based layout
   - Education and work history
   - LTIMindtree experience
   - Internship details

6. **Contact Section**
   - Email, phone, LinkedIn, GitHub
   - Call-to-action for work samples
   - Freelance availability note

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling, animations, gradients, glassmorphism
- **JavaScript (ES6+)** - Interactive features, scroll animations
- **Intersection Observer API** - Scroll-triggered animations
- **CSS Variables** - Theme customization
- **Flexbox & Grid** - Responsive layouts
- **Backdrop Filter** - Glassmorphism effects

## 📱 Responsive Breakpoints

- **Desktop:** > 768px
- **Tablet:** 481px - 768px
- **Mobile:** < 480px

## ⚡ Performance

- No external dependencies
- Pure HTML/CSS/JavaScript
- Optimized animations
- Lazy loading support
- Debounced scroll handlers
- Efficient CSS animations

## 🔒 Security Headers

The `vercel.json` includes security headers:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- Proper cache control for assets

## 📧 Email Response

An email template is provided in `Email_Response_to_Nico.md` to send to potential employers/clients. This explains:
- Learning vs. commercial projects
- Frontend development experience
- Offer to request client permissions for commercial work samples
- Portfolio website link
- Freelance availability

## 🌟 Project Highlights

### Professional Pseudonames
Projects have been given professional names for better impact:
- `test-private-repo` → **TransitFlow: Logistics Engine**
- `WeatherChecking` → **WeatherSync Pro**
- `Uma-Frontend-Developer` → **Digital Portfolio Suite**
- `HTML-form` → **FormBuilder Enterprise**

### Commercial Projects Section
Clear separation of learning projects and commercial work (Cadbury India, Nokia India) with:
- Industry context
- Role description
- Key achievements
- Technologies used
- Note about requesting client permissions

## 📄 License

This portfolio is personal property. Feel free to use the structure and code for your own portfolio, but please update all personal information.

## 👤 Contact

**Uma Parwani**
- Email: umaparwani1234@gmail.com
- Phone: +91 9981556468
- LinkedIn: [uma-parwani](https://linkedin.com/in/uma-parwani)
- GitHub: [Uma-parwani](https://github.com/Uma-parwani)

---

**Built with ❤️ using HTML, CSS, and JavaScript**  
**Deployed on Vercel** ⚡
