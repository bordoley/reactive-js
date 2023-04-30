[Reactive-JS](../README.md) / containers/AsyncIterable

# Module: containers/AsyncIterable

## Table of contents

### Operator Functions

- [identity](containers_AsyncIterable.md#identity)

### Transform Functions

- [flow](containers_AsyncIterable.md#flow)
- [toObservable](containers_AsyncIterable.md#toobservable)

## Operator Functions

### identity

▸ **identity**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`AsyncIterableContainerLike`](../interfaces/containers.AsyncIterableContainerLike.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`AsyncIterableContainerLike`](../interfaces/containers.AsyncIterableContainerLike.md), `T`, `T`\>

___

## Transform Functions

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](../interfaces/rx.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/util.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](../interfaces/rx.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>
