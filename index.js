const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const data = require('./test/test-data.json');

const csvWriter = createCsvWriter({
    path: 'udemy-todoist-template.csv',
    header: [
        {id: 'TYPE', title: 'TYPE'},
        {id: 'CONTENT', title: 'CONTENT'},
        {id: 'PRIORITY', title: 'PRIORITY'},
        {id: 'INDENT', title: 'INDENT'},
        {id: 'AUTHOR', title: 'AUTHOR'},
        {id: 'RESPONSIBLE', title: 'RESPONSIBLE'},
        {id: 'DATE', title: 'DATE'},
        {id: 'DATE_LANG', title: 'DATE_LANG'},
        {id: 'TIMEZONE', title: 'TIMEZONE'},
    ]
});

const records = [
    {
      TYPE: 'task', 
      CONTENT: 'Course Name',
      PRIORITY: 4,
      INDENT: 1, 
      AUTHOR: '', 
      RESPONSIBLE: '', 
      DATE: '', 
      DATE_LANG: 'en', 
      TIMEZONE: 'Europe/Kiev'
    }
];

const writeRecord = (name, isLecture) => {
    const indent = isLecture ? 3 : 2;

    records.push({
          TYPE: 'task',  
          CONTENT: name, 
          PRIORITY: 4, 
          INDENT: indent, 
          AUTHOR: '', 
          RESPONSIBLE: '',
          DATE: '', 
          DATE_LANG: 'en', 
          TIMEZONE: 'Europe/Kiev'
    });
}

const content = data.results;

for (const chapter of content) {
  writeRecord(chapter.title, chapter._class !== 'chapter');
}

csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
