[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / FromFlowable

# Interface: FromFlowable<C, O\>

[streaming](../modules/streaming.md).FromFlowable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`FromFlowable`**

## Table of contents

### Constructor Methods

- [fromFlowable](streaming.FromFlowable.md#fromflowable)

## Constructor Methods

### fromFlowable

▸ **fromFlowable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`FlowableLike`](streaming.FlowableLike.md)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`FlowableLike`](streaming.FlowableLike.md)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>
