[Reactive-JS](../README.md) / [containers](../modules/containers.md) / TakeLast

# Interface: TakeLast<C, O\>

[containers](../modules/containers.md).TakeLast

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `unknown` |

## Table of contents

### Operator Methods

- [takeLast](containers.TakeLast.md#takelast)

## Operator Methods

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

Returns a ContainerLike that only emits the last `count` items emitted by the source.

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
