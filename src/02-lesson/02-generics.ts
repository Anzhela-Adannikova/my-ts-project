// Узагальнені типи (generics)

function foo<T>(value: T) {
  console.log(value);
}

foo<number>(5);
foo<string>('hello');
foo(false);
foo([1, 5]);

interface User {
  username: string;
  age: number;
}

foo<User>({ username: 'mango', age: 5 });

/* 1 */
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([10, 20, 30]); // 10
getFirstElement<string>(['Alice', 'Bob']); // Alice
getFirstElement<User>([
  { username: 'Alice', age: 5 },
  { username: 'Bob', age: 2 },
]);

/* 2 */

function shuffle(array) {
  return array.soft(() => Math.random() - 0.5);
}

const mixedNums = shuffle([1, 2, 3, 4]);
const mixedWord = shuffle(['apple', 'banana', 'cherry']);

/* 3 */

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

saveToStorage('user', 'Jacob Peterson');
saveToStorage('click', 8);

function loadFromStorage(key) {}
