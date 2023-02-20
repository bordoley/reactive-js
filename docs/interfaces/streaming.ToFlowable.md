[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / ToFlowable

# Interface: ToFlowable<C, O\>

[streaming](../modules/streaming.md).ToFlowable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ToFlowable`**

## Table of contents

### Properties

- [ContainerLike\_type](streaming.ToFlowable.md#containerlike_type)

### Converter Methods

- [toFlowable](streaming.ToFlowable.md#toflowable)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Converter Methods

### toFlowable

▸ **toFlowable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`FlowableLike`](streaming.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`FlowableLike`](streaming.FlowableLike.md)<`T`\>\>
