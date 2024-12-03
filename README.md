# AI for Healthcare Hub

AI for Healthcare Hub is a comprehensive directory and resource platform that showcases innovative AI solutions in the healthcare industry. The platform connects healthcare professionals with cutting-edge AI technologies and provides insights about their applications in medical imaging, electronic health records, and clinical workflows.

## Features

- 🏥 **Company Directory**: Browse and search AI healthcare companies
- 🔍 **Category Filtering**: Find companies by specific healthcare AI categories
- 📱 **Responsive Design**: Fully responsive web application
- 📝 **Blog Section**: Articles about AI in healthcare
- 📧 **Newsletter**: Stay updated with the latest in AI healthcare
- 🤝 **Company Submission**: Submit your AI healthcare company for listing

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Content**: MDX for blog posts
- **Deployment**: [Vercel](https://vercel.com)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/aihealth.git
cd aihealth
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment client and server variables:

```bash
MONGODB_URL=your_mongodb_url
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_OPENGRAPH_PIC=your_opengraph_image_url
NEXT_PUBLIC_HERO_IMAGE=your_hero_image_url
NEXT_PUBLIC_ABOUT_IMAGE=your_about_image_url
NEXT_PUBLIC_BLOG_IMAGE=your_blog_image_url
UTSFS_ID_AI_HEALTHCARE_HUB=your_utsfs_id
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

src/
├── app/ # Next.js app directory
├── components/ # React components
├── content/ # MDX blog posts
├── env/ # Environment configuration
├── lib/ # Utility functions
├── models/ # MongoDB models
└── types/ # TypeScript types

## Features in Detail

### Company Directory

- Browse AI healthcare companies
- Filter by categories
- Detailed company profiles
- Search functionality

### Blog Platform

- MDX-based blog posts
- Rich content formatting
- Categories and tags
- Publication dates

### Newsletter System

- Email subscription
- MongoDB integration
- Validation and error handling

### Company Submission

- Form-based submission
- Data validation
- Admin review process

## Contributing

We welcome contributions! Please see our contributing guidelines for more details.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Created by Arnaud (irbo) - Combining expertise in scientific research and software development to bridge the gap between healthcare and artificial intelligence.
