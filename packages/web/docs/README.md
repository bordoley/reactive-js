[@reactive-js/web](README.md)

# @reactive-js/web

## Index

### Interfaces

* [LocationLike](interfaces/locationlike.md)

### Variables

* [history](README.md#const-history)

### Functions

* [fromEvent](README.md#const-fromevent)
* [getHostScheduler](README.md#const-gethostscheduler)

## Variables

### `Const` history

• **history**: *AsyncEnumerableLike‹[LocationLike](interfaces/locationlike.md), [LocationLike](interfaces/locationlike.md)›* =  _history

## Functions

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

___

### `Const` getHostScheduler

▸ **getHostScheduler**(): *SchedulerLike*

**Returns:** *SchedulerLike*
