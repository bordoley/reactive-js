[Reactive-JS](../README.md) / containers/Iterable

# Module: containers/Iterable

## Table of contents

### Constructor Functions

- [fromReadonlyArray](containers_Iterable.md#fromreadonlyarray)

### Operator Functions

- [identity](containers_Iterable.md#identity)

### Transform Functions

- [enumerate](containers_Iterable.md#enumerate)
- [enumerateAsync](containers_Iterable.md#enumerateasync)
- [flow](containers_Iterable.md#flow)
- [toEnumerable](containers_Iterable.md#toenumerable)
- [toObservable](containers_Iterable.md#toobservable)
- [toReadonlyArray](containers_Iterable.md#toreadonlyarray)
- [toRunnable](containers_Iterable.md#torunnable)

## Constructor Functions

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>\>

___

## Operator Functions

### identity

▸ **identity**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`unknown`\>, `T`, `T`\>

___

## Transform Functions

### enumerate

▸ **enumerate**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`T`\>\>

___

### enumerateAsync

▸ **enumerateAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`InteractiveObservableLike`](../interfaces/rx.InteractiveObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |
| `options?` | { `delay?`: `number`  } & { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `replay?`: `number`  } |

#### Returns

[`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`InteractiveObservableLike`](../interfaces/rx.InteractiveObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/rx.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |
| `options?` | { `delay?`: `number` ; `delayStart?`: `boolean`  } & { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `replay?`: `number`  } |

#### Returns

[`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/rx.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/rx.EnumerableLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

Converts the ContainerLike to a `ReadonlyArrayLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>
