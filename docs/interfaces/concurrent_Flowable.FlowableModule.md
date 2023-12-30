[Reactive-JS](../README.md) / [concurrent/Flowable](../modules/concurrent_Flowable.md) / FlowableModule

# Interface: FlowableModule

[concurrent/Flowable](../modules/concurrent_Flowable.md).FlowableModule

## Table of contents

### Methods

- [create](concurrent_Flowable.FlowableModule.md#create)
- [dispatchTo](concurrent_Flowable.FlowableModule.md#dispatchto)
- [fromAsyncIterable](concurrent_Flowable.FlowableModule.md#fromasynciterable)
- [fromRunnable](concurrent_Flowable.FlowableModule.md#fromrunnable)

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
| `op` | [`Function1`](../modules/functions.md#function1)<[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`boolean`\>, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\> |

#### Returns

[`FlowableLike`](concurrent.FlowableLike.md)<`T`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`sink`): [`Function1`](../modules/functions.md#function1)<[`FlowableLike`](concurrent.FlowableLike.md)<`T`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`DispatcherLike`](concurrent.DispatcherLike.md)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`FlowableLike`](concurrent.FlowableLike.md)<`T`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`T`\>\>

___

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`FlowableLike`](concurrent.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`FlowableLike`](concurrent.FlowableLike.md)<`T`\>\>

___

### fromRunnable

▸ **fromRunnable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, [`FlowableLike`](concurrent.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, [`FlowableLike`](concurrent.FlowableLike.md)<`T`\>\>
