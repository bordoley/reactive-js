[Reactive-JS](../README.md) / rx/AsyncEnumerable

# Module: rx/AsyncEnumerable

## Table of contents

### Functions

- [toStreamable](rx_AsyncEnumerable.md#tostreamable)

## Functions

### toStreamable

▸ **toStreamable**<`T`\>(): (`enumerable`: [`AsyncEnumerableLike`](../interfaces/rx.AsyncEnumerableLike.md)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`\>) => [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`unknown`, `unknown`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`unknown`, `unknown`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`fn`

▸ (`enumerable`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`unknown`, `unknown`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`unknown`, `unknown`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `enumerable` | [`AsyncEnumerableLike`](../interfaces/rx.AsyncEnumerableLike.md)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`\> |

##### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`unknown`, `unknown`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`unknown`, `unknown`\>\>
