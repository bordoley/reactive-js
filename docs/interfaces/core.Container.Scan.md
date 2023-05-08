[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / Scan

# Interface: Scan<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).Scan

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Table of contents

### Operator Methods

- [scan](core.Container.Scan.md#scan)

## Operator Methods

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TAcc`\>

Returns a Container that applies an accumulator function over the source,
and emits each intermediate result.

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scanner` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> | The accumulator function called on each source value. |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> | The initial accumulation value. |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TAcc`\>
