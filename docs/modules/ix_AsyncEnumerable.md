[Reactive-JS](../README.md) / ix/AsyncEnumerable

# Module: ix/AsyncEnumerable

## Table of contents

### Functions

- [enumerate](ix_AsyncEnumerable.md#enumerate)

## Functions

### enumerate

▸ **enumerate**<`T`\>(`scheduler`, `options?`): (`enumerable`: [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`\>) => [`StreamLike`](../interfaces/streaming.StreamLike.md)<`void`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

`fn`

▸ (`enumerable`): [`StreamLike`](../interfaces/streaming.StreamLike.md)<`void`, `T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `enumerable` | [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`\> |

##### Returns

[`StreamLike`](../interfaces/streaming.StreamLike.md)<`void`, `T`\>
