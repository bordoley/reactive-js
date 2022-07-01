[Reactive-JS](../README.md) / [scheduler](../modules/scheduler.md) / SchedulerImplementationLike

# Interface: SchedulerImplementationLike

[scheduler](../modules/scheduler.md).SchedulerImplementationLike

## Hierarchy

- [`Disposable`](../classes/disposable.Disposable.md)

  ↳ **`SchedulerImplementationLike`**

## Table of contents

### Properties

- [inContinuation](scheduler.SchedulerImplementationLike.md#incontinuation)

### Accessors

- [error](scheduler.SchedulerImplementationLike.md#error)
- [isDisposed](scheduler.SchedulerImplementationLike.md#isdisposed)

### Methods

- [add](scheduler.SchedulerImplementationLike.md#add)
- [dispose](scheduler.SchedulerImplementationLike.md#dispose)

## Properties

### inContinuation

• **inContinuation**: `boolean`

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
| `this` | [`SchedulerImplementationLike`](scheduler.SchedulerImplementationLike.md) |
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
| `this` | [`SchedulerImplementationLike`](scheduler.SchedulerImplementationLike.md) | - |
| `error?` | [`Error`](disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[Disposable](../classes/disposable.Disposable.md).[dispose](../classes/disposable.Disposable.md#dispose)
