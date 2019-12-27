[@reactive-js/ix](README.md)

# @reactive-js/ix

## Index

### Interfaces

* [AsyncIteratorLike](interfaces/asynciteratorlike.md)
* [AsyncIteratorOperatorLike](interfaces/asynciteratoroperatorlike.md)
* [AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)
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
* [fromArray](README.md#const-fromarray)
* [fromIterable](README.md#const-fromiterable)
* [generate](README.md#const-generate)
* [lift](README.md#const-lift)
* [liftReq](README.md#const-liftreq)

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

▸ **createAsyncIteratorResource**<**TReq**, **T**>(`f`: function, `scheduler`: SchedulerLike, `replayCount`: number): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **f**: *function*

▸ (`obs`: ObservableLike‹TReq›): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`obs` | ObservableLike‹TReq› |

▪ **scheduler**: *SchedulerLike*

▪`Default value`  **replayCount**: *number*= 0

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›*

___

### `Const` createEventEmitter

▸ **createEventEmitter**<**T**>(): *[EventEmitterResourceLike](interfaces/eventemitterresourcelike.md)‹T›*

**Type parameters:**

▪ **T**

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

▸ **createReducerStore**<**TAction**, **T**>(`initialState`: T, `reducer`: function, `scheduler`: SchedulerLike, `equals?`: undefined | function): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TAction, T›*

**Type parameters:**

▪ **TAction**

▪ **T**

**Parameters:**

▪ **initialState**: *T*

▪ **reducer**: *function*

▸ (`state`: T, `action`: TAction): *T*

**Parameters:**

Name | Type |
------ | ------ |
`state` | T |
`action` | TAction |

▪ **scheduler**: *SchedulerLike*

▪`Optional`  **equals**: *undefined | function*

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TAction, T›*

___

### `Const` createStateStore

▸ **createStateStore**<**T**>(`initialState`: T, `scheduler`: SchedulerLike, `equals?`: undefined | function): *[StateStoreResourceLike](interfaces/statestoreresourcelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`initialState` | T |
`scheduler` | SchedulerLike |
`equals?` | undefined &#124; function |

**Returns:** *[StateStoreResourceLike](interfaces/statestoreresourcelike.md)‹T›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`values`: keyof T[], `scheduler`: SchedulerLike): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹number, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`values` | keyof T[] |
`scheduler` | SchedulerLike |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹number, T›*

___

### `Const` fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›, `scheduler`: SchedulerLike): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹number, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`scheduler` | SchedulerLike |

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹number, T›*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: function, `initialValue`: function, `scheduler`: SchedulerLike): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹number, T›*

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

▪ **scheduler**: *SchedulerLike*

**Returns:** *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹number, T›*

___

### `Const` lift

▸ **lift**<**TReq**, **T**, **TA**>(`operator`: OperatorLike‹ObservableLike‹T›, MulticastObservableLike‹TA››, `scheduler`: SchedulerLike, `replay?`: undefined | number): *[AsyncIteratorOperatorLike](interfaces/asynciteratoroperatorlike.md)‹TReq, T, TReq, TA›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TA**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | OperatorLike‹ObservableLike‹T›, MulticastObservableLike‹TA›› |
`scheduler` | SchedulerLike |
`replay?` | undefined &#124; number |

**Returns:** *[AsyncIteratorOperatorLike](interfaces/asynciteratoroperatorlike.md)‹TReq, T, TReq, TA›*

___

### `Const` liftReq

▸ **liftReq**<**TReq**, **T**, **TReqA**>(`operator`: function, `scheduler`: SchedulerLike, `replay?`: undefined | number): *[AsyncIteratorOperatorLike](interfaces/asynciteratoroperatorlike.md)‹TReq, T, TReqA, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

▪ **TReqA**

**Parameters:**

▪ **operator**: *function*

▸ (`dispatcher`: function): *function*

**Parameters:**

▪ **dispatcher**: *function*

▸ (`req`: TReq): *void*

**Parameters:**

Name | Type |
------ | ------ |
`req` | TReq |

▸ (`ref`: TReqA): *void*

**Parameters:**

Name | Type |
------ | ------ |
`ref` | TReqA |

▪ **scheduler**: *SchedulerLike*

▪`Optional`  **replay**: *undefined | number*

**Returns:** *[AsyncIteratorOperatorLike](interfaces/asynciteratoroperatorlike.md)‹TReq, T, TReqA, T›*
