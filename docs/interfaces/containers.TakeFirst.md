[Reactive-JS](../README.md) / [containers](../modules/containers.md) / TakeFirst

# Interface: TakeFirst<C, O\>

[containers](../modules/containers.md).TakeFirst

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `unknown` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`TakeFirst`**

## Table of contents

### Operator Methods

- [takeFirst](containers.TakeFirst.md#takefirst)

## Operator Methods

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

Returns a ContainerLike that only emits the first `count` values emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` & { `count?`: `number`  } |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
