[Reactive-JS](../README.md) / liftable

# Module: liftable

## Table of contents

### Classes

- [AbtractDisposableLiftable](../classes/liftable.AbtractDisposableLiftable.md)

### Interfaces

- [LiftableLike](../interfaces/liftable.LiftableLike.md)

### Type Aliases

- [LiftableStateOf](liftable.md#liftablestateof)

## Type Aliases

### LiftableStateOf

Ƭ **LiftableStateOf**<`C`, `T`\>: `C` extends { `TLiftableState`: `unknown`  } ? `C` & { `T`: `T`  }[``"TLiftableState"``] : { `_C`: `C` ; `_T`: () => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `T` | `T` |
