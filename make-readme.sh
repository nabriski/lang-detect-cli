#!/usr/bin/env bash
echo "# Programming Language Detection CLI" > README.md
echo "Based on [highlight.js](https://highlightjs.org/)" >> README.md
echo "## Install" >> README.md
echo "## Usage" >> README.md
echo \`\`\` >> README.md
./index.js help >> README.md
echo \`\`\` >> README.md
