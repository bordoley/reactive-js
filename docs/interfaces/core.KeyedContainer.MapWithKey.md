[Reactive-JS](../README.md) / [core](../modules/core.md) / [KeyedContainer](../modules/core.KeyedContainer.md) / MapWithKey

# Interface: MapWithKey<C\>

[core](../modules/core.md).[KeyedContainer](../modules/core.KeyedContainer.md).MapWithKey

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](core.KeyedContainer-1.md) |

## Table of contents

### Operator Methods

- [mapWithKey](core.KeyedContainer.MapWithKey.md#mapwithkey)

## Operator Methods

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](../modules/core.KeyedContainer.md#operator)<`C`, `TKey`, `TA`, `TB`\>

Returns a Container.Operator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/core.KeyedContainer.md#keyof)<`C`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`Operator`](../modules/core.KeyedContainer.md#operator)<`C`, `TKey`, `TA`, `TB`\>
