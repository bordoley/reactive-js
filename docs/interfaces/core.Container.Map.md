[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / Map

# Interface: Map<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).Map

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Table of contents

### Operator Methods

- [map](core.Container.Map.md#map)

## Operator Methods

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

Returns a Container.Operator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>
