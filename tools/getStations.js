t = document.getElementsByTagName('table')[4];
o = t.getElementsByTagName('option');
res = [];
for (var i = 0; i < o.length; i++) {
  s = o[i].innerHTML.split('(')[1].split(')')[0];
  res.push(s);
}
console.log(res.join('\n'));
