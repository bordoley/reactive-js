[Reactive-JS](../README.md) / [DeferredObservable](../modules/DeferredObservable.md) / DeferredObservableModule

# Interface: DeferredObservableModule

[DeferredObservable](../modules/DeferredObservable.md).DeferredObservableModule

## Hierarchy

- [`DeferredTypeClass`](types.DeferredTypeClass.md)<[`Type`](../modules/DeferredObservable.md#type)\>

- [`HigherOrderObservableTypeClass`](types.HigherOrderObservableTypeClass.md)<[`Type`](../modules/DeferredObservable.md#type), [`Type`](../modules/DeferredObservable.md#type)\>

  ↳ **`DeferredObservableModule`**

## Table of contents

### Operator Methods

- [catchError](DeferredObservable.DeferredObservableModule.md#catcherror)
- [concatAll](DeferredObservable.DeferredObservableModule.md#concatall)
- [concatMap](DeferredObservable.DeferredObservableModule.md#concatmap)
- [exhaust](DeferredObservable.DeferredObservableModule.md#exhaust)
- [exhaustMap](DeferredObservable.DeferredObservableModule.md#exhaustmap)
- [mergeAll](DeferredObservable.DeferredObservableModule.md#mergeall)
- [mergeMap](DeferredObservable.DeferredObservableModule.md#mergemap)
- [scanLast](DeferredObservable.DeferredObservableModule.md#scanlast)
- [scanMany](DeferredObservable.DeferredObservableModule.md#scanmany)
- [switchAll](DeferredObservable.DeferredObservableModule.md#switchall)
- [switchMap](DeferredObservable.DeferredObservableModule.md#switchmap)

### Other Methods

- [compute](DeferredObservable.DeferredObservableModule.md#compute)
- [multicast](DeferredObservable.DeferredObservableModule.md#multicast)
- [repeat](DeferredObservable.DeferredObservableModule.md#repeat)
- [retry](DeferredObservable.DeferredObservableModule.md#retry)
- [share](DeferredObservable.DeferredObservableModule.md#share)
- [toObservable](DeferredObservable.DeferredObservableModule.md#toobservable)

## Operator Methods

### catchError

▸ **catchError**<`T`\>(`onError`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function2`](../modules/functions.md#function2)<`Error`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[catchError](types.HigherOrderObservableTypeClass.md#catcherror)

___

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[concatAll](types.HigherOrderObservableTypeClass.md#concatall)

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[concatMap](types.HigherOrderObservableTypeClass.md#concatmap)

___

### exhaust

▸ **exhaust**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[exhaust](types.HigherOrderObservableTypeClass.md#exhaust)

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[exhaustMap](types.HigherOrderObservableTypeClass.md#exhaustmap)

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[mergeAll](types.HigherOrderObservableTypeClass.md#mergeall)

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[mergeMap](types.HigherOrderObservableTypeClass.md#mergemap)

___

### scanLast

▸ **scanLast**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), `T`, `TAcc`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[scanLast](types.HigherOrderObservableTypeClass.md#scanlast)

___

### scanMany

▸ **scanMany**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), `T`, `TAcc`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[scanMany](types.HigherOrderObservableTypeClass.md#scanmany)

___

### switchAll

▸ **switchAll**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[switchAll](types.HigherOrderObservableTypeClass.md#switchall)

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[switchMap](types.HigherOrderObservableTypeClass.md#switchmap)

___

## Other Methods

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `computation` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.mode?` | ``"batched"`` \| ``"combine-latest"`` |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

___

### multicast

▸ **multicast**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, [`ReplayObservableLike`](types.ReplayObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](types.SchedulerLike.md) \| [`Factory`](../modules/functions.md#factory)<[`SchedulerLike`](types.SchedulerLike.md) & [`DisposableLike`](types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, [`ReplayObservableLike`](types.ReplayObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`EnumerableUpperBoundObservableOperator`](../modules/DeferredObservable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`number`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/DeferredObservable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Overrides

[DeferredTypeClass](types.DeferredTypeClass.md).[repeat](types.DeferredTypeClass.md#repeat)

▸ **repeat**<`T`\>(`count`): [`EnumerableUpperBoundObservableOperator`](../modules/DeferredObservable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/DeferredObservable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Overrides

[DeferredTypeClass](types.DeferredTypeClass.md).[repeat](types.DeferredTypeClass.md#repeat)

▸ **repeat**<`T`\>(): [`EnumerableUpperBoundObservableOperator`](../modules/DeferredObservable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/DeferredObservable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Overrides

[DeferredTypeClass](types.DeferredTypeClass.md).[repeat](types.DeferredTypeClass.md#repeat)

___

### retry

▸ **retry**<`T`\>(`shouldRetry`): [`EnumerableUpperBoundObservableOperator`](../modules/DeferredObservable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `shouldRetry` | (`count`: `number`, `error`: `Error`) => `boolean` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/DeferredObservable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Overrides

[DeferredTypeClass](types.DeferredTypeClass.md).[retry](types.DeferredTypeClass.md#retry)

___

### share

▸ **share**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](types.SchedulerLike.md) \| [`Factory`](../modules/functions.md#factory)<[`SchedulerLike`](types.SchedulerLike.md) & [`DisposableLike`](types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>\>

#### Inherited from

[DeferredTypeClass](types.DeferredTypeClass.md).[toObservable](types.DeferredTypeClass.md#toobservable)
