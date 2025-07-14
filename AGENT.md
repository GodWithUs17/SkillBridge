# SkillBridge Project Agent Guide

## Build/Test Commands
- No build process - static HTML/CSS/JS project
- Live server: Use VS Code Live Server extension (port 5501 configured)
- Open `index.html` in browser to test

## Project Structure
- `index.html` - Main landing page with complete site structure
- `index.js` - Simple hamburger menu toggle functionality
- `style.css` - All styles including responsive design
- `asset/` - Images (ngos.webp, team.webp, young.jpg)
- `.vscode/settings.json` - Live Server port configuration

## Code Style & Conventions
- **HTML**: Semantic structure, Bootstrap 5.3 CDN for grid/utilities
- **CSS**: Custom CSS with CSS variables, mobile-first responsive design
- **JavaScript**: Vanilla JS, minimal DOM manipulation
- **Colors**: Primary green (#10b981), dark backgrounds (#18212f, #0a0e24)
- **Typography**: Arial fallback, rem units for sizing
- **Responsive**: Breakpoints at 900px, 768px, 600px, 480px
- **Images**: External Unsplash URLs + local assets in asset/ folder
- **Forms**: Styled inputs with green accent borders
