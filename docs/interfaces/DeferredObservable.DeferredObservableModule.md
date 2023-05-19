[Reactive-JS](../README.md) / [DeferredObservable](../modules/DeferredObservable.md) / DeferredObservableModule

# Interface: DeferredObservableModule

[DeferredObservable](../modules/DeferredObservable.md).DeferredObservableModule

## Hierarchy

- [`DeferredTypeClass`](types.DeferredTypeClass.md)<[`Type`](../modules/DeferredObservable.md#type)\>

- [`HigherOrderObservableTypeClass`](types.HigherOrderObservableTypeClass.md)<[`Type`](../modules/DeferredObservable.md#type), [`Type`](../modules/DeferredObservable.md#type)\>

  ↳ **`DeferredObservableModule`**

## Table of contents

### Methods

- [compute](DeferredObservable.DeferredObservableModule.md#compute)
- [multicast](DeferredObservable.DeferredObservableModule.md#multicast)
- [repeat](DeferredObservable.DeferredObservableModule.md#repeat)
- [retry](DeferredObservable.DeferredObservableModule.md#retry)
- [share](DeferredObservable.DeferredObservableModule.md#share)

## Methods

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
