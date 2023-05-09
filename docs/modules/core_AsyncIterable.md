[Reactive-JS](../README.md) / core/AsyncIterable

# Module: core/AsyncIterable

## Table of contents

### Operator Functions

- [identity](core_AsyncIterable.md#identity)

### Transform Functions

- [flow](core_AsyncIterable.md#flow)
- [toObservable](core_AsyncIterable.md#toobservable)

## Operator Functions

### identity

▸ **identity**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`AsyncIterableContainer`](../interfaces/core.AsyncIterableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`AsyncIterableContainer`](../interfaces/core.AsyncIterableContainer-1.md), `T`, `T`\>

___

## Transform Functions

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](../interfaces/core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/core.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/core.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](../interfaces/core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/core.DisposableLike.md)\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>
