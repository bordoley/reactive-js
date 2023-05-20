[Reactive-JS](../README.md) / [types](../modules/types.md) / HigherOrderObservableModule

# Interface: HigherOrderObservableModule<C, CInner\>

[types](../modules/types.md).HigherOrderObservableModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Type`](../modules/Observable.md#type) |
| `CInner` | extends [`Type`](../modules/DeferredObservable.md#type) |

## Hierarchy

- **`HigherOrderObservableModule`**

  ↳ [`DeferredObservableModule`](DeferredObservable.DeferredObservableModule.md)

  ↳ [`MulticastObservableModule`](MulticastObservable.MulticastObservableModule.md)

  ↳ [`RunnableModule`](Runnable.RunnableModule.md)

## Table of contents

### Operator Methods

- [catchError](types.HigherOrderObservableModule.md#catcherror)
- [concatAll](types.HigherOrderObservableModule.md#concatall)
- [concatMap](types.HigherOrderObservableModule.md#concatmap)
- [exhaust](types.HigherOrderObservableModule.md#exhaust)
- [exhaustMap](types.HigherOrderObservableModule.md#exhaustmap)
- [mergeAll](types.HigherOrderObservableModule.md#mergeall)
- [mergeMap](types.HigherOrderObservableModule.md#mergemap)
- [scanLast](types.HigherOrderObservableModule.md#scanlast)
- [scanMany](types.HigherOrderObservableModule.md#scanmany)
- [switchAll](types.HigherOrderObservableModule.md#switchall)
- [switchMap](types.HigherOrderObservableModule.md#switchmap)

## Operator Methods

### catchError

▸ **catchError**<`T`\>(`onError`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function2`](../modules/functions.md#function2)<`Error`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`ContainerOf`](../modules/types.md#containerof)<`CInner`, `T`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

___

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, [`ContainerOf`](../modules/types.md#containerof)<`CInner`, `T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, [`ContainerOf`](../modules/types.md#containerof)<`CInner`, `T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`ContainerOf`](../modules/types.md#containerof)<`CInner`, `TB`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

___

### exhaust

▸ **exhaust**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, [`ContainerOf`](../modules/types.md#containerof)<`CInner`, `T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, [`ContainerOf`](../modules/types.md#containerof)<`CInner`, `T`\>, `T`\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`ContainerOf`](../modules/types.md#containerof)<`CInner`, `TB`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, [`ContainerOf`](../modules/types.md#containerof)<`CInner`, `T`\>, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, [`ContainerOf`](../modules/types.md#containerof)<`CInner`, `T`\>, `T`\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`ContainerOf`](../modules/types.md#containerof)<`CInner`, `TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

___

### scanLast

▸ **scanLast**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`ContainerOf`](../modules/types.md#containerof)<`CInner`, `TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `TAcc`\>

___

### scanMany

▸ **scanMany**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`ContainerOf`](../modules/types.md#containerof)<`CInner`, `TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `TAcc`\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, [`ContainerOf`](../modules/types.md#containerof)<`CInner`, `T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, [`ContainerOf`](../modules/types.md#containerof)<`CInner`, `T`\>, `T`\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`ContainerOf`](../modules/types.md#containerof)<`CInner`, `TB`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>
