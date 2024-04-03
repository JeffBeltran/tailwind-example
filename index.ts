#!/usr/bin/env node

import { input } from "@inquirer/prompts";
import packageData from "./package.json";
import { Command } from "commander";
import { marked } from "marked";
import chalk from "chalk";
import helloData from "./data/hello.md";
import select, { Separator } from "@inquirer/select";
import { mainMenu, outputFile } from "./utils";

const program = new Command();

program
  .version(packageData.version)
  .option("-s, --secret", "Nothing Means Nothing")
  .description(
    "This is a CLI to tell you why Tailwind Labs should hire me as well as an excuse to use Arnold Schwarzenegger quotes."
  )
  .parse(process.argv);

const options = program.opts();

if (options.secret) {
  console.log("https://www.youtube.com/watch?v=8C4lK41SX-Q");
  process.exit(0);
}

let shouldContinue = true;
do {
  console.log("\n");
  const answer = await mainMenu();
  if (answer === "_EXIT_") {
    const signOff = "But wait there's more!";
    const signOffSpacer = " ".repeat(signOff.length);

    console.log("");
    console.log(
      chalk.bgHex("#38bdf8").hex("#38bdf8")(" " + signOffSpacer + " ")
    );
    console.log(chalk.bgHex("#38bdf8")(` ${signOff} `));
    console.log(
      chalk.bgHex("#38bdf8").hex("#38bdf8")(" " + signOffSpacer + " ")
    );
    console.log("");

    console.log(
      "Thanks for taking the time to read through my application. I had a blast putting this together and hope it gives you a sense of who I am and what I can bring to the Tailwind Labs team. I'm stoked about the possibility of diving into some exciting projects with you all. Let's connect and geek out over some code!"
    );

    console.log("");
    shouldContinue = false;
    break;
  }
  outputFile(answer);
} while (shouldContinue);
