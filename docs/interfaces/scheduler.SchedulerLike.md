[Reactive-JS](../README.md) / [scheduler](../modules/scheduler.md) / SchedulerLike

# Interface: SchedulerLike

[scheduler](../modules/scheduler.md).SchedulerLike

An object that schedules units of work on a runloop.

## Hierarchy

- [`DisposableLike`](disposable.DisposableLike.md)

  ↳ **`SchedulerLike`**

  ↳↳ [`ObserverLike`](observable.ObserverLike.md)

  ↳↳ [`PausableSchedulerLike`](scheduler.PausableSchedulerLike.md)

  ↳↳ [`VirtualTimeSchedulerLike`](scheduler.VirtualTimeSchedulerLike.md)

## Table of contents

### Properties

- [error](scheduler.SchedulerLike.md#error)
- [inContinuation](scheduler.SchedulerLike.md#incontinuation)
- [isDisposed](scheduler.SchedulerLike.md#isdisposed)
- [now](scheduler.SchedulerLike.md#now)
- [shouldYield](scheduler.SchedulerLike.md#shouldyield)

### Methods

- [add](scheduler.SchedulerLike.md#add)
- [dispose](scheduler.SchedulerLike.md#dispose)
- [requestYield](scheduler.SchedulerLike.md#requestyield)
- [schedule](scheduler.SchedulerLike.md#schedule)

## Properties

### error

• `Readonly` **error**: [`Option`](../modules/option.md#option)<[`Error`](../modules/disposable.md#error)\>

The error the `DisposableLike` was disposed with if disposed.

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[error](disposable.DisposableLike.md#error)

___

### inContinuation

• `Readonly` **inContinuation**: `boolean`

___

### isDisposed

• `Readonly` **isDisposed**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[isDisposed](disposable.DisposableLike.md#isdisposed)

___

### now

• `Readonly` **now**: `number`

___

### shouldYield

• `Readonly` **shouldYield**: `boolean`

## Methods

### add

▸ **add**(`disposable`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |

#### Returns

`void`

`this`

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[add](disposable.DisposableLike.md#add)

___

### dispose

▸ **dispose**(`error?`): `void`

Dispose the resource. Must be idempotent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | [`Error`](../modules/disposable.md#error) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[dispose](disposable.DisposableLike.md#dispose)

___

### requestYield

▸ **requestYield**(): `void`

Request the scheduler to yield.

#### Returns

`void`

___

### schedule

▸ **schedule**(`continuation`, `options?`): `void`

Schedules a continuation to be executed on the scheduler.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `continuation` | [`SchedulerContinuationLike`](scheduler.SchedulerContinuationLike.md) | The SchedulerContinuation to be executed. |
| `options?` | `Object` | - |
| `options.delay?` | `number` | - |

#### Returns

`void`
