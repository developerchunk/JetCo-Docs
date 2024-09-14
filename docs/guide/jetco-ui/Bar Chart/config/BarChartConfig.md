# **Bar Chart Configurations**

This section covers the various data classes used to configure the appearance and behavior of the Bar Chart components in JetCo-UI. You can customize the bars, axes, grid lines, and pop-ups to your heart's content! 🎨

## BarChartConfig

The `BarChartConfig()` data class allows you to configure the individual bars in a bar chart. Think of it like picking the perfect outfit for each bar—color, size, and style!

| Parameter Name | Description |
|----------------|-------------|
| `color: Color` | The color of the bar. Make your chart pop with vibrant colors! 🌈 |
| `height: Dp` | The height of the bar. Taller bars = higher values 📈. |
| `width: Dp` | The width of the bar. You can go thin or wide, just like pizza slices 🍕! |
| `shape: Shape` | The shape of the bar (e.g., rounded corners). Round it off for a smoother look! |

<h3>Example Usage</h3>

```kotlin
BarChartConfig(
    color = Color.Red,
    height = 150.dp,
    width = 30.dp,
    shape = RoundedCornerShape(8.dp)
)
```

---

## GroupBarChartConfig

The `GroupBarChartConfig()` data class allows you to configure the individual bars in a group bar chart `GroupColumnBarChart()`, `GroupBarChartConfig()` has your back! Configure multiple bars with ease. 📊

| Parameter Name | Description |
|----------------|-------------|
| `colors: List<Color>` | A list of colors for the bars in each group. Group your bars by color for easy comparison! 🎨 |
| `height: Dp` | The height of the bars. Same as individual bars, but grouped! |
| `width: Dp` | The width of the bars in each group. Adjust for visibility! |
| `shape: Shape` | The shape of the bars (e.g., rounded corners). |
| `gapBetweenBar: Dp` | The gap between individual bars within a group. Don’t let them get too cozy! |
| `gapBetweenGroup: Dp` | The gap between different groups of bars. Keep some breathing room between groups! 😌 |

<h3>Example Usage</h3>

```kotlin
GroupBarChartConfig(
    colors = listOf(Color.Red, Color.Green, Color.Blue),
    height = 150.dp,
    width = 30.dp,
    shape = RoundedCornerShape(4.dp),
    gapBetweenBar = 8.dp,
    gapBetweenGroup = 16.dp
)
```

---

## XAxisConfig

Customize the X-axis with `XAxisConfig()`. You can toggle axis lines, scales, and more! It’s like giving your chart a stylish foundation. ⚙️

| Parameter Name | Description |
|----------------|-------------|
| `isAxisScaleEnabled: Boolean` | Enables or disables the axis scale. Toggle this to show or hide axis markings! 📏 |
| `isAxisLineEnabled: Boolean` | Enables or disables the axis line. Choose to show or hide the line itself! |
| `axisLineWidth: Dp` | The width of the axis line. Thicker lines for more emphasis! |
| `axisLineShape: Shape` | The shape of the axis line. Rounded or sharp—your choice! |
| `axisLineColor: Color` | The color of the axis line. Make it stand out with bold colors! |
| `textStyle: TextStyle` | The style of the text for axis labels. Customize the font, size, and color! ✍️ |

<h3>Example Usage</h3>

```kotlin
XAxisConfig(
    isAxisScaleEnabled = true,
    isAxisLineEnabled = true,
    axisLineWidth = 2.dp,
    axisLineShape = RoundedCornerShape(2.dp),
    axisLineColor = Color.Gray,
    textStyle = TextStyle(color = Color.Black)
)
```

---

## YAxisConfig

Much like the X-axis, the `YAxisConfig()` lets you control the vertical axis. Set the scale, line style, and even add prefixes and suffixes! 🎯

| Parameter Name | Description |
|----------------|-------------|
| `isAxisScaleEnabled: Boolean` | Enables or disables the axis scale. |
| `isAxisLineEnabled: Boolean` | Enables or disables the axis line. |
| `axisLineWidth: Dp` | The width of the axis line. |
| `axisLineShape: Shape` | The shape of the axis line. |
| `axisLineColor: Color` | The color of the axis line. |
| `axisScaleCount: Int` | The number of scale divisions on the Y-axis. More divisions = more precise data! |
| `textStyle: TextStyle` | The style of the text for axis labels. |
| `textPrefix: String` | A prefix to be added before the scale value (e.g., "$"). 💵 |
| `textPostfix: String` | A postfix to be added after the scale value (e.g., "%"). 📊 |

<h3>Example Usage</h3>

```kotlin
YAxisConfig(
    isAxisScaleEnabled = true,
    isAxisLineEnabled = true,
    axisLineWidth = 2.dp,
    axisLineShape = RoundedCornerShape(2.dp),
    axisLineColor = Color.Gray,
    axisScaleCount = 5,
    textStyle = TextStyle(color = Color.Black),
    textPrefix = "$",
    textPostfix = "K"
)
```

---

## GridLineStyle

Add some structure to your chart with grid lines! The `GridLineStyle()` class gives you full control over the grid's look. 🌐

| Parameter Name | Description |
|----------------|-------------|
| `color: Color` | The color of the grid lines. |
| `strokeWidth: Dp` | The width of the grid lines. |
| `dashLength: Dp` | The length of each dash in dashed grid lines. For that modern, segmented look! |
| `gapLength: Dp` | The gap between dashes in dashed grid lines. |
| `totalGridLines: Int` | The total number of grid lines in the chart. |
| `dashCap: StrokeCap` | The style of the stroke cap used for dashed lines. Rounded or straight, you decide! |

<h3>Example Usage</h3>

```kotlin
GridLineStyle(
    color = Color.LightGray,
    strokeWidth = 1.dp,
    dashLength = 4.dp,
    gapLength = 2.dp,
    totalGridLines = 5,
    dashCap = StrokeCap.Round
)
```

---

## PopUpConfig

The `PopUpConfig()` class lets you control the behavior and appearance of pop-ups in your bar chart. Show details in style! 🎉

| Parameter Name | Description |
|----------------|-------------|
| `enableXAxisPopUp: Boolean` | Enables or disables pop-ups for X-axis labels. |
| `enableBarPopUp: Boolean` | Enables or disables pop-ups for the bars. |
| `background: Color` | The background color of the pop-ups. |
| `shape: Shape` | The shape of the pop-ups (e.g., rounded corners). |
| `textStyle: TextStyle` | The style of the text in the pop-ups. |

<h3>Example Usage</h3>

```kotlin
PopUpConfig(
    enableXAxisPopUp = true,
    enableBarPopUp = true,
    background = Color.Black,
    shape = RoundedCornerShape(4.dp),
    textStyle = TextStyle(color = Color.White)
)
```

---

!!! tip "Quick Tips!"
    - **Customization**: Get creative with colors, shapes, and styles! 🎨 The more you customize, the more unique your charts will look.
    - **Performance**: Large data sets or many grid lines might slow down rendering. ⚡ Keep an eye on performance for smoother animations.