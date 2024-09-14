# **BarChart Models**

## BarChart Models: Data to Make Your Bars Stand Tall! 📊💪

Welcome to the world of `BarChartItem` and `GroupBarChartItem`—the two heroic data classes that make your bar charts come alive! Let's break it down in a fun way! 🎉

## BarChartItem: Single Bar—Big Impact 💥

Each bar in your column bar chart is like a little soldier in the data army. Meet the class that makes it all possible: `BarChartItem`.

| Parameter   | Type   | Description |
|-------------|--------|-------------|
| `name`      | `String` | The name or label of the bar—like naming your pet, but for data. 🐾 This will typically show up on the X-axis. |
| `value`     | `Float` | The raw, unfiltered value of the bar. It’s the number doing the heavy lifting. 💪 |
| `floatValue`| `Float` | The *normalized* value of the bar, expressed between 0 and 1. Because who doesn’t love seeing data in its neatest form? 🌈 |

---

### Extension Function: Mapping Like a Pro 🌐

`mapToBarChartItems()` Here's how you can transform a simple `Map` into a beautiful list of `BarChartItem`. This extension function takes your bar data and makes sure it’s normalized—so no bar feels left out. 😄

| Function Name            | Description |
|--------------------------|-------------|
| `mapToBarChartItems`      | Converts a `Map<String, Float>` (key-value pairs) into a list of `BarChartItem`. Each value is divided by `maxValue`, ensuring everything fits proportionally in the chart. No overachievers here—every bar plays fair! 🙃 |

```kotlin
fun Map<String, Float>.mapToBarChartItems(maxValue: Float): List<BarChartItem> =
    mapValues { (key, value) ->
        BarChartItem(
            name = key,
            value = value,
            floatValue = (value / maxValue)
        )
    }.values.toList()
```

- **`maxValue`**: The big boss 🦸‍♂️—the maximum value among all bars. It sets the scale for all other bars, so they fall in line like good data soldiers. 🪖

---

## GroupBarChartItem: Teamwork Makes the Dream Work! 🏆

Now imagine you’ve got groups of bars working together. Enter `GroupBarChartItem`. It’s not just one bar showing off—it’s a team effort!

| Parameter   | Type           | Description |
|-------------|----------------|-------------|
| `name`      | `String`       | The name of the group of bars (X-axis label). It’s like the team name in your data Olympics! 🏅 |
| `barValues` | `List<BarValue>`| A list of bars within the group, each with its own raw and normalized values. Think of this as the team roster. ⚽ |

---

## BarValue: Power in Simplicity ⚡

The `BarValue` class represents an individual bar within a group. These bars don’t compete—they complement each other.

| Parameter   | Type   | Description |
|-------------|--------|-------------|
| `value`     | `Float` | The raw value of the bar—because even in groups, every bar stands strong! 💪 |
| `floatValue`| `Float` | The normalized value of the bar. This keeps the game fair by ensuring all bars are scaled relative to the largest one. It’s like a sports league where everyone’s the same height. 😂 |

---

### Extension Function: Group Mapping 101 🗺️

`mapToGroupBarChartItems()` Here’s how you can convert a `Map` into a list of `GroupBarChartItem`—complete with normalized values so your grouped bar charts look polished and professional. 👌

| Function Name                  | Description |
|---------------------------------|-------------|
| `mapToGroupBarChartItems`       | Converts a `Map<String, List<Float>>` into a list of `GroupBarChartItem`. For each group, we normalize its bars based on `maxValue`. Every team has a star, but we keep the scale fair! 🌟 |

```kotlin
fun Map<String, List<Float>>.mapToGroupBarChartItems(maxValue: Float): List<GroupBarChartItem> =
    mapValues { (key, value) ->
        GroupBarChartItem(
            name = key,
            barValues = value.map {
                BarValue(
                    value = it,
                    floatValue = (it / maxValue)
                )
            }
        )
    }.values.toList()
```

- **`maxValue`**: Again, the all-important *big boss*—the maximum value across all groups. It ensures every bar is a team player. 🏅

---

And there you have it—your guide to turning boring old numbers into exciting, proportional, and well-organized bar chart items! Whether you’re working with single bars or grouped bars, these classes and functions have your back. So go ahead, make those charts shine! 🌟

And remember, bar charts aren’t just a way to show data—they’re a way to impress your users. 😉