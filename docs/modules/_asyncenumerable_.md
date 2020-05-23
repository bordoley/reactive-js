[undefined - vundefined](../README.md) › ["asyncEnumerable"](_asyncenumerable_.md)

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
* [done](_asyncenumerable_.md#const-done)
* [fromArray](_asyncenumerable_.md#const-fromarray)
* [fromEnumerable](_asyncenumerable_.md#const-fromenumerable)
* [fromIterable](_asyncenumerable_.md#const-fromiterable)
* [generate](_asyncenumerable_.md#const-generate)
* [notify](_asyncenumerable_.md#const-notify)

## Type aliases

###  AsyncConsumer

Ƭ **AsyncConsumer**: *[Function2](_functions_.md#function2)‹TAcc, T, [ObservableLike](../interfaces/_observable_.observablelike.md)‹[ConsumeRequest](_asyncenumerable_.md#consumerequest)‹TAcc›››*

___

###  ConsumeRequest

Ƭ **ConsumeRequest**: *object | object*

___

###  Consumer

Ƭ **Consumer**: *[Function2](_functions_.md#function2)‹TAcc, T, [ConsumeRequest](_asyncenumerable_.md#consumerequest)‹TAcc››*

## Functions

### `Const` consume

▸ **consume**<**T**, **TAcc**>(`consumer`: [Consumer](_asyncenumerable_.md#consumer)‹T, TAcc›, `initial`: [Factory](_functions_.md#factory)‹TAcc›): *[Function1](_functions_.md#function1)‹[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`consumer` | [Consumer](_asyncenumerable_.md#consumer)‹T, TAcc› |
`initial` | [Factory](_functions_.md#factory)‹TAcc› |

**Returns:** *[Function1](_functions_.md#function1)‹[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

___

### `Const` consumeAsync

▸ **consumeAsync**<**T**, **TAcc**>(`consumer`: [AsyncConsumer](_asyncenumerable_.md#asyncconsumer)‹T, TAcc›, `initial`: [Factory](_functions_.md#factory)‹TAcc›): *[Function1](_functions_.md#function1)‹[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`consumer` | [AsyncConsumer](_asyncenumerable_.md#asyncconsumer)‹T, TAcc› |
`initial` | [Factory](_functions_.md#factory)‹TAcc› |

**Returns:** *[Function1](_functions_.md#function1)‹[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

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

▸ **fromArray**<**T**>(`__namedParameters`: object): *[Function1](_functions_.md#function1)‹keyof T[], [AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T››*

Returns an `AsyncEnumerableLike` from the provided array.

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= { startIndex: 0 }

Name | Type |
------ | ------ |
`startIndex` | number |

**Returns:** *[Function1](_functions_.md#function1)‹keyof T[], [AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T››*

___

### `Const` fromEnumerable

▸ **fromEnumerable**<**T**>(): *[Function1](_functions_.md#function1)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, [AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T››*

Returns an `AsyncEnumerableLike` from the provided iterable.

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, [AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T››*

___

### `Const` fromIterable

▸ **fromIterable**<**T**>(): *[Function1](_functions_.md#function1)‹Iterable‹T›, [AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T››*

Returns an `AsyncEnumerableLike` from the provided iterable.

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹Iterable‹T›, [AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T››*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: [Updater](_functions_.md#updater)‹T›, `initialValue`: [Factory](_functions_.md#factory)‹T›): *[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T›*

Generates an `AsyncEnumerableLike` sequence from a generator function
that is applied to an accumulator value.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`generator` | [Updater](_functions_.md#updater)‹T› | The generator function. |
`initialValue` | [Factory](_functions_.md#factory)‹T› | Factory function to generate the initial accumulator.  |

**Returns:** *[AsyncEnumerableLike](../interfaces/_asyncenumerable_.asyncenumerablelike.md)‹T›*

___

### `Const` notify

▸ **notify**<**TAcc**>(`acc`: TAcc): *[ConsumeRequest](_asyncenumerable_.md#consumerequest)‹TAcc›*

**Type parameters:**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |

**Returns:** *[ConsumeRequest](_asyncenumerable_.md#consumerequest)‹TAcc›*
