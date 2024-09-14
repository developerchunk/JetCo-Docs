# **Group Column Bar Chart**

### `GroupColumnBarChart` Component

The `GroupColumnBarChart()` is an advanced and customizable grouped column bar chart that you can use to visualize grouped data with multiple bars in each group. This composable is perfect for scenarios where you need to compare different sets of data within various categories. It's built to be flexible, allowing you to configure animations, axis styles, colors, popups, and more!

```kotlin
@Composable
fun GroupColumnBarChart(
    modifier: Modifier = Modifier,
    chartData: Map<String, List<Float>>,
    groupBarChartConfig: GroupBarChartConfig = BarChartDefaults.groupBarChartConfig(),
    yAxisConfig: YAxisConfig = BarChartDefaults.yAxisConfig(),
    xAxisConfig: XAxisConfig = BarChartDefaults.xAxisConfig(),
    popUpConfig: PopUpConfig = BarChartDefaults.popUpConfig(),
    gridLineStyle: GridLineStyle = BarChartDefaults.gridLineStyle(),
    maxBarValue: Float? = null,
    enableAnimation: Boolean = true,
    enterAnimation: EnterTransition = BarChartDefaults.enterTransitionVertically,
    exitAnimation: ExitTransition = shrinkVertically(),
    maxTextLengthXAxis: Int = 6,
    enableTextRotate: Boolean = false,
    textRotateAngle: Float = -60f,
    enableGridLines: Boolean = true,
    scrollEnable: Boolean = true,
    onBarClicked: ((Pair<String, Float>) -> Unit)? = null,
    onXAxisLabelClicked: ((Pair<String, List<Float>>) -> Unit)? = null
)
```

This function lets developers create group-based bar charts. Let's dive into what makes this chart tick! 🎉

### Parameters

| Parameter              | Type                        | Default                                      | Description |
|------------------------|-----------------------------|----------------------------------------------|-------------|
| `modifier`              | `Modifier`                  | `Modifier`                                   | Customize the layout and appearance of the chart. |
| `chartData`             | `Map<String, List<Float>>`  | **Required**                                 | Your dataset. Each key represents a group label, and the list of floats are the values for the bars within that group. |
| `groupBarChartConfig`   | `GroupBarChartConfig`       | `BarChartDefaults.groupBarChartConfig()`      | Configuration for how the bars are rendered, including colors, shapes, and dimensions. |
| `yAxisConfig`           | `YAxisConfig`               | `BarChartDefaults.yAxisConfig()`             | Customize Y-axis with scale, line visibility, and styles. |
| `xAxisConfig`           | `XAxisConfig`               | `BarChartDefaults.xAxisConfig()`             | Customize X-axis with labels, rotation, and visibility. |
| `popUpConfig`           | `PopUpConfig`               | `BarChartDefaults.popUpConfig()`             | Control pop-ups when clicking bars or labels. |
| `gridLineStyle`         | `GridLineStyle`             | `BarChartDefaults.gridLineStyle()`           | Customize grid lines that appear behind bars. |
| `maxBarValue`           | `Float?`                    | `null`                                       | Max value on the Y-axis. If `null`, it will be automatically calculated from the data. |
| `enableAnimation`       | `Boolean`                   | `true`                                       | Enable or disable chart animation. |
| `enterAnimation`        | `EnterTransition`           | `BarChartDefaults.enterTransitionVertically` | Specify the animation for bars as they enter the view. |
| `exitAnimation`         | `ExitTransition`            | `shrinkVertically()`                         | Define exit animation for bars. |
| `maxTextLengthXAxis`    | `Int`                       | `6`                                          | Maximum characters for X-axis labels. Longer labels are truncated with ellipsis. |
| `enableTextRotate`      | `Boolean`                   | `false`                                      | Rotate X-axis text for better readability. |
| `textRotateAngle`       | `Float`                     | `-60f`                                       | Angle for X-axis text rotation when `enableTextRotate` is `true`. |
| `enableGridLines`       | `Boolean`                   | `true`                                       | Show or hide grid lines behind the bars. |
| `scrollEnable`          | `Boolean`                   | `true`                                       | Enable horizontal scrolling for the chart. |
| `onBarClicked`          | `((Pair<String, Float>) -> Unit)?` | `null`                                       | Callback triggered when a bar is clicked. Returns the group label and the bar value. |
| `onXAxisLabelClicked`   | `((Pair<String, List<Float>>) -> Unit)?` | `null`                                       | Callback triggered when an X-axis label is clicked. Returns the group label and the list of values for that group. |

---

### 💡 How Developers Can Use It

This component is for developers who want to showcase grouped data in a visually appealing way. Here's a quick guide on how to get started:

1. **Simple Usage**:
   Just pass your chart data as a `Map<String, List<Float>>` where the key is the group name and the list contains the values for the bars in that group.

   ```kotlin
   val chartData = mapOf(
       "Category 1" to listOf(4.5f, 3.0f, 2.0f),
       "Category 2" to listOf(5.0f, 2.5f, 3.5f),
       "Category 3" to listOf(4.0f, 1.5f, 4.5f)
   )

   GroupColumnBarChart(
       chartData = chartData,
       onBarClicked = { (category, value) ->
           println("Bar clicked in $category with value $value")
       }
   )
   ```

   🎨 With this, you’ll have a basic grouped bar chart where each category contains multiple bars!

2. **Customize It Like a Pro**:
   Want more control over how the chart looks and behaves? Customize the axis, add animations, and tweak the layout!

   ```kotlin
   GroupColumnBarChart(
       chartData = chartData,
       groupBarChartConfig = BarChartDefaults.groupBarChartConfig().copy(
           colors = listOf(Color.Red, Color.Green, Color.Blue),
           width = 20.dp
       ),
       yAxisConfig = BarChartDefaults.yAxisConfig().copy(
           axisScaleCount = 5
       ),
       xAxisConfig = BarChartDefaults.xAxisConfig().copy(
           textStyle = TextStyle(color = Color.Black, fontSize = 12.sp),
           isAxisScaleEnabled = true
       ),
       enableGridLines = true,
       enableAnimation = true
   )
   ```

3. **Interactivity**:
   This component allows developers to easily add interactive elements like pop-ups and bar click actions. Enable pop-ups for more detailed data when users click a specific bar:

   ```kotlin
   GroupColumnBarChart(
       chartData = chartData,
       popUpConfig = BarChartDefaults.popUpConfig().copy(enableBarPopUp = true),
       onBarClicked = { (category, value) ->
           // Show a custom pop-up or perform any action
       }
   )
   ```

4. **Make the X-axis Stand Out**:
   Rotate the X-axis labels for better readability when you have long category names!

   ```kotlin
   GroupColumnBarChart(
       chartData = chartData,
       enableTextRotate = true,
       textRotateAngle = -45f
   )
   ```


## Default Values via BarChartDefaults

JetCo makes things easier with the [BarChartDefaults](/guide/jetco-ui/Bar%20Chart/config/BarChartDefaults) class, which provides default values for many parameters so you don't have to set everything manually. If you want to get started quickly, you can rely on these defaults and customize only what’s necessary.

For example, the following code uses the default configuration for bars, X-axis, Y-axis, and pop-ups:

```kotlin
ColumnBarChart(
    chartData = mapOf(
       "Category 1" to listOf(4.5f, 3.0f, 2.0f),
       "Category 2" to listOf(5.0f, 2.5f, 3.5f),
       "Category 3" to listOf(4.0f, 1.5f, 4.5f)
    )
)
```

- 🎨 **Bar Appearance**: Default height, width, shape, and color are set using [BarChartDefaults.groupBarChartConfig()](/guide/jetco-ui/Bar%20Chart/config/BarChartDefaults/#group-bar-chart-config).
- 📊 **Axes**: The X-axis and Y-axis configurations are handled by [BarChartDefaults.xAxisConfig()](/guide/jetco-ui/Bar%20Chart/config/BarChartDefaults/#x-axis-config) and [BarChartDefaults.yAxisConfig()](/guide/jetco-ui/Bar%20Chart/config/BarChartDefaults/#y-axis-config), respectively.
- 💥 **Pop-ups**: If you don't need custom pop-ups, the default configuration from [BarChartDefaults.popUpConfig()](/guide/jetco-ui/Bar%20Chart/config/BarChartDefaults/#pop-up-config-surprise) is ready to go.

---

!!! info annotate "Not sure how to use GroupColumnBarChart? 🧐"
    Explore the detailed sample code and implementation of `GroupColumnBarChart` in the [Sample](/sample/jetco-ui/#3-group-column-bar-chart) section.

!!! tip annotate "🚀 Pro Tips"  
    - **Scrollable Chart**: If your categories exceed the screen width, enable scrolling using `scrollEnable = true`. It automatically lets users scroll horizontally to see all data points.
    - **Pop-up Details**: Customize the pop-up for bars and X-axis labels to give users more context when they hover or click on them.
    - **Smooth Animations**: Add engaging animations to your chart for a smoother user experience! (Tip: animation delays can help create a cascading effect when the chart loads.)

---

Enjoy creating amazing grouped bar charts with `GroupColumnBarChart()`! Go ahead and give it a spin in your next data-driven project. 📊🎨