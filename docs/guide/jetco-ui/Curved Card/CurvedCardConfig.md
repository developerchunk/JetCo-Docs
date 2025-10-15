# CurvedCardConfig

The **CurvedCardConfig** data class provides comprehensive configuration options for customizing the appearance and behavior of CurvedCard components.

## Configuration Properties

### Wave Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `waveHeight` | `Dp` | `10.dp` | Height of the wave curves in density-independent pixels |
| `waveSegments` | `Int?` | `null` | Number of wave segments. If null, calculated automatically based on width |
| `samplesPerWave` | `Int` | `20` | Number of sample points per wave segment for smoothness |

### Shape and Appearance

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `shape` | `Shape` | `RoundedCornerShape(20.dp)` | Shape of the card container |
| `gradient` | `Brush` | Linear gradient (blue to orange) | Brush gradient for background when no image is provided |

### Wave Control

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `topCurveEnable` | `Boolean` | `true` | Whether to enable the top curved wave |
| `bottomCurveEnable` | `Boolean` | `false` | Whether to enable the bottom curved wave |

### Image Background

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `image` | `ImageBitmap?` | `null` | Optional background image |
| `imageAlpha` | `Float` | `1.0f` | Alpha transparency for background image (0.0f to 1.0f) |

### Content Layout

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `contentPadding` | `PaddingValues` | `PaddingValues(horizontal = 16.dp, vertical = 8.dp)` | Padding applied to content inside the card |

## Data Class Definition

```kotlin
@Stable
data class CurvedCardConfig(
    val waveHeight: Dp = 10.dp,
    val waveSegments: Int? = null,
    val shape: Shape = RoundedCornerShape(20.dp),
    val gradient: Brush = Brush.linearGradient(
        colors = listOf(Color(0xFF8EC8FF), Color(0xFFFFC77A))
    ),
    val samplesPerWave: Int = 20,
    val topCurveEnable: Boolean = true,
    val bottomCurveEnable: Boolean = false,
    val image: ImageBitmap? = null,
    val imageAlpha: Float = 1.0f,
    val contentPadding: PaddingValues = PaddingValues(
        horizontal = 16.dp,
        vertical = 8.dp
    )
)
```

## Usage Examples

### Basic Gradient Configuration

```kotlin
val basicConfig = CurvedCardConfig(
    waveHeight = 15.dp,
    gradient = Brush.horizontalGradient(
        colors = listOf(
            Color(0xFF667eea),
            Color(0xFF764ba2)
        )
    )
)
```

### Image Background Configuration

```kotlin
val imageConfig = CurvedCardConfig(
    image = ImageBitmap.imageResource(R.drawable.background),
    imageAlpha = 0.8f,
    topCurveEnable = false,
    bottomCurveEnable = true,
    waveHeight = 12.dp
)
```

### Custom Wave Configuration

```kotlin
val waveConfig = CurvedCardConfig(
    waveHeight = 20.dp,
    waveSegments = 6,
    samplesPerWave = 30,
    topCurveEnable = true,
    bottomCurveEnable = true,
    shape = RoundedCornerShape(
        topStart = 20.dp,
        topEnd = 20.dp,
        bottomStart = 0.dp,
        bottomEnd = 0.dp
    )
)
```

### Vertical Gradient Configuration

```kotlin
val verticalConfig = CurvedCardConfig(
    gradient = Brush.verticalGradient(
        colors = listOf(
            Color(0xFFff9a9e),
            Color(0xFFfecfef),
            Color(0xFFfecfef)
        )
    ),
    contentPadding = PaddingValues(24.dp)
)
```

### Radial Gradient Configuration

```kotlin
val radialConfig = CurvedCardConfig(
    gradient = Brush.radialGradient(
        colors = listOf(
            Color(0xFFa8edea),
            Color(0xFFfed6e3)
        ),
        radius = 300f
    ),
    shape = RoundedCornerShape(16.dp)
)
```

## Advanced Configurations

### Multi-Color Gradient

```kotlin
val multiColorConfig = CurvedCardConfig(
    gradient = Brush.linearGradient(
        colors = listOf(
            Color(0xFFd299c2),
            Color(0xFFfef9d7),
            Color(0xFFdee7e7),
            Color(0xFFa8d8ea)
        ),
        start = Offset(0f, 0f),
        end = Offset(1000f, 1000f)
    )
)
```

### High-Detail Wave Configuration

```kotlin
val detailedWaveConfig = CurvedCardConfig(
    waveHeight = 25.dp,
    waveSegments = 8,
    samplesPerWave = 40,
    topCurveEnable = true,
    bottomCurveEnable = true
)
```

### Asymmetric Shape Configuration

```kotlin
val asymmetricConfig = CurvedCardConfig(
    shape = RoundedCornerShape(
        topStart = 24.dp,
        topEnd = 8.dp,
        bottomStart = 8.dp,
        bottomEnd = 24.dp
    ),
    topCurveEnable = true,
    bottomCurveEnable = false
)
```

## Best Practices

### Wave Properties
- **Wave Height**: Use 8-20dp for subtle effects, 20-30dp for dramatic effects
- **Wave Segments**: Leave as `null` for automatic calculation, or use 3-8 for manual control
- **Samples Per Wave**: Use 15-25 for good balance between performance and smoothness

### Performance Considerations
- Higher `samplesPerWave` values create smoother curves but may impact performance
- Use fewer `waveSegments` for better performance in scrollable lists
- Consider disabling animations in performance-critical scenarios

### Visual Design
- Choose gradients that complement your app's color scheme
- Use `imageAlpha` between 0.6-0.9 to ensure text readability over images
- Match the `shape` with your overall design language

### Accessibility
- Ensure sufficient contrast ratio between text and background
- Consider users with motion sensitivity when using animations
- Provide alternative presentations for critical information