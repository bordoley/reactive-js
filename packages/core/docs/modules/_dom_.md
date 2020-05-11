[@reactive-js/core - v0.0.37](../README.md) › ["dom"](_dom_.md)

# Module: "dom"

## Index

### Variables

* [historyHashStateStore](_dom_.md#const-historyhashstatestore)
* [historySearchStateStore](_dom_.md#const-historysearchstatestore)
* [historyStateStore](_dom_.md#const-historystatestore)

### Functions

* [createEventSource](_dom_.md#const-createeventsource)
* [fromEvent](_dom_.md#const-fromevent)

## Variables

### `Const` historyHashStateStore

• **historyHashStateStore**: *[StateStoreLike](../interfaces/_statestore_.statestorelike.md)‹string›* = pipe(
  historyStateStore,
  mapReq(hashStateRequestMapper),
  map(getHashState),
)

___

### `Const` historySearchStateStore

• **historySearchStateStore**: *[StateStoreLike](../interfaces/_statestore_.statestorelike.md)‹object›* = pipe(
  historyStateStore,
  mapReq(searchStateRequestMapper),
  map(getSearchState),
)

___

### `Const` historyStateStore

• **historyStateStore**: *[StateStoreLike](../interfaces/_statestore_.statestorelike.md)‹string›* = _historyStateStore

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

▸ **fromEvent**<**T**>(`target`: EventTarget, `eventName`: string, `selector`: [Operator](_functions_.md#operator)‹Event, T›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`target` | EventTarget |
`eventName` | string |
`selector` | [Operator](_functions_.md#operator)‹Event, T› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*
