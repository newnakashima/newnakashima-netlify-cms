const newpost = require('../newpost-module');

test('formattedDate', () => {
    expect(newpost.formattedDate('2020/10/10')).toBe('2020-10-10');
    expect(newpost.formattedDate('2020/1/1')).toBe('2020-01-01');
});

test('createFileName', () => {
    expect(newpost.createFileName('これはテストタイトルです', '2020/1/1')).toBe('2020-01-01-これはテストタイトルです.md');
});

test('createHeader', () => {
    expect(newpost.createHeader('これはテストタイトルです', '2020/2/3')).toBe(`
---
templateKey: blog-post
title: これはテストタイトルです
date: 2020-02-03
---
`);
});
