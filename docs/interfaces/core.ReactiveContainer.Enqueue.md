[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / Enqueue

# Interface: Enqueue<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).Enqueue

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Operator Methods

- [enqueue](core.ReactiveContainer.Enqueue.md#enqueue)

## Operator Methods

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](core.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>
