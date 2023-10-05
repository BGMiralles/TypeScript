function Suma(num1: number, num2: number): number {
  return num1 + num2;
}

function DiHola(name: string): void {
  console.log(`Hola, ${name}`);
}

interface UserOwner{
    name:string,
    password: string,
    email: string
}

const createUser = (user: UserOwner) => {
    return user
}

let user3: UserOwner = {
    name: 'Noelia',
    password: 'adminadmin',
    email: 'noelia@noelia.com'
}

createUser(user3)