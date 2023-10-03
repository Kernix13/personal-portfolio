# Personal Porfolio

![portfolio-thumbnail](/portfolio-thumbnail.PNG)

The files and folders used to build [my portfolio page](https://courageous-cuchufli-816711.netlify.app/).

## Notes

I have changed the project section more than any other part of the page. I also added `details.html` to go into more detail for each project.

index.html:

- I ordered the `<meta>` tags in the `<head>` section
- I have a number of lines of HTML commented out in `index.html` and I not positive I want to remove them permanently:
  - Previous project cards, 3 which are from course projects (CARD 1, 2 & 5), and 1 for my custom WordPress theme (CARD 7)
  - 15 Dev icons as I am unsure which ones to include in my skills section.
  - A paragraph in my _about me_ section that mentioned course work
- I also have tried linking to Google fonts and using a link in the HTML file, so you will see additional code commented out.

details.html:

- Because I commented out some project cards, I commented out those items from the top navigation and from the `<section>` tags describing those projects.

style.css:

- My project cards has changed so my CSS is not as orderly as it should be. And since adding my _clients_ section on the `details` page it's gotten worse.
- I will be cleaning up this file so that I do not have excess rules. I've made so many changes that I have rules commented out and most likely rules that are not being used.
- I pulled in Google Fonts using `@font-face`, although I could have added those in `<style>` tags in the HTML files. I need to look into which approach is the best for loading the external fonts.

script.js:

- I have a link commented out in my `script.js` file where I got tips on the accessibility for a hamburger icon
- Although the accessibility of the mobile menu is great, I do not like the lack of animation nor the content shift when the menu is opened and closed
