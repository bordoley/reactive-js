[Reactive-JS](../README.md) / [containers](../modules/containers.md) / TakeFirst

# Interface: TakeFirst<C\>

[containers](../modules/containers.md).TakeFirst

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container.md) |

## Table of contents

### Operator Methods

- [takeFirst](containers.TakeFirst.md#takefirst)

## Operator Methods

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

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

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
