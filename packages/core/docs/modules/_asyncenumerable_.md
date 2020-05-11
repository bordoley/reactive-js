[@reactive-js/core - v0.0.37](../README.md) › ["asyncEnumerable"](_asyncenumerable_.md)

# Module: "asyncEnumerable"

## Index

### Enumerations

* [ReducerRequestType](../enums/_asyncenumerable_.reducerrequesttype.md)

### Interfaces

* [AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)

### Type aliases

* [ReducerRequest](_asyncenumerable_.md#reducerrequest)

### Functions

* [continue_](_asyncenumerable_.md#const-continue_)
* [done](_asyncenumerable_.md#const-done)
* [fromArray](_asyncenumerable_.md#const-fromarray)
* [fromEnumerable](_asyncenumerable_.md#const-fromenumerable)
* [fromIterable](_asyncenumerable_.md#const-fromiterable)
* [generate](_asyncenumerable_.md#const-generate)
* [reduce](_asyncenumerable_.md#const-reduce)
* [reduceAsync](_asyncenumerable_.md#const-reduceasync)

## Type aliases

###  ReducerRequest

Ƭ **ReducerRequest**: *object | object*

## Functions

### `Const` continue_

▸ **continue_**<**TAcc**>(`acc`: TAcc): *[ReducerRequest](_asyncenumerable_.md#reducerrequest)‹TAcc›*

**Type parameters:**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |

**Returns:** *[ReducerRequest](_asyncenumerable_.md#reducerrequest)‹TAcc›*

___

### `Const` done

▸ **done**<**TAcc**>(`acc`: TAcc): *[ReducerRequest](_asyncenumerable_.md#reducerrequest)‹TAcc›*

**Type parameters:**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |

**Returns:** *[ReducerRequest](_asyncenumerable_.md#reducerrequest)‹TAcc›*

___

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

### `Const` fromEnumerable

▸ **fromEnumerable**<**T**>(`enumerable`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›): *[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T›*

Returns an `AsyncEnumerableLike` from the provided iterable.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`enumerable` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |

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

▸ **generate**<**T**>(`generator`: [Generator](_functions_.md#generator)‹T›, `initialValue`: [Factory](_functions_.md#factory)‹T›): *[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T›*

Generates an `AsyncEnumerableLike` sequence from a generator function
that is applied to an accumulator value.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`generator` | [Generator](_functions_.md#generator)‹T› | The generator function. |
`initialValue` | [Factory](_functions_.md#factory)‹T› | Factory function to generate the initial accumulator.  |

**Returns:** *[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T›*

___

### `Const` reduce

▸ **reduce**<**TSrc**, **TAcc**>(`reducer`: function, `initial`: [Factory](_functions_.md#factory)‹TAcc›): *[Operator](_functions_.md#operator)‹[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹TSrc›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

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

▪ **initial**: *[Factory](_functions_.md#factory)‹TAcc›*

**Returns:** *[Operator](_functions_.md#operator)‹[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹TSrc›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

___

### `Const` reduceAsync

▸ **reduceAsync**<**TSrc**, **TAcc**>(`reducer`: function, `initial`: [Factory](_functions_.md#factory)‹TAcc›): *[Operator](_functions_.md#operator)‹[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹TSrc›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

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

▪ **initial**: *[Factory](_functions_.md#factory)‹TAcc›*

**Returns:** *[Operator](_functions_.md#operator)‹[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹TSrc›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*
