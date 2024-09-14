# **Extended Column Bar Chart**

The `ExtendedColumnBarChart` is like the superhero version of the regular [ColumnBarChart](/guide/jetco-ui/Bar%20Chart/ColumnBarChart/)—more powerful, customizable, and ready to save the day! 🦸‍♂️ It offers detailed control over each component, so you can fine-tune everything from bars and axes to pop-ups and user interactions, or just let [BarChartDefaults](/guide/jetco-ui/Bar%20Chart/config/BarChartDefaults/) do the heavy lifting for you. Either way, this chart has got your back!

## Parameters Overview 📋

Here's your all-star cast of parameters:

| Parameter               | Type                                   | Default                                | Description                                                                 |
|-------------------------|----------------------------------------|----------------------------------------|-----------------------------------------------------------------------------|
| `modifier`               | `Modifier`                             | `Modifier`                             | Apply a modifier to the chart container—because, why not? 🙃                 |
| `chartData`              | `Map<String, Float>`                   | `-`                                    | The data that makes this chart come to life. Think of it as the chart's breakfast. 🍳 |
| `barChartConfig`         | `BarChartConfig`                       | `BarChartDefaults.columnBarChartConfig()` | Dress up your bars with a full wardrobe of options. 💃                        |
| `yAxisConfig`            | `YAxisConfig`                          | `BarChartDefaults.yAxisConfig()`       | Set the stage for your Y-axis. Scale it, label it, or just make it look snazzy! 🎩  |
| `xAxisConfig`            | `XAxisConfig`                          | `BarChartDefaults.xAxisConfig()`       | Same deal for the X-axis. Short labels? Long ones? You decide! 📏             |
| `popUpConfig`            | `PopUpConfig`                          | `BarChartDefaults.popUpConfig()`       | Who doesn’t love a good pop-up? Give your users more info when they click! 💡 |
| `gridLineStyle`          | `GridLineStyle`                        | `BarChartDefaults.gridLineStyle()`     | Add some classy grid lines so your bars aren’t just floating in the void. 📊  |
| `maxBarValue`            | `Float?`                               | `null`                                 | Cap it like a boss: set the maximum bar value for better scaling. 🎛️          |
| `enableAnimation`        | `Boolean`                              | `true`                                 | Enable animations—because who doesn't love a dramatic entrance? 🎬            |
| `enterAnimation`         | `EnterTransition`                      | `BarChartDefaults.enterTransitionVertically` | Let your bars glide in with style! 🛼                                         |
| `exitAnimation`          | `ExitTransition`                       | `shrinkVertically()`                   | When it's time to go, make those bars leave with dignity. 🕴️                 |
| `maxTextLengthXAxis`     | `Int`                                  | `6`                                    | Short and sweet—truncate those long labels like a pro. ✂️                    |
| `enableTextRotate`       | `Boolean`                              | `true`                                 | Tired of horizontal text? Spin those labels! 🎡                               |
| `textRotateAngle`        | `Float`                                | `-60f`                                 | Spin it right round—set the rotation angle of your labels. 🌀                 |
| `enableGridLines`        | `Boolean`                              | `true`                                 | Add grid lines—because no chart should be without some boundaries. 🛠️        |
| `scrollEnable`           | `Boolean`                              | `true`                                 | Got too much data? Let your users scroll through it all! 📜                   |
| `onBarClicked`           | `((Pair<String, Float>) -> Unit)?`      | `null`                                 | Let users interact with your bars—trigger callbacks when they click! 🎯       |
| `onXAxisLabelClicked`    | `((Pair<String, Float>) -> Unit)?`      | `null`                                 | Same goes for X-axis labels—because we don’t discriminate. 🖱️                |
| `barDesign`              | `(@Composable (text: String) -> Unit)?` | `null`                                 | Feeling artsy? Go wild and design your own bars! 🎨                           |
| `gridLine`               | `(@Composable () -> Unit)?`            | `null`                                 | Want custom grid lines? Sure, why not? 🧩                                      |
| `barPopUp`               | `(@Composable (text: String) -> Unit)?` | `null`                                 | Want a unique bar pop-up? Go ahead and customize it like a pro. 🎈            |
| `labelPopUp`             | `(@Composable (text: String) -> Unit)?` | `null`                                 | Same goes for the X-axis label pop-up—customize it to your heart’s content. 🎁 |
| `yAxisScaleLabel`        | `(@Composable (value: String) -> Unit)?`| `null`                                 | Craft your own Y-axis labels and make your data stand out! 📊                |

---

## When to Use 🤔

So, when should you unleash the mighty `ExtendedColumnBarChart`? Here are a few telltale signs:

- You want your bars to look like they came straight out of an art gallery. 🖼️
- You need pop-ups that *pop*, not flop. 🎉
- You’ve got more data than your screen can handle and need that sweet horizontal scroll. 📜
- You crave some next-level animations that will make your charts dance. 💃🕺

## How to Use 👩‍💻

Using this beast is easy peasy. 🥳 Just provide your data, set a few configs (or don’t, we’ve got sensible defaults for you), and watch your chart come to life.

```kotlin
@Composable
fun ExtendedColumnBarChartExample() {
    val chartData = listOf(
        Pair("Test-1", 50f),
        Pair("Test-2", 80f),
        Pair("Test-3.beta", 30f),
        Pair("Test-4", 90f),
        Pair("Test-5", 45f),
    )
    
    ExtendedColumnBarChart(
        modifier = Modifier,
        chartData = chartData,
        maxTextLengthXAxis = 6, // Short and sweet!
        maxBarValue = 100f, // Set your bar heights here.
        yAxisScaleLabel = { value ->
            Card(
                colors = CardDefaults.cardColors(PurpleGrey80),
                shape = RoundedCornerShape(20)
            ) {
                Text(text = value) // Show off those Y-axis labels!
            }
        },
        barPopUp = { text ->
            PopUpLayout(text = text) // Let your bars speak for themselves.
        },
        labelPopUp = { text ->
            PopUpLayout(text = text) // Your X-axis labels need love too!
        },
        barDesign = { text ->
            val decimalFormat = DecimalFormat("##.##").format(text.toFloat())
            Card(
                modifier = Modifier.fillMaxSize(),
                colors = CardDefaults.cardColors(containerColor = Pink40),
                elevation = CardDefaults.elevatedCardElevation(defaultElevation = 20.dp)
            ) {
                Spacer(modifier = Modifier.height(10.dp))
                Text(
                    text = decimalFormat,
                    modifier = Modifier.rotate(-90f),
                    color = Color.White
                )
            }
        }
    )
}

@Composable
fun PopUpLayout(text: String) {
    Box(
        modifier = Modifier
            .clip(shape = RoundedCornerShape(100))
            .background(LightBlue)
    ) {
        Box(
            modifier = Modifier
                .padding(8.dp)
                .clip(shape = RoundedCornerShape(100))
                .background(UIBlue),
            contentAlignment = Alignment.Center
        ) {
            Text(
                modifier = Modifier.padding(5.dp),
                text = text,
                color = Color.White
            )
        }
    }
}
```

### Custom Bar Design 🎨

Want to make your bars *fabulous*? You can easily provide a custom `Composable` in the `barDesign` parameter. Think of it like giving your bars their own little fashion show! 💃👗

```kotlin
ExtendedColumnBarChart(
    chartData = mapOf("Apr" to 45f, "May" to 70f, "Jun" to 85f),
    barDesign = { barValue ->
        Text(
            text = "Value: $barValue",
            modifier = Modifier
                .background(Color.Green)
                .padding(8.dp)
        )
    }
)
```

### Custom Pop-Up Design 🎈

Who says pop-ups have to be boring? With `ExtendedColumnBarChart`, you can create pop-ups as unique as your data.

```kotlin
ExtendedColumnBarChart(
    chartData = mapOf("Q1" to 30f, "Q2" to 55f, "Q3" to 65f),
    barPopUp = { text ->
        Box(
            modifier = Modifier
                .background(Color.LightGray)
                .padding(8.dp)
        ) {
            Text(text = "Bar Value: $text")
        }
    }
)
```

!!! info "Customize Everything!"
You can also tweak the grid lines, X-axis labels, and Y-axis scale labels. The world is your oyster! 🦪

---

### Example with Default Values 🛠️

Don't feel like getting too fancy? No

 problem! You can let the defaults do the work.

```kotlin
ExtendedColumnBarChart(
    chartData = mapOf("Mon" to 15f, "Tue" to 25f, "Wed" to 35f)
)
```


By default, the chart will:

- Display bars with a default height, width, and color from [BarChartDefaults.columnBarChartConfig()](/guide/jetco-ui/Bar%20Chart/config/BarChartDefaults/#column-bar-chart-config).
- Use default axis configurations via [BarChartDefaults.xAxisConfig()](/guide/jetco-ui/Bar%20Chart/config/BarChartDefaults/#x-axis-config) and [BarChartDefaults.yAxisConfig()](/guide/jetco-ui/Bar%20Chart/config/BarChartDefaults/#y-axis-config).
- Show pop-ups when bars or labels are clicked, using the default pop-up configuration from [BarChartDefaults.popUpConfig()](/guide/jetco-ui/Bar%20Chart/config/BarChartDefaults/#pop-up-config-surprise).
- Show grid lines behind the bars using [BarChartDefaults.gridLineStyle()](/guide/jetco-ui/Bar%20Chart/config/BarChartDefaults/#grid-lines-because-straight-lines-are-satisfying).

### 🎨 Customization Example Using Configurations:

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

### 🔍 Breaking Down the Magic ✨

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

### 🚀 Why Use Custom Configurations?

The `ExtendedColumnBarChart` is perfect for developers who want **full control** over their data visualizations. Whether it’s crafting stunning visual styles or adding complex interactivity, you can tailor everything to fit your exact needs. With custom bar shapes, axis configurations, animations, and more, you’ll always have the flexibility to create the perfect chart for your project.

- **Quick Setup:** Don’t want to dive into every detail? No problem! You can use the built-in defaults from [BarChartDefaults](/guide/jetco-ui/Bar%20Chart/config/BarChartDefaults/) to get a chart up and running in no time.
- **Advanced Use Cases:** Need to handle longer data labels? Want custom-designed bars and pop-ups? You got it! Every component can be customized to match your vision. 🔥

!!! info annotate "Not sure how to use ExtendedColumnBarChart? 🧐"
    Explore the detailed sample code and implementation of `ExtendedColumnBarChart` in the [Sample](/sample/jetco-ui/#4-extended-column-bar-chart) section.

So, go ahead and let your charts shine with style, interactivity, and rich functionality. 🌟

---

Whether you're looking to build a sleek, stylish chart or just need something quick and functional, `ExtendedColumnBarChart` has you covered. So go on, unleash your creativity—and your charts will thank you! 🎨📊

---

Enjoy crafting your epic charts! Happy coding! 😎



Here's an enhanced and fun version of your "Customization Example using Configurations":

---