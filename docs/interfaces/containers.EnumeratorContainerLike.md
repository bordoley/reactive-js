[Reactive-JS](../README.md) / [containers](../modules/containers.md) / EnumeratorContainerLike

# Interface: EnumeratorContainerLike<T\>

[containers](../modules/containers.md).EnumeratorContainerLike

An interactive mutable `ContainerLike` that can be used to iterate
over an underlying source of data.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`EnumeratorLike`](containers.EnumeratorLike.md)<`T`\>

- [`ContainerLike`](containers.ContainerLike.md)

  ↳ **`EnumeratorContainerLike`**

## Table of contents

### Properties

- [[\_\_\_ContainerLike\_T]](containers.EnumeratorContainerLike.md#[___containerlike_t])
- [[\_\_\_ContainerLike\_type]](containers.EnumeratorContainerLike.md#[___containerlike_type])
- [[\_\_\_EnumeratorLike\_current]](containers.EnumeratorContainerLike.md#[___enumeratorlike_current])
- [[\_\_\_EnumeratorLike\_hasCurrent]](containers.EnumeratorContainerLike.md#[___enumeratorlike_hascurrent])

### Methods

- [[\_\_\_EnumeratorLike\_move]](containers.EnumeratorContainerLike.md#[___enumeratorlike_move])

## Properties

### [\_\_\_ContainerLike\_T]

• `Optional` `Readonly` **[\_\_\_ContainerLike\_T]**: `unknown`

#### Inherited from

[ContainerLike](containers.ContainerLike.md).[[___ContainerLike_T]](containers.ContainerLike.md#[___containerlike_t])

___

### [\_\_\_ContainerLike\_type]

• `Optional` `Readonly` **[\_\_\_ContainerLike\_type]**: [`EnumeratorLike`](containers.EnumeratorLike.md)<`unknown`\>

#### Overrides

[ContainerLike](containers.ContainerLike.md).[[___ContainerLike_type]](containers.ContainerLike.md#[___containerlike_type])

___

### [\_\_\_EnumeratorLike\_current]

• `Readonly` **[\_\_\_EnumeratorLike\_current]**: `T`

Returns the element if present.

#### Inherited from

[EnumeratorLike](containers.EnumeratorLike.md).[[___EnumeratorLike_current]](containers.EnumeratorLike.md#[___enumeratorlike_current])

___

### [\_\_\_EnumeratorLike\_hasCurrent]

• `Readonly` **[\_\_\_EnumeratorLike\_hasCurrent]**: `boolean`

Indicates if the `EnumeratorLike` has a current value.

#### Inherited from

[EnumeratorLike](containers.EnumeratorLike.md).[[___EnumeratorLike_hasCurrent]](containers.EnumeratorLike.md#[___enumeratorlike_hascurrent])

## Methods

### [\_\_\_EnumeratorLike\_move]

▸ **[___EnumeratorLike_move]**(): `boolean`

Advances the enumerator to the next value, if present.

#### Returns

`boolean`

true if successful, otherwise false.

#### Inherited from

[EnumeratorLike](containers.EnumeratorLike.md).[[___EnumeratorLike_move]](containers.EnumeratorLike.md#[___enumeratorlike_move])
