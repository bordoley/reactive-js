[Reactive-JS](../README.md) / utils/SerialDisposable

# Module: utils/SerialDisposable

## Table of contents

### Functions

- [create](utils_SerialDisposable.md#create)

## Functions

### create

▸ **create**(): [`SerialDisposableLike`](../interfaces/utils.SerialDisposableLike.md)\<[`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

#### Returns

[`SerialDisposableLike`](../interfaces/utils.SerialDisposableLike.md)\<[`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **create**\<`TDisposable`\>(`initialValue`): [`SerialDisposableLike`](../interfaces/utils.SerialDisposableLike.md)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `TDisposable` |

#### Returns

[`SerialDisposableLike`](../interfaces/utils.SerialDisposableLike.md)\<`TDisposable`\>
