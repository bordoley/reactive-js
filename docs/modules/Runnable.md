[Reactive-JS](../README.md) / Runnable

# Module: Runnable

## Table of contents

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

Ƭ **Type**: [`RunnableContainer`](../interfaces/Observable.RunnableContainer.md)

## Constructor Functions

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`RunnableWithSideEffectsLike`](../interfaces/types.RunnableWithSideEffectsLike.md)<`T`\>

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

[`RunnableWithSideEffectsLike`](../interfaces/types.RunnableWithSideEffectsLike.md)<`T`\>

___

## Operator Functions

### concatAll

▸ **concatAll**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\>

___

### exhaust

▸ **exhaust**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\>

___

## Other Functions

### run

▸ **run**<`T`\>(`options?`): [`SideEffect1`](functions.md#sideeffect1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

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

[`SideEffect1`](functions.md#sideeffect1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>
