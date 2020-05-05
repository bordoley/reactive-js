[@reactive-js/core - v0.0.37](../README.md) › ["dom"](_dom_.md)

# Module: "dom"

## Index

### Variables

* [history](_dom_.md#const-history)
* [historyHashStateStore](_dom_.md#const-historyhashstatestore)
* [historySearchStateStore](_dom_.md#const-historysearchstatestore)

### Functions

* [createEventSource](_dom_.md#const-createeventsource)
* [fromEvent](_dom_.md#const-fromevent)

## Variables

### `Const` history

• **history**: *[StateStoreLike](../interfaces/_statestore_.statestorelike.md)‹string›* = _history

___

### `Const` historyHashStateStore

• **historyHashStateStore**: *[StateStoreLike](../interfaces/_statestore_.statestorelike.md)‹string›* = pipe(
  history,
  mapReq(hashStateRequestMapper),
  map(getHashState)
)

___

### `Const` historySearchStateStore

• **historySearchStateStore**: *[StateStoreLike](../interfaces/_statestore_.statestorelike.md)‹string›* = pipe(
  history,
  mapReq(searchStateRequestMapper),
  map(getSearchState)
)

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
