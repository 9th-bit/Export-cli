const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require("./lib/inquirer");

clear();

console.log(
    chalk.yellow(
        figlet.textSync('Import/Export', { horizontalLayout: 'full'})
    )
);

const run = async () => {
    const option = await inquirer.choose();
    console.log("Your Option: " + option);
}

run();


