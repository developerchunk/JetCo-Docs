# **CompactHorizontalStepper**

The **CompactHorizontalStepper** is a space-efficient version of the horizontal stepper, designed for scenarios where screen real estate is limited. It provides a clean, minimal representation of step progress without labels, making it perfect for mobile interfaces and compact layouts.

## ✨ **Features**

- ⚡ **Ultra-compact design** for limited space scenarios
- 🎯 **Icon-only interface** without text labels
- 🎨 **Customizable styling** through StepperConfig
- ⚡ **Smooth animations** for state transitions
- 👆 **Interactive steps** with click callbacks
- 📱 **Mobile-optimized** layout and sizing
- 🔄 **Automatic state management** for connected steps

---

## 🚀 **Basic Usage**

### Simple CompactHorizontalStepper

```kotlin
val steps = listOf(
    StepperNode(status = StepperStatus.COMPLETE),
    StepperNode(status = StepperStatus.COMPLETE),
    StepperNode(status = StepperStatus.ACTIVE),
    StepperNode(status = StepperStatus.IDLE),
    StepperNode(status = StepperStatus.IDLE)
)

CompactHorizontalStepper(
    steps = steps,
    onStepClick = { index -> 
        // Handle step click
        println("Clicked step: $index")
    }
)
```

### With Custom Icons

```kotlin
val customIcons = StepperActionIcons(
    completed = Icons.Default.Check,
    error = Icons.Default.Close,
    active = Icons.Default.RadioButtonChecked
)

val stepsWithIcons = listOf(
    StepperNode(
        icon = Icons.Default.Person,
        status = StepperStatus.COMPLETE
    ),
    StepperNode(
        icon = Icons.Default.Email,
        status = StepperStatus.COMPLETE
    ),
    StepperNode(
        icon = Icons.Default.Lock,
        status = StepperStatus.ACTIVE
    ),
    StepperNode(
        icon = Icons.Default.Done,
        status = StepperStatus.IDLE
    )
)

CompactHorizontalStepper(
    steps = stepsWithIcons,
    actionIcons = customIcons,
    onStepClick = { index -> /* Handle click */ }
)
```

---

## 🎯 **Parameters**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `steps` | `List<StepperNode>` | Required | List of steps to display |
| `config` | `StepperConfig` | `StepperConfig()` | Styling and behavior configuration |
| `actionIcons` | `StepperActionIcons` | `StepperActionIcons()` | Custom icons for different states |
| `onStepClick` | `(Int) -> Unit` | `{}` | Callback when a step is clicked |

---

## 🎨 **Customization Examples**

### Minimal Design

```kotlin
val minimalConfig = StepperConfig(
    node = StepperConfig.NodeStyle(
        size = 24.dp,
        activeColor = Color(0xFF2196F3),
        completedColor = Color(0xFF4CAF50),
        inactiveColor = Color(0xFFE0E0E0)
    ),
    connector = StepperConfig.ConnectorStyle(
        width = 2.dp,
        spacing = 8.dp
    )
)

CompactHorizontalStepper(
    steps = steps,
    config = minimalConfig
)
```

### Bold Accent Colors

```kotlin
val boldConfig = StepperConfig(
    node = StepperConfig.NodeStyle(
        size = 32.dp,
        activeColor = Color(0xFFE91E63),
        completedColor = Color(0xFF00BCD4),
        errorColor = Color(0xFFFF5722),
        inactiveColor = Color(0xFFBDBDBD)
    ),
    connector = StepperConfig.ConnectorStyle(
        width = 3.dp,
        spacing = 12.dp
    )
)

CompactHorizontalStepper(
    steps = steps,
    config = boldConfig
)
```

### Animation Customization

```kotlin
val animatedConfig = StepperConfig(
    animation = StepperConfig.AnimationConfig(
        enabled = true,
        durationMillis = 600,
        animationSpec = spring(
            dampingRatio = Spring.DampingRatioMediumBouncy,
            stiffness = Spring.StiffnessMedium
        )
    )
)

CompactHorizontalStepper(
    steps = steps,
    config = animatedConfig
)
```

---

## 💡 **Practical Examples**

### Progress Indicator

```kotlin
@Composable
fun ProgressIndicator() {
    var progress by remember { mutableStateOf(0) }
    
    val progressSteps = remember(progress) {
        (0 until 5).map { index ->
            StepperNode(
                status = when {
                    index < progress -> StepperStatus.COMPLETE
                    index == progress -> StepperStatus.ACTIVE
                    else -> StepperStatus.IDLE
                }
            )
        }
    }
    
    Column {
        CompactHorizontalStepper(
            steps = progressSteps,
            onStepClick = { index ->
                progress = index
            }
        )
        
        Spacer(modifier = Modifier.height(16.dp))
        
        Row {
            Button(
                onClick = { if (progress > 0) progress-- },
                enabled = progress > 0
            ) {
                Text("Previous")
            }
            
            Spacer(modifier = Modifier.width(8.dp))
            
            Button(
                onClick = { if (progress < 4) progress++ },
                enabled = progress < 4
            ) {
                Text("Next")
            }
        }
    }
}
```

### Page Indicator

```kotlin
@Composable
fun PageIndicator(
    currentPage: Int,
    totalPages: Int,
    onPageClick: (Int) -> Unit
) {
    val pageSteps = remember(currentPage, totalPages) {
        (0 until totalPages).map { index ->
            StepperNode(
                status = when {
                    index < currentPage -> StepperStatus.COMPLETE
                    index == currentPage -> StepperStatus.ACTIVE
                    else -> StepperStatus.IDLE
                }
            )
        }
    }
    
    CompactHorizontalStepper(
        steps = pageSteps,
        config = StepperConfig(
            node = StepperConfig.NodeStyle(
                size = 20.dp,
                activeColor = MaterialTheme.colorScheme.primary,
                completedColor = MaterialTheme.colorScheme.primary,
                inactiveColor = MaterialTheme.colorScheme.outline
            ),
            connector = StepperConfig.ConnectorStyle(
                width = 1.dp,
                spacing = 4.dp
            )
        ),
        onStepClick = onPageClick
    )
}
```

### Form Validation Progress

```kotlin
@Composable
fun FormValidationProgress() {
    var formValidation by remember {
        mutableStateOf(
            listOf(false, false, false, false) // 4 form sections
        )
    }
    
    val validationSteps = formValidation.map { isValid ->
        StepperNode(
            status = if (isValid) StepperStatus.COMPLETE else StepperStatus.ERROR
        )
    }
    
    CompactHorizontalStepper(
        steps = validationSteps,
        config = StepperConfig(
            node = StepperConfig.NodeStyle(
                completedColor = Color(0xFF4CAF50),
                errorColor = Color(0xFFF44336),
                size = 28.dp
            )
        )
    )
}
```

---

## 🎨 **Design Patterns**

### Dot Indicator Style

```kotlin
val dotConfig = StepperConfig(
    node = StepperConfig.NodeStyle(
        size = 16.dp,
        shape = CircleShape,
        activeColor = Color.Black,
        completedColor = Color.Black,
        inactiveColor = Color.Gray.copy(alpha = 0.4f)
    ),
    connector = StepperConfig.ConnectorStyle(
        width = 1.dp,
        spacing = 6.dp
    )
)
```

### Line Progress Style

```kotlin
val lineConfig = StepperConfig(
    node = StepperConfig.NodeStyle(
        size = 20.dp,
        shape = RectangleShape,
        activeColor = Color(0xFF2196F3),
        completedColor = Color(0xFF2196F3),
        inactiveColor = Color(0xFFE0E0E0)
    ),
    connector = StepperConfig.ConnectorStyle(
        width = 4.dp,
        spacing = 2.dp
    )
)
```

---

## 📱 **Mobile Optimization**

### Touch Target Sizing

```kotlin
// Ensure adequate touch targets for mobile
val mobileConfig = StepperConfig(
    node = StepperConfig.NodeStyle(
        size = 32.dp, // Minimum 32dp for touch targets
        internalSpacing = 8.dp // Add spacing for easier tapping
    )
)

CompactHorizontalStepper(
    steps = steps,
    config = mobileConfig,
    onStepClick = { index ->
        // Provide haptic feedback for better UX
        // HapticFeedback.performHapticFeedback(HapticFeedbackType.LightImpact)
        handleStepClick(index)
    }
)
```

### Responsive Sizing

```kotlin
@Composable
fun ResponsiveCompactStepper(steps: List<StepperNode>) {
    val configuration = LocalConfiguration.current
    val screenWidth = configuration.screenWidthDp.dp
    
    val nodeSize = when {
        screenWidth < 350.dp -> 20.dp
        screenWidth < 500.dp -> 24.dp
        else -> 28.dp
    }
    
    val config = StepperConfig(
        node = StepperConfig.NodeStyle(size = nodeSize)
    )
    
    CompactHorizontalStepper(
        steps = steps,
        config = config
    )
}
```

---

## 💡 **Best Practices**

### 1. **Step Count**
- **Optimal**: 3-7 steps for mobile screens
- **Maximum**: Avoid more than 10 steps to prevent overcrowding

### 2. **Visual Feedback**
- Use distinct colors for different states
- Provide immediate visual feedback on interaction
- Consider subtle animations for state changes

### 3. **Accessibility**
- Ensure adequate touch target sizes (minimum 44dp)
- Provide proper content descriptions for screen readers
- Use sufficient color contrast

### 4. **Performance**
- Use remember for step lists to avoid unnecessary recompositions
- Consider disabling animations on low-end devices

---

## 🎯 **Use Cases**

### 1. **Onboarding Progress**
Show progress through app introduction screens.

### 2. **Form Completion**
Indicate completion status of multi-section forms.

### 3. **Page Indicators**
Navigate between pages in carousels or tutorials.

### 4. **Loading States**
Show progress through multi-step loading processes.

### 5. **Game Levels**
Display level progression in games.

### 6. **Installation Steps**
Show progress through installation or setup processes.

---

## ⚠️ **Important Notes**

- This component is designed for icon-only display (no text labels)
- Consider using regular HorizontalStepper if labels are needed
- Test touch targets on actual devices to ensure usability
- Remember to provide alternative text for accessibility

---

## 🔗 **Related Components**

- **[HorizontalStepper](HorizontalStepper.md)** - Full-featured horizontal stepper with labels
- **[VerticalStepper](VerticalStepper.md)** - Vertical version of the stepper
- **[StepperConfig](config/StepperConfig.md)** - Configuration options
- **[StepperModels](config/StepperModels.md)** - Data models and enums

---

## 📋 **See Also**

Explore the complete [Steppers documentation](../jetco-ui.md) and other JetCo components!