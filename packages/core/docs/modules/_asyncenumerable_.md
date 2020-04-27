[@reactive-js/core - v0.0.37](../README.md) › ["asyncEnumerable"](_asyncenumerable_.md)

# Module: "asyncEnumerable"

## Index

### Enumerations

* [ReducerRequestType](../enums/_asyncenumerable_.reducerrequesttype.md)

### Interfaces

* [AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)

### Type aliases

* [ContinueRequest](_asyncenumerable_.md#continuerequest)
* [DoneRequest](_asyncenumerable_.md#donerequest)
* [ReducerRequest](_asyncenumerable_.md#reducerrequest)

### Functions

* [fromArray](_asyncenumerable_.md#const-fromarray)
* [fromIterable](_asyncenumerable_.md#const-fromiterable)
* [generate](_asyncenumerable_.md#const-generate)
* [reduce](_asyncenumerable_.md#const-reduce)
* [reduceAsync](_asyncenumerable_.md#const-reduceasync)

## Type aliases

###  ContinueRequest

Ƭ **ContinueRequest**: *object*

#### Type declaration:

* **acc**: *TAcc*

* **type**: *[Continue](../enums/_asyncenumerable_.reducerrequesttype.md#continue)*

___

###  DoneRequest

Ƭ **DoneRequest**: *object*

#### Type declaration:

* **acc**: *TAcc*

* **type**: *[Done](../enums/_asyncenumerable_.reducerrequesttype.md#done)*

___

###  ReducerRequest

Ƭ **ReducerRequest**: *[ContinueRequest](_asyncenumerable_.md#continuerequest)‹TAcc› | [DoneRequest](_asyncenumerable_.md#donerequest)‹TAcc›*

## Functions

### `Const` fromArray

▸ **fromArray**<**T**>(`values`: keyof T[]): *[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T›*

Returns an `AsyncEnumerableLike` from the provided array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | keyof T[] | The array.  |

**Returns:** *[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T›*

___

### `Const` fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›): *[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T›*

Returns an `AsyncEnumerableLike` from the provided iterable.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› |   |

**Returns:** *[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T›*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: function, `initialValue`: function): *[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T›*

Generates an `AsyncEnumerableLike` sequence from a generator function
that is applied to an accumulator value.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **generator**: *function*

The generator function.

▸ (`acc`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | T |

▪ **initialValue**: *function*

Factory function to generate the initial accumulator.

▸ (): *T*

**Returns:** *[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T›*

___

### `Const` reduce

▸ **reduce**<**TSrc**, **TAcc**>(`reducer`: function, `initial`: function): *[Operator](_functions_.md#operator)‹[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹TSrc›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

**Type parameters:**

▪ **TSrc**

▪ **TAcc**

**Parameters:**

▪ **reducer**: *function*

▸ (`acc`: TAcc, `next`: TSrc): *[ReducerRequest](_asyncenumerable_.md#reducerrequest)‹TAcc›*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | TSrc |

▪ **initial**: *function*

▸ (): *TAcc*

**Returns:** *[Operator](_functions_.md#operator)‹[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹TSrc›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

___

### `Const` reduceAsync

▸ **reduceAsync**<**TSrc**, **TAcc**>(`reducer`: function, `initial`: function): *[Operator](_functions_.md#operator)‹[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹TSrc›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

**Type parameters:**

▪ **TSrc**

▪ **TAcc**

**Parameters:**

▪ **reducer**: *function*

▸ (`acc`: TAcc, `next`: TSrc): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[ReducerRequest](_asyncenumerable_.md#reducerrequest)‹TAcc››*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | TSrc |

▪ **initial**: *function*

▸ (): *TAcc*

**Returns:** *[Operator](_functions_.md#operator)‹[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹TSrc›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*
