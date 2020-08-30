## Course Content 
I am using this README to Document the learning process of <b>TypeScript</b> Language following [this course](https://www.youtube.com/watch?v=BwuLxPH8IDs) from Academind.
# types 

- `number` type
- `string` type
- `boolean` type
- `object` type

you can use type to define what type of parmaters are used into a certain function 

<b>example:</b> 

`function DoSomething(A: number , B: number, c: String){`
  `some code`
`}`

<b>Good practice using Types</b>
`const N = 5;` right here is will be bad practice to tell the compiler that N is a number it will know what is the type of N from itself so `const N: number = 5;` is in fact considered bad practice <b>X</b>.

but when the paramter is not assigned to anything then it will be good practice `let N: number;` 

From here comes the core strength of <b>TypeScript</b>
checking types and yelling at us if we use them incorrectly.


<b>specialized objects</b>
One of the best practices to use objects in <b>TypeScript</b>
is like this:
`const person: {
    name: string,
    age: number
}= {
    name: 'your name',
    age : 10
}`