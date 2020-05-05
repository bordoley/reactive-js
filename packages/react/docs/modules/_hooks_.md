[@reactive-js/react - v0.0.37](../README.md) › ["hooks"](_hooks_.md)

# Module: "hooks"

## Index

### Functions

* [useObservable](_hooks_.md#const-useobservable)
* [useSerializedState](_hooks_.md#const-useserializedstate)
* [useStreamable](_hooks_.md#const-usestreamable)

## Functions

### `Const` useObservable

▸ **useObservable**<**T**>(`observable`: ObservableLike‹T›, `scheduler`: SchedulerLike): *Option‹T›*

Returns the current value, if defined, of `observable`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`observable` | ObservableLike‹T› | - | The `ObservableLike` to subscribe to. |
`scheduler` | SchedulerLike | normalPriority | An optional scheduler used when subscribing to `observable`. The default is React's normal priority scheduler.  |

**Returns:** *Option‹T›*

___

### `Const` useSerializedState

▸ **useSerializedState**<**TSerialized**, **TState**>(`store`: StateStoreLike‹TSerialized›, `parse`: function, `serialize`: function): *[Option‹TState›, function]*

**Type parameters:**

▪ **TSerialized**

▪ **TState**

**Parameters:**

▪ **store**: *StateStoreLike‹TSerialized›*

▪ **parse**: *function*

▸ (`serialized`: TSerialized): *TState*

**Parameters:**

Name | Type |
------ | ------ |
`serialized` | TSerialized |

▪ **serialize**: *function*

▸ (`state`: TState): *TSerialized*

**Parameters:**

Name | Type |
------ | ------ |
`state` | TState |

**Returns:** *[Option‹TState›, function]*

___

### `Const` useStreamable

▸ **useStreamable**<**TReq**, **T**>(`streamable`: StreamableLike‹TReq, T›, `config`: object): *[Option‹T›, function]*

**Type parameters:**

▪ **TReq**

▪ **T**

**Parameters:**

▪ **streamable**: *StreamableLike‹TReq, T›*

▪`Default value`  **config**: *object*= {}

Name | Type |
------ | ------ |
`replay?` | number |
`scheduler?` | SchedulerLike |
`stateScheduler?` | SchedulerLike |

**Returns:** *[Option‹T›, function]*
