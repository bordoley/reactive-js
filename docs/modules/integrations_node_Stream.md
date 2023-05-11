[Reactive-JS](../README.md) / integrations/node/Stream

# Module: integrations/node/Stream

## Table of contents

### Functions

- [flow](integrations_node_Stream.md#flow)
- [sinkInto](integrations_node_Stream.md#sinkinto)

## Functions

### flow

▸ **flow**(`scheduler`, `options?`): [`Function1`](functions.md#function1)<`Readable` \| [`Factory`](functions.md#factory)<`Readable`\>, [`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`Uint8Array`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<`Readable` \| [`Factory`](functions.md#factory)<`Readable`\>, [`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`Uint8Array`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### sinkInto

▸ **sinkInto**(`factory`): [`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`Uint8Array`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | `Writable` \| [`Factory`](functions.md#factory)<`Writable`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`Uint8Array`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`void`\>\>
