[Reactive-JS](../README.md) / [observable](../modules/observable.md) / ObserverLike

# Interface: ObserverLike<T\>

The underlying mechanism for receiving and transforming notifications from an
observable source. The `ObserverLike` interface composes the `SchedulerLike` and
`DisposableLike` interfaces into a single unified type, while adding the capability
to receive notifications.

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* [*DisposableLike*](disposable.disposablelike.md)

* [*SchedulerLike*](scheduler.schedulerlike.md)

  ↳ **ObserverLike**

## Index

### Properties

* [error](observable.observerlike.md#error)
* [inContinuation](observable.observerlike.md#incontinuation)
* [isDisposed](observable.observerlike.md#isdisposed)
* [now](observable.observerlike.md#now)
* [shouldYield](observable.observerlike.md#shouldyield)

### Methods

* [add](observable.observerlike.md#add)
* [dispose](observable.observerlike.md#dispose)
* [notify](observable.observerlike.md#notify)
* [schedule](observable.observerlike.md#schedule)

## Properties

### error

• `Readonly` **error**: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>

Inherited from: [DisposableLike](disposable.disposablelike.md).[error](disposable.disposablelike.md#error)

The error the `DisposableLike` was disposed with if disposed.

___

### inContinuation

• `Readonly` **inContinuation**: *boolean*

Inherited from: [SchedulerLike](scheduler.schedulerlike.md).[inContinuation](scheduler.schedulerlike.md#incontinuation)

___

### isDisposed

• `Readonly` **isDisposed**: *boolean*

Inherited from: [DisposableLike](disposable.disposablelike.md).[isDisposed](disposable.disposablelike.md#isdisposed)

`true` if this resource has been disposed, otherwise false

___

### now

• `Readonly` **now**: *number*

Inherited from: [SchedulerLike](scheduler.schedulerlike.md).[now](scheduler.schedulerlike.md#now)

___

### shouldYield

• `Readonly` **shouldYield**: *boolean*

Inherited from: [SchedulerLike](scheduler.schedulerlike.md).[shouldYield](scheduler.schedulerlike.md#shouldyield)

## Methods

### add

▸ **add**(`disposable`: [*DisposableOrTeardown*](../modules/disposable.md#disposableorteardown)): *void*

Inherited from: [DisposableLike](disposable.disposablelike.md)

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

Inherited from: [DisposableLike](disposable.disposablelike.md)

Dispose the resource. Must be idempotent.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`error?` | [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\> | An optional error that signals the resource is being disposed due to an error.    |

**Returns:** *void*

___

### notify

▸ **notify**(`next`: T): *void*

Notifies the the observer of the next notification produced by the observable source.

Note: The `notify` method must be called from within a `SchedulerContinuationLike`
scheduled using the observer's `schedule` method.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`next` | T | The next notification value.    |

**Returns:** *void*

___

### schedule

▸ **schedule**(`continuation`: [*SchedulerContinuationLike*](scheduler.schedulercontinuationlike.md), `options?`: { `delay?`: *undefined* \| *number*  }): *void*

Inherited from: [SchedulerLike](scheduler.schedulerlike.md)

Schedules a continuation to be executed on the scheduler.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`continuation` | [*SchedulerContinuationLike*](scheduler.schedulercontinuationlike.md) | The SchedulerContinuation to be executed.    |
`options?` | { `delay?`: *undefined* \| *number*  } | - |

**Returns:** *void*
