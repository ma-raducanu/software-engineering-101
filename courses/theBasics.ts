// Basic variables
let welcomeMessage: string = "Welcome to the TypeScript Basics Course!";
const courseName: string = "software-engineering-101";
var legacyVariable: number = 42; // avoid var in modern code, but good to know

console.log(welcomeMessage);
console.log(`Course: ${courseName}`);
console.log(`Legacy value: ${legacyVariable}`);

// Primitive types
let isActive: boolean = true;
let studentCount: number = 12;
let version: number = 1.0;
let optionalValue: string | null = null;

// Arrays
let topics: string[] = ["let", "const", "arrays", "functions"];
let scores: Array<number> = [100, 95, 87];

// Tuple
let basicTuple: [string, number] = ["lesson", 1];

// Enum
enum Difficulty {
  Beginner,
  Intermediate,
  Advanced,
}

let currentDifficulty: Difficulty = Difficulty.Beginner;

// Object type via interface
interface Student {
  id: number;
  name: string;
  enrolled: boolean;
  score?: number; // optional property
}

const student: Student = {
  id: 1,
  name: "Alex",
  enrolled: true,
};

// Function with typed params and return
function greetStudent(name: string): string {
  return `Hello, ${name}!`;
}

const message = greetStudent(student.name);
console.log(message);

// Arrow function
const add = (a: number, b: number): number => a + b;
console.log(`Add 3 + 4 = ${add(3, 4)}`);

// Union type and type narrowing
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(`String value: ${value.toUpperCase()}`);
  } else {
    console.log(`Number value: ${value.toFixed(2)}`);
  }
}

printValue("hello");
printValue(12.345);

// Looping and array methods
for (const topic of topics) {
  console.log(`Topic: ${topic}`);
}

topics.push("objects");
const upperTopics = topics.map((topic) => topic.toUpperCase());
console.log(upperTopics);

// Basic class
class Course {
  constructor(public title: string, public difficulty: Difficulty) {}

  describe() {
    return `${this.title} is ${Difficulty[this.difficulty]} level.`;
  }
}

const basicsCourse = new Course("TypeScript Basics", Difficulty.Beginner);
console.log(basicsCourse.describe());

// Type aliases and interfaces for complex shapes
interface Address {
  street: string;
  city: string;
  zipCode: string;
}

type StudentProfile = Student & {
  address: Address;
  interests: string[];
};

const studentProfile: StudentProfile = {
  id: 2,
  name: "Jamie",
  enrolled: false,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
  interests: ["coding", "reading"],
};

// Generics for reusable functions and classes
function identity<T>(value: T): T {
  return value;
}

const text = identity<string>("generic text");
const num = identity<number>(2026);

class Box<T> {
  constructor(public value: T) {}
}

const studentBox = new Box<Student>(student);
console.log(`Boxed student: ${studentBox.value.name}`);

// Promises and async/await
function getStudentAsync(id: number): Promise<Student> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Casey", enrolled: true }), 200);
  });
}

async function loadStudent(id: number) {
  const result = await getStudentAsync(id);
  console.log(`Loaded async student: ${result.name}`);
}

loadStudent(3);

// Type guards and discriminated unions
interface Admin {
  type: "admin";
  permissions: string[];
}

interface Guest {
  type: "guest";
  visitCount: number;
}

type User = Admin | Guest;

function isAdmin(user: User): user is Admin {
  return user.type === "admin";
}

function describeUser(user: User) {
  if (isAdmin(user)) {
    console.log(`Admin permissions: ${user.permissions.join(", ")}`);
  } else {
    console.log(`Guest visit count: ${user.visitCount}`);
  }
}

describeUser({ type: "admin", permissions: ["read", "write"] });

describeUser({ type: "guest", visitCount: 5 });

// keyof and utility types
type StudentKeys = keyof Student;
const key: StudentKeys = "name";

const partialStudent: Partial<Student> = { id: 4 };
const pickedStudent: Pick<Student, "id" | "name"> = { id: 5, name: "Taylor" };
const studentScores: Record<string, number> = { Alex: 95, Jamie: 88 };

// readonly, const assertions, never, and unknown
const readonlyStudent: Readonly<Student> = {
  id: 6,
  name: "Morgan",
  enrolled: true,
};

const directions = ["up", "down", "left", "right"] as const;
type Direction = typeof directions[number];

function move(direction: Direction) {
  console.log(`Moving ${direction}`);
}

move("left");

function throwError(message: string): never {
  throw new Error(message);
}

function parseUnknown(value: unknown) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return null;
}

console.log(parseUnknown("safe"));
console.log(parseUnknown(15));

// Modules note:
// In a larger project, split this file into multiple modules and use `export`/`import`
// to keep types, functions, and classes organized across files.

