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

  ↳↳ [`AsyncEnumerableLike`](ix.AsyncEnumerableLike.md)

  ↳↳ [`EnumerableLike`](ix.EnumerableLike.md)

## Table of contents

### Properties

- [T](ix.InteractiveContainerLike.md#t)
- [TContainerOf](ix.InteractiveContainerLike.md#tcontainerof)
- [TStatefulContainerState](ix.InteractiveContainerLike.md#tstatefulcontainerstate)

### Methods

- [[InteractiveContainerLike\_interact]](ix.InteractiveContainerLike.md#[interactivecontainerlike_interact])

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[StatefulContainerLike](containers.StatefulContainerLike.md).[T](containers.StatefulContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `unknown`

#### Inherited from

[StatefulContainerLike](containers.StatefulContainerLike.md).[TContainerOf](containers.StatefulContainerLike.md#tcontainerof)

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`DisposableLike`](util.DisposableLike.md)

#### Inherited from

[StatefulContainerLike](containers.StatefulContainerLike.md).[TStatefulContainerState](containers.StatefulContainerLike.md#tstatefulcontainerstate)

## Methods

### [InteractiveContainerLike\_interact]

▸ **[InteractiveContainerLike_interact]**(`ctx`): `TSource`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `TCtx` |

#### Returns

`TSource`
