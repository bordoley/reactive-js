[@reactive-js/web - v0.0.34](README.md)

# @reactive-js/web - v0.0.34

## Index

### Type aliases

* [Location](README.md#location)

### Variables

* [history](README.md#const-history)

### Functions

* [createEventSource](README.md#const-createeventsource)
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

### `Const` createEventSource

▸ **createEventSource**(`url`: string | URL, `options`: EventSourceInit & object): *ObservableLike‹object›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`url` | string &#124; URL | - |
`options` | EventSourceInit & object |  {} |

**Returns:** *ObservableLike‹object›*

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

___

### `Const` getHostScheduler

▸ **getHostScheduler**(): *SchedulerLike*

**Returns:** *SchedulerLike*
