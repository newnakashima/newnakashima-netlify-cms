fs = require('fs');

function formattedDate(date_string) {
    let date = new Date(date_string) || new Date();
    if (date == 'Invalid Date') {
        date = new Date();
    }
    const year = date.getFullYear();
    const month = ('' + (date.getMonth()+1)).padStart(2, '0');
    const day = ('' + date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function createFileName(title, date_string = '') {
    const ymd = formattedDate(date_string);
    return `${ymd}-${title}.md`;
}

function createHeader(title, date_string) {
    return `
---
templateKey: blog-post
title: ${title}
date: ${formattedDate(date_string)}
---
`;
}

module.exports = {
    formattedDate:  formattedDate,
    createFileName: createFileName,
    createHeader:   createHeader
};
