[Reactive-JS](../README.md) / [containers/StatefulContainerLike](../modules/containers_StatefulContainerLike.md) / StatefulContainerLike

# Interface: StatefulContainerLike<T\>

[containers/StatefulContainerLike](../modules/containers_StatefulContainerLike.md).StatefulContainerLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ContainerLike`](containers_ContainerLike.ContainerLike.md)<`T`\>

  ↳ **`StatefulContainerLike`**

  ↳↳ [`InteractiveContainerLike`](ix_InteractiveContainerLike.InteractiveContainerLike.md)

  ↳↳ [`ReactiveContainerLike`](rx_ReactiveContainerLike.ReactiveContainerLike.md)

## Table of contents

### Properties

- [T](containers_StatefulContainerLike.StatefulContainerLike.md#t)
- [TContainerOf](containers_StatefulContainerLike.StatefulContainerLike.md#tcontainerof)
- [TStatefulContainerState](containers_StatefulContainerLike.StatefulContainerLike.md#tstatefulcontainerstate)

## Properties

### T

• **T**: `undefined` \| `T`

#### Inherited from

[ContainerLike](containers_ContainerLike.ContainerLike.md).[T](containers_ContainerLike.ContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: [`StatefulContainerLike`](containers_StatefulContainerLike.StatefulContainerLike.md)<`T`\>

#### Overrides

[ContainerLike](containers_ContainerLike.ContainerLike.md).[TContainerOf](containers_ContainerLike.ContainerLike.md#tcontainerof)

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`DisposableLike`](util_DisposableLike.DisposableLike.md)
