# **TicketCardCorner**

The **TicketCardCorner** data class provides fine-grained control over the corner radius of each corner in a `TicketCard`. This allows you to create various ticket styles, from fully rounded corners to sharp rectangular edges.

## 📐 **Structure**

```kotlin
data class TicketCardCorner(
    val topLeft: Dp = 25.dp,
    val topRight: Dp = 25.dp,
    val bottomRight: Dp = 25.dp,
    val bottomLeft: Dp = 25.dp
)
```

## 🎯 **Parameters**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `topLeft` | `Dp` | `25.dp` | Radius for the top-left corner |
| `topRight` | `Dp` | `25.dp` | Radius for the top-right corner |
| `bottomRight` | `Dp` | `25.dp` | Radius for the bottom-right corner |
| `bottomLeft` | `Dp` | `25.dp` | Radius for the bottom-left corner |

---

## 🚀 **Basic Usage**

### Default Rounded Corners

```kotlin
TicketCard(
    cornerRadius = TicketCardCorner(), // All corners 25.dp
    modifier = Modifier
        .width(250.dp)
        .height(350.dp)
) {
    // Content
}
```

### Custom Corner Configuration

```kotlin
TicketCard(
    cornerRadius = TicketCardCorner(
        topLeft = 30.dp,
        topRight = 30.dp,
        bottomLeft = 10.dp,
        bottomRight = 10.dp
    ),
    modifier = Modifier
        .width(250.dp)
        .height(350.dp)
) {
    // Content
}
```

---

## 🎨 **Design Variations**

### 1. **Rectangular Ticket**
Perfect for boarding passes and official documents:

```kotlin
TicketCardCorner(
    topLeft = 0.dp,
    topRight = 0.dp,
    bottomLeft = 0.dp,
    bottomRight = 0.dp
)
```

### 2. **Rounded Top, Sharp Bottom**
Great for event tickets with a formal bottom section:

```kotlin
TicketCardCorner(
    topLeft = 25.dp,
    topRight = 25.dp,
    bottomLeft = 0.dp,
    bottomRight = 0.dp
)
```

### 3. **Asymmetric Design**
For unique and creative ticket designs:

```kotlin
TicketCardCorner(
    topLeft = 40.dp,
    topRight = 10.dp,
    bottomLeft = 10.dp,
    bottomRight = 40.dp
)
```

### 4. **Highly Rounded**
For modern, friendly designs:

```kotlin
TicketCardCorner(
    topLeft = 50.dp,
    topRight = 50.dp,
    bottomLeft = 50.dp,
    bottomRight = 50.dp
)
```

### 5. **Mixed Radius**
Combining different radiuses for visual interest:

```kotlin
TicketCardCorner(
    topLeft = 35.dp,
    topRight = 15.dp,
    bottomLeft = 15.dp,
    bottomRight = 35.dp
)
```

---

## 🎨 **Visual Examples**

### Different Corner Styles

```kotlin
@Composable
fun CornerStyleShowcase() {
    val cornerStyles = listOf(
        "Default" to TicketCardCorner(),
        "Rectangular" to TicketCardCorner(0.dp, 0.dp, 0.dp, 0.dp),
        "Top Rounded" to TicketCardCorner(25.dp, 25.dp, 0.dp, 0.dp),
        "Asymmetric" to TicketCardCorner(40.dp, 10.dp, 10.dp, 40.dp),
        "Highly Rounded" to TicketCardCorner(50.dp, 50.dp, 50.dp, 50.dp)
    )
    
    LazyColumn {
        items(cornerStyles) { (name, corner) ->
            Column(
                modifier = Modifier.padding(16.dp),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text(
                    text = name,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.Bold
                )
                Spacer(modifier = Modifier.height(8.dp))
                TicketCard(
                    cornerRadius = corner,
                    modifier = Modifier
                        .width(200.dp)
                        .height(120.dp)
                ) {
                    Box(
                        modifier = Modifier.fillMaxSize(),
                        contentAlignment = Alignment.Center
                    ) {
                        Text("$name Style")
                    }
                }
            }
        }
    }
}
```

---

## 💡 **Design Guidelines**

### 1. **Consistency**
- Keep related corners similar for visual harmony
- Consider the overall design language of your app

### 2. **Proportional Sizing**
- Scale corner radius proportionally to ticket size
- Larger tickets can accommodate larger corner radiuses

### 3. **Functional Considerations**
- Sharp corners (0.dp) provide a more formal, document-like appearance
- Rounded corners (15-30.dp) offer a modern, friendly feel
- Very large radiuses (40+.dp) create a distinctly modern look

### 4. **Brand Alignment**
- Match corner styling to your brand's visual identity
- Consider how corners affect the overall perception of the ticket

---

## 📏 **Recommended Values**

| Use Case | Corner Style | Recommended Values |
|----------|-------------|-------------------|
| **Boarding Pass** | Rectangular | `0.dp` all corners |
| **Event Ticket** | Moderately Rounded | `15-25.dp` all corners |
| **Concert Ticket** | Rounded Top | Top: `25.dp`, Bottom: `5.dp` |
| **Coupon** | Highly Rounded | `30-40.dp` all corners |
| **Gift Card** | Symmetric Rounded | `20-30.dp` all corners |
| **Modern Design** | Asymmetric | Mixed values: `40.dp, 10.dp, 10.dp, 40.dp` |

---

## ⚡ **Quick Reference**

```kotlin
// Common corner configurations
object TicketCornerPresets {
    val rectangular = TicketCardCorner(0.dp, 0.dp, 0.dp, 0.dp)
    val rounded = TicketCardCorner(25.dp, 25.dp, 25.dp, 25.dp)
    val topRounded = TicketCardCorner(25.dp, 25.dp, 0.dp, 0.dp)
    val bottomRounded = TicketCardCorner(0.dp, 0.dp, 25.dp, 25.dp)
    val modern = TicketCardCorner(40.dp, 40.dp, 40.dp, 40.dp)
    val asymmetric = TicketCardCorner(40.dp, 10.dp, 10.dp, 40.dp)
}

// Usage
TicketCard(
    cornerRadius = TicketCornerPresets.modern,
    // ... other parameters
)
```

---

## 🔗 **Related Components**

- **[TicketCard](TicketCard.md)** - The main ticket container component
- **[TicketContent](TicketContent.md)** - Layout helper for ticket sections

---

## 📋 **See Also**

Explore the complete [TicketCard documentation](TicketCard.md) for more customization options!