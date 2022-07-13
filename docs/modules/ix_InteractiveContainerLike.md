[Reactive-JS](../README.md) / ix/InteractiveContainerLike

# Module: ix/InteractiveContainerLike

## Table of contents

### Interfaces

- [InteractiveContainerLike](../interfaces/ix_InteractiveContainerLike.InteractiveContainerLike.md)

### Type Aliases

- [InteractiveContainerCtxOf](ix_InteractiveContainerLike.md#interactivecontainerctxof)

### Variables

- [InteractiveContainerLike\_interact](ix_InteractiveContainerLike.md#interactivecontainerlike_interact)

## Type Aliases

### InteractiveContainerCtxOf

Ƭ **InteractiveContainerCtxOf**<`C`, `T`\>: `C` extends { `TCtx?`: `unknown`  } ? `NonNullable`<`C` & { `T`: `T`  }[``"TCtx"``]\> : { `_C`: `C` ; `_T`: () => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`InteractiveContainerLike`](../interfaces/ix_InteractiveContainerLike.InteractiveContainerLike.md) |
| `T` | `T` |

## Variables

### InteractiveContainerLike\_interact

• `Const` **InteractiveContainerLike\_interact**: unique `symbol`
