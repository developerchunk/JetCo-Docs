# **PieChartConfigurations**

This section covers the `PieChartConfig` and `PieChartAnimationConfig` data classes, which allow customization of the appearance, behavior, and animation of a Pie Chart component in JetCo-UI. 

## PieChartConfig

This class provides various parameters to control the visual and functional behavior of a Pie Chart. Customize your pie chart to fit your needs! Here are the options:

| Parameter Name           | Description |
|--------------------------|-------------|
| `radius: Dp`             | Defines the size of the pie chart. Bigger radius = bigger pie (but sadly, no extra calories)! |
| `thickness: Dp`          | Determines the width of each pie slice. Thin crust or thick? You decide! 😉 |
| `colorsList: List<Color>` | List of colors for the slices. If you run out of colors, we’ll just start repeating them. It's like a colorful carousel 🎠! |
| `enableChartItems: Boolean` | Enables or disables labels or chips on your pie chart. 🍕 Toggle this to show or hide toppings! |
| `isChartItemScrollEnable: Boolean` | Enables or disables scrolling of chart items when they overflow. No more squishing too many items in a small space! |
| `textStyle: TextStyle`   | Defines the text style for labels and chips displayed inside the pie chart. Give your chart some pizzazz! ✨ |

<h3>Example Usage</h3>

Here’s how to use `PieChartConfig` to make your pie chart as sweet as you like:

```kotlin
PieChartConfig(
    radius = 150.dp,
    thickness = 25.dp,
    colorsList = listOf(Color.Red, Color.Blue, Color.Green), 
    enableChartItems = true,
    isChartItemScrollEnable = false,
    textStyle = TextStyle(color = Color.Blue)
)
```

## PieChartAnimationConfig

Who doesn't love a dramatic entrance? Use `PieChartAnimationConfig` to add a bit of flair to how your pie chart appears. Customize the animation with these options:

| Parameter Name          | Description |
|-------------------------|-------------|
| `enableAnimation: Boolean` | A flag to enable or disable animations. Switch it on for a pie chart that glides into view like butter melting on toast! 🧈 |
| `animationDuration: Int`  | The length of the animation in milliseconds. Want a slow-motion effect? Increase the time! ⏱️ |
| `animationRotations: Int` | Number of rotations during the animation. Spin your pie like a DJ spinning records! 🎛️ |

<h3>Example Usage</h3>

Here’s how to add some cool animations to your pie chart:

```kotlin
PieChartAnimationConfig(
    enableAnimation = true,
    animationDuration = 1000,  // One second of spinning magic!
    animationRotations = 2     // Two full spins before the chart settles in.
)
```

---

!!! info annotate "Want a shortcut?"
    If you only want to tweak a few parameters and keep everything else default, check out the [PieChartDefaults](/guide/jetco-ui/Pie%20Chart/PieChartDefaults/). This will save you time and keep things simple!

---

!!! tip annotate "Additional Notes"
    - **Customization**: There are lots of ways to make your pie chart unique! 🎨 Don’t be afraid to experiment. It's like decorating a cake—mix and match the flavors (or colors) until you’re happy with the result! 
    - **Performance**: Animations and large data sets can make things a bit slow. ⚡ If you notice things lagging, try turning off animations or reducing the number of slices. Keep it smooth and buttery! 
