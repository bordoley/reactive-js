[Reactive-JS](../README.md) / integrations/react/web

# Module: integrations/react/web

## Table of contents

### Hook Functions

- [useAnimate](integrations_react_web.md#useanimate)
- [useAnimateEvent](integrations_react_web.md#useanimateevent)
- [useScroll](integrations_react_web.md#usescroll)
- [useWindowLocation](integrations_react_web.md#usewindowlocation)

### Other Functions

- [WindowLocationProvider](integrations_react_web.md#windowlocationprovider)

## Hook Functions

### useAnimate

▸ **useAnimate**<`TElement`, `T`\>(`animation`, `selector`, `deps?`): `Ref`<`TElement`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement`<`TElement`\> |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animation` | [`Optional`](functions.md#optional)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>\> |
| `selector` | (`ev`: `T`) => [`ReadonlyObjectMapLike`](containers.md#readonlyobjectmaplike)<``"filter"`` \| ``"fill"`` \| ``"animationName"`` \| ``"all"`` \| ``"offset"`` \| ``"height"`` \| ``"width"`` \| ``"left"`` \| ``"top"`` \| ``"accentColor"`` \| ``"alignContent"`` \| ``"alignItems"`` \| ``"alignSelf"`` \| ``"alignmentBaseline"`` \| ``"animation"`` \| ``"animationDelay"`` \| ``"animationDirection"`` \| ``"animationDuration"`` \| ``"animationFillMode"`` \| ``"animationIterationCount"`` \| ``"animationPlayState"`` \| ``"animationTimingFunction"`` \| ``"appearance"`` \| ``"aspectRatio"`` \| ``"backdropFilter"`` \| ``"backfaceVisibility"`` \| ``"background"`` \| ``"backgroundAttachment"`` \| ``"backgroundBlendMode"`` \| ``"backgroundClip"`` \| ``"backgroundColor"`` \| ``"backgroundImage"`` \| ``"backgroundOrigin"`` \| ``"backgroundPosition"`` \| ``"backgroundPositionX"`` \| ``"backgroundPositionY"`` \| ``"backgroundRepeat"`` \| ``"backgroundSize"`` \| ``"baselineShift"`` \| ``"blockSize"`` \| ``"border"`` \| ``"borderBlock"`` \| ``"borderBlockColor"`` \| ``"borderBlockEnd"`` \| ``"borderBlockEndColor"`` \| ``"borderBlockEndStyle"`` \| ``"borderBlockEndWidth"`` \| ``"borderBlockStart"`` \| ``"borderBlockStartColor"`` \| ``"borderBlockStartStyle"`` \| ``"borderBlockStartWidth"`` \| ``"borderBlockStyle"`` \| ``"borderBlockWidth"`` \| ``"borderBottom"`` \| ``"borderBottomColor"`` \| ``"borderBottomLeftRadius"`` \| ``"borderBottomRightRadius"`` \| ``"borderBottomStyle"`` \| ``"borderBottomWidth"`` \| ``"borderCollapse"`` \| ``"borderColor"`` \| ``"borderEndEndRadius"`` \| ``"borderEndStartRadius"`` \| ``"borderImage"`` \| ``"borderImageOutset"`` \| ``"borderImageRepeat"`` \| ``"borderImageSlice"`` \| ``"borderImageSource"`` \| ``"borderImageWidth"`` \| ``"borderInline"`` \| ``"borderInlineColor"`` \| ``"borderInlineEnd"`` \| ``"borderInlineEndColor"`` \| ``"borderInlineEndStyle"`` \| ``"borderInlineEndWidth"`` \| ``"borderInlineStart"`` \| ``"borderInlineStartColor"`` \| ``"borderInlineStartStyle"`` \| ``"borderInlineStartWidth"`` \| ``"borderInlineStyle"`` \| ``"borderInlineWidth"`` \| ``"borderLeft"`` \| ``"borderLeftColor"`` \| ``"borderLeftStyle"`` \| ``"borderLeftWidth"`` \| ``"borderRadius"`` \| ``"borderRight"`` \| ``"borderRightColor"`` \| ``"borderRightStyle"`` \| ``"borderRightWidth"`` \| ``"borderSpacing"`` \| ``"borderStartEndRadius"`` \| ``"borderStartStartRadius"`` \| ``"borderStyle"`` \| ``"borderTop"`` \| ``"borderTopColor"`` \| ``"borderTopLeftRadius"`` \| ``"borderTopRightRadius"`` \| ``"borderTopStyle"`` \| ``"borderTopWidth"`` \| ``"borderWidth"`` \| ``"bottom"`` \| ``"boxShadow"`` \| ``"boxSizing"`` \| ``"breakAfter"`` \| ``"breakBefore"`` \| ``"breakInside"`` \| ``"captionSide"`` \| ``"caretColor"`` \| ``"clear"`` \| ``"clip"`` \| ``"clipPath"`` \| ``"clipRule"`` \| ``"color"`` \| ``"colorInterpolation"`` \| ``"colorInterpolationFilters"`` \| ``"colorScheme"`` \| ``"columnCount"`` \| ``"columnFill"`` \| ``"columnGap"`` \| ``"columnRule"`` \| ``"columnRuleColor"`` \| ``"columnRuleStyle"`` \| ``"columnRuleWidth"`` \| ``"columnSpan"`` \| ``"columnWidth"`` \| ``"columns"`` \| ``"contain"`` \| ``"container"`` \| ``"containerName"`` \| ``"containerType"`` \| ``"content"`` \| ``"counterIncrement"`` \| ``"counterReset"`` \| ``"counterSet"`` \| ``"cssFloat"`` \| ``"cssText"`` \| ``"cursor"`` \| ``"direction"`` \| ``"display"`` \| ``"dominantBaseline"`` \| ``"emptyCells"`` \| ``"fillOpacity"`` \| ``"fillRule"`` \| ``"flex"`` \| ``"flexBasis"`` \| ``"flexDirection"`` \| ``"flexFlow"`` \| ``"flexGrow"`` \| ``"flexShrink"`` \| ``"flexWrap"`` \| ``"float"`` \| ``"floodColor"`` \| ``"floodOpacity"`` \| ``"font"`` \| ``"fontFamily"`` \| ``"fontFeatureSettings"`` \| ``"fontKerning"`` \| ``"fontOpticalSizing"`` \| ``"fontPalette"`` \| ``"fontSize"`` \| ``"fontSizeAdjust"`` \| ``"fontStretch"`` \| ``"fontStyle"`` \| ``"fontSynthesis"`` \| ``"fontVariant"`` \| ``"fontVariantAlternates"`` \| ``"fontVariantCaps"`` \| ``"fontVariantEastAsian"`` \| ``"fontVariantLigatures"`` \| ``"fontVariantNumeric"`` \| ``"fontVariantPosition"`` \| ``"fontVariationSettings"`` \| ``"fontWeight"`` \| ``"gap"`` \| ``"grid"`` \| ``"gridArea"`` \| ``"gridAutoColumns"`` \| ``"gridAutoFlow"`` \| ``"gridAutoRows"`` \| ``"gridColumn"`` \| ``"gridColumnEnd"`` \| ``"gridColumnGap"`` \| ``"gridColumnStart"`` \| ``"gridGap"`` \| ``"gridRow"`` \| ``"gridRowEnd"`` \| ``"gridRowGap"`` \| ``"gridRowStart"`` \| ``"gridTemplate"`` \| ``"gridTemplateAreas"`` \| ``"gridTemplateColumns"`` \| ``"gridTemplateRows"`` \| ``"hyphenateCharacter"`` \| ``"hyphens"`` \| ``"imageOrientation"`` \| ``"imageRendering"`` \| ``"inlineSize"`` \| ``"inset"`` \| ``"insetBlock"`` \| ``"insetBlockEnd"`` \| ``"insetBlockStart"`` \| ``"insetInline"`` \| ``"insetInlineEnd"`` \| ``"insetInlineStart"`` \| ``"isolation"`` \| ``"justifyContent"`` \| ``"justifyItems"`` \| ``"justifySelf"`` \| ``"letterSpacing"`` \| ``"lightingColor"`` \| ``"lineBreak"`` \| ``"lineHeight"`` \| ``"listStyle"`` \| ``"listStyleImage"`` \| ``"listStylePosition"`` \| ``"listStyleType"`` \| ``"margin"`` \| ``"marginBlock"`` \| ``"marginBlockEnd"`` \| ``"marginBlockStart"`` \| ``"marginBottom"`` \| ``"marginInline"`` \| ``"marginInlineEnd"`` \| ``"marginInlineStart"`` \| ``"marginLeft"`` \| ``"marginRight"`` \| ``"marginTop"`` \| ``"marker"`` \| ``"markerEnd"`` \| ``"markerMid"`` \| ``"markerStart"`` \| ``"mask"`` \| ``"maskClip"`` \| ``"maskComposite"`` \| ``"maskImage"`` \| ``"maskMode"`` \| ``"maskOrigin"`` \| ``"maskPosition"`` \| ``"maskRepeat"`` \| ``"maskSize"`` \| ``"maskType"`` \| ``"maxBlockSize"`` \| ``"maxHeight"`` \| ``"maxInlineSize"`` \| ``"maxWidth"`` \| ``"minBlockSize"`` \| ``"minHeight"`` \| ``"minInlineSize"`` \| ``"minWidth"`` \| ``"mixBlendMode"`` \| ``"objectFit"`` \| ``"objectPosition"`` \| ``"offsetDistance"`` \| ``"offsetPath"`` \| ``"offsetRotate"`` \| ``"opacity"`` \| ``"order"`` \| ``"orphans"`` \| ``"outline"`` \| ``"outlineColor"`` \| ``"outlineOffset"`` \| ``"outlineStyle"`` \| ``"outlineWidth"`` \| ``"overflow"`` \| ``"overflowAnchor"`` \| ``"overflowClipMargin"`` \| ``"overflowWrap"`` \| ``"overflowX"`` \| ``"overflowY"`` \| ``"overscrollBehavior"`` \| ``"overscrollBehaviorBlock"`` \| ``"overscrollBehaviorInline"`` \| ``"overscrollBehaviorX"`` \| ``"overscrollBehaviorY"`` \| ``"padding"`` \| ``"paddingBlock"`` \| ``"paddingBlockEnd"`` \| ``"paddingBlockStart"`` \| ``"paddingBottom"`` \| ``"paddingInline"`` \| ``"paddingInlineEnd"`` \| ``"paddingInlineStart"`` \| ``"paddingLeft"`` \| ``"paddingRight"`` \| ``"paddingTop"`` \| ``"pageBreakAfter"`` \| ``"pageBreakBefore"`` \| ``"pageBreakInside"`` \| ``"paintOrder"`` \| ``"perspective"`` \| ``"perspectiveOrigin"`` \| ``"placeContent"`` \| ``"placeItems"`` \| ``"placeSelf"`` \| ``"pointerEvents"`` \| ``"position"`` \| ``"printColorAdjust"`` \| ``"quotes"`` \| ``"resize"`` \| ``"right"`` \| ``"rotate"`` \| ``"rowGap"`` \| ``"rubyPosition"`` \| ``"scale"`` \| ``"scrollBehavior"`` \| ``"scrollMargin"`` \| ``"scrollMarginBlock"`` \| ``"scrollMarginBlockEnd"`` \| ``"scrollMarginBlockStart"`` \| ``"scrollMarginBottom"`` \| ``"scrollMarginInline"`` \| ``"scrollMarginInlineEnd"`` \| ``"scrollMarginInlineStart"`` \| ``"scrollMarginLeft"`` \| ``"scrollMarginRight"`` \| ``"scrollMarginTop"`` \| ``"scrollPadding"`` \| ``"scrollPaddingBlock"`` \| ``"scrollPaddingBlockEnd"`` \| ``"scrollPaddingBlockStart"`` \| ``"scrollPaddingBottom"`` \| ``"scrollPaddingInline"`` \| ``"scrollPaddingInlineEnd"`` \| ``"scrollPaddingInlineStart"`` \| ``"scrollPaddingLeft"`` \| ``"scrollPaddingRight"`` \| ``"scrollPaddingTop"`` \| ``"scrollSnapAlign"`` \| ``"scrollSnapStop"`` \| ``"scrollSnapType"`` \| ``"scrollbarGutter"`` \| ``"shapeImageThreshold"`` \| ``"shapeMargin"`` \| ``"shapeOutside"`` \| ``"shapeRendering"`` \| ``"stopColor"`` \| ``"stopOpacity"`` \| ``"stroke"`` \| ``"strokeDasharray"`` \| ``"strokeDashoffset"`` \| ``"strokeLinecap"`` \| ``"strokeLinejoin"`` \| ``"strokeMiterlimit"`` \| ``"strokeOpacity"`` \| ``"strokeWidth"`` \| ``"tabSize"`` \| ``"tableLayout"`` \| ``"textAlign"`` \| ``"textAlignLast"`` \| ``"textAnchor"`` \| ``"textCombineUpright"`` \| ``"textDecoration"`` \| ``"textDecorationColor"`` \| ``"textDecorationLine"`` \| ``"textDecorationSkipInk"`` \| ``"textDecorationStyle"`` \| ``"textDecorationThickness"`` \| ``"textEmphasis"`` \| ``"textEmphasisColor"`` \| ``"textEmphasisPosition"`` \| ``"textEmphasisStyle"`` \| ``"textIndent"`` \| ``"textOrientation"`` \| ``"textOverflow"`` \| ``"textRendering"`` \| ``"textShadow"`` \| ``"textTransform"`` \| ``"textUnderlineOffset"`` \| ``"textUnderlinePosition"`` \| ``"touchAction"`` \| ``"transform"`` \| ``"transformBox"`` \| ``"transformOrigin"`` \| ``"transformStyle"`` \| ``"transition"`` \| ``"transitionDelay"`` \| ``"transitionDuration"`` \| ``"transitionProperty"`` \| ``"transitionTimingFunction"`` \| ``"translate"`` \| ``"unicodeBidi"`` \| ``"userSelect"`` \| ``"verticalAlign"`` \| ``"visibility"`` \| ``"webkitAlignContent"`` \| ``"webkitAlignItems"`` \| ``"webkitAlignSelf"`` \| ``"webkitAnimation"`` \| ``"webkitAnimationDelay"`` \| ``"webkitAnimationDirection"`` \| ``"webkitAnimationDuration"`` \| ``"webkitAnimationFillMode"`` \| ``"webkitAnimationIterationCount"`` \| ``"webkitAnimationName"`` \| ``"webkitAnimationPlayState"`` \| ``"webkitAnimationTimingFunction"`` \| ``"webkitAppearance"`` \| ``"webkitBackfaceVisibility"`` \| ``"webkitBackgroundClip"`` \| ``"webkitBackgroundOrigin"`` \| ``"webkitBackgroundSize"`` \| ``"webkitBorderBottomLeftRadius"`` \| ``"webkitBorderBottomRightRadius"`` \| ``"webkitBorderRadius"`` \| ``"webkitBorderTopLeftRadius"`` \| ``"webkitBorderTopRightRadius"`` \| ``"webkitBoxAlign"`` \| ``"webkitBoxFlex"`` \| ``"webkitBoxOrdinalGroup"`` \| ``"webkitBoxOrient"`` \| ``"webkitBoxPack"`` \| ``"webkitBoxShadow"`` \| ``"webkitBoxSizing"`` \| ``"webkitFilter"`` \| ``"webkitFlex"`` \| ``"webkitFlexBasis"`` \| ``"webkitFlexDirection"`` \| ``"webkitFlexFlow"`` \| ``"webkitFlexGrow"`` \| ``"webkitFlexShrink"`` \| ``"webkitFlexWrap"`` \| ``"webkitJustifyContent"`` \| ``"webkitLineClamp"`` \| ``"webkitMask"`` \| ``"webkitMaskBoxImage"`` \| ``"webkitMaskBoxImageOutset"`` \| ``"webkitMaskBoxImageRepeat"`` \| ``"webkitMaskBoxImageSlice"`` \| ``"webkitMaskBoxImageSource"`` \| ``"webkitMaskBoxImageWidth"`` \| ``"webkitMaskClip"`` \| ``"webkitMaskComposite"`` \| ``"webkitMaskImage"`` \| ``"webkitMaskOrigin"`` \| ``"webkitMaskPosition"`` \| ``"webkitMaskRepeat"`` \| ``"webkitMaskSize"`` \| ``"webkitOrder"`` \| ``"webkitPerspective"`` \| ``"webkitPerspectiveOrigin"`` \| ``"webkitTextFillColor"`` \| ``"webkitTextSizeAdjust"`` \| ``"webkitTextStroke"`` \| ``"webkitTextStrokeColor"`` \| ``"webkitTextStrokeWidth"`` \| ``"webkitTransform"`` \| ``"webkitTransformOrigin"`` \| ``"webkitTransformStyle"`` \| ``"webkitTransition"`` \| ``"webkitTransitionDelay"`` \| ``"webkitTransitionDuration"`` \| ``"webkitTransitionProperty"`` \| ``"webkitTransitionTimingFunction"`` \| ``"webkitUserSelect"`` \| ``"whiteSpace"`` \| ``"widows"`` \| ``"willChange"`` \| ``"wordBreak"`` \| ``"wordSpacing"`` \| ``"wordWrap"`` \| ``"writingMode"`` \| ``"zIndex"``, `string`\> |
| `deps?` | readonly `unknown`[] |

#### Returns

`Ref`<`TElement`\>

___

### useAnimateEvent

▸ **useAnimateEvent**<`TElement`, `T`, `TEventType`\>(`animation`, `selector`, `deps?`): `Ref`<`TElement`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement`<`TElement`\> |
| `T` | `number` |
| `TEventType` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animation` | [`Optional`](functions.md#optional)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<{ `type`: `TEventType` ; `value`: `T`  }\>\> |
| `selector` | (`ev`: { `type`: `TEventType` ; `value`: `T`  }) => [`ReadonlyObjectMapLike`](containers.md#readonlyobjectmaplike)<``"filter"`` \| ``"fill"`` \| ``"animationName"`` \| ``"all"`` \| ``"offset"`` \| ``"height"`` \| ``"width"`` \| ``"left"`` \| ``"top"`` \| ``"accentColor"`` \| ``"alignContent"`` \| ``"alignItems"`` \| ``"alignSelf"`` \| ``"alignmentBaseline"`` \| ``"animation"`` \| ``"animationDelay"`` \| ``"animationDirection"`` \| ``"animationDuration"`` \| ``"animationFillMode"`` \| ``"animationIterationCount"`` \| ``"animationPlayState"`` \| ``"animationTimingFunction"`` \| ``"appearance"`` \| ``"aspectRatio"`` \| ``"backdropFilter"`` \| ``"backfaceVisibility"`` \| ``"background"`` \| ``"backgroundAttachment"`` \| ``"backgroundBlendMode"`` \| ``"backgroundClip"`` \| ``"backgroundColor"`` \| ``"backgroundImage"`` \| ``"backgroundOrigin"`` \| ``"backgroundPosition"`` \| ``"backgroundPositionX"`` \| ``"backgroundPositionY"`` \| ``"backgroundRepeat"`` \| ``"backgroundSize"`` \| ``"baselineShift"`` \| ``"blockSize"`` \| ``"border"`` \| ``"borderBlock"`` \| ``"borderBlockColor"`` \| ``"borderBlockEnd"`` \| ``"borderBlockEndColor"`` \| ``"borderBlockEndStyle"`` \| ``"borderBlockEndWidth"`` \| ``"borderBlockStart"`` \| ``"borderBlockStartColor"`` \| ``"borderBlockStartStyle"`` \| ``"borderBlockStartWidth"`` \| ``"borderBlockStyle"`` \| ``"borderBlockWidth"`` \| ``"borderBottom"`` \| ``"borderBottomColor"`` \| ``"borderBottomLeftRadius"`` \| ``"borderBottomRightRadius"`` \| ``"borderBottomStyle"`` \| ``"borderBottomWidth"`` \| ``"borderCollapse"`` \| ``"borderColor"`` \| ``"borderEndEndRadius"`` \| ``"borderEndStartRadius"`` \| ``"borderImage"`` \| ``"borderImageOutset"`` \| ``"borderImageRepeat"`` \| ``"borderImageSlice"`` \| ``"borderImageSource"`` \| ``"borderImageWidth"`` \| ``"borderInline"`` \| ``"borderInlineColor"`` \| ``"borderInlineEnd"`` \| ``"borderInlineEndColor"`` \| ``"borderInlineEndStyle"`` \| ``"borderInlineEndWidth"`` \| ``"borderInlineStart"`` \| ``"borderInlineStartColor"`` \| ``"borderInlineStartStyle"`` \| ``"borderInlineStartWidth"`` \| ``"borderInlineStyle"`` \| ``"borderInlineWidth"`` \| ``"borderLeft"`` \| ``"borderLeftColor"`` \| ``"borderLeftStyle"`` \| ``"borderLeftWidth"`` \| ``"borderRadius"`` \| ``"borderRight"`` \| ``"borderRightColor"`` \| ``"borderRightStyle"`` \| ``"borderRightWidth"`` \| ``"borderSpacing"`` \| ``"borderStartEndRadius"`` \| ``"borderStartStartRadius"`` \| ``"borderStyle"`` \| ``"borderTop"`` \| ``"borderTopColor"`` \| ``"borderTopLeftRadius"`` \| ``"borderTopRightRadius"`` \| ``"borderTopStyle"`` \| ``"borderTopWidth"`` \| ``"borderWidth"`` \| ``"bottom"`` \| ``"boxShadow"`` \| ``"boxSizing"`` \| ``"breakAfter"`` \| ``"breakBefore"`` \| ``"breakInside"`` \| ``"captionSide"`` \| ``"caretColor"`` \| ``"clear"`` \| ``"clip"`` \| ``"clipPath"`` \| ``"clipRule"`` \| ``"color"`` \| ``"colorInterpolation"`` \| ``"colorInterpolationFilters"`` \| ``"colorScheme"`` \| ``"columnCount"`` \| ``"columnFill"`` \| ``"columnGap"`` \| ``"columnRule"`` \| ``"columnRuleColor"`` \| ``"columnRuleStyle"`` \| ``"columnRuleWidth"`` \| ``"columnSpan"`` \| ``"columnWidth"`` \| ``"columns"`` \| ``"contain"`` \| ``"container"`` \| ``"containerName"`` \| ``"containerType"`` \| ``"content"`` \| ``"counterIncrement"`` \| ``"counterReset"`` \| ``"counterSet"`` \| ``"cssFloat"`` \| ``"cssText"`` \| ``"cursor"`` \| ``"direction"`` \| ``"display"`` \| ``"dominantBaseline"`` \| ``"emptyCells"`` \| ``"fillOpacity"`` \| ``"fillRule"`` \| ``"flex"`` \| ``"flexBasis"`` \| ``"flexDirection"`` \| ``"flexFlow"`` \| ``"flexGrow"`` \| ``"flexShrink"`` \| ``"flexWrap"`` \| ``"float"`` \| ``"floodColor"`` \| ``"floodOpacity"`` \| ``"font"`` \| ``"fontFamily"`` \| ``"fontFeatureSettings"`` \| ``"fontKerning"`` \| ``"fontOpticalSizing"`` \| ``"fontPalette"`` \| ``"fontSize"`` \| ``"fontSizeAdjust"`` \| ``"fontStretch"`` \| ``"fontStyle"`` \| ``"fontSynthesis"`` \| ``"fontVariant"`` \| ``"fontVariantAlternates"`` \| ``"fontVariantCaps"`` \| ``"fontVariantEastAsian"`` \| ``"fontVariantLigatures"`` \| ``"fontVariantNumeric"`` \| ``"fontVariantPosition"`` \| ``"fontVariationSettings"`` \| ``"fontWeight"`` \| ``"gap"`` \| ``"grid"`` \| ``"gridArea"`` \| ``"gridAutoColumns"`` \| ``"gridAutoFlow"`` \| ``"gridAutoRows"`` \| ``"gridColumn"`` \| ``"gridColumnEnd"`` \| ``"gridColumnGap"`` \| ``"gridColumnStart"`` \| ``"gridGap"`` \| ``"gridRow"`` \| ``"gridRowEnd"`` \| ``"gridRowGap"`` \| ``"gridRowStart"`` \| ``"gridTemplate"`` \| ``"gridTemplateAreas"`` \| ``"gridTemplateColumns"`` \| ``"gridTemplateRows"`` \| ``"hyphenateCharacter"`` \| ``"hyphens"`` \| ``"imageOrientation"`` \| ``"imageRendering"`` \| ``"inlineSize"`` \| ``"inset"`` \| ``"insetBlock"`` \| ``"insetBlockEnd"`` \| ``"insetBlockStart"`` \| ``"insetInline"`` \| ``"insetInlineEnd"`` \| ``"insetInlineStart"`` \| ``"isolation"`` \| ``"justifyContent"`` \| ``"justifyItems"`` \| ``"justifySelf"`` \| ``"letterSpacing"`` \| ``"lightingColor"`` \| ``"lineBreak"`` \| ``"lineHeight"`` \| ``"listStyle"`` \| ``"listStyleImage"`` \| ``"listStylePosition"`` \| ``"listStyleType"`` \| ``"margin"`` \| ``"marginBlock"`` \| ``"marginBlockEnd"`` \| ``"marginBlockStart"`` \| ``"marginBottom"`` \| ``"marginInline"`` \| ``"marginInlineEnd"`` \| ``"marginInlineStart"`` \| ``"marginLeft"`` \| ``"marginRight"`` \| ``"marginTop"`` \| ``"marker"`` \| ``"markerEnd"`` \| ``"markerMid"`` \| ``"markerStart"`` \| ``"mask"`` \| ``"maskClip"`` \| ``"maskComposite"`` \| ``"maskImage"`` \| ``"maskMode"`` \| ``"maskOrigin"`` \| ``"maskPosition"`` \| ``"maskRepeat"`` \| ``"maskSize"`` \| ``"maskType"`` \| ``"maxBlockSize"`` \| ``"maxHeight"`` \| ``"maxInlineSize"`` \| ``"maxWidth"`` \| ``"minBlockSize"`` \| ``"minHeight"`` \| ``"minInlineSize"`` \| ``"minWidth"`` \| ``"mixBlendMode"`` \| ``"objectFit"`` \| ``"objectPosition"`` \| ``"offsetDistance"`` \| ``"offsetPath"`` \| ``"offsetRotate"`` \| ``"opacity"`` \| ``"order"`` \| ``"orphans"`` \| ``"outline"`` \| ``"outlineColor"`` \| ``"outlineOffset"`` \| ``"outlineStyle"`` \| ``"outlineWidth"`` \| ``"overflow"`` \| ``"overflowAnchor"`` \| ``"overflowClipMargin"`` \| ``"overflowWrap"`` \| ``"overflowX"`` \| ``"overflowY"`` \| ``"overscrollBehavior"`` \| ``"overscrollBehaviorBlock"`` \| ``"overscrollBehaviorInline"`` \| ``"overscrollBehaviorX"`` \| ``"overscrollBehaviorY"`` \| ``"padding"`` \| ``"paddingBlock"`` \| ``"paddingBlockEnd"`` \| ``"paddingBlockStart"`` \| ``"paddingBottom"`` \| ``"paddingInline"`` \| ``"paddingInlineEnd"`` \| ``"paddingInlineStart"`` \| ``"paddingLeft"`` \| ``"paddingRight"`` \| ``"paddingTop"`` \| ``"pageBreakAfter"`` \| ``"pageBreakBefore"`` \| ``"pageBreakInside"`` \| ``"paintOrder"`` \| ``"perspective"`` \| ``"perspectiveOrigin"`` \| ``"placeContent"`` \| ``"placeItems"`` \| ``"placeSelf"`` \| ``"pointerEvents"`` \| ``"position"`` \| ``"printColorAdjust"`` \| ``"quotes"`` \| ``"resize"`` \| ``"right"`` \| ``"rotate"`` \| ``"rowGap"`` \| ``"rubyPosition"`` \| ``"scale"`` \| ``"scrollBehavior"`` \| ``"scrollMargin"`` \| ``"scrollMarginBlock"`` \| ``"scrollMarginBlockEnd"`` \| ``"scrollMarginBlockStart"`` \| ``"scrollMarginBottom"`` \| ``"scrollMarginInline"`` \| ``"scrollMarginInlineEnd"`` \| ``"scrollMarginInlineStart"`` \| ``"scrollMarginLeft"`` \| ``"scrollMarginRight"`` \| ``"scrollMarginTop"`` \| ``"scrollPadding"`` \| ``"scrollPaddingBlock"`` \| ``"scrollPaddingBlockEnd"`` \| ``"scrollPaddingBlockStart"`` \| ``"scrollPaddingBottom"`` \| ``"scrollPaddingInline"`` \| ``"scrollPaddingInlineEnd"`` \| ``"scrollPaddingInlineStart"`` \| ``"scrollPaddingLeft"`` \| ``"scrollPaddingRight"`` \| ``"scrollPaddingTop"`` \| ``"scrollSnapAlign"`` \| ``"scrollSnapStop"`` \| ``"scrollSnapType"`` \| ``"scrollbarGutter"`` \| ``"shapeImageThreshold"`` \| ``"shapeMargin"`` \| ``"shapeOutside"`` \| ``"shapeRendering"`` \| ``"stopColor"`` \| ``"stopOpacity"`` \| ``"stroke"`` \| ``"strokeDasharray"`` \| ``"strokeDashoffset"`` \| ``"strokeLinecap"`` \| ``"strokeLinejoin"`` \| ``"strokeMiterlimit"`` \| ``"strokeOpacity"`` \| ``"strokeWidth"`` \| ``"tabSize"`` \| ``"tableLayout"`` \| ``"textAlign"`` \| ``"textAlignLast"`` \| ``"textAnchor"`` \| ``"textCombineUpright"`` \| ``"textDecoration"`` \| ``"textDecorationColor"`` \| ``"textDecorationLine"`` \| ``"textDecorationSkipInk"`` \| ``"textDecorationStyle"`` \| ``"textDecorationThickness"`` \| ``"textEmphasis"`` \| ``"textEmphasisColor"`` \| ``"textEmphasisPosition"`` \| ``"textEmphasisStyle"`` \| ``"textIndent"`` \| ``"textOrientation"`` \| ``"textOverflow"`` \| ``"textRendering"`` \| ``"textShadow"`` \| ``"textTransform"`` \| ``"textUnderlineOffset"`` \| ``"textUnderlinePosition"`` \| ``"touchAction"`` \| ``"transform"`` \| ``"transformBox"`` \| ``"transformOrigin"`` \| ``"transformStyle"`` \| ``"transition"`` \| ``"transitionDelay"`` \| ``"transitionDuration"`` \| ``"transitionProperty"`` \| ``"transitionTimingFunction"`` \| ``"translate"`` \| ``"unicodeBidi"`` \| ``"userSelect"`` \| ``"verticalAlign"`` \| ``"visibility"`` \| ``"webkitAlignContent"`` \| ``"webkitAlignItems"`` \| ``"webkitAlignSelf"`` \| ``"webkitAnimation"`` \| ``"webkitAnimationDelay"`` \| ``"webkitAnimationDirection"`` \| ``"webkitAnimationDuration"`` \| ``"webkitAnimationFillMode"`` \| ``"webkitAnimationIterationCount"`` \| ``"webkitAnimationName"`` \| ``"webkitAnimationPlayState"`` \| ``"webkitAnimationTimingFunction"`` \| ``"webkitAppearance"`` \| ``"webkitBackfaceVisibility"`` \| ``"webkitBackgroundClip"`` \| ``"webkitBackgroundOrigin"`` \| ``"webkitBackgroundSize"`` \| ``"webkitBorderBottomLeftRadius"`` \| ``"webkitBorderBottomRightRadius"`` \| ``"webkitBorderRadius"`` \| ``"webkitBorderTopLeftRadius"`` \| ``"webkitBorderTopRightRadius"`` \| ``"webkitBoxAlign"`` \| ``"webkitBoxFlex"`` \| ``"webkitBoxOrdinalGroup"`` \| ``"webkitBoxOrient"`` \| ``"webkitBoxPack"`` \| ``"webkitBoxShadow"`` \| ``"webkitBoxSizing"`` \| ``"webkitFilter"`` \| ``"webkitFlex"`` \| ``"webkitFlexBasis"`` \| ``"webkitFlexDirection"`` \| ``"webkitFlexFlow"`` \| ``"webkitFlexGrow"`` \| ``"webkitFlexShrink"`` \| ``"webkitFlexWrap"`` \| ``"webkitJustifyContent"`` \| ``"webkitLineClamp"`` \| ``"webkitMask"`` \| ``"webkitMaskBoxImage"`` \| ``"webkitMaskBoxImageOutset"`` \| ``"webkitMaskBoxImageRepeat"`` \| ``"webkitMaskBoxImageSlice"`` \| ``"webkitMaskBoxImageSource"`` \| ``"webkitMaskBoxImageWidth"`` \| ``"webkitMaskClip"`` \| ``"webkitMaskComposite"`` \| ``"webkitMaskImage"`` \| ``"webkitMaskOrigin"`` \| ``"webkitMaskPosition"`` \| ``"webkitMaskRepeat"`` \| ``"webkitMaskSize"`` \| ``"webkitOrder"`` \| ``"webkitPerspective"`` \| ``"webkitPerspectiveOrigin"`` \| ``"webkitTextFillColor"`` \| ``"webkitTextSizeAdjust"`` \| ``"webkitTextStroke"`` \| ``"webkitTextStrokeColor"`` \| ``"webkitTextStrokeWidth"`` \| ``"webkitTransform"`` \| ``"webkitTransformOrigin"`` \| ``"webkitTransformStyle"`` \| ``"webkitTransition"`` \| ``"webkitTransitionDelay"`` \| ``"webkitTransitionDuration"`` \| ``"webkitTransitionProperty"`` \| ``"webkitTransitionTimingFunction"`` \| ``"webkitUserSelect"`` \| ``"whiteSpace"`` \| ``"widows"`` \| ``"willChange"`` \| ``"wordBreak"`` \| ``"wordSpacing"`` \| ``"wordWrap"`` \| ``"writingMode"`` \| ``"zIndex"``, `string`\> |
| `deps?` | readonly `unknown`[] |

#### Returns

`Ref`<`TElement`\>

___

### useScroll

▸ **useScroll**<`TElement`\>(`callback`, `deps`): `Ref`<`TElement`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement`<`TElement`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SideEffect1`](functions.md#sideeffect1)<{ `type`: ``"scroll"`` ; `value`: [`ScrollValue`](../interfaces/integrations_web.ScrollValue.md)  }\> |
| `deps` | readonly `unknown`[] |

#### Returns

`Ref`<`TElement`\>

___

### useWindowLocation

▸ **useWindowLocation**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `canGoBack` | `boolean` |
| `goBack` | () => `void` |
| `push` | [`SideEffect1`](functions.md#sideeffect1)<[`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md) \| [`Updater`](functions.md#updater)<[`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md)\>\> |
| `replace` | [`SideEffect1`](functions.md#sideeffect1)<[`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md) \| [`Updater`](functions.md#updater)<[`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md)\>\> |
| `uri` | [`Optional`](functions.md#optional)<[`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md)\> |

___

## Other Functions

### WindowLocationProvider

▸ **WindowLocationProvider**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.children` | `ReactNode` |
| `props.windowLocation` | [`WindowLocationLike`](../interfaces/integrations_web.WindowLocationLike.md) |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>
