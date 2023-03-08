[Reactive-JS](../README.md) / [util](../modules/util.md) / EnumeratorLike

# Interface: EnumeratorLike<T\>

[util](../modules/util.md).EnumeratorLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ContainerLike`](containers.ContainerLike.md)

  ↳ **`EnumeratorLike`**

  ↳↳ [`DisposableEnumeratorLike`](util.DisposableEnumeratorLike.md)

## Table of contents

### Properties

- [[ContainerLike\_type]](util.EnumeratorLike.md#[containerlike_type])
- [[EnumeratorLike\_current]](util.EnumeratorLike.md#[enumeratorlike_current])
- [[EnumeratorLike\_hasCurrent]](util.EnumeratorLike.md#[enumeratorlike_hascurrent])

### Methods

- [[EnumeratorLike\_move]](util.EnumeratorLike.md#[enumeratorlike_move])

## Properties

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`EnumeratorLike`](util.EnumeratorLike.md)<`unknown`\>

#### Overrides

[ContainerLike](containers.ContainerLike.md).[[ContainerLike_type]](containers.ContainerLike.md#[containerlike_type])

___

### [EnumeratorLike\_current]

• `Readonly` **[EnumeratorLike\_current]**: `T`

___

### [EnumeratorLike\_hasCurrent]

• `Readonly` **[EnumeratorLike\_hasCurrent]**: `boolean`

## Methods

### [EnumeratorLike\_move]

▸ **[EnumeratorLike_move]**(): `boolean`

#### Returns

`boolean`
