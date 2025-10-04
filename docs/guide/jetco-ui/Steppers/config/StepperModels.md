# **Stepper Models & Enums**

This document covers the essential data models, enums, and utility classes used by the JetCo Stepper components. Understanding these models is crucial for implementing steppers effectively.

## 🎯 **StepperNode**

The core data class representing a single step in any stepper component.

### Structure

```kotlin
data class StepperNode(
    val title: String? = null,
    val description: String? = null,
    val icon: ImageVector? = null,
    val painter: Painter? = null,
    val status: StepperStatus = StepperStatus.IDLE
)
```

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `title` | `String?` | `null` | Short title describing the step |
| `description` | `String?` | `null` | Optional secondary text with additional details |
| `icon` | `ImageVector?` | `null` | Custom vector icon for the step |
| `painter` | `Painter?` | `null` | Custom painter for images (VerticalStepper only) |
| `status` | `StepperStatus` | `StepperStatus.IDLE` | Current status of the step |

### Example Usage

```kotlin
// Basic step with title only
val basicStep = StepperNode(
    title = "Complete Profile",
    status = StepperStatus.ACTIVE
)

// Detailed step with description
val detailedStep = StepperNode(
    title = "Upload Documents",
    description = "Please upload your identity documents for verification",
    status = StepperStatus.IDLE
)

// Step with custom icon
val iconStep = StepperNode(
    title = "Payment",
    description = "Enter your payment information",
    icon = Icons.Default.Payment,
    status = StepperStatus.COMPLETE
)

// Step with image (VerticalStepper only)
val imageStep = StepperNode(
    title = "Welcome",
    description = "Welcome to our amazing platform",
    painter = painterResource(R.drawable.welcome_image),
    status = StepperStatus.COMPLETE
)
```

---

## 📊 **StepperStatus**

Enum representing the possible states of a step within the stepper.

### Values

| Status | Description | Visual Indicator |
|--------|-------------|------------------|
| `COMPLETE` | Step has been completed successfully | ✅ Completed color + check icon |
| `ACTIVE` | Step is currently active or in progress | 🎯 Active color + custom/default icon |
| `IDLE` | Step is inactive or pending | ⭕ Inactive color + number/icon |
| `ERROR` | Step has encountered an error state | ❌ Error color + error icon |

### Example Usage

```kotlin
val steps = listOf(
    StepperNode("Sign Up", status = StepperStatus.COMPLETE),
    StepperNode("Verify Email", status = StepperStatus.COMPLETE),
    StepperNode("Complete Profile", status = StepperStatus.ACTIVE),
    StepperNode("Start Using", status = StepperStatus.IDLE)
)

// Dynamic status update
fun updateStepStatus(steps: MutableList<StepperNode>, index: Int, status: StepperStatus) {
    steps[index] = steps[index].copy(status = status)
}
```

---

## 🎭 **StepperActionIcons**

Defines the set of icons used by steppers for different states.

### Structure

```kotlin
data class StepperActionIcons(
    val completed: ImageVector = Icons.Default.Check,
    val error: ImageVector = Icons.Default.Close,
    val active: ImageVector = Icons.Rounded.Check
)
```

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `completed` | `ImageVector` | `Icons.Default.Check` | Icon for completed steps |
| `error` | `ImageVector` | `Icons.Default.Close` | Icon for error steps |
| `active` | `ImageVector` | `Icons.Rounded.Check` | Default icon for active steps |

### Example Usage

```kotlin
// Material Design icons
val materialIcons = StepperActionIcons(
    completed = Icons.Default.CheckCircle,
    error = Icons.Default.Error,
    active = Icons.Default.RadioButtonChecked
)

// Custom icons
val customIcons = StepperActionIcons(
    completed = Icons.Default.Done,
    error = Icons.Default.Cancel,
    active = Icons.Default.PlayArrow
)

// Usage in stepper
VerticalStepper(
    steps = steps,
    actionIcons = customIcons
)
```

---

## 🔄 **State Management Patterns**

### 1. Basic State Management

```kotlin
@Composable
fun StatefulStepper() {
    var currentStep by remember { mutableStateOf(0) }
    
    val steps = remember(currentStep) {
        listOf(
            StepperNode(
                title = "Step 1",
                status = if (currentStep >= 0) StepperStatus.COMPLETE else StepperStatus.IDLE
            ),
            StepperNode(
                title = "Step 2", 
                status = when {
                    currentStep > 1 -> StepperStatus.COMPLETE
                    currentStep == 1 -> StepperStatus.ACTIVE
                    else -> StepperStatus.IDLE
                }
            ),
            StepperNode(
                title = "Step 3",
                status = when {
                    currentStep > 2 -> StepperStatus.COMPLETE
                    currentStep == 2 -> StepperStatus.ACTIVE
                    else -> StepperStatus.IDLE
                }
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

### 2. Form Validation State

```kotlin
@Composable
fun FormValidationStepper() {
    var formStates by remember {
        mutableStateOf(
            mapOf(
                0 to StepperStatus.IDLE,    // Personal Info
                1 to StepperStatus.IDLE,    // Contact Details
                2 to StepperStatus.IDLE,    // Preferences
                3 to StepperStatus.IDLE     // Confirmation
            )
        )
    }
    
    val steps = formStates.map { (index, status) ->
        StepperNode(
            title = when (index) {
                0 -> "Personal Info"
                1 -> "Contact Details"
                2 -> "Preferences"
                3 -> "Confirmation"
                else -> "Step ${index + 1}"
            },
            status = status
        )
    }
    
    // Function to update validation status
    fun validateStep(stepIndex: Int, isValid: Boolean) {
        formStates = formStates.toMutableMap().apply {
            this[stepIndex] = if (isValid) StepperStatus.COMPLETE else StepperStatus.ERROR
        }
    }
}
```

### 3. Async Process Tracking

```kotlin
@Composable
fun AsyncProcessStepper() {
    var processStates by remember {
        mutableStateOf(
            listOf(
                StepperStatus.IDLE,    // Download
                StepperStatus.IDLE,    // Install
                StepperStatus.IDLE,    // Configure
                StepperStatus.IDLE     // Launch
            )
        )
    }
    
    val stepTitles = listOf("Download", "Install", "Configure", "Launch")
    
    val steps = processStates.mapIndexed { index, status ->
        StepperNode(
            title = stepTitles[index],
            status = status
        )
    }
    
    // Simulate async process
    LaunchedEffect(Unit) {
        processStates.forEachIndexed { index, _ ->
            // Update to active
            processStates = processStates.toMutableList().apply {
                this[index] = StepperStatus.ACTIVE
            }
            
            delay(2000) // Simulate process time
            
            // Update to complete
            processStates = processStates.toMutableList().apply {
                this[index] = StepperStatus.COMPLETE
            }
        }
    }
    
    HorizontalStepper(steps = steps)
}
```

---

## 🛠️ **Utility Functions**

### Step Navigation Helpers

```kotlin
object StepperUtils {
    /**
     * Create steps with progressive completion status
     */
    fun createProgressiveSteps(
        titles: List<String>,
        currentStep: Int,
        descriptions: List<String>? = null
    ): List<StepperNode> {
        return titles.mapIndexed { index, title ->
            StepperNode(
                title = title,
                description = descriptions?.getOrNull(index),
                status = when {
                    index < currentStep -> StepperStatus.COMPLETE
                    index == currentStep -> StepperStatus.ACTIVE
                    else -> StepperStatus.IDLE
                }
            )
        }
    }
    
    /**
     * Update step status at specific index
     */
    fun updateStepStatus(
        steps: List<StepperNode>,
        index: Int,
        newStatus: StepperStatus
    ): List<StepperNode> {
        return steps.mapIndexed { i, step ->
            if (i == index) step.copy(status = newStatus) else step
        }
    }
    
    /**
     * Get next incomplete step index
     */
    fun getNextIncompleteStep(steps: List<StepperNode>): Int? {
        return steps.indexOfFirst { it.status != StepperStatus.COMPLETE }
            .takeIf { it != -1 }
    }
    
    /**
     * Check if all steps are complete
     */
    fun areAllStepsComplete(steps: List<StepperNode>): Boolean {
        return steps.all { it.status == StepperStatus.COMPLETE }
    }
    
    /**
     * Get completion percentage
     */
    fun getCompletionPercentage(steps: List<StepperNode>): Float {
        if (steps.isEmpty()) return 0f
        val completedSteps = steps.count { it.status == StepperStatus.COMPLETE }
        return completedSteps.toFloat() / steps.size.toFloat()
    }
}
```

### Usage Examples

```kotlin
// Create progressive steps
val progressSteps = StepperUtils.createProgressiveSteps(
    titles = listOf("Start", "Process", "Complete"),
    currentStep = 1,
    descriptions = listOf(
        "Begin the process",
        "Processing your request", 
        "All done!"
    )
)

// Update step status
val updatedSteps = StepperUtils.updateStepStatus(
    steps = progressSteps,
    index = 2,
    newStatus = StepperStatus.ERROR
)

// Check completion
val isComplete = StepperUtils.areAllStepsComplete(progressSteps)
val percentage = StepperUtils.getCompletionPercentage(progressSteps)
```

---

## 🎨 **Icon Recommendations**

### Material Icons for Common Use Cases

```kotlin
object StepperIcons {
    // Authentication Flow
    val signUp = Icons.Default.PersonAdd
    val verify = Icons.Default.VerifiedUser
    val login = Icons.Default.Login
    
    // E-commerce Flow
    val cart = Icons.Default.ShoppingCart
    val shipping = Icons.Default.LocalShipping
    val payment = Icons.Default.Payment
    val confirmation = Icons.Default.CheckCircle
    
    // Onboarding Flow
    val welcome = Icons.Default.Waving
    val tutorial = Icons.Default.School
    val preferences = Icons.Default.Settings
    val ready = Icons.Default.Rocket
    
    // Document Processing
    val upload = Icons.Default.Upload
    val review = Icons.Default.Preview
    val approve = Icons.Default.Approval
    val complete = Icons.Default.Done
}
```

---

## ⚠️ **Important Notes**

### Status Transitions
- Always transition states logically (IDLE → ACTIVE → COMPLETE/ERROR)
- Avoid jumping directly from IDLE to COMPLETE without ACTIVE
- Use ERROR status for validation failures or process errors

### Performance Considerations
- Use `remember` for step lists to avoid unnecessary recompositions
- Consider using `derivedStateOf` for computed step states
- Avoid creating new StepperNode instances on every recomposition

### Accessibility
- Provide meaningful titles and descriptions
- Use appropriate status indicators for screen readers
- Ensure step navigation is keyboard accessible

---

## 🔗 **Related Documentation**

- **[StepperConfig](StepperConfig.md)** - Configuration options
- **[VerticalStepper](../VerticalStepper.md)** - Vertical stepper component
- **[HorizontalStepper](../HorizontalStepper.md)** - Horizontal stepper component
- **[CompactHorizontalStepper](../CompactHorizontalStepper.md)** - Compact horizontal stepper

---

## 📋 **Quick Reference**

```kotlin
// Complete example with all models
val customIcons = StepperActionIcons(
    completed = Icons.Default.CheckCircle,
    error = Icons.Default.Error,
    active = Icons.Default.PlayArrow
)

val steps = listOf(
    StepperNode(
        title = "Setup Account",
        description = "Create your profile",
        icon = Icons.Default.Person,
        status = StepperStatus.COMPLETE
    ),
    StepperNode(
        title = "Verify Identity", 
        description = "Upload documents",
        icon = Icons.Default.Badge,
        status = StepperStatus.ACTIVE
    ),
    StepperNode(
        title = "Start Using",
        description = "Begin your journey",
        icon = Icons.Default.Rocket,
        status = StepperStatus.IDLE
    )
)

VerticalStepper(
    steps = steps,
    actionIcons = customIcons,
    onStepClick = { index -> /* Handle click */ }
)
```