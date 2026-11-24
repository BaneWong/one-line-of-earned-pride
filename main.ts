#!/usr/bin/env node
// One Line of Earned Pride — entry program
// Writes the entry text to /output/entry.txt

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const entry = "After seven years of writing the same paragraph over and over, my grandmother finally stopped crossing it out.";

const outputDir = join(process.cwd(), 'output');
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), entry);
console.log(`Written to output/entry.txt: ${entry}`);
