[Reactive-JS](../README.md) / containers/AsyncIterable

# Module: containers/AsyncIterable

## Table of contents

### Operator Functions

- [identity](containers_AsyncIterable.md#identity)

### Transform Functions

- [flow](containers_AsyncIterable.md#flow)
- [toInteractiveObservable](containers_AsyncIterable.md#tointeractiveobservable)
- [toObservable](containers_AsyncIterable.md#toobservable)

## Operator Functions

### identity

▸ **identity**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`AsyncIterableLike`](../interfaces/containers.AsyncIterableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`AsyncIterableLike`](../interfaces/containers.AsyncIterableLike.md)<`unknown`\>, `T`, `T`\>

___

## Transform Functions

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`AsyncIterableLike`](../interfaces/containers.AsyncIterableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/rx.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncIterableLike`](../interfaces/containers.AsyncIterableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/rx.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

___

### toInteractiveObservable

▸ **toInteractiveObservable**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`AsyncIterableLike`](../interfaces/containers.AsyncIterableLike.md)<`T`\>, [`InteractiveObservableLike`](../interfaces/rx.InteractiveObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) | - |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | The capacity of the stream's request queue. |
| `options.replay?` | `number` | The number of items to buffer for replay when an observer subscribes to the stream. |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncIterableLike`](../interfaces/containers.AsyncIterableLike.md)<`T`\>, [`InteractiveObservableLike`](../interfaces/rx.InteractiveObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`AsyncIterableLike`](../interfaces/containers.AsyncIterableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncIterableLike`](../interfaces/containers.AsyncIterableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>
