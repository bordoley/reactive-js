[@reactive-js/core - v0.0.37](../README.md) › ["async-enumerable"](_async_enumerable_.md)

# Module: "async-enumerable"

## Index

### Enumerations

* [ReducerRequestType](../enums/_async_enumerable_.reducerrequesttype.md)
* [StreamEventType](../enums/_async_enumerable_.streameventtype.md)
* [StreamMode](../enums/_async_enumerable_.streammode.md)

### Interfaces

* [AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)
* [AsyncEnumeratorLike](../interfaces/_async_enumerable_.asyncenumeratorlike.md)
* [StreamLike](../interfaces/_async_enumerable_.streamlike.md)
* [StreamSinkLike](../interfaces/_async_enumerable_.streamsinklike.md)

### Type aliases

* [AsyncEnumerableOperator](_async_enumerable_.md#asyncenumerableoperator)
* [ContinueRequest](_async_enumerable_.md#continuerequest)
* [DoneRequest](_async_enumerable_.md#donerequest)
* [ReducerRequest](_async_enumerable_.md#reducerrequest)
* [StateUpdater](_async_enumerable_.md#stateupdater)
* [StreamEvent](_async_enumerable_.md#streamevent)
* [StreamOperator](_async_enumerable_.md#streamoperator)

### Functions

* [createActionReducer](_async_enumerable_.md#const-createactionreducer)
* [createAsyncEnumerable](_async_enumerable_.md#const-createasyncenumerable)
* [createStateStore](_async_enumerable_.md#const-createstatestore)
* [empty](_async_enumerable_.md#const-empty)
* [emptyStream](_async_enumerable_.md#const-emptystream)
* [fromArray](_async_enumerable_.md#const-fromarray)
* [fromIterable](_async_enumerable_.md#const-fromiterable)
* [fromObservableStream](_async_enumerable_.md#const-fromobservablestream)
* [generate](_async_enumerable_.md#const-generate)
* [generateStream](_async_enumerable_.md#const-generatestream)
* [identity](_async_enumerable_.md#const-identity)
* [lift](_async_enumerable_.md#const-lift)
* [liftReq](_async_enumerable_.md#const-liftreq)
* [map](_async_enumerable_.md#const-map)
* [mapStream](_async_enumerable_.md#const-mapstream)
* [ofValueStream](_async_enumerable_.md#const-ofvaluestream)
* [reduce](_async_enumerable_.md#const-reduce)
* [reduceAsync](_async_enumerable_.md#const-reduceasync)
* [sink](_async_enumerable_.md#const-sink)
* [toStateStore](_async_enumerable_.md#const-tostatestore)

## Type aliases

###  AsyncEnumerableOperator

Ƭ **AsyncEnumerableOperator**: *function*

#### Type declaration:

▸ (`enumerable`: [AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹TSrcReq, TSrc›): *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹TReq, T›*

**Parameters:**

Name | Type |
------ | ------ |
`enumerable` | [AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹TSrcReq, TSrc› |

___

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

Ƭ **StreamOperator**: *[Operator](_pipe_.md#operator)‹[StreamLike](../interfaces/_async_enumerable_.streamlike.md)‹TA›, [StreamLike](../interfaces/_async_enumerable_.streamlike.md)‹TB››*

## Functions

### `Const` createActionReducer

▸ **createActionReducer**<**TAction**, **T**>(`reducer`: function, `initialState`: function, `equals?`: function): *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹TAction, T›*

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

▪`Optional`  **equals**: *function*

Optional equality function that is used to compare
if a state value is distinct from the previous one.

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹TAction, T›*

___

### `Const` createAsyncEnumerable

▸ **createAsyncEnumerable**<**TReq**, **TData**>(`op`: [ObservableOperator](_observable_.md#observableoperator)‹TReq, TData›): *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹TReq, TData›*

**Type parameters:**

▪ **TReq**

▪ **TData**

**Parameters:**

Name | Type |
------ | ------ |
`op` | [ObservableOperator](_observable_.md#observableoperator)‹TReq, TData› |

**Returns:** *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹TReq, TData›*

___

### `Const` createStateStore

▸ **createStateStore**<**T**>(`initialState`: function, `equals?`: function): *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹[StateUpdater](_async_enumerable_.md#stateupdater)‹T›, T›*

Returns a new `AsyncEnumerableLike` instance that stores state which can
be updated by notifying the instance with a `StateUpdater` that computes a
new state based upon the previous state.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **initialState**: *function*

The initial accumulation value.

▸ (): *T*

▪`Optional`  **equals**: *function*

Optional equality function that is used to compare
if a state value is distinct from the previous one.

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹[StateUpdater](_async_enumerable_.md#stateupdater)‹T›, T›*

___

### `Const` empty

▸ **empty**<**TReq**, **T**>(): *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹TReq, T›*

Returns an empty `AsyncEnumerableLike` that always returns
a disposed `AsyncEnumeratorLike` instance.

**Type parameters:**

▪ **TReq**

▪ **T**

**Returns:** *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹TReq, T›*

___

### `Const` emptyStream

▸ **emptyStream**<**T**>(): *[StreamLike](../interfaces/_async_enumerable_.streamlike.md)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[StreamLike](../interfaces/_async_enumerable_.streamlike.md)‹T›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`values`: keyof T[]): *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹void, T›*

Returns an `AsyncEnumerableLike` from the provided array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | keyof T[] | The array.  |

**Returns:** *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹void, T›*

___

### `Const` fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›): *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹void, T›*

Returns an `AsyncEnumerableLike` from the provided iterable.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› |   |

**Returns:** *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹void, T›*

___

### `Const` fromObservableStream

▸ **fromObservableStream**<**T**>(`observable`: [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›): *[StreamLike](../interfaces/_async_enumerable_.streamlike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`observable` | [ObservableLike](../interfaces/_observable_.observablelike.md)‹T› |

**Returns:** *[StreamLike](../interfaces/_async_enumerable_.streamlike.md)‹T›*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: function, `initialValue`: function): *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹void, T›*

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

**Returns:** *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹void, T›*

___

### `Const` generateStream

▸ **generateStream**<**T**>(`generator`: function, `initialValue`: function, `delay`: number): *[StreamLike](../interfaces/_async_enumerable_.streamlike.md)‹T›*

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

**Returns:** *[StreamLike](../interfaces/_async_enumerable_.streamlike.md)‹T›*

___

### `Const` identity

▸ **identity**<**T**>(): *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹T, T›*

Returns an `AsyncEnumerableLike` that publishes it's notifications.

**Type parameters:**

▪ **T**

**Returns:** *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹T, T›*

___

### `Const` lift

▸ **lift**<**TReq**, **TA**, **TB**>(`op`: [ObservableOperator](_observable_.md#observableoperator)‹TA, TB›): *[AsyncEnumerableOperator](_async_enumerable_.md#asyncenumerableoperator)‹TReq, TA, TReq, TB›*

**Type parameters:**

▪ **TReq**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`op` | [ObservableOperator](_observable_.md#observableoperator)‹TA, TB› |

**Returns:** *[AsyncEnumerableOperator](_async_enumerable_.md#asyncenumerableoperator)‹TReq, TA, TReq, TB›*

___

### `Const` liftReq

▸ **liftReq**<**TReqA**, **TReqB**, **T**>(`op`: function): *[AsyncEnumerableOperator](_async_enumerable_.md#asyncenumerableoperator)‹TReqA, T, TReqB, T›*

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

**Returns:** *[AsyncEnumerableOperator](_async_enumerable_.md#asyncenumerableoperator)‹TReqA, T, TReqB, T›*

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

▸ (`enumerable`: [AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹TSrcReq, TSrc›): *[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹TReq, T›*

**Parameters:**

Name | Type |
------ | ------ |
`enumerable` | [AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹TSrcReq, TSrc› |

___

### `Const` mapStream

▸ **mapStream**<**TA**, **TB**>(`mapper`: function): *[Operator](_pipe_.md#operator)‹[StreamLike](../interfaces/_async_enumerable_.streamlike.md)‹TA›, [StreamLike](../interfaces/_async_enumerable_.streamlike.md)‹TB››*

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

**Returns:** *[Operator](_pipe_.md#operator)‹[StreamLike](../interfaces/_async_enumerable_.streamlike.md)‹TA›, [StreamLike](../interfaces/_async_enumerable_.streamlike.md)‹TB››*

___

### `Const` ofValueStream

▸ **ofValueStream**<**T**>(`value`: T): *[StreamLike](../interfaces/_async_enumerable_.streamlike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[StreamLike](../interfaces/_async_enumerable_.streamlike.md)‹T›*

___

### `Const` reduce

▸ **reduce**<**TSrc**, **TAcc**>(`reducer`: function, `initial`: function): *[Operator](_pipe_.md#operator)‹[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹void, TSrc›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

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

**Returns:** *[Operator](_pipe_.md#operator)‹[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹void, TSrc›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

___

### `Const` reduceAsync

▸ **reduceAsync**<**TSrc**, **TAcc**>(`reducer`: function, `initial`: function): *[Operator](_pipe_.md#operator)‹[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹void, TSrc›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

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

**Returns:** *[Operator](_pipe_.md#operator)‹[AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹void, TSrc›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹TAcc››*

___

### `Const` sink

▸ **sink**<**TReq**, **T**>(`src`: [AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹TReq, T›, `dest`: [AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹T, TReq›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹void›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹TReq, T› |
`dest` | [AsyncEnumerableLike](../interfaces/_async_enumerable_.asyncenumerablelike.md)‹T, TReq› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹void›*

___

### `Const` toStateStore

▸ **toStateStore**<**T**>(`initialState`: function, `equals?`: function): *[AsyncEnumerableOperator](_async_enumerable_.md#asyncenumerableoperator)‹T, T, [StateUpdater](_async_enumerable_.md#stateupdater)‹T›, T›*

Converts an `AsyncEnumerableLike<T, T>` to an `AsyncEnumerableLike<StateUpdater<T>, T>`.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **initialState**: *function*

Factory function to generate the initial state.

▸ (): *T*

▪`Optional`  **equals**: *function*

Optional equality function that is used to compare
if a state value is distinct from the previous one.

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *[AsyncEnumerableOperator](_async_enumerable_.md#asyncenumerableoperator)‹T, T, [StateUpdater](_async_enumerable_.md#stateupdater)‹T›, T›*
