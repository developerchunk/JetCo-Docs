# **Bar Chart Components**  

Hey, chart enthusiast! 🎨 Let's walk through how to use JetCo’s UI components to create stunning bar charts with ease. No need to dig deep into the code — just follow these simple guides to integrate interactive and visually appealing chart elements into your app! 🚀

---

## **BarChartPopup** 🛠️

**What it does:**  
The `BarChartPopup()` is your friendly neighborhood popup that shows detailed info when users tap on a specific bar in your bar chart. Perfect for showing additional data or tips! 💡

<h3>Usage Example:</h3>

```kotlin
BarChartPopup(
    popUpConfig = yourPopUpConfig, 
    text = "Here’s your info!", 
    onDismissRequest = { /* handle dismiss */ }
)
```

<h3>Parameters:</h3>

| **Parameter**       | **Type**           | **Default** | **Description**                                                                 |
|---------------------|--------------------|-------------|---------------------------------------------------------------------------------|
| `popUpConfig`       | `PopUpConfig`      | Required    | Configuration for the popup (background, shape, etc.).                          |
| `text`              | `String`           | Required    | The text you want to display inside the popup.                                  |
| `onDismissRequest`  | `() -> Unit`       | Required    | Function to handle when the popup is dismissed.                                 |

---

## **GridLine** 🌐

**What it does:**  
The `GridLine()` component is used to create dashed or solid grid lines in your charts. These grid lines help users easily visualize data points on the chart. 📏

<h3>Usage Example:</h3>

```kotlin
GridLine(
    modifier = Modifier.padding(8.dp),
    gridLineStyle = yourGridLineStyle
)
```

<h3>Parameters:</h3>

| **Parameter**   | **Type**           | **Default** | **Description**                                                    |
|-----------------|--------------------|-------------|--------------------------------------------------------------------|
| `modifier`      | `Modifier`         | Optional    | Modifier to apply to the grid line.                                |
| `gridLineStyle` | `GridLineStyle`    | Required    | Style configuration for the grid line (color, stroke width, etc.). |

---

## **XAxisLabel** 📉

**What it does:**  
The `XAxisLabel()` component is for labeling the X-axis of your bar chart. You can customize the style, enable text rotation, and even add a click event! 💬

<h3>Usage Example:</h3>

```kotlin
XAxisLabel(
    itemName = "Label",
    xAxisTextStyle = yourTextStyle,
    textRotateAngle = 45f,
    enableTextRotate = true,
    onLabelClick = { /* handle label click */ }
)
```

<h3>Parameters:</h3>

| **Parameter**       | **Type**           | **Default** | **Description**                                                              |
|---------------------|--------------------|-------------|------------------------------------------------------------------------------|
| `itemName`          | `String`           | Required    | The label text to display for the X-axis.                                    |
| `xAxisTextStyle`    | `TextStyle`        | Required    | Style for the label text (font size, color, etc.).                           |
| `textRotateAngle`   | `Float`            | `0f`        | Angle to rotate the label.                                                   |
| `enableTextRotate`  | `Boolean`          | `false`     | Whether to enable rotation for the label text.                               |
| `onLabelClick`      | `() -> Unit`       | Required    | Function to handle when the label is clicked.                                |

---

## **YAxisGridLines** 📏

**What it does:**  
`YAxisGridLines()` helps you draw horizontal grid lines across the Y-axis of your bar chart. These lines assist in aligning data points and improving readability. 🎯

<h3>Usage Example:</h3>

```kotlin
YAxisGridLines(
    gridLineStyle = yourGridLineStyle,
    yAxisStepHeight = 40.dp
)
```

<h3>Parameters:</h3>

| **Parameter**       | **Type**           | **Default** | **Description**                                                          |
|---------------------|--------------------|-------------|--------------------------------------------------------------------------|
| `gridLineStyle`     | `GridLineStyle`    | Required    | Style configuration for the grid lines (color, stroke width, etc.).       |
| `yAxisStepHeight`   | `Dp`               | Required    | Vertical spacing between each grid line along the Y-axis.                 |

---

## **YAxisScale** 🧮

**What it does:**  
The `YAxisScale()` component creates and displays the Y-axis scale labels along with an optional axis line. It automatically adjusts the scale based on your data. Perfect for keeping things tidy and informative! 📊

<h3>Usage Example:</h3>

```kotlin
YAxisScale(
    yAxisConfig = yourYAxisConfig,
    yAxisStepHeight = 50.dp,
    yAxisScaleStep = 10f,
    barHeight = 200.dp
)
```

<h3>Parameters:</h3>

| **Parameter**       | **Type**           | **Default** | **Description**                                                          |
|---------------------|--------------------|-------------|--------------------------------------------------------------------------|
| `yAxisConfig`       | `YAxisConfig`      | Required    | Configuration for the Y-axis (text style, scale count, axis line, etc.).  |
| `yAxisStepHeight`   | `Dp`               | Required    | Height of each step in the Y-axis scale.                                  |
| `yAxisScaleStep`    | `Float`            | Required    | The step value used to calculate the Y-axis scale labels.                 |
| `barHeight`         | `Dp`               | Required    | The total height of the Y-axis bar.                                       |

---

!!! info "🔍 Want to Dive Deeper?"
    If you're curious about how to fine-tune your charts, you’ll want to explore PopUpConfig, GridLineStyle, and YAxisConfig. These configuration objects give you complete control over the appearance and behavior of popups, grid lines, and axis scales in your charts. To make things even easier, we've provided default configurations with sensible presets!
    👉 Check out the PieChartConfigurations and BarChartDefaults for a head start on customizing your charts. You can use these defaults as-is or tweak them to match your app's style! 🎨
    So go ahead, experiment, and make those charts shine! 🌟

!!! tip annotate "Pro Tip 💡" 
    Each of these components works seamlessly with Jetpack Compose, so you can combine them to create dynamic, interactive, and fully customizable bar charts. From showing detailed popups to customizing axis labels, it’s all at your fingertips with JetCo! 🎉

Feel free to explore and play around with different configurations to match your app’s style. ✨

---

Let’s make your app’s charts look amazing with JetCo! 🎨