# Project Explanation: Personal Resume and Bio-data Website

## 1. Project title

**Personal Resume and Bio-data Website**

## 2. Introduction

This project is a small, responsive website that presents the resume and bio-data of Gourav S Ghorpade, a 5th-semester Computer Science and Engineering student at KLE Institute of Technology. It has three separate pages and uses the HTML, CSS, JavaScript, and jQuery concepts required for the Web Programming Lab.

## 3. Problem statement

A resume and bio-data need to present information clearly and in an organized format. The assignment is to build a multi-page website that displays this information and can be hosted online.

## 4. Objectives

- Create separate Home, Resume, and Bio-data pages.
- Present academic and personal details in a readable way.
- Use HTML5, CSS3, JavaScript, and jQuery in working code.
- Make the pages responsive for phones, tablets, and computers.
- Allow a visitor to print the resume or save it as a PDF.
- Prepare the static project for GitHub Pages hosting.

## 5. Technologies used

- **HTML5:** semantic page structure and content.
- **CSS3:** colors, typography, layout, responsiveness, animation, and print formatting.
- **JavaScript:** mobile navigation and print button behavior.
- **jQuery 3.7.1:** scroll reveal classes, the Home introduction show/hide control, event handling, and DOM updates. It is loaded from a CDN.

## 6. HTML implementation

The three HTML files are `index.html`, `resume.html`, and `biodata.html`. Each uses elements such as `header`, `nav`, `main`, `section`, `article`, and `footer` to give the page meaningful structure. The resume qualifications are in a real HTML table. Bio-data facts use description lists, and the pages share navigation links. Images have alternative text. Email links use `mailto:`. Missing personal details are labeled as editable placeholders instead of being guessed.

## 7. CSS implementation

`css/style.css` is shared by all pages. It defines the color palette, fonts, spacing, cards, buttons, navigation, and page layouts. CSS Grid and Flexbox arrange content. Media queries at narrower widths change the hero, cards, navigation, and document details to fit mobile screens. Hover transitions add subtle feedback, and a `prefers-reduced-motion` rule reduces motion for visitors who request it. The `@media print` section removes navigation and buttons and formats the resume sheet for printing on A4 paper.

## 8. JavaScript implementation

`js/script.js` initializes after the DOM is ready, or immediately if the script loads after that event. A JavaScript click listener opens and closes the mobile menu and updates its `aria-expanded` state. A single delegated click listener checks for the `#print-resume` button and calls `window.print()` immediately when it is clicked. The button has `type="button"` so it cannot submit a form. The code checks that controls exist before using them, so the shared script works on all three pages.

## 9. jQuery implementation

The HTML pages load jQuery 3.7.1 from the jQuery CDN before `js/script.js`. On the Home page, `$('#intro-toggle').on('click', ...)` handles the show/hide button. It uses `slideToggle()` to animate the introduction, updates the button text using `.html()`, and updates `aria-expanded` using `.attr()`. For scroll reveals, JavaScript's `IntersectionObserver` detects when an element enters view; jQuery adds the `is-visible` class with `.addClass()`. CSS transitions animate that class. If the jQuery CDN is unavailable, the content remains visible and a small native JavaScript fallback keeps the introduction toggle usable. This demonstrates jQuery event handling, DOM manipulation, and animation in working behavior.

## 10. Explanation of each webpage

- **Home (`index.html`):** introduces Gourav, gives the college, department, and semester, shows a replaceable SVG profile placeholder, links to other pages and editable social profile URLs, and lists courses and hobbies. The introduction can be shown or hidden.
- **Resume (`resume.html`):** displays contact information, a career objective, an education table, completed courses, hobbies, and clearly marked placeholders for information that has not been supplied. Its Print resume button opens the browser print dialog.
- **Bio-data (`biodata.html`):** uses a formal document layout for personal and academic details, courses, interests, declaration, place, date, and signature. Missing details remain labeled placeholders.

## 11. Working procedure

The browser loads an HTML page. The page links to the shared stylesheet for appearance and loads the shared JavaScript after jQuery. Links in the navigation open the other local HTML files. CSS adjusts the layout to the screen size. The mobile menu's JavaScript listener toggles its open class. jQuery handles the Home introduction toggle and adds reveal classes as sections enter the viewport. The Resume print button calls the browser print interface, where the print stylesheet is applied.

## 12. Cloud hosting explanation

The site consists of static HTML, CSS, JavaScript, and image files, so it can be hosted with GitHub Pages. To publish it, upload the project to a GitHub repository, then open **Settings → Pages**, select deployment from the `main` branch and the root folder, and save. GitHub displays the live URL after deployment. The project documentation includes the complete steps. This project is prepared for hosting but has not itself been published yet.

## 13. Advantages

- The information is separated into useful pages.
- The design adapts to small and large screens.
- Shared CSS and JavaScript avoid repeated styling and behavior.
- Missing personal details are not fabricated.
- A visitor can print or save the resume as a PDF.
- The static files can be hosted using GitHub Pages.

## 14. Future enhancements

- Replace the profile placeholder and editable social links with personal assets and URLs.
- Add verified skills, project details, certificates, languages, and other details as they become available.
- Add a contact form or links to selected academic work.
- Add a second language or downloadable resume file.

## 15. Conclusion

The project meets the assignment goal by presenting resume and bio-data information across three linked webpages. It demonstrates HTML5, CSS3, JavaScript, and jQuery, includes responsive styling and resume printing, and is structured for GitHub Pages deployment.

## Viva questions and answers

1. **What is HTML?** HTML is the markup language used to organize content on a webpage.
2. **What is CSS?** CSS controls how webpage content looks, including colors, layout, and fonts.
3. **What is JavaScript?** JavaScript is a programming language that adds behavior and interaction to webpages.
4. **What is jQuery?** jQuery is a JavaScript library that makes common DOM, event, and animation tasks concise.
5. **What is the DOM?** The Document Object Model represents a webpage as objects that scripts can read and change.
6. **What is a multi-page website?** It is a website made of multiple separate pages connected by links.
7. **What is the difference between a resume and bio-data?** A resume focuses mainly on education, experience, and qualifications; bio-data gives broader personal and background details.
8. **Why is jQuery used in this project?** It handles the Home introduction toggle, updates page content, and adds reveal classes for animations.
9. **What is responsive web design?** It is a way of designing pages so they adjust to different screen sizes.
10. **What is GitHub?** GitHub is an online service for storing and collaborating on Git repositories.
11. **What is GitHub Pages?** It is a GitHub feature that publishes static website files from a repository.
12. **What is a CDN?** A Content Delivery Network serves files, such as the jQuery library, from distributed web servers.
13. **What is the purpose of the Print button?** It opens the browser print dialog so the resume can be printed or saved as a PDF.
14. **How does website navigation work?** Each navigation link points to another HTML file in the project.
15. **What is the difference between JavaScript and jQuery?** JavaScript is the language; jQuery is a library written in JavaScript that provides convenient methods.
16. **What does the mobile menu do?** A JavaScript click event toggles a CSS class so the navigation links can open or close on a small screen.
17. **How is the resume table made?** HTML `table`, `thead`, `tbody`, `tr`, `th`, and `td` elements organize qualifications into rows and columns.
18. **Why are there placeholders?** Some personal details were not provided, so placeholders make it clear what can be edited later without inventing facts.
19. **What is a print stylesheet?** It is CSS inside a print media rule that changes or hides content when a page is printed.
20. **How do the reveal animations work?** An `IntersectionObserver` detects sections entering the screen, jQuery adds a class, and CSS transitions animate the result.

## 2-minute practical explanation script

Good morning. My project is a Personal Resume and Bio-data Website. I created it for the Web Programming Lab using HTML5, CSS3, JavaScript, and jQuery.

The website has three pages. The Home page introduces me, shows my college and current semester, and lists my completed courses and interests. The Resume page presents my personal information, career objective, educational qualifications in a table, completed courses, and hobbies. It also has clearly marked placeholders for details I have not added yet. The Bio-data page presents personal and academic information in a formal format, including a declaration and signature fields.

I used semantic HTML elements such as header, navigation, main, section, and footer to organize the pages. A common CSS file provides the design and uses media queries to support mobile, tablet, and desktop screens. It also contains a print style that hides navigation and formats the resume for paper. JavaScript opens and closes the mobile navigation and opens the browser print dialog. I used jQuery for the Home page introduction show-and-hide button, event handling, and DOM updates. It also adds a class to sections as they appear on screen, and CSS animates them.

The project uses static files and is prepared for GitHub Pages. After uploading the folder to a GitHub repository, I can enable Pages in the repository settings and get a live URL. Thank you.



