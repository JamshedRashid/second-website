import {cpSync,mkdirSync} from 'node:fs';
mkdirSync('public',{recursive:true});cpSync('storefront','public',{recursive:true});

import {readFileSync,writeFileSync} from 'node:fs';
import vm from 'node:vm';
writeFileSync('lib/advisor-specs.json',JSON.stringify(vm.runInNewContext(readFileSync('storefront/spec-data.js','utf8')+';phoneSpecs'),null,2)+'\n');
