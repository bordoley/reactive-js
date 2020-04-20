[@reactive-js/async-enumerable - v0.0.35](README.md)

# @reactive-js/async-enumerable - v0.0.35

## Index

### Enumerations

* [ReducerRequestType](enums/reducerrequesttype.md)
* [StreamEventType](enums/streameventtype.md)
* [StreamMode](enums/streammode.md)

### Interfaces

* [AsyncEnumerableLike](interfaces/asyncenumerablelike.md)
* [AsyncEnumeratorLike](interfaces/asyncenumeratorlike.md)
* [StreamLike](interfaces/streamlike.md)
* [StreamSinkLike](interfaces/streamsinklike.md)

### Type aliases

* [AsyncEnumerableOperator](README.md#asyncenumerableoperator)
* [ContinueRequest](README.md#continuerequest)
* [DoneRequest](README.md#donerequest)
* [ReducerRequest](README.md#reducerrequest)
* [StateUpdater](README.md#stateupdater)
* [StreamEvent](README.md#streamevent)
* [StreamOperator](README.md#streamoperator)

### Functions

* [createActionReducer](README.md#const-createactionreducer)
* [createAsyncEnumerable](README.md#const-createasyncenumerable)
* [createStateStore](README.md#const-createstatestore)
* [empty](README.md#const-empty)
* [emptyStream](README.md#const-emptystream)
* [fromArray](README.md#const-fromarray)
* [fromIterable](README.md#const-fromiterable)
* [fromObservableStream](README.md#const-fromobservablestream)
* [generate](README.md#const-generate)
* [generateStream](README.md#const-generatestream)
* [identity](README.md#const-identity)
* [lift](README.md#const-lift)
* [liftReq](README.md#const-liftreq)
* [map](README.md#const-map)
* [mapStream](README.md#const-mapstream)
* [ofValueStream](README.md#const-ofvaluestream)
* [reduce](README.md#const-reduce)
* [reduceAsync](README.md#const-reduceasync)
* [sink](README.md#const-sink)
* [toStateStore](README.md#const-tostatestore)

## Type aliases

###  AsyncEnumerableOperator

Ƭ **AsyncEnumerableOperator**: *function*

#### Type declaration:

▸ (`enumerable`: [AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TSrcReq, TSrc›): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, T›*

**Parameters:**

Name | Type |
------ | ------ |
`enumerable` | [AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TSrcReq, TSrc› |

___

###  ContinueRequest

Ƭ **ContinueRequest**: *object*

#### Type declaration:

___

###  DoneRequest

Ƭ **DoneRequest**: *object*

#### Type declaration:

___

###  ReducerRequest

Ƭ **ReducerRequest**: *[ContinueRequest](README.md#continuerequest)‹TAcc› | [DoneRequest](README.md#donerequest)‹TAcc›*

___

###  StateUpdater

Ƭ **StateUpdater**: *function*

#### Type declaration:

▸ (`oldState`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`oldState` | T |

___

###  StreamEvent

Ƭ **StreamEvent**: *object | object*

___

###  StreamOperator

Ƭ **StreamOperator**: *Operator‹[StreamLike](interfaces/streamlike.md)‹TA›, [StreamLike](interfaces/streamlike.md)‹TB››*

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

▸ **createAsyncEnumerable**<**TReq**, **TData**>(`op`: ObservableOperator‹TReq, TData›): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, TData›*

**Type parameters:**

▪ **TReq**

▪ **TData**

**Parameters:**

Name | Type |
------ | ------ |
`op` | ObservableOperator‹TReq, TData› |

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, TData›*

___

### `Const` createStateStore

▸ **createStateStore**<**T**>(`initialState`: function, `equals?`: undefined | function): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹[StateUpdater](README.md#stateupdater)‹T›, T›*

Returns a new `AsyncEnumerableLike` instance that stores state which can
be updated by notifying the instance with a `StateUpdater` that computes a
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

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹[StateUpdater](README.md#stateupdater)‹T›, T›*

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

### `Const` emptyStream

▸ **emptyStream**<**T**>(): *[StreamLike](interfaces/streamlike.md)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[StreamLike](interfaces/streamlike.md)‹T›*

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

### `Const` fromObservableStream

▸ **fromObservableStream**<**T**>(`observable`: ObservableLike‹T›): *[StreamLike](interfaces/streamlike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observable` | ObservableLike‹T› |

**Returns:** *[StreamLike](interfaces/streamlike.md)‹T›*

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

### `Const` generateStream

▸ **generateStream**<**T**>(`generator`: function, `initialValue`: function, `delay`: number): *[StreamLike](interfaces/streamlike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **generator**: *function*

▸ (`acc`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | T |

▪ **initialValue**: *function*

▸ (): *T*

▪`Default value`  **delay**: *number*= 0

**Returns:** *[StreamLike](interfaces/streamlike.md)‹T›*

___

### `Const` identity

▸ **identity**<**T**>(): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹T, T›*

Returns an `AsyncEnumerableLike` that publishes it's notifications.

**Type parameters:**

▪ **T**

**Returns:** *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹T, T›*

___

### `Const` lift

▸ **lift**<**TReq**, **TA**, **TB**>(`op`: ObservableOperator‹TA, TB›): *[AsyncEnumerableOperator](README.md#asyncenumerableoperator)‹TReq, TA, TReq, TB›*

**Type parameters:**

▪ **TReq**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`op` | ObservableOperator‹TA, TB› |

**Returns:** *[AsyncEnumerableOperator](README.md#asyncenumerableoperator)‹TReq, TA, TReq, TB›*

___

### `Const` liftReq

▸ **liftReq**<**TReqA**, **TReqB**, **T**>(`op`: function): *[AsyncEnumerableOperator](README.md#asyncenumerableoperator)‹TReqA, T, TReqB, T›*

**Type parameters:**

▪ **TReqA**

▪ **TReqB**

▪ **T**

**Parameters:**

▪ **op**: *function*

▸ (`req`: TReqB): *TReqA*

**Parameters:**

Name | Type |
------ | ------ |
`req` | TReqB |

**Returns:** *[AsyncEnumerableOperator](README.md#asyncenumerableoperator)‹TReqA, T, TReqB, T›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: function): *function*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`v`: TA): *TB*

**Parameters:**

Name | Type |
------ | ------ |
`v` | TA |

**Returns:** *function*

▸ (`enumerable`: [AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TSrcReq, TSrc›): *[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, T›*

**Parameters:**

Name | Type |
------ | ------ |
`enumerable` | [AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TSrcReq, TSrc› |

___

### `Const` mapStream

▸ **mapStream**<**TA**, **TB**>(`mapper`: function): *Operator‹[StreamLike](interfaces/streamlike.md)‹TA›, [StreamLike](interfaces/streamlike.md)‹TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`v`: TA): *TB*

**Parameters:**

Name | Type |
------ | ------ |
`v` | TA |

**Returns:** *Operator‹[StreamLike](interfaces/streamlike.md)‹TA›, [StreamLike](interfaces/streamlike.md)‹TB››*

___

### `Const` ofValueStream

▸ **ofValueStream**<**T**>(`value`: T): *[StreamLike](interfaces/streamlike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[StreamLike](interfaces/streamlike.md)‹T›*

___

### `Const` reduce

▸ **reduce**<**TSrc**, **TAcc**>(`reducer`: function, `initial`: function): *Operator‹[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹void, TSrc›, ObservableLike‹TAcc››*

**Type parameters:**

▪ **TSrc**

▪ **TAcc**

**Parameters:**

▪ **reducer**: *function*

▸ (`acc`: TAcc, `next`: TSrc): *[ReducerRequest](README.md#reducerrequest)‹TAcc›*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | TSrc |

▪ **initial**: *function*

▸ (): *TAcc*

**Returns:** *Operator‹[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹void, TSrc›, ObservableLike‹TAcc››*

___

### `Const` reduceAsync

▸ **reduceAsync**<**TSrc**, **TAcc**>(`reducer`: function, `initial`: function): *Operator‹[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹void, TSrc›, ObservableLike‹TAcc››*

**Type parameters:**

▪ **TSrc**

▪ **TAcc**

**Parameters:**

▪ **reducer**: *function*

▸ (`acc`: TAcc, `next`: TSrc): *ObservableLike‹[ReducerRequest](README.md#reducerrequest)‹TAcc››*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | TSrc |

▪ **initial**: *function*

▸ (): *TAcc*

**Returns:** *Operator‹[AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹void, TSrc›, ObservableLike‹TAcc››*

___

### `Const` sink

▸ **sink**<**TReq**, **T**>(`src`: [AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, T›, `dest`: [AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹T, TReq›): *ObservableLike‹void›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹TReq, T› |
`dest` | [AsyncEnumerableLike](interfaces/asyncenumerablelike.md)‹T, TReq› |

**Returns:** *ObservableLike‹void›*

___

### `Const` toStateStore

▸ **toStateStore**<**T**>(`initialState`: function, `equals?`: undefined | function): *[AsyncEnumerableOperator](README.md#asyncenumerableoperator)‹T, T, [StateUpdater](README.md#stateupdater)‹T›, T›*

Converts an `AsyncEnumerableLike<T, T>` to an `AsyncEnumerableLike<StateUpdater<T>, T>`.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **initialState**: *function*

Factory function to generate the initial state.

▸ (): *T*

▪`Optional`  **equals**: *undefined | function*

Optional equality function that is used to compare
if a state value is distinct from the previous one.

**Returns:** *[AsyncEnumerableOperator](README.md#asyncenumerableoperator)‹T, T, [StateUpdater](README.md#stateupdater)‹T›, T›*
