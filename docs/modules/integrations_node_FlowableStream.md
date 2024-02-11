[Reactive-JS](../README.md) / integrations/node/FlowableStream

# Module: integrations/node/FlowableStream

## Table of contents

### Functions

- [create](integrations_node_FlowableStream.md#create)
- [writeTo](integrations_node_FlowableStream.md#writeto)

## Functions

### create

▸ **create**(`factory`): [`FlowableLike`](../interfaces/concurrent.FlowableLike.md)\<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)\<`Readable`\> |

#### Returns

[`FlowableLike`](../interfaces/concurrent.FlowableLike.md)\<`Uint8Array`\>

___

### writeTo

▸ **writeTo**(`writable`): [`Function1`](functions.md#function1)\<[`FlowableLike`](../interfaces/concurrent.FlowableLike.md)\<`Uint8Array`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`Uint8Array`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `writable` | `Writable` |

#### Returns

[`Function1`](functions.md#function1)\<[`FlowableLike`](../interfaces/concurrent.FlowableLike.md)\<`Uint8Array`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`Uint8Array`\>\>
