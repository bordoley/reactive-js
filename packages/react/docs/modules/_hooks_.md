[@reactive-js/react - v0.0.42](../README.md) › ["hooks"](_hooks_.md)

# Module: "hooks"

## Index

### Functions

* [useObservable](_hooks_.md#const-useobservable)
* [useStreamable](_hooks_.md#const-usestreamable)

## Functions

### `Const` useObservable

▸ **useObservable**<**T**>(`observable`: ObservableLike‹T›, `__namedParameters`: object): *Option‹T›*

Returns the current value, if defined, of `observable`.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **observable**: *ObservableLike‹T›*

The `ObservableLike` to subscribe to.

▪`Default value`  **__namedParameters**: *object*= { scheduler: normalPriority}

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

**Returns:** *Option‹T›*

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
