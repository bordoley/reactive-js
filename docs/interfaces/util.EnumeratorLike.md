[Reactive-JS](../README.md) / [util](../modules/util.md) / EnumeratorLike

# Interface: EnumeratorLike<T\>

[util](../modules/util.md).EnumeratorLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`SourceLike`](util.SourceLike.md)

  ↳ **`EnumeratorLike`**

## Table of contents

### Properties

- [[DisposableLike\_error]](util.EnumeratorLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](util.EnumeratorLike.md#[disposablelike_isdisposed])
- [[EnumeratorLike\_current]](util.EnumeratorLike.md#[enumeratorlike_current])
- [[EnumeratorLike\_hasCurrent]](util.EnumeratorLike.md#[enumeratorlike_hascurrent])

### Methods

- [[DisposableLike\_add]](util.EnumeratorLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](util.EnumeratorLike.md#[disposablelike_dispose])
- [[SourceLike\_move]](util.EnumeratorLike.md#[sourcelike_move])

## Properties

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Option`](../modules/functions.md#option)<[`Error`](../modules/util.md#error)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[SourceLike](util.SourceLike.md).[[DisposableLike_error]](util.SourceLike.md#[disposablelike_error])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[SourceLike](util.SourceLike.md).[[DisposableLike_isDisposed]](util.SourceLike.md#[disposablelike_isdisposed])

___

### [EnumeratorLike\_current]

• `Readonly` **[EnumeratorLike\_current]**: `T`

___

### [EnumeratorLike\_hasCurrent]

• `Readonly` **[EnumeratorLike\_hasCurrent]**: `boolean`

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

[SourceLike](util.SourceLike.md).[[DisposableLike_add]](util.SourceLike.md#[disposablelike_add])

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

[SourceLike](util.SourceLike.md).[[DisposableLike_dispose]](util.SourceLike.md#[disposablelike_dispose])

___

### [SourceLike\_move]

▸ **[SourceLike_move]**(): `void`

#### Returns

`void`

#### Inherited from

[SourceLike](util.SourceLike.md).[[SourceLike_move]](util.SourceLike.md#[sourcelike_move])
