# What is Functional Programming?

Functional programming has become a really hot topic in the JavaScript world. Just a few years ago, few JavaScript programmers even knew what functional programming is, but every large application codebase I’ve seen in the past 3 years makes heavy use of functional programming ideas.

**Functional programming** (often abbreviated FP) is the process of building software by composing **pure functions**, avoiding **shared state**, **mutable data**, and **side-effects**. Functional programming is declarative rather than imperative, and application state flows through pure functions. Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects.

Functional code tends to be more concise, more predictable, and easier to test than imperative or object oriented code — but if you’re unfamiliar with it and the common patterns associated with it, functional code can also seem a lot more dense, and the related literature can be impenetrable to newcomers.

The hardest part is wrapping your head around all the unfamiliar vocabulary. There are a lot of ideas in the innocent looking definition above which all need to be understood before you can begin to grasp the meaning of functional programming:

- Pure functions
- Function composition
- Avoid shared state
- Avoid mutating state
- Avoid side effects

## Pure functions

A **pure function** is a function which:

- Given the same inputs, always returns the same output, and
- Has no side-effects

> A dead giveaway that a function is impure is if it makes sense to call it without using its return value. For pure functions, that’s a noop. -- Eric Elliot

## Function composition

**Function composition** is the process of combining two or more functions in order to produce a new function or perform some computation. Understanding function composition is an important step towards understanding how software is constructed using the functional programming.

## Avoid shared state

**Shared state** is any variable, object, or memory space that exists in a shared scope, or as the property of an object being passed between scopes. The problem with shared state is that in order to understand the effects of a function, you have to know the entire history of every shared variable that the function uses or affects. When you avoid shared state, the timing and order of function calls don’t change the result of calling the function. With pure functions, given the same input, you’ll always get the same output. This makes function calls completely independent of other function calls, which can radically simplify changes and refactoring.

## Avoid mutating state

An **immutable** object is an object that can’t be modified after it’s created. Conversely, a **mutable** object is any object which can be modified after it’s created. Immutability is a central concept of functional programming because without it, the data flow in your program is lossy. State history is abandoned, and strange bugs can creep into your software.

## Avoid side effects

A **side effect** is any application state change that is observable outside the called function other than its return value. Side effects include:

- Modifying any external variable or object property (e.g., a global variable, or a variable in the parent function scope chain)
- Logging to the console
- Writing to the screen
- Writing to a file
- Writing to the network
- Triggering any external process
- Calling any other functions with side-effects

Side effects are mostly avoided in functional programming, which makes the effects of a program much easier to understand, and much easier to test.

## Conclusion

Functional programming favors:

- Pure functions instead of shared state & side effects
- Immutability over mutable data
- Function composition over imperative flow control
- Lots of generic, reusable utilities that use higher order functions to act on many data types instead of methods that only operate on their colocated data
- Declarative rather than imperative code (what to do, rather than how to do it)
- Expressions over statements
- Containers & higher order functions over ad-hoc polymorphism

Thank you [Eric Elliot](https://medium.com/@_ericelliott) for the content of this post.
