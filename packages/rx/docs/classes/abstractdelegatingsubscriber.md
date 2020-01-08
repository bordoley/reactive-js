[@reactive-js/rx](../README.md) › [AbstractDelegatingSubscriber](abstractdelegatingsubscriber.md)

# Class: AbstractDelegatingSubscriber <**TA, TB**>

Abstract base class for implementing SubscriberOperatorLikes.

## Type parameters

▪ **TA**

▪ **TB**

## Hierarchy

* AbstractSubscriber‹TA›

  ↳ **AbstractDelegatingSubscriber**

## Implements

* [SubscriberLike](../interfaces/subscriberlike.md)‹TA›

## Index

### Constructors

* [constructor](abstractdelegatingsubscriber.md#constructor)

### Properties

* [delegate](abstractdelegatingsubscriber.md#delegate)

### Methods

* [notify](abstractdelegatingsubscriber.md#abstract-notify)

## Constructors

###  constructor

\+ **new AbstractDelegatingSubscriber**(`delegate`: [SubscriberLike](../interfaces/subscriberlike.md)‹TB›): *[AbstractDelegatingSubscriber](abstractdelegatingsubscriber.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`delegate` | [SubscriberLike](../interfaces/subscriberlike.md)‹TB› |

**Returns:** *[AbstractDelegatingSubscriber](abstractdelegatingsubscriber.md)*

## Properties

###  delegate

• **delegate**: *[SubscriberLike](../interfaces/subscriberlike.md)‹TB›*

## Methods

### `Abstract` notify

▸ **notify**(`_`: TA): *void*

*Implementation of [SubscriberLike](../interfaces/subscriberlike.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`_` | TA |

**Returns:** *void*
