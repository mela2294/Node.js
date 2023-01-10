// Function to generate markdown for readme
function generateReadme(answers) {
return `# ${answers.title}
## Table of Content
- [Description](#description)
- [Usage](#usage)
- [Contribution](#contribution)
- [Installation](#installation)
- [Questions and Concern](#questions)
- [License](#license)
## Description
${answers.description}
## Usage
${answers.usage}
## Installation
${answers.installation}
## Contribution
${answers.contribution}
## Questions and Concern
${answers.email}
${answers.github}
## License
${answers.license}

`
}

module.exports = generateReadme