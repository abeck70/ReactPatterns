'use strict';

const fs = require('fs');
const _ld = require('lodash');

module.exports.getPicList = function(doneCallBack) {
  const picFolder = './ui-dist/data2/_sm';

  const start = function() { fs.readdir(picFolder, getFileListCallBack); };

  const getFileListCallBack = function(err, fileList) {
    const lgPicFolder = '../data2/_lg/';
    const smPicFolder = '../data2/_sm/';
    if (err) console.log('getFileListCallBack error');
    else {
      var fileListReturned = _ld.filter(fileList, function(data) {
        const lowerName = data.toLowerCase();
        return (lowerName.endsWith('jpg') || lowerName.endsWith('png'));
      });
      let returnList = [];
      const copyRight = 'Image © 2006 Chris Stevens';
      const addObject = {copyright: copyRight, lgFolder: lgPicFolder, smFolder: smPicFolder};
      fileListReturned.forEach(function(value){ returnList.push(Object.assign({file: value}, addObject)); });
      doneCallBack(returnList);
    }
  };
  start();
};
