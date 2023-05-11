[Reactive-JS](../README.md) / [SharedObservable](../modules/SharedObservable.md) / Signature

# Interface: Signature

[SharedObservable](../modules/SharedObservable.md).Signature

## Hierarchy

- [`HigherOrderObservableBaseTypeClass`](type_classes.HigherOrderObservableBaseTypeClass.md)<[`Type`](../modules/SharedObservable.md#type), [`DeferredObservableContainer`](types.DeferredObservableContainer.md)\>

  ↳ **`Signature`**

## Table of contents

### Operator Properties

- [concatAll](SharedObservable.Signature.md#concatall)
- [concatMap](SharedObservable.Signature.md#concatmap)
- [mergeMap](SharedObservable.Signature.md#mergemap)
- [switchAll](SharedObservable.Signature.md#switchall)
- [switchMap](SharedObservable.Signature.md#switchmap)

### Operator Methods

- [mergeAll](SharedObservable.Signature.md#mergeall)

### Other Methods

- [compute](SharedObservable.Signature.md#compute)
- [never](SharedObservable.Signature.md#never)

## Operator Properties

### concatAll

• **concatAll**: <T\>() => [`ContainerOperator`](../modules/types.md#containeroperator)<[`SharedObservableContainer`](types.SharedObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`SharedObservableContainer`](types.SharedObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`SharedObservableContainer`](types.SharedObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[concatAll](type_classes.HigherOrderObservableBaseTypeClass.md#concatall)

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\>\>) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`SharedObservableContainer`](types.SharedObservableContainer.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`SharedObservableContainer`](types.SharedObservableContainer.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\>\> |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`SharedObservableContainer`](types.SharedObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[concatMap](type_classes.HigherOrderObservableBaseTypeClass.md#concatmap)

___

### mergeMap

• **mergeMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\>\>, `options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`SharedObservableContainer`](types.SharedObservableContainer.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`SharedObservableContainer`](types.SharedObservableContainer.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`SharedObservableContainer`](types.SharedObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[mergeMap](type_classes.HigherOrderObservableBaseTypeClass.md#mergemap)

___

### switchAll

• **switchAll**: <T\>() => [`ContainerOperator`](../modules/types.md#containeroperator)<[`SharedObservableContainer`](types.SharedObservableContainer.md), [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`SharedObservableContainer`](types.SharedObservableContainer.md), [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`SharedObservableContainer`](types.SharedObservableContainer.md), [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[switchAll](type_classes.HigherOrderObservableBaseTypeClass.md#switchall)

___

### switchMap

• **switchMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`SharedObservableLike`](types.SharedObservableLike.md)<`TB`\>\>) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`SharedObservableContainer`](types.SharedObservableContainer.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`SharedObservableContainer`](types.SharedObservableContainer.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`SharedObservableLike`](types.SharedObservableLike.md)<`TB`\>\> |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`SharedObservableContainer`](types.SharedObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[switchMap](type_classes.HigherOrderObservableBaseTypeClass.md#switchmap)

## Operator Methods

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`SharedObservableContainer`](types.SharedObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`SharedObservableContainer`](types.SharedObservableContainer.md), [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[mergeAll](type_classes.HigherOrderObservableBaseTypeClass.md#mergeall)

___

## Other Methods

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>

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

[`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>

___

### never

▸ **never**<`T`\>(): [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>
