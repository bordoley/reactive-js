[Reactive-JS](../README.md) / [disposable](../modules/disposable.md) / Disposable

# Class: Disposable

[disposable](../modules/disposable.md).Disposable

## Hierarchy

- **`Disposable`**

  ↳ [`Subject`](observable.Subject.md)

  ↳ [`Observer`](observer.Observer.md)

## Implements

- [`DisposableLike`](../interfaces/disposable.DisposableLike.md)

## Table of contents

### Constructors

- [constructor](disposable.Disposable.md#constructor)

### Accessors

- [error](disposable.Disposable.md#error)
- [isDisposed](disposable.Disposable.md#isdisposed)

### Methods

- [add](disposable.Disposable.md#add)
- [dispose](disposable.Disposable.md#dispose)

## Constructors

### constructor

• **new Disposable**()

## Accessors

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Implementation of

[DisposableLike](../interfaces/disposable.DisposableLike.md).[error](../interfaces/disposable.DisposableLike.md#error)

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Implementation of

[DisposableLike](../interfaces/disposable.DisposableLike.md).[isDisposed](../interfaces/disposable.DisposableLike.md#isdisposed)

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Disposable`](disposable.Disposable.md) |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Implementation of

[DisposableLike](../interfaces/disposable.DisposableLike.md).[add](../interfaces/disposable.DisposableLike.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`Disposable`](disposable.Disposable.md) | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Implementation of

[DisposableLike](../interfaces/disposable.DisposableLike.md).[dispose](../interfaces/disposable.DisposableLike.md#dispose)
