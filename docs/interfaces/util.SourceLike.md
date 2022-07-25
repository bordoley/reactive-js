[Reactive-JS](../README.md) / [util](../modules/util.md) / SourceLike

# Interface: SourceLike

[util](../modules/util.md).SourceLike

## Hierarchy

- [`DisposableLike`](util.DisposableLike.md)

  ↳ **`SourceLike`**

  ↳↳ [`AsyncEnumeratorLike`](streaming.AsyncEnumeratorLike.md)

  ↳↳ [`EnumeratorLike`](util.EnumeratorLike.md)

## Table of contents

### Properties

- [[DisposableLike\_error]](util.SourceLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](util.SourceLike.md#[disposablelike_isdisposed])

### Methods

- [[DisposableLike\_add]](util.SourceLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](util.SourceLike.md#[disposablelike_dispose])
- [[SourceLike\_move]](util.SourceLike.md#[sourcelike_move])

## Properties

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Option`](../modules/functions.md#option)<[`Error`](../modules/util.md#error)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[DisposableLike](util.DisposableLike.md).[[DisposableLike_error]](util.DisposableLike.md#[disposablelike_error])

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
| `error?` | [`Error`](../modules/util.md#error) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[DisposableLike](util.DisposableLike.md).[[DisposableLike_dispose]](util.DisposableLike.md#[disposablelike_dispose])

___

### [SourceLike\_move]

▸ **[SourceLike_move]**(): `void`

#### Returns

`void`
