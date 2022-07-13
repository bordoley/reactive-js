[Reactive-JS](../README.md) / [ix/InteractiveSourceLike](../modules/ix_InteractiveSourceLike.md) / InteractiveSourceLike

# Interface: InteractiveSourceLike

[ix/InteractiveSourceLike](../modules/ix_InteractiveSourceLike.md).InteractiveSourceLike

## Hierarchy

- [`DisposableLike`](util_DisposableLike.DisposableLike.md)

  ↳ **`InteractiveSourceLike`**

  ↳↳ [`AsyncEnumeratorLike`](ix_AsyncEnumeratorLike.AsyncEnumeratorLike.md)

  ↳↳ [`EnumeratorLike`](ix_EnumeratorLike.EnumeratorLike.md)

## Table of contents

### Properties

- [[DisposableLike\_error]](ix_InteractiveSourceLike.InteractiveSourceLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](ix_InteractiveSourceLike.InteractiveSourceLike.md#[disposablelike_isdisposed])

### Methods

- [[DisposableLike\_add]](ix_InteractiveSourceLike.InteractiveSourceLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](ix_InteractiveSourceLike.InteractiveSourceLike.md#[disposablelike_dispose])
- [[InteractiveSourceLike\_move]](ix_InteractiveSourceLike.InteractiveSourceLike.md#[interactivesourcelike_move])

## Properties

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Option`](../modules/util_Option.md#option)<[`Error`](../modules/util_DisposableLike.md#error)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[DisposableLike](util_DisposableLike.DisposableLike.md).[[DisposableLike_error]](util_DisposableLike.DisposableLike.md#[disposablelike_error])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[DisposableLike](util_DisposableLike.DisposableLike.md).[[DisposableLike_isDisposed]](util_DisposableLike.DisposableLike.md#[disposablelike_isdisposed])

## Methods

### [DisposableLike\_add]

▸ **[DisposableLike_add]**(`disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableOrTeardown`](../modules/util_DisposableLike.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[DisposableLike](util_DisposableLike.DisposableLike.md).[[DisposableLike_add]](util_DisposableLike.DisposableLike.md#[disposablelike_add])

___

### [DisposableLike\_dispose]

▸ **[DisposableLike_dispose]**(`error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | [`Error`](../modules/util_DisposableLike.md#error) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[DisposableLike](util_DisposableLike.DisposableLike.md).[[DisposableLike_dispose]](util_DisposableLike.DisposableLike.md#[disposablelike_dispose])

___

### [InteractiveSourceLike\_move]

▸ **[InteractiveSourceLike_move]**(): `void`

#### Returns

`void`
