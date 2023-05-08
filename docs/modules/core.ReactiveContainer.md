[Reactive-JS](../README.md) / [core](core.md) / ReactiveContainer

# Namespace: ReactiveContainer

[core](core.md).ReactiveContainer

## Table of contents

### AnimationConfig Interfaces

- [DelayAnimationConfig](../interfaces/core.ReactiveContainer.DelayAnimationConfig.md)
- [FrameAnimationConfig](../interfaces/core.ReactiveContainer.FrameAnimationConfig.md)
- [KeyFrameAnimationConfig](../interfaces/core.ReactiveContainer.KeyFrameAnimationConfig.md)
- [LoopAnimationConfig](../interfaces/core.ReactiveContainer.LoopAnimationConfig.md)
- [SpringAnimationConfig](../interfaces/core.ReactiveContainer.SpringAnimationConfig.md)

### Other Interfaces

- [TypeClass](../interfaces/core.ReactiveContainer.TypeClass.md)

### Type Aliases

- [AnimationConfig](core.ReactiveContainer.md#animationconfig)

## Type Aliases

### AnimationConfig

Ƭ **AnimationConfig**<`T`\>: [`DelayAnimationConfig`](../interfaces/core.ReactiveContainer.DelayAnimationConfig.md) \| [`LoopAnimationConfig`](../interfaces/core.ReactiveContainer.LoopAnimationConfig.md)<`T`\> \| `T` extends `number` ? [`KeyFrameAnimationConfig`](../interfaces/core.ReactiveContainer.KeyFrameAnimationConfig.md) \| [`SpringAnimationConfig`](../interfaces/core.ReactiveContainer.SpringAnimationConfig.md) \| [`FrameAnimationConfig`](../interfaces/core.ReactiveContainer.FrameAnimationConfig.md) & { `selector?`: `never`  } : [`KeyFrameAnimationConfig`](../interfaces/core.ReactiveContainer.KeyFrameAnimationConfig.md) \| [`SpringAnimationConfig`](../interfaces/core.ReactiveContainer.SpringAnimationConfig.md) \| [`FrameAnimationConfig`](../interfaces/core.ReactiveContainer.FrameAnimationConfig.md) & { `selector`: [`Function1`](functions.md#function1)<`number`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
