# Zebo-Learning Platform

A Next.js-based web application inspired by educational video creation platforms, providing tools for creating and sharing educational videos to enhance learning experiences.

## Features

- Modern, responsive UI
- Component-based architecture 
- SEO optimization
- Production-ready configuration

## Technology Stack

- **Framework**: Next.js 14.2.3
- **Language**: TypeScript
- **Styling**: Custom CSS
- **Production**: Optimized for deployment

## Getting Started

### Development


---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/zebo-learning.git
cd zebo-learning
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏢 Production Deployment

### Build and start

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket.
2. Import the project into [Vercel](https://vercel.com).
3. Vercel will auto-detect Next.js and handle the rest.

### Other Node.js Hosts

- Build: `npm run build`
- Start: `npm start`

See [Next.js deployment docs](https://nextjs.org/docs/deployment) for more options.

---

## 🧑‍💻 Main User Flows

- **Sign Up / Log In**: Create an account, choose a plan, and log in.
- **Dashboard**: Manage your videos, view stats, and create new content.
- **Create Video**: Upload and configure new educational videos.
- **Edit Video**: Update video details and settings.
- **Browse Features, Pricing, Resources**: Learn about the platform and access help.
- **Contact**: Reach out for support or sales.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS
- **State**: React hooks, localStorage (for demo auth)
- **Forms**: React forms with validation

---

## 📁 Static Assets

- **Favicon**: `public/favicon.ico`
- **robots.txt**: `public/robots.txt`

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

MIT

---

## 🙋‍♂️ Contact

For questions, suggestions, or support, please use the [Contact page](https://your-deployment-url/contact) or email support@zebo-learning.com.

---

**Enjoy using Zebo-Learning!**

### Vercel (Recommended)

The easiest way to deploy the app is using [Vercel](https://vercel.com), the platform built by the creators of Next.js:

1. Push your code to a Git repository (GitHub, GitLab, BitBucket)
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings

### Other Hosting Providers

You can deploy the app to any Node.js hosting provider:

1. Build the application: `npm run build`
2. Start the server: `npm start`

For static deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Project Structure

```
├── public/ # Static assets (favicon, robots.txt, etc.)
├── src/
│ ├── app/ # Next.js app directory (routing, pages)
│ │ ├── page.tsx # Home page
│ │ ├── layout.tsx # Root layout (Header, Footer)
│ │ ├── features/ # Features page
│ │ ├── pricing/ # Pricing page
│ │ ├── resources/ # Resources page
│ │ ├── contact/ # Contact page
│ │ ├── signup/ # Signup page
│ │ ├── login/ # Login page
│ │ ├── dashboard/ # User dashboard
│ │ ├── create-video/ # Video upload page
│ │ └── edit-video/ # Video editing page
│ ├── components/ # Reusable UI components (Header, Footer)
│ └── styles/ # CSS and Tailwind styles
├── postcss.config.js # PostCSS config for Tailwind
├── tailwind.config.js # Tailwind CSS config
├── next.config.js # Next.js config
├── package.json # Project dependencies and scripts
└── README.md # Project documentation
```

## License

MIT 