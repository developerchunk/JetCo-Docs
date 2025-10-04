# **StepperConfig**

The **StepperConfig** class provides comprehensive configuration options for all stepper components in JetCo. It allows you to customize every aspect of the stepper's appearance and behavior through organized sub-configurations.

## 📐 **Structure Overview**

```kotlin
data class StepperConfig(
    val node: NodeStyle = NodeStyle(),
    val connector: ConnectorStyle = ConnectorStyle(),
    val textConfig: TextStyleConfig = TextStyleConfig(),
    val animation: AnimationConfig = AnimationConfig(),
    val imageConfig: ImageConfig = ImageConfig()
)
```

---

## 🎨 **NodeStyle Configuration**

Controls the appearance of individual step nodes (circles/shapes).

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `activeColor` | `Color` | `Color(0xFF1976D2)` | Color for the active step node |
| `completedColor` | `Color` | `Color(0xFF4CAF50)` | Color for completed step nodes |
| `errorColor` | `Color` | `Color(0xFFF44336)` | Color for error state nodes |
| `inactiveColor` | `Color` | `Color(0xFFE0E0E0)` | Color for idle/pending nodes |
| `size` | `Dp` | `32.dp` | Size of the step node (width & height) |
| `shape` | `Shape` | `CircleShape` | Shape of the node |
| `internalSpacing` | `Dp` | `16.dp` | Spacing between node and content |
| `spaceBetweenText` | `Dp` | `6.dp` | Spacing between title and description |
| `horizontalStepperWidth` | `Dp` | `120.dp` | Minimum width for HorizontalStepper items |
| `actionIconColor` | `Color` | `Color.White` | Color for action icons (check, error) |
| `idleIconColor` | `Color` | `Color.Gray` | Color for idle state icons |

### Example Usage

```kotlin
val nodeStyle = StepperConfig.NodeStyle(
    activeColor = Color(0xFF6200EA),
    completedColor = Color(0xFF00C853),
    errorColor = Color(0xFFD50000),
    inactiveColor = Color(0xFFBDBDBD),
    size = 40.dp,
    shape = RoundedCornerShape(8.dp),
    internalSpacing = 20.dp
)

val config = StepperConfig(node = nodeStyle)
```

---

## 🔗 **ConnectorStyle Configuration**

Defines the appearance of lines connecting step nodes.

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `width` | `Dp` | `2.dp` | Thickness of connector lines |
| `spacing` | `Dp` | `8.dp` | Spacing between nodes |
| `lineLengthMin` | `Dp` | `16.dp` | Minimum line length |
| `pathEffect` | `PathEffect` | `dashPathEffect(floatArrayOf(10f, 10f))` | Dash effect for incomplete connectors |

### Example Usage

```kotlin
val connectorStyle = StepperConfig.ConnectorStyle(
    width = 3.dp,
    spacing = 12.dp,
    lineLengthMin = 20.dp,
    pathEffect = PathEffect.dashPathEffect(floatArrayOf(15f, 15f))
)

val config = StepperConfig(connector = connectorStyle)
```

---

## 📝 **TextStyleConfig Configuration**

Controls typography and text behavior for step titles and descriptions.

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `maxTitleLines` | `Int` | `2` | Maximum lines for title text |
| `maxDescriptionLines` | `Int` | `3` | Maximum lines for description text |
| `overflow` | `TextOverflow` | `TextOverflow.Ellipsis` | Text overflow handling |
| `titleTextStyle` | `TextStyle` | `TextStyle(fontSize = 16.sp)` | Style for step titles |
| `descriptionTextStyle` | `TextStyle` | `TextStyle(fontSize = 14.sp)` | Style for step descriptions |

### Example Usage

```kotlin
val textConfig = StepperConfig.TextStyleConfig(
    maxTitleLines = 1,
    maxDescriptionLines = 2,
    overflow = TextOverflow.Ellipsis,
    titleTextStyle = TextStyle(
        fontSize = 18.sp,
        fontWeight = FontWeight.Bold,
        color = Color.Black
    ),
    descriptionTextStyle = TextStyle(
        fontSize = 14.sp,
        color = Color.Gray
    )
)

val config = StepperConfig(textConfig = textConfig)
```

---

## ⚡ **AnimationConfig Configuration**

Controls animation behavior for state transitions and progress updates.

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `enabled` | `Boolean` | `true` | Whether animations are enabled |
| `durationMillis` | `Int` | `1200` | Animation duration in milliseconds |
| `animationSpec` | `AnimationSpec<Float>` | `tween(durationMillis)` | Animation specification |

### Example Usage

```kotlin
val animationConfig = StepperConfig.AnimationConfig(
    enabled = true,
    durationMillis = 800,
    animationSpec = spring(
        dampingRatio = Spring.DampingRatioMediumBouncy,
        stiffness = Spring.StiffnessMedium
    )
)

val config = StepperConfig(animation = animationConfig)
```

---

## 🖼️ **ImageConfig Configuration**

Configures image display settings (VerticalStepper only).

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `maxWidth` | `Dp?` | `null` | Maximum image width |
| `maxHeight` | `Dp?` | `null` | Maximum image height |
| `contentScale` | `ContentScale` | `ContentScale.Fit` | Image scaling behavior |
| `imageShape` | `Shape` | `RectangleShape` | Shape for image clipping |
| `paddingValues` | `PaddingValues` | `PaddingValues(4.dp)` | Padding around images |

### Example Usage

```kotlin
val imageConfig = StepperConfig.ImageConfig(
    maxWidth = 200.dp,
    maxHeight = 150.dp,
    contentScale = ContentScale.Crop,
    imageShape = RoundedCornerShape(12.dp),
    paddingValues = PaddingValues(8.dp)
)

val config = StepperConfig(imageConfig = imageConfig)
```

---

## 🎨 **Complete Configuration Examples**

### Material Design Style

```kotlin
val materialConfig = StepperConfig(
    node = StepperConfig.NodeStyle(
        activeColor = MaterialTheme.colorScheme.primary,
        completedColor = MaterialTheme.colorScheme.primary,
        errorColor = MaterialTheme.colorScheme.error,
        inactiveColor = MaterialTheme.colorScheme.outline,
        size = 32.dp,
        shape = CircleShape
    ),
    connector = StepperConfig.ConnectorStyle(
        width = 2.dp,
        spacing = 8.dp
    ),
    textConfig = StepperConfig.TextStyleConfig(
        titleTextStyle = MaterialTheme.typography.titleMedium,
        descriptionTextStyle = MaterialTheme.typography.bodyMedium
    ),
    animation = StepperConfig.AnimationConfig(
        durationMillis = 300,
        animationSpec = tween(300, easing = FastOutSlowInEasing)
    )
)
```

### Minimal Design

```kotlin
val minimalConfig = StepperConfig(
    node = StepperConfig.NodeStyle(
        size = 24.dp,
        activeColor = Color.Black,
        completedColor = Color.Black,
        inactiveColor = Color.Gray.copy(alpha = 0.4f),
        internalSpacing = 12.dp
    ),
    connector = StepperConfig.ConnectorStyle(
        width = 1.dp,
        spacing = 6.dp
    ),
    textConfig = StepperConfig.TextStyleConfig(
        titleTextStyle = TextStyle(
            fontSize = 14.sp,
            fontWeight = FontWeight.Normal
        ),
        descriptionTextStyle = TextStyle(
            fontSize = 12.sp,
            color = Color.Gray
        )
    ),
    animation = StepperConfig.AnimationConfig(enabled = false)
)
```

### Bold & Colorful

```kotlin
val colorfulConfig = StepperConfig(
    node = StepperConfig.NodeStyle(
        size = 48.dp,
        activeColor = Color(0xFFE91E63),
        completedColor = Color(0xFF00BCD4),
        errorColor = Color(0xFFFF5722),
        inactiveColor = Color(0xFFA8E6CF),
        shape = RoundedCornerShape(12.dp),
        internalSpacing = 24.dp
    ),
    connector = StepperConfig.ConnectorStyle(
        width = 4.dp,
        spacing = 16.dp
    ),
    textConfig = StepperConfig.TextStyleConfig(
        titleTextStyle = TextStyle(
            fontSize = 20.sp,
            fontWeight = FontWeight.Bold
        ),
        descriptionTextStyle = TextStyle(
            fontSize = 16.sp,
            fontWeight = FontWeight.Medium
        )
    ),
    animation = StepperConfig.AnimationConfig(
        durationMillis = 1000,
        animationSpec = spring(
            dampingRatio = Spring.DampingRatioLowBouncy,
            stiffness = Spring.StiffnessLow
        )
    )
)
```

### Compact Mobile

```kotlin
val compactConfig = StepperConfig(
    node = StepperConfig.NodeStyle(
        size = 28.dp,
        horizontalStepperWidth = 80.dp,
        internalSpacing = 8.dp,
        spaceBetweenText = 4.dp
    ),
    connector = StepperConfig.ConnectorStyle(
        width = 2.dp,
        spacing = 6.dp
    ),
    textConfig = StepperConfig.TextStyleConfig(
        maxTitleLines = 1,
        maxDescriptionLines = 2,
        titleTextStyle = TextStyle(fontSize = 12.sp),
        descriptionTextStyle = TextStyle(fontSize = 10.sp)
    )
)
```

---

## 🎯 **Configuration Tips**

### 1. **Color Consistency**
- Use consistent color schemes that align with your app's branding
- Ensure sufficient contrast for accessibility
- Consider dark mode variants

### 2. **Size Relationships**
- Scale all size-related properties proportionally
- Maintain adequate touch targets (minimum 44dp) for interactive elements
- Consider different screen densities

### 3. **Animation Tuning**
- Use shorter durations (200-500ms) for micro-interactions
- Longer durations (800-1200ms) work well for progress animations
- Disable animations on low-end devices if needed

### 4. **Typography Hierarchy**
- Keep title text larger and bolder than descriptions
- Ensure text remains readable at different sizes
- Limit line counts to prevent layout issues

---

## 🔗 **Component Compatibility**

| Component | NodeStyle | ConnectorStyle | TextStyleConfig | AnimationConfig | ImageConfig |
|-----------|-----------|----------------|-----------------|-----------------|-------------|
| **VerticalStepper** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **HorizontalStepper** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **CompactHorizontalStepper** | ✅ | ✅ | ❌ | ✅ | ❌ |

---

## 📋 **See Also**

- **[StepperModels](StepperModels.md)** - Data models and enums
- **[VerticalStepper](../VerticalStepper.md)** - Vertical stepper component
- **[HorizontalStepper](../HorizontalStepper.md)** - Horizontal stepper component
- **[CompactHorizontalStepper](../CompactHorizontalStepper.md)** - Compact horizontal stepper