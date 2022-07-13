[Reactive-JS](../README.md) / [ix/InteractiveContainerLike](../modules/ix_InteractiveContainerLike.md) / InteractiveContainerLike

# Interface: InteractiveContainerLike<T\>

[ix/InteractiveContainerLike](../modules/ix_InteractiveContainerLike.md).InteractiveContainerLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`StatefulContainerLike`](containers_StatefulContainerLike.StatefulContainerLike.md)<`T`\>

  ↳ **`InteractiveContainerLike`**

  ↳↳ [`AsyncEnumerableLike`](ix_AsyncEnumerableLike.AsyncEnumerableLike.md)

  ↳↳ [`EnumerableLike`](ix_EnumerableLike.EnumerableLike.md)

## Table of contents

### Properties

- [T](ix_InteractiveContainerLike.InteractiveContainerLike.md#t)
- [TContainerOf](ix_InteractiveContainerLike.InteractiveContainerLike.md#tcontainerof)
- [TCtx](ix_InteractiveContainerLike.InteractiveContainerLike.md#tctx)
- [TStatefulContainerState](ix_InteractiveContainerLike.InteractiveContainerLike.md#tstatefulcontainerstate)

### Methods

- [[InteractiveContainerLike\_interact]](ix_InteractiveContainerLike.InteractiveContainerLike.md#[interactivecontainerlike_interact])

## Properties

### T

• **T**: `undefined` \| `T`

#### Inherited from

[StatefulContainerLike](containers_StatefulContainerLike.StatefulContainerLike.md).[T](containers_StatefulContainerLike.StatefulContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: [`InteractiveContainerLike`](ix_InteractiveContainerLike.InteractiveContainerLike.md)<`T`\>

#### Inherited from

[StatefulContainerLike](containers_StatefulContainerLike.StatefulContainerLike.md).[TContainerOf](containers_StatefulContainerLike.StatefulContainerLike.md#tcontainerof)

___

### TCtx

• `Optional` `Readonly` **TCtx**: `unknown`

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`InteractiveSourceLike`](ix_InteractiveSourceLike.InteractiveSourceLike.md)

#### Overrides

[StatefulContainerLike](containers_StatefulContainerLike.StatefulContainerLike.md).[TStatefulContainerState](containers_StatefulContainerLike.StatefulContainerLike.md#tstatefulcontainerstate)

## Methods

### [InteractiveContainerLike\_interact]

▸ **[InteractiveContainerLike_interact]**(`_`): [`InteractiveSourceLike`](ix_InteractiveSourceLike.InteractiveSourceLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `unknown` |

#### Returns

[`InteractiveSourceLike`](ix_InteractiveSourceLike.InteractiveSourceLike.md)
