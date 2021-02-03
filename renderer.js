let homeBtn = document.getElementByClass("home");
let header1 = document.querySelector("h1");

function sendToPython() {
  let { PythonShell } = require('python-shell');

   let options = {
    mode: 'text'
    };

  PythonShell.run('main.py', null, function (err, results) {
    if (err) throw err;
    console.log('main.py finished.');
    // результаты - это массив, состоящий из сообщений, собранных во время выполнения
    console.log('response: ', results);
  });
  PythonShell.on('message', function (message){
  console.log(message);
  });
}

function onclick(){
    console.log("hello world")
  fetch("http://localhost:5000/home").then((data)=>{
      return data.text();
  }).then((text)=>{
    console.log("data: ", text);
    header1.textContent = text;
  }).catch(e=>{
    console.log(e);
  })
}

sendToPython();

homeBtn.addEventListener('click', ()=>{
    onclick();
});
homeBtn.dispatchEvent(new Event('click'));