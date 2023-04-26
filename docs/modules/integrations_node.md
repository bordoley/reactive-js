[Reactive-JS](../README.md) / integrations/node

# Module: integrations/node

## Table of contents

### Functions

- [read](integrations_node.md#read)
- [writeTo](integrations_node.md#writeto)

## Functions

### read

▸ **read**(`scheduler`, `options?`): [`Function1`](functions.md#function1)<`Readable` \| [`Factory`](functions.md#factory)<`Readable`\>, [`FlowableObservableLike`](../interfaces/rx.FlowableObservableLike.md)<`Uint8Array`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<`Readable` \| [`Factory`](functions.md#factory)<`Readable`\>, [`FlowableObservableLike`](../interfaces/rx.FlowableObservableLike.md)<`Uint8Array`\>\>

___

### writeTo

▸ **writeTo**(`factory`): (`flowable`: [`FlowableObservableLike`](../interfaces/rx.FlowableObservableLike.md)<`Uint8Array`\>) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | `Writable` \| [`Factory`](functions.md#factory)<`Writable`\> |

#### Returns

`fn`

▸ (`flowable`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `flowable` | [`FlowableObservableLike`](../interfaces/rx.FlowableObservableLike.md)<`Uint8Array`\> |

##### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`void`\>
