[Reactive-JS](../README.md) / [MulticastObservable](../modules/MulticastObservable.md) / MulticastObservableModule

# Interface: MulticastObservableModule

[MulticastObservable](../modules/MulticastObservable.md).MulticastObservableModule

## Hierarchy

- [`HigherOrderObservableBaseTypeClass`](types.HigherOrderObservableBaseTypeClass.md)<[`Type`](../modules/MulticastObservable.md#type), [`Type`](../modules/DeferredObservable.md#type)\>

  ↳ **`MulticastObservableModule`**

## Table of contents

### Operator Methods

- [concatAll](MulticastObservable.MulticastObservableModule.md#concatall)
- [concatMap](MulticastObservable.MulticastObservableModule.md#concatmap)
- [exhaust](MulticastObservable.MulticastObservableModule.md#exhaust)
- [exhaustMap](MulticastObservable.MulticastObservableModule.md#exhaustmap)
- [mergeAll](MulticastObservable.MulticastObservableModule.md#mergeall)
- [mergeMap](MulticastObservable.MulticastObservableModule.md#mergemap)
- [scanLast](MulticastObservable.MulticastObservableModule.md#scanlast)
- [scanMany](MulticastObservable.MulticastObservableModule.md#scanmany)
- [switchAll](MulticastObservable.MulticastObservableModule.md#switchall)
- [switchMap](MulticastObservable.MulticastObservableModule.md#switchmap)

### Other Methods

- [catchError](MulticastObservable.MulticastObservableModule.md#catcherror)
- [compute](MulticastObservable.MulticastObservableModule.md#compute)

## Operator Methods

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[concatAll](types.HigherOrderObservableBaseTypeClass.md#concatall)

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[concatMap](types.HigherOrderObservableBaseTypeClass.md#concatmap)

___

### exhaust

▸ **exhaust**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[exhaust](types.HigherOrderObservableBaseTypeClass.md#exhaust)

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[exhaustMap](types.HigherOrderObservableBaseTypeClass.md#exhaustmap)

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[mergeAll](types.HigherOrderObservableBaseTypeClass.md#mergeall)

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[mergeMap](types.HigherOrderObservableBaseTypeClass.md#mergemap)

___

### scanLast

▸ **scanLast**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), `T`, `TAcc`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), `T`, `TAcc`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[scanLast](types.HigherOrderObservableBaseTypeClass.md#scanlast)

___

### scanMany

▸ **scanMany**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), `T`, `TAcc`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), `T`, `TAcc`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[scanMany](types.HigherOrderObservableBaseTypeClass.md#scanmany)

___

### switchAll

▸ **switchAll**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[switchAll](types.HigherOrderObservableBaseTypeClass.md#switchall)

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[switchMap](types.HigherOrderObservableBaseTypeClass.md#switchmap)

___

## Other Methods

### catchError

▸ **catchError**<`T`\>(`onError`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function2`](../modules/functions.md#function2)<`Error`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](MulticastObservable.MulticastObservableContainer.md), `T`, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[catchError](types.HigherOrderObservableBaseTypeClass.md#catcherror)

___

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

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

[`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>
