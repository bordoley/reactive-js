[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / DistinctUntilChanged

# Interface: DistinctUntilChanged<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).DistinctUntilChanged

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Table of contents

### Operator Methods

- [distinctUntilChanged](core.Container.DistinctUntilChanged.md#distinctuntilchanged)

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Returns a Container.Operator that emits all items emitted by the source that
are distinct by comparison from the previous item.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>
