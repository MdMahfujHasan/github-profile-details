const str = `${created_at}`;
const result1 = str.split('T');
console.log(result1[0]);
const result2 = result1[1].split('Z');
console.log(result2[0]);
console.log(`Account created at ${result2[0]}, ${result1[0]}`);

const str2 = 'Md Mahfuj Hasan';
const result = (str2.split(' ')).join('');
console.log(result);