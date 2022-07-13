[Reactive-JS](../README.md) / scheduling/PausableSchedulerLike

# Module: scheduling/PausableSchedulerLike

## Table of contents

### Interfaces

- [PausableSchedulerLike](../interfaces/scheduling_PausableSchedulerLike.PausableSchedulerLike.md)

### Variables

- [PausableSchedulerLike\_pause](scheduling_PausableSchedulerLike.md#pausableschedulerlike_pause)
- [PausableSchedulerLike\_resume](scheduling_PausableSchedulerLike.md#pausableschedulerlike_resume)

### Functions

- [pause](scheduling_PausableSchedulerLike.md#pause)
- [resume](scheduling_PausableSchedulerLike.md#resume)

## Variables

### PausableSchedulerLike\_pause

• `Const` **PausableSchedulerLike\_pause**: unique `symbol`

___

### PausableSchedulerLike\_resume

• `Const` **PausableSchedulerLike\_resume**: unique `symbol`

## Functions

### pause

▸ **pause**(`scheduler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | `Object` |
| `scheduler.[PausableSchedulerLike_pause]` | () => `void` |

#### Returns

`void`

___

### resume

▸ **resume**(`scheduler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | `Object` |
| `scheduler.[PausableSchedulerLike_resume]` | () => `void` |

#### Returns

`void`
