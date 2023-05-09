[Reactive-JS](../README.md) / [core](core.md) / RunnableObservableContainers

# Namespace: RunnableObservableContainers

[core](core.md).RunnableObservableContainers

## Table of contents

### AnimationConfig Interfaces

- [DelayAnimationConfig](../interfaces/core.RunnableObservableContainers.DelayAnimationConfig.md)
- [FrameAnimationConfig](../interfaces/core.RunnableObservableContainers.FrameAnimationConfig.md)
- [KeyFrameAnimationConfig](../interfaces/core.RunnableObservableContainers.KeyFrameAnimationConfig.md)
- [LoopAnimationConfig](../interfaces/core.RunnableObservableContainers.LoopAnimationConfig.md)
- [SpringAnimationConfig](../interfaces/core.RunnableObservableContainers.SpringAnimationConfig.md)

### Other Interfaces

- [TypeClass](../interfaces/core.RunnableObservableContainers.TypeClass.md)

### Type Aliases

- [AnimationConfig](core.RunnableObservableContainers.md#animationconfig)

## Type Aliases

### AnimationConfig

Ƭ **AnimationConfig**<`T`\>: [`DelayAnimationConfig`](../interfaces/core.RunnableObservableContainers.DelayAnimationConfig.md) \| [`LoopAnimationConfig`](../interfaces/core.RunnableObservableContainers.LoopAnimationConfig.md)<`T`\> \| `T` extends `number` ? [`KeyFrameAnimationConfig`](../interfaces/core.RunnableObservableContainers.KeyFrameAnimationConfig.md) \| [`SpringAnimationConfig`](../interfaces/core.RunnableObservableContainers.SpringAnimationConfig.md) \| [`FrameAnimationConfig`](../interfaces/core.RunnableObservableContainers.FrameAnimationConfig.md) & { `selector?`: `never`  } : [`KeyFrameAnimationConfig`](../interfaces/core.RunnableObservableContainers.KeyFrameAnimationConfig.md) \| [`SpringAnimationConfig`](../interfaces/core.RunnableObservableContainers.SpringAnimationConfig.md) \| [`FrameAnimationConfig`](../interfaces/core.RunnableObservableContainers.FrameAnimationConfig.md) & { `selector`: [`Function1`](functions.md#function1)<`number`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
