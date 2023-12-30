[Reactive-JS](../README.md) / integrations/node/Stream

# Module: integrations/node/Stream

## Table of contents

### Functions

- [sinkInto](integrations_node_Stream.md#sinkinto)
- [toFlowable](integrations_node_Stream.md#toflowable)

## Functions

### sinkInto

▸ **sinkInto**(`factory`): [`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/concurrent.FlowableLike.md)<`Uint8Array`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)<`Uint8Array`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | `Writable` |

#### Returns

[`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/concurrent.FlowableLike.md)<`Uint8Array`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)<`Uint8Array`\>\>

___

### toFlowable

▸ **toFlowable**(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`Readable`\>, [`FlowableLike`](../interfaces/concurrent.FlowableLike.md)<`Uint8Array`\>\>

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`Readable`\>, [`FlowableLike`](../interfaces/concurrent.FlowableLike.md)<`Uint8Array`\>\>
