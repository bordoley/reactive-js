[@reactive-js/ix](README.md)

# @reactive-js/ix

## Index

### Enumerations

* [ConsumeRequestType](enums/consumerequesttype.md)

### Interfaces

* [AsyncEnumerableLike](interfaces/asyncenumerablelike.md)
* [AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)
* [AsyncEnumeratorLike](interfaces/asyncenumeratorlike.md)
* [AsyncEnumeratorResourceLike](interfaces/asyncenumeratorresourcelike.md)
* [ContinueRequestLike](interfaces/continuerequestlike.md)
* [DoneRequestLike](interfaces/donerequestlike.md)
* [StateUpdaterLike](interfaces/stateupdaterlike.md)

### Type aliases

* [ConsumeRequest](README.md#consumerequest)

### Functions

* [consume](README.md#const-consume)
* [consumeAsync](README.md#const-consumeasync)
* [createActionReducer](README.md#const-createactionreducer)
* [createAsyncEnumerator](README.md#const-createasyncenumerator)
* [createStateStore](README.md#const-createstatestore)
* [empty](README.md#const-empty)
* [fromArray](README.md#const-fromarray)
* [fromIterable](README.md#const-fromiterable)
* [generate](README.md#const-generate)
* [identity](README.md#const-identity)
* [lift](README.md#lift)
* [liftReq](README.md#liftreq)
* [toStateStore](README.md#const-tostatestore)

## Type aliases

###  ConsumeRequest

Ƭ **ConsumeRequest**: *[ContinueRequestLike](interfaces/continuerequestlike.md)‹TReq, TAcc› | [DoneRequestLike](interfaces/donerequestlike.md)‹TAcc›*

## Functions

### `Const` consume

▸ **consume**<**TReq**, **TSrc**, **TAcc**>(`consumer`: function, `initial`: function): *OperatorLike‹[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, TSrc›, ObservableLike‹TAcc››*

**Type parameters:**

▪ **TReq**

▪ **TSrc**

▪ **TAcc**

**Parameters:**

▪ **consumer**: *function*

▸ (`acc`: TAcc, `next`: TSrc): *[ConsumeRequest](README.md#consumerequest)‹TReq, TAcc›*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | TSrc |

▪ **initial**: *function*

▸ (): *[ConsumeRequest](README.md#consumerequest)‹TReq, TAcc›*

**Returns:** *OperatorLike‹[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, TSrc›, ObservableLike‹TAcc››*

___

### `Const` consumeAsync

▸ **consumeAsync**<**TReq**, **TSrc**, **TAcc**>(`consumer`: function, `initial`: function): *OperatorLike‹[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, TSrc›, ObservableLike‹TAcc››*

**Type parameters:**

▪ **TReq**

▪ **TSrc**

▪ **TAcc**

**Parameters:**

▪ **consumer**: *function*

▸ (`acc`: TAcc, `next`: TSrc): *ObservableLike‹[ConsumeRequest](README.md#consumerequest)‹TReq, TAcc››*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | TSrc |

▪ **initial**: *function*

▸ (): *[ConsumeRequest](README.md#consumerequest)‹TReq, TAcc›*

**Returns:** *OperatorLike‹[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, TSrc›, ObservableLike‹TAcc››*

___

### `Const` createActionReducer

▸ **createActionReducer**<**TAction**, **T**>(`reducer`: function, `initialState`: function, `equals?`: undefined | function): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TAction, T›*

Returns a new `AsyncEnumerableLike` instance that applies an accumulator function
over the notified actions, emitting each intermediate result.

**Type parameters:**

▪ **TAction**

▪ **T**

**Parameters:**

▪ **reducer**: *function*

The accumulator function called on each notified action.

▸ (`state`: T, `action`: TAction): *T*

**Parameters:**

Name | Type |
------ | ------ |
`state` | T |
`action` | TAction |

▪ **initialState**: *function*

The initial accumulation value.

▸ (): *T*

▪`Optional`  **equals**: *undefined | function*

Optional equality function that is used to compare
if a state value is distinct from the previous one.

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TAction, T›*

___

### `Const` createAsyncEnumerator

▸ **createAsyncEnumerator**<**TReq**, **T**>(`operator`: ObservableOperatorLike‹TReq, T›, `scheduler`: SchedulerLike, `replayCount`: number): *[AsyncEnumeratorResourceLike](interfaces/asyncenumeratorresourcelike.md)‹TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`operator` | ObservableOperatorLike‹TReq, T› | - | - |
`scheduler` | SchedulerLike | - | - |
`replayCount` | number | 0 |   |

**Returns:** *[AsyncEnumeratorResourceLike](interfaces/asyncenumeratorresourcelike.md)‹TReq, T›*

___

### `Const` createStateStore

▸ **createStateStore**<**T**>(`initialState`: function, `equals?`: undefined | function): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹[StateUpdaterLike](interfaces/stateupdaterlike.md)‹T›, T›*

Returns a new `AsyncEnumerableLike` instance that stores state which can
be updated by notifying the instance with a `StateUpdaterLike` that computes a
new state based upon the previous state.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **initialState**: *function*

The initial accumulation value.

▸ (): *T*

▪`Optional`  **equals**: *undefined | function*

Optional equality function that is used to compare
if a state value is distinct from the previous one.

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹[StateUpdaterLike](interfaces/stateupdaterlike.md)‹T›, T›*

___

### `Const` empty

▸ **empty**<**TReq**, **T**>(): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, T›*

Returns an empty `AsyncEnumerableLike` that always returns
a disposed `AsyncEnumeratorLike` instance.

**Type parameters:**

▪ **TReq**

▪ **T**

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, T›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`values`: keyof T[]): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹number | void, T›*

Returns an `AsyncEnumerableLike` from the provided array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | keyof T[] | The array.  |

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹number | void, T›*

___

### `Const` fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹number | void, T›*

Returns an `AsyncEnumerableLike` from the provided iterable.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› |   |

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹number | void, T›*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: function, `initialValue`: function): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹number | void, T›*

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

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹number | void, T›*

___

### `Const` identity

▸ **identity**<**T**>(): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹T, T›*

Returns an `AsyncEnumerableLike` that publishes it's notifications.

**Type parameters:**

▪ **T**

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹T, T›*

___

###  lift

▸ **lift**<**TReq**, **TA**, **TB**>(`op`: ObservableOperatorLike‹TA, TB›): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReq, TA, TReq, TB›*

**Type parameters:**

▪ **TReq**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`op` | ObservableOperatorLike‹TA, TB› |

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReq, TA, TReq, TB›*

___

###  liftReq

▸ **liftReq**<**TReqA**, **TReqB**, **T**>(`op`: AsyncEnumeratorRequestOperatorLike‹TReqA, TReqB›): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReqA, T, TReqB, T›*

**Type parameters:**

▪ **TReqA**

▪ **TReqB**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`op` | AsyncEnumeratorRequestOperatorLike‹TReqA, TReqB› |

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹TReqA, T, TReqB, T›*

___

### `Const` toStateStore

▸ **toStateStore**<**T**>(`initialState`: function, `equals?`: undefined | function): *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹T, T, [StateUpdaterLike](interfaces/stateupdaterlike.md)‹T›, T›*

Converts an `AsyncEnumerableLike<T, T>` to an `AsyncEnumerableLike<StateUpdaterLike<T>, T>`.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **initialState**: *function*

Factory function to generate the initial state.

▸ (): *T*

▪`Optional`  **equals**: *undefined | function*

Optional equality function that is used to compare
if a state value is distinct from the previous one.

**Returns:** *[AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)‹T, T, [StateUpdaterLike](interfaces/stateupdaterlike.md)‹T›, T›*
