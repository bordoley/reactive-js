[Reactive-JS](../README.md) / [ix](../modules/ix.md) / InteractiveContainerLike

# Interface: InteractiveContainerLike<TSource, TCtx\>

[ix](../modules/ix.md).InteractiveContainerLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TSource` | extends [`DisposableLike`](util.DisposableLike.md) |
| `TCtx` | `void` |

## Hierarchy

- [`StatefulContainerLike`](containers.StatefulContainerLike.md)

  ↳ **`InteractiveContainerLike`**

  ↳↳ [`EnumerableLike`](ix.EnumerableLike.md)

  ↳↳ [`AsyncEnumerableLike`](ix.AsyncEnumerableLike.md)

## Table of contents

### Properties

- [[StatefulContainerLike\_variance]](ix.InteractiveContainerLike.md#[statefulcontainerlike_variance])

### Methods

- [[InteractiveContainerLike\_interact]](ix.InteractiveContainerLike.md#[interactivecontainerlike_interact])

## Properties

### [StatefulContainerLike\_variance]

• `Optional` `Readonly` **[StatefulContainerLike\_variance]**: ``"interactive"``

#### Overrides

[StatefulContainerLike](containers.StatefulContainerLike.md).[[StatefulContainerLike_variance]](containers.StatefulContainerLike.md#[statefulcontainerlike_variance])

## Methods

### [InteractiveContainerLike\_interact]

▸ **[InteractiveContainerLike_interact]**(`ctx`): `TSource`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `TCtx` |

#### Returns

`TSource`
