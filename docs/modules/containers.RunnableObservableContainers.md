[Reactive-JS](../README.md) / [containers](containers.md) / RunnableObservableContainers

# Namespace: RunnableObservableContainers

[containers](containers.md).RunnableObservableContainers

## Table of contents

### AnimationConfig Interfaces

- [DelayAnimationConfig](../interfaces/containers.RunnableObservableContainers.DelayAnimationConfig.md)
- [FrameAnimationConfig](../interfaces/containers.RunnableObservableContainers.FrameAnimationConfig.md)
- [KeyFrameAnimationConfig](../interfaces/containers.RunnableObservableContainers.KeyFrameAnimationConfig.md)
- [LoopAnimationConfig](../interfaces/containers.RunnableObservableContainers.LoopAnimationConfig.md)
- [SpringAnimationConfig](../interfaces/containers.RunnableObservableContainers.SpringAnimationConfig.md)

### Other Interfaces

- [TypeClass](../interfaces/containers.RunnableObservableContainers.TypeClass.md)

### Type Aliases

- [AnimationConfig](containers.RunnableObservableContainers.md#animationconfig)

## Type Aliases

### AnimationConfig

Ƭ **AnimationConfig**<`T`\>: [`DelayAnimationConfig`](../interfaces/containers.RunnableObservableContainers.DelayAnimationConfig.md) \| [`LoopAnimationConfig`](../interfaces/containers.RunnableObservableContainers.LoopAnimationConfig.md)<`T`\> \| `T` extends `number` ? [`KeyFrameAnimationConfig`](../interfaces/containers.RunnableObservableContainers.KeyFrameAnimationConfig.md) \| [`SpringAnimationConfig`](../interfaces/containers.RunnableObservableContainers.SpringAnimationConfig.md) \| [`FrameAnimationConfig`](../interfaces/containers.RunnableObservableContainers.FrameAnimationConfig.md) & { `selector?`: `never`  } : [`KeyFrameAnimationConfig`](../interfaces/containers.RunnableObservableContainers.KeyFrameAnimationConfig.md) \| [`SpringAnimationConfig`](../interfaces/containers.RunnableObservableContainers.SpringAnimationConfig.md) \| [`FrameAnimationConfig`](../interfaces/containers.RunnableObservableContainers.FrameAnimationConfig.md) & { `selector`: [`Function1`](functions.md#function1)<`number`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
