[reactive-js](../README.md) › ["enumerable.test"](_enumerable_test_.md)

# Module: "enumerable.test"

## Index

### Variables

* [tests](_enumerable_test_.md#const-tests)

## Variables

### `Const` tests

• **tests**: *object* = describe(
  "enumerable",
  test(
    "toIterable",
    defer(
      [1, 2, 3],
      fromArray(),
      toIterable(),
      fromIterable(),
      toRunnable(),
      toArray(),
      expectArrayEquals([1, 2, 3]),
    ),
  ),
  test(
    "zip",
    defer(
      [1, 2, 3],
      fromArray(),
      zipWith(fromArray<number>()([1, 2, 3, 4, 5])),
      map(([a, b]) => a + b),
      toRunnable(),
      toArray(),
      expectArrayEquals([2, 4, 6]),
    ),
  ),
  createMonadTests(Enumerable),
)

#### Type declaration:

* **name**: *string*

* **tests**: *keyof TestGroup[]*

* **type**: *Describe*
