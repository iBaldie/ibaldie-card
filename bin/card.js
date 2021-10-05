#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");

const newline = "\n";

const banner = `
██╗██████╗  █████╗ ██╗     ██████╗ ██╗███████╗
██║██╔══██╗██╔══██╗██║     ██╔══██╗██║██╔════╝
██║██████╔╝███████║██║     ██║  ██║██║█████╗
██║██╔══██╗██╔══██║██║     ██║  ██║██║██╔══╝
██║██████╔╝██║  ██║███████╗██████╔╝██║███████╗
╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝ ╚═╝╚══════╝
`;

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderColor: "#366880"
};

// Text + chalk definitions
const data = {
  banner: chalk.hex("#5C7480")(banner), //#20B968
  name: chalk.white("Liam Baldwin"),
  handle: chalk.cyan("ibaldie"),
  work:
    chalk.hex("#947E39")("👋 I help 🖨 PSPs ") +
    chalk.hex("#B89C46")("🔀 Streamline & ⚙️ Automate"),
  twitter: chalk.white("https://twitter.com/ibaldie"),
  github: chalk.white("https://github.com/ibaldie"),
  twitch: chalk.white("https://twitch.tv/ibaldie"),
  youtube: chalk.white("https://youtube.com/c/ibaldie"),
  web: chalk.white("https://ibaldie.dev"),
  npx: chalk.white("npx ibaldie"),
  labelTwitter: chalk.hex("#1DA1F2").bold(" Twitter:"),
  labelGitHub: chalk.hex("#666666").bold("  GitHub:"),
  labelTwitch: chalk.hex("#8A6DC1").bold("Twitch:"),
  labelYouTube: chalk.hex("#FF0000").bold("YouTube:"),
  labelWeb: chalk.white.bold("Blog:"),
  labelCard: chalk.white.bold("    Card:")
};

// Actual strings we're going to output
const working = `               ${data.work}\n`;
const twittering = `    ${data.labelTwitter}  ${data.twitter}`;
const githubing = `    ${data.labelGitHub}  ${data.github}`;
const youtubing = `     ${data.labelYouTube}  ${data.youtube}`;
const twitching = `      ${data.labelTwitch}  ${data.twitch}`;
const webing = `        ${data.labelWeb}  ${data.web}`;
const carding = `\n    ${data.labelCard}  ${data.npx}`;

const set1 = [data.banner, working];
const set2 = twittering + `\n` + githubing;
const set3 = youtubing + `\n` + twitching + `\n` + webing;

const card = [set1.join(newline), set2, set3, carding];

// Put all our output together into a single variable so we can use boxen effectively
const output = card.join(newline);

console.log(chalk.green(boxen(output, options))); // eslint-disable-line no-console
