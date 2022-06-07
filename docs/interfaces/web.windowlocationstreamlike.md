[Reactive-JS](../README.md) / [web](../modules/web.md) / WindowLocationStreamLike

# Interface: WindowLocationStreamLike

## Hierarchy

* [*StreamLike*](observable.streamlike.md)<[*Updater*](../modules/functions.md#updater)<[*WindowLocationURI*](../modules/web.md#windowlocationuri)\> \| [*WindowLocationURI*](../modules/web.md#windowlocationuri), [*WindowLocationURI*](../modules/web.md#windowlocationuri)\>

  ↳ **WindowLocationStreamLike**

## Index

### Properties

* [error](web.windowlocationstreamlike.md#error)
* [isDisposed](web.windowlocationstreamlike.md#isdisposed)
* [isSynchronous](web.windowlocationstreamlike.md#issynchronous)
* [observerCount](web.windowlocationstreamlike.md#observercount)

### Methods

* [add](web.windowlocationstreamlike.md#add)
* [dispatch](web.windowlocationstreamlike.md#dispatch)
* [dispose](web.windowlocationstreamlike.md#dispose)
* [goBack](web.windowlocationstreamlike.md#goback)
* [observe](web.windowlocationstreamlike.md#observe)

## Properties

### error

• `Readonly` **error**: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>

The error the `DisposableLike` was disposed with if disposed.

Inherited from: [StreamLike](observable.streamlike.md).[error](observable.streamlike.md#error)

___

### isDisposed

• `Readonly` **isDisposed**: *boolean*

`true` if this resource has been disposed, otherwise false

Inherited from: [StreamLike](observable.streamlike.md).[isDisposed](observable.streamlike.md#isdisposed)

___

### isSynchronous

• `Readonly` **isSynchronous**: *boolean*

Inherited from: [StreamLike](observable.streamlike.md).[isSynchronous](observable.streamlike.md#issynchronous)

___

### observerCount

• `Readonly` **observerCount**: *number*

The number of observers currently observing.

Inherited from: [StreamLike](observable.streamlike.md).[observerCount](observable.streamlike.md#observercount)

## Methods

### add

▸ **add**(`disposable`: [*DisposableOrTeardown*](../modules/disposable.md#disposableorteardown)): *void*

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters:

Name | Type |
------ | ------ |
`disposable` | [*DisposableOrTeardown*](../modules/disposable.md#disposableorteardown) |

**Returns:** *void*

`this`

Inherited from: [StreamLike](observable.streamlike.md)

___

### dispatch

▸ **dispatch**(`stateOrUpdater`: [*WindowLocationURI*](../modules/web.md#windowlocationuri) \| [*Updater*](../modules/functions.md#updater)<[*WindowLocationURI*](../modules/web.md#windowlocationuri)\>, `options?`: { `replace?`: *undefined* \| *boolean*  }): *void*

#### Parameters:

Name | Type |
------ | ------ |
`stateOrUpdater` | [*WindowLocationURI*](../modules/web.md#windowlocationuri) \| [*Updater*](../modules/functions.md#updater)<[*WindowLocationURI*](../modules/web.md#windowlocationuri)\> |
`options?` | { `replace?`: *undefined* \| *boolean*  } |

**Returns:** *void*

Overrides: [StreamLike](observable.streamlike.md)

___

### dispose

▸ **dispose**(`error?`: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>): *void*

Dispose the resource. Must be idempotent.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`error?` | [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\> | An optional error that signals the resource is being disposed due to an error.    |

**Returns:** *void*

Inherited from: [StreamLike](observable.streamlike.md)

___

### goBack

▸ **goBack**(): *boolean*

**Returns:** *boolean*

___

### observe

▸ **observe**(`observer`: [*ObserverLike*](observable.observerlike.md)<[*WindowLocationURI*](../modules/web.md#windowlocationuri)\>): *void*

Subscribes the `ObserverLike` instance to the observable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`observer` | [*ObserverLike*](observable.observerlike.md)<[*WindowLocationURI*](../modules/web.md#windowlocationuri)\> | The observer which should be notified by the observable source.    |

**Returns:** *void*

Inherited from: [StreamLike](observable.streamlike.md)
