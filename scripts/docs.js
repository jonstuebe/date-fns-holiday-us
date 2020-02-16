const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");
const chalk = require("chalk");

const readmeTemplate = require("../readme");
const pkg = require("../package.json");

const basePath = path.join(__dirname, "..");
const generatedDocsPath = path.join(basePath, "_docs");
const generatedFilePath = path.join(generatedDocsPath, "README.md");
const readmePath = path.join(basePath, "README.md");

console.log(chalk.green("1. Parsing Typescript source..."));
exec(
  "yarn typedoc --excludeNotExported --mode file --readme none --hideBreadcrumbs --out _docs src",
  {
    cwd: basePath,
  },
  err => {
    if (err) {
      console.clear();
      console.error(chalk.red(err.message));
    } else {
      console.log(chalk.green("2. Generating markdown..."));
      const { name, description, version, author, peerDependencies } = pkg;
      let apiDoc = fs.readFileSync(generatedFilePath, { encoding: "utf8" });
      apiDoc = apiDoc.replace("## Index", "## API");
      apiDoc = apiDoc.replace(`# ${name}`, "");
      apiDoc = apiDoc.replace(/(blob)\/([a-zA-Z0-9]*)/gm, "$1/master");
      apiDoc = apiDoc.trim();
      fs.writeFileSync(
        readmePath,
        readmeTemplate({
          name,
          description,
          peerDependencies,
          version,
          author,
          content: apiDoc,
        })
      );

      console.log(chalk.green("3. Cleaning up..."));
      exec("yarn rimraf _docs", { cwd: basePath }, err => {
        if (err) {
          console.warn("Error deleting temporary _docs directory");
        }
        console.log(chalk.green("4. Finished generating README.md"));
      });
    }
  }
);
