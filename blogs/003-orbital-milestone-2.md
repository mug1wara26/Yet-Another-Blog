---
title: Orbital Milestone 2
date: 2025-06-30T03:46:55+08:00
hidden: true
---

Knights Of The Lambda Calculus (KOTLC) is an educational game to teach players
the basics of [Lambda Calculus](https://en.wikipedia.org/wiki/Lambda_calculus).
Our game lets players have a sense of how such a simple system can be used to
compute anything. The game features a intuitive layout for visualising and
constructing lambda expressions, along with a carefully curated set of levels
that guide players through the lambda calculus.

Our target audience is to anyone that enjoys puzzle games, and are interested in
learning more about Lambda Calculus, they do not need to be experienced in
programming at all.

The game will be distributed as a binary and also be available on the web. We
will support Windows and Linux, and the web version will be published on the
itch.io platform.

## What is the Lambda Calculus?

Before we explain the game, it would be good to have a brief understanding of
Lambda Calculus, The lambda calculus works off function abstractions and
applications, if you have done any programming you should be able to understand
it.

A lambda expression is constructed from lambda terms, where a term is defined as
one of the following:

1. $x$, a variable representing a lambda parameter
2. $(\lambda x. M)$ a lambda, who's parameter is represented by the bound
   variable $x$, returning $M$ (another lambda term), upon application on this
   lambda. Examples of lambdas include $(\lambda x.x)$ (the identity) or
   $(\lambda x. (\lambda y. x))$ (the
   [K combinator](https://en.wikipedia.org/wiki/SKI_combinator_calculus)).
3. $(M\ N)$, an application of $N$ on $M$, replacing the bound variables in $M$
   with $N$

Applications in Lambda Calculus are like function applications in conventional
programming language. For example, the function $\lambda x.x$ is like a pure
unary function that just returns its input argument

```Python
def foo(x):
  return x
```

An application on this function replaces all identifiers `x` with the value it
was applied with, this is known as beta reduction.

Applications in the Lambda Calculus are assumed to be left associative, meaning
$M\ N\ P$ is assumed to represent $((M\ N)\ P)$. Parenthesis can be used to
remove ambiguity, and must be used for expressions like $M\ (N\ P)$

Lambda expressions can be easily written in other programming languages, for
example, the lambda expression for the
[S combinator](https://en.wikipedia.org/wiki/SKI_combinator_calculus) is
$\lambda x. \lambda y. \lambda z. x(z)(y(z))$.

Python:

```py
S = lambda x: lambda y: lambda z: x(z)(y(z))
```

JavaScript:

```js
const S = (x) => (y) => (z) => x(z)(y(z));
```

The S combinator can be thought of as a three argument
[curried](https://en.wikipedia.org/wiki/Currying) function that takes in $x,y,z$
and takes the application of $z$ on $y$, (represented as $y(z)$), and applies it
on the application of $z$ on $x$, (represented as $x(z)$).

Believe it or not, the Lambda Calculus can be used to compute any computable
function, as it can be used to simulate a Turing machine. In simple words, the
Lambda Calculus can theoretically run Minecraft! (However the resulting lambda
expression would likely be terabytes in size)

## Evaluating Lambda expressions

Evaluating a lambda expression is simple. We just keep performing applications
until there are no more applications left to perform. The resulting Lambda
expression is said to be in
[beta normal form](https://en.wikipedia.org/wiki/Beta_normal_form)

For example, given the Lambda expression:
$$(\lambda a. \lambda b. a(b)(\lambda x. \lambda y. y))(\lambda x. \lambda y. x)(\lambda x. \lambda y. y)$$
It eventually beta reduces to $\lambda x. \lambda y. y$. (This expression can be
seen as performing a logical AND on two booleans, true and false, using
[Church Encoding](https://en.wikipedia.org/wiki/Church_encoding))

## The game

I first started conceptualizing an idea for a Lambda Calculus game when I was
studying it and found it really fun to derive operations on
[Church Encodings](https://en.wikipedia.org/wiki/Church_encoding) like Church
Booleans and Church Numerals. I wanted others to experience the same fun I had,
but in a more approachable way.

We ultimately decided on a puzzle game where users are tasked to come up with
lambda expressions that operate on some data type encoded in the lambda
calculus. Each chapter will be dedicated to a specific encoding, earlier
chapters will use the aforementioned Church Encodings, but later chapters could
introduce custom encodings for more complex mathematical structures, like the
rationals or reals, or even sets and groups.

The layout of a level is inspired by other games like
[NandGame](https://nandgame.com/),
[Alligator Eggs](https://worrydream.com/AlligatorEggs/), and a
[certain CS1101S exercise](https://aloysius.dev/modrevs/AY2425S1/cs1101s.html#functional-expressionism).

## Implemented features

1. A **moveable canvas** that houses the expressions that users will create
2. A **click and drop snapping system** to create Lambda expressions and modify
   them. Visual indicators appear for where the user can click on.
3. A **title screen** for users to access tutorial, levels, and settings.
4. A **level selection screen**, displaying chapters and their accompanying
   levels. Each chapter comes with a theme and a set of levels, each level
   building on the previous one.
5. A **tutorial** explaining the UI of the game, and gives a brief introduction
   to Lambda Calculus
6. A **step by step evaluator**, that performs an application on the lambda
   expression for each step, until the expression is in beta normal form.
7. An **animation system**, that animates each step of the evaluation. Players
   can visually see which Lambdas are being applied to, and which Variable is
   being substituted.
8. Multiple **UX enhancements**, such as lambda elements being colored by their
   depth, using RYGOBIV rainbow colors. Variables share the same color with the
   Lambda they are associated with.
9. A **compiler** that transforms strings representing Lambda expressions into
   the elements in the game. The compiler tokenizes and parses the string into
   an
   [abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree),
   that is then optimized and converted into our game elements.
10. Partial implementations of a **level loader**, that takes in a JSON file
    that represents a level, and builds the level for the user to play.

## Implementation details

Our whole game is built using [Godot](https://godotengine.org/). It is a free
and open-source web engine that is also cross platform, allowing us to support
Windows, Linux and the web. Our app is fully programmed with
[GDScript](https://docs.godotengine.org/en/4.4/tutorials/scripting/gdscript/gdscript_basics.html),
a high-level, Object Oriented, and interpreted language with a similar syntax to
Python, making it easy to develop with. An explanation of how Godot works is out
of scope for this readme, you can read about an introduction to Godot on
[this page](https://docs.godotengine.org/en/stable/getting_started/introduction/index.html)

### UI

### The evaluator

When evaluating Lambda expressions, there are many different strategies. The
strategy we implemented is
[call by name](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_name).
This strategy only evaluates expressions when they are needed during
application, so arguments passed into a Lambda are not evaluated at first.

In our implementation, we have three types of elements on the canvas.

### Animations

### Level System

## Software Engineering Practices

## Planned features

1. Testing answers - A second nonvisual evaluator for quick testing of multiple
   inputs to verify answers. This will be used in the background when the user
   submits their solution to thoroughly check that their solution is correct.
   Think of this as "private" test cases, while the level itself will have a
   "public" test case that is run with our step by step evaluator.
2. Level design - Plan the design of chapters and levels.
3. Playground - Allows users to play around with their own Lambda expressions,
   as well as create custom expressions.
4. Custom Levels - We will design our own level file format. Users can then
   create their own levels with a built in level editor and export it to a file.
   They can then share this file with other people.
5. More SFX and VFX to give the game some visual flair
6. Unit tests using Godot Unit Tests, as well as E2E testing.
7. Github actions for CI/CD, where we can automatically build the game and
   publish it on the github page, as well as on itch.io
8. Github actions for linting and testing, where we run a linter and test suite
   for every PR, which must run successfully before being allowed to merge.

## Planned levels

### Chapter 1: Church Booleans

1. And Gate
2. Or Gate
3. Not Gate
4. Nand Gate
5. Xor Gate
6. Half adder (Maybe optional)

### Chapter 2: Church Numerals Part 1

1. Zero
2. Succ
3. Five (Using repeated applications on succ)
4. Plus
5. Mult

### Chapter 3: Pairs and lists

1. Pair
2. Fst and Snd
3. Empty list and is empty
4. Cons
5. Concat
6. Map
7. Filter
8. Fold left

### Chapter 4: Church Numeral Part 2

1. Pred (Using the pair definition of pred, can be split up into multiple
   levels)
2. Minus
3. Less than or equals
4. Equals
5. Division
6. Remainder

### Chapter 5: Rationals

1. Factorial with Y combinator (We wont actually make them create the Y
   combinator, we will just explain the Y combinator to them and make them
   implement factorial)
2. Mod
3. GCD
4. Rationals ($R = \lambda a. \lambda b. pair\ a\ b$, where a represents the
   numerator and b represents the denominator)
5. Simplify rational using GCD
6. Convert to mixed fraction
7. Multiplication
8. Division

### Chapter 6: Sets

A set will be defined as a function that returns true if its argument is in the
set, our set will work over the church numerals

1. Empty and single ton set
2. Insert
3. Member
4. Union
5. Intersection
6. Is equal
7. Difference

### Chapter 7: Groups

Levels undecided
