[Reactive-JS](../README.md) / [enumerator](../modules/enumerator.md) / EnumeratorLike

# Interface: EnumeratorLike<T\>

[enumerator](../modules/enumerator.md).EnumeratorLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)

  ↳ **`EnumeratorLike`**

  ↳↳ [`VirtualTimeSchedulerLike`](scheduler.VirtualTimeSchedulerLike.md)

## Table of contents

### Properties

- [current](enumerator.EnumeratorLike.md#current)
- [error](enumerator.EnumeratorLike.md#error)
- [hasCurrent](enumerator.EnumeratorLike.md#hascurrent)
- [isDisposed](enumerator.EnumeratorLike.md#isdisposed)

### Methods

- [add](enumerator.EnumeratorLike.md#add)
- [dispose](enumerator.EnumeratorLike.md#dispose)
- [move](enumerator.EnumeratorLike.md#move)

## Properties

### current

• `Readonly` **current**: `T`

___

### error

• `Readonly` **error**: [`Option`](../modules/option.md#option)<[`Error`](disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[InteractiveSourceLike](interactiveSource.InteractiveSourceLike.md).[error](interactiveSource.InteractiveSourceLike.md#error)

___

### hasCurrent

• `Readonly` **hasCurrent**: `boolean`

___

### isDisposed

• `Readonly` **isDisposed**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[InteractiveSourceLike](interactiveSource.InteractiveSourceLike.md).[isDisposed](interactiveSource.InteractiveSourceLike.md#isdisposed)

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`EnumeratorLike`](enumerator.EnumeratorLike.md)<`T`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[InteractiveSourceLike](interactiveSource.InteractiveSourceLike.md).[add](interactiveSource.InteractiveSourceLike.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`EnumeratorLike`](enumerator.EnumeratorLike.md)<`T`\> | - |
| `error?` | [`Error`](disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[InteractiveSourceLike](interactiveSource.InteractiveSourceLike.md).[dispose](interactiveSource.InteractiveSourceLike.md#dispose)

___

### move

▸ **move**(): `boolean`

#### Returns

`boolean`

#### Overrides

[InteractiveSourceLike](interactiveSource.InteractiveSourceLike.md).[move](interactiveSource.InteractiveSourceLike.md#move)
