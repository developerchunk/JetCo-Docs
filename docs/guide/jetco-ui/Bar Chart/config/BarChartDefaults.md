# **Bar Chart Defaults**

## BarChartDefaults: Setting Up Like a Pro 🏗️📊

This documentation will guide you through the default configurations for JetCo-UI's Bar Chart components. No need to start from scratch—let BarChartDefaults handle it for you! 😎

## Enter Transition: Making an Entrance! 🎬

`BarChartDefaults.enterTransitionVertically` Because even bars deserve a grand entrance, right? With our default transition, bars expand vertically when they first appear. They’re not just data—they’re **dramatic data**. 🎭

| Parameter       | Type       | Default Value    | Description                                      |
|-----------------|------------|------------------|--------------------------------------------------|
| `enterTransitionVertically` | `EnterTransition` | `expandVertically` | The bars will slide into view like they're on the red carpet. 💃 |

## Column Bar Chart Config 🏛️

`BarChartDefaults.columnBarChartConfig()` Let’s get serious (but not too serious 😜). Here’s how you configure the default columns in your bar chart—clean, colorful, and totally customizable. Returns `ColumnBarChartConfig`.

| Parameter       | Type       | Default Value    | Description                                      |
|-----------------|------------|------------------|--------------------------------------------------|
| `color`         | `Color`    | `Color(0xFFEFB8C8)`| A soft, stylish color—because pinkish is the new black! 💖 |
| `height`        | `Dp`       | `200.dp`         | Height of each bar—tall enough to grab attention! 📏 |
| `width`         | `Dp`       | `20.dp`          | Width of each bar—just thick enough to make a statement. |
| `shape`         | `Shape`    | `RoundedCornerShape(8.dp)` | Rounded corners for that smooth finish. It’s all about those curves. 🍩 |

## Group Bar Chart Config 🎯

`BarChartDefaults.groupBarChartConfig()` Grouped bar charts: Like columns, but with friends! 🎉 Here's how you can make your grouped bars pop with color and style.  Returns `GroupBarChartConfig`.

| Parameter       | Type       | Default Value    | Description                                      |
|-----------------|------------|------------------|--------------------------------------------------|
| `colors`        | `List<Color>` | A colorful list of blues and purples 🌈 | The default color palette—because life’s too short for boring charts. 🎨 |
| `height`        | `Dp`       | `200.dp`         | Default height for each bar—because size *does* matter. 😉 |
| `width`         | `Dp`       | `20.dp`          | Bar width for that perfect group formation. |
| `shape`         | `Shape`    | `RoundedCornerShape(6.dp)` | Smooth, rounded corners to keep things easy on the eyes. 👁️ |
| `gapBetweenBar` | `Dp`       | `0.dp`           | How close the bars are—don’t worry, they like being next to each other. 👫 |
| `gapBetweenGroup` | `Dp`     | `20.dp`          | Distance between groups—because sometimes, even bars need personal space. 😅 |

## X-Axis Config 📏

`BarChartDefaults.xAxisConfig()` Ah, the good ol' X-axis. Your data would be lost without it. Here's how to give it some love with our default settings. Returns `XAxisConfig`.

| Parameter           | Type       | Default Value     | Description                                   |
|---------------------|------------|-------------------|-----------------------------------------------|
| `isAxisScaleEnabled`| `Boolean`  | `true`            | Should the scale be enabled? Of course—it’s the axis, after all! |
| `isAxisLineEnabled` | `Boolean`  | `true`            | You want lines? We’ve got lines. |
| `axisLineWidth`     | `Dp`       | `2.dp`            | A nice solid line, just thick enough to say, "I’m here, respect me." 💪 |
| `axisLineShape`     | `Shape`    | `RoundedCornerShape(3.dp)` | Rounded edges, because even axes need some style. ✨ |
| `axisLineColor`     | `Color`    | `Color.LightGray` | Light gray to keep things subtle, but strong. |
| `textStyle`         | `TextStyle`| `textStyle`       | The text style for those little numbers along the axis. |

## Y-Axis Config 📈

`BarChartDefaults.yAxisConfig()` Where would your bar chart be without the Y-axis? Floating in space, that’s where. Let’s ground those bars. Returns `YAxisConfig`.

| Parameter           | Type       | Default Value     | Description                                   |
|---------------------|------------|-------------------|-----------------------------------------------|
| `isAxisScaleEnabled`| `Boolean`  | `true`            | Enable that Y-axis scale so your bars know where to stop. 🛑 |
| `isAxisLineEnabled` | `Boolean`  | `true`            | Let the Y-axis stand tall with a solid line. |
| `axisLineWidth`     | `Dp`       | `2.dp`            | Width of the line—thick enough to guide the way. |
| `axisLineShape`     | `Shape`    | `RoundedCornerShape` | Shaping up nicely with rounded corners. |
| `axisLineColor`     | `Color`    | `Color.LightGray` | Classic light gray—keeping it low-key. |
| `axisScaleCount`    | `Int`      | `4`               | Four divisions—because why complicate things? |
| `textStyle`         | `TextStyle`| `textStyle`       | Keeping the text style simple yet effective. |

## Grid Lines: Because Straight Lines Are Satisfying 🧩

`BarChartDefaults.gridLineStyle()` Grid lines add structure to your chart, and we all need a little more structure in our lives, right? 📐 Returns `GridLineStyle`.

| Parameter        | Type       | Default Value      | Description                                    |
|------------------|------------|--------------------|------------------------------------------------|
| `color`          | `Color`    | `Color.LightGray`  | A nice, neutral gray. Sophisticated and subtle. 🎨 |
| `strokeWidth`    | `Dp`       | `1.dp`             | Thin but effective—like your favorite sharpie. 🖊️ |
| `dashLength`     | `Dp`       | `8.dp`             | Dashes that are neither too long nor too short—Goldilocks style. 🐻 |
| `gapLength`      | `Dp`       | `8.dp`             | The perfect gap to match the dash. Everything in harmony. ✨ |
| `totalGridLines` | `Int`      | `4`                | Just enough lines to guide your eyes without overwhelming your senses. 👀 |
| `dashCap`        | `StrokeCap`| `StrokeCap.Square` | Nice square ends to keep things sharp and tidy. 🗂️ |

## Pop-up Config: Surprise! 🎉

`BarChartDefaults.popUpConfig()` Because sometimes you want to show off those bar values with a little flair. Pop-ups make it happen. Returns `PopUpConfig`.

| Parameter            | Type       | Default Value    | Description                                    |
|----------------------|------------|------------------|------------------------------------------------|
| `enableXAxisPopUp`    | `Boolean`  | `true`           | X-axis labels can pop up like "Hey, look at me!" 💬 |
| `enableBarPopUp`      | `Boolean`  | `true`           | Bars get their pop-ups too—sharing is caring! |
| `background`          | `Color`    | `Color(0xFFCCC2DC)` | Soft purplish-gray background to make those values pop. |
| `shape`              | `Shape`    | `RoundedCornerShape(25)` | Smooth rounded corners because sharp edges are so yesterday. |
| `textStyle`          | `TextStyle`| `textStyle`      | Same stylish text—because consistency is key. 🔑 |

---

And there you have it! Bar charts have never looked better—or more fun! 🥳 Ready to rock your data with some default magic? Let's go! 💥