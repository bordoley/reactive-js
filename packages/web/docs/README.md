[@reactive-js/web](README.md)

# @reactive-js/web

## Index

### Interfaces

* [LocationLike](interfaces/locationlike.md)

### Variables

* [historyAsyncEnumerable](README.md#const-historyasyncenumerable)

### Functions

* [createSchedulerWithPriority](README.md#const-createschedulerwithpriority)
* [fromEvent](README.md#const-fromevent)

## Variables

### `Const` historyAsyncEnumerable

• **historyAsyncEnumerable**: *AsyncEnumerableLike‹[LocationLike](interfaces/locationlike.md), [LocationLike](interfaces/locationlike.md)›* =  _historyIterable

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
