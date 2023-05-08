[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / TakeLast

# Interface: TakeLast<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).TakeLast

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Table of contents

### Operator Methods

- [takeLast](core.Container.TakeLast.md#takelast)

## Operator Methods

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Returns a Container that only emits the last `count` items emitted by the source.

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
