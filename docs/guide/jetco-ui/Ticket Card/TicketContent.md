# **TicketContent**

The **TicketContent** is a layout helper component designed specifically for use with `TicketCard`. It provides a structured way to organize content into two logical sections: above and below the dashed divider line.

## ✨ **Features**

- 📐 **Two-section layout** (top and bottom content areas)
- 🎯 **Automatic positioning** relative to the ticket's divider
- 🔧 **Flexible content slots** for any composable content
- ⚖️ **Proportional sizing** with configurable weight distribution

---

## 🚀 **Basic Usage**

```kotlin
TicketCard(
    modifier = Modifier
        .width(250.dp)
        .height(350.dp)
) {
    TicketContent(
        topContent = {
            Text(
                text = "Main Event Info",
                modifier = Modifier.padding(16.dp)
            )
        },
        bottomContent = {
            Text(
                text = "Additional Details",
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
| `notchWeight` | `Float` | `0.7f` | Vertical position ratio for content division (should match TicketCard's notchWeight) |
| `topContent` | `@Composable () -> Unit` | `{}` | Content displayed above the divider line |
| `bottomContent` | `@Composable () -> Unit` | `{}` | Content displayed below the divider line |

---

## 🎨 **Layout Structure**

The `TicketContent` divides the available space based on the `notchWeight` parameter:

- **Top Section**: Takes `notchWeight` portion of the height (default: 70%)
- **Bottom Section**: Takes remaining `(1 - notchWeight)` portion (default: 30%)

### Visual Representation:
```
┌─────────────────┐
│                 │ ← Top Content
│   (70% height)  │   (notchWeight = 0.7f)
│                 │
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┤ ← Dashed Divider
│  (30% height)   │ ← Bottom Content
└─────────────────┘
```

---

## 🎨 **Practical Examples**

### Event Ticket Layout

```kotlin
TicketContent(
    notchWeight = 0.7f,
    topContent = {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(20.dp),
            verticalArrangement = Arrangement.SpaceEvenly,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = "MUSIC FESTIVAL 2024",
                fontSize = 18.sp,
                fontWeight = FontWeight.Bold,
                textAlign = TextAlign.Center
            )
            
            Text(
                text = "THE AMAZING BAND",
                fontSize = 16.sp,
                color = Color.Gray
            )
            
            Row {
                Icon(Icons.Default.DateRange, contentDescription = null)
                Spacer(modifier = Modifier.width(8.dp))
                Text("Dec 25, 2024 • 8:00 PM")
            }
            
            Text(
                text = "Madison Square Garden",
                fontSize = 14.sp
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
                text = "GENERAL ADMISSION",
                fontSize = 14.sp,
                fontWeight = FontWeight.Bold
            )
            Text(
                text = "Gate A • Section 101",
                fontSize = 12.sp,
                color = Color.Gray
            )
        }
    }
)
```

### Boarding Pass Layout

```kotlin
TicketContent(
    notchWeight = 0.65f,
    topContent = {
        Row(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Text("FROM", fontSize = 10.sp, color = Color.Gray)
                Text("NYC", fontSize = 24.sp, fontWeight = FontWeight.Bold)
                Text("John F. Kennedy", fontSize = 12.sp)
            }
            
            Icon(
                Icons.Default.Flight,
                contentDescription = null,
                modifier = Modifier.size(32.dp)
            )
            
            Column(horizontalAlignment = Alignment.End) {
                Text("TO", fontSize = 10.sp, color = Color.Gray)
                Text("LAX", fontSize = 24.sp, fontWeight = FontWeight.Bold)
                Text("Los Angeles Intl", fontSize = 12.sp)
            }
        }
    },
    bottomContent = {
        Row(
            modifier = Modifier
                .fillMaxSize()
                .padding(horizontal = 16.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Text("SEAT", fontSize = 10.sp, color = Color.Gray)
                Text("12A", fontSize = 16.sp, fontWeight = FontWeight.Bold)
            }
            Column {
                Text("GATE", fontSize = 10.sp, color = Color.Gray)
                Text("B6", fontSize = 16.sp, fontWeight = FontWeight.Bold)
            }
            Column(horizontalAlignment = Alignment.End) {
                Text("BOARDING", fontSize = 10.sp, color = Color.Gray)
                Text("7:30 AM", fontSize = 16.sp, fontWeight = FontWeight.Bold)
            }
        }
    }
)
```

### Coupon Layout

```kotlin
TicketContent(
    notchWeight = 0.6f,
    topContent = {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(20.dp),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = "25% OFF",
                fontSize = 36.sp,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF2196F3)
            )
            Text(
                text = "Your Next Purchase",
                fontSize = 16.sp,
                color = Color.Gray
            )
        }
    },
    bottomContent = {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp),
            verticalArrangement = Arrangement.SpaceEvenly,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = "Code: SAVE25",
                fontSize = 14.sp,
                fontWeight = FontWeight.Bold
            )
            Text(
                text = "Valid until Dec 31, 2024",
                fontSize = 12.sp,
                color = Color.Gray
            )
        }
    }
)
```

---

## 💡 **Best Practices**

### 1. **Weight Coordination**
Always ensure the `notchWeight` parameter matches between `TicketCard` and `TicketContent`:

```kotlin
val weight = 0.7f

TicketCard(
    notchWeight = weight, // Use same value
    // ... other parameters
) {
    TicketContent(
        notchWeight = weight, // Use same value
        // ... content
    )
}
```

### 2. **Content Distribution**
- **Top Section**: Primary information (event name, destination, offer details)
- **Bottom Section**: Secondary information (seat number, terms, validity)

### 3. **Padding and Spacing**
- Add consistent padding to prevent content from touching edges
- Use appropriate spacing between text elements
- Consider the limited space in each section

### 4. **Text Sizing**
- Use larger text for primary information in the top section
- Keep secondary information smaller but readable
- Maintain good contrast for accessibility

---

## ⚠️ **Important Notes**

- The `notchWeight` parameter directly affects the available space for content
- Content is automatically clipped to fit within each section
- Both sections have transparent backgrounds by default
- Use `fillMaxSize()` modifier for content that needs to utilize full section space

---

## 🔗 **Related Components**

- **[TicketCard](TicketCard.md)** - The main ticket container component
- **[TicketCardCorner](TicketCardCorner.md)** - Corner radius configuration

---

## 📋 **See Also**

Explore more layout helpers and components in the [JetCo-UI Guide](../jetco-ui.md)!