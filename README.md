# Type 'string' is not assignable to type 'number' in TypeScript

This repository demonstrates a common type error in TypeScript where a function expecting a number receives a string.  The error message will indicate 'Type 'string' is not assignable to type 'number'.  This usually arises from unexpected string inputs, incorrect type definitions or implicit type coercion.

## Bug

The `bug.ts` file contains a simple TypeScript program with two functions: `add` and `subtract`, both expecting numeric arguments. However, if these functions receive string arguments, a type error will occur.

## Solution

The `bugSolution.ts` file shows how to resolve the type error using several methods: type assertion, type guarding, or input validation.  The most robust method involves preventing string inputs using input validation or ensuring consistent number types across the codebase.