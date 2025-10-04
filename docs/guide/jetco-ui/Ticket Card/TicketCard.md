# **TicketCard**

<p align="center">
  <img src="https://github.com/developerchunk/JetCo/blob/main/assets/images/ticket_card.png?raw=true" alt="TicketCard Component" width="300"/>
</p>

The **TicketCard** is a visually appealing, customizable ticket-style card component designed to mimic real-world tickets and coupons. It features curved cutout notches on the sides and a dashed divider line, making it perfect for event tickets, boarding passes, coupons, and similar designs.

## ✨ **Features**

- 🎟️ **Ticket-style design** with authentic cutout notches
- ✂️ **Dashed divider** for visual separation
- 🎨 **Fully customizable** appearance (colors, gradients, corner radius)
- 📐 **Flexible layout** with configurable notch position
- 🖌️ **Gradient support** with brush backgrounds
- 🔧 **Easy-to-use** with helper components

---

## 🚀 **Basic Usage**

### Simple TicketCard

```kotlin
TicketCard(
    modifier = Modifier
        .width(250.dp)
        .height(350.dp)
) {
    TicketContent(
        topContent = {
            Text(
                text = "Event Ticket",
                fontWeight = FontWeight.Bold,
                modifier = Modifier.padding(16.dp)
            )
        },
        bottomContent = {
            Text(
                text = "Admit One",
                modifier = Modifier.padding(16.dp)
            )
        }
    )
}
```

---

## 🎯 **Parameters**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `modifier` | `Modifier` | `Modifier` | Modifier for styling and layout |
| `cornerRadius` | `TicketCardCorner` | `TicketCardCorner()` | Defines corner radii for each corner |
| `notchRadius` | `Dp` | `25.dp` | Radius of the side notches |
| `cardColor` | `Color` | `Color.White` | Solid background color (ignored if cardBrush is provided) |
| `cardBrush` | `Brush?` | `null` | Optional gradient/brush background |
| `dividerEffect` | `PathEffect` | `dashPathEffect(floatArrayOf(20f, 20f), 0f)` | PathEffect for the dashed divider |
| `dividerStrokeWidth` | `Float` | `5f` | Width of the dashed divider line |
| `dividerColor` | `Color` | `Color.Gray` | Color of the dashed divider line |
| `notchWeight` | `Float` | `0.7f` | Vertical position of notches as fraction (0f to 1f) |
| `content` | `@Composable () -> Unit` | `{}` | Card body composable content |

---

## 🎨 **Customization Examples**

### Custom Colors and Styling

```kotlin
TicketCard(
    modifier = Modifier
        .width(280.dp)
        .height(400.dp),
    cornerRadius = TicketCardCorner(
        topLeft = 15.dp,
        topRight = 15.dp,
        bottomLeft = 15.dp,
        bottomRight = 15.dp
    ),
    notchRadius = 30.dp,
    cardColor = Color(0xFFF8F9FA),
    dividerColor = Color(0xFF6C757D),
    dividerStrokeWidth = 3f,
    notchWeight = 0.65f
) {
    // Your content here
}
```

### Gradient Background

```kotlin
val gradient = Brush.linearGradient(
    colors = listOf(
        Color(0xFF667eea),
        Color(0xFF764ba2)
    )
)

TicketCard(
    modifier = Modifier
        .width(300.dp)
        .height(450.dp),
    cardBrush = gradient,
    dividerColor = Color.White.copy(alpha = 0.8f),
    notchRadius = 35.dp
) {
    // Your content here
}
```

### Custom Divider Style

```kotlin
TicketCard(
    modifier = Modifier
        .width(250.dp)
        .height(350.dp),
    dividerEffect = PathEffect.dashPathEffect(
        floatArrayOf(15f, 15f), 
        phase = 0f
    ),
    dividerStrokeWidth = 4f,
    dividerColor = Color.Red
) {
    // Your content here
}
```

---

## 🏗️ **Using with TicketContent**

The `TicketContent` helper component makes it easy to split your ticket into logical sections:

```kotlin
TicketCard(
    modifier = Modifier
        .width(280.dp)
        .height(380.dp)
) {
    TicketContent(
        notchWeight = 0.7f, // Should match TicketCard's notchWeight
        topContent = {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(16.dp),
                verticalArrangement = Arrangement.Center,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text(
                    text = "CONCERT TICKET",
                    fontSize = 18.sp,
                    fontWeight = FontWeight.Bold
                )
                Spacer(modifier = Modifier.height(8.dp))
                Text(
                    text = "The Amazing Band",
                    fontSize = 14.sp
                )
                Text(
                    text = "December 25, 2024",
                    fontSize = 12.sp,
                    color = Color.Gray
                )
            }
        },
        bottomContent = {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(16.dp),
                verticalArrangement = Arrangement.Center,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text(
                    text = "ADMIT ONE",
                    fontSize = 16.sp,
                    fontWeight = FontWeight.Bold
                )
                Text(
                    text = "Seat: A-12",
                    fontSize = 12.sp
                )
            }
        }
    )
}
```

---

## 💡 **Design Tips**

### 1. **Notch Positioning**
- Use `notchWeight` between `0.6f` and `0.8f` for optimal visual balance
- Coordinate `notchWeight` between `TicketCard` and `TicketContent`

### 2. **Color Schemes**
- Use high contrast between card background and divider for better visibility
- Consider accessibility when choosing color combinations

### 3. **Content Layout**
- Keep essential information in the top section
- Use the bottom section for secondary details or QR codes
- Add appropriate padding to prevent content from touching the edges

### 4. **Size Guidelines**
- Minimum recommended width: `200.dp`
- Typical aspect ratio: `1:1.4` to `1:1.6` (width:height)
- Adjust `notchRadius` proportionally to card size

---

## 🎯 **Use Cases**

- 🎫 Event tickets and concert passes
- ✈️ Boarding passes and travel documents
- 🎟️ Movie and theater tickets
- 💳 Coupons and discount vouchers
- 🏷️ Gift cards and promotional materials
- 📱 Digital receipts and confirmations

---

## 📋 **Related Components**

- **[TicketContent](TicketContent.md)** - Layout helper for ticket sections
- **[TicketCardCorner](TicketCardCorner.md)** - Corner radius configuration

---

## 🔗 **See Also**

Check out the complete [sample code](../../../sample/jetco-ui.md) and explore other JetCo components!