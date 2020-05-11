[@reactive-js/core - v0.0.37](../README.md) › ["streamable"](_streamable_.md)

# Module: "streamable"

## Index

### Interfaces

* [StreamableLike](../interfaces/_streamable_.streamablelike.md)

### Type aliases

* [StreamableOperator](_streamable_.md#streamableoperator)

### Functions

* [createActionReducer](_streamable_.md#const-createactionreducer)
* [createStreamable](_streamable_.md#const-createstreamable)
* [empty](_streamable_.md#const-empty)
* [identity](_streamable_.md#const-identity)
* [lift](_streamable_.md#const-lift)
* [map](_streamable_.md#const-map)
* [mapReq](_streamable_.md#const-mapreq)
* [mapTo](_streamable_.md#const-mapto)
* [onNotify](_streamable_.md#const-onnotify)
* [scan](_streamable_.md#const-scan)
* [sink](_streamable_.md#const-sink)

## Type aliases

###  StreamableOperator

Ƭ **StreamableOperator**: *function*

#### Type declaration:

▸ (`streamable`: [StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TSrcReq, TSrc›): *[StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TReq, T›*

**Parameters:**

Name | Type |
------ | ------ |
`streamable` | [StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TSrcReq, TSrc› |

## Functions

### `Const` createActionReducer

▸ **createActionReducer**<**TAction**, **T**>(`reducer`: [Reducer](_functions_.md#reducer)‹TAction, T›, `initialState`: [Factory](_functions_.md#factory)‹T›, `equals?`: [Equality](_functions_.md#equality)‹T›): *[StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TAction, T›*

Returns a new `StreamableLike` instance that applies an accumulator function
over the notified actions, emitting each intermediate result.

**Type parameters:**

▪ **TAction**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [Reducer](_functions_.md#reducer)‹TAction, T› | The accumulator function called on each notified action. |
`initialState` | [Factory](_functions_.md#factory)‹T› | The initial accumulation value. |
`equals?` | [Equality](_functions_.md#equality)‹T› | Optional equality function that is used to compare if a state value is distinct from the previous one.  |

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

▸ **empty**<**TReq**, **T**>(`options?`: object): *[StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TReq, T›*

Returns an empty `StreamableLike` that always returns
a disposed `StreamLike` instance.

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪`Optional`  **options**: *object*

Name | Type |
------ | ------ |
`delay` | number |

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

### `Const` map

▸ **map**<**TReq**, **TA**, **TB**>(`mapper`: [Operator](_functions_.md#operator)‹TA, TB›): *function*

**Type parameters:**

▪ **TReq**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Operator](_functions_.md#operator)‹TA, TB› |

**Returns:** *function*

▸ (`streamable`: [StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TSrcReq, TSrc›): *[StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TReq, T›*

**Parameters:**

Name | Type |
------ | ------ |
`streamable` | [StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TSrcReq, TSrc› |

___

### `Const` mapReq

▸ **mapReq**<**TReqA**, **TReqB**, **T**>(`op`: [Operator](_functions_.md#operator)‹TReqB, TReqA›): *[StreamableOperator](_streamable_.md#streamableoperator)‹TReqA, T, TReqB, T›*

**Type parameters:**

▪ **TReqA**

▪ **TReqB**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`op` | [Operator](_functions_.md#operator)‹TReqB, TReqA› |

**Returns:** *[StreamableOperator](_streamable_.md#streamableoperator)‹TReqA, T, TReqB, T›*

___

### `Const` mapTo

▸ **mapTo**<**TReq**, **TA**, **TB**>(`v`: TB): *function*

**Type parameters:**

▪ **TReq**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`v` | TB |

**Returns:** *function*

▸ (`streamable`: [StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TSrcReq, TSrc›): *[StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TReq, T›*

**Parameters:**

Name | Type |
------ | ------ |
`streamable` | [StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TSrcReq, TSrc› |

___

### `Const` onNotify

▸ **onNotify**<**TReq**, **T**>(`onNotify`: function): *function*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **onNotify**: *function*

▸ (`next`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *function*

▸ (`streamable`: [StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TSrcReq, TSrc›): *[StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TReq, T›*

**Parameters:**

Name | Type |
------ | ------ |
`streamable` | [StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TSrcReq, TSrc› |

___

### `Const` scan

▸ **scan**<**TReq**, **T**, **TAcc**>(`scanner`: [Reducer](_functions_.md#reducer)‹T, TAcc›, `initalValue`: [Factory](_functions_.md#factory)‹TAcc›): *function*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`scanner` | [Reducer](_functions_.md#reducer)‹T, TAcc› |
`initalValue` | [Factory](_functions_.md#factory)‹TAcc› |

**Returns:** *function*

▸ (`streamable`: [StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TSrcReq, TSrc›): *[StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TReq, T›*

**Parameters:**

Name | Type |
------ | ------ |
`streamable` | [StreamableLike](../interfaces/_streamable_.streamablelike.md)‹TSrcReq, TSrc› |

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
