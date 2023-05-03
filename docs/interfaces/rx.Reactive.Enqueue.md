[Reactive-JS](../README.md) / [rx](../modules/rx.md) / [Reactive](../modules/rx.Reactive.md) / Enqueue

# Interface: Enqueue<C\>

[rx](../modules/rx.md).[Reactive](../modules/rx.Reactive.md).Enqueue

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container-1.md) |

## Table of contents

### Operator Methods

- [enqueue](rx.Reactive.Enqueue.md#enqueue)

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
