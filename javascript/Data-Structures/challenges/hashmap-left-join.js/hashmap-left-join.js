'Use strict';
function joinLeft(table1, table2) {
  let output = [];
  if (!table1 || !table2) {
    return ('please insert parameters,table1 and table2');
  }
  if (table1.table.length === 0 || table2.table.length === 0) {
    throw new Error('empty table');
  }
  for (let i = 0; i < table1.table.length; i++) {
    if (table1.table[i]) {
      output.push(Object.entries(table1.table[i].head.value)[0]);
    }
  }
  for (let i = 0; i < table2.table.length; i++) {
    if (table2.table[i]) {
      for (let j = 0; j < output.length; j++) {

        if (output[j].includes(Object.keys(table2.table[i].head.value)[0])) {

          output[j].push(Object.values(table2.table[i].head.value)[0]);
        }
      }
    }
  }
  for (let i = 0; i < output.length; i++) {
    if (output[i].length < 3) {
      output[i].push(null);
    }
  }
  return output;
}
module.exports = joinLeft;
