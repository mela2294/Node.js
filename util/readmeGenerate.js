
function generateReadme(answers) {
        return `
    # ${answers.title}    

    ## Table of Content
    - [Description](#description)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Installation](#installation)
    - [Questions](#questions)
    - [License](#license)
    - [URL deployed application](#url)

    ## Description
    ${answers.description}

    ## Usage
    ${answers.usage}

    ## Installation
    ${answers.installation}

    ## Contribution
    ${answers.contribution}

    ## Questions
    ${answers.email}
    ${answers.github}

    ## License
    ${answers.license}

    // ## URL deployed application
    // ${answers.url}


    `
}

module.exports = generateReadme