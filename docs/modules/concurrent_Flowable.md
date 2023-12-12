[Reactive-JS](../README.md) / concurrent/Flowable

# Module: concurrent/Flowable

## Table of contents

### Interfaces

- [FlowableModule](../interfaces/concurrent_Flowable.FlowableModule.md)

### Type Aliases

- [Signature](concurrent_Flowable.md#signature)

### Functions

- [create](concurrent_Flowable.md#create)
- [fromAsyncIterable](concurrent_Flowable.md#fromasynciterable)

## Type Aliases

### Signature

Ƭ **Signature**: [`FlowableModule`](../interfaces/concurrent_Flowable.FlowableModule.md)

## Functions

### create

▸ **create**<`T`\>(`op`): [`FlowableLike`](../interfaces/concurrent.FlowableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/concurrent.ObservableLike.md)<`boolean`\>, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>\> |

#### Returns

[`FlowableLike`](../interfaces/concurrent.FlowableLike.md)<`T`\>

___

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(): [`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`FlowableLike`](../interfaces/concurrent.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`FlowableLike`](../interfaces/concurrent.FlowableLike.md)<`T`\>\>
