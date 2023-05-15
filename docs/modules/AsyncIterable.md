[Reactive-JS](../README.md) / AsyncIterable

# Module: AsyncIterable

## Table of contents

### Interfaces

- [Signature](../interfaces/AsyncIterable.Signature.md)

### Type Aliases

- [Type](AsyncIterable.md#type)

### Functions

- [flow](AsyncIterable.md#flow)
- [toObservable](AsyncIterable.md#toobservable)

## Type Aliases

### Type

Ƭ **Type**: [`AsyncIterableContainer`](../interfaces/types.AsyncIterableContainer.md)

## Functions

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>
