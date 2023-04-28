[Reactive-JS](../README.md) / [rx](../modules/rx.md) / Enqueue

# Interface: Enqueue<C\>

[rx](../modules/rx.md).Enqueue

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |

## Table of contents

### Operator Methods

- [enqueue](rx.Enqueue.md#enqueue)

## Operator Methods

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](util.QueueableLike.md)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
