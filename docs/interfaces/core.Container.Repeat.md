[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / Repeat

# Interface: Repeat<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).Repeat

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Table of contents

### Operator Methods

- [repeat](core.Container.Repeat.md#repeat)

## Operator Methods

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Returns a Container that mirrors the source, repeating it whenever the predicate returns true.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`number`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Returns a Container that mirrors the source, repeating it `count` times.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

▸ **repeat**<`T`\>(): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>
