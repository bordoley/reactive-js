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

- [[ContainerLike\_type]](containers.EnumeratorLike.md#[containerlike_type])
- [[EnumeratorLike\_current]](containers.EnumeratorLike.md#[enumeratorlike_current])
- [[EnumeratorLike\_hasCurrent]](containers.EnumeratorLike.md#[enumeratorlike_hascurrent])

### Methods

- [[EnumeratorLike\_move]](containers.EnumeratorLike.md#[enumeratorlike_move])

## Properties

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`EnumeratorLike`](containers.EnumeratorLike.md)<`unknown`\>

#### Overrides

[ContainerLike](containers.ContainerLike.md).[[ContainerLike_type]](containers.ContainerLike.md#[containerlike_type])

___

### [EnumeratorLike\_current]

• `Readonly` **[EnumeratorLike\_current]**: `T`

Returns the element if present.

___

### [EnumeratorLike\_hasCurrent]

• `Readonly` **[EnumeratorLike\_hasCurrent]**: `boolean`

Indicates if the `EnumeratorLike` has a current value.

## Methods

### [EnumeratorLike\_move]

▸ **[EnumeratorLike_move]**(): `boolean`

Advances the enumerator to the next value, if present.

#### Returns

`boolean`

true if successful, otherwise false.
