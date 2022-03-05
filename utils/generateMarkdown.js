// If there is no license, return an empty string
//"Apache", "FireFox", "GNU", "IBM", "Boost"
function renderLicenseBadge(license) {
	if (license === "Apache 2.0") {
		return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
	} else if (license === "Mozilla 2.0") {
		return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
	} else if (license === "GNU GPL v3") {
		return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
	} else if (license === "IBM") {
		return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
	} else if (license === "Boost") {
		return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
	} else {
		return ``;
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	if (license === "Apache 2.0") {
		return `**[Apache 2.0](https://opensource.org/licenses/Apache-2.0)**`;
	} else if (license === "Mozilla 2.0") {
		return `**[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)**`;
	} else if (license === "GNU GPL v3") {
		return `**[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)**`;
	} else if (license === "IBM") {
		return `**[IBM](https://opensource.org/licenses/IPL-1.0)**`;
	} else if (license === "Boost") {
		return `**[Boost](https://www.boost.org/LICENSE_1_0.txt)**`;
	} else {
		return ``;
	}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	if (license === "Apache 2.0") {
		return `This application was created using the Apache 2.0 open source license. For more information, please visit the license information page here: `;
	} else if (license === "Mozilla 2.0") {
		return `This application was creature using the Mozilla 2.0 open source license. For more information, please visith the license information page here: `;
	} else if (license === "GNU GPL v3") {
		return `This application was creature using the GNU GPL v3 open source license. For more information, please visith the license information page here: `;
	} else if (license === "IBM") {
		return `This application was creature using the IBM open source license. For more information, please visith the license information page here: `;
	} else if (license === "Boost") {
		return `This application was creature using the Boost open source license. For more information, please visith the license information page here: `;
	} else {
		return ``;
	}
}

// TODO: Create a function to generate markdown for README
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
