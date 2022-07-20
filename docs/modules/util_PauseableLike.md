[Reactive-JS](../README.md) / util/PauseableLike

# Module: util/PauseableLike

## Table of contents

### Interfaces

- [PauseableLike](../interfaces/util_PauseableLike.PauseableLike.md)

### Variables

- [PauseableLike\_pause](util_PauseableLike.md#pauseablelike_pause)
- [PauseableLike\_resume](util_PauseableLike.md#pauseablelike_resume)

### Functions

- [pause](util_PauseableLike.md#pause)
- [resume](util_PauseableLike.md#resume)

## Variables

### PauseableLike\_pause

• `Const` **PauseableLike\_pause**: unique `symbol`

___

### PauseableLike\_resume

• `Const` **PauseableLike\_resume**: unique `symbol`

## Functions

### pause

▸ **pause**(`pausable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pausable` | `Object` |
| `pausable.[PauseableLike_pause]` | () => `void` |

#### Returns

`void`

___

### resume

▸ **resume**(`pausable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pausable` | `Object` |
| `pausable.[PauseableLike_resume]` | () => `void` |

#### Returns

`void`
