[Reactive-JS](../README.md) / [ix](../modules/ix.md) / SourceLike

# Interface: SourceLike

[ix](../modules/ix.md).SourceLike

## Hierarchy

- [`DisposableLike`](util.DisposableLike.md)

  ↳ **`SourceLike`**

  ↳↳ [`AsyncEnumeratorLike`](ix.AsyncEnumeratorLike.md)

  ↳↳ [`EnumeratorLike`](ix.EnumeratorLike.md)

## Table of contents

### Properties

- [[DisposableLike\_exception]](ix.SourceLike.md#[disposablelike_exception])
- [[DisposableLike\_isDisposed]](ix.SourceLike.md#[disposablelike_isdisposed])

### Methods

- [[DisposableLike\_add]](ix.SourceLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](ix.SourceLike.md#[disposablelike_dispose])
- [[SourceLike\_move]](ix.SourceLike.md#[sourcelike_move])

## Properties

### [DisposableLike\_exception]

• `Readonly` **[DisposableLike\_exception]**: [`Option`](../modules/functions.md#option)<[`Exception`](../modules/util.md#exception)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[DisposableLike](util.DisposableLike.md).[[DisposableLike_exception]](util.DisposableLike.md#[disposablelike_exception])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[DisposableLike](util.DisposableLike.md).[[DisposableLike_isDisposed]](util.DisposableLike.md#[disposablelike_isdisposed])

## Methods

### [DisposableLike\_add]

▸ **[DisposableLike_add]**(`disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableOrTeardown`](../modules/util.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[DisposableLike](util.DisposableLike.md).[[DisposableLike_add]](util.DisposableLike.md#[disposablelike_add])

___

### [DisposableLike\_dispose]

▸ **[DisposableLike_dispose]**(`error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | [`Exception`](../modules/util.md#exception) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[DisposableLike](util.DisposableLike.md).[[DisposableLike_dispose]](util.DisposableLike.md#[disposablelike_dispose])

___

### [SourceLike\_move]

▸ **[SourceLike_move]**(): `void`

#### Returns

`void`
