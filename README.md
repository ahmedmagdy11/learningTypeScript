## Course Content 
I am using this README to Document the learning process of <b>TypeScript</b> Language following [this course](https://www.youtube.com/watch?v=BwuLxPH8IDs) from Academind.
# types 

- `number` type
- `string` type
- `boolean` type
- `object` type
- `array` types
- `literal` types 
- `functions return` types
- `unknown` type 
you can use type to define what type of parmaters are used into a certain function 

<b>example:</b> 

`function DoSomething(A: number , B: number, c: String){`
  `some code`
`}`

<b>Good practice using Types</b><br>
`const N = 5;` right here is will be bad practice to tell the compiler that N is a number it will know what is the type of N from itself so `const N: number = 5;` is in fact considered bad practice <b>X</b>.

but when the paramter is not assigned to anything then it will be good practice `let N: number;` 

From here comes the core strength of <b>TypeScript</b>
checking types and yelling at us if we use them incorrectly.


<b>specialized objects</b> <br>

is like this:
`const person: {
    name: string,
    age: number
}= {
    name: 'your name',
    age : 10
}`.
but you don't need to write your code like this: 
for example `const person = {name:'your name'}` if you tried to access an element in the object that doesn't exist you get an error in the developemnt time.
`console.log(person.age)` you will see the error before even compiling the file which is pretty useful. 

# array types 

examples:
`let names: string[];` thats how to define an array of strings.
`let ages: number[];` you get the point by now. 
but what if you want to create an array that carry more than one type for example `['mango', 1]` here the array is carrying number and a string. you can do that by typing 
`let multi: any[];` the any type refers to multiple types the drawback is that you lose the purpose of <b>TypeScript</b>.


<b>Tuples</b>
Tuples are special type of arrays with fixed length and types for example you want to have an array with only 2 paramter the first one is always number and the second is always a string, Type casting here is consdired best practice.

`let arr :[number, string];` 
now `arr[1] = 20` gets an error or trying to manually add to the array also gets an error `arr = [1,'name','anothername']` this code returns an error in development time. 
*Note*: using push method on tuples doesn't produce any error so if i have `let arr:[number, string] = [1,'name'; 
//trying to push anything arr.push('newValue');`.
this code will not produce any type of error.

<b>enums</b>
are used to assign gloab identifiers.
example: 
`enum global_var {ADMIN='' , KEY='some key'}`. 


<b>literal types</b>
you can define literal types with using code like this
example: `const asNumber = 'as_number'` is considered a literal type cause it will never change. 

<b>Type Aliases</b>
define type Aliases is pretty easy by using the key word `type`
example:`type myNewType = number|string;` 
or can even assign it to literal types.
example: `type myNewType = 'as_number'|'as_string';`

IMO <b>literal types</b> will shine if you are using them as *flags* in your code.

<b>Return types for functions</b>.
you can declare a return type for function like this
example:
`function doSomething(n: number,s: string ):number`
`{ return n;}`.

another example of why this could be very useful is when defining a call back inside your function:
`function add(n1: number, n2: number,callBack: (result:number)=>void):number{
  return n1+n2;
}`.
a function that doesn't return anything has types `void` or `any`.

<b>Unknown type</b> 

`Unknown` type is different from `any`, it assigns the variable with the first type it's assigned to.
example:`let name: unknown; 
name = "your name";
name = 5; //will give you an error during development time` 

<b>Never type</b>
newer type rarely used, can use it if your function will never return anything, for example it `throws` an error or have infinte loop.