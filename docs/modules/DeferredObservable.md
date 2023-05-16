[Reactive-JS](../README.md) / DeferredObservable

# Module: DeferredObservable

## Table of contents

### Interfaces

- [Signature](../interfaces/DeferredObservable.Signature.md)

### Type Aliases

- [EnumerableUpperBoundObservableOperator](DeferredObservable.md#enumerableupperboundobservableoperator)
- [Type](DeferredObservable.md#type)

### Operator Functions

- [concatAll](DeferredObservable.md#concatall)
- [concatMap](DeferredObservable.md#concatmap)
- [exhaust](DeferredObservable.md#exhaust)
- [exhaustMap](DeferredObservable.md#exhaustmap)
- [mergeAll](DeferredObservable.md#mergeall)
- [mergeMap](DeferredObservable.md#mergemap)
- [switchAll](DeferredObservable.md#switchall)
- [switchMap](DeferredObservable.md#switchmap)

### Other Functions

- [compute](DeferredObservable.md#compute)
- [multicast](DeferredObservable.md#multicast)
- [repeat](DeferredObservable.md#repeat)
- [retry](DeferredObservable.md#retry)
- [share](DeferredObservable.md#share)

## Type Aliases

### EnumerableUpperBoundObservableOperator

Ƭ **EnumerableUpperBoundObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `never`

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `never`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `never`

___

### Type

Ƭ **Type**: [`DeferredObservableContainer`](../interfaces/types.DeferredObservableContainer.md)

## Operator Functions

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/types.DeferredObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/types.DeferredObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/types.DeferredObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/types.DeferredObservableContainer.md), `TA`, `TB`\>

___

### exhaust

▸ **exhaust**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/types.DeferredObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/types.DeferredObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/types.DeferredObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/types.DeferredObservableContainer.md), `TA`, `TB`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/types.DeferredObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/types.DeferredObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/types.DeferredObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/types.DeferredObservableContainer.md), `TA`, `TB`\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/types.DeferredObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/types.DeferredObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/types.DeferredObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/types.DeferredObservableContainer.md), `TA`, `TB`\>

___

## Other Functions

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `computation` | [`Factory`](functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.mode?` | ``"batched"`` \| ``"combine-latest"`` |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### multicast

▸ **multicast**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/types.SchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`EnumerableUpperBoundObservableOperator`](DeferredObservable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`number`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](DeferredObservable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`EnumerableUpperBoundObservableOperator`](DeferredObservable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](DeferredObservable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(): [`EnumerableUpperBoundObservableOperator`](DeferredObservable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](DeferredObservable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### retry

▸ **retry**<`T`\>(`shouldRetry`): [`EnumerableUpperBoundObservableOperator`](DeferredObservable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `shouldRetry` | (`count`: `number`, `error`: `Error`) => `boolean` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](DeferredObservable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### share

▸ **share**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/types.SchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>\>
