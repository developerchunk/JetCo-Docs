# CurvedCardAnimConfig

The **CurvedCardAnimConfig** data class controls the animation behavior of wave effects in CurvedCard components. This configuration allows you to create smooth, engaging animations for both top and bottom waves.

## Configuration Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `animateTopWave` | `Boolean` | `false` | Whether to animate the top wave |
| `animateBottomWave` | `Boolean` | `false` | Whether to animate the bottom wave |
| `animationDurationMs` | `Int` | `2500` | Duration of one complete animation cycle in milliseconds |
| `reverseAnimationTop` | `Boolean` | `false` | Whether to reverse the top wave animation direction |
| `reverseAnimationBottom` | `Boolean` | `false` | Whether to reverse the bottom wave animation direction |

## Data Class Definition

```kotlin
@Stable
data class CurvedCardAnimConfig(
    val animateTopWave: Boolean = false,
    val animateBottomWave: Boolean = false,
    val animationDurationMs: Int = 2500,
    val reverseAnimationTop: Boolean = false,
    val reverseAnimationBottom: Boolean = false
)
```

## Usage Examples

### Basic Animation Configuration

```kotlin
// Simple bottom wave animation
val basicAnim = CurvedCardAnimConfig(
    animateBottomWave = true,
    animationDurationMs = 3000
)
```

### Dual Wave Animation

```kotlin
// Both top and bottom waves animated
val dualWaveAnim = CurvedCardAnimConfig(
    animateTopWave = true,
    animateBottomWave = true,
    animationDurationMs = 2000,
    reverseAnimationTop = true,
    reverseAnimationBottom = false
)
```

### Fast Animation

```kotlin
// Quick, energetic animation
val fastAnim = CurvedCardAnimConfig(
    animateBottomWave = true,
    animationDurationMs = 1000,
    reverseAnimationBottom = true
)
```

### Slow, Gentle Animation

```kotlin
// Calm, slow-moving waves
val gentleAnim = CurvedCardAnimConfig(
    animateTopWave = true,
    animateBottomWave = true,
    animationDurationMs = 4000,
    reverseAnimationTop = false,
    reverseAnimationBottom = true
)
```

### Synchronized Waves

```kotlin
// Both waves moving in the same direction
val syncedAnim = CurvedCardAnimConfig(
    animateTopWave = true,
    animateBottomWave = true,
    animationDurationMs = 2500,
    reverseAnimationTop = false,
    reverseAnimationBottom = false
)
```

### Opposite Direction Waves

```kotlin
// Waves moving in opposite directions for dynamic effect
val oppositeAnim = CurvedCardAnimConfig(
    animateTopWave = true,
    animateBottomWave = true,
    animationDurationMs = 3000,
    reverseAnimationTop = true,
    reverseAnimationBottom = false
)
```

## Animation Patterns

### Ocean Wave Effect

```kotlin
val oceanWaves = CurvedCardAnimConfig(
    animateTopWave = false,
    animateBottomWave = true,
    animationDurationMs = 3500,
    reverseAnimationBottom = false
)

// Use with:
CurvedCardConfig(
    waveHeight = 15.dp,
    waveSegments = 4,
    bottomCurveEnable = true,
    topCurveEnable = false
)
```

### Breathing Effect

```kotlin
val breathingEffect = CurvedCardAnimConfig(
    animateTopWave = true,
    animateBottomWave = true,
    animationDurationMs = 4000,
    reverseAnimationTop = true,
    reverseAnimationBottom = true
)
```

### Pulse Effect

```kotlin
val pulseEffect = CurvedCardAnimConfig(
    animateTopWave = true,
    animateBottomWave = true,
    animationDurationMs = 1500,
    reverseAnimationTop = false,
    reverseAnimationBottom = false
)
```

### Liquid Motion

```kotlin
val liquidMotion = CurvedCardAnimConfig(
    animateTopWave = true,
    animateBottomWave = true,
    animationDurationMs = 2800,
    reverseAnimationTop = false,
    reverseAnimationBottom = true
)
```

## Complete Usage Examples

### Hero Banner with Animation

```kotlin
CurvedCard(
    modifier = Modifier
        .fillMaxWidth()
        .height(200.dp),
    config = CurvedCardConfig(
        gradient = Brush.linearGradient(
            colors = listOf(
                Color(0xFF667eea),
                Color(0xFF764ba2)
            )
        ),
        topCurveEnable = true,
        bottomCurveEnable = true,
        waveHeight = 20.dp
    ),
    animConfig = CurvedCardAnimConfig(
        animateTopWave = true,
        animateBottomWave = true,
        animationDurationMs = 3000,
        reverseAnimationTop = true,
        reverseAnimationBottom = false
    )
) {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = "Welcome to Our App",
            fontSize = 24.sp,
            fontWeight = FontWeight.Bold,
            color = Color.White
        )
    }
}
```

### Notification Card with Gentle Animation

```kotlin
CurvedCard(
    modifier = Modifier
        .fillMaxWidth()
        .height(100.dp),
    config = CurvedCardConfig(
        gradient = Brush.horizontalGradient(
            colors = listOf(
                Color(0xFF11998e),
                Color(0xFF38ef7d)
            )
        ),
        bottomCurveEnable = true,
        topCurveEnable = false,
        waveHeight = 10.dp
    ),
    animConfig = CurvedCardAnimConfig(
        animateBottomWave = true,
        animationDurationMs = 4000,
        reverseAnimationBottom = false
    )
) {
    Row(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Icon(
            imageVector = Icons.Default.CheckCircle,
            contentDescription = "Success",
            tint = Color.White,
            modifier = Modifier.size(24.dp)
        )
        Spacer(modifier = Modifier.width(12.dp))
        Text(
            text = "Operation completed successfully!",
            fontSize = 16.sp,
            color = Color.White
        )
    }
}
```

## Animation Guidelines

### Duration Recommendations

| Use Case | Duration Range | Best Practice |
|----------|----------------|---------------|
| **Subtle Effects** | 3000-5000ms | Use for background elements |
| **Attention Grabbing** | 1500-2500ms | Use for hero sections |
| **Notification Cards** | 2000-4000ms | Use for status updates |
| **Loading States** | 1000-2000ms | Use for progress indicators |

### Performance Considerations

- **Multiple Cards**: Use longer durations (3000ms+) to reduce CPU usage
- **Scrollable Lists**: Consider disabling animations or using longer durations
- **Background Animations**: Prefer subtle, slow animations (4000ms+)
- **Interactive Elements**: Use faster animations (1500-2500ms) for responsiveness

### Best Practices

1. **Consistency**: Use similar animation durations across your app
2. **Purpose**: Match animation speed to the content's purpose
3. **Accessibility**: Respect user preferences for reduced motion
4. **Performance**: Monitor performance impact, especially with multiple animated cards
5. **Direction**: Use `reverseAnimation` to create variety and visual interest

### Common Patterns

| Pattern | Top Wave | Bottom Wave | Reverse Top | Reverse Bottom | Duration |
|---------|----------|-------------|-------------|----------------|----------|
| **Ocean Waves** | ❌ | ✅ | ❌ | ❌ | 3500ms |
| **Breathing** | ✅ | ✅ | ✅ | ✅ | 4000ms |
| **Liquid Flow** | ✅ | ✅ | ❌ | ✅ | 2800ms |
| **Gentle Pulse** | ✅ | ❌ | ❌ | ❌ | 3000ms |
| **Dynamic Energy** | ✅ | ✅ | ✅ | ❌ | 2000ms |

## Accessibility Considerations

```kotlin
// Respect user's motion preferences
val animConfig = if (isReducedMotionEnabled) {
    CurvedCardAnimConfig() // No animations
} else {
    CurvedCardAnimConfig(
        animateBottomWave = true,
        animationDurationMs = 3000
    )
}
```

Always consider users who prefer reduced motion and provide options to disable animations when necessary.