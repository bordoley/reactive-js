[Reactive-JS](../README.md) / integrations/node/Stream

# Module: integrations/node/Stream

## Table of contents

### Functions

- [flow](integrations_node_Stream.md#flow)
- [sinkInto](integrations_node_Stream.md#sinkinto)

## Functions

### flow

▸ **flow**(): [`Function1`](functions.md#function1)<`Readable` \| [`Factory`](functions.md#factory)<`Readable`\>, [`FlowableLike`](../interfaces/concurrent.FlowableLike.md)<`Uint8Array`\>\>

#### Returns

[`Function1`](functions.md#function1)<`Readable` \| [`Factory`](functions.md#factory)<`Readable`\>, [`FlowableLike`](../interfaces/concurrent.FlowableLike.md)<`Uint8Array`\>\>

___

### sinkInto

▸ **sinkInto**(`factory`): [`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`Uint8Array`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | `Writable` \| [`Factory`](functions.md#factory)<`Writable`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`Uint8Array`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)<`void`\>\>
