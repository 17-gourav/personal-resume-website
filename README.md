# Personal Resume and Bio-data Website

A beginner-friendly, responsive three-page website for the Web Programming Lab assignment. It presents the resume and bio-data of Gourav S Ghorpade using semantic HTML5, CSS3, JavaScript, and jQuery. GitHub Pages can host these static files; the site has not been deployed yet.

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
│   └── profile-placeholder.svg
├── README.md
└── PROJECT_EXPLANATION.md
```

## Pages and features

- **Home (`index.html`)** — introduction, college and semester, replaceable portrait placeholder, completed courses, hobbies, links to the other pages, editable GitHub/LinkedIn URL examples, and a jQuery show/hide control.
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
- Replace `images/profile-placeholder.svg` by adding your photo to `images/` and changing the `<img src>` in `index.html`. For example, if your photo is `images/profile.jpg`, update the source to that path. Use your own appropriately sized portrait.
- Replace the example GitHub and LinkedIn profile URLs in `index.html` with your actual profile URLs.
- Adjust shared colors, spacing, and responsive rules in `css/style.css`. JavaScript behaviors are in `js/script.js`.

## Upload to GitHub

1. Sign in to GitHub and create a new **public** repository, for example `personal-website`. Do not initialize it with files if you plan to upload this folder as-is.
2. In VS Code, open the `personal-website` folder. Use Source Control to initialize a repository, stage the project files, and commit them with a message such as `Add personal resume website`.
3. Add the new GitHub repository as the remote and push the `main` branch. Alternatively, use GitHub's web interface to upload all files while preserving folders.
4. Confirm that `index.html` is at the root of the repository (the repository root should contain `index.html`, `resume.html`, and `biodata.html`).

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

This project is prepared for GitHub Pages but is **not yet hosted**. It becomes hosted only after you push it to a GitHub repository and enable Pages.



