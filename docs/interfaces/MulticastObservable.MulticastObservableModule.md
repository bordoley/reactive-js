[Reactive-JS](../README.md) / [MulticastObservable](../modules/MulticastObservable.md) / MulticastObservableModule

# Interface: MulticastObservableModule

[MulticastObservable](../modules/MulticastObservable.md).MulticastObservableModule

## Hierarchy

- [`HigherOrderObservableBaseTypeClass`](type_classes.HigherOrderObservableBaseTypeClass.md)<[`Type`](../modules/MulticastObservable.md#type), [`DeferredObservableContainer`](types.DeferredObservableContainer.md)\>

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

▸ **concatAll**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[concatAll](type_classes.HigherOrderObservableBaseTypeClass.md#concatall)

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[concatMap](type_classes.HigherOrderObservableBaseTypeClass.md#concatmap)

___

### exhaust

▸ **exhaust**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[exhaust](type_classes.HigherOrderObservableBaseTypeClass.md#exhaust)

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[exhaustMap](type_classes.HigherOrderObservableBaseTypeClass.md#exhaustmap)

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[mergeAll](type_classes.HigherOrderObservableBaseTypeClass.md#mergeall)

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[mergeMap](type_classes.HigherOrderObservableBaseTypeClass.md#mergemap)

___

### scanLast

▸ **scanLast**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), `T`, `TAcc`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), `T`, `TAcc`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[scanLast](type_classes.HigherOrderObservableBaseTypeClass.md#scanlast)

___

### scanMany

▸ **scanMany**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), `T`, `TAcc`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), `T`, `TAcc`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[scanMany](type_classes.HigherOrderObservableBaseTypeClass.md#scanmany)

___

### switchAll

▸ **switchAll**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[switchAll](type_classes.HigherOrderObservableBaseTypeClass.md#switchall)

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[switchMap](type_classes.HigherOrderObservableBaseTypeClass.md#switchmap)

___

## Other Methods

### catchError

▸ **catchError**<`T`\>(`onError`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function2`](../modules/functions.md#function2)<`Error`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`MulticastObservableContainer`](types.MulticastObservableContainer.md), `T`, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[catchError](type_classes.HigherOrderObservableBaseTypeClass.md#catcherror)

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
