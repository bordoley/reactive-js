[Reactive-JS](../README.md) / [AsyncIterable](../modules/AsyncIterable.md) / Signature

# Interface: Signature

[AsyncIterable](../modules/AsyncIterable.md).Signature

## Table of contents

### Methods

- [flow](AsyncIterable.Signature.md#flow)
- [toDeferredObservable](AsyncIterable.Signature.md#todeferredobservable)

## Methods

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

___

### toDeferredObservable

▸ **toDeferredObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>\>
