import {cpSync,mkdirSync} from 'node:fs';
mkdirSync('public',{recursive:true});cpSync('storefront','public',{recursive:true});
