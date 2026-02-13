/**
 * JetCo API Reference Data
 * Complete reference for all public classes, configs, and defaults objects.
 * Includes actual source code, annotations, package names for both Android and KMP.
 */

const referenceData = {
  /* ══════════════════════════════════════════════════════
   *  PIE CHART
   * ══════════════════════════════════════════════════════ */
  PieChartConfig: {
    name: 'PieChartConfig',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Pie Chart',
    description: 'Configuration class for customizing the appearance and behavior of PieChart.',
    relatedComponent: 'pie-chart',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.piechart.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.ui.graphics.Color',
      ],
      sourceCode: `@Keep
@Stable
data class PieChartConfig(
    val radius: Float = 500f,
    val thickness: Float = 70f,
    val colorsList: List<Color> = emptyList(),
    val enableChartItems: Boolean = true,
    val isChartItemScrollEnable: Boolean = true,
    val textStyle: TextStyle = TextStyle(),
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.piechart.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.ui.graphics.Color',
      ],
      sourceCode: `@Stable
data class PieChartConfig(
    val radius: Float = 500f,
    val thickness: Float = 70f,
    val colorsList: List<Color> = emptyList(),
    val enableChartItems: Boolean = true,
    val isChartItemScrollEnable: Boolean = true,
    val textStyle: TextStyle = TextStyle(),
)`,
    },
    properties: [
      { name: 'radius', type: 'Float', default: '500f', description: 'Radius of the pie chart in pixels.' },
      { name: 'thickness', type: 'Float', default: '70f', description: 'Thickness of the pie chart ring (donut width).' },
      { name: 'colorsList', type: 'List<Color>', default: 'emptyList()', description: 'List of colors applied to each pie slice. If empty, default palette is used.' },
      { name: 'enableChartItems', type: 'Boolean', default: 'true', description: 'Whether to display the legend items below the chart.' },
      { name: 'isChartItemScrollEnable', type: 'Boolean', default: 'true', description: 'Whether the legend items are scrollable when they overflow.' },
      { name: 'textStyle', type: 'TextStyle', default: 'TextStyle()', description: 'Text style applied to legend item labels.' },
    ],
  },

  PieChartAnimationConfig: {
    name: 'PieChartAnimationConfig',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Pie Chart',
    description: 'Configuration for pie chart entry and rotation animations.',
    relatedComponent: 'pie-chart',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.piechart.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
      ],
      sourceCode: `@Keep
@Stable
data class PieChartAnimationConfig(
    val enableAnimation: Boolean = true,
    val animationDuration: Int = 800,
    val animationRotations: Float = 1f,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.piechart.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
      ],
      sourceCode: `@Stable
data class PieChartAnimationConfig(
    val enableAnimation: Boolean = true,
    val animationDuration: Int = 800,
    val animationRotations: Float = 1f,
)`,
    },
    properties: [
      { name: 'enableAnimation', type: 'Boolean', default: 'true', description: 'Whether the pie chart animates when first drawn.' },
      { name: 'animationDuration', type: 'Int', default: '800', description: 'Duration of the animation in milliseconds.' },
      { name: 'animationRotations', type: 'Float', default: '1f', description: 'Number of full rotations during the animation.' },
    ],
  },

  PieChartEntry: {
    name: 'PieChartEntry',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Pie Chart',
    description: 'Represents a single slice entry for the PieChart.',
    relatedComponent: 'pie-chart',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.piechart.config',
      annotations: [],
      imports: [
        'import androidx.compose.ui.graphics.Color',
      ],
      sourceCode: `data class PieChartEntry(
    val name: String,
    val value: Float,
    val color: Color,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.piechart.config',
      annotations: [],
      imports: [
        'import androidx.compose.ui.graphics.Color',
      ],
      sourceCode: `data class PieChartEntry(
    val name: String,
    val value: Float,
    val color: Color,
)`,
    },
    properties: [
      { name: 'name', type: 'String', default: '—', description: 'Display name of the pie slice (shown in legend).' },
      { name: 'value', type: 'Float', default: '—', description: 'Numeric value of the slice (determines arc size).' },
      { name: 'color', type: 'Color', default: '—', description: 'Color of the slice.' },
    ],
  },

  PieChartDefaults: {
    name: 'PieChartDefaults',
    kind: 'object',
    category: 'Charts',
    subcategory: 'Pie Chart',
    description: 'Provides default configurations for PieChart via factory methods.',
    relatedComponent: 'pie-chart-defaults',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.piechart.config',
      annotations: [],
      imports: [],
      sourceCode: `object PieChartDefaults {
    fun pieChartConfig(
        radius: Float = 500f,
        thickness: Float = 70f,
        colorsList: List<Color> = emptyList(),
        enableChartItems: Boolean = true,
        isChartItemScrollEnable: Boolean = true,
        textStyle: TextStyle = TextStyle(),
    ): PieChartConfig = PieChartConfig(
        radius = radius,
        thickness = thickness,
        colorsList = colorsList,
        enableChartItems = enableChartItems,
        isChartItemScrollEnable = isChartItemScrollEnable,
        textStyle = textStyle,
    )

    fun pieChartAnimationConfig(
        enableAnimation: Boolean = true,
        animationDuration: Int = 800,
        animationRotations: Float = 1f,
    ): PieChartAnimationConfig = PieChartAnimationConfig(
        enableAnimation = enableAnimation,
        animationDuration = animationDuration,
        animationRotations = animationRotations,
    )
}`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.piechart.config',
      annotations: [],
      imports: [],
      sourceCode: `object PieChartDefaults {
    fun pieChartConfig(
        radius: Float = 500f,
        thickness: Float = 70f,
        colorsList: List<Color> = emptyList(),
        enableChartItems: Boolean = true,
        isChartItemScrollEnable: Boolean = true,
        textStyle: TextStyle = TextStyle(),
    ): PieChartConfig = PieChartConfig(
        radius = radius,
        thickness = thickness,
        colorsList = colorsList,
        enableChartItems = enableChartItems,
        isChartItemScrollEnable = isChartItemScrollEnable,
        textStyle = textStyle,
    )

    fun pieChartAnimationConfig(
        enableAnimation: Boolean = true,
        animationDuration: Int = 800,
        animationRotations: Float = 1f,
    ): PieChartAnimationConfig = PieChartAnimationConfig(
        enableAnimation = enableAnimation,
        animationDuration = animationDuration,
        animationRotations = animationRotations,
    )
}`,
    },
    properties: [],
    methods: [
      { name: 'pieChartConfig()', returns: 'PieChartConfig', description: 'Creates a PieChartConfig with the given parameters.' },
      { name: 'pieChartAnimationConfig()', returns: 'PieChartAnimationConfig', description: 'Creates a PieChartAnimationConfig with the given parameters.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  BAR CHART
   * ══════════════════════════════════════════════════════ */
  BarChartConfig: {
    name: 'BarChartConfig',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Bar Chart',
    description: 'Configures individual bar appearance in ColumnBarChart and ExtendedColumnBarChart.',
    relatedComponent: 'column-bar-chart',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.barchart.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.unit.Dp',
        'import androidx.compose.foundation.shape.RoundedCornerShape',
      ],
      sourceCode: `@Keep
@Stable
data class BarChartConfig(
    val color: Color = Color(0xFF6C5CE7),
    val height: Dp = 200.dp,
    val width: Dp = 30.dp,
    val shape: Shape = RoundedCornerShape(topStart = 6.dp, topEnd = 6.dp),
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.barchart.config',
      annotations: [],
      imports: [
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.unit.Dp',
        'import androidx.compose.foundation.shape.RoundedCornerShape',
      ],
      sourceCode: `data class BarChartConfig(
    val color: Color = Color(0xFF6C5CE7),
    val height: Dp = 200.dp,
    val width: Dp = 30.dp,
    val shape: Shape = RoundedCornerShape(topStart = 6.dp, topEnd = 6.dp),
)`,
    },
    properties: [
      { name: 'color', type: 'Color', default: 'Color(0xFF6C5CE7)', description: 'Fill color for the bar.' },
      { name: 'height', type: 'Dp', default: '200.dp', description: 'Maximum height of the bar container.' },
      { name: 'width', type: 'Dp', default: '30.dp', description: 'Width of each bar.' },
      { name: 'shape', type: 'Shape', default: 'RoundedCornerShape(topStart=6.dp, topEnd=6.dp)', description: 'Shape of each bar (supports rounded corners).' },
    ],
  },

  GroupBarChartConfig: {
    name: 'GroupBarChartConfig',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Bar Chart',
    description: 'Configures bar groups in GroupColumnBarChart.',
    relatedComponent: 'group-column-bar-chart',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.barchart.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.unit.Dp',
        'import androidx.compose.foundation.shape.RoundedCornerShape',
      ],
      sourceCode: `@Keep
@Stable
data class GroupBarChartConfig(
    val colors: List<Color> = emptyList(),
    val height: Dp = 200.dp,
    val width: Dp = 20.dp,
    val shape: Shape = RoundedCornerShape(topStart = 6.dp, topEnd = 6.dp),
    val gapBetweenBar: Dp = 4.dp,
    val gapBetweenGroup: Dp = 16.dp,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.barchart.config',
      annotations: [],
      imports: [
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.unit.Dp',
        'import androidx.compose.foundation.shape.RoundedCornerShape',
      ],
      sourceCode: `data class GroupBarChartConfig(
    val colors: List<Color> = emptyList(),
    val height: Dp = 200.dp,
    val width: Dp = 20.dp,
    val shape: Shape = RoundedCornerShape(topStart = 6.dp, topEnd = 6.dp),
    val gapBetweenBar: Dp = 4.dp,
    val gapBetweenGroup: Dp = 16.dp,
)`,
    },
    properties: [
      { name: 'colors', type: 'List<Color>', default: 'emptyList()', description: 'Colors for each bar in a group (cycles if fewer colors than bars).' },
      { name: 'height', type: 'Dp', default: '200.dp', description: 'Maximum height of the bar container.' },
      { name: 'width', type: 'Dp', default: '20.dp', description: 'Width of each individual bar in the group.' },
      { name: 'shape', type: 'Shape', default: 'RoundedCornerShape(topStart=6.dp, topEnd=6.dp)', description: 'Shape of each bar.' },
      { name: 'gapBetweenBar', type: 'Dp', default: '4.dp', description: 'Gap between bars within a group.' },
      { name: 'gapBetweenGroup', type: 'Dp', default: '16.dp', description: 'Gap between groups.' },
    ],
  },

  XAxisConfig: {
    name: 'XAxisConfig',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Bar Chart',
    description: 'Configures the X-axis for bar charts, including scale labels and axis line.',
    relatedComponent: 'column-bar-chart',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.barchart.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Keep
@Stable
data class XAxisConfig(
    val isAxisScaleEnabled: Boolean = true,
    val isAxisLineEnabled: Boolean = true,
    val axisLineWidth: Dp = 2.dp,
    val axisLineShape: Shape = RoundedCornerShape(50),
    val axisLineColor: Color = Color.LightGray,
    val textStyle: TextStyle = TextStyle(),
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.barchart.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Stable
data class XAxisConfig(
    val isAxisScaleEnabled: Boolean = true,
    val isAxisLineEnabled: Boolean = true,
    val axisLineWidth: Dp = 2.dp,
    val axisLineShape: Shape = RoundedCornerShape(50),
    val axisLineColor: Color = Color.LightGray,
    val textStyle: TextStyle = TextStyle(),
)`,
    },
    properties: [
      { name: 'isAxisScaleEnabled', type: 'Boolean', default: 'true', description: 'Whether X-axis scale labels are displayed.' },
      { name: 'isAxisLineEnabled', type: 'Boolean', default: 'true', description: 'Whether the X-axis line is drawn.' },
      { name: 'axisLineWidth', type: 'Dp', default: '2.dp', description: 'Thickness of the X-axis line.' },
      { name: 'axisLineShape', type: 'Shape', default: 'RoundedCornerShape(50)', description: 'Shape of the axis line.' },
      { name: 'axisLineColor', type: 'Color', default: 'Color.LightGray', description: 'Color of the axis line.' },
      { name: 'textStyle', type: 'TextStyle', default: 'TextStyle()', description: 'Text style for X-axis labels.' },
    ],
  },

  YAxisConfig: {
    name: 'YAxisConfig',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Bar Chart',
    description: 'Configures the Y-axis for bar charts, including scale count, prefix/postfix.',
    relatedComponent: 'column-bar-chart',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.barchart.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Keep
@Stable
data class YAxisConfig(
    val isAxisScaleEnabled: Boolean = true,
    val isAxisLineEnabled: Boolean = true,
    val axisLineWidth: Dp = 2.dp,
    val axisLineShape: Shape = RoundedCornerShape(50),
    val axisLineColor: Color = Color.LightGray,
    val axisScaleCount: Int = 5,
    val textStyle: TextStyle = TextStyle(),
    val textPrefix: String = "",
    val textPostfix: String = "",
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.barchart.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Stable
data class YAxisConfig(
    val isAxisScaleEnabled: Boolean = true,
    val isAxisLineEnabled: Boolean = true,
    val axisLineWidth: Dp = 2.dp,
    val axisLineShape: Shape = RoundedCornerShape(50),
    val axisLineColor: Color = Color.LightGray,
    val axisScaleCount: Int = 5,
    val textStyle: TextStyle = TextStyle(),
    val textPrefix: String = "",
    val textPostfix: String = "",
)`,
    },
    properties: [
      { name: 'isAxisScaleEnabled', type: 'Boolean', default: 'true', description: 'Whether Y-axis scale labels are displayed.' },
      { name: 'isAxisLineEnabled', type: 'Boolean', default: 'true', description: 'Whether the Y-axis line is drawn.' },
      { name: 'axisLineWidth', type: 'Dp', default: '2.dp', description: 'Thickness of the Y-axis line.' },
      { name: 'axisLineShape', type: 'Shape', default: 'RoundedCornerShape(50)', description: 'Shape of the axis line.' },
      { name: 'axisLineColor', type: 'Color', default: 'Color.LightGray', description: 'Color of the axis line.' },
      { name: 'axisScaleCount', type: 'Int', default: '5', description: 'Number of ticks on the Y-axis.' },
      { name: 'textStyle', type: 'TextStyle', default: 'TextStyle()', description: 'Text style for Y-axis labels.' },
      { name: 'textPrefix', type: 'String', default: '""', description: 'Prefix added before each Y-axis label (e.g., "$").' },
      { name: 'textPostfix', type: 'String', default: '""', description: 'Postfix added after each Y-axis label (e.g., "k").' },
    ],
  },

  GridLineStyle: {
    name: 'GridLineStyle',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Bar Chart',
    description: 'Configures grid line appearance for bar charts.',
    relatedComponent: 'column-bar-chart',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.barchart.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.StrokeCap',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Keep
@Stable
data class GridLineStyle(
    val color: Color = Color.LightGray.copy(alpha = 0.5f),
    val strokeWidth: Dp = 1.dp,
    val dashLength: Dp = 8.dp,
    val gapLength: Dp = 4.dp,
    val totalGridLines: Int = 5,
    val dashCap: StrokeCap = StrokeCap.Round,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.barchart.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.StrokeCap',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Stable
data class GridLineStyle(
    val color: Color = Color.LightGray.copy(alpha = 0.5f),
    val strokeWidth: Dp = 1.dp,
    val dashLength: Dp = 8.dp,
    val gapLength: Dp = 4.dp,
    val totalGridLines: Int = 5,
    val dashCap: StrokeCap = StrokeCap.Round,
)`,
    },
    properties: [
      { name: 'color', type: 'Color', default: 'Color.LightGray.copy(alpha=0.5f)', description: 'Color of the grid lines.' },
      { name: 'strokeWidth', type: 'Dp', default: '1.dp', description: 'Thickness of grid lines.' },
      { name: 'dashLength', type: 'Dp', default: '8.dp', description: 'Length of each dash segment.' },
      { name: 'gapLength', type: 'Dp', default: '4.dp', description: 'Gap between dashes.' },
      { name: 'totalGridLines', type: 'Int', default: '5', description: 'Total number of horizontal grid lines.' },
      { name: 'dashCap', type: 'StrokeCap', default: 'StrokeCap.Round', description: 'Cap style for each dash end.' },
    ],
  },

  PopUpConfig: {
    name: 'PopUpConfig',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Bar Chart',
    description: 'Configures the pop-up tooltip for bar charts on tap/click.',
    relatedComponent: 'column-bar-chart',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.barchart.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.foundation.shape.RoundedCornerShape',
      ],
      sourceCode: `@Keep
@Stable
data class PopUpConfig(
    val enableXAxisPopUp: Boolean = false,
    val enableBarPopUp: Boolean = false,
    val background: Color = Color.White,
    val shape: Shape = RoundedCornerShape(8.dp),
    val textStyle: TextStyle = TextStyle(),
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.barchart.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.foundation.shape.RoundedCornerShape',
      ],
      sourceCode: `@Stable
data class PopUpConfig(
    val enableXAxisPopUp: Boolean = false,
    val enableBarPopUp: Boolean = false,
    val background: Color = Color.White,
    val shape: Shape = RoundedCornerShape(8.dp),
    val textStyle: TextStyle = TextStyle(),
)`,
    },
    properties: [
      { name: 'enableXAxisPopUp', type: 'Boolean', default: 'false', description: 'Show a pop-up when an X-axis label is tapped.' },
      { name: 'enableBarPopUp', type: 'Boolean', default: 'false', description: 'Show a pop-up when a bar is tapped.' },
      { name: 'background', type: 'Color', default: 'Color.White', description: 'Background color of the pop-up.' },
      { name: 'shape', type: 'Shape', default: 'RoundedCornerShape(8.dp)', description: 'Shape of the pop-up container.' },
      { name: 'textStyle', type: 'TextStyle', default: 'TextStyle()', description: 'Text style for the pop-up label.' },
    ],
  },

  BarChartDefaults: {
    name: 'BarChartDefaults',
    kind: 'object',
    category: 'Charts',
    subcategory: 'Bar Chart',
    description: 'Provides factory methods for all bar chart configuration objects.',
    relatedComponent: 'bar-chart-defaults',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.barchart.config',
      annotations: [],
      imports: [],
      sourceCode: `object BarChartDefaults {
    fun columnBarChartConfig(...): BarChartConfig
    fun groupBarChartConfig(...): GroupBarChartConfig
    fun xAxisConfig(...): XAxisConfig
    fun yAxisConfig(...): YAxisConfig
    fun gridLineStyle(...): GridLineStyle
    fun popUpConfig(...): PopUpConfig
}`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.barchart.config',
      annotations: [],
      imports: [],
      sourceCode: `object BarChartDefaults {
    fun columnBarChartConfig(...): BarChartConfig
    fun groupBarChartConfig(...): GroupBarChartConfig
    fun xAxisConfig(...): XAxisConfig
    fun yAxisConfig(...): YAxisConfig
    fun gridLineStyle(...): GridLineStyle
    fun popUpConfig(...): PopUpConfig
}`,
    },
    properties: [],
    methods: [
      { name: 'columnBarChartConfig()', returns: 'BarChartConfig', description: 'Creates a BarChartConfig with default bar appearance.' },
      { name: 'groupBarChartConfig()', returns: 'GroupBarChartConfig', description: 'Creates a GroupBarChartConfig for grouped bar charts.' },
      { name: 'xAxisConfig()', returns: 'XAxisConfig', description: 'Creates an XAxisConfig with default axis settings.' },
      { name: 'yAxisConfig()', returns: 'YAxisConfig', description: 'Creates a YAxisConfig with default axis settings.' },
      { name: 'gridLineStyle()', returns: 'GridLineStyle', description: 'Creates a GridLineStyle with default dashed lines.' },
      { name: 'popUpConfig()', returns: 'PopUpConfig', description: 'Creates a PopUpConfig with default tooltip.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  LINE GRAPH
   * ══════════════════════════════════════════════════════ */
  LineGraphLineConfig: {
    name: 'LineGraphLineConfig',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Line Graph',
    description: 'Configuration for the line appearance in LineGraph and MultiLineGraph.',
    relatedComponent: 'line-graph',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.linegraph.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.StrokeCap',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Keep
@Stable
data class LineGraphLineConfig(
    val lineColor: Color = Color(0xFF6C5CE7),
    val lineWidth: Dp = 2.dp,
    val strokeCap: StrokeCap = StrokeCap.Round,
    val smoothCurve: Boolean = true,
    val curvature: Float = 0.3f,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.linegraph.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.StrokeCap',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Stable
data class LineGraphLineConfig(
    val lineColor: Color = Color(0xFF6C5CE7),
    val lineWidth: Dp = 2.dp,
    val strokeCap: StrokeCap = StrokeCap.Round,
    val smoothCurve: Boolean = true,
    val curvature: Float = 0.3f,
)`,
    },
    properties: [
      { name: 'lineColor', type: 'Color', default: 'Color(0xFF6C5CE7)', description: 'Color of the line.' },
      { name: 'lineWidth', type: 'Dp', default: '2.dp', description: 'Width/thickness of the line.' },
      { name: 'strokeCap', type: 'StrokeCap', default: 'StrokeCap.Round', description: 'Cap style at the end of each stroke.' },
      { name: 'smoothCurve', type: 'Boolean', default: 'true', description: 'Whether the line uses smooth Bezier curves.' },
      { name: 'curvature', type: 'Float', default: '0.3f', description: 'Curvature factor for Bezier interpolation (0..1).' },
    ],
  },

  LineGraphAreaFillConfig: {
    name: 'LineGraphAreaFillConfig',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Line Graph',
    description: 'Configures the filled area beneath the line in LineGraph.',
    relatedComponent: 'line-graph',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.linegraph.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Brush',
      ],
      sourceCode: `@Keep
@Stable
data class LineGraphAreaFillConfig(
    val enabled: Boolean = false,
    val brush: Brush? = null,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.linegraph.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Brush',
      ],
      sourceCode: `@Stable
data class LineGraphAreaFillConfig(
    val enabled: Boolean = false,
    val brush: Brush? = null,
)`,
    },
    properties: [
      { name: 'enabled', type: 'Boolean', default: 'false', description: 'Whether the area below the line is filled.' },
      { name: 'brush', type: 'Brush?', default: 'null', description: 'Brush used to fill the area. When null, a default gradient is used.' },
    ],
  },

  LineGraphPointConfig: {
    name: 'LineGraphPointConfig',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Line Graph',
    description: 'Configures data point indicators on the line graph.',
    relatedComponent: 'line-graph',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.linegraph.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Keep
@Stable
data class LineGraphPointConfig(
    val enabled: Boolean = true,
    val radius: Dp = 4.dp,
    val color: Color = Color(0xFF6C5CE7),
    val borderColor: Color = Color.White,
    val borderWidth: Dp = 2.dp,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.linegraph.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Stable
data class LineGraphPointConfig(
    val enabled: Boolean = true,
    val radius: Dp = 4.dp,
    val color: Color = Color(0xFF6C5CE7),
    val borderColor: Color = Color.White,
    val borderWidth: Dp = 2.dp,
)`,
    },
    properties: [
      { name: 'enabled', type: 'Boolean', default: 'true', description: 'Whether data point circles are drawn.' },
      { name: 'radius', type: 'Dp', default: '4.dp', description: 'Radius of each data point circle.' },
      { name: 'color', type: 'Color', default: 'Color(0xFF6C5CE7)', description: 'Fill color of the data point.' },
      { name: 'borderColor', type: 'Color', default: 'Color.White', description: 'Border color around the data point.' },
      { name: 'borderWidth', type: 'Dp', default: '2.dp', description: 'Width of the border stroke.' },
    ],
  },

  LineGraphXAxisConfig: {
    name: 'LineGraphXAxisConfig',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Line Graph',
    description: 'Configures X-axis for LineGraph (separate from bar chart XAxisConfig).',
    relatedComponent: 'line-graph',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.linegraph.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Keep
@Stable
data class LineGraphXAxisConfig(
    val isAxisScaleEnabled: Boolean = true,
    val isAxisLineEnabled: Boolean = true,
    val axisLineWidth: Dp = 2.dp,
    val axisLineShape: Shape = RoundedCornerShape(50),
    val axisLineColor: Color = Color.LightGray,
    val textStyle: TextStyle = TextStyle(),
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.linegraph.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Stable
data class LineGraphXAxisConfig(
    val isAxisScaleEnabled: Boolean = true,
    val isAxisLineEnabled: Boolean = true,
    val axisLineWidth: Dp = 2.dp,
    val axisLineShape: Shape = RoundedCornerShape(50),
    val axisLineColor: Color = Color.LightGray,
    val textStyle: TextStyle = TextStyle(),
)`,
    },
    properties: [
      { name: 'isAxisScaleEnabled', type: 'Boolean', default: 'true', description: 'Whether X-axis scale labels are shown.' },
      { name: 'isAxisLineEnabled', type: 'Boolean', default: 'true', description: 'Whether the X-axis line is drawn.' },
      { name: 'axisLineWidth', type: 'Dp', default: '2.dp', description: 'Thickness of the axis line.' },
      { name: 'axisLineShape', type: 'Shape', default: 'RoundedCornerShape(50)', description: 'Shape of the axis line.' },
      { name: 'axisLineColor', type: 'Color', default: 'Color.LightGray', description: 'Color of the axis line.' },
      { name: 'textStyle', type: 'TextStyle', default: 'TextStyle()', description: 'Text style for X-axis labels.' },
    ],
  },

  LineGraphYAxisConfig: {
    name: 'LineGraphYAxisConfig',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Line Graph',
    description: 'Configures Y-axis for LineGraph including prefix/postfix labels.',
    relatedComponent: 'line-graph',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.linegraph.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Keep
@Stable
data class LineGraphYAxisConfig(
    val isAxisScaleEnabled: Boolean = true,
    val isAxisLineEnabled: Boolean = true,
    val axisLineWidth: Dp = 2.dp,
    val axisLineShape: Shape = RoundedCornerShape(50),
    val axisLineColor: Color = Color.LightGray,
    val axisScaleCount: Int = 5,
    val textStyle: TextStyle = TextStyle(),
    val textPrefix: String = "",
    val textPostfix: String = "",
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.linegraph.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Stable
data class LineGraphYAxisConfig(
    val isAxisScaleEnabled: Boolean = true,
    val isAxisLineEnabled: Boolean = true,
    val axisLineWidth: Dp = 2.dp,
    val axisLineShape: Shape = RoundedCornerShape(50),
    val axisLineColor: Color = Color.LightGray,
    val axisScaleCount: Int = 5,
    val textStyle: TextStyle = TextStyle(),
    val textPrefix: String = "",
    val textPostfix: String = "",
)`,
    },
    properties: [
      { name: 'isAxisScaleEnabled', type: 'Boolean', default: 'true', description: 'Whether Y-axis scale labels are shown.' },
      { name: 'isAxisLineEnabled', type: 'Boolean', default: 'true', description: 'Whether the Y-axis line is drawn.' },
      { name: 'axisLineWidth', type: 'Dp', default: '2.dp', description: 'Thickness of the axis line.' },
      { name: 'axisLineShape', type: 'Shape', default: 'RoundedCornerShape(50)', description: 'Shape of the axis line.' },
      { name: 'axisLineColor', type: 'Color', default: 'Color.LightGray', description: 'Color of the axis line.' },
      { name: 'axisScaleCount', type: 'Int', default: '5', description: 'Number of tick marks on the Y-axis.' },
      { name: 'textStyle', type: 'TextStyle', default: 'TextStyle()', description: 'Text style for Y-axis labels.' },
      { name: 'textPrefix', type: 'String', default: '""', description: 'Prefix before each Y-axis label value.' },
      { name: 'textPostfix', type: 'String', default: '""', description: 'Postfix after each Y-axis label value.' },
    ],
  },

  LineGraphGridLineStyle: {
    name: 'LineGraphGridLineStyle',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Line Graph',
    description: 'Configures grid lines drawn behind the line graph.',
    relatedComponent: 'line-graph',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.linegraph.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.StrokeCap',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Keep
@Stable
data class LineGraphGridLineStyle(
    val color: Color = Color.LightGray.copy(alpha = 0.5f),
    val strokeWidth: Dp = 1.dp,
    val dashLength: Dp = 8.dp,
    val gapLength: Dp = 4.dp,
    val totalGridLines: Int = 5,
    val dashCap: StrokeCap = StrokeCap.Round,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.linegraph.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.StrokeCap',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Stable
data class LineGraphGridLineStyle(
    val color: Color = Color.LightGray.copy(alpha = 0.5f),
    val strokeWidth: Dp = 1.dp,
    val dashLength: Dp = 8.dp,
    val gapLength: Dp = 4.dp,
    val totalGridLines: Int = 5,
    val dashCap: StrokeCap = StrokeCap.Round,
)`,
    },
    properties: [
      { name: 'color', type: 'Color', default: 'Color.LightGray.copy(alpha=0.5f)', description: 'Color of grid lines.' },
      { name: 'strokeWidth', type: 'Dp', default: '1.dp', description: 'Thickness of grid lines.' },
      { name: 'dashLength', type: 'Dp', default: '8.dp', description: 'Length of each dash.' },
      { name: 'gapLength', type: 'Dp', default: '4.dp', description: 'Gap between dashes.' },
      { name: 'totalGridLines', type: 'Int', default: '5', description: 'Total number of horizontal grid lines.' },
      { name: 'dashCap', type: 'StrokeCap', default: 'StrokeCap.Round', description: 'Cap style for dash endpoints.' },
    ],
  },

  LineGraphPopUpConfig: {
    name: 'LineGraphPopUpConfig',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Line Graph',
    description: 'Configures the pop-up tooltip for line graph data points.',
    relatedComponent: 'line-graph',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.linegraph.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.foundation.shape.RoundedCornerShape',
      ],
      sourceCode: `@Keep
@Stable
data class LineGraphPopUpConfig(
    val enabled: Boolean = false,
    val background: Color = Color.White,
    val shape: Shape = RoundedCornerShape(8.dp),
    val textStyle: TextStyle = TextStyle(),
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.linegraph.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.foundation.shape.RoundedCornerShape',
      ],
      sourceCode: `@Stable
data class LineGraphPopUpConfig(
    val enabled: Boolean = false,
    val background: Color = Color.White,
    val shape: Shape = RoundedCornerShape(8.dp),
    val textStyle: TextStyle = TextStyle(),
)`,
    },
    properties: [
      { name: 'enabled', type: 'Boolean', default: 'false', description: 'Whether the pop-up tooltip is displayed on tap.' },
      { name: 'background', type: 'Color', default: 'Color.White', description: 'Background color of the pop-up.' },
      { name: 'shape', type: 'Shape', default: 'RoundedCornerShape(8.dp)', description: 'Shape of the pop-up container.' },
      { name: 'textStyle', type: 'TextStyle', default: 'TextStyle()', description: 'Text style for the pop-up content.' },
    ],
  },

  LineGraphAnimationConfig: {
    name: 'LineGraphAnimationConfig',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Line Graph',
    description: 'Controls the entry animation of the line graph path.',
    relatedComponent: 'line-graph',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.linegraph.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
      ],
      sourceCode: `@Keep
@Stable
data class LineGraphAnimationConfig(
    val enabled: Boolean = true,
    val durationMillis: Int = 1000,
    val delayMillis: Int = 0,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.linegraph.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
      ],
      sourceCode: `@Stable
data class LineGraphAnimationConfig(
    val enabled: Boolean = true,
    val durationMillis: Int = 1000,
    val delayMillis: Int = 0,
)`,
    },
    properties: [
      { name: 'enabled', type: 'Boolean', default: 'true', description: 'Whether entry animation is enabled.' },
      { name: 'durationMillis', type: 'Int', default: '1000', description: 'Duration of the animation in milliseconds.' },
      { name: 'delayMillis', type: 'Int', default: '0', description: 'Delay before animation starts.' },
    ],
  },

  LineGraphLiveUpdateConfig: {
    name: 'LineGraphLiveUpdateConfig',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Line Graph',
    description: 'Configures real-time live update behavior with blinking indicator.',
    relatedComponent: 'line-graph',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.linegraph.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Keep
@Stable
data class LineGraphLiveUpdateConfig(
    val enabled: Boolean = false,
    val blinkEnabled: Boolean = true,
    val blinkDurationMillis: Int = 800,
    val blinkMinRadius: Dp = 3.dp,
    val blinkMaxRadius: Dp = 8.dp,
    val blinkColor: Color = Color(0xFF6C5CE7),
    val pathTransitionDurationMillis: Int = 300,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.linegraph.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Stable
data class LineGraphLiveUpdateConfig(
    val enabled: Boolean = false,
    val blinkEnabled: Boolean = true,
    val blinkDurationMillis: Int = 800,
    val blinkMinRadius: Dp = 3.dp,
    val blinkMaxRadius: Dp = 8.dp,
    val blinkColor: Color = Color(0xFF6C5CE7),
    val pathTransitionDurationMillis: Int = 300,
)`,
    },
    properties: [
      { name: 'enabled', type: 'Boolean', default: 'false', description: 'Enables live data update mode.' },
      { name: 'blinkEnabled', type: 'Boolean', default: 'true', description: 'Whether the blinking indicator is shown at the latest data point.' },
      { name: 'blinkDurationMillis', type: 'Int', default: '800', description: 'Duration of one blink cycle.' },
      { name: 'blinkMinRadius', type: 'Dp', default: '3.dp', description: 'Minimum radius of the blink circle.' },
      { name: 'blinkMaxRadius', type: 'Dp', default: '8.dp', description: 'Maximum radius of the blink circle.' },
      { name: 'blinkColor', type: 'Color', default: 'Color(0xFF6C5CE7)', description: 'Color of the blinking indicator.' },
      { name: 'pathTransitionDurationMillis', type: 'Int', default: '300', description: 'Duration of the path transition animation when data updates.' },
    ],
  },

  LineGraphDefaults: {
    name: 'LineGraphDefaults',
    kind: 'object',
    category: 'Charts',
    subcategory: 'Line Graph',
    description: 'Factory methods for all line graph configurations.',
    relatedComponent: 'line-graph-defaults',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.linegraph.config',
      annotations: [],
      imports: [],
      sourceCode: `object LineGraphDefaults {
    fun lineConfig(...): LineGraphLineConfig
    fun areaFillConfig(...): LineGraphAreaFillConfig
    fun pointConfig(...): LineGraphPointConfig
    fun xAxisConfig(...): LineGraphXAxisConfig
    fun yAxisConfig(...): LineGraphYAxisConfig
    fun gridLineStyle(...): LineGraphGridLineStyle
    fun popUpConfig(...): LineGraphPopUpConfig
    fun animationConfig(...): LineGraphAnimationConfig
    fun liveUpdateConfig(...): LineGraphLiveUpdateConfig
}`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.linegraph.config',
      annotations: [],
      imports: [],
      sourceCode: `object LineGraphDefaults {
    fun lineConfig(...): LineGraphLineConfig
    fun areaFillConfig(...): LineGraphAreaFillConfig
    fun pointConfig(...): LineGraphPointConfig
    fun xAxisConfig(...): LineGraphXAxisConfig
    fun yAxisConfig(...): LineGraphYAxisConfig
    fun gridLineStyle(...): LineGraphGridLineStyle
    fun popUpConfig(...): LineGraphPopUpConfig
    fun animationConfig(...): LineGraphAnimationConfig
    fun liveUpdateConfig(...): LineGraphLiveUpdateConfig
}`,
    },
    properties: [],
    methods: [
      { name: 'lineConfig()', returns: 'LineGraphLineConfig', description: 'Creates a line configuration.' },
      { name: 'areaFillConfig()', returns: 'LineGraphAreaFillConfig', description: 'Creates an area fill configuration.' },
      { name: 'pointConfig()', returns: 'LineGraphPointConfig', description: 'Creates a data point configuration.' },
      { name: 'xAxisConfig()', returns: 'LineGraphXAxisConfig', description: 'Creates an X-axis configuration.' },
      { name: 'yAxisConfig()', returns: 'LineGraphYAxisConfig', description: 'Creates a Y-axis configuration.' },
      { name: 'gridLineStyle()', returns: 'LineGraphGridLineStyle', description: 'Creates a grid line style.' },
      { name: 'popUpConfig()', returns: 'LineGraphPopUpConfig', description: 'Creates a pop-up configuration.' },
      { name: 'animationConfig()', returns: 'LineGraphAnimationConfig', description: 'Creates an animation configuration.' },
      { name: 'liveUpdateConfig()', returns: 'LineGraphLiveUpdateConfig', description: 'Creates a live update configuration.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  CANDLESTICK CHART
   * ══════════════════════════════════════════════════════ */
  CandlestickEntry: {
    name: 'CandlestickEntry',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Candlestick Chart',
    description: 'Represents a single candlestick entry with open, high, low, close values.',
    relatedComponent: 'candlestick-chart',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.candlestickchart.config',
      annotations: [],
      imports: [],
      sourceCode: `data class CandlestickEntry(
    val label: String,
    val open: Float,
    val high: Float,
    val low: Float,
    val close: Float,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.candlestickchart.config',
      annotations: [],
      imports: [],
      sourceCode: `data class CandlestickEntry(
    val label: String,
    val open: Float,
    val high: Float,
    val low: Float,
    val close: Float,
)`,
    },
    properties: [
      { name: 'label', type: 'String', default: '—', description: 'Label shown on the X-axis for this entry.' },
      { name: 'open', type: 'Float', default: '—', description: 'Opening value.' },
      { name: 'high', type: 'Float', default: '—', description: 'Highest value.' },
      { name: 'low', type: 'Float', default: '—', description: 'Lowest value.' },
      { name: 'close', type: 'Float', default: '—', description: 'Closing value.' },
    ],
  },

  CandlestickGridLineStyle: {
    name: 'CandlestickGridLineStyle',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Candlestick Chart',
    description: 'Grid line styling for the candlestick chart.',
    relatedComponent: 'candlestick-chart',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.candlestickchart.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.StrokeCap',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Keep
@Stable
data class CandlestickGridLineStyle(
    val color: Color = Color.LightGray.copy(alpha = 0.5f),
    val strokeWidth: Dp = 1.dp,
    val dashLength: Dp = 8.dp,
    val gapLength: Dp = 4.dp,
    val totalGridLines: Int = 5,
    val dashCap: StrokeCap = StrokeCap.Round,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.candlestickchart.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.StrokeCap',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Stable
data class CandlestickGridLineStyle(
    val color: Color = Color.LightGray.copy(alpha = 0.5f),
    val strokeWidth: Dp = 1.dp,
    val dashLength: Dp = 8.dp,
    val gapLength: Dp = 4.dp,
    val totalGridLines: Int = 5,
    val dashCap: StrokeCap = StrokeCap.Round,
)`,
    },
    properties: [
      { name: 'color', type: 'Color', default: 'Color.LightGray.copy(alpha=0.5f)', description: 'Color of grid lines.' },
      { name: 'strokeWidth', type: 'Dp', default: '1.dp', description: 'Thickness of grid lines.' },
      { name: 'dashLength', type: 'Dp', default: '8.dp', description: 'Length of each dash.' },
      { name: 'gapLength', type: 'Dp', default: '4.dp', description: 'Gap between dashes.' },
      { name: 'totalGridLines', type: 'Int', default: '5', description: 'Number of horizontal grid lines.' },
      { name: 'dashCap', type: 'StrokeCap', default: 'StrokeCap.Round', description: 'Cap style for dashes.' },
    ],
  },

  CandlestickAnimationConfig: {
    name: 'CandlestickAnimationConfig',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Candlestick Chart',
    description: 'Animation configuration for the candlestick chart.',
    relatedComponent: 'candlestick-chart',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.candlestickchart.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
      ],
      sourceCode: `@Keep
@Stable
data class CandlestickAnimationConfig(
    val enabled: Boolean = true,
    val durationMillis: Int = 800,
    val delayMillis: Int = 0,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.candlestickchart.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
      ],
      sourceCode: `@Stable
data class CandlestickAnimationConfig(
    val enabled: Boolean = true,
    val durationMillis: Int = 800,
    val delayMillis: Int = 0,
)`,
    },
    properties: [
      { name: 'enabled', type: 'Boolean', default: 'true', description: 'Whether the chart animates on first render.' },
      { name: 'durationMillis', type: 'Int', default: '800', description: 'Duration of the entry animation.' },
      { name: 'delayMillis', type: 'Int', default: '0', description: 'Delay before animation starts.' },
    ],
  },

  CandlestickDefaults: {
    name: 'CandlestickDefaults',
    kind: 'object',
    category: 'Charts',
    subcategory: 'Candlestick Chart',
    description: 'Factory methods for candlestick chart configurations.',
    relatedComponent: 'candlestick-defaults',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.candlestickchart.config',
      annotations: [],
      imports: [],
      sourceCode: `object CandlestickDefaults {
    fun markerConfig(...): CandlestickMarkerConfig
    fun yAxisConfig(...): CandlestickYAxisConfig
    fun xAxisConfig(...): CandlestickXAxisConfig
    fun gridLineStyle(...): CandlestickGridLineStyle
    fun animationConfig(...): CandlestickAnimationConfig
}`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.candlestickchart.config',
      annotations: [],
      imports: [],
      sourceCode: `object CandlestickDefaults {
    fun markerConfig(...): CandlestickMarkerConfig
    fun yAxisConfig(...): CandlestickYAxisConfig
    fun xAxisConfig(...): CandlestickXAxisConfig
    fun gridLineStyle(...): CandlestickGridLineStyle
    fun animationConfig(...): CandlestickAnimationConfig
}`,
    },
    properties: [],
    methods: [
      { name: 'markerConfig()', returns: 'CandlestickMarkerConfig', description: 'Creates a marker (candle body + wick) configuration.' },
      { name: 'yAxisConfig()', returns: 'CandlestickYAxisConfig', description: 'Creates a Y-axis configuration.' },
      { name: 'xAxisConfig()', returns: 'CandlestickXAxisConfig', description: 'Creates an X-axis configuration.' },
      { name: 'gridLineStyle()', returns: 'CandlestickGridLineStyle', description: 'Creates a grid line style.' },
      { name: 'animationConfig()', returns: 'CandlestickAnimationConfig', description: 'Creates an animation configuration.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  CARDS
   * ══════════════════════════════════════════════════════ */
  TicketCardCorner: {
    name: 'TicketCardCorner',
    kind: 'data class',
    category: 'Cards',
    subcategory: 'Ticket Card',
    description: 'Controls which corners of the TicketCard have scallop cutouts.',
    relatedComponent: 'ticket-card',
    android: {
      packageName: 'com.developerstring.jetco.ui.cards.ticket',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
      ],
      sourceCode: `@Keep
@Stable
data class TicketCardCorner(
    val topLeft: Boolean = true,
    val topRight: Boolean = true,
    val bottomRight: Boolean = true,
    val bottomLeft: Boolean = true,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.cards.ticket',
      annotations: [],
      imports: [],
      sourceCode: `data class TicketCardCorner(
    val topLeft: Boolean = true,
    val topRight: Boolean = true,
    val bottomRight: Boolean = true,
    val bottomLeft: Boolean = true,
)`,
    },
    properties: [
      { name: 'topLeft', type: 'Boolean', default: 'true', description: 'Whether the top-left corner has a scallop cutout.' },
      { name: 'topRight', type: 'Boolean', default: 'true', description: 'Whether the top-right corner has a scallop cutout.' },
      { name: 'bottomRight', type: 'Boolean', default: 'true', description: 'Whether the bottom-right corner has a scallop cutout.' },
      { name: 'bottomLeft', type: 'Boolean', default: 'true', description: 'Whether the bottom-left corner has a scallop cutout.' },
    ],
  },

  CurvedCardConfig: {
    name: 'CurvedCardConfig',
    kind: 'data class',
    category: 'Cards',
    subcategory: 'Curved Card',
    description: 'Configuration for the CurvedCard wave shape, gradient, and image overlay.',
    relatedComponent: 'curved-card',
    android: {
      packageName: 'com.developerstring.jetco.ui.cards.curved',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Brush',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.graphics.painter.Painter',
        'import androidx.compose.ui.unit.Dp',
        'import androidx.compose.foundation.layout.PaddingValues',
      ],
      sourceCode: `@Stable
data class CurvedCardConfig(
    val waveHeight: Dp = 30.dp,
    val waveSegments: Int = 2,
    val shape: Shape = RoundedCornerShape(16.dp),
    val gradient: Brush = Brush.linearGradient(
        colors = listOf(Color(0xFF6C5CE7), Color(0xFFa78bfa))
    ),
    val samplesPerWave: Int = 50,
    val topCurveEnable: Boolean = true,
    val bottomCurveEnable: Boolean = true,
    val image: Painter? = null,
    val imageAlpha: Float = 0.2f,
    val contentPadding: PaddingValues = PaddingValues(16.dp),
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.cards.curved',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Brush',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.graphics.painter.Painter',
        'import androidx.compose.ui.unit.Dp',
        'import androidx.compose.foundation.layout.PaddingValues',
      ],
      sourceCode: `@Stable
data class CurvedCardConfig(
    val waveHeight: Dp = 30.dp,
    val waveSegments: Int = 2,
    val shape: Shape = RoundedCornerShape(16.dp),
    val gradient: Brush = Brush.linearGradient(
        colors = listOf(Color(0xFF6C5CE7), Color(0xFFa78bfa))
    ),
    val samplesPerWave: Int = 50,
    val topCurveEnable: Boolean = true,
    val bottomCurveEnable: Boolean = true,
    val image: Painter? = null,
    val imageAlpha: Float = 0.2f,
    val contentPadding: PaddingValues = PaddingValues(16.dp),
)`,
    },
    properties: [
      { name: 'waveHeight', type: 'Dp', default: '30.dp', description: 'Height of the wave curve peaks.' },
      { name: 'waveSegments', type: 'Int', default: '2', description: 'Number of wave segments (full sine cycles).' },
      { name: 'shape', type: 'Shape', default: 'RoundedCornerShape(16.dp)', description: 'Overall card shape.' },
      { name: 'gradient', type: 'Brush', default: 'linearGradient(purple)', description: 'Gradient brush for the card background.' },
      { name: 'samplesPerWave', type: 'Int', default: '50', description: 'Sampling resolution per wave segment (higher = smoother).' },
      { name: 'topCurveEnable', type: 'Boolean', default: 'true', description: 'Whether the top edge has a wave curve.' },
      { name: 'bottomCurveEnable', type: 'Boolean', default: 'true', description: 'Whether the bottom edge has a wave curve.' },
      { name: 'image', type: 'Painter?', default: 'null', description: 'Optional background image painter.' },
      { name: 'imageAlpha', type: 'Float', default: '0.2f', description: 'Opacity of the background image.' },
      { name: 'contentPadding', type: 'PaddingValues', default: 'PaddingValues(16.dp)', description: 'Inner content padding.' },
    ],
  },

  CurvedCardAnimConfig: {
    name: 'CurvedCardAnimConfig',
    kind: 'data class',
    category: 'Cards',
    subcategory: 'Curved Card',
    description: 'Animation configuration for CurvedCard wave edges.',
    relatedComponent: 'curved-card',
    android: {
      packageName: 'com.developerstring.jetco.ui.cards.curved',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
      ],
      sourceCode: `@Stable
data class CurvedCardAnimConfig(
    val animateTopWave: Boolean = false,
    val animateBottomWave: Boolean = false,
    val animationDurationMs: Int = 2000,
    val reverseAnimationTop: Boolean = false,
    val reverseAnimationBottom: Boolean = false,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.cards.curved',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
      ],
      sourceCode: `@Stable
data class CurvedCardAnimConfig(
    val animateTopWave: Boolean = false,
    val animateBottomWave: Boolean = false,
    val animationDurationMs: Int = 2000,
    val reverseAnimationTop: Boolean = false,
    val reverseAnimationBottom: Boolean = false,
)`,
    },
    properties: [
      { name: 'animateTopWave', type: 'Boolean', default: 'false', description: 'Whether the top wave animates continuously.' },
      { name: 'animateBottomWave', type: 'Boolean', default: 'false', description: 'Whether the bottom wave animates continuously.' },
      { name: 'animationDurationMs', type: 'Int', default: '2000', description: 'Duration of one animation cycle in milliseconds.' },
      { name: 'reverseAnimationTop', type: 'Boolean', default: 'false', description: 'Whether the top wave animation runs in reverse.' },
      { name: 'reverseAnimationBottom', type: 'Boolean', default: 'false', description: 'Whether the bottom wave animation runs in reverse.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  COMPONENTS
   * ══════════════════════════════════════════════════════ */
  SwitchButtonConfig: {
    name: 'SwitchButtonConfig',
    kind: 'data class',
    category: 'Components',
    subcategory: 'Switch Button',
    description: 'Visual configuration for the SwitchButton toggle component.',
    relatedComponent: 'switch-button',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.button.switch_button',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.unit.Dp',
        'import androidx.compose.foundation.shape.RoundedCornerShape',
      ],
      sourceCode: `@Stable
data class SwitchButtonConfig(
    val selectedBackgroundColor: Color = Color(0xFF6C5CE7),
    val unSelectedBackgroundColor: Color = Color.LightGray,
    val switchPadding: Dp = 4.dp,
    val switchShape: Shape = RoundedCornerShape(50),
    val innerBoxColor: Color = Color.White,
    val innerBoxShape: Shape = RoundedCornerShape(50),
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.button.switch_button',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.unit.Dp',
        'import androidx.compose.foundation.shape.RoundedCornerShape',
      ],
      sourceCode: `@Stable
data class SwitchButtonConfig(
    val selectedBackgroundColor: Color = Color(0xFF6C5CE7),
    val unSelectedBackgroundColor: Color = Color.LightGray,
    val switchPadding: Dp = 4.dp,
    val switchShape: Shape = RoundedCornerShape(50),
    val innerBoxColor: Color = Color.White,
    val innerBoxShape: Shape = RoundedCornerShape(50),
)`,
    },
    properties: [
      { name: 'selectedBackgroundColor', type: 'Color', default: 'Color(0xFF6C5CE7)', description: 'Background color when the switch is ON.' },
      { name: 'unSelectedBackgroundColor', type: 'Color', default: 'Color.LightGray', description: 'Background color when the switch is OFF.' },
      { name: 'switchPadding', type: 'Dp', default: '4.dp', description: 'Padding between the inner box and the outer track.' },
      { name: 'switchShape', type: 'Shape', default: 'RoundedCornerShape(50)', description: 'Shape of the outer switch track.' },
      { name: 'innerBoxColor', type: 'Color', default: 'Color.White', description: 'Color of the inner toggle circle.' },
      { name: 'innerBoxShape', type: 'Shape', default: 'RoundedCornerShape(50)', description: 'Shape of the inner toggle element.' },
    ],
  },

  SwitchButtonAnimation: {
    name: 'SwitchButtonAnimation',
    kind: 'data class',
    category: 'Components',
    subcategory: 'Switch Button',
    description: 'Animation configuration for the SwitchButton toggle.',
    relatedComponent: 'switch-button',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.button.switch_button',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.animation.core.Easing',
        'import androidx.compose.animation.core.FastOutSlowInEasing',
      ],
      sourceCode: `@Stable
data class SwitchButtonAnimation(
    val animationDuration: Int = 300,
    val animationDelay: Int = 0,
    val animationEasing: Easing = FastOutSlowInEasing,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.button.switch_button',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.animation.core.Easing',
        'import androidx.compose.animation.core.FastOutSlowInEasing',
      ],
      sourceCode: `@Stable
data class SwitchButtonAnimation(
    val animationDuration: Int = 300,
    val animationDelay: Int = 0,
    val animationEasing: Easing = FastOutSlowInEasing,
)`,
    },
    properties: [
      { name: 'animationDuration', type: 'Int', default: '300', description: 'Duration of the toggle animation in milliseconds.' },
      { name: 'animationDelay', type: 'Int', default: '0', description: 'Delay before the animation starts.' },
      { name: 'animationEasing', type: 'Easing', default: 'FastOutSlowInEasing', description: 'Easing curve for the toggle animation.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  CANDLESTICK CHART – CandlestickCandleConfig
   * ══════════════════════════════════════════════════════ */
  CandlestickCandleConfig: {
    name: 'CandlestickCandleConfig',
    kind: 'data class',
    category: 'Charts',
    subcategory: 'Candlestick Chart',
    description: 'Candle body and wick appearance configuration for the CandlestickChart.',
    relatedComponent: 'candlestick-chart',
    android: {
      packageName: 'com.developerstring.jetco.ui.charts.candlestickchart.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.StrokeCap',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Keep
@Stable
data class CandlestickCandleConfig(
    val bullishColor: Color,
    val bearishColor: Color,
    val neutralColor: Color,
    val bodyWidthDp: Dp,
    val wickWidthDp: Dp,
    val wickCap: StrokeCap,
    val hollowBullish: Boolean,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.charts.candlestickchart.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.StrokeCap',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Stable
data class CandlestickCandleConfig(
    val bullishColor: Color,
    val bearishColor: Color,
    val neutralColor: Color,
    val bodyWidthDp: Dp,
    val wickWidthDp: Dp,
    val wickCap: StrokeCap,
    val hollowBullish: Boolean,
)`,
    },
    properties: [
      { name: 'bullishColor', type: 'Color', default: 'Color(0xFF26A69A)', description: 'Color for candles where close > open.' },
      { name: 'bearishColor', type: 'Color', default: 'Color(0xFFEF5350)', description: 'Color for candles where close < open.' },
      { name: 'neutralColor', type: 'Color', default: 'Color(0xFF9E9E9E)', description: 'Color for candles where close == open.' },
      { name: 'bodyWidthDp', type: 'Dp', default: '8.dp', description: 'Width of the candle body in dp.' },
      { name: 'wickWidthDp', type: 'Dp', default: '1.5.dp', description: 'Width of the wick line in dp.' },
      { name: 'wickCap', type: 'StrokeCap', default: 'StrokeCap.Round', description: 'StrokeCap applied to wick ends.' },
      { name: 'hollowBullish', type: 'Boolean', default: 'false', description: 'When true, bullish candles are rendered with a hollow (outlined) body instead of filled.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  TICKET CARD – TicketContent
   * ══════════════════════════════════════════════════════ */
  TicketContent: {
    name: 'TicketContent',
    kind: '@Composable function',
    category: 'Cards',
    subcategory: 'Ticket Card',
    description: 'A layout helper for TicketCard that splits its content into two logical sections — topContent above the dashed divider and bottomContent below. Mirrors real-world tickets/coupons.',
    relatedComponent: 'ticket-card',
    android: {
      packageName: 'com.developerstring.jetco.ui.cards.ticket',
      annotations: [],
      imports: [
        'import androidx.compose.runtime.Composable',
        'import androidx.compose.ui.Modifier',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.foundation.background',
        'import androidx.compose.foundation.layout.*',
      ],
      sourceCode: `@Composable
fun TicketContent(
    modifier: Modifier = Modifier,
    notchWeight: Float = 0.7f,
    topContent: @Composable () -> Unit = {},
    bottomContent: @Composable () -> Unit = {}
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.cards.ticket',
      annotations: [],
      imports: [
        'import androidx.compose.runtime.Composable',
        'import androidx.compose.ui.Modifier',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.foundation.background',
        'import androidx.compose.foundation.layout.*',
      ],
      sourceCode: `@Composable
fun TicketContent(
    modifier: Modifier = Modifier,
    notchWeight: Float = 0.7f,
    topContent: @Composable () -> Unit = {},
    bottomContent: @Composable () -> Unit = {}
)`,
    },
    properties: [
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier applied to the outer Column.' },
      { name: 'notchWeight', type: 'Float', default: '0.7f', description: 'Vertical weight of the top section as a fraction (0f to 1f). Controls where the divider splits the card.' },
      { name: 'topContent', type: '@Composable () -> Unit', default: '{}', description: 'Composable content placed above the dashed divider. Typically used for main information like title, event details, or branding.' },
      { name: 'bottomContent', type: '@Composable () -> Unit', default: '{}', description: 'Composable content placed below the dashed divider. Commonly used for secondary info like QR codes, barcodes, or instructions.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  SWITCH BUTTON – SwitchButtonIcon
   * ══════════════════════════════════════════════════════ */
  SwitchButtonIcon: {
    name: 'SwitchButtonIcon',
    kind: '@Composable function',
    category: 'Components',
    subcategory: 'Switch Button',
    description: 'A composable that renders an animated icon for use inside a SwitchButton. Supports rotation animation on selection change.',
    relatedComponent: 'switch-button',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.button.switch_button',
      annotations: [],
      imports: [
        'import androidx.compose.runtime.Composable',
        'import androidx.compose.ui.Modifier',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.vector.ImageVector',
        'import androidx.compose.animation.core.Easing',
        'import androidx.compose.animation.core.FastOutSlowInEasing',
        'import androidx.compose.foundation.layout.size',
        'import androidx.compose.ui.unit.dp',
      ],
      sourceCode: `@Composable
fun SwitchButtonIcon(
    modifier: Modifier = Modifier,
    isSelected: Boolean,
    selectedIcon: ImageVector,
    unSelectedIcon: ImageVector,
    iconModifier: Modifier = Modifier.size(25.dp),
    enableRotate: Boolean = true,
    rotationEasing: Easing = FastOutSlowInEasing,
    rotationDuration: Int = 600,
    rotationAngle: Float = 360f,
    initialRotationAngle: Float = 0f,
    contentDescription: String? = null,
    iconColor: Color = Color(0xFF16212B),
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.button.switch_button',
      annotations: [],
      imports: [
        'import androidx.compose.runtime.Composable',
        'import androidx.compose.ui.Modifier',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.vector.ImageVector',
        'import androidx.compose.animation.core.Easing',
        'import androidx.compose.animation.core.FastOutSlowInEasing',
        'import androidx.compose.foundation.layout.size',
        'import androidx.compose.ui.unit.dp',
      ],
      sourceCode: `@Composable
fun SwitchButtonIcon(
    modifier: Modifier = Modifier,
    isSelected: Boolean,
    selectedIcon: ImageVector,
    unSelectedIcon: ImageVector,
    iconModifier: Modifier = Modifier.size(25.dp),
    enableRotate: Boolean = true,
    rotationEasing: Easing = FastOutSlowInEasing,
    rotationDuration: Int = 600,
    rotationAngle: Float = 360f,
    initialRotationAngle: Float = 0f,
    contentDescription: String? = null,
    iconColor: Color = Color(0xFF16212B),
)`,
    },
    properties: [
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier applied to the icon container.' },
      { name: 'isSelected', type: 'Boolean', default: '—', description: 'Whether the switch is in the selected state. Required parameter.' },
      { name: 'selectedIcon', type: 'ImageVector', default: '—', description: 'Icon displayed when the switch is selected. Required parameter.' },
      { name: 'unSelectedIcon', type: 'ImageVector', default: '—', description: 'Icon displayed when the switch is unselected. Required parameter.' },
      { name: 'iconModifier', type: 'Modifier', default: 'Modifier.size(25.dp)', description: 'Modifier applied to the icon itself (e.g., size).' },
      { name: 'enableRotate', type: 'Boolean', default: 'true', description: 'Whether to animate rotation when the selection changes.' },
      { name: 'rotationEasing', type: 'Easing', default: 'FastOutSlowInEasing', description: 'Easing curve for the rotation animation.' },
      { name: 'rotationDuration', type: 'Int', default: '600', description: 'Duration of the rotation animation in milliseconds.' },
      { name: 'rotationAngle', type: 'Float', default: '360f', description: 'Total rotation angle in degrees.' },
      { name: 'initialRotationAngle', type: 'Float', default: '0f', description: 'Initial rotation angle offset in degrees.' },
      { name: 'contentDescription', type: 'String?', default: 'null', description: 'Accessibility content description for the icon.' },
      { name: 'iconColor', type: 'Color', default: 'Color(0xFF16212B)', description: 'Tint color of the icon.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  ANIMATED SEARCH BAR – AnimatedSearchBarAnimationConfig
   * ══════════════════════════════════════════════════════ */
  AnimatedSearchBarAnimationConfig: {
    name: 'AnimatedSearchBarAnimationConfig',
    kind: 'data class',
    category: 'Components',
    subcategory: 'Animated Search Bar',
    description: 'Animation timing and spring configuration for the AnimatedSearchBar expand/collapse transitions.',
    relatedComponent: 'animated-search-bar',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.search.animated_searchbar',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.animation.core.Spring',
      ],
      sourceCode: `@Keep
@Stable
data class AnimatedSearchBarAnimationConfig(
    val rotationDuration: Int = 500,
    val bounceStiffness: Float = Spring.StiffnessMediumLow,
    val bounceDamping: Float = Spring.DampingRatioMediumBouncy,
    val widthSpringStiffness: Float = Spring.StiffnessLow,
    val widthSpringDamping: Float = Spring.DampingRatioLowBouncy,
    val fadeDuration: Int = 200,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.search.animated_searchbar',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.animation.core.Spring',
      ],
      sourceCode: `@Stable
data class AnimatedSearchBarAnimationConfig(
    val rotationDuration: Int = 500,
    val bounceStiffness: Float = Spring.StiffnessMediumLow,
    val bounceDamping: Float = Spring.DampingRatioMediumBouncy,
    val widthSpringStiffness: Float = Spring.StiffnessLow,
    val widthSpringDamping: Float = Spring.DampingRatioLowBouncy,
    val fadeDuration: Int = 200,
)`,
    },
    properties: [
      { name: 'rotationDuration', type: 'Int', default: '500', description: 'Duration of the icon rotation animation in milliseconds.' },
      { name: 'bounceStiffness', type: 'Float', default: 'Spring.StiffnessMediumLow', description: 'Spring stiffness for the bounce animation.' },
      { name: 'bounceDamping', type: 'Float', default: 'Spring.DampingRatioMediumBouncy', description: 'Damping ratio for the bounce animation.' },
      { name: 'widthSpringStiffness', type: 'Float', default: 'Spring.StiffnessLow', description: 'Spring stiffness for the width expansion animation.' },
      { name: 'widthSpringDamping', type: 'Float', default: 'Spring.DampingRatioLowBouncy', description: 'Damping ratio for the width expansion animation.' },
      { name: 'fadeDuration', type: 'Int', default: '200', description: 'Duration of the text fade-in/fade-out animation in milliseconds.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  STEPPER – StepperNode
   * ══════════════════════════════════════════════════════ */
  StepperNode: {
    name: 'StepperNode',
    kind: 'data class',
    category: 'Components',
    subcategory: 'Stepper',
    description: 'Represents a single step within a stepper. Each node has an optional title, description, icon, and status.',
    relatedComponent: 'stepper',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.stepper.model',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.painter.Painter',
        'import androidx.compose.ui.graphics.vector.ImageVector',
      ],
      sourceCode: `@Stable
data class StepperNode(
    val title: String? = null,
    val description: String? = null,
    val icon: ImageVector? = null,
    val painter: Painter? = null,
    val status: StepperStatus = StepperStatus.IDLE,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.stepper.model',
      annotations: [],
      imports: [
        'import androidx.compose.ui.graphics.painter.Painter',
        'import androidx.compose.ui.graphics.vector.ImageVector',
      ],
      sourceCode: `data class StepperNode(
    val title: String? = null,
    val description: String? = null,
    val icon: ImageVector? = null,
    val painter: Painter? = null,
    val status: StepperStatus = StepperStatus.IDLE,
)`,
    },
    properties: [
      { name: 'title', type: 'String?', default: 'null', description: 'A short title describing the step.' },
      { name: 'description', type: 'String?', default: 'null', description: 'Optional secondary text providing additional details.' },
      { name: 'icon', type: 'ImageVector?', default: 'null', description: 'Optional custom icon for the step (fallbacks to default icons if null).' },
      { name: 'painter', type: 'Painter?', default: 'null', description: 'Optional custom painter for the step icon.' },
      { name: 'status', type: 'StepperStatus', default: 'StepperStatus.IDLE', description: 'Current status of the step (IDLE, ACTIVE, COMPLETE, or ERROR).' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  STEPPER – StepperStatus
   * ══════════════════════════════════════════════════════ */
  StepperStatus: {
    name: 'StepperStatus',
    kind: 'enum class',
    category: 'Components',
    subcategory: 'Stepper',
    description: 'Represents the status of a step in a Stepper component.',
    relatedComponent: 'stepper',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.stepper.model',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
      ],
      sourceCode: `@Stable
enum class StepperStatus {
    COMPLETE,
    ACTIVE,
    IDLE,
    ERROR,
}`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.stepper.model',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
      ],
      sourceCode: `@Stable
enum class StepperStatus {
    COMPLETE,
    ACTIVE,
    IDLE,
    ERROR,
}`,
    },
    properties: [
      { name: 'COMPLETE', type: 'enum value', default: '—', description: 'Step has been completed successfully.' },
      { name: 'ACTIVE', type: 'enum value', default: '—', description: 'Step is currently active/in progress.' },
      { name: 'IDLE', type: 'enum value', default: '—', description: 'Step has not yet been reached.' },
      { name: 'ERROR', type: 'enum value', default: '—', description: 'Step encountered an error.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  STEPPER – StepperConfig
   * ══════════════════════════════════════════════════════ */
  StepperConfig: {
    name: 'StepperConfig',
    kind: 'data class',
    category: 'Components',
    subcategory: 'Stepper',
    description: 'Top-level configuration for the Stepper component. Contains nested config classes for node style, connector style, text, animation, and image settings.',
    relatedComponent: 'stepper',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.stepper.model',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.graphics.PathEffect',
        'import androidx.compose.ui.unit.Dp',
        'import androidx.compose.ui.unit.dp',
        'import androidx.compose.ui.unit.sp',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.ui.text.style.TextOverflow',
        'import androidx.compose.ui.layout.ContentScale',
        'import androidx.compose.foundation.layout.PaddingValues',
        'import androidx.compose.foundation.shape.CircleShape',
        'import androidx.compose.ui.graphics.RectangleShape',
        'import androidx.compose.animation.core.AnimationSpec',
        'import androidx.compose.animation.core.tween',
      ],
      sourceCode: `@Stable
data class StepperConfig(
    val node: NodeStyle = NodeStyle(),
    val connector: ConnectorStyle = ConnectorStyle(),
    val textConfig: TextStyleConfig = TextStyleConfig(),
    val animation: AnimationConfig = AnimationConfig(),
    val imageConfig: ImageConfig = ImageConfig(),
) {
    @Stable
    data class NodeStyle(
        val activeColor: Color = Color(0xFF1976D2),
        val completedColor: Color = Color(0xFF4CAF50),
        val errorColor: Color = Color(0xFFF44336),
        val inactiveColor: Color = Color(0xFFE0E0E0),
        val size: Dp = 32.dp,
        val shape: Shape = CircleShape,
        val internalSpacing: Dp = 16.dp,
        val spaceBetweenText: Dp = 6.dp,
        val horizontalStepperWidth: Dp = 120.dp,
        val actionIconColor: Color = Color.White,
        val idleIconColor: Color = Color.Gray,
    )

    @Stable
    data class ConnectorStyle(
        val width: Dp = 2.dp,
        val spacing: Dp = 8.dp,
        val lineLengthMin: Dp = 16.dp,
        val pathEffect: PathEffect = PathEffect.dashPathEffect(floatArrayOf(10f, 10f)),
    )

    @Stable
    data class TextStyleConfig(
        val maxTitleLines: Int = 2,
        val maxDescriptionLines: Int = 3,
        val overflow: TextOverflow = TextOverflow.Ellipsis,
        val titleTextStyle: TextStyle = TextStyle(fontSize = 16.sp),
        val descriptionTextStyle: TextStyle = TextStyle(fontSize = 14.sp),
    )

    @Stable
    data class AnimationConfig(
        val enabled: Boolean = true,
        val durationMillis: Int = 1200,
        val animationSpec: AnimationSpec<Float> = tween(durationMillis),
    )

    @Stable
    data class ImageConfig(
        val maxWidth: Dp? = null,
        val maxHeight: Dp? = null,
        val contentScale: ContentScale = ContentScale.Fit,
        val imageShape: Shape = RectangleShape,
        val paddingValues: PaddingValues = PaddingValues(4.dp),
    )
}`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.stepper.model',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.graphics.PathEffect',
        'import androidx.compose.ui.unit.Dp',
        'import androidx.compose.ui.unit.dp',
        'import androidx.compose.ui.unit.sp',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.ui.text.style.TextOverflow',
        'import androidx.compose.ui.layout.ContentScale',
        'import androidx.compose.foundation.layout.PaddingValues',
        'import androidx.compose.foundation.shape.CircleShape',
        'import androidx.compose.ui.graphics.RectangleShape',
        'import androidx.compose.animation.core.AnimationSpec',
        'import androidx.compose.animation.core.tween',
      ],
      sourceCode: `@Stable
data class StepperConfig(
    val node: NodeStyle = NodeStyle(),
    val connector: ConnectorStyle = ConnectorStyle(),
    val textConfig: TextStyleConfig = TextStyleConfig(),
    val animation: AnimationConfig = AnimationConfig(),
    val imageConfig: ImageConfig = ImageConfig(),
) {
    @Stable
    data class NodeStyle(
        val activeColor: Color = Color(0xFF1976D2),
        val completedColor: Color = Color(0xFF4CAF50),
        val errorColor: Color = Color(0xFFF44336),
        val inactiveColor: Color = Color(0xFFE0E0E0),
        val size: Dp = 32.dp,
        val shape: Shape = CircleShape,
        val internalSpacing: Dp = 16.dp,
        val spaceBetweenText: Dp = 6.dp,
        val horizontalStepperWidth: Dp = 120.dp,
        val actionIconColor: Color = Color.White,
        val idleIconColor: Color = Color.Gray,
    )

    @Stable
    data class ConnectorStyle(
        val width: Dp = 2.dp,
        val spacing: Dp = 8.dp,
        val lineLengthMin: Dp = 16.dp,
        val pathEffect: PathEffect = PathEffect.dashPathEffect(floatArrayOf(10f, 10f)),
    )

    @Stable
    data class TextStyleConfig(
        val maxTitleLines: Int = 2,
        val maxDescriptionLines: Int = 3,
        val overflow: TextOverflow = TextOverflow.Ellipsis,
        val titleTextStyle: TextStyle = TextStyle(fontSize = 16.sp),
        val descriptionTextStyle: TextStyle = TextStyle(fontSize = 14.sp),
    )

    @Stable
    data class AnimationConfig(
        val enabled: Boolean = true,
        val durationMillis: Int = 1200,
        val animationSpec: AnimationSpec<Float> = tween(durationMillis),
    )

    @Stable
    data class ImageConfig(
        val maxWidth: Dp? = null,
        val maxHeight: Dp? = null,
        val contentScale: ContentScale = ContentScale.Fit,
        val imageShape: Shape = RectangleShape,
        val paddingValues: PaddingValues = PaddingValues(4.dp),
    )
}`,
    },
    properties: [
      { name: 'node', type: 'NodeStyle', default: 'NodeStyle()', description: 'Visual style for stepper nodes (circles/shapes at each step).' },
      { name: 'connector', type: 'ConnectorStyle', default: 'ConnectorStyle()', description: 'Style for connector lines between nodes.' },
      { name: 'textConfig', type: 'TextStyleConfig', default: 'TextStyleConfig()', description: 'Text style configuration for titles and descriptions.' },
      { name: 'animation', type: 'AnimationConfig', default: 'AnimationConfig()', description: 'Animation configuration for stepper transitions.' },
      { name: 'imageConfig', type: 'ImageConfig', default: 'ImageConfig()', description: 'Configuration for optional images within stepper nodes.' },
    ],
    nestedClasses: [
      {
        name: 'NodeStyle',
        properties: [
          { name: 'activeColor', type: 'Color', default: 'Color(0xFF1976D2)', description: 'Color of the active step node.' },
          { name: 'completedColor', type: 'Color', default: 'Color(0xFF4CAF50)', description: 'Color of completed step nodes.' },
          { name: 'errorColor', type: 'Color', default: 'Color(0xFFF44336)', description: 'Color of error step nodes.' },
          { name: 'inactiveColor', type: 'Color', default: 'Color(0xFFE0E0E0)', description: 'Color of idle/inactive step nodes.' },
          { name: 'size', type: 'Dp', default: '32.dp', description: 'Diameter of the step node.' },
          { name: 'shape', type: 'Shape', default: 'CircleShape', description: 'Shape of the step node.' },
          { name: 'internalSpacing', type: 'Dp', default: '16.dp', description: 'Spacing inside the node layout.' },
          { name: 'spaceBetweenText', type: 'Dp', default: '6.dp', description: 'Spacing between title and description text.' },
          { name: 'horizontalStepperWidth', type: 'Dp', default: '120.dp', description: 'Width of each step in a horizontal stepper layout.' },
          { name: 'actionIconColor', type: 'Color', default: 'Color.White', description: 'Tint color for active/completed step icons.' },
          { name: 'idleIconColor', type: 'Color', default: 'Color.Gray', description: 'Tint color for idle step icons.' },
        ],
      },
      {
        name: 'ConnectorStyle',
        properties: [
          { name: 'width', type: 'Dp', default: '2.dp', description: 'Width of the connector line.' },
          { name: 'spacing', type: 'Dp', default: '8.dp', description: 'Spacing around the connector line.' },
          { name: 'lineLengthMin', type: 'Dp', default: '16.dp', description: 'Minimum length for the connector line.' },
          { name: 'pathEffect', type: 'PathEffect', default: 'PathEffect.dashPathEffect(floatArrayOf(10f, 10f))', description: 'Path effect (e.g., dashed) for the connector line.' },
        ],
      },
      {
        name: 'TextStyleConfig',
        properties: [
          { name: 'maxTitleLines', type: 'Int', default: '2', description: 'Maximum number of lines for the step title.' },
          { name: 'maxDescriptionLines', type: 'Int', default: '3', description: 'Maximum number of lines for the step description.' },
          { name: 'overflow', type: 'TextOverflow', default: 'TextOverflow.Ellipsis', description: 'Text overflow behavior for truncated text.' },
          { name: 'titleTextStyle', type: 'TextStyle', default: 'TextStyle(fontSize = 16.sp)', description: 'Text style for step titles.' },
          { name: 'descriptionTextStyle', type: 'TextStyle', default: 'TextStyle(fontSize = 14.sp)', description: 'Text style for step descriptions.' },
        ],
      },
      {
        name: 'AnimationConfig',
        properties: [
          { name: 'enabled', type: 'Boolean', default: 'true', description: 'Whether stepper animations are enabled.' },
          { name: 'durationMillis', type: 'Int', default: '1200', description: 'Duration of the animation in milliseconds.' },
          { name: 'animationSpec', type: 'AnimationSpec<Float>', default: 'tween(durationMillis)', description: 'Animation spec for the stepper transition.' },
        ],
      },
      {
        name: 'ImageConfig',
        properties: [
          { name: 'maxWidth', type: 'Dp?', default: 'null', description: 'Maximum width for images in nodes (null = no limit).' },
          { name: 'maxHeight', type: 'Dp?', default: 'null', description: 'Maximum height for images in nodes (null = no limit).' },
          { name: 'contentScale', type: 'ContentScale', default: 'ContentScale.Fit', description: 'Content scaling mode for images.' },
          { name: 'imageShape', type: 'Shape', default: 'RectangleShape', description: 'Shape applied to node images.' },
          { name: 'paddingValues', type: 'PaddingValues', default: 'PaddingValues(4.dp)', description: 'Padding around node images.' },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  PICKER – DatePickerConfig
   * ══════════════════════════════════════════════════════ */
  DatePickerConfig: {
    name: 'DatePickerConfig',
    kind: 'data class',
    category: 'Components',
    subcategory: 'Picker',
    description: 'Configuration for date picker components. Controls year range, column ordering, and month display format.',
    relatedComponent: 'date-picker',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.picker.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import com.developerstring.jetco.ui.components.picker.model.DateOrder',
      ],
      sourceCode: `@Keep
@Stable
data class DatePickerConfig(
    val yearsRange: IntRange,
    val dateOrder: DateOrder,
    val showShortMonths: Boolean,
    val showMonthAsNumber: Boolean,
    val customMonthNames: List<String>?,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.picker.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import com.developerstring.jetco_kmp.components.picker.model.DateOrder',
      ],
      sourceCode: `@Stable
data class DatePickerConfig(
    val yearsRange: IntRange,
    val dateOrder: DateOrder,
    val showShortMonths: Boolean,
    val showMonthAsNumber: Boolean,
    val customMonthNames: List<String>?,
)`,
    },
    properties: [
      { name: 'yearsRange', type: 'IntRange', default: 'IntRange(1922, 2122)', description: 'Allowed year range for selection.' },
      { name: 'dateOrder', type: 'DateOrder', default: 'DateOrder.DAY_MONTH_YEAR', description: 'Column ordering of day, month, year (DAY_MONTH_YEAR, MONTH_DAY_YEAR, YEAR_MONTH_DAY).' },
      { name: 'showShortMonths', type: 'Boolean', default: 'false', description: 'Whether to use abbreviated month names (Jan, Feb…).' },
      { name: 'showMonthAsNumber', type: 'Boolean', default: 'false', description: 'Whether to display months as numbers instead of names.' },
      { name: 'customMonthNames', type: 'List<String>?', default: 'null', description: 'Optional custom list of 12 month names to override defaults.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  PICKER – WheelPickerConfig
   * ══════════════════════════════════════════════════════ */
  WheelPickerConfig: {
    name: 'WheelPickerConfig',
    kind: 'data class',
    category: 'Components',
    subcategory: 'Picker',
    description: 'Configuration for the wheel-scroll picker component — controls height, visible rows, text styles, selector appearance, and haptic feedback.',
    relatedComponent: 'date-picker',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.picker.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Keep
@Stable
data class WheelPickerConfig(
    val height: Dp,
    val rowCount: Int,
    val selectedTextStyle: TextStyle,
    val defaultTextStyle: TextStyle,
    val selectorColor: Color,
    val selectorShape: Shape,
    val selectorHeight: Dp,
    val fadeEdges: Boolean,
    val fadeEdgeColor: Color,
    val hapticFeedback: Boolean,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.picker.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Stable
data class WheelPickerConfig(
    val height: Dp,
    val rowCount: Int,
    val selectedTextStyle: TextStyle,
    val defaultTextStyle: TextStyle,
    val selectorColor: Color,
    val selectorShape: Shape,
    val selectorHeight: Dp,
    val fadeEdges: Boolean,
    val fadeEdgeColor: Color,
    val hapticFeedback: Boolean,
)`,
    },
    properties: [
      { name: 'height', type: 'Dp', default: '200.dp', description: 'Total height of the wheel picker area.' },
      { name: 'rowCount', type: 'Int', default: '3', description: 'Number of visible rows in the wheel (must be odd for centered selection).' },
      { name: 'selectedTextStyle', type: 'TextStyle', default: 'TextStyle(fontSize = 18.sp, fontWeight = FontWeight.SemiBold, color = Color(0xFF1A1A1A))', description: 'Text style for the currently selected item.' },
      { name: 'defaultTextStyle', type: 'TextStyle', default: 'TextStyle(fontSize = 16.sp, fontWeight = FontWeight.Normal, color = Color(0xFF888888))', description: 'Text style for non-selected items.' },
      { name: 'selectorColor', type: 'Color', default: 'Color(0x1A000000)', description: 'Background color of the selector highlight.' },
      { name: 'selectorShape', type: 'Shape', default: 'RoundedCornerShape(8.dp)', description: 'Shape of the selector highlight.' },
      { name: 'selectorHeight', type: 'Dp', default: '48.dp', description: 'Height of the selector highlight row.' },
      { name: 'fadeEdges', type: 'Boolean', default: 'true', description: 'Whether to apply a fade/gradient effect at the top and bottom edges.' },
      { name: 'fadeEdgeColor', type: 'Color', default: 'Color.White', description: 'Color used for fading edges (usually matches background).' },
      { name: 'hapticFeedback', type: 'Boolean', default: 'true', description: 'Whether to trigger haptic feedback on selection change.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  PICKER – PickerHeaderConfig
   * ══════════════════════════════════════════════════════ */
  HeaderConfig: {
    name: 'HeaderConfig',
    kind: 'data class',
    category: 'Components',
    subcategory: 'Picker',
    description: 'Configuration for the picker header bar with title, done button, and optional cancel button.',
    relatedComponent: 'date-picker',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.picker.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.text.TextStyle',
      ],
      sourceCode: `@Keep
@Stable
data class PickerHeaderConfig(
    val enabled: Boolean,
    val title: String,
    val doneLabel: String,
    val titleStyle: TextStyle,
    val doneLabelStyle: TextStyle,
    val doneLabelColor: Color,
    val cancelLabel: String?,
    val cancelLabelStyle: TextStyle,
    val cancelLabelColor: Color,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.picker.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.text.TextStyle',
      ],
      sourceCode: `@Stable
data class PickerHeaderConfig(
    val enabled: Boolean,
    val title: String,
    val doneLabel: String,
    val titleStyle: TextStyle,
    val doneLabelStyle: TextStyle,
    val doneLabelColor: Color,
    val cancelLabel: String?,
    val cancelLabelStyle: TextStyle,
    val cancelLabelColor: Color,
)`,
    },
    properties: [
      { name: 'enabled', type: 'Boolean', default: 'true', description: 'Whether the header bar is visible.' },
      { name: 'title', type: 'String', default: '"Select"', description: 'Title text displayed in the header.' },
      { name: 'doneLabel', type: 'String', default: '"Done"', description: 'Label for the done/confirm button.' },
      { name: 'titleStyle', type: 'TextStyle', default: 'TextStyle(fontSize = 17.sp, fontWeight = FontWeight.SemiBold)', description: 'Text style for the header title.' },
      { name: 'doneLabelStyle', type: 'TextStyle', default: 'TextStyle(fontSize = 16.sp, fontWeight = FontWeight.Medium)', description: 'Text style for the done button label.' },
      { name: 'doneLabelColor', type: 'Color', default: 'Color(0xFF007AFF)', description: 'Color of the done button text.' },
      { name: 'cancelLabel', type: 'String?', default: 'null', description: 'Optional cancel label; if null, no cancel button is shown.' },
      { name: 'cancelLabelStyle', type: 'TextStyle', default: 'TextStyle(fontSize = 16.sp, fontWeight = FontWeight.Normal)', description: 'Text style for the cancel label.' },
      { name: 'cancelLabelColor', type: 'Color', default: 'Color(0xFF999999)', description: 'Color of the cancel label text.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  PICKER – PickerContainerConfig
   * ══════════════════════════════════════════════════════ */
  ContainerConfig: {
    name: 'ContainerConfig',
    kind: 'data class',
    category: 'Components',
    subcategory: 'Picker',
    description: 'Configuration for the outer container of dialog/bottom-sheet pickers.',
    relatedComponent: 'date-picker',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.picker.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Keep
@Stable
data class PickerContainerConfig(
    val containerColor: Color,
    val shape: Shape,
    val tonalElevation: Dp,
    val shadowElevation: Dp,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.picker.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.unit.Dp',
      ],
      sourceCode: `@Stable
data class PickerContainerConfig(
    val containerColor: Color,
    val shape: Shape,
    val tonalElevation: Dp,
    val shadowElevation: Dp,
)`,
    },
    properties: [
      { name: 'containerColor', type: 'Color', default: 'Color.White', description: 'Background color of the picker container.' },
      { name: 'shape', type: 'Shape', default: 'RoundedCornerShape(16.dp)', description: 'Shape of the container.' },
      { name: 'tonalElevation', type: 'Dp', default: '6.dp', description: 'Tonal elevation for Material 3 surfaces.' },
      { name: 'shadowElevation', type: 'Dp', default: '0.dp', description: 'Shadow elevation for the container.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  PICKER – DateRangePickerConfig
   * ══════════════════════════════════════════════════════ */
  DateRangePickerConfig: {
    name: 'DateRangePickerConfig',
    kind: 'data class',
    category: 'Components',
    subcategory: 'Picker',
    description: 'Configuration specific to the date range picker. Controls the from/to box appearance and text formatting.',
    relatedComponent: 'date-picker',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.picker.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.text.TextStyle',
      ],
      sourceCode: `@Keep
@Stable
data class DateRangePickerConfig(
    val centerText: String,
    val boxColor: Color,
    val selectedBoxColor: Color,
    val boxBorderColor: Color,
    val selectedBoxBorderColor: Color,
    val selectedTextColor: Color,
    val boxShape: Shape,
    val boxTextStyle: TextStyle,
    val dateTextFormat: String,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.picker.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.graphics.Shape',
        'import androidx.compose.ui.text.TextStyle',
      ],
      sourceCode: `@Stable
data class DateRangePickerConfig(
    val centerText: String,
    val boxColor: Color,
    val selectedBoxColor: Color,
    val boxBorderColor: Color,
    val selectedBoxBorderColor: Color,
    val selectedTextColor: Color,
    val boxShape: Shape,
    val boxTextStyle: TextStyle,
    val dateTextFormat: String,
)`,
    },
    properties: [
      { name: 'centerText', type: 'String', default: '"to"', description: 'Text displayed between the from-date and to-date boxes.' },
      { name: 'boxColor', type: 'Color', default: 'Color.White', description: 'Background color of date boxes.' },
      { name: 'selectedBoxColor', type: 'Color', default: 'Color(0xFFE9F2FE)', description: 'Background color of the currently selected date box.' },
      { name: 'boxBorderColor', type: 'Color', default: 'Color(0xFFE0E0E0)', description: 'Border color of date boxes.' },
      { name: 'selectedBoxBorderColor', type: 'Color', default: 'Color(0xFF007AFF)', description: 'Border color of the selected date box.' },
      { name: 'selectedTextColor', type: 'Color', default: 'Color(0xFF007AFF)', description: 'Text color inside the selected date box.' },
      { name: 'boxShape', type: 'Shape', default: 'RoundedCornerShape(8.dp)', description: 'Shape of the date boxes.' },
      { name: 'boxTextStyle', type: 'TextStyle', default: 'TextStyle(fontSize = 14.sp)', description: 'Text style for date text inside boxes.' },
      { name: 'dateTextFormat', type: 'String', default: '"dd MMM yyyy"', description: 'Format pattern for displaying dates in boxes.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  PICKER – TimePickerConfig
   * ══════════════════════════════════════════════════════ */
  TimePickerConfig: {
    name: 'TimePickerConfig',
    kind: 'data class',
    category: 'Components',
    subcategory: 'Picker',
    description: 'Configuration for time picker components. Controls time format, seconds visibility, and interval granularity.',
    relatedComponent: 'date-picker',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.picker.config',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import com.developerstring.jetco.ui.components.picker.model.TimeFormat',
      ],
      sourceCode: `@Keep
@Stable
data class TimePickerConfig(
    val timeFormat: TimeFormat,
    val showSeconds: Boolean,
    val minuteInterval: Int,
    val secondInterval: Int,
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.picker.config',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import com.developerstring.jetco_kmp.components.picker.model.TimeFormat',
      ],
      sourceCode: `@Stable
data class TimePickerConfig(
    val timeFormat: TimeFormat,
    val showSeconds: Boolean,
    val minuteInterval: Int,
    val secondInterval: Int,
)`,
    },
    properties: [
      { name: 'timeFormat', type: 'TimeFormat', default: 'TimeFormat.HOUR_24', description: '12-hour or 24-hour display format (HOUR_12 or HOUR_24).' },
      { name: 'showSeconds', type: 'Boolean', default: 'false', description: 'Whether to include a seconds column in the picker.' },
      { name: 'minuteInterval', type: 'Int', default: '1', description: 'Granularity of minute selection (e.g., 1, 5, 10, 15, 30). Clamped between 1 and 30.' },
      { name: 'secondInterval', type: 'Int', default: '1', description: 'Granularity of second selection (e.g., 1, 5, 10, 15, 30). Clamped between 1 and 30.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  ANIMATED SEARCH BAR – AnimatedSearchBarConfig
   * ══════════════════════════════════════════════════════ */
  AnimatedSearchBarConfig: {
    name: 'AnimatedSearchBarConfig',
    kind: 'data class',
    category: 'Components',
    subcategory: 'Animated Search Bar',
    description: 'Visual configuration for the AnimatedSearchBar. Controls size, colors, corner radius, border style, icon colors, and placeholder text.',
    relatedComponent: 'animated-search-bar',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.search.animated_searchbar',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.unit.Dp',
        'import androidx.compose.ui.unit.dp',
      ],
      sourceCode: `@Keep
@Stable
data class AnimatedSearchBarConfig(
    val height: Dp = 48.dp,
    val expandedWidth: Dp = 320.dp,
    val collapsedWidth: Dp = 64.dp,
    val searchBarBackgroundColor: Color = Color.White,
    val searchBarCornerRadius: Dp = 35.dp,
    val searchBarBorderColor: Color = Color(0xFFE0E0E0),
    val searchBarBorderWidth: Dp = 2.dp,
    val iconBackgroundColor: Color = Color(0xFF558B2F),
    val iconTint: Color = Color.White,
    val clearIconTint: Color = Color.Black,
    val placeholderTextString: String = "Search"
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.search.animated_searchbar',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.unit.Dp',
        'import androidx.compose.ui.unit.dp',
      ],
      sourceCode: `@Stable
data class AnimatedSearchBarConfig(
    val height: Dp = 48.dp,
    val expandedWidth: Dp = 320.dp,
    val collapsedWidth: Dp = 64.dp,
    val searchBarBackgroundColor: Color = Color.White,
    val searchBarCornerRadius: Dp = 35.dp,
    val searchBarBorderColor: Color = Color(0xFFE0E0E0),
    val searchBarBorderWidth: Dp = 2.dp,
    val iconBackgroundColor: Color = Color(0xFF558B2F),
    val iconTint: Color = Color.White,
    val clearIconTint: Color = Color.Black,
    val placeholderTextString: String = "Search"
)`,
    },
    properties: [
      { name: 'height', type: 'Dp', default: '48.dp', description: 'Height of the search bar.' },
      { name: 'expandedWidth', type: 'Dp', default: '320.dp', description: 'Width when the search bar is expanded.' },
      { name: 'collapsedWidth', type: 'Dp', default: '64.dp', description: 'Width when the search bar is collapsed (icon only).' },
      { name: 'searchBarBackgroundColor', type: 'Color', default: 'Color.White', description: 'Background color of the search bar.' },
      { name: 'searchBarCornerRadius', type: 'Dp', default: '35.dp', description: 'Corner radius of the search bar shape.' },
      { name: 'searchBarBorderColor', type: 'Color', default: 'Color(0xFFE0E0E0)', description: 'Color of the search bar border.' },
      { name: 'searchBarBorderWidth', type: 'Dp', default: '2.dp', description: 'Width of the border line.' },
      { name: 'iconBackgroundColor', type: 'Color', default: 'Color(0xFF558B2F)', description: 'Background color of the search icon button.' },
      { name: 'iconTint', type: 'Color', default: 'Color.White', description: 'Tint color applied to the search icon.' },
      { name: 'clearIconTint', type: 'Color', default: 'Color.Black', description: 'Tint color applied to the clear (X) icon.' },
      { name: 'placeholderTextString', type: 'String', default: '"Search"', description: 'Placeholder text displayed when the text field is empty.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  ANIMATED SEARCH BAR – AnimatedSearchBarTextConfig
   * ══════════════════════════════════════════════════════ */
  AnimatedSearchBarTextConfig: {
    name: 'AnimatedSearchBarTextConfig',
    kind: 'data class',
    category: 'Components',
    subcategory: 'Animated Search Bar',
    description: 'Text styling configuration for the AnimatedSearchBar. Controls input text appearance, placeholder styling, and cursor color.',
    relatedComponent: 'animated-search-bar',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.search.animated_searchbar',
      annotations: ['@Keep', '@Stable'],
      imports: [
        'import androidx.annotation.Keep',
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.ui.text.font.FontFamily',
        'import androidx.compose.ui.text.font.FontWeight',
        'import androidx.compose.ui.unit.TextUnit',
        'import androidx.compose.ui.unit.sp',
      ],
      sourceCode: `@Keep
@Stable
data class AnimatedSearchBarTextConfig(
    val textStyle: TextStyle = TextStyle(fontSize = 16.sp, lineHeight = 18.sp),
    val fontFamily: FontFamily? = null,
    val fontWeight: FontWeight? = null,
    val letterSpacing: TextUnit = TextUnit.Unspecified,
    val inputTextColor: Color = Color.Black,
    val placeholderTextStyle: TextStyle = TextStyle(fontSize = 16.sp, lineHeight = 18.sp),
    val placeholderFontFamily: FontFamily? = null,
    val placeholderFontWeight: FontWeight? = null,
    val placeholderTextColor: Color = Color.Black,
    val cursorColor: Color = Color.DarkGray
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.search.animated_searchbar',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.Color',
        'import androidx.compose.ui.text.TextStyle',
        'import androidx.compose.ui.text.font.FontFamily',
        'import androidx.compose.ui.text.font.FontWeight',
        'import androidx.compose.ui.unit.TextUnit',
        'import androidx.compose.ui.unit.sp',
      ],
      sourceCode: `@Stable
data class AnimatedSearchBarTextConfig(
    val textStyle: TextStyle = TextStyle(fontSize = 16.sp, lineHeight = 18.sp),
    val fontFamily: FontFamily? = null,
    val fontWeight: FontWeight? = null,
    val letterSpacing: TextUnit = TextUnit.Unspecified,
    val inputTextColor: Color = Color.Black,
    val placeholderTextStyle: TextStyle = TextStyle(fontSize = 16.sp, lineHeight = 18.sp),
    val placeholderFontFamily: FontFamily? = null,
    val placeholderFontWeight: FontWeight? = null,
    val placeholderTextColor: Color = Color.Black,
    val cursorColor: Color = Color.DarkGray
)`,
    },
    properties: [
      { name: 'textStyle', type: 'TextStyle', default: 'TextStyle(fontSize = 16.sp, lineHeight = 18.sp)', description: 'Text style for the input text.' },
      { name: 'fontFamily', type: 'FontFamily?', default: 'null', description: 'Font family override for input text.' },
      { name: 'fontWeight', type: 'FontWeight?', default: 'null', description: 'Font weight override for input text.' },
      { name: 'letterSpacing', type: 'TextUnit', default: 'TextUnit.Unspecified', description: 'Letter spacing for input text.' },
      { name: 'inputTextColor', type: 'Color', default: 'Color.Black', description: 'Color of the input text.' },
      { name: 'placeholderTextStyle', type: 'TextStyle', default: 'TextStyle(fontSize = 16.sp, lineHeight = 18.sp)', description: 'Text style for the placeholder text.' },
      { name: 'placeholderFontFamily', type: 'FontFamily?', default: 'null', description: 'Font family override for placeholder text.' },
      { name: 'placeholderFontWeight', type: 'FontWeight?', default: 'null', description: 'Font weight override for placeholder text.' },
      { name: 'placeholderTextColor', type: 'Color', default: 'Color.Black', description: 'Color of the placeholder text.' },
      { name: 'cursorColor', type: 'Color', default: 'Color.DarkGray', description: 'Color of the text input cursor.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  ANIMATED SEARCH BAR – AnimatedSearchBarController
   * ══════════════════════════════════════════════════════ */
  AnimatedSearchBarController: {
    name: 'AnimatedSearchBarController',
    kind: 'class',
    category: 'Components',
    subcategory: 'Animated Search Bar',
    description: 'Controller for programmatic collapse of the AnimatedSearchBar. Create with rememberAnimatedSearchBarController() and call controller.collapse() to close the bar.',
    relatedComponent: 'animated-search-bar',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.search.animated_searchbar',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
      ],
      sourceCode: `@Stable
class AnimatedSearchBarController {
    internal var collapseRequest: (() -> Unit)? = null
    fun collapse() {
        collapseRequest?.invoke()
    }
}

@Composable
fun rememberAnimatedSearchBarController(): AnimatedSearchBarController {
    return remember { AnimatedSearchBarController() }
}`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.search.animated_searchbar',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
      ],
      sourceCode: `@Stable
class AnimatedSearchBarController {
    internal var collapseRequest: (() -> Unit)? = null
    fun collapse() {
        collapseRequest?.invoke()
    }
}

@Composable
fun rememberAnimatedSearchBarController(): AnimatedSearchBarController {
    return remember { AnimatedSearchBarController() }
}`,
    },
    properties: [
      { name: 'collapse()', type: 'fun', default: '—', description: 'Programmatically collapses the search bar.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  STEPPER – StepperActionIcons
   * ══════════════════════════════════════════════════════ */
  StepperActionIcons: {
    name: 'StepperActionIcons',
    kind: 'data class',
    category: 'Components',
    subcategory: 'Stepper',
    description: 'Customizes the icons displayed inside stepper nodes for completed, error, and active states.',
    relatedComponent: 'stepper',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.stepper.model',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.vector.ImageVector',
        'import androidx.compose.material.icons.Icons',
        'import androidx.compose.material.icons.filled.Check',
        'import androidx.compose.material.icons.filled.Close',
        'import androidx.compose.material.icons.rounded.Check',
      ],
      sourceCode: `@Stable
data class StepperActionIcons(
    val completed: ImageVector = Icons.Default.Check,
    val error: ImageVector = Icons.Default.Close,
    val active: ImageVector = Icons.Rounded.Check
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.stepper.model',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import androidx.compose.ui.graphics.vector.ImageVector',
        'import androidx.compose.material.icons.Icons',
        'import androidx.compose.material.icons.filled.Check',
        'import androidx.compose.material.icons.filled.Close',
        'import androidx.compose.material.icons.rounded.Check',
      ],
      sourceCode: `@Stable
data class StepperActionIcons(
    val completed: ImageVector = Icons.Default.Check,
    val error: ImageVector = Icons.Default.Close,
    val active: ImageVector = Icons.Rounded.Check
)`,
    },
    properties: [
      { name: 'completed', type: 'ImageVector', default: 'Icons.Default.Check', description: 'Icon shown inside completed step nodes.' },
      { name: 'error', type: 'ImageVector', default: 'Icons.Default.Close', description: 'Icon shown inside error step nodes.' },
      { name: 'active', type: 'ImageVector', default: 'Icons.Rounded.Check', description: 'Icon shown inside the currently active step node.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  PICKER – PickerDisplayMode (enum)
   * ══════════════════════════════════════════════════════ */
  PickerDisplayMode: {
    name: 'PickerDisplayMode',
    kind: 'enum class',
    category: 'Components',
    subcategory: 'Picker',
    description: 'Controls how the picker is displayed — as a dialog, bottom sheet, or inline within the layout.',
    relatedComponent: 'date-picker',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.picker.model',
      annotations: [],
      imports: [],
      sourceCode: `enum class PickerDisplayMode {
    DIALOG,
    BOTTOM_SHEET,
    INLINE
}`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.picker.model',
      annotations: [],
      imports: [],
      sourceCode: `enum class PickerDisplayMode {
    DIALOG,
    BOTTOM_SHEET,
    INLINE
}`,
    },
    properties: [
      { name: 'DIALOG', type: 'enum value', default: '—', description: 'Show the picker in a modal dialog.' },
      { name: 'BOTTOM_SHEET', type: 'enum value', default: '—', description: 'Show the picker in a bottom sheet.' },
      { name: 'INLINE', type: 'enum value', default: '—', description: 'Show the picker inline within the parent layout.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  PICKER – DateOrder (enum)
   * ══════════════════════════════════════════════════════ */
  DateOrder: {
    name: 'DateOrder',
    kind: 'enum class',
    category: 'Components',
    subcategory: 'Picker',
    description: 'Defines the column order for date picker wheels.',
    relatedComponent: 'date-picker',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.picker.model',
      annotations: [],
      imports: [],
      sourceCode: `enum class DateOrder {
    DAY_MONTH_YEAR,
    MONTH_DAY_YEAR,
    YEAR_MONTH_DAY
}`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.picker.model',
      annotations: [],
      imports: [],
      sourceCode: `enum class DateOrder {
    DAY_MONTH_YEAR,
    MONTH_DAY_YEAR,
    YEAR_MONTH_DAY
}`,
    },
    properties: [
      { name: 'DAY_MONTH_YEAR', type: 'enum value', default: '—', description: 'Day – Month – Year column ordering.' },
      { name: 'MONTH_DAY_YEAR', type: 'enum value', default: '—', description: 'Month – Day – Year column ordering.' },
      { name: 'YEAR_MONTH_DAY', type: 'enum value', default: '—', description: 'Year – Month – Day column ordering.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  PICKER – TimeFormat (enum)
   * ══════════════════════════════════════════════════════ */
  TimeFormat: {
    name: 'TimeFormat',
    kind: 'enum class',
    category: 'Components',
    subcategory: 'Picker',
    description: 'Defines whether the time picker uses 12-hour or 24-hour format.',
    relatedComponent: 'time-picker',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.picker.model',
      annotations: [],
      imports: [],
      sourceCode: `enum class TimeFormat {
    HOUR_12,
    HOUR_24
}`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.picker.model',
      annotations: [],
      imports: [],
      sourceCode: `enum class TimeFormat {
    HOUR_12,
    HOUR_24
}`,
    },
    properties: [
      { name: 'HOUR_12', type: 'enum value', default: '—', description: '12-hour format with AM/PM indicator.' },
      { name: 'HOUR_24', type: 'enum value', default: '—', description: '24-hour format (0–23).' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  PICKER – PickerDate
   * ══════════════════════════════════════════════════════ */
  PickerDate: {
    name: 'PickerDate',
    kind: 'data class',
    category: 'Components',
    subcategory: 'Picker',
    description: 'Represents a date value with year, month, and dayOfMonth. Provides formatting helpers and a companion now() factory.',
    relatedComponent: 'date-picker',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.picker.model',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
      ],
      sourceCode: `@Stable
data class PickerDate(
    val year: Int,
    val month: Int,
    val dayOfMonth: Int
) {
    fun toFormattedString(): String
    fun format(pattern: String): String
    companion object {
        fun now(): PickerDate
    }
}`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.picker.model',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
      ],
      sourceCode: `@Stable
data class PickerDate(
    val year: Int,
    val month: Int,
    val dayOfMonth: Int
) {
    fun toFormattedString(): String
    fun format(pattern: String): String
    companion object {
        fun now(): PickerDate
    }
}`,
    },
    properties: [
      { name: 'year', type: 'Int', default: '—', description: 'Year component of the date.' },
      { name: 'month', type: 'Int', default: '—', description: 'Month component (1–12).' },
      { name: 'dayOfMonth', type: 'Int', default: '—', description: 'Day of the month (1–31).' },
      { name: 'toFormattedString()', type: 'fun', default: '—', description: 'Returns the date as a formatted string.' },
      { name: 'format(pattern)', type: 'fun', default: '—', description: 'Formats the date using the given pattern string.' },
      { name: 'now()', type: 'companion fun', default: '—', description: 'Creates a PickerDate with the current date.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  PICKER – PickerTime
   * ══════════════════════════════════════════════════════ */
  PickerTime: {
    name: 'PickerTime',
    kind: 'data class',
    category: 'Components',
    subcategory: 'Picker',
    description: 'Represents a time value with hour, minute, and optional second. Provides formatting helper and a companion now() factory.',
    relatedComponent: 'time-picker',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.picker.model',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import com.developerstring.jetco.ui.components.picker.model.TimeFormat',
      ],
      sourceCode: `@Stable
data class PickerTime(
    val hour: Int,
    val minute: Int,
    val second: Int = 0
) {
    fun toFormattedString(format: TimeFormat): String
    companion object {
        fun now(): PickerTime
    }
}`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.picker.model',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
        'import com.developerstring.jetco_kmp.components.picker.model.TimeFormat',
      ],
      sourceCode: `@Stable
data class PickerTime(
    val hour: Int,
    val minute: Int,
    val second: Int = 0
) {
    fun toFormattedString(format: TimeFormat): String
    companion object {
        fun now(): PickerTime
    }
}`,
    },
    properties: [
      { name: 'hour', type: 'Int', default: '—', description: 'Hour component (0–23).' },
      { name: 'minute', type: 'Int', default: '—', description: 'Minute component (0–59).' },
      { name: 'second', type: 'Int', default: '0', description: 'Second component (0–59). Defaults to 0.' },
      { name: 'toFormattedString(format)', type: 'fun', default: '—', description: 'Returns time as a formatted string using the given TimeFormat.' },
      { name: 'now()', type: 'companion fun', default: '—', description: 'Creates a PickerTime with the current time.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  PICKER – PickerDateTime
   * ══════════════════════════════════════════════════════ */
  PickerDateTime: {
    name: 'PickerDateTime',
    kind: 'data class',
    category: 'Components',
    subcategory: 'Picker',
    description: 'Combines a PickerDate and a PickerTime into a single date-time value. Provides a companion now() factory.',
    relatedComponent: 'date-time-picker',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.picker.model',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
      ],
      sourceCode: `@Stable
data class PickerDateTime(
    val date: PickerDate,
    val time: PickerTime
) {
    companion object {
        fun now(): PickerDateTime
    }
}`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.picker.model',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
      ],
      sourceCode: `@Stable
data class PickerDateTime(
    val date: PickerDate,
    val time: PickerTime
) {
    companion object {
        fun now(): PickerDateTime
    }
}`,
    },
    properties: [
      { name: 'date', type: 'PickerDate', default: '—', description: 'The date component.' },
      { name: 'time', type: 'PickerTime', default: '—', description: 'The time component.' },
      { name: 'now()', type: 'companion fun', default: '—', description: 'Creates a PickerDateTime with the current date and time.' },
    ],
  },

  /* ══════════════════════════════════════════════════════
   *  PICKER – PickerDateRange
   * ══════════════════════════════════════════════════════ */
  PickerDateRange: {
    name: 'PickerDateRange',
    kind: 'data class',
    category: 'Components',
    subcategory: 'Picker',
    description: 'Represents a range between two dates. Used as the result type for the DateRangePicker component.',
    relatedComponent: 'date-range-picker',
    android: {
      packageName: 'com.developerstring.jetco.ui.components.picker.model',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
      ],
      sourceCode: `@Stable
data class PickerDateRange(
    val startDate: PickerDate,
    val endDate: PickerDate
)`,
    },
    kmp: {
      packageName: 'com.developerstring.jetco_kmp.components.picker.model',
      annotations: ['@Stable'],
      imports: [
        'import androidx.compose.runtime.Stable',
      ],
      sourceCode: `@Stable
data class PickerDateRange(
    val startDate: PickerDate,
    val endDate: PickerDate
)`,
    },
    properties: [
      { name: 'startDate', type: 'PickerDate', default: '—', description: 'Start date of the range.' },
      { name: 'endDate', type: 'PickerDate', default: '—', description: 'End date of the range.' },
    ],
  },
}

/* ── Helper: get all classes as sorted array ── */
export function getAllClasses() {
  return Object.values(referenceData).sort((a, b) => a.name.localeCompare(b.name))
}

/* ── Helper: group classes by category → subcategory ── */
export function getClassesByCategory() {
  const map = {}
  for (const cls of Object.values(referenceData)) {
    if (!map[cls.category]) map[cls.category] = {}
    if (!map[cls.category][cls.subcategory]) map[cls.category][cls.subcategory] = []
    map[cls.category][cls.subcategory].push(cls)
  }
  return map
}

/* ── Helper: get single class by ID ── */
export function getClassById(id) {
  return referenceData[id] || null
}

export default referenceData
