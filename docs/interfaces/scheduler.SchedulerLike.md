[Reactive-JS](../README.md) / [scheduler](../modules/scheduler.md) / SchedulerLike

# Interface: SchedulerLike

[scheduler](../modules/scheduler.md).SchedulerLike

An object that schedules units of work on a runloop.

## Hierarchy

- [`DisposableLike`](disposable.DisposableLike.md)

  ↳ **`SchedulerLike`**

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

• `Readonly` **error**: [`Option`](../modules/option.md#option)<[`Error`](disposable.Error.md)\>

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

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[add](disposable.DisposableLike.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource. Must be idempotent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`DisposableLike`](disposable.DisposableLike.md) | - |
| `error?` | [`Error`](disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[dispose](disposable.DisposableLike.md#dispose)

___

### requestYield

▸ **requestYield**(`this`): `void`

Request the scheduler to yield.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`SchedulerLike`](scheduler.SchedulerLike.md) |

#### Returns

`void`

___

### schedule

▸ **schedule**(`this`, `continuation`, `options?`): `void`

Schedules a continuation to be executed on the scheduler.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`SchedulerLike`](scheduler.SchedulerLike.md) | - |
| `continuation` | [`SchedulerContinuationLike`](scheduler.SchedulerContinuationLike.md) | The SchedulerContinuation to be executed. |
| `options?` | `Object` | - |
| `options.delay?` | `number` | - |

#### Returns

`void`
