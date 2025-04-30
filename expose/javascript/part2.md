# Part 2

## 1.

The following value is printed at line 12:

> 3

This is because "i" was declared as a var, so it is within scope throughout the discountPrices function. Although line 12 is outside of the for block where i was declared, it is still within the same function, so no error occurs. The value of "i" is 3 because it is incremented until the for block condition returns false (which occurs when 3 < 3, as the length of "prices" is 3 in this example). 

## 2.

The following value is printed at line 13:

> 150

This is because discountedPrice will be assigned to:

```js
prices[2] * (1 - discount)

=>

300 * (0.5)

= 150
```

and since discountedPrice is a var, it is still within scope outside of the for block, so no error occurs.

## 3.

The following value is printed at line 14:

> 150

finalPrice is also a var, so it is not block scoped, and will retain the last value it had before the for block ended, which is 150. 

## 4.

The function will return:

> [ 50, 100, 150 ]

in this specific instance. Generally, the function takes a list of items, reduces their value by the percentage passed to "discount", and then returns those discounted values as a new list. 

## 5.

The following error occurs at line 12:

```js
[...]\expose\javascript\part2-question5to.js:12
    console.log(i);
                ^

ReferenceError: i is not defined
```

This is becaue "i" is declared with let, which block-scopes "i" to the for block in which it is declared. "i" is not defined outside of this for block.

## 6.

The following error occurs at line 13:

```js
[...]\expose\javascript\part2-question5to.js:13
    console.log(discountedPrice);
                ^

ReferenceError: discountedPrice is not defined
```

This occurs for the same reason as the previous question, i.e., discountedPrice is not within scope and therefore is not defined outside of the for block.

## 7.

The following value will be printed at line 14:

> 150

Unlike discountedPrice, which was declared within the for block, finalPrice was declared at the top of the function, so it is within scope throughout the function, and holds its value even after the for block ends.

## 8.

The function will return:

> [ 50, 100, 150 ]

in this specific instance. The function is identical in function to its counterpart using var.

## 9.

The following error occurs at line 11:

```js
[...]\expose\javascript\part2-question9to.js:11
    console.log(i);
                ^

ReferenceError: i is not defined
```

An error occurs because "i" is not defined outside of the for block because it was declared within the for block with the keyword "let".

## 10.

The following value will be printed at line 12:

> 3

No error occurs because length is never reassigned, and because it is within scope for the entire length of the function. 

## 11.

The function will return:

> [ 50, 100, 150 ]

in this specific instance. The function is identical in function to the other two versions using var and let. 

## 12.

A: student.name  
B: student["Grad Year"]  
C: student.greeting()  
D: student["Favorite Teacher"].name  
E: student.courseLoad[0]  

## 13.

A: 32  
'+' results in string concatenation if one operand is a string

B: 1  
'-' doesn't have a concatenation equivalent, so it converts the string to a number instead

C: 3  
null is converted to 0

D: 3null  
Same as A... null is converted a string and concatenated to '3'

E: 4  
true is converted to 1

F: 0  
Both are converted to 0

G: 3undefined  
One operand is a string, so concatenation occurs and undefined is converted into a string

H: NaN  
undefined can't be converted into a number, so it turns into NaN. 3 - NaN is also NaN.

## 14.

A: true  
'2' is converted to the number 2, resulting in true

B: false  
No conversion occurs. Instead, the two strings are compared lexicographically, resulting in false

C: true  
'2' is converted to the number 2, and 2 == 2 resolves to true

D: false  
'===' does not convert types, and will always be false if the two values being compared don't have the same type

E: false  
true is converted to 1, and 1 == 2 is false

F: true  
Boolean(2) becomes true, and true === true resolves to true. 2 is explicitly cast using Boolean(), so the strict equality operator sees the same type on both sides

## 15.

'==' will convert values of different types, so that two different types could result in true.

'===' is the "strict equality operator" and will always resolve to false if the the types of the two values being compared aren't the same. Type conversion does not occur automaically with '==='.

## 16

[Code here](part2-question16.js)

## 17.

The function will return:

> [ 2, 4, 6 ]

Each value in the array is passed to doSomething(), multiplied by 2 within doSomething, and then returned back to the calling function (i.e., modifyArray) where it is pushed into newArr. 

## 18

[Code here](part2-question18.js)

## 19

The given code outputs:

```js
1
4
3
2
```

