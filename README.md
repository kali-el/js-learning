# JavaScript Learning

A collection of small JavaScript exercises and browser examples for practicing
core language features and DOM manipulation. Each folder is an independent
example rather than part of a single application.

## Repository contents

| Path | What it covers |
| --- | --- |
| `camelize/` | Convert hyphen-separated strings to camel case |
| `copySorted/` | Sort a copy of an array without changing the original |
| `desendingSort/` | Sort an array in descending order |
| `filterRange/` | Select values within an inclusive range without mutating the array |
| `filterRangeInPlace/` | Remove values outside an inclusive range from an array |
| `shuffle/` | Shuffle an array using the Fisher–Yates algorithm |
| `unique/` | Remove duplicate values while preserving their first occurrence |
| `DOM/` | Basic DOM selection and click-event example |
| `DOM/MDN/` | Interactive shopping list with add and delete controls |

Some exercise folders also contain `test.js` files with Mocha/Chai-style test
cases. There is no package manifest or test runner configured in this repository,
so those tests need a compatible environment with the functions and assertion
helpers loaded.

## Trying the examples

For the browser examples, open `DOM/index.html` or `DOM/MDN/index.html` in a
browser. The shopping-list example lets you add items and remove them with their
Delete buttons.

Some of the standalone JavaScript exercises can be run with Node.js, for example:

```sh
node shuffle/shuffle.js
node unique/unique.js
```

These are learning snippets, so some files demonstrate behavior by logging
results while others only define a function.
