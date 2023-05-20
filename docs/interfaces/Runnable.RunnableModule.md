[Reactive-JS](../README.md) / [Runnable](../modules/Runnable.md) / RunnableModule

# Interface: RunnableModule

[Runnable](../modules/Runnable.md).RunnableModule

## Hierarchy

- [`RunnableContainerModule`](types.RunnableContainerModule.md)<[`Type`](../modules/Runnable.md#type)\>

- [`HigherOrderObservableModule`](types.HigherOrderObservableModule.md)<[`Type`](../modules/Runnable.md#type), [`Type`](../modules/Runnable.md#type)\>

- [`StatefulContainerModule`](types.StatefulContainerModule.md)<[`Type`](../modules/Runnable.md#type)\>

  ↳ **`RunnableModule`**

## Table of contents

### Constructor Methods

- [compute](Runnable.RunnableModule.md#compute)

### Other Methods

- [run](Runnable.RunnableModule.md#run)

### Transform Methods

- [toObservable](Runnable.RunnableModule.md#toobservable)

## Constructor Methods

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

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

[`RunnableLike`](types.RunnableLike.md)<`T`\>

___

## Other Methods

### run

▸ **run**<`T`\>(`options?`): [`SideEffect1`](../modules/functions.md#sideeffect1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`SideEffect1`](../modules/functions.md#sideeffect1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

## Transform Methods

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Overrides

[RunnableContainerModule](types.RunnableContainerModule.md).[toObservable](types.RunnableContainerModule.md#toobservable)
