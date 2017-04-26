var sum = require('./modules/sum.js');
var sub = require('./modules/sub.js');
var mul = require('./modules/mul.js');
var div = require('./modules/div.js');

var total = sum.sum(30,10);
var total1 = sub.sub(50,20);
var total2 = mul.mul(30,40);
var total3 = div.div(50,10);

var sumdiv,subdiv,muldiv,ddiv;


sumdiv = document.createElement('div');
subdiv = document.createElement('div');
muldiv = document.createElement('div');
ddiv = document.createElement('div');

sumdiv.innerHTML = "SUMATION : " + total;
subdiv.innerHTML = "SUBTRATION : " + total1;
muldiv.innerHTML = "MULTIPLICATION : " + total2;
ddiv.innerHTML = "DIVISION : " + total3;


document.body.appendChild(sumdiv);
document.body.appendChild(subdiv);
document.body.appendChild(muldiv);
document.body.appendChild(ddiv);
