[@reactive-js/core - v0.0.42](../README.md) › ["web"](_web_.md)

# Module: "web"

## Index

### Type aliases

* [FetchRequest](_web_.md#fetchrequest)

### Variables

* [historyHashStateStore](_web_.md#const-historyhashstatestore)
* [historyPathStateStore](_web_.md#const-historypathstatestore)
* [historySearchStateStore](_web_.md#const-historysearchstatestore)
* [historyStateStore](_web_.md#const-historystatestore)

### Functions

* [createEventSource](_web_.md#const-createeventsource)
* [fetch](_web_.md#const-fetch)
* [fromEvent](_web_.md#const-fromevent)

## Type aliases

###  FetchRequest

Ƭ **FetchRequest**: *RequestInit & object*

## Variables

### `Const` historyHashStateStore

• **historyHashStateStore**: *[StateStoreLike](../interfaces/_statestore_.statestorelike.md)‹string›* = _historyHashStateStore

___

### `Const` historyPathStateStore

• **historyPathStateStore**: *[StateStoreLike](../interfaces/_statestore_.statestorelike.md)‹string›* = _historyPathStateStore

___

### `Const` historySearchStateStore

• **historySearchStateStore**: *[StateStoreLike](../interfaces/_statestore_.statestorelike.md)‹object›* = _historySearchStateStore

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

### `Const` fetch

▸ **fetch**<**T**>(`onResponse`: [Function1](_functions_.md#function1)‹Response, Promise‹T› | [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››): *[Function1](_functions_.md#function1)‹[FetchRequest](_web_.md#fetchrequest) | string, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`onResponse` | [Function1](_functions_.md#function1)‹Response, Promise‹T› &#124; [ObservableLike](../interfaces/_observable_.observablelike.md)‹T›› |

**Returns:** *[Function1](_functions_.md#function1)‹[FetchRequest](_web_.md#fetchrequest) | string, [ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

___

### `Const` fromEvent

▸ **fromEvent**<**T**>(`target`: EventTarget, `eventName`: string, `selector`: [Function1](_functions_.md#function1)‹Event, T›): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`target` | EventTarget |
`eventName` | string |
`selector` | [Function1](_functions_.md#function1)‹Event, T› |

**Returns:** *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*
