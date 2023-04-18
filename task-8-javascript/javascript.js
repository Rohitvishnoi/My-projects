function trigg() {
  let n = document.querySelector("#numbs");
  let Split = document.querySelector("#split");
  let splitContainer = document.querySelector("#split-container");

  const number = Number(n.value);
  const splits = Number(Split.value);
  if (number < splits) {
    var msg = document.getElementById('split-container');
    msg.innerHTML = '<h2 style="color:red;">Number of splits cannot be more than Number</h2>';
    return;
  }
  if (isNaN(number) || isNaN(splits) || splits < 1) {
    var msg = document.getElementById('split-container');
    msg.innerHTML = '<h2 style="color:red;">Invalid Input!!</h2>';

    return;
  }

  const splitSize = Math.floor(number / splits);
  const remainder = number % splits;

  splitContainer.innerHTML = '';

  for (let i = 0; i < splits; i++) {
    const splitBox = document.createElement('div');
    splitBox.className = 'split-box split-box-' + (i % 5 + 1);
    splitBox.style.width = i < remainder ? splitSize + 1 + '0px' : splitSize + '0px';
    splitBox.textContent = i < remainder ? splitSize + 1 : splitSize;
    splitContainer.appendChild(splitBox);
  }
}
function clearscr() {
  let clr = document.getElementById('split-container');
  let clrtxt = document.querySelectorAll('input[type="number"]');

  for (let i = 0; i < clrtxt.length; i++) {
    clrtxt[i].value = '';
  }
  clr.innerHTML = " ";
}