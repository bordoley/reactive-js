[Reactive-JS](../README.md) / utils/IndexedQueue

# Module: utils/IndexedQueue

## Table of contents

### Functions

- [create](utils_IndexedQueue.md#create)

## Functions

### create

▸ **create**<`T`\>(`capacity`, `backpressureStrategy`): [`IndexedQueueLike`](../interfaces/utils.IndexedQueueLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `capacity` | `number` |
| `backpressureStrategy` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |

#### Returns

[`IndexedQueueLike`](../interfaces/utils.IndexedQueueLike.md)<`T`\>
