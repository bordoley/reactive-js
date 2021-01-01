[Reactive-JS](../README.md) / [runnable](../modules/runnable.md) / SinkLike

# Interface: SinkLike<T\>

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* **SinkLike**

## Implemented by

* [*AbstractDelegatingSink*](../classes/runnable.abstractdelegatingsink.md)

## Index

### Properties

* [isDone](runnable.sinklike.md#isdone)

### Methods

* [done](runnable.sinklike.md#done)
* [notify](runnable.sinklike.md#notify)

## Properties

### isDone

• `Readonly` **isDone**: *boolean*

## Methods

### done

▸ **done**(): *void*

**Returns:** *void*

___

### notify

▸ **notify**(`next`: T): *void*

#### Parameters:

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *void*
