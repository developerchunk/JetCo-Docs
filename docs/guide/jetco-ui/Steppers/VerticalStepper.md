# **VerticalStepper**

<p align="center">
  <img src="https://github.com/developerchunk/JetCo/blob/main/assets/images/vertical-stepper.png?raw=true" alt="VerticalStepper Component" width="300"/>
</p>

The **VerticalStepper** is a customizable vertical timeline component perfect for displaying step-by-step processes, order tracking, progress workflows, and multi-stage procedures. Each step can include a title, description, custom icon, and even images.

## ✨ **Features**

- 📋 **Step-by-step progression** with visual indicators
- 🎯 **Multiple status states** (Idle, Active, Complete, Error)
- 🎨 **Fully customizable** styling and animations
- 🖼️ **Image support** for enhanced visual context
- 🎭 **Custom icons** for different states
- ⚡ **Smooth animations** with configurable timing
- 👆 **Interactive steps** with click callbacks
- 🔧 **Flexible configuration** through StepperConfig

---

## 🚀 **Basic Usage**

### Simple VerticalStepper

```kotlin
val steps = listOf(
    StepperNode(
        title = "Order Placed",
        description = "Your order has been successfully placed",
        status = StepperStatus.COMPLETE
    ),
    StepperNode(
        title = "Processing",
        description = "We're preparing your order",
        status = StepperStatus.COMPLETE
    ),
    StepperNode(
        title = "Shipped",
        description = "Your order is on the way",
        status = StepperStatus.ACTIVE
    ),
    StepperNode(
        title = "Delivered",
        description = "Package will be delivered soon",
        status = StepperStatus.IDLE
    )
)

VerticalStepper(
    steps = steps,
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
| `onStepClick` | `(Int) -> Unit` | `{}` | Callback when a step is clicked |

---

## 🎨 **Customization Examples**

### Custom Styling

```kotlin
val customConfig = StepperConfig(
    node = StepperConfig.NodeStyle(
        size = 40.dp,
        activeColor = Color(0xFF2196F3),
        completedColor = Color(0xFF4CAF50),
        errorColor = Color(0xFFE91E63),
        inactiveColor = Color(0xFFE0E0E0)
    ),
    connector = StepperConfig.ConnectorStyle(
        width = 3.dp,
        spacing = 12.dp
    ),
    textConfig = StepperConfig.TextStyleConfig(
        titleTextStyle = TextStyle(
            fontSize = 18.sp,
            fontWeight = FontWeight.Bold
        ),
        descriptionTextStyle = TextStyle(
            fontSize = 14.sp,
            color = Color.Gray
        )
    )
)

VerticalStepper(
    steps = steps,
    config = customConfig,
    onStepClick = { index -> /* Handle click */ }
)
```

### With Custom Icons

```kotlin
val customIcons = StepperActionIcons(
    completed = Icons.Default.CheckCircle,
    error = Icons.Default.Error,
    active = Icons.Default.PlayArrow
)

val stepsWithIcons = listOf(
    StepperNode(
        title = "Sign Up",
        description = "Create your account",
        icon = Icons.Default.Person,
        status = StepperStatus.COMPLETE
    ),
    StepperNode(
        title = "Verify Email",
        description = "Check your email for verification",
        icon = Icons.Default.Email,
        status = StepperStatus.COMPLETE
    ),
    StepperNode(
        title = "Setup Profile",
        description = "Complete your profile information",
        icon = Icons.Default.Settings,
        status = StepperStatus.ACTIVE
    ),
    StepperNode(
        title = "Start Using",
        description = "You're all set to begin",
        icon = Icons.Default.Rocket,
        status = StepperStatus.IDLE
    )
)

VerticalStepper(
    steps = stepsWithIcons,
    actionIcons = customIcons,
    onStepClick = { index -> /* Handle click */ }
)
```

### With Images

```kotlin
val stepsWithImages = listOf(
    StepperNode(
        title = "Welcome",
        description = "Welcome to our amazing app",
        painter = painterResource(R.drawable.welcome_image),
        status = StepperStatus.COMPLETE
    ),
    StepperNode(
        title = "Setup",
        description = "Configure your preferences",
        painter = painterResource(R.drawable.setup_image),
        status = StepperStatus.ACTIVE
    ),
    StepperNode(
        title = "Ready to Go",
        description = "Everything is set up perfectly",
        painter = painterResource(R.drawable.ready_image),
        status = StepperStatus.IDLE
    )
)

val imageConfig = StepperConfig(
    imageConfig = StepperConfig.ImageConfig(
        maxWidth = 200.dp,
        maxHeight = 150.dp,
        contentScale = ContentScale.Crop,
        imageShape = RoundedCornerShape(8.dp)
    )
)

VerticalStepper(
    steps = stepsWithImages,
    config = imageConfig
)
```

---

## 🎛️ **Advanced Configuration**

### Animation Customization

```kotlin
val animatedConfig = StepperConfig(
    animation = StepperConfig.AnimationConfig(
        enabled = true,
        durationMillis = 800,
        animationSpec = tween(
            durationMillis = 800,
            easing = FastOutSlowInEasing
        )
    )
)

VerticalStepper(
    steps = steps,
    config = animatedConfig
)
```

### Custom Node Shapes

```kotlin
val customShapeConfig = StepperConfig(
    node = StepperConfig.NodeStyle(
        shape = RoundedCornerShape(8.dp), // Square with rounded corners
        size = 36.dp,
        internalSpacing = 20.dp
    )
)

VerticalStepper(
    steps = steps,
    config = customShapeConfig
)
```

---

## 💡 **Status Management**

### Dynamic Status Updates

```kotlin
@Composable
fun OrderTrackingStepper() {
    var currentStep by remember { mutableStateOf(0) }
    
    val steps = remember(currentStep) {
        listOf(
            StepperNode(
                title = "Order Confirmed",
                description = "We received your order",
                status = if (currentStep >= 0) StepperStatus.COMPLETE else StepperStatus.IDLE
            ),
            StepperNode(
                title = "Processing",
                description = "Preparing your items",
                status = when {
                    currentStep > 1 -> StepperStatus.COMPLETE
                    currentStep == 1 -> StepperStatus.ACTIVE
                    else -> StepperStatus.IDLE
                }
            ),
            StepperNode(
                title = "Shipped",
                description = "Package is on the way",
                status = when {
                    currentStep > 2 -> StepperStatus.COMPLETE
                    currentStep == 2 -> StepperStatus.ACTIVE
                    else -> StepperStatus.IDLE
                }
            ),
            StepperNode(
                title = "Delivered",
                description = "Package delivered successfully",
                status = if (currentStep >= 3) StepperStatus.COMPLETE else StepperStatus.IDLE
            )
        )
    }
    
    VerticalStepper(
        steps = steps,
        onStepClick = { index ->
            if (index <= currentStep + 1) {
                currentStep = index
            }
        }
    )
}
```

---

## 🎯 **Use Cases**

### 1. **Order Tracking**
Perfect for e-commerce apps to show order progression.

### 2. **Onboarding Flow**
Guide users through app setup and configuration.

### 3. **Recipe Instructions**
Display cooking or assembly instructions step by step.

### 4. **Project Timeline**
Show project milestones and progress.

### 5. **Tutorial Steps**
Create interactive tutorials and guides.

### 6. **Registration Process**
Display multi-step registration or verification flows.

---

## 🎨 **Design Patterns**

### Minimal Design

```kotlin
val minimalConfig = StepperConfig(
    node = StepperConfig.NodeStyle(
        size = 24.dp,
        shape = CircleShape
    ),
    textConfig = StepperConfig.TextStyleConfig(
        titleTextStyle = TextStyle(fontSize = 14.sp),
        descriptionTextStyle = TextStyle(fontSize = 12.sp)
    )
)
```

### Bold Design

```kotlin
val boldConfig = StepperConfig(
    node = StepperConfig.NodeStyle(
        size = 48.dp,
        activeColor = Color(0xFF1976D2),
        completedColor = Color(0xFF388E3C)
    ),
    connector = StepperConfig.ConnectorStyle(
        width = 4.dp
    ),
    textConfig = StepperConfig.TextStyleConfig(
        titleTextStyle = TextStyle(
            fontSize = 20.sp,
            fontWeight = FontWeight.Bold
        )
    )
)
```

---

## ⚠️ **Important Notes**

- Use appropriate spacing between steps for readability
- Consider using images sparingly to avoid visual clutter
- Ensure sufficient contrast between active and inactive states
- Test animations on lower-end devices for performance
- Keep step descriptions concise and informative

---

## 🔗 **Related Components**

- **[HorizontalStepper](HorizontalStepper.md)** - Horizontal version of the stepper
- **[CompactHorizontalStepper](CompactHorizontalStepper.md)** - Compact horizontal stepper
- **[StepperConfig](config/StepperConfig.md)** - Configuration options
- **[StepperModels](config/StepperModels.md)** - Data models and enums

---

## 📋 **See Also**

Explore the complete [Steppers documentation](../jetco-ui.md) and other JetCo components!