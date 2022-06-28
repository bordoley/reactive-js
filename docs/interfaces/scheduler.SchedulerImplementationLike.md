[Reactive-JS](../README.md) / [scheduler](../modules/scheduler.md) / SchedulerImplementationLike

# Interface: SchedulerImplementationLike

[scheduler](../modules/scheduler.md).SchedulerImplementationLike

## Hierarchy

- [`DisposableLike`](disposable.DisposableLike.md)

  ↳ **`SchedulerImplementationLike`**

## Table of contents

### Properties

- [error](scheduler.SchedulerImplementationLike.md#error)
- [inContinuation](scheduler.SchedulerImplementationLike.md#incontinuation)
- [isDisposed](scheduler.SchedulerImplementationLike.md#isdisposed)

### Methods

- [add](scheduler.SchedulerImplementationLike.md#add)
- [dispose](scheduler.SchedulerImplementationLike.md#dispose)

## Properties

### error

• `Readonly` **error**: [`Option`](../modules/option.md#option)<[`Error`](disposable.Error.md)\>

The error the `DisposableLike` was disposed with if disposed.

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[error](disposable.DisposableLike.md#error)

___

### inContinuation

• **inContinuation**: `boolean`

___

### isDisposed

• `Readonly` **isDisposed**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[isDisposed](disposable.DisposableLike.md#isdisposed)

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`SchedulerImplementationLike`](scheduler.SchedulerImplementationLike.md) |
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
