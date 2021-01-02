[Reactive-JS](../README.md) / [io](../modules/io.md) / IOSinkAccumulatorLike

# Interface: IOSinkAccumulatorLike<T, TAcc\>

**`experimental`** 

## Type parameters

Name |
------ |
`T` |
`TAcc` |

## Hierarchy

* [*IOSinkLike*](io.iosinklike.md)<T\>

* [*MulticastObservableLike*](observable.multicastobservablelike.md)<TAcc\>

  ↳ **IOSinkAccumulatorLike**

## Index

### Properties

* [error](io.iosinkaccumulatorlike.md#error)
* [isDisposed](io.iosinkaccumulatorlike.md#isdisposed)
* [isSynchronous](io.iosinkaccumulatorlike.md#issynchronous)
* [observerCount](io.iosinkaccumulatorlike.md#observercount)

### Methods

* [add](io.iosinkaccumulatorlike.md#add)
* [dispose](io.iosinkaccumulatorlike.md#dispose)
* [observe](io.iosinkaccumulatorlike.md#observe)
* [stream](io.iosinkaccumulatorlike.md#stream)

## Properties

### error

• `Readonly` **error**: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md).[error](observable.multicastobservablelike.md#error)

The error the `DisposableLike` was disposed with if disposed.

___

### isDisposed

• `Readonly` **isDisposed**: *boolean*

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md).[isDisposed](observable.multicastobservablelike.md#isdisposed)

`true` if this resource has been disposed, otherwise false

___

### isSynchronous

• `Readonly` **isSynchronous**: *boolean*

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md).[isSynchronous](observable.multicastobservablelike.md#issynchronous)

___

### observerCount

• `Readonly` **observerCount**: *number*

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md).[observerCount](observable.multicastobservablelike.md#observercount)

The number of observers currently observing.

## Methods

### add

▸ **add**(`disposable`: [*DisposableOrTeardown*](../modules/disposable.md#disposableorteardown)): *void*

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md)

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters:

Name | Type |
------ | ------ |
`disposable` | [*DisposableOrTeardown*](../modules/disposable.md#disposableorteardown) |

**Returns:** *void*

`this`

___

### dispose

▸ **dispose**(`error?`: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>): *void*

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md)

Dispose the resource. Must be idempotent.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`error?` | [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\> | An optional error that signals the resource is being disposed due to an error.    |

**Returns:** *void*

___

### observe

▸ **observe**(`observer`: [*ObserverLike*](observable.observerlike.md)<TAcc\>): *void*

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md)

Subscribes the `ObserverLike` instance to the observable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`observer` | [*ObserverLike*](observable.observerlike.md)<TAcc\> | The observer which should be notified by the observable source.    |

**Returns:** *void*

___

### stream

▸ **stream**(`scheduler`: [*SchedulerLike*](scheduler.schedulerlike.md), `options?`: { `replay?`: *undefined* \| *number*  }): [*StreamLike*](observable.streamlike.md)<[*IOEvent*](../modules/io.md#ioevent)<T\>, [*FlowMode*](../modules/flowable.md#flowmode)\>

Inherited from: [IOSinkLike](io.iosinklike.md)

#### Parameters:

Name | Type |
------ | ------ |
`scheduler` | [*SchedulerLike*](scheduler.schedulerlike.md) |
`options?` | { `replay?`: *undefined* \| *number*  } |

**Returns:** [*StreamLike*](observable.streamlike.md)<[*IOEvent*](../modules/io.md#ioevent)<T\>, [*FlowMode*](../modules/flowable.md#flowmode)\>
