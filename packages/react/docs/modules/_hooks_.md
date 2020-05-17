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

▸ **useSerializedState**<**TSerialized**, **TState**>(`store`: StateStoreLike‹TSerialized›, `parse`: Function1‹TSerialized, TState›, `serialize`: Function1‹TState, TSerialized›): *[Option‹TState›, SideEffect1‹Generator‹TState››]*

**Type parameters:**

▪ **TSerialized**

▪ **TState**

**Parameters:**

Name | Type |
------ | ------ |
`store` | StateStoreLike‹TSerialized› |
`parse` | Function1‹TSerialized, TState› |
`serialize` | Function1‹TState, TSerialized› |

**Returns:** *[Option‹TState›, SideEffect1‹Generator‹TState››]*

___

### `Const` useStreamable

▸ **useStreamable**<**TReq**, **T**>(`streamable`: StreamableLike‹TReq, T›, `config`: object): *[Option‹T›, SideEffect1‹TReq›]*

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

**Returns:** *[Option‹T›, SideEffect1‹TReq›]*
