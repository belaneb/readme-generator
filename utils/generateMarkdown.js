// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if(license == "Apache"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if(license == "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } 
  else if(license == "GNU"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "Apache"){
    return "https://choosealicense.com/licenses/apache-2.0/"
  }
  else if(license == "MIT"){
    return "https://choosealicense.com/licenses/mit/"
  } 
  else if(license == "GNU"){
    return "https://choosealicense.com/licenses/gpl-3.0/"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "Apache"){
    return "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
  }
  else if(license == "MIT"){
    return "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
  } 
  else if(license == "GNU"){
    return "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights."
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# Title
  ${data.title}

  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Table of Content
  [Installation](#Installation)
  [Usage](#Usage)
  [License](#License)
  [Contribution](#Contribution)
  [Test](#Test)
  [Question](#Question)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Contribution
  ${data.contribution}
  
  ## Test
  ${data.test}
  
  ## Question
  GitHub profile: ${data.questionGithub}
  Reach Me through my email:  ${data.questionEmail}
`;
}

module.exports = generateMarkdown;
