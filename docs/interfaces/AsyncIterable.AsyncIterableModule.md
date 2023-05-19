[Reactive-JS](../README.md) / [AsyncIterable](../modules/AsyncIterable.md) / AsyncIterableModule

# Interface: AsyncIterableModule

[AsyncIterable](../modules/AsyncIterable.md).AsyncIterableModule

## Hierarchy

- [`DeferredTypeClass`](types.DeferredTypeClass.md)<[`Type`](../modules/AsyncIterable.md#type)\>

- [`FlowableTypeClass`](types.FlowableTypeClass.md)<[`Type`](../modules/AsyncIterable.md#type)\>

  ↳ **`AsyncIterableModule`**

## Table of contents

### Operator Methods

- [repeat](AsyncIterable.AsyncIterableModule.md#repeat)
- [retry](AsyncIterable.AsyncIterableModule.md#retry)

### Other Methods

- [flow](AsyncIterable.AsyncIterableModule.md#flow)
- [toObservable](AsyncIterable.AsyncIterableModule.md#toobservable)

## Operator Methods

### repeat

▸ **repeat**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`AsyncIterableContainer`](AsyncIterable.AsyncIterableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`AsyncIterableContainer`](AsyncIterable.AsyncIterableContainer.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](types.DeferredTypeClass.md).[repeat](types.DeferredTypeClass.md#repeat)

▸ **repeat**<`T`\>(`count`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`AsyncIterableContainer`](AsyncIterable.AsyncIterableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`AsyncIterableContainer`](AsyncIterable.AsyncIterableContainer.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](types.DeferredTypeClass.md).[repeat](types.DeferredTypeClass.md#repeat)

▸ **repeat**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`AsyncIterableContainer`](AsyncIterable.AsyncIterableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`number`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`AsyncIterableContainer`](AsyncIterable.AsyncIterableContainer.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](types.DeferredTypeClass.md).[repeat](types.DeferredTypeClass.md#repeat)

___

### retry

▸ **retry**<`T`\>(`shouldRetry`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`AsyncIterableContainer`](AsyncIterable.AsyncIterableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `shouldRetry` | (`count`: `number`, `error`: `Error`) => `boolean` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`AsyncIterableContainer`](AsyncIterable.AsyncIterableContainer.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](types.DeferredTypeClass.md).[retry](types.DeferredTypeClass.md#retry)

___

## Other Methods

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Inherited from

[FlowableTypeClass](types.FlowableTypeClass.md).[flow](types.FlowableTypeClass.md#flow)

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>\>

#### Inherited from

[DeferredTypeClass](types.DeferredTypeClass.md).[toObservable](types.DeferredTypeClass.md#toobservable)
