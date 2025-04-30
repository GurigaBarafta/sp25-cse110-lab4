# Part 1

## 1.

Line 9 prints:

> values added:  20  

## 2.

Line 13 prints:

> final result:  20

## 3.

You should not use var because it leads to naming conflicts and scoping issues. Block level variables are desirable, so var has been deprecated and let / const are now preferred.

## 4.

Line 9 prints:

> values added:  20

## 5.

Line 13 results in the following error:

```js
[...]\expose\javascript\part1-question4to5.js:13
    console.log('final result: ', result);
                                  ^

ReferenceError: result is not defined
```

This error occurs because "result" is declared with the "let" keyword, which limits its scope to the current block. Line 13 is outside of the if{} block in which result was declared, so it is undefined.

## 6.

Line 9 is never reached as the following error initally occurs at line 7:

```js
[...]\expose\javascript\part1-question6to7.js:7
        result = num1 + num2;
               ^

TypeError: Assignment to constant variable.
```

This error occurs because "result" is declared with the "const" keyword, so it cannot be assigned again. Line 7 attempts to assign num1 + num2 to result, which results in the error.

## 7.

Line 13 is never reached for the same reason as question 6. Although, even *if* line 7 didn't result in an error, line 13 would, as "result" was declared inside the if{} block. Since line 13 is outside of that block's scope, "result" is undefined at that point.
