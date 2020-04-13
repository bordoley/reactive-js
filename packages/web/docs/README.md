[@reactive-js/web](README.md)

# @reactive-js/web

## Index

### Type aliases

* [Location](README.md#location)

### Variables

* [history](README.md#const-history)

### Functions

* [fromEvent](README.md#const-fromevent)
* [getHostScheduler](README.md#const-gethostscheduler)

## Type aliases

###  Location

Ƭ **Location**: *object*

#### Type declaration:

## Variables

### `Const` history

• **history**: *AsyncEnumerableLike‹[Location](README.md#location), [Location](README.md#location)›* =  _history

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
