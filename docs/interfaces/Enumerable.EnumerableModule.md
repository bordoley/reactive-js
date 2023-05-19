[Reactive-JS](../README.md) / [Enumerable](../modules/Enumerable.md) / EnumerableModule

# Interface: EnumerableModule

[Enumerable](../modules/Enumerable.md).EnumerableModule

## Hierarchy

- [`GeneratorTypeClass`](types.GeneratorTypeClass.md)<[`Type`](../modules/Enumerable.md#type)\>

  ↳ **`EnumerableModule`**

## Table of contents

### Methods

- [compute](Enumerable.EnumerableModule.md#compute)

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
