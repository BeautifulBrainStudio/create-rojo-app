#!/usr/bin/env node

// Imports \\
const { Command } = require("commander")

const { initProject } = require("./core.js")
const packageJson = require("../package.json")

// Init Program \\
const program = new Command(packageJson.name)
	.version(packageJson.version, "-v", "Show the current version")
	.description("Create Rojo apps with one command")
	.action(() => {
		initProject(program.opts())
	});

// Program Options \\
program
	.option("-ng, --nogit", "Will not init git repository")
// 	.option("-gh, --github <username> <repo-name>", "Use git repo for template (Clone From Github)")
// 	.option("-gl, --gitlab <username> <repo-name>", "Use git repo for template (Clone From Gitlab)")
// 	.option("-g, --git <url>", "Use git repo for template instand default template");

// Run Program \\
program.parse(process.argv)