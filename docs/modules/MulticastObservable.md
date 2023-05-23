[Reactive-JS](../README.md) / MulticastObservable

# Module: MulticastObservable

## Table of contents

### Container Interfaces

- [MulticastObservableContainer](../interfaces/MulticastObservable.MulticastObservableContainer.md)

### Module Interfaces

- [MulticastObservableModule](../interfaces/MulticastObservable.MulticastObservableModule.md)

### Type Aliases

- [Signature](MulticastObservable.md#signature)
- [Type](MulticastObservable.md#type)

### Operator Functions

- [catchError](MulticastObservable.md#catcherror)
- [concatAll](MulticastObservable.md#concatall)
- [concatMap](MulticastObservable.md#concatmap)
- [exhaust](MulticastObservable.md#exhaust)
- [exhaustMap](MulticastObservable.md#exhaustmap)
- [mergeAll](MulticastObservable.md#mergeall)
- [mergeMap](MulticastObservable.md#mergemap)
- [scanLast](MulticastObservable.md#scanlast)
- [scanMany](MulticastObservable.md#scanmany)
- [switchAll](MulticastObservable.md#switchall)
- [switchMap](MulticastObservable.md#switchmap)

## Type Aliases

### Signature

Ƭ **Signature**: [`MulticastObservableModule`](../interfaces/MulticastObservable.MulticastObservableModule.md)

___

### Type

Ƭ **Type**: [`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md)

## Operator Functions

### catchError

▸ **catchError**<`T`\>(`onError`): [`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function2`](functions.md#function2)<`Error`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), `T`, `T`\>

___

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), `TA`, `TB`\>

___

### exhaust

▸ **exhaust**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), `TA`, `TB`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), `TA`, `TB`\>

___

### scanLast

▸ **scanLast**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), `T`, `TAcc`\>

___

### scanMany

▸ **scanMany**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), `T`, `TAcc`\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`MulticastObservableContainer`](../interfaces/MulticastObservable.MulticastObservableContainer.md), `TA`, `TB`\>
