[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Buffer

# Interface: Buffer<C\>

[containers](../modules/containers.md).Buffer

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container.md) |

## Table of contents

### Operator Properties

- [buffer](containers.Buffer.md#buffer)

## Operator Properties

### buffer

• **buffer**: <T\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly `T`[]\>

#### Type declaration

▸ <`T`\>(`options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly `T`[]\>

Returns a Container which buffers items produced by the source until the
number of items reaches the specified maximum buffer size.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

##### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly `T`[]\>
