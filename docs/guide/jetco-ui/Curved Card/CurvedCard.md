# CurvedCard Component

The **CurvedCard** is an elegant UI component that creates beautiful curved cards with wave animations and customizable backgrounds. Perfect for creating eye-catching design elements with smooth animations and gradient or image backgrounds.

## Features

- 🌊 **Wave Animations**: Smooth top and bottom wave animations
- 🎨 **Customizable Backgrounds**: Support for gradients and images
- 📐 **Flexible Curves**: Enable/disable top and bottom curves independently
- ⚙️ **Highly Configurable**: Extensive customization options
- 🔄 **Animation Control**: Control animation direction, duration, and behavior
- 📱 **Responsive**: Adapts to different screen sizes and orientations

## Preview

<div style="text-align: center; margin: 20px 0;">
  <img src="https://raw.githubusercontent.com/developerchunk/JetCo/refs/heads/main/assets/images/curvedCard-1.png" alt="CurvedCard Preview" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
</div>

<div style="text-align: center; margin: 20px 0;">
  <img src="https://raw.githubusercontent.com/developerchunk/JetCo/refs/heads/main/assets/images/curvedCard-2.gif" alt="CurvedCard Animation Demo" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
</div>

## Basic Usage

### Simple Gradient CurvedCard

```kotlin
CurvedCard(
    modifier = Modifier
        .fillMaxWidth()
        .height(120.dp),
    config = CurvedCardConfig(
        shape = RoundedCornerShape(20.dp),
        gradient = Brush.horizontalGradient(
            listOf(
                Color(0xFF8EC8FF),
                Color(0xFFFFC77A)
            )
        )
    )
) {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = "Hello, CurvedCard!",
            fontSize = 18.sp,
            fontWeight = FontWeight.Medium,
            color = Color.White
        )
    }
}
```

### CurvedCard with Image Background

```kotlin
CurvedCard(
    modifier = Modifier
        .fillMaxWidth()
        .height(150.dp),
    config = CurvedCardConfig(
        image = ImageBitmap.imageResource(R.drawable.background_image),
        shape = RoundedCornerShape(20.dp),
        bottomCurveEnable = true,
        topCurveEnable = false,
        imageAlpha = 0.8f
    ),
    animConfig = CurvedCardAnimConfig(
        animateBottomWave = true,
        reverseAnimationBottom = true,
        animationDurationMs = 2500
    )
) {
    // Your content here
}
```

### Animated CurvedCard with Dynamic Text

```kotlin
CurvedCard(
    modifier = Modifier
        .fillMaxWidth()
        .height(200.dp),
    config = CurvedCardConfig(
        image = ImageBitmap.imageResource(R.drawable.image_2),
        shape = RoundedCornerShape(0.dp),
        bottomCurveEnable = true,
        topCurveEnable = true,
        imageAlpha = 0.7f,
        waveSegments = 4,
        waveHeight = 15.dp
    ),
    animConfig = CurvedCardAnimConfig(
        animateTopWave = true,
        animateBottomWave = true,
        reverseAnimationBottom = false,
        reverseAnimationTop = true,
        animationDurationMs = 2000
    )
) {
    val textList = listOf(
        "Hello Developers! 🎉",
        "Did you loved JetCo Library? ❤️",
        "Give a star on GitHub! ⭐",
        "Follow me on GitHub! 🥳",
        "Happy Coding! 🚀"
    )

    // State to track current text index
    var currentTextIndex by remember { mutableIntStateOf(0) }

    // Auto-advance text every 2 seconds
    LaunchedEffect(textList.size) {
        while (true) {
            delay(2000) // 2 seconds delay
            currentTextIndex = (currentTextIndex + 1) % textList.size
        }
    }

    // Animated text content
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        AnimatedContent(
            targetState = currentTextIndex,
            transitionSpec = {
                ContentTransform(
                    targetContentEnter = slideInVertically(
                        animationSpec = tween(500),
                        initialOffsetY = { it }
                    ),
                    initialContentExit = slideOutVertically(
                        animationSpec = tween(500),
                        targetOffsetY = { -it }
                    )
                )
            },
            label = "text_animation"
        ) { index ->
            Text(
                text = textList[index],
                fontSize = 18.sp,
                fontWeight = FontWeight.Medium,
                color = Color.White,
                textAlign = TextAlign.Center,
                modifier = Modifier.padding(horizontal = 16.dp)
            )
        }
    }
}
```

## Complete Example

Here's a comprehensive example showing three different CurvedCard configurations:

```kotlin
@Composable
fun CurvedCardPreview() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFF03122A))
            .padding(top = 50.dp, bottom = 30.dp),
        verticalArrangement = Arrangement.SpaceAround,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Example 1: Simple card with gradient background
        Card(
            modifier = Modifier
                .padding(horizontal = 16.dp)
                .fillMaxWidth()
                .height(120.dp)
                .shadow(
                    elevation = 8.dp,
                    shape = RoundedCornerShape(20.dp),
                    ambientColor = Color.White,
                    spotColor = Color.White
                ),
            colors = CardDefaults.cardColors(containerColor = Color(0xFFFFF0E0)),
            shape = RoundedCornerShape(20.dp)
        ) {
            Column(
                modifier = Modifier.fillMaxSize(),
                verticalArrangement = Arrangement.SpaceBetween,
            ) {
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(top = 20.dp),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text(
                        text = "🎉 This is a example of Curved Card",
                        fontSize = 16.sp,
                        fontWeight = FontWeight.Medium,
                        color = Color(0xFFA85200)
                    )
                }

                CurvedCard(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(60.dp),
                    config = CurvedCardConfig(
                        shape = RoundedCornerShape(20.dp),
                        gradient = Brush.horizontalGradient(
                            listOf(
                                Color(0xFF8EC8FF),
                                Color(0xFFFFC77A)
                            )
                        )
                    )
                ) {
                    Row(
                        modifier = Modifier.fillMaxSize(),
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.Center
                    ) {
                        Spacer(modifier = Modifier.height(10.dp))
                        Text(
                            text = "You saved ₹31 with Gold",
                            fontSize = 18.sp,
                            fontWeight = FontWeight.Medium,
                            color = Color.White
                        )
                    }
                }
            }
        }

        // Example 2: Image background with bottom wave
        Card(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp)
                .shadow(
                    elevation = 8.dp,
                    shape = RoundedCornerShape(20.dp),
                    ambientColor = Color.White,
                    spotColor = Color.White
                ),
            colors = CardDefaults.cardColors(containerColor = Color.White),
            shape = RoundedCornerShape(20.dp)
        ) {
            Column(
                modifier = Modifier.fillMaxWidth()
            ) {
                CurvedCard(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(125.dp),
                    config = CurvedCardConfig(
                        image = ImageBitmap.imageResource(R.drawable.image_2),
                        shape = RoundedCornerShape(20.dp),
                        bottomCurveEnable = true,
                        topCurveEnable = false
                    ),
                    animConfig = CurvedCardAnimConfig(
                        animateBottomWave = true,
                        reverseAnimationBottom = true,
                        animationDurationMs = 2500
                    )
                )

                Spacer(modifier = Modifier.height(15.dp))

                Column(
                    modifier = Modifier.padding(horizontal = 16.dp)
                ) {
                    Text(
                        text = "Image background with bottom wave",
                        fontSize = 16.sp,
                        fontWeight = FontWeight.Medium,
                        color = Color(0xFF2561FF),
                    )
                    Spacer(modifier = Modifier.height(10.dp))
                    Text(
                        text = "A breathtaking, tranquil mountain landscape reflected perfectly in a still body of water.",
                        fontSize = 14.sp,
                        fontWeight = FontWeight.Normal,
                        color = Color.DarkGray,
                    )
                    Spacer(modifier = Modifier.height(15.dp))
                }
            }
        }

        // Example 3: Full animation with text carousel
        CurvedCard(
            modifier = Modifier
                .fillMaxWidth()
                .height(200.dp),
            config = CurvedCardConfig(
                image = ImageBitmap.imageResource(R.drawable.image_2),
                shape = RoundedCornerShape(0.dp),
                bottomCurveEnable = true,
                topCurveEnable = true,
                imageAlpha = 0.7f,
                waveSegments = 4,
                waveHeight = 15.dp
            ),
            animConfig = CurvedCardAnimConfig(
                animateTopWave = true,
                animateBottomWave = true,
                reverseAnimationBottom = false,
                reverseAnimationTop = true,
                animationDurationMs = 2000
            )
        ) {
            // Dynamic text content with animations
            val textList = listOf(
                "Hello Developers! 🎉",
                "Did you loved JetCo Library? ❤️",
                "Give a star on GitHub! ⭐",
                "Follow me on GitHub! 🥳",
                "Happy Coding! 🚀"
            )

            var currentTextIndex by remember { mutableIntStateOf(0) }

            LaunchedEffect(textList.size) {
                while (true) {
                    delay(2000)
                    currentTextIndex = (currentTextIndex + 1) % textList.size
                }
            }

            Box(
                modifier = Modifier.fillMaxSize(),
                contentAlignment = Alignment.Center
            ) {
                AnimatedContent(
                    targetState = currentTextIndex,
                    transitionSpec = {
                        ContentTransform(
                            targetContentEnter = slideInVertically(
                                animationSpec = tween(500),
                                initialOffsetY = { it }
                            ),
                            initialContentExit = slideOutVertically(
                                animationSpec = tween(500),
                                targetOffsetY = { -it }
                            )
                        )
                    },
                    label = "text_animation"
                ) { index ->
                    Text(
                        text = textList[index],
                        fontSize = 18.sp,
                        fontWeight = FontWeight.Medium,
                        color = Color.White,
                        textAlign = TextAlign.Center,
                        modifier = Modifier.padding(horizontal = 16.dp)
                    )
                }
            }
        }
    }
}
```

## Import Statements

### For Android Projects

```kotlin
import com.developerstring.jetco.ui.cards.curved.CurvedCard
import com.developerstring.jetco.ui.cards.curved.CurvedCardConfig
import com.developerstring.jetco.ui.cards.curved.CurvedCardAnimConfig
```

### For Kotlin Multiplatform Projects

```kotlin
import com.developerstring.jetco_kmp.cards.curved.CurvedCard
import com.developerstring.jetco_kmp.cards.curved.CurvedCardConfig
import com.developerstring.jetco_kmp.cards.curved.CurvedCardAnimConfig
```

## Configuration

The CurvedCard component uses two configuration classes:

- **[CurvedCardConfig](CurvedCardConfig.md)**: Controls appearance, shape, colors, and wave properties
- **[CurvedCardAnimConfig](CurvedCardAnimConfig.md)**: Controls animation behavior and timing

## Tips and Best Practices

1. **Performance**: Use animations sparingly in lists or heavily scrollable content
2. **Image Size**: Optimize image resources for better performance
3. **Wave Height**: Keep wave heights reasonable (5-20dp) for best visual effect
4. **Animation Duration**: 2000-3000ms provides smooth, non-distracting animations
5. **Accessibility**: Ensure sufficient color contrast for text over backgrounds

## Common Use Cases

- Hero sections with animated backgrounds
- Feature cards with promotional content
- Interactive banners and announcements
- Dynamic content showcases
- Decorative UI elements with gentle animations