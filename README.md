# Basic FullStack Introduction

📅 First Day: 16-08-2025
# Basic Website Flow  
1. IP address introduction: Understanding what an IP address is 
2. Website DNS setting basics: dropdown in abc.com website 
3. Requirement Gathering: (SDLC – Step 1)  

# Project: Phebio  
- User Application (Web): Test, address, slot booking, data stored in database  
- Admin Application: Manage riders, handle bookings  
- Riders Mobile Application: where to go & whom to approach
- Authentication Process: otp
- Test Tube Mapping: eg-sugar test requires X ml of blood in a yellow test tube

# Design & Tools  
- Wireframes & Flow Diagrams of the application  
- Figma for UI/UX Design  
- Git account creation  
- Branching in Git

📅 Second Day: 17-08-2025
# Day 2 – HTML Basics 
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
# Day 3 – HTML Basics Practice

1. HTML Introduction
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
      a. "href" attribute specifies the URL of the page the link goes to
               <a href="https://www.sony.com">Visit Sony</a>
      b.	"src" attribute specifies the path to the image to be displayed
                <img src="img.png" alt="My Image">
      c.	"width" attribute and "height" attribute provide size information for images
                <img src="img.png" width="200" height="150">
      d.	"alt" attribute provides alternate text for an image
      	       <img src="img.png" alt="Profile Picture">
      e.	"style" attribute adds styles to an element (like color, font, size, etc.)
      	       <p style="color:blue;">This is blue text</p>
      f.	"lang" attribute declares the language of the webpage
      	       <html lang="en">
      g.	"title" attribute Defines extra information about an element (tooltip)
      	        <p title="This is my name">Sony</p>

6. Code practiced in Cursor today
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
# Day 4 – HTML Basics Continuation

Today I practiced more HTML elements and attributes.  
Here are the topics I covered:
  1. Headings <h1> to <h6> with "styles"
  
  4. Line breaks <br> and horizontal rules <hr>
  5. Hyperlinks <a> with "href" attribute
  6. Images <img> with "src", "alt", "height", "width" attributes
  7. Title attribute with 'single' and "double" quotes
  8. Preformatted text <pre>
  9.  Quotations <q>
  10. Abbreviations <abbr>
  11. Address information <address>
  12. HTML Comments <!-- comments -->
  13. Borders for elements using "style"
      
  14. I made some changes to yesterday's code and learned a few more HTML elements and attributes 

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
        <P style="color:black">This paragraph is for understanding break concept This paragraph is for understanding break concept This paragraph is for understanding break concept This               paragraph is for understanding break concept 
            <br> This paragraph is for understanding break concept <br>
            This paragraph is for understanding break concept This paragraph is for understanding break concept This paragraph is for understanding break concept This paragraph is for                     understanding break concept</P>
            <p style="color:darkgreen">Hey, I am Sony, Please refer below for my webiste link</p>
            <a href="https://www.Sony.come">Sony</a><br>
            <hr>
            <img src="D:\FullStackDevelopment\HTMLProject\BasicFullStackIntroduction\myfirsthtml\images\WhatsApp Image 2025-08-19 at 19.34.44_3025bcf1.jpg" alt="my image" height="250"                    width="150">

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

📅 Date: 20-08-2025
# Day 5 – HTML & CSS Practice
 1. HTML CSS: CSS stands for Cascading Style Sheets, CSS saves a lot of work. It can control the layout of multiple web pages all at once.
             CSS can be added to HTML documents in 3 ways:
                   ->Inline - by using the style attribute inside HTML elements
                   ->Internal - by using a <style> element in the <head> section
                   ->External - by using a <link> element to link to an external CSS file

2. HTML Links: HTML links are hyperlinks, you can click on a link and jump to another document.
               a. The most important attribute of the <a> element is the href attribute, which indicates the link's destination.
                       <a href="url">link text</a>
               b. The "target" attribute specifies where to open the linked document.
                  The "target" attribute can have one of the following values:
                      _self - Default. Opens the document in the same window/tab as it was clicked
                      _blank - Opens the document in a new window or tab
                      _parent - Opens the document in the parent frame
                      _top - Opens the document in the full body of the window
               c. Absolute URLs: An absolute URL points to the complete location of a resource on the internet.
                   Always includes protocol (http:// or https://), domain name, and full path.
               d. Relative URLs: A relative URL points to a resource relative to the location of the current page.
                   Does not include domain name.
                                                  
3. HTML Images: The HTML <img> tag is used to embed an image in a web page
                * The <img> tag is empty, it contains attributes only, and does not have a closing tag. 
                * The <img> tag has two required attributes:
                         "src" - Specifies the path to the image
                         "alt" - Specifies an alternate text for the image
                * Use the CSS float property to let the image float to the right or to the left of a text:


4. HTML Favicon: A favicon is a small image displayed next to the page title in the browser tab.

5. HTML Tables: HTML tables allow web developers to arrange data into rows and columns.
   <table>	Defines a table
   <th>	Defines a header cell in a table
   <tr>	Defines a row in a table
   <td>	Defines a cell in a table

6. Code updated with Day 5 practice.   

📅 Date: 21-08-2025
# Day 6 – HTML & CSS Practice

🌐 Personal Portfolio - Sony Phoebe
This is my personal portfolio website built using HTML and CSS.  
It showcases my projects, skills, and contact details, with a clean and responsive design.

🚀 Features
- 📄 Home Page – Introduction and overview  
- 🛠 Projects Page – Showcases my projects with descriptions  
- 📊 Skills Page – Skillset represented with percentage bars  
- ✉️ Contact Page – Links to email, GitHub, and LinkedIn  
- 🎨 Modern and responsive styling  

 🛠 Tech Stack
- HTML
- CSS
- Font Awesome(for icons)

📂 Project Structure
.
├── index.html # Home page
├── projects.html # Projects page
├── skills.html # Skills page
├── contact.html # Contact page
├── style.css # Stylesheet
└── README.md # Documentation

 🌍 Deployment
The portfolio is deployed on *Vercel*  
🔗 [Live Demo](https://vercel.com/docs/builds/configure-a-build#root-directory)  

 📧 Contact
- Email: sonyphoebe691@gmail.com  
- GitHub: [sonyphoebeb](https://github.com/sonyphoebeb)  
- LinkedIn: [Sony Phoebe](https://www.linkedin.com/in/sony-phoebe-93a251289)  


📅 Date: 22-08-2025  
# Day 7 – HTML Revision  

Today I revised all the HTML topics I learned so far and practiced related exercises on **W3Schools**.  
I did not write new code today but focused on strengthening my concepts.  

# ✅ Topics Revised
1. HTML Introduction & Editors  
2. HTML Basic Structure  
3. HTML Elements & Attributes  
4. HTML Headings & Paragraphs  
5. HTML Styles & Formatting  
6. HTML Quotations & Comments  
7. HTML Colors  
8. HTML CSS Basics (inline styles)  
9. HTML Links & Images  
10. HTML Favicon  
11. HTML Page Title  
12. HTML Tables & Lists  
13. HTML Block & Inline Elements  
14. HTML Div, Classes, and Id  
15. HTML Iframes  
16. HTML File Paths  
17. HTML Head Section  
18. HTML Layout  
19. HTML Responsive Design  

# 📝 Practice Work
- Solved **W3Schools exercises** for all the above topics.  
- Revised syntax, attributes, and usage for each HTML element.  
- Focused on clarity of concepts instead of coding new examples.  

# 🚀 Summary
Today’s session was mainly about **revision + practice exercises** to strengthen the foundation of HTML.  
I will continue with coding practice and new topics from tomorrow.

📅 Date: 25-08-2025  
# Day 10 – JavaScript Basics  

Today I started with the **fundamentals of JavaScript** and practiced how JS interacts with HTML.  
I learned how to use `document.getElementById` to manipulate HTML elements dynamically.  

# ✅ Topics Covered
1. JavaScript can change HTML content (using `innerHTML`).  
2. JavaScript can change HTML styles (like font size).  
3. JavaScript can hide HTML content (`display = none`).  
4. JavaScript can show hidden HTML content (`display = block`).  
5. Difference between using **single quotes** and **double quotes** in onclick attributes.
6. Writing JavaScript inside the `<head>` tag.  
   - Functions defined in head must run after DOM loads (e.g., on button click).  
7. Writing JavaScript inside the `<body>` tag.  
   - Functions inside body can run immediately since elements already exist.  
8. Best practice: placing JavaScript at the **end of body** for performance. 

# 💻 Practice Work
- Wrote code examples where clicking a button changes text, style, hides, or shows content.  
- Practiced using both single and double quotes in JavaScript code inside HTML.
- Created a function inside `<head>` that changes text when a button is clicked.  
- Created another function inside `<body>` that increases font size of text when a button is clicked.  

# 🚀 Summary
Learned the **basic DOM manipulations** with JavaScript:
- Changing text content.  
- Styling elements.  
- Hiding and showing HTML dynamically.
Understood the **importance of script placement**:
- `<head>` scripts → must wait for elements.  
- `<body>` scripts → safer, can directly access elements.  
- Real projects → usually place scripts at the end of body or use external `.js` files.

📅 Date: 26-08-2025
# Day 11 – JavaScript Basics (Display + Arithmetic Operators)
Today I practiced different ways to display output in JavaScript and implemented arithmetic operators using functions.

# ✅ Topics Covered
1. JavaScript Display Methods
     -> innerHTML → Change HTML content dynamically.
     -> innerText → Display plain text inside HTML elements.
     -> document.write() → Write directly to the page (but removes existing content if used after load).
     -> window.alert() → Display content in an alert popup.
     -> console.log() → Log output to the browser console.
     -> window.print() → Print the current page.

2. JavaScript Statements
     -> Simple statements like a = 5; b = 6; c = a + b;
     -> Grouping statements inside functions and executing them via button click.
     -> Undefined variables (let myName;) → results in undefined.

3. Arithmetic Operators
   -> Implemented functions to perform operations on two input numbers:
       Addition → +
       Subtraction → -
       Multiplication → *
       Division → /
       Modulus (Remainder) → %
   Each operator result is displayed dynamically inside a <p> tag.

# 📝 Practice Work
    -> Built interactive HTML pages with buttons to trigger JS functions.
    -> Connected external JavaScript file (arithmaticOperators.js) to keep code organized.
    -> Practiced taking input values, converting them using Number(), and returning results.

# 🚀 Summary
     -> Today I worked on JavaScript output methods and basic arithmetic operations.
     -> I now understand how to:
           * Show results on the page, in alerts, or in the console.
           * Perform calculations with input values using functions.
           * Keep JS code structured by using external .js files.

Tomorrow, I will continue with JavaScript Data Types and Operators in detail.  

  
