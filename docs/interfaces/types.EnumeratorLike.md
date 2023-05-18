[Reactive-JS](../README.md) / [types](../modules/types.md) / EnumeratorLike

# Interface: EnumeratorLike<T\>

[types](../modules/types.md).EnumeratorLike

An interactive mutable enumerator that can be used to iterate
over an underlying source of data.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`DisposableLike`](types.DisposableLike.md)

  ↳ **`EnumeratorLike`**

## Table of contents

### Properties

- [[\_\_\_DisposableLike\_error]](types.EnumeratorLike.md#[___disposablelike_error])
- [[\_\_\_DisposableLike\_isDisposed]](types.EnumeratorLike.md#[___disposablelike_isdisposed])
- [[\_\_\_EnumeratorLike\_current]](types.EnumeratorLike.md#[___enumeratorlike_current])
- [[\_\_\_EnumeratorLike\_hasCurrent]](types.EnumeratorLike.md#[___enumeratorlike_hascurrent])

### Methods

- [[\_\_\_DisposableLike\_add]](types.EnumeratorLike.md#[___disposablelike_add])
- [[\_\_\_DisposableLike\_dispose]](types.EnumeratorLike.md#[___disposablelike_dispose])
- [[\_\_\_EnumeratorLike\_move]](types.EnumeratorLike.md#[___enumeratorlike_move])

## Properties

### [\_\_\_DisposableLike\_error]

• `Readonly` **[\_\_\_DisposableLike\_error]**: [`Optional`](../modules/functions.md#optional)<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[DisposableLike](types.DisposableLike.md).[[___DisposableLike_error]](types.DisposableLike.md#[___disposablelike_error])

___

### [\_\_\_DisposableLike\_isDisposed]

• `Readonly` **[\_\_\_DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[DisposableLike](types.DisposableLike.md).[[___DisposableLike_isDisposed]](types.DisposableLike.md#[___disposablelike_isdisposed])

___

### [\_\_\_EnumeratorLike\_current]

• `Readonly` **[\_\_\_EnumeratorLike\_current]**: `T`

Returns the element if present.

___

### [\_\_\_EnumeratorLike\_hasCurrent]

• `Readonly` **[\_\_\_EnumeratorLike\_hasCurrent]**: `boolean`

Indicates if the `EnumeratorLike` has a current value.

## Methods

### [\_\_\_DisposableLike\_add]

▸ **[___DisposableLike_add]**(`disposable`): `void`

Adds the given `DisposableLike` or teardown function to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `disposable` | [`DisposableLike`](types.DisposableLike.md) | The disposable to add. |

#### Returns

`void`

#### Inherited from

[DisposableLike](types.DisposableLike.md).[[___DisposableLike_add]](types.DisposableLike.md#[___disposablelike_add])

▸ **[___DisposableLike_add]**(`teardown`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`Optional`](../modules/functions.md#optional)<`Error`\>\> |

#### Returns

`void`

#### Inherited from

[DisposableLike](types.DisposableLike.md).[[___DisposableLike_add]](types.DisposableLike.md#[___disposablelike_add])

___

### [\_\_\_DisposableLike\_dispose]

▸ **[___DisposableLike_dispose]**(`error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[DisposableLike](types.DisposableLike.md).[[___DisposableLike_dispose]](types.DisposableLike.md#[___disposablelike_dispose])

___

### [\_\_\_EnumeratorLike\_move]

▸ **[___EnumeratorLike_move]**(): `boolean`

Advances the enumerator to the next value, if present.

#### Returns

`boolean`

true if successful, otherwise false.
