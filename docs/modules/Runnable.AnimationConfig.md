[Reactive-JS](../README.md) / [Runnable](Runnable.md) / AnimationConfig

# Namespace: AnimationConfig

[Runnable](Runnable.md).AnimationConfig

## Table of contents

### AnimationConfig Interfaces

- [Delay](../interfaces/Runnable.AnimationConfig.Delay.md)
- [Frame](../interfaces/Runnable.AnimationConfig.Frame.md)
- [KeyFrame](../interfaces/Runnable.AnimationConfig.KeyFrame.md)
- [Loop](../interfaces/Runnable.AnimationConfig.Loop.md)
- [Spring](../interfaces/Runnable.AnimationConfig.Spring.md)

### Type Aliases

- [Description](Runnable.AnimationConfig.md#description)

## Type Aliases

### Description

Ƭ **Description**<`T`\>: [`Delay`](../interfaces/Runnable.AnimationConfig.Delay.md) \| [`Loop`](../interfaces/Runnable.AnimationConfig.Loop.md)<`T`\> \| `T` extends `number` ? [`KeyFrame`](../interfaces/Runnable.AnimationConfig.KeyFrame.md) \| [`Spring`](../interfaces/Runnable.AnimationConfig.Spring.md) \| [`Frame`](../interfaces/Runnable.AnimationConfig.Frame.md) & { `selector?`: `never`  } : [`KeyFrame`](../interfaces/Runnable.AnimationConfig.KeyFrame.md) \| [`Spring`](../interfaces/Runnable.AnimationConfig.Spring.md) \| [`Frame`](../interfaces/Runnable.AnimationConfig.Frame.md) & { `selector`: [`Function1`](functions.md#function1)<`number`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |
