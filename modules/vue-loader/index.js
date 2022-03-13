const { existsSync, mkdirSync, readdirSync, unlinkSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const templateReg = /\<template\>(.*?)\<\/template\>/;
const scriptReg = /\<script\>(.*?)\<\/script\>/;
const styleReg = /\<style\>(.*?)\<\/style\>/;

function vueLoader (source) {
    console.log(source);
    const _str = source.replace(/[\r\n]/g, '');
    const template = _str.match(templateReg)[1];
    const script = _str.match(scriptReg)[1];
    const style = _str.match(styleReg)[1];
    const cssFileName = `__temp/css/__${ new Date().getTime() }.css`;
    
    writeFile(cssFileName, style);

    const vueScript = script.replace(/\{(.*?)/, (node, key) => {
       return `
         { template: '${ template }',
       ` 
    });

    return `
      import '../${ cssFileName }';
      ${ vueScript }
    `;
}

function writeFile (cssFileName, str) {
  if (!existsSync(formatPath('../../__temp'))) {
      mkdirSync(formatPath('../../__temp'));
      mkdirSync(formatPath('../../__temp/css/'));
  }

  const files = readdirSync(formatPath('../../__temp/css/'));

  files && files.forEach(file => {
      unlinkSync(formatPath('../../__temp/css/' + file));
  });

  try {
    writeFileSync(formatPath(`../../${ cssFileName }`), str);
  } catch (e) {
    console.log(e);
  }
}

function formatPath (path) {
    return resolve(__dirname, path);
}

module.exports = vueLoader;