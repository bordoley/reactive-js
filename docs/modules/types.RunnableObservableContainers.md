[Reactive-JS](../README.md) / [types](types.md) / RunnableObservableContainers

# Namespace: RunnableObservableContainers

[types](types.md).RunnableObservableContainers

## Table of contents

### AnimationConfig Interfaces

- [DelayAnimationConfig](../interfaces/types.RunnableObservableContainers.DelayAnimationConfig.md)
- [FrameAnimationConfig](../interfaces/types.RunnableObservableContainers.FrameAnimationConfig.md)
- [KeyFrameAnimationConfig](../interfaces/types.RunnableObservableContainers.KeyFrameAnimationConfig.md)
- [LoopAnimationConfig](../interfaces/types.RunnableObservableContainers.LoopAnimationConfig.md)
- [SpringAnimationConfig](../interfaces/types.RunnableObservableContainers.SpringAnimationConfig.md)

### Other Interfaces

- [TypeClass](../interfaces/types.RunnableObservableContainers.TypeClass.md)

### Type Aliases

- [AnimationConfig](types.RunnableObservableContainers.md#animationconfig)

## Type Aliases

### AnimationConfig

Ƭ **AnimationConfig**<`T`\>: [`DelayAnimationConfig`](../interfaces/types.RunnableObservableContainers.DelayAnimationConfig.md) \| [`LoopAnimationConfig`](../interfaces/types.RunnableObservableContainers.LoopAnimationConfig.md)<`T`\> \| `T` extends `number` ? [`KeyFrameAnimationConfig`](../interfaces/types.RunnableObservableContainers.KeyFrameAnimationConfig.md) \| [`SpringAnimationConfig`](../interfaces/types.RunnableObservableContainers.SpringAnimationConfig.md) \| [`FrameAnimationConfig`](../interfaces/types.RunnableObservableContainers.FrameAnimationConfig.md) & { `selector?`: `never`  } : [`KeyFrameAnimationConfig`](../interfaces/types.RunnableObservableContainers.KeyFrameAnimationConfig.md) \| [`SpringAnimationConfig`](../interfaces/types.RunnableObservableContainers.SpringAnimationConfig.md) \| [`FrameAnimationConfig`](../interfaces/types.RunnableObservableContainers.FrameAnimationConfig.md) & { `selector`: [`Function1`](functions.md#function1)<`number`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
