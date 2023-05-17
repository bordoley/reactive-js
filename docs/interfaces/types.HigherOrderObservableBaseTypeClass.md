[Reactive-JS](../README.md) / [types](../modules/types.md) / HigherOrderObservableBaseTypeClass

# Interface: HigherOrderObservableBaseTypeClass<C, CInner\>

[types](../modules/types.md).HigherOrderObservableBaseTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Type`](../modules/Observable.md#type) |
| `CInner` | extends [`Type`](../modules/DeferredObservable.md#type) |

## Hierarchy

- **`HigherOrderObservableBaseTypeClass`**

  ↳ [`DeferredObservableModule`](DeferredObservable.DeferredObservableModule.md)

  ↳ [`MulticastObservableModule`](MulticastObservable.MulticastObservableModule.md)

  ↳ [`RunnableModule`](Runnable.RunnableModule.md)

## Table of contents

### Operator Methods

- [catchError](types.HigherOrderObservableBaseTypeClass.md#catcherror)
- [concatAll](types.HigherOrderObservableBaseTypeClass.md#concatall)
- [concatMap](types.HigherOrderObservableBaseTypeClass.md#concatmap)
- [exhaust](types.HigherOrderObservableBaseTypeClass.md#exhaust)
- [exhaustMap](types.HigherOrderObservableBaseTypeClass.md#exhaustmap)
- [mergeAll](types.HigherOrderObservableBaseTypeClass.md#mergeall)
- [mergeMap](types.HigherOrderObservableBaseTypeClass.md#mergemap)
- [scanLast](types.HigherOrderObservableBaseTypeClass.md#scanlast)
- [scanMany](types.HigherOrderObservableBaseTypeClass.md#scanmany)
- [switchAll](types.HigherOrderObservableBaseTypeClass.md#switchall)
- [switchMap](types.HigherOrderObservableBaseTypeClass.md#switchmap)

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
