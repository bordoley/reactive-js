[Reactive-JS](../README.md) / integrations/node/Stream

# Module: integrations/node/Stream

## Table of contents

### Functions

- [flow](integrations_node_Stream.md#flow)
- [sinkInto](integrations_node_Stream.md#sinkinto)

## Functions

### flow

▸ **flow**(`scheduler`, `options?`): [`Function1`](functions.md#function1)<`Readable` \| [`Factory`](functions.md#factory)<`Readable`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`Uint8Array`\> & [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<`Readable` \| [`Factory`](functions.md#factory)<`Readable`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`Uint8Array`\> & [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

___

### sinkInto

▸ **sinkInto**(`factory`): [`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`Uint8Array`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | `Writable` \| [`Factory`](functions.md#factory)<`Writable`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`Uint8Array`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`void`\>\>
