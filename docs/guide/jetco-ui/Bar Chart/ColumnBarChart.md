# **ColumnBarChart**

The `ColumnBarChart()` function is your go-to for creating stunning, customizable column bar charts with JetCo! It allows you to represent data with vertical bars, supports animations, grid lines, interactive pop-ups, and more. The chart is super flexible, giving you tons of options to tweak its look and feel. Let's dive in! 🚀


## Parameters

| Parameter               | Type                                   | Default                                | Description                                                                 |
|-------------------------|----------------------------------------|----------------------------------------|-----------------------------------------------------------------------------|
| `modifier`               | `Modifier`                             | `Modifier`                             | Modifier for the entire chart layout.                                       |
| `chartData`              | `Map<String, Float>`                   | `-`                                    | Data for the chart, where each key is an X-axis label and the value is the bar height. |
| `barChartConfig`         | `BarChartConfig`                       | `BarChartDefaults.columnBarChartConfig()` | Customize the bars' appearance (color, shape, etc.).                       |
| `yAxisConfig`            | `YAxisConfig`                          | `BarChartDefaults.yAxisConfig()`       | Y-axis scale, labels, and line configuration.                              |
| `xAxisConfig`            | `XAxisConfig`                          | `BarChartDefaults.xAxisConfig()`       | X-axis scale, labels, and line configuration.                              |
| `popUpConfig`            | `PopUpConfig`                          | `BarChartDefaults.popUpConfig()`       | Configure pop-ups for interacting with bars and labels.                    |
| `gridLineStyle`          | `GridLineStyle`                        | `BarChartDefaults.gridLineStyle()`     | Style for the grid lines behind the bars.                                  |
| `maxBarValue`            | `Float?`                               | `null`                                 | The maximum value for scaling the bars. If null, the highest value in `chartData` is used. |
| `enableAnimation`        | `Boolean`                              | `true`                                 | Whether to animate the bars when they load.                                |
| `enterAnimation`         | `EnterTransition`                      | `BarChartDefaults.enterTransitionVertically` | Animation for bars entering the screen.                                    |
| `exitAnimation`          | `ExitTransition`                       | `shrinkVertically()`                   | Animation for bars exiting the screen.                                     |
| `maxTextLengthXAxis`     | `Int`                                  | `6`                                    | Maximum length of X-axis label text (will be truncated with "..").          |
| `enableTextRotate`       | `Boolean`                              | `true`                                 | Whether to rotate the X-axis label text.                                   |
| `textRotateAngle`        | `Float`                                | `-60f`                                 | Rotation angle for X-axis labels.                                          |
| `enableGridLines`        | `Boolean`                              | `true`                                 | Whether to display grid lines.                                             |
| `scrollEnable`           | `Boolean`                              | `true`                                 | Enable or disable horizontal scrolling of the chart.                       |
| `onBarClicked`           | `((Pair<String, Float>) -> Unit)?`      | `null`                                 | Callback when a bar is clicked, passing the bar's label and value.         |
| `onXAxisLabelClicked`    | `((Pair<String, Float>) -> Unit)?`      | `null`                                 | Callback when an X-axis label is clicked.                                  |

## How to Use 👩‍💻

To create a bar chart, pass your data and customize the chart using the configuration options. It's easy—just provide the data, tweak the look, and watch the magic happen! ✨

Here's a simple usage example:

```kotlin
ColumnBarChart(
    chartData = mapOf("Mon" to 10f, "Tue" to 15f, "Wed" to 25f), // Your data
    enableTextRotate = true, // Rotate the X-axis labels for better readability
    onBarClicked = { bar -> println("You clicked on ${bar.first} with value ${bar.second}") } // Handle bar clicks
)
```

## Default Values via BarChartDefaults

JetCo makes things easier with the [BarChartDefaults](/guide/jetco-ui/Bar%20Chart/config/BarChartDefaults) class, which provides default values for many parameters so you don't have to set everything manually. If you want to get started quickly, you can rely on these defaults and customize only what’s necessary.

For example, the following code uses the default configuration for bars, X-axis, Y-axis, and pop-ups:

```kotlin
ColumnBarChart(
    chartData = mapOf("Jan" to 50f, "Feb" to 70f, "Mar" to 65f)
)
```

- 🎨 **Bar Appearance**: Default height, width, shape, and color are set using [BarChartDefaults.columnBarChartConfig()](/guide/jetco-ui/Bar%20Chart/config/BarChartDefaults/#column-bar-chart-config).
- 📊 **Axes**: The X-axis and Y-axis configurations are handled by [BarChartDefaults.xAxisConfig()](/guide/jetco-ui/Bar%20Chart/config/BarChartDefaults/#x-axis-config) and [BarChartDefaults.yAxisConfig()](/guide/jetco-ui/Bar%20Chart/config/BarChartDefaults/#y-axis-config), respectively.
- 💥 **Pop-ups**: If you don't need custom pop-ups, the default configuration from [BarChartDefaults.popUpConfig()](/guide/jetco-ui/Bar%20Chart/config/BarChartDefaults/#pop-up-config-surprise) is ready to go.

## 🎨 Customization Example Using Configurations:

For those moments when you want to go beyond the default look and feel of your chart, you can step up your game by customizing every part of it! 💪 Below is an example of a fully tricked-out chart with all the bells and whistles.

```kotlin
ExtendedColumnBarChart(
    chartData = mapOf("Jan" to 50f, "Feb" to 60f, "Mar" to 80f), // Your data, your way!
    
    // 🟥 Bar Customization: Control the size, color, and shape of each bar
    barChartConfig = BarChartConfig(
        height = 200.dp,    // Tall bars, because why not?
        width = 40.dp,      // Make 'em wide!
        color = Color.Red,  // Red—bold and attention-grabbing!
        shape = RoundedCornerShape(8.dp) // Rounded corners for that smooth look 🧈
    ),
    
    // 📏 Y-Axis Customization: Scale, lines, and style to match your theme
    yAxisConfig = YAxisConfig(
        axisScaleCount = 5,          // Five scales along the Y-axis
        isAxisScaleEnabled = true,   // Show the scale because it matters!
        axisLineColor = Color.Gray,  // Keep those axis lines sleek and neutral
        axisLineWidth = 2.dp         // Make the axis line a bit thicker for visibility
    ),
    
    // 📐 X-Axis Customization: Make your labels and lines pop!
    xAxisConfig = XAxisConfig(
        isAxisLineEnabled = true,    // Show the X-axis line
        textStyle = TextStyle(
            color = Color.Blue,      // Make the labels blue 💙
            fontSize = 12.sp         // And just the right size
        ),
        axisLineColor = Color.Gray,  // Matching the Y-axis line color
        axisLineWidth = 2.dp         // Same thickness for a consistent feel
    ),
    
    // 🎈 Pop-Up Customization: Add interactive pop-ups when hovering over bars!
    popUpConfig = PopUpConfig(
        enableBarPopUp = true,       // Enable pop-ups for bars
        background = Color.White,    // Clean, white background for pop-up readability
        textStyle = TextStyle(
            color = Color.Black      // Black text to keep it sharp
        )
    ),
    
    // 🎬 Animations: Smooth transitions to keep your chart engaging
    enableAnimation = true,          // Enable animation because everything looks better with movement!
    enterAnimation = fadeIn(),       // Bars fade in with style
    exitAnimation = fadeOut(),       // And they fade out smoothly when needed
    
    // 📊 Grid Lines: Let’s keep those bars aligned!
    enableGridLines = true,          // Turn on grid lines for better reference
    gridLineStyle = GridLineStyle(
        color = Color.LightGray,     // Keep the grid lines subtle
        lineWidth = 1.dp             // Thin lines for a minimalist look
    ),
    
    // 🔠 Label and Rotation: Got longer labels? Rotate and fit them!
    maxTextLengthXAxis = 8,          // Truncate the labels if they exceed 8 characters
    enableTextRotate = true,         // Rotate the text for better space management
    textRotateAngle = -45f,          // Rotate it to a nice -45 degrees for readability

    // 🖱️ Interactivity: Let users click on bars and handle events!
    onBarClicked = { bar ->          // Click event handler for bars
        println("Clicked bar: ${bar.first}, value: ${bar.second}") // Simple console log
    }
)
```

---

## 🔍 Breaking Down the Magic✨

**🎨 Bar Customization:**  
- Use [BarChartConfig](/guide/jetco-ui/Bar%20Chart/config/BarChartConfig/?h=#barchartconfig) to **adjust the height**, **width**, **color**, and even the **shape** of your bars. Rounded corners, sharp edges, big, small—your call!  
- In this example, we’re rocking a bold red color, giving the bars a sleek, smooth look with rounded corners. 👌

**📏 Axis Customization:**  
- With [XAxisConfig](/guide/jetco-ui/Bar%20Chart/config/BarChartConfig/?h=#xaxisconfig) and [YAxisConfig](/guide/jetco-ui/Bar%20Chart/config/BarChartConfig/?h=#yaxisconfig), you have full control over **scaling**, **line styles**, and **label formatting**.  
- Set the number of Y-axis scales, decide whether the lines show up, and style those X-axis labels any way you like (hello, blue text! 💙).

**🎈 Pop-Up Customization:**  
- Let your bars **talk**! Configure pop-ups with [PopUpConfig](/guide/jetco-ui/Bar%20Chart/config/BarChartConfig/?h=#popupconfig) to display additional information when a user hovers or clicks. Perfect for deeper insights on each bar.  
- In this example, we’re keeping it clean with a **white background** and **black text** for readability.

**🎬 Animations:**  
- **Animations** are always a crowd-pleaser. Set your bars to **fade in** and **fade out** to add a bit of drama and interactivity to your chart.  
- It’s like rolling out the red carpet for your data. 🌟

**📊 Grid Lines:**  
- Add **grid lines** to give users a visual guide for comparing bar heights. You can fully customize the grid line **color** and **thickness** using [GridLineStyle](/guide/jetco-ui/Bar%20Chart/config/BarChartConfig/?h=#gridlinestyle).  
- Here, we’ve gone for a **light gray** color to keep things subtle and unobtrusive.

**🔠 Labels and Rotation:**  
- Have labels that are too long for your X-axis? No worries! You can **rotate** them for better fit and readability using `textRotateAngle`.  
- In this case, the labels are rotated **-45 degrees** to save space and improve the aesthetic. 📐

**🖱️ Interactivity:**  
- Lastly, make your bars clickable! You can assign a custom callback to handle what happens when a user clicks on a bar with `onBarClicked`.  
- In this example, we’re printing the **label and value** of the clicked bar to the console for easy debugging.  

---

## 🚀 Why Use Custom Configurations?

The [ExtendedColumnBarChart](/guide/jetco-ui/Bar%20Chart/ExtendedColumnBarChart/) is perfect for developers who want **full control** over their data visualizations. Whether it’s crafting stunning visual styles or adding complex interactivity, you can tailor everything to fit your exact needs. With custom bar shapes, axis configurations, animations, and more, you’ll always have the flexibility to create the perfect chart for your project.

- **Quick Setup:** Don’t want to dive into every detail? No problem! You can use the built-in defaults from [BarChartDefaults](/guide/jetco-ui/Bar%20Chart/config/BarChartDefaults/) to get a chart up and running in no time.
- **Advanced Use Cases:** Need to handle longer data labels? Want custom-designed bars and pop-ups? You got it! Every component can be customized to match your vision. 🔥

So, go ahead and let your charts shine with style, interactivity, and rich functionality. 🌟

!!! info annotate "Not sure how to use ColumnBarChart? 🧐"
    Explore the detailed sample code and implementation of `ColumnBarChart` in the [Sample](/sample/jetco-ui/#2-column-bar-chart) section.


!!! tip annotate "Advanced Customization: ExtendedColumnBarChart"
    If you want even **more** control over your bar chart's behavior and style, you should check out the [ExtendedColumnBarChart](/guide/jetco-ui/Bar%20Chart/ExtendedColumnBarChart/). This extended version offers extra customization for complex use cases where the default and basic configurations may not be enough.
    
    - **More Animations**: Customize how bars animate, not just when entering or exiting.
    - **Enhanced Styling**: Further fine-tune every part of the chart, including specific grid line behavior, custom bar shapes, and multi-level axis scales.
    - **Detailed Interaction**: Add multiple interaction points, tooltips, and advanced pop-ups for a richer user experience.

---

Enjoy creating beautiful, interactive bar charts with JetCo! If you have any questions or feedback, don't hesitate to reach out. Happy coding! 😎🎉