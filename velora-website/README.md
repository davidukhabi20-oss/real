# Velora Agroprocessing Ltd. Website

A professional corporate website for Velora Agroprocessing Ltd., focusing on commercial tomato processing in Nigeria.

## 🚀 Deployment Guide

This is a static website and can be deployed to any static hosting provider.

### Recommended Providers:
- **Netlify** (Drag and drop the `velora-website` folder)
- **Vercel** (Connect your GitHub repo)
- **GitHub Pages** (Enable Pages in repository settings)

### Deployment Steps (Netlify):
1. Log in to your [Netlify](https://www.netlify.com/) account.
2. Go to the "Sites" tab.
3. Drag and drop the `velora-website` folder directly into the browser.
4. Update the site name in "Site Settings".

### Project Structure:
- `/velora-website`: All production assets
    - `index.html`: Home page
    - `about.html`, `products.html`, etc.: Sub-pages
    - `style.css`: Global styles
    - `script.js`: Interactivity and animations
    - `/assets`: Images and video files

## 🛠 Maintenance
- To update images, replace files in the `velora-website` folder keeping the original filenames.
- To update the logo, replace `download.png`.
- To change the hero video, replace `hero-video.mp4`.

## 📧 Contact Form
The contact form is currently a simulation. To make it functional, it is recommended to use a service like **Formspree** or **Getform**.
Example change in `contact.html`:
`<form action="https://formspree.io/f/your-id" method="POST">`
