const sideBars = require("./sidebars.json");
const fs = require("fs");
const path = require("path");

if (sideBars && sideBars.docs) {
  for (const chapter of Object.keys(sideBars.docs)) {
    for (const element of sideBars.docs[chapter]) {
      const text = `---
id: ${element}
title: ${element}
sidebar_label: ${element}
---

${element} TODO
`;
      const pathToFile = path.resolve("../docs/", element + ".md");
      if (!fs.existsSync(pathToFile)) {
        fs.writeFileSync(pathToFile, text);
      }
    }
  }
}
