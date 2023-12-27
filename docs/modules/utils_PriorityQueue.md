[Reactive-JS](../README.md) / utils/PriorityQueue

# Module: utils/PriorityQueue

## Table of contents

### Functions

- [create](utils_PriorityQueue.md#create)

## Functions

### create

▸ **create**<`T`\>(`comparator`, `options?`): [`QueueLike`](../interfaces/utils.QueueLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `comparator` | [`Comparator`](functions.md#comparator)<`T`\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`QueueLike`](../interfaces/utils.QueueLike.md)<`T`\>
