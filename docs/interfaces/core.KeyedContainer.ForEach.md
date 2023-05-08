[Reactive-JS](../README.md) / [core](../modules/core.md) / [KeyedContainer](../modules/core.KeyedContainer.md) / ForEach

# Interface: ForEach<C\>

[core](../modules/core.md).[KeyedContainer](../modules/core.KeyedContainer.md).ForEach

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](core.KeyedContainer-1.md) |

## Table of contents

### Operator Methods

- [forEach](core.KeyedContainer.ForEach.md#foreach)

## Operator Methods

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`Operator`](../modules/core.KeyedContainer.md#operator)<`C`, `TKey`, `T`, `T`\>

Returns a Container.Operator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/core.KeyedContainer.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`Operator`](../modules/core.KeyedContainer.md#operator)<`C`, `TKey`, `T`, `T`\>
