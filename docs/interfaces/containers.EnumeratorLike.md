[Reactive-JS](../README.md) / [containers](../modules/containers.md) / EnumeratorLike

# Interface: EnumeratorLike<T\>

[containers](../modules/containers.md).EnumeratorLike

An interactive mutable `ContainerLike` that can be used to iterate
over an underlying source of data.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ContainerLike`](containers.ContainerLike.md)

  ↳ **`EnumeratorLike`**

## Table of contents

### Properties

- [[\_\_\_ContainerLike\_type]](containers.EnumeratorLike.md#[___containerlike_type])
- [[\_\_\_EnumeratorLike\_current]](containers.EnumeratorLike.md#[___enumeratorlike_current])
- [[\_\_\_EnumeratorLike\_hasCurrent]](containers.EnumeratorLike.md#[___enumeratorlike_hascurrent])

### Methods

- [[\_\_\_EnumeratorLike\_move]](containers.EnumeratorLike.md#[___enumeratorlike_move])

## Properties

### [\_\_\_ContainerLike\_type]

• `Optional` `Readonly` **[\_\_\_ContainerLike\_type]**: [`EnumeratorLike`](containers.EnumeratorLike.md)<`unknown`\>

#### Overrides

[ContainerLike](containers.ContainerLike.md).[[___ContainerLike_type]](containers.ContainerLike.md#[___containerlike_type])

___

### [\_\_\_EnumeratorLike\_current]

• `Readonly` **[\_\_\_EnumeratorLike\_current]**: `T`

Returns the element if present.

___

### [\_\_\_EnumeratorLike\_hasCurrent]

• `Readonly` **[\_\_\_EnumeratorLike\_hasCurrent]**: `boolean`

Indicates if the `EnumeratorLike` has a current value.

## Methods

### [\_\_\_EnumeratorLike\_move]

▸ **[___EnumeratorLike_move]**(): `boolean`

Advances the enumerator to the next value, if present.

#### Returns

`boolean`

true if successful, otherwise false.
