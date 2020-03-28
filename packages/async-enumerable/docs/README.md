[@reactive-js/async-enumerable](README.md)

# @reactive-js/async-enumerable

## Index

### Enumerations

* [ReducerRequestType](enums/reducerrequesttype.md)

### Interfaces

* [AsyncEnumerableLike](interfaces/asyncenumerablelike.md)
* [AsyncEnumerableOperatorLike](interfaces/asyncenumerableoperatorlike.md)
* [AsyncEnumeratorLike](interfaces/asyncenumeratorlike.md)
* [ContinueRequestLike](interfaces/continuerequestlike.md)
* [DoneRequestLike](interfaces/donerequestlike.md)
* [StateUpdaterLike](interfaces/stateupdaterlike.md)

### Type aliases

* [ReducerRequest](README.md#reducerrequest)

### Functions

* [createActionReducer](README.md#const-createactionreducer)
* [createAsyncEnumerable](README.md#const-createasyncenumerable)
* [createStateStore](README.md#const-createstatestore)
* [empty](README.md#const-empty)
* [fromArray](README.md#const-fromarray)
* [fromIterable](README.md#const-fromiterable)
* [generate](README.md#const-generate)
* [identity](README.md#const-identity)
* [lift](README.md#lift)
* [liftReq](README.md#liftreq)
* [reduce](README.md#const-reduce)
* [reduceAsync](README.md#const-reduceasync)
* [toStateStore](README.md#const-tostatestore)

## Type aliases

###  ReducerRequest

Ƭ **ReducerRequest**: *[ContinueRequestLike](interfaces/continuerequestlike.md)‹TReq, TAcc› | [DoneRequestLike](interfaces/donerequestlike.md)‹TAcc›*

## Functions

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

### `Const` createAsyncEnumerable

▸ **createAsyncEnumerable**<**TReq**, **TData**>(`op`: function): *AsyncEnumerableImpl‹TReq, TData›*

**Type parameters:**

▪ **TReq**

▪ **TData**

**Parameters:**

▪ **op**: *function*

▸ (`src`: ObservableLike‹TReq›): *ObservableLike‹TData›*

**Parameters:**

Name | Type |
------ | ------ |
`src` | ObservableLike‹TReq› |

**Returns:** *AsyncEnumerableImpl‹TReq, TData›*

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

▸ **fromArray**<**T**>(`values`: keyof T[]): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹void, T›*

Returns an `AsyncEnumerableLike` from the provided array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | keyof T[] | The array.  |

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹void, T›*

___

### `Const` fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹void, T›*

Returns an `AsyncEnumerableLike` from the provided iterable.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› |   |

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹void, T›*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: function, `initialValue`: function): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹void, T›*

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

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹void, T›*

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

### `Const` reduce

▸ **reduce**<**TReq**, **TSrc**, **TAcc**>(`reducer`: function, `initial`: function): *OperatorLike‹[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, TSrc›, ObservableLike‹TAcc››*

**Type parameters:**

▪ **TReq**

▪ **TSrc**

▪ **TAcc**

**Parameters:**

▪ **reducer**: *function*

▸ (`acc`: TAcc, `next`: TSrc): *[ReducerRequest](README.md#reducerrequest)‹TReq, TAcc›*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | TSrc |

▪ **initial**: *function*

▸ (): *[ReducerRequest](README.md#reducerrequest)‹TReq, TAcc›*

**Returns:** *OperatorLike‹[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, TSrc›, ObservableLike‹TAcc››*

___

### `Const` reduceAsync

▸ **reduceAsync**<**TReq**, **TSrc**, **TAcc**>(`reducer`: function, `initial`: function): *OperatorLike‹[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, TSrc›, ObservableLike‹TAcc››*

**Type parameters:**

▪ **TReq**

▪ **TSrc**

▪ **TAcc**

**Parameters:**

▪ **reducer**: *function*

▸ (`acc`: TAcc, `next`: TSrc): *ObservableLike‹[ReducerRequest](README.md#reducerrequest)‹TReq, TAcc››*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | TSrc |

▪ **initial**: *function*

▸ (): *[ReducerRequest](README.md#reducerrequest)‹TReq, TAcc›*

**Returns:** *OperatorLike‹[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, TSrc›, ObservableLike‹TAcc››*

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
