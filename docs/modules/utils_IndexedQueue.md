[Reactive-JS](../README.md) / utils/IndexedQueue

# Module: utils/IndexedQueue

## Table of contents

### Functions

- [create](utils_IndexedQueue.md#create)
- [toReadonlyArray](utils_IndexedQueue.md#toreadonlyarray)

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

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<[`IndexedQueueLike`](../interfaces/utils.IndexedQueueLike.md)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`IndexedQueueLike`](../interfaces/utils.IndexedQueueLike.md)<`T`\>, readonly `T`[]\>
