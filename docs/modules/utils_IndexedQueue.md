[Reactive-JS](../README.md) / utils/IndexedQueue

# Module: utils/IndexedQueue

## Table of contents

### Functions

- [create](utils_IndexedQueue.md#create)

## Functions

### create

▸ **create**<`T`\>(`options?`): [`IndexedQueueLike`](../interfaces/utils.IndexedQueueLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`IndexedQueueLike`](../interfaces/utils.IndexedQueueLike.md)<`T`\>
