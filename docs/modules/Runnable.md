[Reactive-JS](../README.md) / Runnable

# Module: Runnable

## Table of contents

### Container Interfaces

- [RunnableContainer](../interfaces/Runnable.RunnableContainer.md)

### Module Interfaces

- [RunnableModule](../interfaces/Runnable.RunnableModule.md)

### Type Aliases

- [Signature](Runnable.md#signature)
- [Type](Runnable.md#type)

### Constructor Functions

- [compute](Runnable.md#compute)

### Operator Functions

- [concatAll](Runnable.md#concatall)
- [concatMap](Runnable.md#concatmap)
- [exhaust](Runnable.md#exhaust)
- [exhaustMap](Runnable.md#exhaustmap)
- [mergeAll](Runnable.md#mergeall)
- [mergeMap](Runnable.md#mergemap)
- [switchAll](Runnable.md#switchall)
- [switchMap](Runnable.md#switchmap)

### Other Functions

- [run](Runnable.md#run)

## Type Aliases

### Signature

Ƭ **Signature**: [`RunnableModule`](../interfaces/Runnable.RunnableModule.md)

___

### Type

Ƭ **Type**: [`RunnableContainer`](../interfaces/Runnable.RunnableContainer.md)

## Constructor Functions

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

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

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

## Operator Functions

### concatAll

▸ **concatAll**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TA`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TA`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\>

___

### exhaust

▸ **exhaust**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TA`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TA`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TA`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TA`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TA`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`TA`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\>

___

## Other Functions

### run

▸ **run**<`T`\>(`options?`): [`SideEffect1`](functions.md#sideeffect1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>\>

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

[`SideEffect1`](functions.md#sideeffect1)<[`RunnableBaseLike`](../interfaces/types.RunnableBaseLike.md)<`T`\>\>
