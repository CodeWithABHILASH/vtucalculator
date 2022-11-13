function range(n) {
  if (n >= 90) return 10;
  else if (n >= 80 && n < 90) return 9;
  else if (n >= 70 && n < 80) return 8;
  else if (n >= 60 && n < 70) return 7;
  else if (n >= 50 && n < 60) return 6;
  else if (n >= 45 && n < 50) return 5;
  else if (n >= 40 && n < 45) return 5;
  else return 0;
}

function utility(res, n) {
  let sum = 0;
  for (let i of res) {
    sum = sum + i;
  }
  return parseFloat(sum / n);
}

function cgpa(array) {
  //filtering values
  let arr = array.filter((i) => {
    return i != "";
  });

  //type conersion to float

  let i = 0;
  let res = arr.map((e) => {
    i++;
    return parseFloat(e);
  });
  //calulating cgpa
  let cgpa = utility(res, i);
  return cgpa.toFixed(2);
}


function percentage(sgpa)
{
  return ((sgpa-0.75)*10).toFixed(2);
}
function Firstyear(a) {

  var sum = (a[0] * 4) + (a[1] * 4) + (a[2] * 3) + (a[3] * 3) + (a[4] * 3) + (a[5] * 1) + (a[6] * 1) + (a[7] * 1);

  return (sum / 20).toFixed(2);
}

function SecondYear(a)
{
  var sum = (a[0] * 3) + (a[1] * 4) + (a[2] * 3) + (a[3] * 3) + (a[4] * 3) + (a[5] * 3) + (a[6] * 2) + (a[7] * 2)+(a[8] * 1);

  return (sum / 24).toFixed(2);
}

function sem5(a)
{
  var sum = (a[0] * 3) + (a[1] * 4) + (a[2] * 4) + (a[3] * 3) + (a[4] * 3) + (a[5] * 3) + (a[6] * 2) + (a[7] * 2)+(a[8] * 1);

  return (sum / 25).toFixed(2); 
}
function sem6(a)
{
  var sum = (a[0] * 4) + (a[1] * 4) + (a[2] * 4) + (a[3] * 3) + (a[4] * 3) + (a[5] * 2) + (a[6] * 2) + (a[7] * 2);

  return (sum / 24).toFixed(2); 
}

function sem7tech(a)
{
  var sum = (a[0] * 4) + (a[1] * 4) + (a[2] * 3) + (a[3] * 3) + (a[4] * 3) + (a[5] * 2) + (a[6] * 1);

  return (sum / 20).toFixed(2); 
}

function sem7core(a)
{
  var sum = (a[0] * 3) + (a[1] * 3) + (a[2] * 3) + (a[3] * 3) + (a[4] * 3) + (a[5] * 2) + (a[6] * 2) + (a[7] * 1) ;

  return (sum / 19).toFixed(2); 
}

function sem8(a)
{
  var sum = (a[0] * 3) + (a[1] * 3) + (a[2] * 8) + (a[3] * 1) + (a[4] * 3)  ;

  return (sum / 18).toFixed(2); 
}
module.exports = { range,percentage,Firstyear,SecondYear,sem5,sem6,sem7core,sem7tech,sem8 ,cgpa };
