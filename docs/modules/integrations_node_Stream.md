[Reactive-JS](../README.md) / integrations/node/Stream

# Module: integrations/node/Stream

## Table of contents

### Functions

- [toFlowable](integrations_node_Stream.md#toflowable)
- [writeTo](integrations_node_Stream.md#writeto)

## Functions

### toFlowable

▸ **toFlowable**(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`Readable`\>, [`FlowableLike`](../interfaces/concurrent.FlowableLike.md)<`Uint8Array`\>\>

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`Readable`\>, [`FlowableLike`](../interfaces/concurrent.FlowableLike.md)<`Uint8Array`\>\>

___

### writeTo

▸ **writeTo**(`factory`): [`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/concurrent.FlowableLike.md)<`Uint8Array`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)<`Uint8Array`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | `Writable` |

#### Returns

[`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/concurrent.FlowableLike.md)<`Uint8Array`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)<`Uint8Array`\>\>
