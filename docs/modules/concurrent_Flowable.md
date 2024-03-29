[Reactive-JS](../README.md) / concurrent/Flowable

# Module: concurrent/Flowable

## Table of contents

### Interfaces

- [FlowableModule](../interfaces/concurrent_Flowable.FlowableModule.md)

### Type Aliases

- [Signature](concurrent_Flowable.md#signature)

### Functions

- [create](concurrent_Flowable.md#create)
- [dispatchTo](concurrent_Flowable.md#dispatchto)
- [fromAsyncIterable](concurrent_Flowable.md#fromasynciterable)
- [fromRunnable](concurrent_Flowable.md#fromrunnable)

## Type Aliases

### Signature

Ƭ **Signature**: [`FlowableModule`](../interfaces/concurrent_Flowable.FlowableModule.md)

## Functions

### create

▸ **create**\<`T`\>(`op`): [`FlowableLike`](../interfaces/concurrent.FlowableLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)\<[`MulticastObservableLike`](../interfaces/concurrent.MulticastObservableLike.md)\<`boolean`\>, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>\> |

#### Returns

[`FlowableLike`](../interfaces/concurrent.FlowableLike.md)\<`T`\>

___

### dispatchTo

▸ **dispatchTo**\<`T`\>(`dispatcher`): [`Function1`](functions.md#function1)\<[`FlowableLike`](../interfaces/concurrent.FlowableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/concurrent.DispatcherLike.md)\<`T`\> |

#### Returns

[`Function1`](functions.md#function1)\<[`FlowableLike`](../interfaces/concurrent.FlowableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

___

### fromAsyncIterable

▸ **fromAsyncIterable**\<`T`\>(): [`Function1`](functions.md#function1)\<`AsyncIterable`\<`T`\>, [`FlowableLike`](../interfaces/concurrent.FlowableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)\<`AsyncIterable`\<`T`\>, [`FlowableLike`](../interfaces/concurrent.FlowableLike.md)\<`T`\>\>

___

### fromRunnable

▸ **fromRunnable**\<`T`\>(): [`Function1`](functions.md#function1)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>, [`FlowableLike`](../interfaces/concurrent.FlowableLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)\<[`RunnableLike`](../interfaces/concurrent.RunnableLike.md)\<`T`\>, [`FlowableLike`](../interfaces/concurrent.FlowableLike.md)\<`T`\>\>
