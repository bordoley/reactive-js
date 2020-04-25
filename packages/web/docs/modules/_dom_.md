[@reactive-js/web - v0.0.37](../README.md) › ["dom"](_dom_.md)

# Module: "dom"

## Index

### Type aliases

* [Location](_dom_.md#location)

### Variables

* [history](_dom_.md#const-history)
* [scheduler](_dom_.md#const-scheduler)

### Functions

* [createEventSource](_dom_.md#const-createeventsource)
* [fromEvent](_dom_.md#const-fromevent)

## Type aliases

###  Location

Ƭ **Location**: *object*

#### Type declaration:

* **hash**: *string*

* **pathname**: *string*

* **search**: *string*

## Variables

### `Const` history

• **history**: *StreamableLike‹[Location](_dom_.md#location), [Location](_dom_.md#location)›* = _history

___

### `Const` scheduler

• **scheduler**: *WebScheduler‹›* = new WebScheduler()

## Functions

### `Const` createEventSource

▸ **createEventSource**(`url`: string | URL, `options`: EventSourceInit & object): *ObservableLike‹object›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`url` | string &#124; URL | - |
`options` | EventSourceInit & object | {} |

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
