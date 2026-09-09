# Ray's Digital Canvas

Build a modern, minimal, dark-themed personal portfolio web app for Ray Zhong inspired directly by the visual language, typography, spacing, and layout of https://sherpa-portfolio.vercel.app/ using DM Sans, Syne, and Instrument Serif fonts, subtle dark tones (#0a0a0a background, #141414 cards, subtle #ffffff1a borders), and a floating glass pill navbar.

Structure as a single-page portfolio with smooth section scrolling:
1. Floating Pill Navbar: Logo/name badge, nav links (About, Education, Experience, Projects, Skills, Contact), and Resume CTA button; responsive mobile menu.
2. Hero Section: Display Ray Zhong's name in Syne font, title ("Sustainable Energy Systems & Environmental Data Analyst"), concise 2-sentence intro highlighting energy optimization, sustainability analytics, and AI/ML, quick action buttons ("Explore Projects", "Get in Touch", "Download Resume"), headshot placeholder with subtle glow/frame, and subtle scroll cue.
3. About Section: Bento-grid style cards showcasing academic background at University of Michigan and Duke/DKU, research focus (energy markets, circular economy, LCA, decarbonization), and current work at Micron and National Laboratory of the Rockies.
4. Education Section: Master of Science in Environment and Sustainability (Sustainable Energy Systems) at University of Michigan, and BS in Environmental Science (Biogeochemistry) at Duke & Duke Kunshan University, with relevant coursework and honors.
5. Experience Section: Clean editorial cards for Micron Technology (Global EHSS Sustainability Intern), National Laboratory of the Rockies / NREL (Graduate Researcher), Initiative for Sustainable Investment (Assistant Intern), and CECEP (ESG Analyst Intern), including metric-driven impact points and technology tags.
6. Projects Section: Showcase featured projects with technical badges, roles, methodologies, metrics, and external link placeholders:
   - Solar Power Generation Forecasting with CNN-LSTM ML model (U of M)
   - Spatial Analysis of Land-Use Change & Urban Heat Island Resilience using Landsat & InVEST (Duke/DKU)
   - End-to-End Agentic AI Automation for Corporate Sustainability Disclosures (Micron)
   - EOL Photovoltaic Module Landfill Cost & Carbon Footprint Modeling (NLR / NREL)
7. Skills Section: Clean categorized pills/chips across Data & Analytics, Energy & Sustainability, Optimization & Modeling, Programming & Tools.
8. Contact Section: Direct reach-out options (email: rayzhong@umich.edu / ray3yu2he@gmail.com, LinkedIn, GitHub, phone, resume download) and a clean contact form.
9. Footer: Minimal copyright and navigation links.

Keep all content centralized in a clean TypeScript data file (e.g., `src/data/portfolioData.ts`) so Ray can easily edit text, add projects, update links, or swap photos later. Ensure complete responsiveness, accessible contrast, and smooth transitions.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c767ca38-26da-4233-aa4c-f04154e618f2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
