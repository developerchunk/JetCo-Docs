# **HorizontalStepper**

<p align="center">
  <img src="https://github.com/developerchunk/JetCo/blob/main/assets/images/horizontal-stepper.png?raw=true" alt="HorizontalStepper Component" width="400"/>
</p>

The **HorizontalStepper** is a sleek horizontal progress indicator perfect for displaying multi-step processes, wizards, and progress workflows. It arranges steps horizontally with connecting lines and optional labels, making it ideal for form wizards and checkout processes.

## ✨ **Features**

- ➡️ **Horizontal layout** with connecting lines between steps
- 🏷️ **Optional labels** that can be shown or hidden
- 🎯 **Multiple status states** (Idle, Active, Complete, Error)
- 🎨 **Fully customizable** styling and animations
- ⚡ **Smooth progress animations** for connectors
- 👆 **Interactive steps** with click callbacks
- 📱 **Responsive design** that adapts to available width
- 🎭 **Custom icons** for different states

---

## 🚀 **Basic Usage**

### Simple HorizontalStepper

```kotlin
val steps = listOf(
    StepperNode(
        title = "Cart",
        status = StepperStatus.COMPLETE
    ),
    StepperNode(
        title = "Shipping",
        status = StepperStatus.COMPLETE
    ),
    StepperNode(
        title = "Payment",
        status = StepperStatus.ACTIVE
    ),
    StepperNode(
        title = "Confirmation",
        status = StepperStatus.IDLE
    )
)

HorizontalStepper(
    steps = steps,
    showLabels = true,
    onStepClick = { index -> 
        // Handle step click
        println("Clicked step: $index")
    }
)
```

---

## 🎯 **Parameters**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `steps` | `List<StepperNode>` | Required | List of steps to display |
| `config` | `StepperConfig` | `StepperConfig()` | Styling and behavior configuration |
| `actionIcons` | `StepperActionIcons` | `StepperActionIcons()` | Custom icons for different states |
| `showLabels` | `Boolean` | `true` | Whether to show step labels below nodes |
| `onStepClick` | `(Int) -> Unit` | `{}` | Callback when a step is clicked |

---

## 🎨 **Customization Examples**

### Without Labels (Icons Only)

```kotlin
HorizontalStepper(
    steps = steps,
    showLabels = false, // Hide labels for a cleaner look
    onStepClick = { index -> /* Handle click */ }
)
```

### Custom Styling

```kotlin
val customConfig = StepperConfig(
    node = StepperConfig.NodeStyle(
        size = 36.dp,
        activeColor = Color(0xFF6200EA),
        completedColor = Color(0xFF00C853),
        errorColor = Color(0xFFD50000),
        inactiveColor = Color(0xFFBDBDBD),
        horizontalStepperWidth = 100.dp // Minimum width per step
    ),
    connector = StepperConfig.ConnectorStyle(
        width = 3.dp,
        spacing = 16.dp
    ),
    textConfig = StepperConfig.TextStyleConfig(
        titleTextStyle = TextStyle(
            fontSize = 12.sp,
            fontWeight = FontWeight.Medium
        ),
        maxTitleLines = 1
    )
)

HorizontalStepper(
    steps = steps,
    config = customConfig,
    showLabels = true
)
```

### With Custom Icons

```kotlin
val customIcons = StepperActionIcons(
    completed = Icons.Default.CheckCircle,
    error = Icons.Default.Cancel,
    active = Icons.Default.RadioButtonChecked
)

val stepsWithIcons = listOf(
    StepperNode(
        title = "Login",
        icon = Icons.Default.Person,
        status = StepperStatus.COMPLETE
    ),
    StepperNode(
        title = "Verify",
        icon = Icons.Default.Security,
        status = StepperStatus.COMPLETE
    ),
    StepperNode(
        title = "Profile",
        icon = Icons.Default.Edit,
        status = StepperStatus.ACTIVE
    ),
    StepperNode(
        title = "Done",
        icon = Icons.Default.Done,
        status = StepperStatus.IDLE
    )
)

HorizontalStepper(
    steps = stepsWithIcons,
    actionIcons = customIcons,
    showLabels = true
)
```

---

## 🎛️ **Layout Configurations**

### Compact Layout

```kotlin
val compactConfig = StepperConfig(
    node = StepperConfig.NodeStyle(
        size = 28.dp,
        horizontalStepperWidth = 80.dp,
        internalSpacing = 8.dp
    ),
    textConfig = StepperConfig.TextStyleConfig(
        titleTextStyle = TextStyle(fontSize = 10.sp),
        maxTitleLines = 1
    )
)

HorizontalStepper(
    steps = steps,
    config = compactConfig,
    showLabels = true
)
```

### Wide Layout for Tablets

```kotlin
val wideConfig = StepperConfig(
    node = StepperConfig.NodeStyle(
        size = 48.dp,
        horizontalStepperWidth = 200.dp,
        internalSpacing = 24.dp
    ),
    connector = StepperConfig.ConnectorStyle(
        width = 4.dp,
        spacing = 20.dp
    ),
    textConfig = StepperConfig.TextStyleConfig(
        titleTextStyle = TextStyle(
            fontSize = 16.sp,
            fontWeight = FontWeight.SemiBold
        )
    )
)

HorizontalStepper(
    steps = steps,
    config = wideConfig,
    showLabels = true
)
```

---

## 💡 **Practical Examples**

### Checkout Process

```kotlin
@Composable
fun CheckoutStepper() {
    var currentStep by remember { mutableStateOf(0) }
    
    val checkoutSteps = remember(currentStep) {
        listOf(
            StepperNode(
                title = "Cart",
                icon = Icons.Default.ShoppingCart,
                status = if (currentStep >= 0) StepperStatus.COMPLETE else StepperStatus.IDLE
            ),
            StepperNode(
                title = "Shipping",
                icon = Icons.Default.LocalShipping,
                status = when {
                    currentStep > 1 -> StepperStatus.COMPLETE
                    currentStep == 1 -> StepperStatus.ACTIVE
                    else -> StepperStatus.IDLE
                }
            ),
            StepperNode(
                title = "Payment",
                icon = Icons.Default.Payment,
                status = when {
                    currentStep > 2 -> StepperStatus.COMPLETE
                    currentStep == 2 -> StepperStatus.ACTIVE
                    else -> StepperStatus.IDLE
                }
            ),
            StepperNode(
                title = "Review",
                icon = Icons.Default.Preview,
                status = when {
                    currentStep > 3 -> StepperStatus.COMPLETE
                    currentStep == 3 -> StepperStatus.ACTIVE
                    else -> StepperStatus.IDLE
                }
            ),
            StepperNode(
                title = "Complete",
                icon = Icons.Default.CheckCircle,
                status = if (currentStep >= 4) StepperStatus.COMPLETE else StepperStatus.IDLE
            )
        )
    }
    
    HorizontalStepper(
        steps = checkoutSteps,
        showLabels = true,
        onStepClick = { index ->
            // Allow going back to previous steps
            if (index <= currentStep) {
                currentStep = index
            }
        }
    )
}
```

### Registration Wizard

```kotlin
@Composable
fun RegistrationStepper() {
    val registrationSteps = listOf(
        StepperNode(
            title = "Account",
            status = StepperStatus.COMPLETE
        ),
        StepperNode(
            title = "Personal",
            status = StepperStatus.COMPLETE
        ),
        StepperNode(
            title = "Verification",
            status = StepperStatus.ACTIVE
        ),
        StepperNode(
            title = "Preferences",
            status = StepperStatus.IDLE
        )
    )
    
    HorizontalStepper(
        steps = registrationSteps,
        showLabels = true,
        config = StepperConfig(
            node = StepperConfig.NodeStyle(
                activeColor = Color(0xFF1976D2),
                completedColor = Color(0xFF388E3C),
                size = 32.dp
            )
        )
    )
}
```

---

## 🎨 **Design Patterns**

### Material Design Style

```kotlin
val materialConfig = StepperConfig(
    node = StepperConfig.NodeStyle(
        activeColor = MaterialTheme.colorScheme.primary,
        completedColor = MaterialTheme.colorScheme.primary,
        inactiveColor = MaterialTheme.colorScheme.outline,
        size = 32.dp
    ),
    textConfig = StepperConfig.TextStyleConfig(
        titleTextStyle = MaterialTheme.typography.labelMedium
    )
)
```

### Colorful Theme

```kotlin
val colorfulConfig = StepperConfig(
    node = StepperConfig.NodeStyle(
        activeColor = Color(0xFFFF6B6B),
        completedColor = Color(0xFF4ECDC4),
        errorColor = Color(0xFFFFE66D),
        inactiveColor = Color(0xFFA8E6CF),
        size = 40.dp
    ),
    connector = StepperConfig.ConnectorStyle(
        width = 3.dp
    )
)
```

---

## 📱 **Responsive Behavior**

The HorizontalStepper automatically adapts to different screen sizes:

- **Phone Portrait**: Uses minimum step width, may scroll horizontally
- **Phone Landscape**: Spreads steps evenly across available width
- **Tablet**: Uses larger step width for better visual balance

### Custom Responsive Configuration

```kotlin
@Composable
fun ResponsiveHorizontalStepper(steps: List<StepperNode>) {
    val configuration = LocalConfiguration.current
    val screenWidth = configuration.screenWidthDp.dp
    
    val stepWidth = when {
        screenWidth < 400.dp -> 70.dp  // Small phones
        screenWidth < 600.dp -> 90.dp  // Regular phones
        else -> 120.dp                 // Tablets
    }
    
    val config = StepperConfig(
        node = StepperConfig.NodeStyle(
            horizontalStepperWidth = stepWidth
        )
    )
    
    HorizontalStepper(
        steps = steps,
        config = config,
        showLabels = screenWidth > 350.dp // Hide labels on very small screens
    )
}
```

---

## 💡 **Best Practices**

### 1. **Step Count**
- **Optimal**: 3-5 steps for mobile, 5-7 for tablets
- **Maximum**: Avoid more than 7 steps to prevent overcrowding

### 2. **Label Design**
- Keep labels short (1-2 words)
- Use consistent terminology
- Consider hiding labels on small screens

### 3. **Visual Hierarchy**
- Use distinct colors for different states
- Ensure sufficient contrast for accessibility
- Test with different color blindness types

### 4. **Interaction**
- Allow navigation to previous steps
- Provide visual feedback on hover/press
- Consider disabling future steps until previous ones are complete

---

## ⚠️ **Important Notes**

- The component automatically handles overflow with horizontal scrolling
- Labels can be hidden for more compact layouts
- Consider using `CompactHorizontalStepper` for very limited space
- Test on various screen sizes to ensure proper layout

---

## 🔗 **Related Components**

- **[VerticalStepper](VerticalStepper.md)** - Vertical version of the stepper
- **[CompactHorizontalStepper](CompactHorizontalStepper.md)** - More compact horizontal stepper
- **[StepperConfig](config/StepperConfig.md)** - Configuration options
- **[StepperModels](config/StepperModels.md)** - Data models and enums

---

## 📋 **See Also**

Explore the complete [Steppers documentation](../jetco-ui.md) and other JetCo components!