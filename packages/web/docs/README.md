[@reactive-js/web](README.md)

# @reactive-js/web

## Index

### Interfaces

* [LocationLike](interfaces/locationlike.md)

### Functions

* [createSchedulerWithPriority](README.md#const-createschedulerwithpriority)
* [fromEvent](README.md#const-fromevent)

### Object literals

* [historyIterable](README.md#const-historyiterable)

## Functions

### `Const` createSchedulerWithPriority

▸ **createSchedulerWithPriority**(`priority`: number): *SchedulerLike*

**Parameters:**

Name | Type |
------ | ------ |
`priority` | number |

**Returns:** *SchedulerLike*

___

### `Const` fromEvent

▸ **fromEvent**<**T**>(`target`: EventTarget, `eventName`: string, `selector`: function): *ObservableLike‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **target**: *EventTarget*

▪ **eventName**: *string*

▪ **selector**: *function*

▸ (`ev`: Event): *T*

**Parameters:**

Name | Type |
------ | ------ |
`ev` | Event |

**Returns:** *ObservableLike‹T›*

## Object literals

### `Const` historyIterable

### ▪ **historyIterable**: *object*

###  getIXAsyncIterator

▸ **getIXAsyncIterator**(`scheduler`: SchedulerLike, `replayCount?`: undefined | number): *AsyncIteratorResourceLike‹[LocationLike](interfaces/locationlike.md), [LocationLike](interfaces/locationlike.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |
`replayCount?` | undefined &#124; number |

**Returns:** *AsyncIteratorResourceLike‹[LocationLike](interfaces/locationlike.md), [LocationLike](interfaces/locationlike.md)›*
