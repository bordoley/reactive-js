[Reactive-JS](../README.md) / [Enumerable](../modules/Enumerable.md) / EnumerableModule

# Interface: EnumerableModule

[Enumerable](../modules/Enumerable.md).EnumerableModule

## Hierarchy

- [`EnumerableContainerModule`](types.EnumerableContainerModule.md)<[`Type`](../modules/Enumerable.md#type)\>

- [`StatefulContainerModule`](types.StatefulContainerModule.md)<[`Type`](../modules/Enumerable.md#type)\>

  ↳ **`EnumerableModule`**

## Table of contents

### Methods

- [compute](Enumerable.EnumerableModule.md#compute)
- [toObservable](Enumerable.EnumerableModule.md#toobservable)

## Methods

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

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

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

[EnumerableContainerModule](types.EnumerableContainerModule.md).[toObservable](types.EnumerableContainerModule.md#toobservable)

▸ **toObservable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Overrides

[EnumerableContainerModule](types.EnumerableContainerModule.md).[toObservable](types.EnumerableContainerModule.md#toobservable)
