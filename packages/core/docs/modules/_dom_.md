[@reactive-js/core - v0.0.37](../README.md) › ["dom"](_dom_.md)

# Module: "dom"

## Index

### Variables

* [history](_dom_.md#const-history)

### Functions

* [createEventSource](_dom_.md#const-createeventsource)
* [fromEvent](_dom_.md#const-fromevent)

## Variables

### `Const` history

• **history**: *[StreamableLike](../interfaces/_streamable_.streamablelike.md)‹string, string›* = _history

## Functions

### `Const` createEventSource

▸ **createEventSource**(`url`: string | URL, `options`: EventSourceInit & object): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹object›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`url` | string &#124; URL | - |
`options` | EventSourceInit & object | {} |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹object›*

___

### `Const` fromEvent

▸ **fromEvent**<**T**>(`target`: EventTarget, `eventName`: string, `selector`: function): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

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

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*
