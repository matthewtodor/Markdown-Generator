//TODO: Break down return in generateMarkdown function to individual functions that each return a section if the user chose to include that section via the inquirer prompts.

// If there is no license, return an empty string
//"Apache", "FireFox", "GNU", "IBM", "Boost"
function renderLicenseBadge(license) {
	switch (license) {
		case "Apache 2.0":
			license = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
			break;
		case "Mozilla 2.0":
			license = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
			break;
		case "GNU GPL v3":
			license = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
			break;
		case "IBM":
			license = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
			break;
		case "Boost":
			license = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
			break;
		default:
			license = ``;
	}
	return license;
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
	switch (license) {
		case "Apache 2.0":
			license = `**[Apache 2.0](https://opensource.org/licenses/Apache-2.0)**`;
			break;
		case "Mozilla 2.0":
			license = `**[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)**`;
			break;
		case "GNU GPL v3":
			license = `**[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)**`;
			break;
		case "IBM":
			license = `**[IBM](https://opensource.org/licenses/IPL-1.0)**`;
			break;
		case "IBM":
			license = `**[IBM](https://opensource.org/licenses/IPL-1.0)**`;
			break;
		default:
			license = ``;
			break;
	}
	return license;
}

// FIXME: If there is no license, return an empty string
function renderLicenseSection(license) {
	return `This application was created using the ${license} open source license. For more information, please visit the license information page here: `;
}

// TODO: if data.license is null, do not include badge or license section.
function generateMarkdown(data) {
	return `# ${data.title} 
${renderLicenseBadge(data.license)}

## Description
${data.description}

### Table of Contents

**1. [Installation Instructions](#installation)**

**2. [Usage Information](#usage)**

**3. [Contribution Guidelines](#contribution)**

**4. [Testing](#testing)**

**5. [License information](#license-information)**

**6. [Questions](#questions)**

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution

${data.contribute}

## Testing

${data.test}

## License information
${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Questions

Any additional questions?

You can email me at:

${data.email}

You can find my GitHub at:

[${data.github}](https://github.com/${data.github})


`;
}

module.exports = generateMarkdown;
