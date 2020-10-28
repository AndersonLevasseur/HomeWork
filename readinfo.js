//this is a comment
/*
This is a multi
line comment
*/
fs = require('fs')
//csv = require('csv-parser');


fs.readFile('./jobs.csv', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

/*
fs.createReadStream('./jobs.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row.job_title);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
*/