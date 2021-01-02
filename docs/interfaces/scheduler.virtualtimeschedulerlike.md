[Reactive-JS](../README.md) / [scheduler](../modules/scheduler.md) / VirtualTimeSchedulerLike

# Interface: VirtualTimeSchedulerLike

A scheduler that uses a virtual clock to simulate time. Useful for testing.

## Hierarchy

* [*DisposableLike*](disposable.disposablelike.md)

* [*SchedulerLike*](scheduler.schedulerlike.md)

  ↳ **VirtualTimeSchedulerLike**

## Index

### Properties

* [error](scheduler.virtualtimeschedulerlike.md#error)
* [inContinuation](scheduler.virtualtimeschedulerlike.md#incontinuation)
* [isDisposed](scheduler.virtualtimeschedulerlike.md#isdisposed)
* [now](scheduler.virtualtimeschedulerlike.md#now)
* [shouldYield](scheduler.virtualtimeschedulerlike.md#shouldyield)

### Methods

* [add](scheduler.virtualtimeschedulerlike.md#add)
* [dispose](scheduler.virtualtimeschedulerlike.md#dispose)
* [run](scheduler.virtualtimeschedulerlike.md#run)
* [schedule](scheduler.virtualtimeschedulerlike.md#schedule)

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

### run

▸ **run**(): *void*

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
