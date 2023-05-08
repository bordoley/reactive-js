[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / SkipFirst

# Interface: SkipFirst<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).SkipFirst

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Table of contents

### Operator Methods

- [skipFirst](core.Container.SkipFirst.md#skipfirst)

## Operator Methods

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Returns a Container that skips the first count items emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>
