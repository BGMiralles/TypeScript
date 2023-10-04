type Hair = "castaño" | "rubio" | 'moreno';

interface User {
  name: string;
  hair: Hair;
}
let myObj0: User = { 
    name: "John", 
    hair: "castaño" 
}; // ok

let myObj1: User = { 
    name: "John", 
    hair: "rubio" 
}; // ok

let myObj2: User = { 
    name: "John", 
    hair: "moreno" 
}; // Error
