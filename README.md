# Personal Resume and Bio-data Website

A beginner-friendly, responsive three-page website for the Web Programming Lab assignment. It presents the resume and bio-data of Gourav S Ghorpade using semantic HTML5, CSS3, JavaScript, and jQuery. GitHub Pages can host these static files; it is published on GitHub Pages.

## Objectives

- Present academic and personal information in clear, separate pages.
- Demonstrate semantic HTML, responsive CSS, JavaScript, and genuine jQuery interactions.
- Provide a print-friendly resume and simple deployment instructions.

## Technologies

- HTML5 for page structure and accessible content.
- CSS3 for layout, visual styling, mobile layouts, animations, and print rules.
- JavaScript for mobile navigation and the browser print dialog.
- jQuery 3.7.1 from the official jQuery CDN for reveal effects, DOM updates, and the home introduction toggle.

## Folder structure

```text
personal-website/
├── index.html
├── resume.html
├── biodata.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── gourav-ghorpade.jpg
├── README.md
└── PROJECT_EXPLANATION.md
```

## Pages and features

- **Home (`index.html`)** — introduction, college and semester, portrait photo, completed courses, hobbies, links to the other pages, editable GitHub/LinkedIn URL examples, and a jQuery show/hide control.
- **Resume (`resume.html`)** — contact and personal information, objective, education table, courses, interests, and explicit placeholders for technical skills, projects, certifications, and strengths. Languages known are listed as Hindi, Kannada, and English. The Print resume button calls the browser print dialog. Print CSS hides navigation and controls and formats the resume for paper/PDF.
- **Bio-data (`biodata.html`)** — formal personal and academic details, courses, interests, editable missing information, declaration, and place/date/signature fields.
- Mobile menu, responsive layouts, reduced-motion support, hover states, and subtle scroll reveals.

## Run locally in VS Code

1. Open this `personal-website` folder in VS Code.
2. Open `index.html` in a browser. If you have the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**. The site also works by opening the file directly.
3. Use the top navigation to visit Resume and Bio-data. Try the mobile menu by narrowing the browser window.
4. On Resume, choose **Print resume** and use the browser preview to print or save a PDF.

The Google Fonts and jQuery CDN resources require an internet connection. The pages otherwise use static local files.

## Editing your information

- Edit the text in `index.html`, `resume.html`, and `biodata.html` directly. Search for the existing value or `[Add ...]` / `[Editable placeholder ...]` marker.
- Replace the PUC institution placeholder with the actual institution name when ready.
- Add only skills, certificates, projects, strengths, and other personal details that are true for you. Languages known are currently listed as Hindi, Kannada, and English.
- Your profile photo is `images/gourav-ghorpade.jpg`; replace that file to change the photo. Keep the filename or update the `<img src>` in `index.html` to match.
- Replace the example GitHub and LinkedIn profile URLs in `index.html` with your actual profile URLs.
- Adjust shared colors, spacing, and responsive rules in `css/style.css`. JavaScript behaviors are in `js/script.js`.

## Update the deployed GitHub repository

The current repository is `17-gourav/personal-resume-website`. Its published pages currently reference the CSS, JavaScript, and image using relative paths. For the site to render correctly, the matching asset folders must be present beside the HTML pages at the repository root.

1. In the `personal-website` project folder, confirm these files exist: `index.html`, `resume.html`, `biodata.html`, `css/style.css`, `js/script.js`, and `images/gourav-ghorpade.jpg`.
2. Update the existing repository `17-gourav/personal-resume-website`; do not create a nested `personal-website/` folder in the repository. Put the three HTML files and the `css`, `js`, and `images` folders at the repository root.
3. If using VS Code with a clone of the existing repository, copy the project contents into that clone, stage the added folders and files, commit, and push to `main`. If using GitHub's web interface, upload the complete folder contents and preserve the folder names and capitalization.
4. After the deployment finishes, check the live asset URLs below. Each should return successfully before considering styling and the image fixed.

- `https://17-gourav.github.io/personal-resume-website/css/style.css`
- `https://17-gourav.github.io/personal-resume-website/js/script.js`
- `https://17-gourav.github.io/personal-resume-website/images/gourav-ghorpade.jpg`

The HTML references are relative: `css/style.css`, `js/script.js`, and `images/gourav-ghorpade.jpg`. Do not add a leading slash. A 404 means the corresponding file or folder is missing from the deployed branch or is nested at the wrong level.
## Enable GitHub Pages

1. Open the repository on GitHub and select **Settings**.
2. Open **Pages** under the repository's **Code, planning, and automation** settings.
3. In **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and `/(root)` folder, then save.
5. Wait for the Pages deployment to finish. The Pages settings page displays the live site URL. A typical project URL is `https://YOUR-USERNAME.github.io/personal-website/`; use the exact URL GitHub provides.
6. Check the home page, then open `/resume.html` and `/biodata.html` on the live site.

## Updating after deployment

Edit the files locally, save, commit, and push the changes to the same branch. GitHub Pages publishes the new version after its deployment completes. Check the Pages settings or repository Actions tab if the update has not appeared.

## Hosting status

The site is published at [https://17-gourav.github.io/personal-resume-website/](https://17-gourav.github.io/personal-resume-website/). After every deployment, confirm that the stylesheet, JavaScript, and profile image URLs listed above load successfully before considering the live styling and image fixed.
