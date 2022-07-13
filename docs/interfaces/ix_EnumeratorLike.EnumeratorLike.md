[Reactive-JS](../README.md) / [ix/EnumeratorLike](../modules/ix_EnumeratorLike.md) / EnumeratorLike

# Interface: EnumeratorLike<T\>

[ix/EnumeratorLike](../modules/ix_EnumeratorLike.md).EnumeratorLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`InteractiveSourceLike`](ix_InteractiveSourceLike.InteractiveSourceLike.md)

  ↳ **`EnumeratorLike`**

  ↳↳ [`VirtualTimeSchedulerLike`](scheduling_SchedulerLike.VirtualTimeSchedulerLike.md)

## Table of contents

### Properties

- [[DisposableLike\_error]](ix_EnumeratorLike.EnumeratorLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](ix_EnumeratorLike.EnumeratorLike.md#[disposablelike_isdisposed])
- [[EnumeratorLike\_current]](ix_EnumeratorLike.EnumeratorLike.md#[enumeratorlike_current])
- [[EnumeratorLike\_hasCurrent]](ix_EnumeratorLike.EnumeratorLike.md#[enumeratorlike_hascurrent])

### Methods

- [[DisposableLike\_add]](ix_EnumeratorLike.EnumeratorLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](ix_EnumeratorLike.EnumeratorLike.md#[disposablelike_dispose])
- [[InteractiveSourceLike\_move]](ix_EnumeratorLike.EnumeratorLike.md#[interactivesourcelike_move])

## Properties

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Option`](../modules/util_Option.md#option)<[`Error`](../modules/util_DisposableLike.md#error)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[InteractiveSourceLike](ix_InteractiveSourceLike.InteractiveSourceLike.md).[[DisposableLike_error]](ix_InteractiveSourceLike.InteractiveSourceLike.md#[disposablelike_error])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[InteractiveSourceLike](ix_InteractiveSourceLike.InteractiveSourceLike.md).[[DisposableLike_isDisposed]](ix_InteractiveSourceLike.InteractiveSourceLike.md#[disposablelike_isdisposed])

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
| `disposable` | [`DisposableOrTeardown`](../modules/util_DisposableLike.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[InteractiveSourceLike](ix_InteractiveSourceLike.InteractiveSourceLike.md).[[DisposableLike_add]](ix_InteractiveSourceLike.InteractiveSourceLike.md#[disposablelike_add])

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

[InteractiveSourceLike](ix_InteractiveSourceLike.InteractiveSourceLike.md).[[DisposableLike_dispose]](ix_InteractiveSourceLike.InteractiveSourceLike.md#[disposablelike_dispose])

___

### [InteractiveSourceLike\_move]

▸ **[InteractiveSourceLike_move]**(): `void`

#### Returns

`void`

#### Inherited from

[InteractiveSourceLike](ix_InteractiveSourceLike.InteractiveSourceLike.md).[[InteractiveSourceLike_move]](ix_InteractiveSourceLike.InteractiveSourceLike.md#[interactivesourcelike_move])
