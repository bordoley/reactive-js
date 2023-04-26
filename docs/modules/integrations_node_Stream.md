[Reactive-JS](../README.md) / integrations/node/Stream

# Module: integrations/node/Stream

## Table of contents

### Functions

- [flow](integrations_node_Stream.md#flow)
- [sinkInto](integrations_node_Stream.md#sinkinto)

## Functions

### flow

▸ **flow**(`scheduler`, `options?`): [`Function1`](functions.md#function1)<`Readable` \| [`Factory`](functions.md#factory)<`Readable`\>, [`FlowableObservableLike`](../interfaces/rx.FlowableObservableLike.md)<`Uint8Array`\> & [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<`Readable` \| [`Factory`](functions.md#factory)<`Readable`\>, [`FlowableObservableLike`](../interfaces/rx.FlowableObservableLike.md)<`Uint8Array`\> & [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

___

### sinkInto

▸ **sinkInto**(`factory`): (`flowable`: [`FlowableObservableLike`](../interfaces/rx.FlowableObservableLike.md)<`Uint8Array`\>) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`void`\>

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
