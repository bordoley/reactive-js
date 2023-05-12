[Reactive-JS](../README.md) / SharedObservable

# Module: SharedObservable

## Table of contents

### Interfaces

- [Signature](../interfaces/SharedObservable.Signature.md)

### Type Aliases

- [Type](SharedObservable.md#type)

### Operator Functions

- [concatAll](SharedObservable.md#concatall)
- [concatMap](SharedObservable.md#concatmap)
- [exhaust](SharedObservable.md#exhaust)
- [exhaustMap](SharedObservable.md#exhaustmap)
- [mergeAll](SharedObservable.md#mergeall)
- [mergeMap](SharedObservable.md#mergemap)
- [switchAll](SharedObservable.md#switchall)
- [switchMap](SharedObservable.md#switchmap)

### Other Functions

- [compute](SharedObservable.md#compute)
- [flatMapAsync](SharedObservable.md#flatmapasync)
- [never](SharedObservable.md#never)

## Type Aliases

### Type

Ƭ **Type**: [`SharedObservableContainer`](../interfaces/types.SharedObservableContainer.md)

## Operator Functions

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`SharedObservableContainer`](../interfaces/types.SharedObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`SharedObservableContainer`](../interfaces/types.SharedObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`SharedObservableContainer`](../interfaces/types.SharedObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`SharedObservableContainer`](../interfaces/types.SharedObservableContainer.md), `TA`, `TB`\>

___

### exhaust

▸ **exhaust**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`SharedObservableContainer`](../interfaces/types.SharedObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`SharedObservableContainer`](../interfaces/types.SharedObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`SharedObservableContainer`](../interfaces/types.SharedObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`SharedObservableContainer`](../interfaces/types.SharedObservableContainer.md), `TA`, `TB`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`SharedObservableContainer`](../interfaces/types.SharedObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`SharedObservableContainer`](../interfaces/types.SharedObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`ContainerOperator`](types.md#containeroperator)<[`SharedObservableContainer`](../interfaces/types.SharedObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`SharedObservableContainer`](../interfaces/types.SharedObservableContainer.md), `TA`, `TB`\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`SharedObservableContainer`](../interfaces/types.SharedObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`SharedObservableContainer`](../interfaces/types.SharedObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`SharedObservableContainer`](../interfaces/types.SharedObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`SharedObservableContainer`](../interfaces/types.SharedObservableContainer.md), `TA`, `TB`\>

___

## Other Functions

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>

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

[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>

___

### flatMapAsync

▸ **flatMapAsync**<`TA`, `TB`\>(`f`): [`ContainerOperator`](types.md#containeroperator)<[`SharedObservableContainer`](../interfaces/types.SharedObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Function2`](functions.md#function2)<`TA`, `AbortSignal`, `Promise`<`TB`\>\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`SharedObservableContainer`](../interfaces/types.SharedObservableContainer.md), `TA`, `TB`\>

___

### never

▸ **never**<`T`\>(): [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>
