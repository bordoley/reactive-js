[Reactive-JS](../README.md) / [DeferredObservable](../modules/DeferredObservable.md) / DeferredObservableModule

# Interface: DeferredObservableModule

[DeferredObservable](../modules/DeferredObservable.md).DeferredObservableModule

## Hierarchy

- [`HigherOrderObservableBaseTypeClass`](type_classes.HigherOrderObservableBaseTypeClass.md)<[`Type`](../modules/DeferredObservable.md#type), [`Type`](../modules/DeferredObservable.md#type)\>

  ↳ **`DeferredObservableModule`**

## Table of contents

### Operator Methods

- [concatAll](DeferredObservable.DeferredObservableModule.md#concatall)
- [concatMap](DeferredObservable.DeferredObservableModule.md#concatmap)
- [exhaust](DeferredObservable.DeferredObservableModule.md#exhaust)
- [exhaustMap](DeferredObservable.DeferredObservableModule.md#exhaustmap)
- [mergeAll](DeferredObservable.DeferredObservableModule.md#mergeall)
- [mergeMap](DeferredObservable.DeferredObservableModule.md#mergemap)
- [switchAll](DeferredObservable.DeferredObservableModule.md#switchall)
- [switchMap](DeferredObservable.DeferredObservableModule.md#switchmap)

### Other Methods

- [compute](DeferredObservable.DeferredObservableModule.md#compute)
- [multicast](DeferredObservable.DeferredObservableModule.md#multicast)
- [repeat](DeferredObservable.DeferredObservableModule.md#repeat)
- [retry](DeferredObservable.DeferredObservableModule.md#retry)
- [share](DeferredObservable.DeferredObservableModule.md#share)

## Operator Methods

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](types.DeferredObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](types.DeferredObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[concatAll](type_classes.HigherOrderObservableBaseTypeClass.md#concatall)

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](types.DeferredObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](types.DeferredObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[concatMap](type_classes.HigherOrderObservableBaseTypeClass.md#concatmap)

___

### exhaust

▸ **exhaust**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](types.DeferredObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](types.DeferredObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[exhaust](type_classes.HigherOrderObservableBaseTypeClass.md#exhaust)

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](types.DeferredObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](types.DeferredObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[exhaustMap](type_classes.HigherOrderObservableBaseTypeClass.md#exhaustmap)

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](types.DeferredObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](types.DeferredObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[mergeAll](type_classes.HigherOrderObservableBaseTypeClass.md#mergeall)

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](types.DeferredObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](types.DeferredObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[mergeMap](type_classes.HigherOrderObservableBaseTypeClass.md#mergemap)

___

### switchAll

▸ **switchAll**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](types.DeferredObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](types.DeferredObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[switchAll](type_classes.HigherOrderObservableBaseTypeClass.md#switchall)

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](types.DeferredObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](types.DeferredObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[switchMap](type_classes.HigherOrderObservableBaseTypeClass.md#switchmap)

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

▸ **multicast**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

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

[`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

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

▸ **repeat**<`T`\>(): [`EnumerableUpperBoundObservableOperator`](../modules/DeferredObservable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/DeferredObservable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

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

___

### share

▸ **share**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>
