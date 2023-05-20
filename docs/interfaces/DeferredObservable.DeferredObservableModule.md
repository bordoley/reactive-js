[Reactive-JS](../README.md) / [DeferredObservable](../modules/DeferredObservable.md) / DeferredObservableModule

# Interface: DeferredObservableModule

[DeferredObservable](../modules/DeferredObservable.md).DeferredObservableModule

## Hierarchy

- [`StatefulContainerModule`](types.StatefulContainerModule.md)<[`Type`](../modules/DeferredObservable.md#type)\>

- [`HigherOrderObservableModule`](types.HigherOrderObservableModule.md)<[`Type`](../modules/DeferredObservable.md#type), [`Type`](../modules/DeferredObservable.md#type)\>

  ↳ **`DeferredObservableModule`**

## Table of contents

### Constructor Methods

- [compute](DeferredObservable.DeferredObservableModule.md#compute)

### Operator Methods

- [repeat](DeferredObservable.DeferredObservableModule.md#repeat)
- [retry](DeferredObservable.DeferredObservableModule.md#retry)

### Transform Methods

- [multicast](DeferredObservable.DeferredObservableModule.md#multicast)
- [share](DeferredObservable.DeferredObservableModule.md#share)

## Constructor Methods

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

## Operator Methods

### repeat

▸ **repeat**<`T`\>(`predicate`): [`DeferredObservableOperator`](../modules/DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`number`\> |

#### Returns

[`DeferredObservableOperator`](../modules/DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

#### Overrides

StatefulContainerModule.repeat

▸ **repeat**<`T`\>(`count`): [`DeferredObservableOperator`](../modules/DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`DeferredObservableOperator`](../modules/DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

#### Overrides

StatefulContainerModule.repeat

▸ **repeat**<`T`\>(): [`DeferredObservableOperator`](../modules/DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`DeferredObservableOperator`](../modules/DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

#### Overrides

StatefulContainerModule.repeat

___

### retry

▸ **retry**<`T`\>(`shouldRetry`): [`DeferredObservableOperator`](../modules/DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `shouldRetry` | (`count`: `number`, `error`: `Error`) => `boolean` |

#### Returns

[`DeferredObservableOperator`](../modules/DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

#### Overrides

[StatefulContainerModule](types.StatefulContainerModule.md).[retry](types.StatefulContainerModule.md#retry)

___

## Transform Methods

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
