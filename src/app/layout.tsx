import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import MobileHeader from "@/components/custom/mobile-header";
import Script from "next/script";  // <-- Import Script here
import Head from "next/head";
import { Toaster } from "@/components/ui/sonner"


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description:
    "I'm Sudais Azlan, a passionate AI student and developer. My portfolio showcases real-world machine learning projects including price prediction, NLP classifiers, and content detection systems. With a strong foundation in Python, deep learning, and data science, I strive to create tools that solve real-world problems.",
 keywords: [
  "Sudais Azlan", "Sudais", "Azlan", "sudaisazlan.pro", "AI student", "AI portfolio", "Artificial Intelligence",
  "AI engineer", "AI projects", "Next.js AI portfolio", "Python projects", "Machine Learning", "Deep Learning",
  "Data Science", "Computer Vision", "NLP projects", "Plagiarism Detection", "Email Classifier", "Spam Detection",
  "Price Prediction", "Regression Model", "ML Engineer", "AI Intern", "Python Developer", "Student Developer",
  "Abdul Wali Khan University", "Scanzy", "DataNeuron", "University Projects", "AI Internships", "AI resume",
  "AI tools", "TensorFlow", "Keras", "scikit-learn", "pandas", "matplotlib", "seaborn", "LLMs", "Transformers", "BERT",
  "AI Content Detection", "Sudais GitHub", "Sudais LinkedIn", "OpenAI", "ChatGPT Projects", "Sudais Portfolio",
  "AI Student Projects", "Student Portfolio AI", "AI Career", "AI Showcase", "MERN stack", "Full Stack Developer",
  "Data Processing", "Model Training", "Model Evaluation", "Cross-validation", "Feature Engineering",
  "Data Preprocessing", "Content Detection System", "AI-generated text detection", "SudaisAzlan Developer",
  "AI tools showcase", "AI Learning Path", "Sudais Azlan Python", "AI Use Cases", "Next.js Projects", "Strapi CMS",
  "Upstash Redis", "Cloudinary", "Blog with AI", "Sudais Blog", "ML Project Portfolio", "AI with React",
  "Web3 with AI", "Prompt Engineering", "Sudais Dev", "AI Content Engineering", "Real-world AI", "AI-driven Tools",
  "Developer Portfolio AI", "ML Applications", "AI Thesis", "ML Thesis Projects", "AI Coding", "AI Open Source",
  "Open Source Contributor", "AI Demo Projects", "AI Blog Generator", "Sudais Code Portfolio", "sudaisazlan.com",
  "AI Side Projects", "AI Showcase Website", "Portfolio Hosting AI", "Hostinger Portfolio", "Next.js SEO AI",
  "sudaisazlan.tech", "AI Showcase Student", "Data Modeling AI", "Knowledge Graphs AI", "ML APIs", "Student AI APIs",
  "NLP AI", "LLM Integration", "AI blog scraper", "LangChain", "AI with TypeScript", "AI Ethics", "Responsible AI",
  "AI for Students", "Early AI Developer", "ML Researcher", "Sudais Engineer", "Content Classification AI",
  "Semantic Analysis", "Text Vectorization", "AI Personal Brand", "AI Resume Website", "Personal Portfolio AI",
  "AI Showcase Projects", "NLP with scikit-learn", "SudaisAzlan Projects", "AI Case Study", "Academic Projects AI",
  "College AI Portfolio", "AI Experiments", "Innovation in AI", "AI Showcase Platform",
  // ✅ Added custom keywords for branding
  "codewithsudais", "Code With Sudais", "code with sudais", "Sudias", "sudais dev", "saqib azlan",
  "azlan ai", "sudais ai", "sudaisazlan ai", "sudais codes", "sudais projects", "sudais ai engineer",
  "sudais developer", "sudais ai tools", "code with sudias", "sudais engineer ai", "codewithazlan"
]
,
  openGraph: {
    title: `${DATA.name}`,
    description:
      "Explore Sudais Azlan’s portfolio of AI and machine learning projects. Sudais is a passionate AI student actively building solutions with Python, NLP, and ML models.",
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YFR4KHZXHM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YFR4KHZXHM');
          `}
        </Script>
        {/* ✅ Google AdSense verification script */}
        {/* <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3242419931272978"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        /> */}
        {/* <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3242419931272978"
     crossOrigin="anonymous"></Script> */}
     {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3242419931272978"
     crossOrigin="anonymous"></script> */}


     {/* last */}
     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3242419931272978"
     crossOrigin="anonymous"></script>


      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {/* <MobileHeader/> */}
            {children}
                    <Toaster />

          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}