[Reactive-JS](../README.md) / rx/ObservableLike

# Module: rx/ObservableLike

## Table of contents

### Variables

- [forEachT](rx_ObservableLike.md#foreacht)
- [mapT](rx_ObservableLike.md#mapt)

### Functions

- [forEach](rx_ObservableLike.md#foreach)
- [getObservableType](rx_ObservableLike.md#getobservabletype)
- [map](rx_ObservableLike.md#map)
- [subscribe](rx_ObservableLike.md#subscribe)
- [toPromise](rx_ObservableLike.md#topromise)

## Variables

### forEachT

• `Const` **forEachT**: [`ForEach`](containers.md#foreach)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### mapT

• `Const` **mapT**: [`Map`](containers.md#map)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

## Functions

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `T`\>

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### getObservableType

▸ **getObservableType**(`obs`): ``0`` \| ``2`` \| ``1``

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Returns

``0`` \| ``2`` \| ``1``

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `TA`, `TB`\>

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### subscribe

▸ **subscribe**<`T`\>(`scheduler`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

___

### toPromise

▸ **toPromise**<`T`\>(`ctx`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`PromiseLike`](../interfaces/containers.PromiseLike.md)<`T`\>\>

Returns a Promise that completes with the last value produced by
the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`PromiseLike`](../interfaces/containers.PromiseLike.md)<`T`\>\>
