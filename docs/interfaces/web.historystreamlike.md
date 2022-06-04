[Reactive-JS](../README.md) / [web](../modules/web.md) / HistoryStreamLike

# Interface: HistoryStreamLike

## Hierarchy

* [*ObservableLike*](observable.observablelike.md)<[*WindowLocationURI*](../modules/web.md#windowlocationuri)\>

  ↳ **HistoryStreamLike**

## Index

### Properties

* [isSynchronous](web.historystreamlike.md#issynchronous)

### Methods

* [dispatch](web.historystreamlike.md#dispatch)
* [goBack](web.historystreamlike.md#goback)
* [init](web.historystreamlike.md#init)
* [observe](web.historystreamlike.md#observe)

## Properties

### isSynchronous

• `Readonly` **isSynchronous**: *boolean*

Inherited from: [ObservableLike](observable.observablelike.md).[isSynchronous](observable.observablelike.md#issynchronous)

## Methods

### dispatch

▸ **dispatch**(`stateOrUpdater`: [*WindowLocationURI*](../modules/web.md#windowlocationuri) \| [*Updater*](../modules/functions.md#updater)<[*WindowLocationURI*](../modules/web.md#windowlocationuri)\>, `options?`: { `replace?`: *undefined* \| *boolean*  }): *void*

#### Parameters:

Name | Type |
------ | ------ |
`stateOrUpdater` | [*WindowLocationURI*](../modules/web.md#windowlocationuri) \| [*Updater*](../modules/functions.md#updater)<[*WindowLocationURI*](../modules/web.md#windowlocationuri)\> |
`options?` | { `replace?`: *undefined* \| *boolean*  } |

**Returns:** *void*

___

### goBack

▸ **goBack**(): *boolean*

**Returns:** *boolean*

___

### init

▸ **init**(`scheduler`: [*SchedulerLike*](scheduler.schedulerlike.md)): [*DisposableLike*](disposable.disposablelike.md)

#### Parameters:

Name | Type |
------ | ------ |
`scheduler` | [*SchedulerLike*](scheduler.schedulerlike.md) |

**Returns:** [*DisposableLike*](disposable.disposablelike.md)

___

### observe

▸ **observe**(`observer`: [*ObserverLike*](observable.observerlike.md)<[*WindowLocationURI*](../modules/web.md#windowlocationuri)\>): *void*

Subscribes the `ObserverLike` instance to the observable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`observer` | [*ObserverLike*](observable.observerlike.md)<[*WindowLocationURI*](../modules/web.md#windowlocationuri)\> | The observer which should be notified by the observable source.    |

**Returns:** *void*

Inherited from: [ObservableLike](observable.observablelike.md)
