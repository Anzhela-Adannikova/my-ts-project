// Прості типи: any(приймає будь-яке значення), number, string, null, umderfiend
// Виведення типів

let age: number = 5;

let username: string = 'Jacob';

let isOnline: boolean = false;

// Типізація об'єктів
// Використання interface
// Опціональні (?) та readonly поля

interface Order {
  username: string;
  readonly email: string;
  total: number;
  meta?: string;
}

const order1: Order = {
  username: 'Jacob',
  email: 'j.111@mail.com',
  total: 120,
};

const order2: Order = {
  username: 'Polly',
  email: 'polly@mail.com',
  total: 100,
  meta: 'superdata',
};

interface User {
  username: string;
  isOnline: boolean;
  age: number;
}

const jacob: User = {
  username: 'Jacob',
  isOnline: true,
  age: 30,
};

const polly: User = {
  username: 'Polly',
  isOnline: true,
  age: 20,
};

// Типізація масивів: тип[] та Array<тип>
// Підказки методів та властивостей
// Типізація масиву об'єктів

const planets: string[] = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune',
];

const planets1: Array<string> = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune',
];

interface People {
  email: string;
  total: number;
}

const peoples: People[] = [
  { email: 'j.111@mail.com', total: 120 },
  { email: 'polly@mail.com', total: 100 },
  { email: 'liam.smith@mail.com', total: 200 },
  { email: 'sophia.jones@mail.com', total: 150 },
  { email: 'noah.brown@mail.com', total: 95 },
];

// Union (поєднання)
// Літеральні типи ("pending", "shipped", "delivered", "canceled")

type Status = 'pending' | 'shipped' | 'delivered' | 'canceled';

let status: Status = 'pending';

status = 'pending';

interface Buy {
  username: string;
  email: string;
  total: number;
  delivery: 'drone' | 'courier' | 'pickup';
  deliveryTime: 'morning' | 'afternoon' | 'evening';
}

// delivery: "drone", "courier", "pickup"
// deliveryTime: "morning", "afternoon", "evening"

const buy: Buy = {
  username: 'jacob',
  email: 'jacob@mail.com',
  total: 120,
  delivery: 'courier',
  deliveryTime: 'afternoon',
};

// Типізація функції
// Типізація аргументів
// Тип значення, яке повертає функція (якщо функц щось повертає - тип, не повертає - void)
// Опціональні параметри

function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): void {
  console.log('Hello ${name}');
}

greet('Jacob');

interface Student {
  studentname: string;
  age: number;
}

const students: Student[] = [
  { studentname: 'polly', age: 20 },
  { studentname: 'jacob', age: 30 },
  { studentname: 'mango', age: 25 },
];

function getStudentNames(items: Student[]): string[] {
  return items.map(item => item.studentname);
}

const names = getStudentNames(students);

function greets(studentname: string, age?: number) {
  if (age !== undefined) {
    // username, age
  } else {
    // username
  }
}

greets('polly', 15);
greets('jacob');
