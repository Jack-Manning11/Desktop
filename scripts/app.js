const fs = require(['fs']);
const buttonYes = document.querySelector('.yesB');
const buttonNo = document.querySelector('.noB');
const answer = document.querySelector('.answer');

buttonYes.addEventListener('click', triggerYes);
//buttonNo.addEventListener('click', triggerNo);

function triggerYes(){
  console.log('yes');
  jsonReader('./scripts/customer.json', (err, data) => {
    if(err) {
      console.log(err);
    } else {
      data.number_answer += 1;
      data.number_agree += 1;
      fs.writeFile('./scripts/customer.json', JSON.stringify(data, null, 2), err => {
        if(err) {
          console.log(err);
        }
      });
    }
    answer.textContent = Yes;
  })
}

function jsonReader(filePath, cb) {
  fs.readFile(filePath, 'utf-8', (err, fileData) => {
    if(err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
}
