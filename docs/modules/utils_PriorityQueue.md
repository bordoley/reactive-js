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
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |

#### Returns

[`QueueLike`](../interfaces/utils.QueueLike.md)<`T`\>
