[@reactive-js/core - v0.0.37](../README.md) › ["streamable"](_streamable_.md)

# Module: "streamable"

## Index

### Interfaces

* [StreamLike](../interfaces/_streamable_.streamlike.md)
* [StreamableLike](../interfaces/_streamable_.streamablelike.md)

### Type aliases

* [StreamableOperator](_streamable_.md#streamableoperator)

### Functions

* [createActionReducer](_streamable_.md#const-createactionreducer)
* [createStreamable](_streamable_.md#const-createstreamable)
* [empty](_streamable_.md#const-empty)
* [identity](_streamable_.md#const-identity)
* [lift](_streamable_.md#const-lift)
* [liftReq](_streamable_.md#const-liftreq)
* [map](_streamable_.md#const-map)
* [sink](_streamable_.md#const-sink)

## Type aliases

###  StreamableOperator

Ƭ **StreamableOperator**: *function*

#### Type declaration:

▸ (`enumerable`: [StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TSrcReq, TSrc›): *[StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TReq, T›*

**Parameters:**

Name | Type |
------ | ------ |
`enumerable` | [StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TSrcReq, TSrc› |

## Functions

### `Const` createActionReducer

▸ **createActionReducer**<**TAction**, **T**>(`reducer`: function, `initialState`: function, `equals?`: function): *[StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TAction, T›*

Returns a new `StreamableLike` instance that applies an accumulator function
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

**Returns:** *[StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TAction, T›*

___

### `Const` createStreamable

▸ **createStreamable**<**TReq**, **TData**>(`op`: [ObservableOperator](_observable_.md#observableoperator)‹TReq, TData›): *[StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TReq, TData›*

**Type parameters:**

▪ **TReq**

▪ **TData**

**Parameters:**

Name | Type |
------ | ------ |
`op` | [ObservableOperator](_observable_.md#observableoperator)‹TReq, TData› |

**Returns:** *[StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TReq, TData›*

___

### `Const` empty

▸ **empty**<**TReq**, **T**>(): *[StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TReq, T›*

Returns an empty `StreamableLike` that always returns
a disposed `StreamLike` instance.

**Type parameters:**

▪ **TReq**

▪ **T**

**Returns:** *[StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TReq, T›*

___

### `Const` identity

▸ **identity**<**T**>(): *[StreamableLike](../interfaces/_streamable_.streamablelike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Returns:** *[StreamableLike](../interfaces/_streamable_.streamablelike.md)‹T, T›*

___

### `Const` lift

▸ **lift**<**TReq**, **TA**, **TB**>(`op`: [ObservableOperator](_observable_.md#observableoperator)‹TA, TB›): *[StreamableOperator](_streamable_.md#streamableoperator)‹TReq, TA, TReq, TB›*

**Type parameters:**

▪ **TReq**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`op` | [ObservableOperator](_observable_.md#observableoperator)‹TA, TB› |

**Returns:** *[StreamableOperator](_streamable_.md#streamableoperator)‹TReq, TA, TReq, TB›*

___

### `Const` liftReq

▸ **liftReq**<**TReqA**, **TReqB**, **T**>(`op`: function): *[StreamableOperator](_streamable_.md#streamableoperator)‹TReqA, T, TReqB, T›*

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

**Returns:** *[StreamableOperator](_streamable_.md#streamableoperator)‹TReqA, T, TReqB, T›*

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

▸ (`enumerable`: [StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TSrcReq, TSrc›): *[StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TReq, T›*

**Parameters:**

Name | Type |
------ | ------ |
`enumerable` | [StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TSrcReq, TSrc› |

___

### `Const` sink

▸ **sink**<**TReq**, **T**>(`src`: [StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TReq, T›, `dest`: [StreamableLike](../interfaces/_streamable_.streamablelike.md)‹T, TReq›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹void›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`src` | [StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TReq, T› |
`dest` | [StreamableLike](../interfaces/_streamable_.streamablelike.md)‹T, TReq› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹void›*
