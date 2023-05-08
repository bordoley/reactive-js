[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / Concat

# Interface: Concat<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).Concat

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Table of contents

### Constructor Methods

- [concat](core.Container.Concat.md#concat)

## Constructor Methods

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`Of`](../modules/core.Container.md#of)<`C`, `T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Of`](../modules/core.Container.md#of)<`C`, `T`\> |
| `snd` | [`Of`](../modules/core.Container.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/core.Container.md#of)<`C`, `T`\>[] |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, `T`\>
