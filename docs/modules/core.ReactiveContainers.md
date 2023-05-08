[Reactive-JS](../README.md) / [core](core.md) / ReactiveContainers

# Namespace: ReactiveContainers

[core](core.md).ReactiveContainers

## Table of contents

### AnimationConfig Interfaces

- [DelayAnimationConfig](../interfaces/core.ReactiveContainers.DelayAnimationConfig.md)
- [FrameAnimationConfig](../interfaces/core.ReactiveContainers.FrameAnimationConfig.md)
- [KeyFrameAnimationConfig](../interfaces/core.ReactiveContainers.KeyFrameAnimationConfig.md)
- [LoopAnimationConfig](../interfaces/core.ReactiveContainers.LoopAnimationConfig.md)
- [SpringAnimationConfig](../interfaces/core.ReactiveContainers.SpringAnimationConfig.md)

### Other Interfaces

- [TypeClass](../interfaces/core.ReactiveContainers.TypeClass.md)

### Type Aliases

- [AnimationConfig](core.ReactiveContainers.md#animationconfig)

## Type Aliases

### AnimationConfig

Ƭ **AnimationConfig**<`T`\>: [`DelayAnimationConfig`](../interfaces/core.ReactiveContainers.DelayAnimationConfig.md) \| [`LoopAnimationConfig`](../interfaces/core.ReactiveContainers.LoopAnimationConfig.md)<`T`\> \| `T` extends `number` ? [`KeyFrameAnimationConfig`](../interfaces/core.ReactiveContainers.KeyFrameAnimationConfig.md) \| [`SpringAnimationConfig`](../interfaces/core.ReactiveContainers.SpringAnimationConfig.md) \| [`FrameAnimationConfig`](../interfaces/core.ReactiveContainers.FrameAnimationConfig.md) & { `selector?`: `never`  } : [`KeyFrameAnimationConfig`](../interfaces/core.ReactiveContainers.KeyFrameAnimationConfig.md) \| [`SpringAnimationConfig`](../interfaces/core.ReactiveContainers.SpringAnimationConfig.md) \| [`FrameAnimationConfig`](../interfaces/core.ReactiveContainers.FrameAnimationConfig.md) & { `selector`: [`Function1`](functions.md#function1)<`number`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
