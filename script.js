const form = document.querySelector('form');
function toggleInches() {
    const notation = document.getElementById('hunits').value;
    const inchesInput = document.getElementById('inches');
    
    if (notation === 'ft') {
        inchesInput.style.display = 'inline';
    } else {
        inchesInput.style.display = 'none';
        inchesInput.value = '';
    }
}
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const hunit=document.getElementById('hunits').value;
  const wunit=document.getElementById('wunits').value;
  let inchesInput=parseInt(document.getElementById('inches').value);

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    if(wunit==='lbs'){
        weight=weight/2.2;
        console.log(weight);
    }
    if(hunit==='ft'){
        height= (height*12)+inchesInput;
        height*=2.54;
        height=(height*height)/10000;
    }
    else{
        height=(height*height)/10000;
    }
    const bmi = (weight/height).toFixed(2);
    if (bmi < 18.6) results.innerHTML = `<span>${bmi}<br/>Under Weight</span>`;
    else if (bmi > 18.5 && bmi < 25)
      results.innerHTML = `<span>${bmi}<br/>Normal Range</span>`;
    else results.innerHTML = `<span>${bmi}<br/>Overweight</span>`;
  }
});
