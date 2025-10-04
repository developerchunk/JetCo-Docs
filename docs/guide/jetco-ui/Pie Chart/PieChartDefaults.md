# **PieChartDefaults**

The `PieChartDefaults` object is like your best friend when working with Pie Charts in JetCo-UI. It provides some awesome default configurations, so you don’t have to sweat the small stuff—unless you really want to! 😉

Want to create a Pie Chart that looks sharp without digging into every detail? Or maybe you just want to tweak a thing or two? `PieChartDefaults` has your back with factory methods for creating [PieChartConfig](/guide/jetco-ui/Pie%20Chart/PieChartConfigurations/#piechartconfig) and [PieChartAnimationConfig](/guide/jetco-ui/Pie%20Chart/PieChartDefaults/#piechartanimationconfig).

Let’s dive in!

## PieChartConfig

The `pieChartConfig()` function helps you control the look and feel of your Pie Chart. It has some default values, but you can customize it if you're feeling fancy. Returns [PieChartConfig](/guide/jetco-ui/Pie%20Chart/PieChartConfigurations/#piechartconfig). Here's what you can tweak:

| Parameter Name           | Description |
|--------------------------|-------------|
| `radius: Dp`             | How big should your pie be? 🍕 Default: `75.dp` |
| `thickness: Dp`          | How thick do you like your slices? 😋 Default: `25.dp` |
| `colorsList: List<Color>`| Want some pretty colors? Default colors are already set for you. 🎨 |
| `enableChartItems: Boolean` | Show extra chart items like labels or legends. Default: `true` |
| `isChartItemScrollEnable: Boolean` | If you have *too many* items (nice problem to have), enable scrolling. Default: `false` |
| `textStyle: TextStyle`   | Customize the text style—font size, color, etc. Default: something sensible! 👍 |

<h3>Default Values</h3>

Here’s what happens if you let the defaults do their magic:

```kotlin
PieChartDefaults.pieChartConfig(
    radius = 75.dp,
    thickness = 25.dp,
    colorsList = defaultColorList, // A pre-made color palette, because who has time for that? 🎨
    enableChartItems = true,
    isChartItemScrollEnable = false,
    textStyle = TextStyle(
        fontSize = 14.sp,
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Normal,
        color = Color.Black
    )
)
```

<h3>Example Usage</h3>

Just change what you care about, leave the rest to defaults—easy peasy!

```kotlin
val customConfig = PieChartDefaults.pieChartConfig(
    radius = 100.dp,  
    thickness = 30.dp, 
    colorsList = listOf(Color.Cyan, Color.Magenta) 
)
```

## PieChartAnimationConfig

The `pieChartAnimationConfig()` function lets you add some pizzazz to your Pie Chart with animations. You control how it spins and dances (well, sort of). Returns [PieChartAnimationConfig](/guide/jetco-ui/Pie%20Chart/PieChartDefaults/#piechartanimationconfig).

| Parameter Name             | Description |
|----------------------------|-------------|
| `enableAnimation: Boolean`  | Want animation? Of course you do! Default: `true` 🎉 |
| `animationDuration: Int`    | How long should the animation take (in milliseconds)? Default: `1000`ms ⏳ |
| `animationRotations: Int`   | How many spins before it stops? Default: `11` (because why not?) 💫 |

<h3>Default Values</h3>

Here’s what the defaults do for you:

```kotlin
PieChartDefaults.pieChartAnimationConfig(
    enableAnimation = true,
    animationDuration = 1000,  // Enough time for a quick coffee ☕
    animationRotations = 11   // Like a ballerina doing pirouettes! 🩰
)
```

<h3>Example Usage</h3>

If you’re feeling a bit rebellious and want to slow things down:

```kotlin
val animationConfig = PieChartDefaults.pieChartAnimationConfig(
    animationDuration = 2000 // Now we're talking... slow and smooth 🐢
)
```

<h3>Example of PieChartDefaults in 'PieChart'</h3>

```kotlin
PieChart(
    modifier = Modifier.fillMaxWidth(),
    chartData = chartData,
    pieChartConfig = PieChartDefaults.pieChartConfig(
        radius = 30.dp,
        isChartItemScrollEnable = false
    ),
    pieChartAnimationConfig = PieChartDefaults.pieChartAnimationConfig(
        animationDuration = 2000
    )
)
```

!!! tip annotate "Additional Notes 💡" 
    - **Easy Customization**: With `PieChartDefaults`, you can skip the boring setup and get straight to the fun stuff! Just tweak what you need and leave the rest to the defaults. 🎯
    - **Flexibility**: Want to keep it simple? Use the defaults. Want to go all-in on customization? No problem! 💪
    - **Performance Tip**: If you’ve got a lot of slices or wild animations, your device might get a little warm. Keep an eye on performance and adjust as needed! 🔥

So, whether you’re going for a minimalist pie or one with all the bells and whistles, `PieChartDefaults` makes it easy to get it just right! 🎨🥧
