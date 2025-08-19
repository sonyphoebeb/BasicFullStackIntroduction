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
1. HTML Introduction
2. HTML Editors
3. Basic HTML Code
4. HTML Elements
5. HTML Attributes
6. HTML Styles
7. HTML Formatting
8. HTML comments
9. HTML Headings
10. HTML Paragraphs
11. HTML CSS
12. HTML Links
13. HTML Images
14. HTML favicon
15. HTML Tables
16. HTML Lists
17. HTML Block and Inline
18. HTML div
19. HTML classes
20. HTML id
21. HTML iframes
22. HTML filepaths
23. HTML head
24. HTML layout
25. HTML responsive web design

📅 Date: 18-08-2025

## Day 3 – HTML Basics Practice

1. **Introduction to HTML**  
    <!DOCTYPE> declaration that defines this is an HTML document  
    <html> root element of an HTML page  
    <head> contains metadata, title, links, scripts  
    <body> contains visible content (text, images, links, etc.)  
    <h1> defines a large heading  
    <p> defines a paragraph  

2. HTML Editors
    Example: Notepad (we hv used for writing the first code)  

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
         <img src="img.png" alt="My Image">
      c.	width and height (in <img>) → Provide size information for images
       	<img src="img.png" width="200" height="150">
      d.	alt (in <img>) → Provides alternate text for an image
      	<img src="img.png" alt="Profile Picture">
      e.	style → Adds styles to an element (color, font, size, etc.)
      	<p style="color:blue;">This is blue text</p>
      f.	lang (in <html>) → Declares the language of the webpage
      	<html lang="en">
      g.	title → Defines extra information about an element (tooltip)
      	<p title="This is my name">Sony</p>

6.Code practiced in Cursor today
      <!DOCTYPE>
<HTML>
    <HEAD>
        <TITLE>First Trail</TITLE>
    </HEAD>
    <BODY style="background-color: gray;">
        <H1>Hello World</H1>
        <H2 style="background-color: black; color:pink">Heading 2 </H2>
        <H3 style="color:orange">Heading 3 </H3>
        <H4 style="color:blue">Heading 4 </H4>
        <H5 style="color:green">Heading 5 </H5>
        <H6 style="color:black">Heading 6 </H6>
        
        <P style="color:orange">This is my first trail</P>
        <P style="color:blue">This is my <b>second trail</b></P>
        <P style="color:green">This is my <i>third trail</i></P>
        <P style="color:black">This is my <u>fourth trail</u></P>
        <P style="color:purple">This is my <s>fifth trail</s></P>
        <P style="color:brown">This is my <mark>sixth trail</mark></P>
        <P style="color:black">This is my seventh trailThis is my seventh trailThis is my seventh trail This is my seventh trail <br> This is my seventh trail This is my seventh trail <br>
            This is my seventh trail This is my seventh trailThis is my seventh trailThis is my seventh tr</P>
            <p>Hey, I am Sony</p>
            <p>Please refer below for my webiste link</p>
            <a href="https://www.Sony.come">Sony</a><br>
            <img src="im.png" alt="my image">
            
    </BODY>
</HTML>

📅 Date: 19-08-2025

## Day 4 – HTML Basics Continuation

1.HTML Styles: attribute for styling HTML elements (background-color, color, font-family, font-size, text align)

2.HTML Quotation
     a.<abbr>	Defines an abbreviation
     b.<address>	Defines contact information
     c.<q>	Defines a short inline quotation

3.HTML Formatting (<b> <strong> <i> <em> <mark> <small> <del> <sub> <sup>)

4.HTML comments: they are not displayed in the browser, but they can help document your HTML source code.
              <!-- Write your comments here -->

5. HTML Colors: HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values
    Border Color : we can set the color of borders
    example: <h1 style="border:1px solid blue;">Hello Sweet Home</h1>

6.I made some changes to yesterday's code and learned a few more HTML elements and attributes 
        <!DOCTYPE html>
<HTML lang="en">
    <HEAD>
        <TITLE>First Trail</TITLE>
    </HEAD>
    <BODY style="background-color: gray;">
        <H1 style="font-size:60px;">Hello World</H1>
        <H2 style="background-color: black; color:pink">Heading 2 </H2>
        <H3 style="color:orange">Heading 3 </H3>
        <H4 style="color:blue">Heading 4 </H4>
        <H5 style="color:green">Heading 5 </H5>
        <H6 style="color:black">Heading 6 </H6>
        
        <P style="color:orange">I am normal paragraph</P>
        <P style="color:blue"><b>This is a bold paragraph </b></P>
        <P style="color:green"><i>This is an italic paragraph</i></P>
        <em>This is an emphasized text</em><br><p></p>
        <small>This is small text</small>
        <p>This is <sub>subscripted</sub> and this is <sup>superscripted</sup></p>
        <P style="color:black; background-color:white"><u>This is an underlined paragraph with bg clur</u></P>
        <P style="color:purple; font-size:50px;"><s>This is a strike paragraph</s></P>
        <P style="color:brown"> <mark>This is a marked paragraph</mark></P>
        <P style="font-family:courier">Hi Hello Namaste</P>
        <p style="text-align:center; color:blue">Centered paragraph</p>
        <P style="color:black">This paragraph is for understanding break concept This paragraph is for understanding break concept This paragraph is for understanding break concept This paragraph is for understanding break concept 
            <br> This paragraph is for understanding break concept <br>
            This paragraph is for understanding break concept This paragraph is for understanding break concept This paragraph is for understanding break concept This paragraph is for understanding break concept</P>
            <p style="color:darkgreen">Hey, I am Sony, Please refer below for my webiste link</p>
            <a href="https://www.Sony.come">Sony</a><br>
            <hr>
            <img src="D:\FullStackDevelopment\HTMLProject\BasicFullStackIntroduction\myfirsthtml\images\WhatsApp Image 2025-08-19 at 19.34.44_3025bcf1.jpg" alt="my image" height="250" width="150">

            <p title='Sony "Cute" Girl'>Sony with double quotes</p>
            <p title="Sony 'Cute' Girl">Sony with single quotes</p>
            <pre style="background-color:black; color:white" "width>
                Hi, My name is Sony.
                Im a btech graduate in It from KMIT.
                Im currently working as a content reviewer @TechM.
            </pre>
            <p>I want to tell a quaotation <q style="color:aliceblue;">A friend in need is a friend indeed</q></p>
            <p>The <abbr title="OTT Platform" style="color: brown;">Netflix </abbr>was founded in 1997.</p>
            <hr>
            <address style="color: antiquewhite;">
                Written by Sony.<br> 
                Visit us at:<br>
                www.sony.com<br>
                2-19, Ypl<br>
                AP
                </address>

                <p>This is a paragraph.</p>
                <!-- This is another paragraph -->
                <p>This is a paragraph too.</p>

                <h1 style="border:1px solid blue;">Hello Sweet Home</h1>
               
    </BODY>
</HTML>

      
