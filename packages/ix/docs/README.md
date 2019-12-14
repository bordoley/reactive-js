[@reactive-js/ix](README.md)

# @reactive-js/ix

## Index

### Interfaces

* [AsyncIteratorLike](interfaces/asynciteratorlike.md)
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

▸ **createAsyncIteratorResource**<**TReq**, **T**>(`dispatch`: function, `observable`: MulticastObservableLike‹T›, `disposable`: DisposableLike): *[AsyncIteratorResourceLike](interfaces/asynciteratorresourcelike.md)‹TReq, T›*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **dispatch**: *function*

▸ (`req`: TReq): *void*

**Parameters:**

Name | Type |
------ | ------ |
`req` | TReq |

▪ **observable**: *MulticastObservableLike‹T›*

▪ **disposable**: *DisposableLike*

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
