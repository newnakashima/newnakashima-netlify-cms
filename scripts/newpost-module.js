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

function formattedTime(date_string) {
    let date = new Date(date_string) || new Date();
    if (date == 'Invalid Date') {
        date = new Date();
    }
    const time = {
        hours:   date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    };
    let padded = {};
    for (key in time) {
        padded[key] = ('' + time[key]).padStart(2, '0');
    }
    
    return `${padded.hours}:${padded.minutes}:${padded.seconds}`;
}

function createFileName(title, date_string = '') {
    const ymd = formattedDate(date_string);
    return `${ymd}-${title}.md`;
}

function createHeader(title, date_string) {
    return `---
templateKey: blog-post
title: ${title}
date: ${formattedDate(date_string)} ${formattedTime(date_string)}
---
`
    ;
}

function writeFile() {
    const title = process.argv[2];
    if (typeof title === 'undefined') {
        throw new Error('I need post title.');
    }
    const date_string = process.argv[3] || '';
    const file_name = createFileName(title, date_string);
    fs.writeFile(`./src/pages/${file_name}`, createHeader(title, date_string), 'utf8', err => {
        if (err) throw err;
    });
}

module.exports = {
    formattedDate:  formattedDate,
    formattedTime:  formattedTime,
    createFileName: createFileName,
    createHeader:   createHeader,
    writeFile:      writeFile
};
