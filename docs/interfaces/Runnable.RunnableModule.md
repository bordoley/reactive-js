[Reactive-JS](../README.md) / [Runnable](../modules/Runnable.md) / RunnableModule

# Interface: RunnableModule

[Runnable](../modules/Runnable.md).RunnableModule

## Hierarchy

- [`RunnableContainerModule`](types.RunnableContainerModule.md)<[`Type`](../modules/Runnable.md#type)\>

  ↳ **`RunnableModule`**

## Table of contents

### Constructor Methods

- [compute](Runnable.RunnableModule.md#compute)

### Operator Methods

- [exhaust](Runnable.RunnableModule.md#exhaust)
- [exhaustMap](Runnable.RunnableModule.md#exhaustmap)
- [mergeAll](Runnable.RunnableModule.md#mergeall)
- [mergeMap](Runnable.RunnableModule.md#mergemap)
- [switchAll](Runnable.RunnableModule.md#switchall)
- [switchMap](Runnable.RunnableModule.md#switchmap)

### Other Methods

- [run](Runnable.RunnableModule.md#run)

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

## Operator Methods

### exhaust

▸ **exhaust**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<[`RunnableLike`](types.RunnableLike.md)<`T`\>\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<[`RunnableLike`](types.RunnableLike.md)<`T`\>\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`TA`\>, [`RunnableLike`](types.RunnableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](types.RunnableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`TA`\>, [`RunnableLike`](types.RunnableLike.md)<`TB`\>\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<[`RunnableLike`](types.RunnableLike.md)<`T`\>\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<[`RunnableLike`](types.RunnableLike.md)<`T`\>\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`TA`\>, [`RunnableLike`](types.RunnableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](types.RunnableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`TA`\>, [`RunnableLike`](types.RunnableLike.md)<`TB`\>\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<[`RunnableLike`](types.RunnableLike.md)<`T`\>\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<[`RunnableLike`](types.RunnableLike.md)<`T`\>\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`TA`\>, [`RunnableLike`](types.RunnableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](types.RunnableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`TA`\>, [`RunnableLike`](types.RunnableLike.md)<`TB`\>\>

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
