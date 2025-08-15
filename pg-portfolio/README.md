# Prattyush Giriraj - Portfolio

A modern, responsive personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, dark theme, and a complete product management portfolio showcase.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dark Theme**: Custom dark theme with beautiful color palette
- **Smooth Animations**: Framer Motion animations and smooth scroll behavior
- **Component Library**: shadcn/ui components for consistent design
- **SEO Optimized**: Complete meta tags, sitemap, and robots.txt
- **Contact Form**: Functional contact form with validation
- **PM Portfolio**: Interactive case studies with Figma embeds
- **Performance**: Optimized images and fonts for fast loading

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons
- [Zod](https://zod.dev/) - Form validation
- [next-seo](https://github.com/garmeeh/next-seo) - SEO optimization

## 🎨 Design System

### Color Palette
- **Background**: `#0c0f0f` - Deep dark background
- **Surface**: `#121515` - Card and section backgrounds  
- **Text**: `#e8f0ec` - Primary text color
- **Muted**: `#a7b0ab` - Secondary text color
- **Primary**: `#22c55e` - Green accent color
- **Accent**: `#34d399` - Light green highlights

### Typography
- **Font**: Inter (Google Fonts)
- **Spacing**: Generous padding and margins
- **Borders**: Rounded corners (rounded-2xl)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/contact/       # Contact form API
│   ├── globals.css        # Global styles and theme
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Main portfolio page
│   ├── robots.ts          # SEO robots.txt
│   └── sitemap.ts         # SEO sitemap
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── contact-form.tsx  # Contact form with validation
│   ├── figma-embed.tsx   # Figma prototype embeds
│   ├── footer.tsx        # Site footer
│   ├── header.tsx        # Navigation header
│   ├── pm-card.tsx       # PM portfolio cards
│   ├── project-card.tsx  # Coding project cards
│   ├── section.tsx       # Animated section wrapper
│   └── timeline-item.tsx # Experience timeline
├── data/                 # Content data
│   ├── experience.ts     # Work experience
│   ├── pm.ts            # PM portfolio items
│   ├── profile.ts       # Personal information
│   └── projects.ts      # Coding projects
└── lib/                 # Utilities
    ├── seo.ts          # SEO configuration
    └── utils.ts        # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Prattyush15/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Edit the files in `/src/data/` to customize:

- **Profile**: Update `src/data/profile.ts` with your information
- **Experience**: Modify `src/data/experience.ts` with your work history
- **Projects**: Update `src/data/projects.ts` with your coding projects
- **PM Portfolio**: Edit `src/data/pm.ts` with your product management work

### Assets
Replace placeholder assets in `/public/`:

- **Avatar**: Replace `public/images/avatar.jpg` with your photo
- **Resume**: Replace `public/Prattyush_Giriraj_Resume.pdf` with your actual resume
- **Project Images**: Update images in `public/images/projects/`
- **Company Logos**: Update logos in `public/images/logos/`
- **PM Thumbnails**: Update images in `public/images/pm/`

### Contact Form
The contact form currently logs submissions. To enable email sending:

1. Sign up for [Resend](https://resend.com/)
2. Add your API key to environment variables
3. Uncomment email code in `src/app/api/contact/route.ts`

### Figma Integration
To add Figma prototypes to PM portfolio:
1. Get your Figma file key from the URL
2. Update `figmaFileKey` in `src/data/pm.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with one click

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Update the `metadataBase` in `src/app/layout.tsx`

### Other Platforms
The portfolio is a standard Next.js app and can be deployed to:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Environment Variables

For email functionality, add these to your environment:

```env
RESEND_API_KEY=your_resend_api_key_here
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Prattyush Giriraj
- Email: [prattyushgiriraj@gmail.com](mailto:prattyushgiriraj@gmail.com)
- LinkedIn: [prattyush-giriraj](https://www.linkedin.com/in/prattyush-giriraj/)
- GitHub: [Prattyush15](https://github.com/Prattyush15)

---

Built with ❤️ using Next.js and deployed on Vercel.