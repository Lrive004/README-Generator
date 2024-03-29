// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license === 'APACHE 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license === 'GPL 3.0') {
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]';
  } else {
    return "";
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return '(https://opensource.org/licenses/MIT)';
  } else if (license === 'APACHE 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return 'https://www.gnu.org/licenses/agpl-3.0)';
  } else {
    return "";
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseText = '';
  switch (license) {
    case 'MIT':
      licenseText = `## License 
    This project is licensed under the MIT License - for more info click here -`
      break;
    case 'APACHE 2.0':
      licenseText = `## License
    This project is licensed under the APACHE 2.0 License - for more info click here -`
      break;
    case 'GPL 3.0':
      licenseText = `## License
    This project is licensed under the GPLv3 License - for more info click here -`
    default:
      break;
  };
  return licenseText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
  ## ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  
  ${data.license}
  ${licenseBadge}
  ${licenseSection}
  ${licenseLink}
  ## Tests
  ${data.tests}
  ## Questions
  Contact me at [${data.username}](https://github.com/${data.username}) or email at ${data.email}.
`;
}

module.exports = generateMarkdown;
