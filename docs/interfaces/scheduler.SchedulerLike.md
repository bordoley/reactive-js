[Reactive-JS](../README.md) / [scheduler](../modules/scheduler.md) / SchedulerLike

# Interface: SchedulerLike

[scheduler](../modules/scheduler.md).SchedulerLike

An object that schedules units of work on a runloop.

## Hierarchy

- [`Disposable`](../classes/disposable.Disposable.md)

  ↳ **`SchedulerLike`**

  ↳↳ [`PausableSchedulerLike`](scheduler.PausableSchedulerLike.md)

  ↳↳ [`VirtualTimeSchedulerLike`](scheduler.VirtualTimeSchedulerLike.md)

## Table of contents

### Properties

- [inContinuation](scheduler.SchedulerLike.md#incontinuation)
- [now](scheduler.SchedulerLike.md#now)
- [shouldYield](scheduler.SchedulerLike.md#shouldyield)

### Accessors

- [error](scheduler.SchedulerLike.md#error)
- [isDisposed](scheduler.SchedulerLike.md#isdisposed)

### Methods

- [add](scheduler.SchedulerLike.md#add)
- [dispose](scheduler.SchedulerLike.md#dispose)
- [requestYield](scheduler.SchedulerLike.md#requestyield)
- [schedule](scheduler.SchedulerLike.md#schedule)

## Properties

### inContinuation

• `Readonly` **inContinuation**: `boolean`

___

### now

• `Readonly` **now**: `number`

___

### shouldYield

• `Readonly` **shouldYield**: `boolean`

## Accessors

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](disposable.Error.md)\>

#### Inherited from

Disposable.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Inherited from

Disposable.isDisposed

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

[Disposable](../classes/disposable.Disposable.md).[add](../classes/disposable.Disposable.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`SchedulerLike`](scheduler.SchedulerLike.md) | - |
| `error?` | [`Error`](disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[Disposable](../classes/disposable.Disposable.md).[dispose](../classes/disposable.Disposable.md#dispose)

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
