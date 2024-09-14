# **PieChart**

The `PieChart()` composable is part of the JetCo-UI library, designed to provide a highly customizable pie chart visualization for Jetpack Compose. With support for animations, color customization, and interaction handling, it enables developers to easily integrate visually appealing pie charts into their Android applications.

---
<style>
  .image-container {
    flex: 1 1 calc(33.333% - 16px);
    max-width: 300px;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0.2, 0.2, 0.2, 0.2);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 16px;
    background-color: #FAFAFA;
    text-align: center; /* Centers the text below the image */
  }

  .image-container img {
    width: 100%;
    height: auto;
  }

  .image-container p {
    font-size: 14px;
    color: #555; /* Adjust text color if necessary */
    margin: 8px 0;
  }

  .image-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }

  /* Responsive design for smaller screens */
  @media (max-width: 768px) {
    .image-container {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
</style>

<div class="image-grid">
  <div class="image-container">
    <img src="https://github.com/developerchunk/JetCo/blob/main/assets/images/1.jpg?raw=true" alt="Pie Chart"/>
    <p>Pie Chart | Sample</p>
  </div>
</div>
---

## PieChart Function

### ⚙️ Function Signature

```kotlin
@Composable
fun PieChart(
    modifier: Modifier = Modifier,
    chartData: Map<String, Float>,
    pieChartConfig: PieChartConfig = PieChartDefaults.pieChartConfig(),
    pieChartAnimationConfig: PieChartAnimationConfig = PieChartDefaults.pieChartAnimationConfig(),
    chartItemModifier: Modifier = Modifier,
    chartItems: (@Composable (List<PieChartEntry>) -> Unit)? = null,
    onItemClick: ((PieChartEntry) -> Unit)? = null
)
```

### 📋 Parameters

| Parameter                     | Type                                          | Description                                                                                                           | Default Value                           |
|--------------------------------|-----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------|
| **modifier**                   | `Modifier`                                    | Modifier applied to the pie chart container. Controls the chart size, padding, etc.                                    | `Modifier`                              |
| **chartData**                  | `Map<String, Float>`                          | A map where each key represents a label and its corresponding value forms the data for each slice of the pie chart.    | **Required**                            |
| **pieChartConfig**             | `PieChartConfig`                              | Configuration object that defines chart properties like colors, radius, and label styles.                             | `PieChartDefaults.pieChartConfig()`     |
| **pieChartAnimationConfig**    | `PieChartAnimationConfig`                     | Configuration for animations such as duration and rotation.                                                           | `PieChartDefaults.pieChartAnimationConfig()` |
| **chartItemModifier**          | `Modifier`                                    | Modifier for the additional chart items like labels or values.                                                        | `Modifier`                              |
| **chartItems**                 | `@Composable ((List<PieChartEntry>) -> Unit)?` | A composable that renders the list of chart items (labels, values) for each pie slice.                                 | `null`                                  |
| **onItemClick**                | `((PieChartEntry) -> Unit)?`                  | Lambda triggered when a pie chart slice is clicked, providing the selected `PieChartEntry`.                            | `null`                                  |

---

## PieChartConfig

`PieChartConfig` is a data class that defines the visual aspects of the pie chart. It includes options like colors, stroke width, and text styles.

### 🎨 Default Configuration

You can easily get a default configuration using:

```kotlin
val pieChartConfig = PieChartDefaults.pieChartConfig()
```

---

## Example Usage

Here’s a sample implementation that demonstrates how to use the `PieChart` composable in your app:

```kotlin
val chartData = mapOf(
    "Food" to 40f,
    "Rent" to 30f,
    "Savings" to 20f,
    "Misc" to 10f
)

PieChart(
    modifier = Modifier.fillMaxSize(),
    chartData = chartData,
    pieChartConfig = PieChartDefaults.pieChartConfig(),
    pieChartAnimationConfig = PieChartDefaults.pieChartAnimationConfig(),
    onItemClick = { entry -> Log.d("PieChart", "Clicked on ${entry.name}") }
)
```

---

### 🛠️ Customizing Your PieChart

The [PieChartConfig](/guide/jetco-ui/Pie%20Chart/PieChartConfigurations/#piechartconfig) allows you to customize various properties of the chart. For example, you can customize the colors and the text style of the labels:

```kotlin
val customConfig = PieChartConfig(
    colorsList = listOf(Color.Red, Color.Blue, Color.Green, Color.Yellow),
    radius = 120.dp,
    labelTextStyle = TextStyle(
        fontSize = 16.sp,
        color = Color.Black
    )
)

PieChart(
    modifier = Modifier.size(300.dp),
    chartData = chartData,
    pieChartConfig = customConfig
)
```

---

### 🎥 Adding Animations

Use the [PieChartAnimationConfig](/guide/jetco-ui/Pie%20Chart/PieChartConfigurations/#piechartconfig) to animate the pie chart with different effects:

```kotlin
val animationConfig = PieChartAnimationConfig(
    animationDuration = 2000,
    animateRotation = true,
    numberOfRotations = 2
)

PieChart(
    modifier = Modifier.size(300.dp),
    chartData = chartData,
    pieChartAnimationConfig = animationConfig
)
```

---

## Exploring More

### ⚡ Event Handling

Want to track user interactions? The `onItemClick` parameter allows you to handle click events on each pie slice:

```kotlin
PieChart(
    chartData = chartData,
    onItemClick = { entry -> 
        // Handle the clicked slice data
        Log.d("PieChart", "Clicked on ${entry.name}, value: ${entry.value}")
    }
)
```

---

### 📊 Displaying Chart Items

You can pass a custom `chartItems` composable to display a list of items representing the pie chart data. This allows you to provide additional information, like labels and values, outside the chart itself:

```kotlin
PieChart(
    chartData = chartData,
    chartItems = { items -> 
        Column {
            items.forEach { item ->
                Text(text = "${item.name}: ${item.value}")
            }
        }
    }
)
```

---
!!! note annotate "Check out [Sample](/sample/jetco-ui/#1-pie-chart) usage of the PieChart."
---

The `PieChart` composable from JetCo-UI provides a robust, customizable solution for integrating pie charts into your Android applications. Whether you need simple visualizations or highly interactive charts, `PieChart` offers the flexibility and ease of use to meet your needs.

Explore more in the <a href="https://github.com/developerchunk/JetCo/tree/main/jetco/ui/src/main/java/com/developerstring/jetco/ui/charts/piechart" target="_blank" rel="noopener noreferrer">JetCo-UI GitHub Repository</a> and check out the comprehensive guides and samples to see how to make the most out of this powerful chart component!
