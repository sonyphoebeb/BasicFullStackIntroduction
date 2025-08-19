# Basic FullStack Introduction

A Netflix-inspired static website demonstrating HTML, CSS, and web development fundamentals. This project is ready for deployment on Vercel.

## Features

- 🎨 Netflix-inspired dark theme with signature red accents
- 📱 Responsive design for all devices
- 🧭 Complete navigation system
- 🚀 Ready for Vercel deployment

## Pages

- **Home** (`index.html`) - Main landing page with sample content
- **About** (`about.html`) - Information about the project
- **Contact** (`contact.html`) - Contact information
- **Services** (`services.html`) - Available services
- **Products** (`products.html`) - Product offerings

## Deployment on Vercel

This project is configured for easy deployment on Vercel:

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**:
   - Connect your GitHub repository to Vercel
   - Or use the Vercel CLI: `vercel`
   - Or drag and drop the project folder to Vercel dashboard

3. **Automatic Deployment**:
   - Every push to main branch will trigger automatic deployment
   - Preview deployments for pull requests

## Local Development

```bash
# Install dependencies (optional)
npm install

# Start local development server
npm run dev
# or
npx serve .
```

## Project Structure

```
├── index.html          # Main page
├── about.html          # About page
├── contact.html        # Contact page
├── services.html       # Services page
├── products.html       # Products page
├── style.css           # Netflix-inspired styling
├── vercel.json         # Vercel configuration
├── package.json        # Project metadata
└── README.md           # This file
```

## Original Project Notes

📅 First Day: 16-08-2025

### Basic Website Flow  
1. IP address introduction: Understanding what an IP address is 
2. Website DNS setting basics: dropdown in abc.com website 
3. Requirement Gathering: (SDLC – Step 1)  

### Project: Phebio  
- User Application (Web): Test, address, slot booking, data stored in database  
- Admin Application: Manage riders, handle bookings  
- Riders Mobile Application: where to go & whom to approach
- Authentication Process: otp
- Test Tube Mapping: eg-sugar test requires X ml of blood in a yellow test tube

### Design & Tools  
- Wireframes & Flow Diagrams of the application  
- Figma for UI/UX Design  
- Git account creation  
- Branching in Git

📅 Second Day: 17-08-2025
## Day 2 – HTML Basics  

1. **Introduction to HTML**  
   - `<!DOCTYPE>` → declaration that defines this is an HTML document  
   - `<html>` → root element of an HTML page  
   - `<head>` → contains metadata, title, links, scripts  
   - `<body>` → contains visible content (text, images, links, etc.)  
   - `<h1>` → defines a large heading  
   - `<p>` → defines a paragraph  

2. HTML Editors
   - Example: Notepad (used for writing the first code)  

3. Basic HTML Code  
   <!DOCTYPE html>
   <html>
     <head>
       <title>My First Page</title>
     </head>
     <body>
       <h1>Hello World</h1>
       <p>This is a paragraph.</p>
     </body>
   </html>

4. HTML Elements:
     Defined by a start tag, some content, and an end tag
     Example: <h1>Heading</h1>

5. HTML Attributes:
   Provide additional information about HTML elements
   All HTML elements can have attributes.
      a. href (in <a>) → Specifies the URL of the page the link goes to
         <a href="https://www.sony.com">Visit Sony</a>
      b.	src (in <img>) → Specifies the path to the image to be displayed
         <img src="im.png" alt="My Image">
      c.	width and height (in <img>) → Provide size information for images
       	<img src="im.png" width="200" height="150">
      d.	alt (in <img>) → Provides alternate text for an image
      	<img src="im.png" alt="Profile Picture">
      e.	style → Adds styles to an element (color, font, size, etc.)
      	<p style="color:blue;">This is blue text</p>
      f.	lang (in <html>) → Declares the language of the webpage
      	<html lang="en">
      g.	title → Defines extra information about an element (tooltip)
      	<p title="I am a tooltip">Hover over me</p>
