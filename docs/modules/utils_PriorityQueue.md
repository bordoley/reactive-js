[Reactive-JS](../README.md) / utils/PriorityQueue

# Module: utils/PriorityQueue

## Table of contents

### Functions

- [create](utils_PriorityQueue.md#create)

## Functions

### create

▸ **create**<`T`\>(`comparator`, `capacity`, `backpressureStrategy`): [`QueueCollectionLike`](../interfaces/utils.QueueCollectionLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `comparator` | [`Comparator`](functions.md#comparator)<`T`\> |
| `capacity` | `number` |
| `backpressureStrategy` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |

#### Returns

[`QueueCollectionLike`](../interfaces/utils.QueueCollectionLike.md)<`T`\>
