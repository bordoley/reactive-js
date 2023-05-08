[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / Flow

# Interface: Flow<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).Flow

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Table of contents

### Transform Methods

- [flow](core.Container.Flow.md#flow)

## Transform Methods

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`PauseableObservableLike`](core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](core.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`PauseableObservableLike`](core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>
