import select, { Separator } from "@inquirer/select";
import helloData from "./data/hello.md";
import backgroundData from "./data/background.md";
import projectData from "./data/projects.md";
import { marked } from "marked";
import chalk from "chalk";
import terminalLink from "terminal-link";

export function mainMenu() {
  return select({
    message: chalk.bold.hex("#fbbf24")(
      "Select a topic to learn more about me: "
    ),
    choices: [
      {
        name: "1) Hello!",
        value: helloData,
        description: "Come with me if you want to live.",
      },
      {
        name: "2) Background/Context",
        value: backgroundData,
        description: "Who is your daddy and what does he do?",
      },
      {
        name: "3) Project Overviews",
        value: projectData,
        description: "Let off some steam, Bennett.",
      },
      new Separator(),
      {
        name: "Exit",
        value: "_EXIT_",
        description: "Hasta la vista, baby.",
      },
    ],
  });
}

export function outputFile(fileData: string) {
  const data = marked.lexer(fileData);

  data.forEach((item, idx) => {
    switch (item.type) {
      case "heading":
        const spacer = " ".repeat(item.text.length);

        if (idx === 0) {
          console.log("");
        }

        if (item.depth > 1) {
          console.log(chalk.bgHex("#fbbf24").bold("  " + item.text + "  "));
        } else {
          console.log(chalk.bgHex("#fbbf24")("  " + spacer + "  "));
          console.log(chalk.bgHex("#fbbf24").bold("  " + item.text + "  "));
          console.log(chalk.bgHex("#fbbf24")("  " + spacer + "  "));
        }
        console.log("");
        break;
      case "space":
        console.log("");
        break;
      case "paragraph":
        const parsedParagraph =
          item.tokens?.map((token) => {
            if (token.type === "text") {
              return chalk.whiteBright(token.raw);
            }
            if (token.type === "strong") {
              return chalk.bold.whiteBright(token.text);
            }
            if (token.type === "em") {
              return chalk.italic.whiteBright(token.text);
            }
            if (token.type === "link") {
              if (terminalLink.isSupported) {
                return chalk.hex("#fbbf24")(
                  terminalLink(token.text, token.href)
                );
              }
              return chalk.hex("#fbbf24")(token.href);
            }
          }) ?? [];

        console.log(parsedParagraph.join(""));
        break;
      default:
        return console.log(chalk.redBright("Type Not Implemented"), item.type);
    }
  });
}
