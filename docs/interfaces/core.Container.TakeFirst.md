[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / TakeFirst

# Interface: TakeFirst<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).TakeFirst

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Table of contents

### Operator Methods

- [takeFirst](core.Container.TakeFirst.md#takefirst)

## Operator Methods

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Returns a Container that only emits the first `count` values emitted by the source.

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
