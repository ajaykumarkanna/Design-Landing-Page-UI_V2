
  # Design Landing Page UI_V2

  A modern, responsive landing page built with React, TypeScript, and Tailwind CSS. This project showcases "The UX Suite" - a Notion OS designed for UX designers.

  The original Figma design is available at https://www.figma.com/design/Ld7rlTOk8TwQ6A79Ia4ob2/Design-Landing-Page-UI.

  ## 🚀 Live Demo

  View the live demo: [https://ajaykumarkanna.github.io/Design-Landing-Page-UI_V2/](https://ajaykumarkanna.github.io/Design-Landing-Page-UI_V2/)

  ## 📋 Features

  - **Modern React Stack**: Built with React 18.3.1, TypeScript, and Vite
  - **UI Components**: Powered by Radix UI primitives for accessibility
  - **Styling**: Tailwind CSS with custom design system
  - **Responsive**: Mobile-first design approach
  - **Performance**: Optimized for fast loading and smooth interactions
  - **GitHub Pages Ready**: Configured for seamless deployment

  ## 🛠️ Tech Stack

  - **Framework**: React 18.3.1 with TypeScript
  - **Build Tool**: Vite 6.3.5
  - **UI Library**: Radix UI components
  - **Styling**: Tailwind CSS
  - **Icons**: Lucide React
  - **Deployment**: GitHub Pages with GitHub Actions

  ## 📦 Installation

  1. Clone the repository:
  ```bash
  git clone https://github.com/ajaykumarkanna/Design-Landing-Page-UI_V2.git
  cd Design-Landing-Page-UI_V2
  ```

  2. Install dependencies:
  ```bash
  npm install
  ```

  3. Start the development server:
  ```bash
  npm run dev
  ```

  4. Open [http://localhost:3000](http://localhost:3000) in your browser

  ## 🚀 Deployment to GitHub Pages

  ### Automatic Deployment (Recommended)

  This project is configured with GitHub Actions for automatic deployment:

  1. **Push to GitHub**:
     ```bash
     git add .
     git commit -m "Configure for GitHub Pages deployment"
     git push origin main
     ```

  2. **Enable GitHub Pages**:
     - Go to your repository settings
     - Navigate to "Pages" section
     - Select "GitHub Actions" as the source
     - The site will automatically deploy on every push to main branch

  3. **Update Repository Name**: 
     - If your repository name is different from "Design-Landing-Page-UI_V2", update the `base` path in `vite.config.ts`:
     ```typescript
     base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
     ```

  ### Manual Deployment

  For manual deployment using gh-pages:

  ```bash
  npm run deploy
  ```

  ## 📝 Available Scripts

  - `npm run dev` - Start development server
  - `npm run build` - Build for production
  - `npm run preview` - Preview production build locally
  - `npm run deploy` - Manual deployment to GitHub Pages

  ## 📁 Project Structure

  ```
  Design-Landing-Page-UI_V2/
  ├── .github/workflows/     # GitHub Actions workflow
  ├── src/
  │   ├── components/        # React components
  │   │   ├── ui/           # Reusable UI components
  │   │   ├── Header.tsx    # Header component
  │   │   ├── HeroSection.tsx # Hero section
  │   │   └── ...           # Other sections
  │   ├── assets/           # Static assets
  │   ├── styles/           # Global styles
  │   └── imports/          # Generated imports
  ├── dist/                 # Production build output
  ├── package.json          # Dependencies and scripts
  ├── vite.config.ts        # Vite configuration
  └── README.md             # This file
  ```

  ## 🎨 Design System

  The project follows a consistent design system:

  - **Colors**: 
    - Primary: #00BCD4 (Cyan)
    - Text: #2C3E50 (Dark Blue)
    - Secondary: #34495E (Gray)
    - Background: #F8F9FA (Light Gray)

  - **Typography**:
    - Headings: Montserrat (700 weight)
    - Body: Inter (400 weight)
    - Buttons: Montserrat (600 weight)

  - **Components**: Built with Radix UI for accessibility

  ## 🔧 Configuration

  ### Environment Variables

  No environment variables are required for basic functionality.

  ### Customization

  1. **Colors**: Update colors in `src/styles/globals.css`
  2. **Typography**: Modify font settings in the same file
  3. **Content**: Update content in component files
  4. **Assets**: Replace images in `src/assets/`

  ## 📱 Browser Support

  - Chrome (latest)
  - Firefox (latest)
  - Safari (latest)
  - Edge (latest)

  ## 🤝 Contributing

  1. Fork the repository
  2. Create a feature branch
  3. Make your changes
  4. Test thoroughly
  5. Submit a pull request

  ## 📄 License

  This project is open source and available under the [MIT License](LICENSE).

  ## 📞 Support

  If you encounter any issues or have questions:

  1. Check the [Issues](https://github.com/ajaykumarkanna/Design-Landing-Page-UI_V2/issues) page
  2. Create a new issue with detailed information
  3. Include steps to reproduce any bugs

  ---

  **Note**: The repository is now configured for ajaykumarkanna/Design-Landing-Page-UI_V2
  