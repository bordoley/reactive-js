[@reactive-js/core - v0.0.37](../README.md) › ["asyncEnumerable"](_asyncenumerable_.md)

# Module: "asyncEnumerable"

## Index

### Enumerations

* [ConsumeRequestType](../enums/_asyncenumerable_.consumerequesttype.md)

### Interfaces

* [AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)

### Type aliases

* [AsyncConsumer](_asyncenumerable_.md#asyncconsumer)
* [ConsumeRequest](_asyncenumerable_.md#consumerequest)
* [Consumer](_asyncenumerable_.md#consumer)

### Functions

* [consume](_asyncenumerable_.md#const-consume)
* [consumeAsync](_asyncenumerable_.md#const-consumeasync)
* [continue_](_asyncenumerable_.md#const-continue_)
* [done](_asyncenumerable_.md#const-done)
* [fromArray](_asyncenumerable_.md#const-fromarray)
* [fromEnumerable](_asyncenumerable_.md#const-fromenumerable)
* [fromIterable](_asyncenumerable_.md#const-fromiterable)
* [generate](_asyncenumerable_.md#const-generate)

## Type aliases

###  AsyncConsumer

Ƭ **AsyncConsumer**: *function*

#### Type declaration:

▸ (`acc`: TAcc, `next`: T): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[ConsumeRequest](_asyncenumerable_.md#consumerequest)‹TAcc››*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | T |

___

###  ConsumeRequest

Ƭ **ConsumeRequest**: *object | object*

___

###  Consumer

Ƭ **Consumer**: *function*

#### Type declaration:

▸ (`acc`: TAcc, `next`: T): *[ConsumeRequest](_asyncenumerable_.md#consumerequest)‹TAcc›*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | T |

## Functions

### `Const` consume

▸ **consume**<**T**, **TAcc**>(`consumer`: [Consumer](_asyncenumerable_.md#consumer)‹T, TAcc›, `initial`: [Factory](_functions_.md#factory)‹TAcc›): *[Function](_functions_.md#function)‹[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`consumer` | [Consumer](_asyncenumerable_.md#consumer)‹T, TAcc› |
`initial` | [Factory](_functions_.md#factory)‹TAcc› |

**Returns:** *[Function](_functions_.md#function)‹[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

___

### `Const` consumeAsync

▸ **consumeAsync**<**T**, **TAcc**>(`consumer`: [AsyncConsumer](_asyncenumerable_.md#asyncconsumer)‹T, TAcc›, `initial`: [Factory](_functions_.md#factory)‹TAcc›): *[Function](_functions_.md#function)‹[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`consumer` | [AsyncConsumer](_asyncenumerable_.md#asyncconsumer)‹T, TAcc› |
`initial` | [Factory](_functions_.md#factory)‹TAcc› |

**Returns:** *[Function](_functions_.md#function)‹[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

___

### `Const` continue_

▸ **continue_**<**TAcc**>(`acc`: TAcc): *[ConsumeRequest](_asyncenumerable_.md#consumerequest)‹TAcc›*

**Type parameters:**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |

**Returns:** *[ConsumeRequest](_asyncenumerable_.md#consumerequest)‹TAcc›*

___

### `Const` done

▸ **done**<**TAcc**>(`acc`: TAcc): *[ConsumeRequest](_asyncenumerable_.md#consumerequest)‹TAcc›*

**Type parameters:**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |

**Returns:** *[ConsumeRequest](_asyncenumerable_.md#consumerequest)‹TAcc›*

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
