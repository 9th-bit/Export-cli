const inquirer = require('inquirer');

module.exports = {
    choose: () => {
        const question = {
                name: 'Option',
                type: 'input',
                message: 'Import or Export?',
                validate: (value) => {
                    if(value == "Import" || value == "import" || value == "Export" || value == "export") {
                        return true;
                    } else {
                        return "Not a valid option"
                        
                    }
                }
            }
        return inquirer.prompt(question);
    },
};