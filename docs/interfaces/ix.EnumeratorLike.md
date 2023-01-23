[Reactive-JS](../README.md) / [ix](../modules/ix.md) / EnumeratorLike

# Interface: EnumeratorLike<T\>

[ix](../modules/ix.md).EnumeratorLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`SourceLike`](ix.SourceLike.md)

  ↳ **`EnumeratorLike`**

## Table of contents

### Properties

- [[DisposableLike\_error]](ix.EnumeratorLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](ix.EnumeratorLike.md#[disposablelike_isdisposed])
- [[EnumeratorLike\_current]](ix.EnumeratorLike.md#[enumeratorlike_current])
- [[EnumeratorLike\_hasCurrent]](ix.EnumeratorLike.md#[enumeratorlike_hascurrent])

### Methods

- [[DisposableLike\_add]](ix.EnumeratorLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](ix.EnumeratorLike.md#[disposablelike_dispose])
- [[SourceLike\_move]](ix.EnumeratorLike.md#[sourcelike_move])

## Properties

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Optional`](../modules/functions.md#optional)<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[SourceLike](ix.SourceLike.md).[[DisposableLike_error]](ix.SourceLike.md#[disposablelike_error])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[SourceLike](ix.SourceLike.md).[[DisposableLike_isDisposed]](ix.SourceLike.md#[disposablelike_isdisposed])

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

[SourceLike](ix.SourceLike.md).[[DisposableLike_add]](ix.SourceLike.md#[disposablelike_add])

___

### [DisposableLike\_dispose]

▸ **[DisposableLike_dispose]**(`error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[SourceLike](ix.SourceLike.md).[[DisposableLike_dispose]](ix.SourceLike.md#[disposablelike_dispose])

___

### [SourceLike\_move]

▸ **[SourceLike_move]**(): `void`

#### Returns

`void`

#### Inherited from

[SourceLike](ix.SourceLike.md).[[SourceLike_move]](ix.SourceLike.md#[sourcelike_move])
