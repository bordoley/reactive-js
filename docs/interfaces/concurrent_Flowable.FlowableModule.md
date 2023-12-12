[Reactive-JS](../README.md) / [concurrent/Flowable](../modules/concurrent_Flowable.md) / FlowableModule

# Interface: FlowableModule

[concurrent/Flowable](../modules/concurrent_Flowable.md).FlowableModule

## Table of contents

### Methods

- [create](concurrent_Flowable.FlowableModule.md#create)
- [fromAsyncIterable](concurrent_Flowable.FlowableModule.md#fromasynciterable)

## Methods

### create

▸ **create**<`T`\>(`op`): [`FlowableLike`](concurrent.FlowableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`boolean`\>, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\> |

#### Returns

[`FlowableLike`](concurrent.FlowableLike.md)<`T`\>

___

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`FlowableLike`](concurrent.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`FlowableLike`](concurrent.FlowableLike.md)<`T`\>\>
