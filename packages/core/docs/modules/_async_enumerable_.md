[@reactive-js/core - v0.0.37](../README.md) › ["async-enumerable"](_async_enumerable_.md)

# Module: "async-enumerable"

## Index

### Enumerations

* [ReducerRequestType](../enums/_async_enumerable_.reducerrequesttype.md)

### Interfaces

* [AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)

### Type aliases

* [ContinueRequest](_async_enumerable_.md#continuerequest)
* [DoneRequest](_async_enumerable_.md#donerequest)
* [ReducerRequest](_async_enumerable_.md#reducerrequest)

### Functions

* [fromArray](_async_enumerable_.md#const-fromarray)
* [fromIterable](_async_enumerable_.md#const-fromiterable)
* [generate](_async_enumerable_.md#const-generate)
* [reduce](_async_enumerable_.md#const-reduce)
* [reduceAsync](_async_enumerable_.md#const-reduceasync)

## Type aliases

###  ContinueRequest

Ƭ **ContinueRequest**: *object*

#### Type declaration:

* **acc**: *TAcc*

* **type**: *[Continue](../enums/_async_enumerable_.reducerrequesttype.md#continue)*

___

###  DoneRequest

Ƭ **DoneRequest**: *object*

#### Type declaration:

* **acc**: *TAcc*

* **type**: *[Done](../enums/_async_enumerable_.reducerrequesttype.md#done)*

___

###  ReducerRequest

Ƭ **ReducerRequest**: *[ContinueRequest](_async_enumerable_.md#continuerequest)‹TAcc› | [DoneRequest](_async_enumerable_.md#donerequest)‹TAcc›*

## Functions

### `Const` fromArray

▸ **fromArray**<**T**>(`values`: keyof T[]): *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹T›*

Returns an `AsyncEnumerableLike` from the provided array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | keyof T[] | The array.  |

**Returns:** *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹T›*

___

### `Const` fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›): *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹T›*

Returns an `AsyncEnumerableLike` from the provided iterable.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› |   |

**Returns:** *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹T›*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: function, `initialValue`: function): *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹T›*

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

**Returns:** *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹T›*

___

### `Const` reduce

▸ **reduce**<**TSrc**, **TAcc**>(`reducer`: function, `initial`: function): *[Operator](_pipe_.md#operator)‹[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹TSrc›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

**Type parameters:**

▪ **TSrc**

▪ **TAcc**

**Parameters:**

▪ **reducer**: *function*

▸ (`acc`: TAcc, `next`: TSrc): *[ReducerRequest](_async_enumerable_.md#reducerrequest)‹TAcc›*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | TSrc |

▪ **initial**: *function*

▸ (): *TAcc*

**Returns:** *[Operator](_pipe_.md#operator)‹[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹TSrc›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

___

### `Const` reduceAsync

▸ **reduceAsync**<**TSrc**, **TAcc**>(`reducer`: function, `initial`: function): *[Operator](_pipe_.md#operator)‹[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹TSrc›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

**Type parameters:**

▪ **TSrc**

▪ **TAcc**

**Parameters:**

▪ **reducer**: *function*

▸ (`acc`: TAcc, `next`: TSrc): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[ReducerRequest](_async_enumerable_.md#reducerrequest)‹TAcc››*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | TSrc |

▪ **initial**: *function*

▸ (): *TAcc*

**Returns:** *[Operator](_pipe_.md#operator)‹[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹TSrc›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*
