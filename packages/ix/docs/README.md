[@reactive-js/ix](README.md)

# @reactive-js/ix

## Index

### Interfaces

* [AsyncIterableLike](interfaces/asynciterablelike.md)
* [AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)
* [AsyncIteratorLike](interfaces/asynciteratorlike.md)
* [AsyncIteratorOperatorLike](interfaces/asynciteratoroperatorlike.md)
* [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)
* [AsyncIteratorResourceOperatorLike](interfaces/asynciteratorresourceoperatorlike.md)
* [EventEmitterResourceLike](interfaces/eventemitterresourcelike.md)
* [StateStoreResourceLike](interfaces/statestoreresourcelike.md)
* [StateUpdaterLike](interfaces/stateupdaterlike.md)

### Type aliases

* [EventEmitterLike](README.md#eventemitterlike)
* [StateStoreLike](README.md#statestorelike)

### Functions

* [createAsyncIteratorResource](README.md#const-createasynciteratorresource)
* [createEventEmitter](README.md#const-createeventemitter)
* [createPersistentStateStore](README.md#const-createpersistentstatestore)
* [createReducerStore](README.md#const-createreducerstore)
* [createStateStore](README.md#const-createstatestore)
* [empty](README.md#const-empty)
* [fromArray](README.md#const-fromarray)
* [fromIterable](README.md#const-fromiterable)
* [generate](README.md#const-generate)
* [identity](README.md#const-identity)
* [lift](README.md#const-lift)
* [liftReq](README.md#const-liftreq)
* [reduce](README.md#const-reduce)

## Type aliases

###  EventEmitterLike

Ƭ **EventEmitterLike**: *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹T, T›*

**`noinheritdoc`** 

___

###  StateStoreLike

Ƭ **StateStoreLike**: *[AsyncIteratorLike](interfaces/asynciteratorlike.md)‹[StateUpdaterLike](interfaces/stateupdaterlike.md)‹T›, T›*

**`noinheritdoc`** 

## Functions

### `Const` createAsyncIteratorResource

▸ **createAsyncIteratorResource**<**TReq**, **T**>(`operator`: ObservableOperatorLike‹TReq, T›, `scheduler`: SchedulerLike, `replayCount`: number): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`operator` | ObservableOperatorLike‹TReq, T› | - |
`scheduler` | SchedulerLike | - |
`replayCount` | number | 0 |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›*

___

### `Const` createEventEmitter

▸ **createEventEmitter**<**T**>(`config`: object | void): *[EventEmitterResourceLike](interfaces/eventemitterresourcelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`config` | object &#124; void |

**Returns:** *[EventEmitterResourceLike](interfaces/eventemitterresourcelike.md)‹T›*

___

### `Const` createPersistentStateStore

▸ **createPersistentStateStore**<**T**>(`persistentStore`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹T, T›, `initialState`: T, `scheduler`: SchedulerLike, `equals?`: undefined | function): *[StateStoreResourceLike](interfaces/statestoreresourcelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`persistentStore` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹T, T› |
`initialState` | T |
`scheduler` | SchedulerLike |
`equals?` | undefined &#124; function |

**Returns:** *[StateStoreResourceLike](interfaces/statestoreresourcelike.md)‹T›*

___

### `Const` createReducerStore

▸ **createReducerStore**<**TAction**, **T**>(`initialStateFactory`: function, `reducer`: function, `equals?`: undefined | function): *[AsyncIterableLike](interfaces/asynciterablelike.md)‹TAction, T›*

**Type parameters:**

▪ **TAction**

▪ **T**

**Parameters:**

▪ **initialStateFactory**: *function*

▸ (): *T*

▪ **reducer**: *function*

▸ (`state`: T, `action`: TAction): *T*

**Parameters:**

Name | Type |
------ | ------ |
`state` | T |
`action` | TAction |

▪`Optional`  **equals**: *undefined | function*

**Returns:** *[AsyncIterableLike](interfaces/asynciterablelike.md)‹TAction, T›*

___

### `Const` createStateStore

▸ **createStateStore**<**T**>(`initialState`: function, `equals?`: undefined | function): *[AsyncIterableLike](interfaces/asynciterablelike.md)‹[StateUpdaterLike](interfaces/stateupdaterlike.md)‹T›, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **initialState**: *function*

▸ (): *T*

▪`Optional`  **equals**: *undefined | function*

**Returns:** *[AsyncIterableLike](interfaces/asynciterablelike.md)‹[StateUpdaterLike](interfaces/stateupdaterlike.md)‹T›, T›*

___

### `Const` empty

▸ **empty**<**TReq**, **T**>(): *[AsyncIterableLike](interfaces/asynciterablelike.md)‹TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Returns:** *[AsyncIterableLike](interfaces/asynciterablelike.md)‹TReq, T›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`values`: keyof T[]): *[AsyncIterableLike](interfaces/asynciterablelike.md)‹number | void, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`values` | keyof T[] |

**Returns:** *[AsyncIterableLike](interfaces/asynciterablelike.md)‹number | void, T›*

___

### `Const` fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›): *[AsyncIterableLike](interfaces/asynciterablelike.md)‹number | void, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |

**Returns:** *[AsyncIterableLike](interfaces/asynciterablelike.md)‹number | void, T›*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: function, `initialValue`: function): *[AsyncIterableLike](interfaces/asynciterablelike.md)‹number | void, T›*

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

**Returns:** *[AsyncIterableLike](interfaces/asynciterablelike.md)‹number | void, T›*

___

### `Const` identity

▸ **identity**<**T**>(): *[AsyncIterableLike](interfaces/asynciterablelike.md)‹T, T›*

**Type parameters:**

▪ **T**

**Returns:** *[AsyncIterableLike](interfaces/asynciterablelike.md)‹T, T›*

___

### `Const` lift

▸ **lift**<**TReq**, **TA**, **TB**>(`operator`: ObservableOperatorLike‹TA, TB›): *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReq, TA, TReq, TB›*

**Type parameters:**

▪ **TReq**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | ObservableOperatorLike‹TA, TB› |

**Returns:** *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReq, TA, TReq, TB›*

___

### `Const` liftReq

▸ **liftReq**<**TReqA**, **TReqB**, **T**>(`operator`: AsyncIteratorRequestOperatorLike‹TReqA, TReqB›): *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReqA, T, TReqB, T›*

**Type parameters:**

▪ **TReqA**

▪ **TReqB**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | AsyncIteratorRequestOperatorLike‹TReqA, TReqB› |

**Returns:** *[AsyncIterableOperatorLike](interfaces/asynciterableoperatorlike.md)‹TReqA, T, TReqB, T›*

___

### `Const` reduce

▸ **reduce**<**TReq**, **TSrc**, **TAcc**>(`reducer`: function, `initial`: function, `scheduler`: SchedulerLike): *OperatorLike‹[AsyncIterableLike](interfaces/asynciterablelike.md)‹TReq, TSrc›, ObservableLike‹TAcc››*

**Type parameters:**

▪ **TReq**

▪ **TSrc**

▪ **TAcc**

**Parameters:**

▪ **reducer**: *function*

▸ (`acc`: TAcc, `next`: TSrc): *ObservableLike‹ReduceRequestLike‹TReq, TAcc››*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | TAcc |
`next` | TSrc |

▪ **initial**: *function*

▸ (): *ReduceRequestLike‹TReq, TAcc›*

▪ **scheduler**: *SchedulerLike*

**Returns:** *OperatorLike‹[AsyncIterableLike](interfaces/asynciterablelike.md)‹TReq, TSrc›, ObservableLike‹TAcc››*
