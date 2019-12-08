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

* [createEventEmitter](README.md#const-createeventemitter)
* [createPersistentStateStore](README.md#const-createpersistentstatestore)
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

### `Const` createEventEmitter

▸ **createEventEmitter**<**T**>(): *[EventEmitterResourceLike](interfaces/eventemitterresourcelike.md)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[EventEmitterResourceLike](interfaces/eventemitterresourcelike.md)‹T›*

___

### `Const` createPersistentStateStore

▸ **createPersistentStateStore**<**T**>(`persistentStore`: [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹T, [StateUpdaterLike](interfaces/stateupdaterlike.md)‹T››, `initialState`: T, `scheduler`: SchedulerLike, `equals?`: undefined | function): *[StateStoreResourceLike](interfaces/statestoreresourcelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`persistentStore` | [AsyncIteratorLike](interfaces/asynciteratorlike.md)‹T, [StateUpdaterLike](interfaces/stateupdaterlike.md)‹T›› |
`initialState` | T |
`scheduler` | SchedulerLike |
`equals?` | undefined &#124; function |

**Returns:** *[StateStoreResourceLike](interfaces/statestoreresourcelike.md)‹T›*

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
