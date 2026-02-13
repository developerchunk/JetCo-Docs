const IMAGE_BASE = 'https://github.com/developerchunk/JetCo/blob/main/assets/images/'

function img(filename) {
  if (!filename) return null
  return `${IMAGE_BASE}${filename}?raw=true`
}

const components = {
  // ═══════════════════════════════════════════
  //  CHARTS
  // ═══════════════════════════════════════════

  'pie-chart': {
    name: 'PieChart',
    category: 'Charts',
    description: 'A customizable animated pie chart with optional chart item labels and click handlers.',
    image: img('1.jpg'),
    androidImport: 'com.developerstring.jetco.ui.charts.piechart.PieChart',
    kmpImport: 'com.developerstring.jetco_kmp.charts.piechart.PieChart',
    params: [
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the pie chart container.' },
      { name: 'chartData', type: 'Map<String, Float>', default: '—', description: 'Data map of label to value for each pie slice.' },
      { name: 'pieChartConfig', type: 'PieChartConfig', default: 'PieChartDefaults.pieChartConfig()', description: 'Configuration for radius, thickness, colors, and text style.' },
      { name: 'pieChartAnimationConfig', type: 'PieChartAnimationConfig', default: 'PieChartDefaults.pieChartAnimationConfig()', description: 'Animation configuration for rotation and duration.' },
      { name: 'chartItemModifier', type: 'Modifier', default: 'Modifier', description: 'Modifier applied to each chart item label.' },
      { name: 'chartItems', type: '@Composable ((List<PieChartEntry>) -> Unit)?', default: 'null', description: 'Custom composable to render chart item labels.' },
      { name: 'onItemClick', type: '((PieChartEntry) -> Unit)?', default: 'null', description: 'Callback invoked when a pie slice is clicked.' },
    ],
    codeExamples: {
      android: `import com.developerstring.jetco.ui.charts.piechart.PieChart
import com.developerstring.jetco.ui.charts.piechart.PieChartDefaults

@Composable
fun PieChartExample() {
    val data = mapOf(
        "Kotlin" to 40f,
        "Java" to 25f,
        "Swift" to 20f,
        "Dart" to 15f
    )

    PieChart(
        chartData = data,
        pieChartConfig = PieChartDefaults.pieChartConfig(
            radius = 80.dp,
            thickness = 30.dp
        )
    )
}`,
      kmp: `import com.developerstring.jetco_kmp.charts.piechart.PieChart
import com.developerstring.jetco_kmp.charts.piechart.PieChartDefaults

@Composable
fun PieChartExample() {
    val data = mapOf(
        "Kotlin" to 40f,
        "Java" to 25f,
        "Swift" to 20f,
        "Dart" to 15f
    )

    PieChart(
        chartData = data,
        pieChartConfig = PieChartDefaults.pieChartConfig(
            radius = 80.dp,
            thickness = 30.dp
        )
    )
}`,
    },
    relatedConfigs: ['PieChartConfig', 'PieChartAnimationConfig', 'PieChartEntry'],
    configDetails: [
      {
        name: 'PieChartConfig',
        params: [
          { name: 'radius', type: 'Dp', default: '75.dp', description: 'Radius of the pie chart.' },
          { name: 'thickness', type: 'Dp', default: '25.dp', description: 'Thickness of the pie ring.' },
          { name: 'colorsList', type: 'List<Color>', default: 'default colors', description: 'List of colors for pie slices.' },
          { name: 'enableChartItems', type: 'Boolean', default: 'true', description: 'Whether to show chart item labels.' },
          { name: 'isChartItemScrollEnable', type: 'Boolean', default: 'false', description: 'Enable scrolling for chart items.' },
          { name: 'textStyle', type: 'TextStyle', default: 'TextStyle.Default', description: 'Text style for chart item labels.' },
        ],
      },
      {
        name: 'PieChartAnimationConfig',
        params: [
          { name: 'enableAnimation', type: 'Boolean', default: 'true', description: 'Enable pie chart animation.' },
          { name: 'animationDuration', type: 'Int', default: '1000', description: 'Duration of animation in milliseconds.' },
          { name: 'animationRotations', type: 'Int', default: '11', description: 'Number of rotation cycles during animation.' },
        ],
      },
      {
        name: 'PieChartEntry',
        params: [
          { name: 'name', type: 'String', default: '—', description: 'Name/label of the pie slice.' },
          { name: 'value', type: 'Float', default: '—', description: 'Numeric value of the slice.' },
          { name: 'color', type: 'Color', default: '—', description: 'Color of the slice.' },
        ],
      },
    ],
  },

  'column-bar-chart': {
    name: 'ColumnBarChart',
    category: 'Charts',
    description: 'A vertical bar chart with configurable axes, grid lines, pop-ups, and animation support.',
    image: img('2.jpg'),
    androidImport: 'com.developerstring.jetco.ui.charts.barchart.ColumnBarChart',
    kmpImport: 'com.developerstring.jetco_kmp.charts.barchart.ColumnBarChart',
    params: [
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the chart container.' },
      { name: 'chartData', type: 'Map<String, Float>', default: '—', description: 'Data map of label to bar value.' },
      { name: 'barChartConfig', type: 'BarChartConfig', default: 'BarChartDefaults.columnBarChartConfig()', description: 'Bar appearance config (color, height, width, shape).' },
      { name: 'yAxisConfig', type: 'YAxisConfig', default: 'BarChartDefaults.yAxisConfig()', description: 'Y-axis scale, line, and label config.' },
      { name: 'xAxisConfig', type: 'XAxisConfig', default: 'BarChartDefaults.xAxisConfig()', description: 'X-axis scale, line, and label config.' },
      { name: 'popUpConfig', type: 'PopUpConfig', default: 'BarChartDefaults.popUpConfig()', description: 'Pop-up tooltip configuration.' },
      { name: 'gridLineStyle', type: 'GridLineStyle', default: 'BarChartDefaults.gridLineStyle()', description: 'Grid line appearance config.' },
      { name: 'maxBarValue', type: 'Float?', default: 'null', description: 'Maximum value for the Y axis. Auto-calculated if null.' },
      { name: 'enableAnimation', type: 'Boolean', default: 'true', description: 'Enable bar enter/exit animations.' },
      { name: 'maxTextLengthXAxis', type: 'Int', default: '3', description: 'Max characters for X-axis labels.' },
      { name: 'enableTextRotate', type: 'Boolean', default: 'false', description: 'Rotate X-axis labels.' },
      { name: 'textRotateAngle', type: 'Float', default: '45f', description: 'Rotation angle for X-axis labels.' },
      { name: 'enableGridLines', type: 'Boolean', default: 'true', description: 'Show background grid lines.' },
      { name: 'scrollEnable', type: 'Boolean', default: 'true', description: 'Enable horizontal scrolling.' },
      { name: 'onBarClicked', type: '((String, Float) -> Unit)?', default: 'null', description: 'Callback when a bar is clicked.' },
      { name: 'onXAxisLabelClicked', type: '((String) -> Unit)?', default: 'null', description: 'Callback when an X-axis label is clicked.' },
    ],
    codeExamples: {
      android: `import com.developerstring.jetco.ui.charts.barchart.ColumnBarChart
import com.developerstring.jetco.ui.charts.barchart.BarChartDefaults

@Composable
fun BarChartExample() {
    val data = mapOf(
        "Mon" to 120f,
        "Tue" to 85f,
        "Wed" to 200f,
        "Thu" to 150f,
        "Fri" to 170f
    )

    ColumnBarChart(
        chartData = data,
        barChartConfig = BarChartDefaults.columnBarChartConfig(
            color = Color(0xFF6C5CE7),
            height = 200.dp,
            width = 30.dp
        )
    )
}`,
      kmp: `import com.developerstring.jetco_kmp.charts.barchart.ColumnBarChart
import com.developerstring.jetco_kmp.charts.barchart.BarChartDefaults

@Composable
fun BarChartExample() {
    val data = mapOf(
        "Mon" to 120f,
        "Tue" to 85f,
        "Wed" to 200f,
        "Thu" to 150f,
        "Fri" to 170f
    )

    ColumnBarChart(
        chartData = data,
        barChartConfig = BarChartDefaults.columnBarChartConfig(
            color = Color(0xFF6C5CE7),
            height = 200.dp,
            width = 30.dp
        )
    )
}`,
    },
    relatedConfigs: ['BarChartConfig', 'YAxisConfig', 'XAxisConfig', 'PopUpConfig', 'GridLineStyle'],
    configDetails: [
      {
        name: 'BarChartConfig',
        params: [
          { name: 'color', type: 'Color', default: 'Color(0xFF6C5CE7)', description: 'Bar fill color.' },
          { name: 'height', type: 'Dp', default: '200.dp', description: 'Maximum bar height.' },
          { name: 'width', type: 'Dp', default: '25.dp', description: 'Bar width.' },
          { name: 'shape', type: 'Shape', default: 'RoundedCornerShape(6.dp)', description: 'Shape of each bar.' },
        ],
      },
      {
        name: 'YAxisConfig',
        params: [
          { name: 'isAxisScaleEnabled', type: 'Boolean', default: 'true', description: 'Show Y-axis scale labels.' },
          { name: 'isAxisLineEnabled', type: 'Boolean', default: 'true', description: 'Show Y-axis line.' },
          { name: 'axisLineWidth', type: 'Dp', default: '2.dp', description: 'Width of the Y-axis line.' },
          { name: 'axisLineColor', type: 'Color', default: 'Color.LightGray', description: 'Color of the Y-axis line.' },
          { name: 'axisScaleCount', type: 'Int', default: '5', description: 'Number of scale divisions.' },
          { name: 'textStyle', type: 'TextStyle', default: 'TextStyle.Default', description: 'Text style for axis labels.' },
          { name: 'textPrefix', type: 'String', default: '""', description: 'Prefix for axis values (e.g., "$").' },
          { name: 'textPostfix', type: 'String', default: '""', description: 'Postfix for axis values (e.g., "k").' },
        ],
      },
      {
        name: 'XAxisConfig',
        params: [
          { name: 'isAxisScaleEnabled', type: 'Boolean', default: 'true', description: 'Show X-axis scale labels.' },
          { name: 'isAxisLineEnabled', type: 'Boolean', default: 'true', description: 'Show X-axis line.' },
          { name: 'axisLineWidth', type: 'Dp', default: '2.dp', description: 'Width of the X-axis line.' },
          { name: 'axisLineColor', type: 'Color', default: 'Color.LightGray', description: 'Color of the X-axis line.' },
          { name: 'textStyle', type: 'TextStyle', default: 'TextStyle.Default', description: 'Text style for axis labels.' },
        ],
      },
      {
        name: 'PopUpConfig',
        params: [
          { name: 'enableXAxisPopUp', type: 'Boolean', default: 'true', description: 'Show pop-up on X-axis tap.' },
          { name: 'enableBarPopUp', type: 'Boolean', default: 'true', description: 'Show pop-up on bar tap.' },
          { name: 'background', type: 'Color', default: 'Color.White', description: 'Pop-up background color.' },
          { name: 'shape', type: 'Shape', default: 'RoundedCornerShape(8.dp)', description: 'Pop-up shape.' },
          { name: 'textStyle', type: 'TextStyle', default: 'TextStyle.Default', description: 'Pop-up text style.' },
        ],
      },
      {
        name: 'GridLineStyle',
        params: [
          { name: 'color', type: 'Color', default: 'Color.LightGray', description: 'Grid line color.' },
          { name: 'strokeWidth', type: 'Float', default: '1f', description: 'Grid line stroke width.' },
          { name: 'dashLength', type: 'Float', default: '10f', description: 'Dash length for dashed lines.' },
          { name: 'gapLength', type: 'Float', default: '5f', description: 'Gap length for dashed lines.' },
          { name: 'totalGridLines', type: 'Int', default: '5', description: 'Number of horizontal grid lines.' },
        ],
      },
    ],
  },

  'extended-column-bar-chart': {
    name: 'ExtendedColumnBarChart',
    category: 'Charts',
    description: 'An extended version of ColumnBarChart with customizable bar designs, grid lines, and pop-up composables.',
    image: img('3.jpg'),
    androidImport: 'com.developerstring.jetco.ui.charts.barchart.ExtendedColumnBarChart',
    kmpImport: 'com.developerstring.jetco_kmp.charts.barchart.ExtendedColumnBarChart',
    params: [
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the chart container.' },
      { name: 'chartData', type: 'Map<String, Float>', default: '—', description: 'Data map of label to bar value.' },
      { name: 'barChartConfig', type: 'BarChartConfig', default: 'BarChartDefaults.columnBarChartConfig()', description: 'Bar appearance config.' },
      { name: 'yAxisConfig', type: 'YAxisConfig', default: 'BarChartDefaults.yAxisConfig()', description: 'Y-axis config.' },
      { name: 'xAxisConfig', type: 'XAxisConfig', default: 'BarChartDefaults.xAxisConfig()', description: 'X-axis config.' },
      { name: 'maxBarValue', type: 'Float?', default: 'null', description: 'Maximum value for Y axis.' },
      { name: 'enableAnimation', type: 'Boolean', default: 'true', description: 'Enable animations.' },
      { name: 'enableGridLines', type: 'Boolean', default: 'true', description: 'Show grid lines.' },
      { name: 'scrollEnable', type: 'Boolean', default: 'true', description: 'Enable horizontal scrolling.' },
      { name: 'barDesign', type: '@Composable ((String) -> Unit)?', default: 'null', description: 'Custom composable rendered inside each bar.' },
      { name: 'gridLine', type: '@Composable (() -> Unit)?', default: 'null', description: 'Custom grid line composable.' },
      { name: 'barPopUp', type: '@Composable ((String, Float) -> Unit)?', default: 'null', description: 'Custom bar pop-up composable.' },
      { name: 'labelPopUp', type: '@Composable ((String) -> Unit)?', default: 'null', description: 'Custom X-axis label pop-up composable.' },
      { name: 'yAxisScaleLabel', type: '@Composable ((Float) -> Unit)?', default: 'null', description: 'Custom Y-axis label composable.' },
    ],
    codeExamples: {
      android: `import com.developerstring.jetco.ui.charts.barchart.ExtendedColumnBarChart
import com.developerstring.jetco.ui.charts.barchart.BarChartDefaults

@Composable
fun ExtendedBarChartExample() {
    val data = mapOf("A" to 50f, "B" to 80f, "C" to 30f)

    ExtendedColumnBarChart(
        chartData = data,
        barDesign = { label ->
            Text(label, color = Color.White, fontSize = 10.sp)
        }
    )
}`,
      kmp: `import com.developerstring.jetco_kmp.charts.barchart.ExtendedColumnBarChart
import com.developerstring.jetco_kmp.charts.barchart.BarChartDefaults

@Composable
fun ExtendedBarChartExample() {
    val data = mapOf("A" to 50f, "B" to 80f, "C" to 30f)

    ExtendedColumnBarChart(
        chartData = data,
        barDesign = { label ->
            Text(label, color = Color.White, fontSize = 10.sp)
        }
    )
}`,
    },
    relatedConfigs: ['BarChartConfig', 'YAxisConfig', 'XAxisConfig'],
    configDetails: [
      {
        name: 'BarChartConfig',
        params: [
          { name: 'color', type: 'Color', default: 'Color(0xFF6C5CE7)', description: 'Fill color for the bar.' },
          { name: 'height', type: 'Dp', default: '200.dp', description: 'Maximum height of the bar container.' },
          { name: 'width', type: 'Dp', default: '30.dp', description: 'Width of each bar.' },
          { name: 'shape', type: 'Shape', default: 'RoundedCornerShape(topStart=6.dp, topEnd=6.dp)', description: 'Shape of each bar (supports rounded corners).' },
        ],
      },
      {
        name: 'YAxisConfig',
        params: [
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
      {
        name: 'XAxisConfig',
        params: [
          { name: 'isAxisScaleEnabled', type: 'Boolean', default: 'true', description: 'Whether X-axis scale labels are displayed.' },
          { name: 'isAxisLineEnabled', type: 'Boolean', default: 'true', description: 'Whether the X-axis line is drawn.' },
          { name: 'axisLineWidth', type: 'Dp', default: '2.dp', description: 'Thickness of the X-axis line.' },
          { name: 'axisLineShape', type: 'Shape', default: 'RoundedCornerShape(50)', description: 'Shape of the axis line.' },
          { name: 'axisLineColor', type: 'Color', default: 'Color.LightGray', description: 'Color of the axis line.' },
          { name: 'textStyle', type: 'TextStyle', default: 'TextStyle()', description: 'Text style for X-axis labels.' },
        ],
      },
    ],
  },

  'group-column-bar-chart': {
    name: 'GroupColumnBarChart',
    category: 'Charts',
    description: 'A grouped vertical bar chart that displays multiple data series side by side for comparison.',
    image: img('4.jpg'),
    androidImport: 'com.developerstring.jetco.ui.charts.barchart.GroupColumnBarChart',
    kmpImport: 'com.developerstring.jetco_kmp.charts.barchart.GroupColumnBarChart',
    params: [
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the chart container.' },
      { name: 'chartData', type: 'Map<String, List<Float>>', default: '—', description: 'Data map of label to list of values per group.' },
      { name: 'groupBarChartConfig', type: 'GroupBarChartConfig', default: 'BarChartDefaults.groupBarChartConfig()', description: 'Group bar appearance config (colors, widths, gaps).' },
      { name: 'yAxisConfig', type: 'YAxisConfig', default: 'BarChartDefaults.yAxisConfig()', description: 'Y-axis config.' },
      { name: 'xAxisConfig', type: 'XAxisConfig', default: 'BarChartDefaults.xAxisConfig()', description: 'X-axis config.' },
      { name: 'popUpConfig', type: 'PopUpConfig', default: 'BarChartDefaults.popUpConfig()', description: 'Pop-up tooltip config.' },
      { name: 'gridLineStyle', type: 'GridLineStyle', default: 'BarChartDefaults.gridLineStyle()', description: 'Grid line style.' },
      { name: 'maxBarValue', type: 'Float?', default: 'null', description: 'Maximum Y-axis value.' },
      { name: 'enableAnimation', type: 'Boolean', default: 'true', description: 'Enable animations.' },
      { name: 'enableGridLines', type: 'Boolean', default: 'true', description: 'Show grid lines.' },
      { name: 'scrollEnable', type: 'Boolean', default: 'true', description: 'Enable horizontal scrolling.' },
    ],
    codeExamples: {
      android: `import com.developerstring.jetco.ui.charts.barchart.GroupColumnBarChart
import com.developerstring.jetco.ui.charts.barchart.BarChartDefaults

@Composable
fun GroupBarChartExample() {
    val data = mapOf(
        "Q1" to listOf(100f, 80f),
        "Q2" to listOf(150f, 120f),
        "Q3" to listOf(130f, 90f)
    )

    GroupColumnBarChart(
        chartData = data,
        groupBarChartConfig = BarChartDefaults.groupBarChartConfig(
            colors = listOf(Color(0xFF6C5CE7), Color(0xFFA78BFA))
        )
    )
}`,
      kmp: `import com.developerstring.jetco_kmp.charts.barchart.GroupColumnBarChart
import com.developerstring.jetco_kmp.charts.barchart.BarChartDefaults

@Composable
fun GroupBarChartExample() {
    val data = mapOf(
        "Q1" to listOf(100f, 80f),
        "Q2" to listOf(150f, 120f),
        "Q3" to listOf(130f, 90f)
    )

    GroupColumnBarChart(
        chartData = data,
        groupBarChartConfig = BarChartDefaults.groupBarChartConfig(
            colors = listOf(Color(0xFF6C5CE7), Color(0xFFA78BFA))
        )
    )
}`,
    },
    relatedConfigs: ['GroupBarChartConfig'],
    configDetails: [
      {
        name: 'GroupBarChartConfig',
        params: [
          { name: 'colors', type: 'List<Color>', default: 'default colors', description: 'List of colors for each group series.' },
          { name: 'height', type: 'Dp', default: '200.dp', description: 'Maximum bar height.' },
          { name: 'width', type: 'Dp', default: '20.dp', description: 'Width of each bar in the group.' },
          { name: 'shape', type: 'Shape', default: 'RoundedCornerShape(4.dp)', description: 'Shape of each bar.' },
          { name: 'gapBetweenBar', type: 'Dp', default: '4.dp', description: 'Gap between bars within a group.' },
          { name: 'gapBetweenGroup', type: 'Dp', default: '16.dp', description: 'Gap between groups.' },
        ],
      },
    ],
  },

  'line-graph': {
    name: 'LineGraph',
    category: 'Charts',
    description: 'A smooth or straight line graph with points, area fill, grid lines, pop-ups, and live update support. Supports custom markers, custom popups, and live data updates with blinking animation.',
    image: img('line_graph.png'),
    androidImport: 'com.developerstring.jetco.ui.charts.linegraph.LineGraph',
    kmpImport: 'com.developerstring.jetco_kmp.charts.linegraph.LineGraph',
    params: [
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the graph container.' },
      { name: 'chartData', type: 'Map<String, Float>', default: '—', description: 'Data map of label to value.' },
      { name: 'lineConfig', type: 'LineGraphLineConfig', default: 'LineGraphDefaults.lineConfig()', description: 'Line appearance config (color, width, smoothing).' },
      { name: 'pointConfig', type: 'LineGraphPointConfig', default: 'LineGraphDefaults.pointConfig()', description: 'Data point appearance config.' },
      { name: 'areaConfig', type: 'LineGraphAreaConfig', default: 'LineGraphDefaults.areaConfig()', description: 'Area fill config below the line.' },
      { name: 'yAxisConfig', type: 'LineGraphYAxisConfig', default: 'LineGraphDefaults.yAxisConfig()', description: 'Y-axis config.' },
      { name: 'xAxisConfig', type: 'LineGraphXAxisConfig', default: 'LineGraphDefaults.xAxisConfig()', description: 'X-axis config.' },
      { name: 'gridLineStyle', type: 'LineGraphGridLineStyle', default: 'LineGraphDefaults.gridLineStyle()', description: 'Grid line style.' },
      { name: 'popUpConfig', type: 'LineGraphPopUpConfig', default: 'LineGraphDefaults.popUpConfig()', description: 'Pop-up tooltip config.' },
      { name: 'animationConfig', type: 'LineGraphAnimationConfig', default: 'LineGraphDefaults.animationConfig()', description: 'Animation config.' },
      { name: 'liveUpdateConfig', type: 'LineGraphLiveUpdateConfig', default: 'LineGraphDefaults.liveUpdateConfig()', description: 'Live blinking data update config.' },
      { name: 'customPointMarker', type: '@Composable ((String, Float, Offset) -> Unit)?', default: 'null', description: 'Custom composable for point markers.' },
      { name: 'customPopup', type: '@Composable ((String, Float, () -> Unit) -> Unit)?', default: 'null', description: 'Custom composable for popups.' },
      { name: 'maxValue', type: 'Float?', default: 'null', description: 'Maximum Y-axis value.' },
      { name: 'enableGridLines', type: 'Boolean', default: 'true', description: 'Show grid lines.' },
      { name: 'enableLegend', type: 'Boolean', default: 'false', description: 'Show legend.' },
      { name: 'scrollEnabled', type: 'Boolean', default: 'true', description: 'Enable horizontal scrolling.' },
    ],
    codeExamples: {
      variants: [
        {
          name: 'Basic',
          description: 'A modern gradient line graph with smooth curves, area fill, and animated entrance.',
          image: img('line_graph.png'),
          android: `import com.developerstring.jetco.ui.charts.linegraph.LineGraph
import com.developerstring.jetco.ui.charts.linegraph.config.*

@Composable
fun ModernGradientChart() {
    val vibrantPurple = Color(0xFF8B5CF6)

    LineGraph(
        chartData = mapOf(
            "Jan" to 45f, "Feb" to 52f, "Mar" to 48f,
            "Apr" to 65f, "May" to 71f, "Jun" to 68f,
            "Jul" to 85f, "Aug" to 92f
        ),
        chartHeight = 220.dp,
        lineConfig = LineGraphLineConfig(
            lineColor = vibrantPurple,
            lineWidth = 3.dp,
            strokeCap = StrokeCap.Round,
            smoothCurve = true,
            curvature = 0f
        ),
        areaFillConfig = LineGraphAreaFillConfig(
            enabled = true,
            brush = Brush.verticalGradient(
                listOf(
                    vibrantPurple.copy(alpha = 0.5f),
                    Color(0xFFEC4899).copy(alpha = 0.2f),
                    Color.Transparent
                )
            )
        ),
        pointConfig = LineGraphPointConfig(
            enabled = true,
            radius = 5.dp,
            color = Color.White,
            borderColor = vibrantPurple,
            borderWidth = 3.dp
        ),
        yAxisConfig = LineGraphDefaults.yAxisConfig(
            axisScaleCount = 5,
            textStyle = TextStyle(fontSize = 12.sp, color = Color(0xFF6B7280))
        ),
        xAxisConfig = LineGraphDefaults.xAxisConfig(
            textStyle = TextStyle(fontSize = 12.sp, fontWeight = FontWeight.Medium)
        ),
        animationConfig = LineGraphAnimationConfig(
            enabled = true,
            durationMillis = 1200,
            delayMillis = 100
        ),
        enableGridLines = true,
        gridLineStyle = LineGraphDefaults.gridLineStyle(
            color = Color(0xFFE5E7EB),
            strokeWidth = 1.dp
        ),
        horizontalDrawPadding = 0.dp
    )
}`,
          kmp: `import com.developerstring.jetco_kmp.charts.linegraph.LineGraph
import com.developerstring.jetco_kmp.charts.linegraph.config.*

@Composable
fun ModernGradientChart() {
    val vibrantPurple = Color(0xFF8B5CF6)

    LineGraph(
        chartData = mapOf(
            "Jan" to 45f, "Feb" to 52f, "Mar" to 48f,
            "Apr" to 65f, "May" to 71f, "Jun" to 68f,
            "Jul" to 85f, "Aug" to 92f
        ),
        chartHeight = 220.dp,
        lineConfig = LineGraphLineConfig(
            lineColor = vibrantPurple,
            lineWidth = 3.dp,
            strokeCap = StrokeCap.Round,
            smoothCurve = true,
            curvature = 0f
        ),
        areaFillConfig = LineGraphAreaFillConfig(
            enabled = true,
            brush = Brush.verticalGradient(
                listOf(
                    vibrantPurple.copy(alpha = 0.5f),
                    Color(0xFFEC4899).copy(alpha = 0.2f),
                    Color.Transparent
                )
            )
        ),
        pointConfig = LineGraphPointConfig(
            enabled = true,
            radius = 5.dp,
            color = Color.White,
            borderColor = vibrantPurple,
            borderWidth = 3.dp
        ),
        yAxisConfig = LineGraphDefaults.yAxisConfig(
            axisScaleCount = 5,
            textStyle = TextStyle(fontSize = 12.sp, color = Color(0xFF6B7280))
        ),
        xAxisConfig = LineGraphDefaults.xAxisConfig(
            textStyle = TextStyle(fontSize = 12.sp, fontWeight = FontWeight.Medium)
        ),
        animationConfig = LineGraphAnimationConfig(
            enabled = true,
            durationMillis = 1200,
            delayMillis = 100
        ),
        enableGridLines = true,
        gridLineStyle = LineGraphDefaults.gridLineStyle(
            color = Color(0xFFE5E7EB),
            strokeWidth = 1.dp
        ),
        horizontalDrawPadding = 0.dp
    )
}`,
        },
        {
          name: 'Custom Markers',
          description: 'Line graph with custom star-shaped point markers using the customPointMarker composable slot.',
          image: img('line_graph_custom_marker.png'),
          android: `import com.developerstring.jetco.ui.charts.linegraph.LineGraph
import com.developerstring.jetco.ui.charts.linegraph.config.*

@Composable
fun CustomStarMarkersChart() {
    val starGold = Color(0xFFFBBF24)

    LineGraph(
        chartData = mapOf(
            "Week 1" to 3.5f, "Week 2" to 4.2f,
            "Week 3" to 3.8f, "Week 4" to 4.9f, "Week 5" to 5.3f
        ),
        chartHeight = 220.dp,
        lineConfig = LineGraphLineConfig(
            lineColor = starGold,
            lineWidth = 3.dp,
            strokeCap = StrokeCap.Round,
            smoothCurve = true,
            curvature = 0.6f
        ),
        areaFillConfig = LineGraphAreaFillConfig(
            enabled = true,
            brush = Brush.verticalGradient(
                listOf(starGold.copy(alpha = 0.3f), Color.Transparent)
            )
        ),
        pointConfig = LineGraphPointConfig(
            enabled = true,
            radius = 0.dp,
            color = Color.Transparent,
            borderColor = Color.Transparent,
            borderWidth = 0.dp
        ),
        yAxisConfig = LineGraphDefaults.yAxisConfig(
            axisScaleCount = 5,
            textStyle = TextStyle(fontSize = 11.sp, color = Color(0xFF6B7280))
        ),
        xAxisConfig = LineGraphDefaults.xAxisConfig(
            textStyle = TextStyle(fontSize = 11.sp, color = Color(0xFF6B7280))
        ),
        enableGridLines = true,
        gridLineStyle = LineGraphDefaults.gridLineStyle(color = Color(0xFFE5E7EB)),
        animationConfig = LineGraphAnimationConfig(
            enabled = true, durationMillis = 1200, delayMillis = 100
        ),
        horizontalDrawPadding = 12.dp,
        customPointMarker = { label, value, offset ->
            Box(
                modifier = Modifier
                    .background(
                        color = starGold,
                        shape = RoundedCornerShape(50)
                    )
                    .padding(8.dp)
            ) {
                Text(
                    text = "★",
                    style = TextStyle(
                        fontSize = 16.sp,
                        color = Color.White,
                        fontWeight = FontWeight.Bold
                    )
                )
            }
        }
    )
}`,
          kmp: `import com.developerstring.jetco_kmp.charts.linegraph.LineGraph
import com.developerstring.jetco_kmp.charts.linegraph.config.*

@Composable
fun CustomStarMarkersChart() {
    val starGold = Color(0xFFFBBF24)

    LineGraph(
        chartData = mapOf(
            "Week 1" to 3.5f, "Week 2" to 4.2f,
            "Week 3" to 3.8f, "Week 4" to 4.9f, "Week 5" to 5.3f
        ),
        chartHeight = 220.dp,
        lineConfig = LineGraphLineConfig(
            lineColor = starGold,
            lineWidth = 3.dp,
            strokeCap = StrokeCap.Round,
            smoothCurve = true,
            curvature = 0.6f
        ),
        areaFillConfig = LineGraphAreaFillConfig(
            enabled = true,
            brush = Brush.verticalGradient(
                listOf(starGold.copy(alpha = 0.3f), Color.Transparent)
            )
        ),
        pointConfig = LineGraphPointConfig(
            enabled = true,
            radius = 0.dp,
            color = Color.Transparent,
            borderColor = Color.Transparent,
            borderWidth = 0.dp
        ),
        yAxisConfig = LineGraphDefaults.yAxisConfig(
            axisScaleCount = 5,
            textStyle = TextStyle(fontSize = 11.sp, color = Color(0xFF6B7280))
        ),
        xAxisConfig = LineGraphDefaults.xAxisConfig(
            textStyle = TextStyle(fontSize = 11.sp, color = Color(0xFF6B7280))
        ),
        enableGridLines = true,
        gridLineStyle = LineGraphDefaults.gridLineStyle(color = Color(0xFFE5E7EB)),
        animationConfig = LineGraphAnimationConfig(
            enabled = true, durationMillis = 1200, delayMillis = 100
        ),
        horizontalDrawPadding = 12.dp,
        customPointMarker = { label, value, offset ->
            Box(
                modifier = Modifier
                    .background(
                        color = starGold,
                        shape = RoundedCornerShape(50)
                    )
                    .padding(8.dp)
            ) {
                Text(
                    text = "★",
                    style = TextStyle(
                        fontSize = 16.sp,
                        color = Color.White,
                        fontWeight = FontWeight.Bold
                    )
                )
            }
        }
    )
}`,
        },
        {
          name: 'Custom Popup',
          description: 'Line graph with a rich custom popup tooltip showing label, formatted value, and subtitle using the customPopup composable slot.',
          image: img('line_graph_custom_popup.png'),
          android: `import com.developerstring.jetco.ui.charts.linegraph.LineGraph
import com.developerstring.jetco.ui.charts.linegraph.config.*

@Composable
fun CustomPopupChart() {
    val richBlue = Color(0xFF2563EB)

    LineGraph(
        chartData = mapOf(
            "Mon" to 1250f, "Tue" to 1580f, "Wed" to 1420f,
            "Thu" to 1890f, "Fri" to 2100f, "Sat" to 2350f, "Sun" to 1980f
        ),
        chartHeight = 220.dp,
        lineConfig = LineGraphLineConfig(
            lineColor = richBlue,
            lineWidth = 3.dp,
            strokeCap = StrokeCap.Round,
            smoothCurve = true,
            curvature = 0.65f
        ),
        areaFillConfig = LineGraphAreaFillConfig(
            enabled = true,
            brush = Brush.verticalGradient(
                listOf(
                    richBlue.copy(alpha = 0.4f),
                    Color(0xFF7C3AED).copy(alpha = 0.1f),
                    Color.Transparent
                )
            )
        ),
        pointConfig = LineGraphPointConfig(
            enabled = true, radius = 5.dp,
            color = Color.White, borderColor = richBlue, borderWidth = 2.5.dp
        ),
        yAxisConfig = LineGraphDefaults.yAxisConfig(
            axisScaleCount = 5,
            textStyle = TextStyle(fontSize = 11.sp, color = Color(0xFF6B7280)),
            textPrefix = "$"
        ),
        enableGridLines = true,
        gridLineStyle = LineGraphDefaults.gridLineStyle(color = Color(0xFFE5E7EB)),
        horizontalDrawPadding = 12.dp,
        customPopup = { label, value, onDismiss ->
            androidx.compose.ui.window.Popup(
                alignment = Alignment.Center,
                onDismissRequest = onDismiss
            ) {
                Card(
                    shape = RoundedCornerShape(12.dp),
                    colors = CardDefaults.cardColors(containerColor = richBlue),
                    elevation = CardDefaults.cardElevation(8.dp)
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Text(text = label, style = TextStyle(
                            fontSize = 14.sp, fontWeight = FontWeight.Bold, color = Color.White
                        ))
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(text = "$" + formatTo2Decimals(value), style = TextStyle(
                            fontSize = 20.sp, fontWeight = FontWeight.ExtraBold,
                            color = Color(0xFFFBBF24)
                        ))
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(text = "Daily Revenue", style = TextStyle(
                            fontSize = 10.sp, color = Color.White.copy(alpha = 0.8f)
                        ))
                    }
                }
            }
        }
    )
}`,
          kmp: `import com.developerstring.jetco_kmp.charts.linegraph.LineGraph
import com.developerstring.jetco_kmp.charts.linegraph.config.*

@Composable
fun CustomPopupChart() {
    val richBlue = Color(0xFF2563EB)

    LineGraph(
        chartData = mapOf(
            "Mon" to 1250f, "Tue" to 1580f, "Wed" to 1420f,
            "Thu" to 1890f, "Fri" to 2100f, "Sat" to 2350f, "Sun" to 1980f
        ),
        chartHeight = 220.dp,
        lineConfig = LineGraphLineConfig(
            lineColor = richBlue,
            lineWidth = 3.dp,
            strokeCap = StrokeCap.Round,
            smoothCurve = true,
            curvature = 0.65f
        ),
        areaFillConfig = LineGraphAreaFillConfig(
            enabled = true,
            brush = Brush.verticalGradient(
                listOf(
                    richBlue.copy(alpha = 0.4f),
                    Color(0xFF7C3AED).copy(alpha = 0.1f),
                    Color.Transparent
                )
            )
        ),
        pointConfig = LineGraphPointConfig(
            enabled = true, radius = 5.dp,
            color = Color.White, borderColor = richBlue, borderWidth = 2.5.dp
        ),
        yAxisConfig = LineGraphDefaults.yAxisConfig(
            axisScaleCount = 5,
            textStyle = TextStyle(fontSize = 11.sp, color = Color(0xFF6B7280)),
            textPrefix = "$"
        ),
        enableGridLines = true,
        gridLineStyle = LineGraphDefaults.gridLineStyle(color = Color(0xFFE5E7EB)),
        horizontalDrawPadding = 12.dp,
        customPopup = { label, value, onDismiss ->
            androidx.compose.ui.window.Popup(
                alignment = Alignment.Center,
                onDismissRequest = onDismiss
            ) {
                Card(
                    shape = RoundedCornerShape(12.dp),
                    colors = CardDefaults.cardColors(containerColor = richBlue),
                    elevation = CardDefaults.cardElevation(8.dp)
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Text(text = label, style = TextStyle(
                            fontSize = 14.sp, fontWeight = FontWeight.Bold, color = Color.White
                        ))
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(text = "$" + formatTo2Decimals(value), style = TextStyle(
                            fontSize = 20.sp, fontWeight = FontWeight.ExtraBold,
                            color = Color(0xFFFBBF24)
                        ))
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(text = "Daily Revenue", style = TextStyle(
                            fontSize = 10.sp, color = Color.White.copy(alpha = 0.8f)
                        ))
                    }
                }
            }
        }
    )
}`,
        },
        {
          name: 'Live Update',
          description: 'Real-time line graph with blinking last point animation. Data updates automatically with simulated live temperature readings.',
          image: img('live_line_chart.gif'),
          android: `import com.developerstring.jetco.ui.charts.linegraph.LineGraph
import com.developerstring.jetco.ui.charts.linegraph.config.*

@Composable
fun LiveUpdateChart() {
    var chartData by remember {
        mutableStateOf(mapOf(
            "10:00" to 22.5f, "10:05" to 23.2f,
            "10:10" to 22.8f, "10:15" to 24.1f, "10:20" to 25.3f
        ))
    }

    LaunchedEffect(Unit) {
        val timeLabels = listOf(
            "10:00", "10:05", "10:10", "10:15",
            "10:20", "10:25", "10:30", "10:35"
        )
        var currentIndex = 5

        while (currentIndex < timeLabels.size) {
            delay(2000)
            val newValue = Random.nextFloat() * (30f - 20f) + 20f
            val entries = chartData.toMutableMap()
            entries[timeLabels[currentIndex]] = newValue

            if (entries.size > 5) {
                val sorted = entries.entries.sortedBy { timeLabels.indexOf(it.key) }
                chartData = sorted.takeLast(5).associate { it.key to it.value }
            } else {
                chartData = entries
            }

            currentIndex++
            if (currentIndex >= timeLabels.size) currentIndex = 5
        }
    }

    val liveOrange = Color(0xFFFF6B35)

    LineGraph(
        chartData = chartData,
        chartHeight = 220.dp,
        lineConfig = LineGraphLineConfig(
            lineColor = liveOrange,
            lineWidth = 3.dp,
            strokeCap = StrokeCap.Round,
            smoothCurve = true,
            curvature = 0.3f
        ),
        areaFillConfig = LineGraphAreaFillConfig(
            enabled = true,
            brush = Brush.verticalGradient(
                listOf(liveOrange.copy(alpha = 0.3f), Color.Transparent)
            )
        ),
        pointConfig = LineGraphPointConfig(
            enabled = true, radius = 6.dp,
            color = liveOrange, borderColor = Color.White, borderWidth = 2.dp
        ),
        liveUpdateConfig = LineGraphLiveUpdateConfig(
            enabled = true,
            blinkEnabled = true,
            blinkDurationMillis = 1000,
            blinkMinRadius = 8f,
            blinkMaxRadius = 20f,
            blinkColor = liveOrange,
            pathTransitionDurationMillis = 800
        ),
        yAxisConfig = LineGraphDefaults.yAxisConfig(
            axisScaleCount = 4,
            textStyle = TextStyle(fontSize = 11.sp, color = Color(0xFF6B7280))
        ),
        gridLineStyle = LineGraphGridLineStyle(
            color = Color(0xFFF3F4F6), strokeWidth = 1.dp
        ),
        animationConfig = LineGraphAnimationConfig(
            enabled = true, durationMillis = 800
        ),
        horizontalDrawPadding = 12.dp
    )
}`,
          kmp: `import com.developerstring.jetco_kmp.charts.linegraph.LineGraph
import com.developerstring.jetco_kmp.charts.linegraph.config.*

@Composable
fun LiveUpdateChart() {
    var chartData by remember {
        mutableStateOf(mapOf(
            "10:00" to 22.5f, "10:05" to 23.2f,
            "10:10" to 22.8f, "10:15" to 24.1f, "10:20" to 25.3f
        ))
    }

    LaunchedEffect(Unit) {
        val timeLabels = listOf(
            "10:00", "10:05", "10:10", "10:15",
            "10:20", "10:25", "10:30", "10:35"
        )
        var currentIndex = 5

        while (currentIndex < timeLabels.size) {
            delay(2000)
            val newValue = Random.nextFloat() * (30f - 20f) + 20f
            val entries = chartData.toMutableMap()
            entries[timeLabels[currentIndex]] = newValue

            if (entries.size > 5) {
                val sorted = entries.entries.sortedBy { timeLabels.indexOf(it.key) }
                chartData = sorted.takeLast(5).associate { it.key to it.value }
            } else {
                chartData = entries
            }

            currentIndex++
            if (currentIndex >= timeLabels.size) currentIndex = 5
        }
    }

    val liveOrange = Color(0xFFFF6B35)

    LineGraph(
        chartData = chartData,
        chartHeight = 220.dp,
        lineConfig = LineGraphLineConfig(
            lineColor = liveOrange,
            lineWidth = 3.dp,
            strokeCap = StrokeCap.Round,
            smoothCurve = true,
            curvature = 0.3f
        ),
        areaFillConfig = LineGraphAreaFillConfig(
            enabled = true,
            brush = Brush.verticalGradient(
                listOf(liveOrange.copy(alpha = 0.3f), Color.Transparent)
            )
        ),
        pointConfig = LineGraphPointConfig(
            enabled = true, radius = 6.dp,
            color = liveOrange, borderColor = Color.White, borderWidth = 2.dp
        ),
        liveUpdateConfig = LineGraphLiveUpdateConfig(
            enabled = true,
            blinkEnabled = true,
            blinkDurationMillis = 1000,
            blinkMinRadius = 8f,
            blinkMaxRadius = 20f,
            blinkColor = liveOrange,
            pathTransitionDurationMillis = 800
        ),
        yAxisConfig = LineGraphDefaults.yAxisConfig(
            axisScaleCount = 4,
            textStyle = TextStyle(fontSize = 11.sp, color = Color(0xFF6B7280))
        ),
        gridLineStyle = LineGraphGridLineStyle(
            color = Color(0xFFF3F4F6), strokeWidth = 1.dp
        ),
        animationConfig = LineGraphAnimationConfig(
            enabled = true, durationMillis = 800
        ),
        horizontalDrawPadding = 12.dp
    )
}`,
        },
      ],
    },
    relatedConfigs: ['LineGraphLineConfig', 'LineGraphPointConfig', 'LineGraphAreaFillConfig', 'LineGraphAnimationConfig', 'LineGraphLiveUpdateConfig'],
    configDetails: [
      {
        name: 'LineGraphLineConfig',
        params: [
          { name: 'lineColor', type: 'Color', default: 'Color.Blue', description: 'Line color.' },
          { name: 'lineWidth', type: 'Dp', default: '2.dp', description: 'Line stroke width.' },
          { name: 'strokeCap', type: 'StrokeCap', default: 'StrokeCap.Round', description: 'Line stroke cap style.' },
          { name: 'smoothCurve', type: 'Boolean', default: 'true', description: 'Use bezier curves for smooth line.' },
          { name: 'curvature', type: 'Float', default: '0.3f', description: 'Bezier curve tension (0 = straight, 1 = maximum curve).' },
        ],
      },
      {
        name: 'LineGraphPointConfig',
        params: [
          { name: 'enabled', type: 'Boolean', default: 'true', description: 'Show data points.' },
          { name: 'radius', type: 'Dp', default: '4.dp', description: 'Point radius.' },
          { name: 'color', type: 'Color', default: 'Color.Blue', description: 'Point fill color.' },
          { name: 'borderColor', type: 'Color', default: 'Color.White', description: 'Point border color.' },
          { name: 'borderWidth', type: 'Dp', default: '2.dp', description: 'Point border width.' },
        ],
      },
      {
        name: 'LineGraphAnimationConfig',
        params: [
          { name: 'enabled', type: 'Boolean', default: 'true', description: 'Enable drawing animation.' },
          { name: 'durationMillis', type: 'Int', default: '1000', description: 'Animation duration.' },
          { name: 'delayMillis', type: 'Int', default: '0', description: 'Animation start delay.' },
        ],
      },
      {
        name: 'LineGraphLiveUpdateConfig',
        params: [
          { name: 'enabled', type: 'Boolean', default: 'false', description: 'Enable live data blinking.' },
          { name: 'blinkEnabled', type: 'Boolean', default: 'true', description: 'Enable blinking dot on last point.' },
          { name: 'blinkDurationMillis', type: 'Int', default: '800', description: 'Blink cycle duration.' },
          { name: 'blinkMinRadius', type: 'Dp', default: '3.dp', description: 'Minimum blink radius.' },
          { name: 'blinkMaxRadius', type: 'Dp', default: '8.dp', description: 'Maximum blink radius.' },
          { name: 'blinkColor', type: 'Color', default: 'Color.Red', description: 'Blink dot color.' },
        ],
      },
    ],
  },

  'multi-line-graph': {
    name: 'MultiLineGraph',
    category: 'Charts',
    description: 'A multi-series line graph supporting multiple data lines with shared axes and legend.',
    image: img('multi_line_graph.png'),
    androidImport: 'com.developerstring.jetco.ui.charts.linegraph.MultiLineGraph',
    kmpImport: 'com.developerstring.jetco_kmp.charts.linegraph.MultiLineGraph',
    params: [
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the graph container.' },
      { name: 'chartData', type: 'Map<String, List<Float>>', default: '—', description: 'Data map of label to list of values per series.' },
      { name: 'lineConfig', type: 'LineGraphLineConfig', default: 'LineGraphDefaults.lineConfig()', description: 'Line appearance config.' },
      { name: 'pointConfig', type: 'LineGraphPointConfig', default: 'LineGraphDefaults.pointConfig()', description: 'Point appearance config.' },
      { name: 'areaConfig', type: 'LineGraphAreaConfig', default: 'LineGraphDefaults.areaConfig()', description: 'Area fill config.' },
      { name: 'yAxisConfig', type: 'LineGraphYAxisConfig', default: 'LineGraphDefaults.yAxisConfig()', description: 'Y-axis config.' },
      { name: 'xAxisConfig', type: 'LineGraphXAxisConfig', default: 'LineGraphDefaults.xAxisConfig()', description: 'X-axis config.' },
      { name: 'animationConfig', type: 'LineGraphAnimationConfig', default: 'LineGraphDefaults.animationConfig()', description: 'Animation config.' },
      { name: 'enableLegend', type: 'Boolean', default: 'true', description: 'Show multi-line legend.' },
    ],
    codeExamples: {
      android: `import com.developerstring.jetco.ui.charts.linegraph.MultiLineGraph

@Composable
fun MultiLineGraphExample() {
    val data = mapOf(
        "Jan" to listOf(10f, 20f),
        "Feb" to listOf(25f, 15f),
        "Mar" to listOf(18f, 30f)
    )

    MultiLineGraph(
        chartData = data,
        enableLegend = true
    )
}`,
      kmp: `import com.developerstring.jetco_kmp.charts.linegraph.MultiLineGraph

@Composable
fun MultiLineGraphExample() {
    val data = mapOf(
        "Jan" to listOf(10f, 20f),
        "Feb" to listOf(25f, 15f),
        "Mar" to listOf(18f, 30f)
    )

    MultiLineGraph(
        chartData = data,
        enableLegend = true
    )
}`,
    },
    relatedConfigs: ['LineGraphLineConfig', 'LineGraphPointConfig'],
    configDetails: [
      {
        name: 'LineGraphLineConfig',
        params: [
          { name: 'lineColor', type: 'Color', default: 'Color(0xFF6C5CE7)', description: 'Color of the line.' },
          { name: 'lineWidth', type: 'Dp', default: '2.dp', description: 'Width/thickness of the line.' },
          { name: 'strokeCap', type: 'StrokeCap', default: 'StrokeCap.Round', description: 'Cap style at the end of each stroke.' },
          { name: 'smoothCurve', type: 'Boolean', default: 'true', description: 'Whether the line uses smooth Bezier curves.' },
          { name: 'curvature', type: 'Float', default: '0.3f', description: 'Curvature factor for Bezier interpolation (0..1).' },
        ],
      },
      {
        name: 'LineGraphPointConfig',
        params: [
          { name: 'enabled', type: 'Boolean', default: 'true', description: 'Whether data point circles are drawn.' },
          { name: 'radius', type: 'Dp', default: '4.dp', description: 'Radius of each data point circle.' },
          { name: 'color', type: 'Color', default: 'Color(0xFF6C5CE7)', description: 'Fill color of the data point.' },
          { name: 'borderColor', type: 'Color', default: 'Color.White', description: 'Border color around the data point.' },
          { name: 'borderWidth', type: 'Dp', default: '2.dp', description: 'Width of the border stroke.' },
        ],
      },
    ],
  },

  'candlestick-chart': {
    name: 'CandlestickChart',
    category: 'Charts',
    description: 'A financial candlestick chart with bullish/bearish candles, volume bars, markers, and animation.',
    image: img('candlestick_chart.png'),
    androidImport: 'com.developerstring.jetco.ui.charts.candlestickchart.CandlestickChart',
    kmpImport: 'com.developerstring.jetco_kmp.charts.candlestickchart.CandlestickChart',
    params: [
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the chart container.' },
      { name: 'chartData', type: 'List<CandlestickEntry>', default: '—', description: 'List of candlestick entries.' },
      { name: 'candleConfig', type: 'CandlestickCandleConfig', default: 'CandlestickDefaults.candleConfig()', description: 'Candle appearance config.' },
      { name: 'gridLineStyle', type: 'CandlestickGridLineStyle', default: 'CandlestickDefaults.gridLineStyle()', description: 'Grid line style.' },
      { name: 'animationConfig', type: 'CandlestickAnimationConfig', default: 'CandlestickDefaults.animationConfig()', description: 'Animation config.' },
      { name: 'markerConfig', type: 'CandlestickMarkerConfig', default: 'CandlestickDefaults.markerConfig()', description: 'Marker/tooltip config.' },
      { name: 'volumeConfig', type: 'CandlestickVolumeConfig', default: 'CandlestickDefaults.volumeConfig()', description: 'Volume bar config.' },
      { name: 'xAxisConfig', type: 'CandlestickXAxisConfig', default: 'CandlestickDefaults.xAxisConfig()', description: 'X-axis config.' },
      { name: 'yAxisConfig', type: 'CandlestickYAxisConfig', default: 'CandlestickDefaults.yAxisConfig()', description: 'Y-axis config.' },
      { name: 'enableGridLines', type: 'Boolean', default: 'true', description: 'Show grid lines.' },
    ],
    codeExamples: {
      android: `import com.developerstring.jetco.ui.charts.candlestickchart.CandlestickChart
import com.developerstring.jetco.ui.charts.candlestickchart.CandlestickEntry
import com.developerstring.jetco.ui.charts.candlestickchart.CandlestickDefaults

@Composable
fun CandlestickChartExample() {
    val data = listOf(
        CandlestickEntry(open = 100f, close = 110f, high = 115f, low = 95f),
        CandlestickEntry(open = 110f, close = 105f, high = 112f, low = 102f),
        CandlestickEntry(open = 105f, close = 120f, high = 125f, low = 103f)
    )

    CandlestickChart(
        chartData = data,
        candleConfig = CandlestickDefaults.candleConfig()
    )
}`,
      kmp: `import com.developerstring.jetco_kmp.charts.candlestickchart.CandlestickChart
import com.developerstring.jetco_kmp.charts.candlestickchart.CandlestickEntry
import com.developerstring.jetco_kmp.charts.candlestickchart.CandlestickDefaults

@Composable
fun CandlestickChartExample() {
    val data = listOf(
        CandlestickEntry(open = 100f, close = 110f, high = 115f, low = 95f),
        CandlestickEntry(open = 110f, close = 105f, high = 112f, low = 102f),
        CandlestickEntry(open = 105f, close = 120f, high = 125f, low = 103f)
    )

    CandlestickChart(
        chartData = data,
        candleConfig = CandlestickDefaults.candleConfig()
    )
}`,
    },
    relatedConfigs: ['CandlestickEntry', 'CandlestickCandleConfig', 'CandlestickGridLineStyle', 'CandlestickAnimationConfig'],
    configDetails: [
      {
        name: 'CandlestickEntry',
        params: [
          { name: 'open', type: 'Float', default: '—', description: 'Opening price.' },
          { name: 'close', type: 'Float', default: '—', description: 'Closing price.' },
          { name: 'high', type: 'Float', default: '—', description: 'Highest price.' },
          { name: 'low', type: 'Float', default: '—', description: 'Lowest price.' },
          { name: 'volume', type: 'Float?', default: 'null', description: 'Trade volume.' },
          { name: 'label', type: 'String', default: '""', description: 'X-axis label.' },
        ],
      },
      {
        name: 'CandlestickGridLineStyle',
        params: [
          { name: 'color', type: 'Color', default: 'Color.LightGray', description: 'Grid line color.' },
          { name: 'strokeWidth', type: 'Float', default: '1f', description: 'Line stroke width.' },
          { name: 'dashLength', type: 'Float', default: '10f', description: 'Dash length.' },
          { name: 'gapLength', type: 'Float', default: '5f', description: 'Gap length.' },
          { name: 'totalGridLines', type: 'Int', default: '5', description: 'Number of grid lines.' },
        ],
      },
      {
        name: 'CandlestickAnimationConfig',
        params: [
          { name: 'enabled', type: 'Boolean', default: 'true', description: 'Enable animation.' },
          { name: 'durationMillis', type: 'Int', default: '800', description: 'Animation duration.' },
          { name: 'delayMillis', type: 'Int', default: '0', description: 'Animation delay.' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════
  //  CARDS
  // ═══════════════════════════════════════════

  'ticket-card': {
    name: 'TicketCard',
    category: 'Cards',
    description: 'A ticket-shaped card with notches and a dashed divider line, ideal for coupons, boarding passes, and event tickets.',
    image: img('ticket_card.png'),
    androidImport: 'com.developerstring.jetco.ui.cards.ticket.TicketCard',
    kmpImport: 'com.developerstring.jetco_kmp.cards.ticket.TicketCard',
    params: [
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the card.' },
      { name: 'cornerRadius', type: 'TicketCardCorner', default: 'TicketCardCorner()', description: 'Corner radii for each card corner.' },
      { name: 'notchRadius', type: 'Dp', default: '25.dp', description: 'Radius of side notches.' },
      { name: 'cardColor', type: 'Color', default: 'Color.White', description: 'Background color of the card.' },
      { name: 'cardBrush', type: 'Brush?', default: 'null', description: 'Optional gradient brush for background.' },
      { name: 'dividerEffect', type: 'PathEffect', default: 'dashPathEffect', description: 'Dash effect for the divider line.' },
      { name: 'dividerStrokeWidth', type: 'Float', default: '5f', description: 'Stroke width of the divider.' },
      { name: 'dividerColor', type: 'Color', default: 'Color.Gray', description: 'Color of the divider line.' },
      { name: 'notchWeight', type: 'Float', default: '0.7f', description: 'Vertical position ratio of the notch (0–1).' },
      { name: 'content', type: '@Composable () -> Unit', default: '—', description: 'Content composable inside the card.' },
    ],
    codeExamples: {
      android: `import com.developerstring.jetco.ui.cards.ticket.TicketCard
import com.developerstring.jetco.ui.cards.ticket.TicketCardCorner
import com.developerstring.jetco.ui.cards.ticket.TicketContent

@Composable
fun TicketCardExample() {
    TicketCard(
        cornerRadius = TicketCardCorner(
            topLeft = 20.dp,
            topRight = 20.dp,
            bottomLeft = 20.dp,
            bottomRight = 20.dp
        ),
        notchRadius = 25.dp,
        cardColor = Color(0xFFF5F5F5)
    ) {
        TicketContent(
            topContent = {
                Text("Event Name", style = MaterialTheme.typography.titleLarge)
            },
            bottomContent = {
                Text("Date: Dec 25, 2024")
            }
        )
    }
}`,
      kmp: `import com.developerstring.jetco_kmp.cards.ticket.TicketCard
import com.developerstring.jetco_kmp.cards.ticket.TicketCardCorner
import com.developerstring.jetco_kmp.cards.ticket.TicketContent

@Composable
fun TicketCardExample() {
    TicketCard(
        cornerRadius = TicketCardCorner(
            topLeft = 20.dp,
            topRight = 20.dp,
            bottomLeft = 20.dp,
            bottomRight = 20.dp
        ),
        notchRadius = 25.dp,
        cardColor = Color(0xFFF5F5F5)
    ) {
        TicketContent(
            topContent = {
                Text("Event Name", style = MaterialTheme.typography.titleLarge)
            },
            bottomContent = {
                Text("Date: Dec 25, 2024")
            }
        )
    }
}`,
    },
    relatedConfigs: ['TicketCardCorner', 'TicketContent'],
    configDetails: [
      {
        name: 'TicketCardCorner',
        params: [
          { name: 'topLeft', type: 'Dp', default: '25.dp', description: 'Top-left corner radius.' },
          { name: 'topRight', type: 'Dp', default: '25.dp', description: 'Top-right corner radius.' },
          { name: 'bottomRight', type: 'Dp', default: '25.dp', description: 'Bottom-right corner radius.' },
          { name: 'bottomLeft', type: 'Dp', default: '25.dp', description: 'Bottom-left corner radius.' },
        ],
      },
      {
        name: 'TicketContent',
        params: [
          { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the content container.' },
          { name: 'notchWeight', type: 'Float', default: '0.7f', description: 'Vertical split ratio.' },
          { name: 'topContent', type: '@Composable () -> Unit', default: '—', description: 'Content above the divider.' },
          { name: 'bottomContent', type: '@Composable () -> Unit', default: '—', description: 'Content below the divider.' },
        ],
      },
    ],
  },

  'curved-card': {
    name: 'CurvedCard',
    category: 'Cards',
    description: 'A card with animated wave curves on top and/or bottom edges, supporting gradient backgrounds and background images.',
    image: img('curvedCard-1.png'),
    androidImport: 'com.developerstring.jetco.ui.cards.curved.CurvedCard',
    kmpImport: 'com.developerstring.jetco_kmp.cards.curved.CurvedCard',
    params: [
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the card.' },
      { name: 'config', type: 'CurvedCardConfig', default: 'CurvedCardConfig()', description: 'Card configuration (wave, shape, gradient, image).' },
      { name: 'animConfig', type: 'CurvedCardAnimConfig', default: 'CurvedCardAnimConfig()', description: 'Wave animation configuration.' },
      { name: 'content', type: '@Composable () -> Unit', default: '—', description: 'Content composable inside the card.' },
    ],
    codeExamples: {
      android: `import com.developerstring.jetco.ui.cards.curved.CurvedCard
import com.developerstring.jetco.ui.cards.curved.CurvedCardConfig
import com.developerstring.jetco.ui.cards.curved.CurvedCardAnimConfig

@Composable
fun CurvedCardExample() {
    CurvedCard(
        config = CurvedCardConfig(
            waveHeight = 12.dp,
            gradient = Brush.linearGradient(
                listOf(Color(0xFF6C5CE7), Color(0xFFA78BFA))
            ),
            topCurveEnable = true,
            bottomCurveEnable = true
        ),
        animConfig = CurvedCardAnimConfig(
            animateTopWave = true,
            animationDurationMs = 3000
        )
    ) {
        Text("Wavy Card", color = Color.White, modifier = Modifier.padding(24.dp))
    }
}`,
      kmp: `import com.developerstring.jetco_kmp.cards.curved.CurvedCard
import com.developerstring.jetco_kmp.cards.curved.CurvedCardConfig
import com.developerstring.jetco_kmp.cards.curved.CurvedCardAnimConfig

@Composable
fun CurvedCardExample() {
    CurvedCard(
        config = CurvedCardConfig(
            waveHeight = 12.dp,
            gradient = Brush.linearGradient(
                listOf(Color(0xFF6C5CE7), Color(0xFFA78BFA))
            ),
            topCurveEnable = true,
            bottomCurveEnable = true
        ),
        animConfig = CurvedCardAnimConfig(
            animateTopWave = true,
            animationDurationMs = 3000
        )
    ) {
        Text("Wavy Card", color = Color.White, modifier = Modifier.padding(24.dp))
    }
}`,
    },
    relatedConfigs: ['CurvedCardConfig', 'CurvedCardAnimConfig'],
    configDetails: [
      {
        name: 'CurvedCardConfig',
        params: [
          { name: 'waveHeight', type: 'Dp', default: '10.dp', description: 'Height of the wave curves.' },
          { name: 'waveSegments', type: 'Int?', default: 'null', description: 'Number of wave segments. Auto-calculated if null.' },
          { name: 'shape', type: 'Shape', default: 'RoundedCornerShape(20.dp)', description: 'Overall card shape.' },
          { name: 'gradient', type: 'Brush', default: 'Brush.linearGradient(...)', description: 'Background gradient brush.' },
          { name: 'samplesPerWave', type: 'Int', default: '20', description: 'Sample points per wave segment for smoothness.' },
          { name: 'topCurveEnable', type: 'Boolean', default: 'true', description: 'Enable top wave curve.' },
          { name: 'bottomCurveEnable', type: 'Boolean', default: 'false', description: 'Enable bottom wave curve.' },
          { name: 'image', type: 'ImageBitmap?', default: 'null', description: 'Optional background image.' },
          { name: 'imageAlpha', type: 'Float', default: '1.0f', description: 'Background image opacity.' },
          { name: 'contentPadding', type: 'PaddingValues', default: 'PaddingValues()', description: 'Padding inside the card.' },
        ],
      },
      {
        name: 'CurvedCardAnimConfig',
        params: [
          { name: 'animateTopWave', type: 'Boolean', default: 'false', description: 'Animate the top wave.' },
          { name: 'animateBottomWave', type: 'Boolean', default: 'false', description: 'Animate the bottom wave.' },
          { name: 'animationDurationMs', type: 'Int', default: '2500', description: 'Wave animation duration in ms.' },
          { name: 'reverseAnimationTop', type: 'Boolean', default: 'false', description: 'Reverse top wave animation direction.' },
          { name: 'reverseAnimationBottom', type: 'Boolean', default: 'false', description: 'Reverse bottom wave animation direction.' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════
  //  COMPONENTS
  // ═══════════════════════════════════════════

  'switch-button': {
    name: 'SwitchButton',
    category: 'Components',
    description: 'A customizable animated switch/toggle button with configurable colors, shapes, paddings, and icon rotation.',
    image: img('switch_button.gif'),
    androidImport: 'com.developerstring.jetco.ui.components.button.switch_button.SwitchButton',
    kmpImport: 'com.developerstring.jetco_kmp.components.button.switch_button.SwitchButton',
    params: [
      { name: 'buttonSizeWidth', type: 'Dp', default: '60.dp', description: 'Total width of the switch.' },
      { name: 'buttonSizeHeight', type: 'Dp', default: '35.dp', description: 'Total height of the switch.' },
      { name: 'switchButtonConfig', type: 'SwitchButtonConfig', default: 'SwitchButtonConfig()', description: 'Appearance configuration.' },
      { name: 'animation', type: 'SwitchButtonAnimation', default: 'SwitchButtonAnimation()', description: 'Animation configuration.' },
      { name: 'isSelected', type: 'Boolean', default: 'false', description: 'Current switch state.' },
      { name: 'icon', type: '@Composable () -> Unit', default: '{}', description: 'Icon composable inside the thumb.' },
      { name: 'onStateChange', type: '(Boolean) -> Unit', default: '—', description: 'Callback on state toggle.' },
    ],
    codeExamples: {
      android: `import com.developerstring.jetco.ui.components.button.switch_button.SwitchButton
import com.developerstring.jetco.ui.components.button.switch_button.SwitchButtonConfig
import com.developerstring.jetco.ui.components.button.switch_button.SwitchButtonIcon

@Composable
fun SwitchButtonExample() {
    var selected by remember { mutableStateOf(false) }

    SwitchButton(
        isSelected = selected,
        switchButtonConfig = SwitchButtonConfig(
            selectedBackgroundColor = Color(0xFF6C5CE7),
            unSelectedBackgroundColor = Color(0xFF636B7B)
        ),
        icon = {
            SwitchButtonIcon(
                isSelected = selected,
                selectedIcon = Icons.Default.Check,
                unSelectedIcon = Icons.Default.Close
            )
        },
        onStateChange = { selected = it }
    )
}`,
      kmp: `import com.developerstring.jetco_kmp.components.button.switch_button.SwitchButton
import com.developerstring.jetco_kmp.components.button.switch_button.SwitchButtonConfig
import com.developerstring.jetco_kmp.components.button.switch_button.SwitchButtonIcon

@Composable
fun SwitchButtonExample() {
    var selected by remember { mutableStateOf(false) }

    SwitchButton(
        isSelected = selected,
        switchButtonConfig = SwitchButtonConfig(
            selectedBackgroundColor = Color(0xFF6C5CE7),
            unSelectedBackgroundColor = Color(0xFF636B7B)
        ),
        icon = {
            SwitchButtonIcon(
                isSelected = selected,
                selectedIcon = Icons.Default.Check,
                unSelectedIcon = Icons.Default.Close
            )
        },
        onStateChange = { selected = it }
    )
}`,
    },
    relatedConfigs: ['SwitchButtonConfig', 'SwitchButtonAnimation', 'SwitchButtonIcon'],
    configDetails: [
      {
        name: 'SwitchButtonConfig',
        params: [
          { name: 'selectedBackgroundColor', type: 'Color', default: 'Color(0xFF1E90FF)', description: 'Background when selected.' },
          { name: 'unSelectedBackgroundColor', type: 'Color', default: 'Color(0xFF636B7B)', description: 'Background when unselected.' },
          { name: 'switchPadding', type: 'Dp', default: '3.dp', description: 'Padding around the thumb.' },
          { name: 'switchShape', type: 'Shape', default: 'CircleShape', description: 'Shape of the track.' },
          { name: 'innerBoxColor', type: 'Color', default: 'Color.White', description: 'Thumb color.' },
          { name: 'innerBoxShape', type: 'Shape', default: 'CircleShape', description: 'Thumb shape.' },
        ],
      },
      {
        name: 'SwitchButtonAnimation',
        params: [
          { name: 'animationDuration', type: 'Int', default: '700', description: 'Animation duration in ms.' },
          { name: 'animationDelay', type: 'Int', default: '0', description: 'Animation start delay.' },
          { name: 'animationEasing', type: 'Easing', default: 'LinearOutSlowInEasing', description: 'Easing curve.' },
        ],
      },
      {
        name: 'SwitchButtonIcon',
        params: [
          { name: 'isSelected', type: 'Boolean', default: '—', description: 'Current switch state.' },
          { name: 'selectedIcon', type: 'ImageVector', default: '—', description: 'Icon when selected.' },
          { name: 'unSelectedIcon', type: 'ImageVector', default: '—', description: 'Icon when unselected.' },
          { name: 'enableRotate', type: 'Boolean', default: 'true', description: 'Enable icon rotation animation.' },
          { name: 'rotationAngle', type: 'Float', default: '360f', description: 'Rotation angle in degrees.' },
          { name: 'rotationDuration', type: 'Int', default: '600', description: 'Rotation animation duration.' },
          { name: 'iconColor', type: 'Color', default: 'Color.Unspecified', description: 'Icon tint color.' },
        ],
      },
    ],
  },

  'animated-search-bar': {
    name: 'AnimatedSearchBar',
    category: 'Components',
    description: 'A search bar with animated expand/collapse transitions, rotation effects, and bounce physics. Supports custom styling, loading state, and programmatic control via a controller.',
    image: img('AnimatedSearchBar.gif'),
    androidImport: 'com.developerstring.jetco.ui.components.search.animated_searchbar.AnimatedSearchBar',
    kmpImport: 'com.developerstring.jetco_kmp.components.search.animated_searchbar.AnimatedSearchBar',
    params: [
      { name: 'value', type: 'String', default: '—', description: 'Current search query text.' },
      { name: 'onValueChange', type: '(String) -> Unit', default: '—', description: 'Callback when the search text changes.' },
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the search bar.' },
      { name: 'config', type: 'AnimatedSearchBarConfig', default: 'AnimatedSearchBarConfig()', description: 'Visual configuration (size, colors, corners, border).' },
      { name: 'animationConfig', type: 'AnimatedSearchBarAnimationConfig', default: 'AnimatedSearchBarAnimationConfig()', description: 'Animation configuration (rotation, bounce, spring, fade).' },
      { name: 'textConfig', type: 'AnimatedSearchBarTextConfig', default: 'AnimatedSearchBarTextConfig()', description: 'Text styling configuration (text style, colors, placeholder).' },
      { name: 'isLoading', type: 'Boolean', default: 'false', description: 'Show loading indicator inside the search bar.' },
      { name: 'onSearch', type: '(String) -> Unit', default: '{}', description: 'Callback triggered when search is submitted.' },
      { name: 'onExpand', type: '() -> Unit', default: '{}', description: 'Callback triggered when the search bar expands.' },
      { name: 'onCollapse', type: '() -> Unit', default: '{}', description: 'Callback triggered when the search bar collapses.' },
      { name: 'controller', type: 'AnimatedSearchBarController', default: 'rememberAnimatedSearchBarController()', description: 'Controller for programmatic collapse. Call controller.collapse() to collapse.' },
    ],
    codeExamples: {
      android: `import com.developerstring.jetco.ui.components.search.animated_searchbar.AnimatedSearchBar
import com.developerstring.jetco.ui.components.search.animated_searchbar.AnimatedSearchBarConfig
import com.developerstring.jetco.ui.components.search.animated_searchbar.AnimatedSearchBarTextConfig
import com.developerstring.jetco.ui.components.search.animated_searchbar.AnimatedSearchBarAnimationConfig

@Composable
fun SearchBarExample() {
    var query by remember { mutableStateOf("") }

    AnimatedSearchBar(
        value = query,
        onValueChange = { query = it },
        config = AnimatedSearchBarConfig(
            height = 48.dp,
            expandedWidth = 320.dp,
            collapsedWidth = 64.dp,
            searchBarBackgroundColor = Color.White,
            searchBarCornerRadius = 35.dp,
            searchBarBorderColor = Color(0xFFE0E0E0),
            searchBarBorderWidth = 2.dp,
            iconBackgroundColor = Color(0xFF558B2F),
            iconTint = Color.White,
            clearIconTint = Color.Black,
            placeholderTextString = "Search"
        ),
        textConfig = AnimatedSearchBarTextConfig(
            textStyle = TextStyle(fontSize = 16.sp),
            inputTextColor = Color.Black,
            placeholderTextColor = Color.Gray,
            cursorColor = Color.DarkGray
        ),
        onSearch = { searchQuery ->
            println("Searching: $searchQuery")
        }
    )
}`,
      kmp: `import com.developerstring.jetco_kmp.components.search.animated_searchbar.AnimatedSearchBar
import com.developerstring.jetco_kmp.components.search.animated_searchbar.AnimatedSearchBarConfig
import com.developerstring.jetco_kmp.components.search.animated_searchbar.AnimatedSearchBarTextConfig
import com.developerstring.jetco_kmp.components.search.animated_searchbar.AnimatedSearchBarAnimationConfig

@Composable
fun SearchBarExample() {
    var query by remember { mutableStateOf("") }

    AnimatedSearchBar(
        value = query,
        onValueChange = { query = it },
        config = AnimatedSearchBarConfig(
            height = 48.dp,
            expandedWidth = 320.dp,
            collapsedWidth = 64.dp,
            searchBarBackgroundColor = Color.White,
            searchBarCornerRadius = 35.dp,
            searchBarBorderColor = Color(0xFFE0E0E0),
            searchBarBorderWidth = 2.dp,
            iconBackgroundColor = Color(0xFF558B2F),
            iconTint = Color.White,
            clearIconTint = Color.Black,
            placeholderTextString = "Search"
        ),
        textConfig = AnimatedSearchBarTextConfig(
            textStyle = TextStyle(fontSize = 16.sp),
            inputTextColor = Color.Black,
            placeholderTextColor = Color.Gray,
            cursorColor = Color.DarkGray
        ),
        onSearch = { searchQuery ->
            println("Searching: $searchQuery")
        }
    )
}`,
    },
    relatedConfigs: ['AnimatedSearchBarConfig', 'AnimatedSearchBarAnimationConfig', 'AnimatedSearchBarTextConfig'],
    configDetails: [
      {
        name: 'AnimatedSearchBarConfig',
        params: [
          { name: 'height', type: 'Dp', default: '48.dp', description: 'Height of the search bar.' },
          { name: 'expandedWidth', type: 'Dp', default: '320.dp', description: 'Width when expanded.' },
          { name: 'collapsedWidth', type: 'Dp', default: '64.dp', description: 'Width when collapsed (icon only).' },
          { name: 'searchBarBackgroundColor', type: 'Color', default: 'Color.White', description: 'Background color of the search bar.' },
          { name: 'searchBarCornerRadius', type: 'Dp', default: '35.dp', description: 'Corner radius of the search bar.' },
          { name: 'searchBarBorderColor', type: 'Color', default: 'Color(0xFFE0E0E0)', description: 'Border color.' },
          { name: 'searchBarBorderWidth', type: 'Dp', default: '2.dp', description: 'Border width.' },
          { name: 'iconBackgroundColor', type: 'Color', default: 'Color(0xFF558B2F)', description: 'Background color of the search icon button.' },
          { name: 'iconTint', type: 'Color', default: 'Color.White', description: 'Tint color for the search icon.' },
          { name: 'clearIconTint', type: 'Color', default: 'Color.Black', description: 'Tint color for the clear (X) icon.' },
          { name: 'placeholderTextString', type: 'String', default: '"Search"', description: 'Placeholder text shown when empty.' },
        ],
      },
      {
        name: 'AnimatedSearchBarAnimationConfig',
        params: [
          { name: 'rotationDuration', type: 'Int', default: '500', description: 'Icon rotation animation duration in ms.' },
          { name: 'bounceStiffness', type: 'Float', default: 'Spring.StiffnessMediumLow', description: 'Bounce effect stiffness.' },
          { name: 'bounceDamping', type: 'Float', default: 'Spring.DampingRatioMediumBouncy', description: 'Bounce damping ratio.' },
          { name: 'widthSpringStiffness', type: 'Float', default: 'Spring.StiffnessLow', description: 'Width expansion spring stiffness.' },
          { name: 'widthSpringDamping', type: 'Float', default: 'Spring.DampingRatioLowBouncy', description: 'Width expansion spring damping.' },
          { name: 'fadeDuration', type: 'Int', default: '200', description: 'Text fade in/out duration in ms.' },
        ],
      },
      {
        name: 'AnimatedSearchBarTextConfig',
        params: [
          { name: 'textStyle', type: 'TextStyle', default: 'TextStyle(fontSize = 16.sp)', description: 'Text style for the input text.' },
          { name: 'fontFamily', type: 'FontFamily?', default: 'null', description: 'Font family for input text.' },
          { name: 'fontWeight', type: 'FontWeight?', default: 'null', description: 'Font weight for input text.' },
          { name: 'letterSpacing', type: 'TextUnit', default: 'TextUnit.Unspecified', description: 'Letter spacing for input text.' },
          { name: 'inputTextColor', type: 'Color', default: 'Color.Black', description: 'Color of the input text.' },
          { name: 'placeholderTextStyle', type: 'TextStyle', default: 'TextStyle(fontSize = 16.sp)', description: 'Text style for placeholder.' },
          { name: 'placeholderFontFamily', type: 'FontFamily?', default: 'null', description: 'Font family for placeholder.' },
          { name: 'placeholderFontWeight', type: 'FontWeight?', default: 'null', description: 'Font weight for placeholder.' },
          { name: 'placeholderTextColor', type: 'Color', default: 'Color.Black', description: 'Color of the placeholder text.' },
          { name: 'cursorColor', type: 'Color', default: 'Color.DarkGray', description: 'Color of the text cursor.' },
        ],
      },
    ],
  },

  'vertical-stepper': {
    name: 'VerticalStepper',
    category: 'Components',
    description: 'A vertical step indicator with animated nodes, connectors, and customizable styles for multi-step flows.',
    image: img('vertical-stepper.png'),
    androidImport: 'com.developerstring.jetco.ui.components.stepper.VerticalStepper',
    kmpImport: 'com.developerstring.jetco_kmp.components.stepper.VerticalStepper',
    params: [
      { name: 'steps', type: 'List<StepperNode>', default: '—', description: 'List of step data objects.' },
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the stepper.' },
      { name: 'style', type: 'StepperConfig', default: 'StepperConfig()', description: 'Visual configuration for nodes, connectors, text.' },
      { name: 'stepperActionIcons', type: 'StepperActionIcons', default: 'StepperActionIcons()', description: 'Icons for completed, error, and active step states.' },
      { name: 'scrollEnable', type: 'Boolean', default: 'true', description: 'Whether the stepper allows vertical scrolling.' },
      { name: 'onStepClick', type: '((Int) -> Unit)?', default: 'null', description: 'Callback with step index when a step is clicked.' },
    ],
    codeExamples: {
      android: `import com.developerstring.jetco.ui.components.stepper.VerticalStepper
import com.developerstring.jetco.ui.components.stepper.StepperNode
import com.developerstring.jetco.ui.components.stepper.StepperStatus

@Composable
fun VerticalStepperExample() {
    val steps = listOf(
        StepperNode(title = "Order Placed", status = StepperStatus.COMPLETE),
        StepperNode(title = "Processing", status = StepperStatus.COMPLETE),
        StepperNode(title = "Shipped", status = StepperStatus.CURRENT),
        StepperNode(title = "Delivered", status = StepperStatus.PENDING)
    )

    VerticalStepper(steps = steps)
}`,
      kmp: `import com.developerstring.jetco_kmp.components.stepper.VerticalStepper
import com.developerstring.jetco_kmp.components.stepper.StepperNode
import com.developerstring.jetco_kmp.components.stepper.StepperStatus

@Composable
fun VerticalStepperExample() {
    val steps = listOf(
        StepperNode(title = "Order Placed", status = StepperStatus.COMPLETE),
        StepperNode(title = "Processing", status = StepperStatus.COMPLETE),
        StepperNode(title = "Shipped", status = StepperStatus.CURRENT),
        StepperNode(title = "Delivered", status = StepperStatus.PENDING)
    )

    VerticalStepper(steps = steps)
}`,
    },
    relatedConfigs: ['StepperNode', 'StepperConfig', 'StepperStatus', 'StepperActionIcons'],
    configDetails: [
      {
        name: 'StepperNode',
        params: [
          { name: 'title', type: 'String', default: '""', description: 'Step title text.' },
          { name: 'description', type: 'String?', default: 'null', description: 'Optional step description.' },
          { name: 'icon', type: 'ImageVector?', default: 'null', description: 'Optional step icon.' },
          { name: 'status', type: 'StepperStatus', default: 'StepperStatus.PENDING', description: 'Step status state.' },
        ],
      },
      {
        name: 'StepperConfig',
        params: [
          { name: 'node', type: 'NodeStyle', default: 'NodeStyle()', description: 'Node circle styling (size, colors, border).' },
          { name: 'connector', type: 'ConnectorStyle', default: 'ConnectorStyle()', description: 'Connector line styling.' },
          { name: 'textConfig', type: 'TextStyleConfig', default: 'TextStyleConfig()', description: 'Text styling for title and description.' },
          { name: 'animation', type: 'AnimationConfig', default: 'AnimationConfig()', description: 'Step animation configuration.' },
          { name: 'imageConfig', type: 'ImageConfig', default: 'ImageConfig()', description: 'Step image/icon configuration.' },
        ],
      },
      {
        name: 'StepperActionIcons',
        params: [
          { name: 'completed', type: 'ImageVector', default: 'Icons.Default.Check', description: 'Icon for completed step nodes.' },
          { name: 'error', type: 'ImageVector', default: 'Icons.Default.Close', description: 'Icon for error step nodes.' },
          { name: 'active', type: 'ImageVector', default: 'Icons.Rounded.Check', description: 'Icon for the active step node.' },
        ],
      },
    ],
  },

  'horizontal-stepper': {
    name: 'HorizontalStepper',
    category: 'Components',
    description: 'A horizontal step indicator for multi-step processes, rendered in a row layout.',
    image: img('HorizontalStepper.png'),
    androidImport: 'com.developerstring.jetco.ui.components.stepper.HorizontalStepper',
    kmpImport: 'com.developerstring.jetco_kmp.components.stepper.HorizontalStepper',
    params: [
      { name: 'steps', type: 'List<StepperNode>', default: '—', description: 'List of step data objects.' },
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the stepper.' },
      { name: 'style', type: 'StepperConfig', default: 'StepperConfig()', description: 'Visual configuration.' },
      { name: 'stepperActionIcons', type: 'StepperActionIcons', default: 'StepperActionIcons()', description: 'Icons for completed, error, and active step states.' },
      { name: 'showLabels', type: 'Boolean', default: 'true', description: 'Whether to display step title labels below each node.' },
      { name: 'scrollEnable', type: 'Boolean', default: 'true', description: 'Whether the stepper allows horizontal scrolling.' },
      { name: 'onStepClick', type: '((Int) -> Unit)?', default: 'null', description: 'Callback with step index when a step is clicked.' },
    ],
    codeExamples: {
      android: `import com.developerstring.jetco.ui.components.stepper.HorizontalStepper
import com.developerstring.jetco.ui.components.stepper.StepperNode
import com.developerstring.jetco.ui.components.stepper.StepperStatus

@Composable
fun HorizontalStepperExample() {
    val steps = listOf(
        StepperNode(title = "Cart", status = StepperStatus.COMPLETE),
        StepperNode(title = "Address", status = StepperStatus.CURRENT),
        StepperNode(title = "Payment", status = StepperStatus.PENDING)
    )

    HorizontalStepper(steps = steps)
}`,
      kmp: `import com.developerstring.jetco_kmp.components.stepper.HorizontalStepper
import com.developerstring.jetco_kmp.components.stepper.StepperNode
import com.developerstring.jetco_kmp.components.stepper.StepperStatus

@Composable
fun HorizontalStepperExample() {
    val steps = listOf(
        StepperNode(title = "Cart", status = StepperStatus.COMPLETE),
        StepperNode(title = "Address", status = StepperStatus.CURRENT),
        StepperNode(title = "Payment", status = StepperStatus.PENDING)
    )

    HorizontalStepper(steps = steps)
}`,
    },
    relatedConfigs: ['StepperNode', 'StepperConfig', 'StepperActionIcons'],
    configDetails: [
      {
        name: 'StepperNode',
        params: [
          { name: 'title', type: 'String?', default: 'null', description: 'A short title describing the step.' },
          { name: 'description', type: 'String?', default: 'null', description: 'Optional secondary text providing additional details.' },
          { name: 'icon', type: 'ImageVector?', default: 'null', description: 'Optional custom icon for the step (fallbacks to default icons if null).' },
          { name: 'painter', type: 'Painter?', default: 'null', description: 'Optional custom painter for the step icon.' },
          { name: 'status', type: 'StepperStatus', default: 'StepperStatus.IDLE', description: 'Current status of the step (IDLE, ACTIVE, COMPLETE, or ERROR).' },
        ],
      },
      {
        name: 'StepperConfig',
        params: [
          { name: 'node', type: 'NodeStyle', default: 'NodeStyle()', description: 'Visual style for stepper nodes (circles/shapes at each step).' },
          { name: 'connector', type: 'ConnectorStyle', default: 'ConnectorStyle()', description: 'Style for connector lines between nodes.' },
          { name: 'textConfig', type: 'TextStyleConfig', default: 'TextStyleConfig()', description: 'Text style configuration for titles and descriptions.' },
          { name: 'animation', type: 'AnimationConfig', default: 'AnimationConfig()', description: 'Animation configuration for stepper transitions.' },
          { name: 'imageConfig', type: 'ImageConfig', default: 'ImageConfig()', description: 'Configuration for optional images within stepper nodes.' },
        ],
      },
      {
        name: 'StepperActionIcons',
        params: [
          { name: 'completed', type: 'ImageVector', default: 'Icons.Default.Check', description: 'Icon for completed step nodes.' },
          { name: 'error', type: 'ImageVector', default: 'Icons.Default.Close', description: 'Icon for error step nodes.' },
          { name: 'active', type: 'ImageVector', default: 'Icons.Rounded.Check', description: 'Icon for the active step node.' },
        ],
      },
    ],
  },

  'compact-horizontal-stepper': {
    name: 'CompactHorizontalStepper',
    category: 'Components',
    description: 'A compact variant of the horizontal stepper, optimized for limited space.',
    image: img('CompactHorizontalStepper.png'),
    androidImport: 'com.developerstring.jetco.ui.components.stepper.CompactHorizontalStepper',
    kmpImport: 'com.developerstring.jetco_kmp.components.stepper.CompactHorizontalStepper',
    params: [
      { name: 'steps', type: 'List<StepperNode>', default: '—', description: 'List of step data objects.' },
      { name: 'currentStep', type: 'Int', default: '—', description: 'Index of the current active step (0-based).' },
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the stepper.' },
      { name: 'style', type: 'StepperConfig', default: 'StepperConfig()', description: 'Visual configuration.' },
      { name: 'stepperActionIcons', type: 'StepperActionIcons', default: 'StepperActionIcons()', description: 'Icons for completed, error, and active step states.' },
      { name: 'onStepClick', type: '((Int) -> Unit)?', default: 'null', description: 'Callback with step index when a step is clicked.' },
    ],
    codeExamples: {
      android: `import com.developerstring.jetco.ui.components.stepper.CompactHorizontalStepper
import com.developerstring.jetco.ui.components.stepper.StepperNode

@Composable
fun CompactStepperExample() {
    CompactHorizontalStepper(
        steps = listOf(
            StepperNode(title = "Step 1"),
            StepperNode(title = "Step 2"),
            StepperNode(title = "Step 3")
        )
    )
}`,
      kmp: `import com.developerstring.jetco_kmp.components.stepper.CompactHorizontalStepper
import com.developerstring.jetco_kmp.components.stepper.StepperNode

@Composable
fun CompactStepperExample() {
    CompactHorizontalStepper(
        steps = listOf(
            StepperNode(title = "Step 1"),
            StepperNode(title = "Step 2"),
            StepperNode(title = "Step 3")
        )
    )
}`,
    },
    relatedConfigs: ['StepperNode', 'StepperConfig', 'StepperActionIcons'],
    configDetails: [
      {
        name: 'StepperNode',
        params: [
          { name: 'title', type: 'String?', default: 'null', description: 'A short title describing the step.' },
          { name: 'description', type: 'String?', default: 'null', description: 'Optional secondary text providing additional details.' },
          { name: 'icon', type: 'ImageVector?', default: 'null', description: 'Optional custom icon for the step (fallbacks to default icons if null).' },
          { name: 'painter', type: 'Painter?', default: 'null', description: 'Optional custom painter for the step icon.' },
          { name: 'status', type: 'StepperStatus', default: 'StepperStatus.IDLE', description: 'Current status of the step (IDLE, ACTIVE, COMPLETE, or ERROR).' },
        ],
      },
      {
        name: 'StepperConfig',
        params: [
          { name: 'node', type: 'NodeStyle', default: 'NodeStyle()', description: 'Visual style for stepper nodes (circles/shapes at each step).' },
          { name: 'connector', type: 'ConnectorStyle', default: 'ConnectorStyle()', description: 'Style for connector lines between nodes.' },
          { name: 'textConfig', type: 'TextStyleConfig', default: 'TextStyleConfig()', description: 'Text style configuration for titles and descriptions.' },
          { name: 'animation', type: 'AnimationConfig', default: 'AnimationConfig()', description: 'Animation configuration for stepper transitions.' },
          { name: 'imageConfig', type: 'ImageConfig', default: 'ImageConfig()', description: 'Configuration for optional images within stepper nodes.' },
        ],
      },
      {
        name: 'StepperActionIcons',
        params: [
          { name: 'completed', type: 'ImageVector', default: 'Icons.Default.Check', description: 'Icon for completed step nodes.' },
          { name: 'error', type: 'ImageVector', default: 'Icons.Default.Close', description: 'Icon for error step nodes.' },
          { name: 'active', type: 'ImageVector', default: 'Icons.Rounded.Check', description: 'Icon for the active step node.' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════
  //  PICKERS
  // ═══════════════════════════════════════════

  'wheel-date-picker': {
    name: 'WheelDatePicker',
    category: 'Pickers',
    description: 'A scrollable wheel-style date picker with configurable date order, range, and styling. Supports multiple display modes: bottom sheet, dialog, and inline.',
    image: img('date_picker.png'),
    androidImport: 'com.developerstring.jetco.ui.components.picker.WheelDatePickerView',
    kmpImport: 'com.developerstring.jetco_kmp.components.picker.WheelDatePickerView',
    params: [
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the picker.' },
      { name: 'visible', type: 'Boolean', default: 'true', description: 'Visibility state for bottom sheet/dialog modes.' },
      { name: 'displayMode', type: 'PickerDisplayMode', default: 'INLINE', description: 'Display mode: BOTTOM_SHEET, DIALOG, or INLINE.' },
      { name: 'datePickerConfig', type: 'DatePickerConfig', default: 'PickerDefaults.datePickerConfig()', description: 'Date picker configuration.' },
      { name: 'wheelPickerConfig', type: 'WheelPickerConfig', default: 'PickerDefaults.wheelPickerConfig()', description: 'Wheel appearance and behavior config.' },
      { name: 'headerConfig', type: 'HeaderConfig', default: 'PickerDefaults.headerConfig()', description: 'Header bar configuration.' },
      { name: 'containerConfig', type: 'ContainerConfig', default: 'PickerDefaults.containerConfig()', description: 'Container styling config.' },
      { name: 'onDateSelected', type: '(LocalDate) -> Unit', default: '—', description: 'Callback with selected date.' },
      { name: 'onDismiss', type: '() -> Unit', default: '{}', description: 'Callback when dismissed (bottom sheet/dialog).' },
    ],
    codeExamples: {
      variants: [
        {
          name: 'Bottom Sheet',
          description: 'Date picker displayed as a sliding bottom sheet overlay.',
          image: img('date_picker.png'),
          android: `import com.developerstring.jetco.ui.components.picker.*
import com.developerstring.jetco.ui.components.picker.PickerDefaults

@Composable
fun BottomSheetDatePicker() {
    var showPicker by remember { mutableStateOf(false) }
    var selectedDate by remember { mutableStateOf<LocalDate?>(null) }

    Button(onClick = { showPicker = true }) {
        Text("Select Date")
    }

    WheelDatePickerView(
        visible = showPicker,
        displayMode = PickerDisplayMode.BOTTOM_SHEET,
        startDate = LocalDate.now(),
        onDoneClick = { date ->
            selectedDate = date
            showPicker = false
        },
        onDismiss = { showPicker = false }
    )
}`,
          kmp: `import com.developerstring.jetco_kmp.components.picker.*
import com.developerstring.jetco_kmp.components.picker.PickerDefaults

@Composable
fun BottomSheetDatePicker() {
    var showPicker by remember { mutableStateOf(false) }
    var selectedDate by remember { mutableStateOf<LocalDate?>(null) }

    Button(onClick = { showPicker = true }) {
        Text("Select Date")
    }

    WheelDatePickerView(
        visible = showPicker,
        displayMode = PickerDisplayMode.BOTTOM_SHEET,
        startDate = LocalDate.now(),
        onDoneClick = { date ->
            selectedDate = date
            showPicker = false
        },
        onDismiss = { showPicker = false }
    )
}`,
        },
        {
          name: 'Dialog',
          description: 'Date picker displayed as a centered dialog overlay.',
          image: img('date_picker.png'),
          android: `import com.developerstring.jetco.ui.components.picker.*

@Composable
fun DialogDatePicker() {
    var showPicker by remember { mutableStateOf(false) }

    Button(onClick = { showPicker = true }) {
        Text("Select Date")
    }

    WheelDatePickerView(
        visible = showPicker,
        displayMode = PickerDisplayMode.DIALOG,
        startDate = LocalDate.now(),
        onDoneClick = { date ->
            println("Selected: $date")
            showPicker = false
        },
        onDismiss = { showPicker = false }
    )
}`,
          kmp: `import com.developerstring.jetco_kmp.components.picker.*

@Composable
fun DialogDatePicker() {
    var showPicker by remember { mutableStateOf(false) }

    Button(onClick = { showPicker = true }) {
        Text("Select Date")
    }

    WheelDatePickerView(
        visible = showPicker,
        displayMode = PickerDisplayMode.DIALOG,
        startDate = LocalDate.now(),
        onDoneClick = { date ->
            println("Selected: $date")
            showPicker = false
        },
        onDismiss = { showPicker = false }
    )
}`,
        },
        {
          name: 'Customized',
          description: 'Fully customized wheel date picker with custom wheel config, header, and selector styles.',
          image: img('date_picker.png'),
          android: `import com.developerstring.jetco.ui.components.picker.*
import com.developerstring.jetco.ui.components.picker.PickerDefaults

@Composable
fun CustomizedDatePicker() {
    var showPicker by remember { mutableStateOf(false) }

    WheelDatePickerView(
        visible = showPicker,
        displayMode = PickerDisplayMode.BOTTOM_SHEET,
        wheelConfig = PickerDefaults.wheelPickerConfig(
            height = 220.dp,
            selectedTextStyle = TextStyle(
                fontSize = 20.sp,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF0066CC)
            ),
            selectorColor = Color(0x1A0066CC),
            selectorShape = RoundedCornerShape(16.dp),
            itemSpacing = 40.dp
        ),
        headerConfig = PickerDefaults.headerConfig(
            title = "Select Birthday",
            backgroundColor = Color(0xFF0066CC),
            titleTextStyle = TextStyle(
                fontSize = 18.sp,
                fontWeight = FontWeight.SemiBold,
                color = Color.White
            )
        ),
        onDoneClick = { date ->
            println("Selected: $date")
            showPicker = false
        },
        onDismiss = { showPicker = false }
    )
}`,
          kmp: `import com.developerstring.jetco_kmp.components.picker.*
import com.developerstring.jetco_kmp.components.picker.PickerDefaults

@Composable
fun CustomizedDatePicker() {
    var showPicker by remember { mutableStateOf(false) }

    WheelDatePickerView(
        visible = showPicker,
        displayMode = PickerDisplayMode.BOTTOM_SHEET,
        wheelConfig = PickerDefaults.wheelPickerConfig(
            height = 220.dp,
            selectedTextStyle = TextStyle(
                fontSize = 20.sp,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF0066CC)
            ),
            selectorColor = Color(0x1A0066CC),
            selectorShape = RoundedCornerShape(16.dp),
            itemSpacing = 40.dp
        ),
        headerConfig = PickerDefaults.headerConfig(
            title = "Select Birthday",
            backgroundColor = Color(0xFF0066CC),
            titleTextStyle = TextStyle(
                fontSize = 18.sp,
                fontWeight = FontWeight.SemiBold,
                color = Color.White
            )
        ),
        onDoneClick = { date ->
            println("Selected: $date")
            showPicker = false
        },
        onDismiss = { showPicker = false }
    )
}`,
        },
        {
          name: 'Inline',
          description: 'Inline date picker rendered directly in the layout without a dialog or bottom sheet wrapper.',
          image: img('date_picker.png'),
          android: `import com.developerstring.jetco.ui.components.picker.*
import com.developerstring.jetco.ui.components.picker.PickerDefaults

@Composable
fun InlineDatePicker() {
    var selectedDate by remember { mutableStateOf(LocalDate.now()) }

    WheelDatePicker(
        startDate = selectedDate,
        wheelConfig = PickerDefaults.wheelPickerConfig(
            height = 200.dp
        ),
        headerConfig = PickerDefaults.headerConfig(
            title = "Pick a Date"
        ),
        onDoneClick = { date ->
            selectedDate = date
        }
    )
}`,
          kmp: `import com.developerstring.jetco_kmp.components.picker.*
import com.developerstring.jetco_kmp.components.picker.PickerDefaults

@Composable
fun InlineDatePicker() {
    var selectedDate by remember { mutableStateOf(LocalDate.now()) }

    WheelDatePicker(
        startDate = selectedDate,
        wheelConfig = PickerDefaults.wheelPickerConfig(
            height = 200.dp
        ),
        headerConfig = PickerDefaults.headerConfig(
            title = "Pick a Date"
        ),
        onDoneClick = { date ->
            selectedDate = date
        }
    )
}`,
        },
      ],
    },
    relatedConfigs: ['DatePickerConfig', 'WheelPickerConfig', 'HeaderConfig', 'ContainerConfig', 'PickerDisplayMode', 'DateOrder', 'PickerDate'],
    configDetails: [
      {
        name: 'DatePickerConfig',
        params: [
          { name: 'yearsRange', type: 'IntRange', default: 'IntRange(1922, 2122)', description: 'Allowed year range for selection.' },
          { name: 'dateOrder', type: 'DateOrder', default: 'DateOrder.DAY_MONTH_YEAR', description: 'Column ordering of day, month, year (DAY_MONTH_YEAR, MONTH_DAY_YEAR, YEAR_MONTH_DAY).' },
          { name: 'showShortMonths', type: 'Boolean', default: 'false', description: 'Whether to use abbreviated month names (Jan, Feb…).' },
          { name: 'showMonthAsNumber', type: 'Boolean', default: 'false', description: 'Whether to display months as numbers instead of names.' },
          { name: 'customMonthNames', type: 'List<String>?', default: 'null', description: 'Optional custom list of 12 month names to override defaults.' },
        ],
      },
      {
        name: 'WheelPickerConfig',
        params: [
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
      {
        name: 'HeaderConfig',
        params: [
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
      {
        name: 'ContainerConfig',
        params: [
          { name: 'containerColor', type: 'Color', default: 'Color.White', description: 'Background color of the picker container.' },
          { name: 'shape', type: 'Shape', default: 'RoundedCornerShape(16.dp)', description: 'Shape of the container.' },
          { name: 'tonalElevation', type: 'Dp', default: '6.dp', description: 'Tonal elevation for Material 3 surfaces.' },
          { name: 'shadowElevation', type: 'Dp', default: '0.dp', description: 'Shadow elevation for the container.' },
        ],
      },
    ],
  },

  'wheel-time-picker': {
    name: 'WheelTimePicker',
    category: 'Pickers',
    description: 'A wheel-style time picker with 12/24-hour format support. Supports bottom sheet, dialog, and inline modes.',
    image: img('time_picker.png'),
    androidImport: 'com.developerstring.jetco.ui.components.picker.WheelTimePickerView',
    kmpImport: 'com.developerstring.jetco_kmp.components.picker.WheelTimePickerView',
    params: [
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the picker.' },
      { name: 'visible', type: 'Boolean', default: 'true', description: 'Visibility state for bottom sheet/dialog modes.' },
      { name: 'displayMode', type: 'PickerDisplayMode', default: 'INLINE', description: 'Display mode: BOTTOM_SHEET, DIALOG, or INLINE.' },
      { name: 'timeConfig', type: 'TimePickerConfig', default: 'PickerDefaults.timePickerConfig()', description: 'Time format configuration (12/24 hour).' },
      { name: 'wheelPickerConfig', type: 'WheelPickerConfig', default: 'PickerDefaults.wheelPickerConfig()', description: 'Wheel appearance config.' },
      { name: 'headerConfig', type: 'HeaderConfig', default: 'PickerDefaults.headerConfig()', description: 'Header config.' },
      { name: 'containerConfig', type: 'ContainerConfig', default: 'PickerDefaults.containerConfig()', description: 'Container config.' },
      { name: 'onTimeSelected', type: '(LocalTime) -> Unit', default: '—', description: 'Callback with selected time.' },
      { name: 'onDismiss', type: '() -> Unit', default: '{}', description: 'Callback when dismissed.' },
    ],
    codeExamples: {
      variants: [
        {
          name: 'Bottom Sheet',
          description: 'Time picker in a sliding bottom sheet with 24-hour format.',
          image: img('time_picker.png'),
          android: `import com.developerstring.jetco.ui.components.picker.*

@Composable
fun BottomSheetTimePicker() {
    var showPicker by remember { mutableStateOf(false) }
    var selectedTime by remember { mutableStateOf<LocalTime?>(null) }

    Button(onClick = { showPicker = true }) {
        Text("Select Time")
    }

    WheelTimePickerView(
        visible = showPicker,
        displayMode = PickerDisplayMode.BOTTOM_SHEET,
        timeConfig = PickerDefaults.timePickerConfig(
            is24HourFormat = true
        ),
        onDoneClick = { time ->
            selectedTime = time
            showPicker = false
        },
        onDismiss = { showPicker = false }
    )
}`,
          kmp: `import com.developerstring.jetco_kmp.components.picker.*

@Composable
fun BottomSheetTimePicker() {
    var showPicker by remember { mutableStateOf(false) }
    var selectedTime by remember { mutableStateOf<LocalTime?>(null) }

    Button(onClick = { showPicker = true }) {
        Text("Select Time")
    }

    WheelTimePickerView(
        visible = showPicker,
        displayMode = PickerDisplayMode.BOTTOM_SHEET,
        timeConfig = PickerDefaults.timePickerConfig(
            is24HourFormat = true
        ),
        onDoneClick = { time ->
            selectedTime = time
            showPicker = false
        },
        onDismiss = { showPicker = false }
    )
}`,
        },
        {
          name: 'Dialog (12h)',
          description: 'Time picker in a dialog with 12-hour AM/PM format and custom styling.',
          image: img('time_picker.png'),
          android: `import com.developerstring.jetco.ui.components.picker.*

@Composable
fun DialogTimePicker12Hour() {
    var showPicker by remember { mutableStateOf(false) }

    WheelTimePickerView(
        visible = showPicker,
        displayMode = PickerDisplayMode.DIALOG,
        timeConfig = PickerDefaults.timePickerConfig(
            is24HourFormat = false
        ),
        wheelConfig = PickerDefaults.wheelPickerConfig(
            selectedTextStyle = TextStyle(
                fontSize = 22.sp,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF10B981)
            ),
            selectorColor = Color(0x1A10B981)
        ),
        onDoneClick = { time ->
            println("Selected: $time")
            showPicker = false
        },
        onDismiss = { showPicker = false }
    )
}`,
          kmp: `import com.developerstring.jetco_kmp.components.picker.*

@Composable
fun DialogTimePicker12Hour() {
    var showPicker by remember { mutableStateOf(false) }

    WheelTimePickerView(
        visible = showPicker,
        displayMode = PickerDisplayMode.DIALOG,
        timeConfig = PickerDefaults.timePickerConfig(
            is24HourFormat = false
        ),
        wheelConfig = PickerDefaults.wheelPickerConfig(
            selectedTextStyle = TextStyle(
                fontSize = 22.sp,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF10B981)
            ),
            selectorColor = Color(0x1A10B981)
        ),
        onDoneClick = { time ->
            println("Selected: $time")
            showPicker = false
        },
        onDismiss = { showPicker = false }
    )
}`,
        },
        {
          name: 'Customized',
          description: 'Inline time picker with 15-minute intervals and custom text styles.',
          image: img('time_picker.png'),
          android: `import com.developerstring.jetco.ui.components.picker.*

@Composable
fun CustomizedTimePicker() {
    var time by remember { mutableStateOf(LocalTime.now()) }

    WheelTimePicker(
        startTime = time,
        timeConfig = PickerDefaults.timePickerConfig(
            is24HourFormat = true,
            minuteInterval = 15
        ),
        wheelConfig = PickerDefaults.wheelPickerConfig(
            height = 180.dp,
            selectedTextStyle = TextStyle(
                fontSize = 24.sp,
                fontWeight = FontWeight.ExtraBold,
                color = Color(0xFFEF4444)
            ),
            normalTextStyle = TextStyle(
                fontSize = 16.sp,
                color = Color.Gray
            )
        ),
        onDoneClick = { selectedTime ->
            time = selectedTime
        }
    )
}`,
          kmp: `import com.developerstring.jetco_kmp.components.picker.*

@Composable
fun CustomizedTimePicker() {
    var time by remember { mutableStateOf(LocalTime.now()) }

    WheelTimePicker(
        startTime = time,
        timeConfig = PickerDefaults.timePickerConfig(
            is24HourFormat = true,
            minuteInterval = 15
        ),
        wheelConfig = PickerDefaults.wheelPickerConfig(
            height = 180.dp,
            selectedTextStyle = TextStyle(
                fontSize = 24.sp,
                fontWeight = FontWeight.ExtraBold,
                color = Color(0xFFEF4444)
            ),
            normalTextStyle = TextStyle(
                fontSize = 16.sp,
                color = Color.Gray
            )
        ),
        onDoneClick = { selectedTime ->
            time = selectedTime
        }
    )
}`,
        },
      ],
    },
    relatedConfigs: ['TimePickerConfig', 'WheelPickerConfig', 'HeaderConfig', 'ContainerConfig', 'PickerDisplayMode', 'TimeFormat', 'PickerTime'],
    configDetails: [
      {
        name: 'TimePickerConfig',
        params: [
          { name: 'timeFormat', type: 'TimeFormat', default: 'TimeFormat.HOUR_24', description: '12-hour or 24-hour display format (HOUR_12 or HOUR_24).' },
          { name: 'showSeconds', type: 'Boolean', default: 'false', description: 'Whether to include a seconds column in the picker.' },
          { name: 'minuteInterval', type: 'Int', default: '1', description: 'Granularity of minute selection (e.g., 1, 5, 10, 15, 30). Clamped between 1 and 30.' },
          { name: 'secondInterval', type: 'Int', default: '1', description: 'Granularity of second selection (e.g., 1, 5, 10, 15, 30). Clamped between 1 and 30.' },
        ],
      },
      {
        name: 'WheelPickerConfig',
        params: [
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
      {
        name: 'HeaderConfig',
        params: [
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
      {
        name: 'ContainerConfig',
        params: [
          { name: 'containerColor', type: 'Color', default: 'Color.White', description: 'Background color of the picker container.' },
          { name: 'shape', type: 'Shape', default: 'RoundedCornerShape(16.dp)', description: 'Shape of the container.' },
          { name: 'tonalElevation', type: 'Dp', default: '6.dp', description: 'Tonal elevation for Material 3 surfaces.' },
          { name: 'shadowElevation', type: 'Dp', default: '0.dp', description: 'Shadow elevation for the container.' },
        ],
      },
    ],
  },

  'wheel-date-time-picker': {
    name: 'WheelDateTimePicker',
    category: 'Pickers',
    description: 'A combined wheel-style date and time picker. Supports bottom sheet, dialog, and inline modes for selecting both date and time.',
    image: img('date_time_picker.png'),
    androidImport: 'com.developerstring.jetco.ui.components.picker.WheelDateTimePickerView',
    kmpImport: 'com.developerstring.jetco_kmp.components.picker.WheelDateTimePickerView',
    params: [
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the picker.' },
      { name: 'visible', type: 'Boolean', default: 'true', description: 'Visibility state for bottom sheet/dialog modes.' },
      { name: 'displayMode', type: 'PickerDisplayMode', default: 'INLINE', description: 'Display mode: BOTTOM_SHEET, DIALOG, or INLINE.' },
      { name: 'datePickerConfig', type: 'DatePickerConfig', default: 'PickerDefaults.datePickerConfig()', description: 'Date picker config.' },
      { name: 'wheelPickerConfig', type: 'WheelPickerConfig', default: 'PickerDefaults.wheelPickerConfig()', description: 'Wheel appearance config.' },
      { name: 'onDateTimeSelected', type: '(LocalDateTime) -> Unit', default: '—', description: 'Callback with selected date and time.' },
      { name: 'onDismiss', type: '() -> Unit', default: '{}', description: 'Callback when dismissed.' },
    ],
    codeExamples: {
      variants: [
        {
          name: 'Bottom Sheet',
          description: 'Combined date & time picker in a bottom sheet overlay.',
          image: img('date_time_picker.png'),
          android: `import com.developerstring.jetco.ui.components.picker.*

@Composable
fun BottomSheetDateTimePicker() {
    var showPicker by remember { mutableStateOf(false) }
    var selectedDateTime by remember { mutableStateOf<LocalDateTime?>(null) }

    Button(onClick = { showPicker = true }) {
        Text("Select Date & Time")
    }

    WheelDateTimePickerView(
        visible = showPicker,
        displayMode = PickerDisplayMode.BOTTOM_SHEET,
        startDateTime = LocalDateTime.now(),
        onDoneClick = { dateTime ->
            selectedDateTime = dateTime
            showPicker = false
        },
        onDismiss = { showPicker = false }
    )
}`,
          kmp: `import com.developerstring.jetco_kmp.components.picker.*

@Composable
fun BottomSheetDateTimePicker() {
    var showPicker by remember { mutableStateOf(false) }
    var selectedDateTime by remember { mutableStateOf<LocalDateTime?>(null) }

    Button(onClick = { showPicker = true }) {
        Text("Select Date & Time")
    }

    WheelDateTimePickerView(
        visible = showPicker,
        displayMode = PickerDisplayMode.BOTTOM_SHEET,
        startDateTime = LocalDateTime.now(),
        onDoneClick = { dateTime ->
            selectedDateTime = dateTime
            showPicker = false
        },
        onDismiss = { showPicker = false }
    )
}`,
        },
        {
          name: 'Dialog',
          description: 'Combined date & time picker in a centered dialog with custom header and styling.',
          image: img('date_time_picker.png'),
          android: `import com.developerstring.jetco.ui.components.picker.*

@Composable
fun DialogDateTimePicker() {
    var showPicker by remember { mutableStateOf(false) }

    WheelDateTimePickerView(
        visible = showPicker,
        displayMode = PickerDisplayMode.DIALOG,
        startDateTime = LocalDateTime.now(),
        wheelConfig = PickerDefaults.wheelPickerConfig(
            height = 200.dp,
            selectedTextStyle = TextStyle(
                fontSize = 20.sp,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF8B5CF6)
            ),
            selectorColor = Color(0x1A8B5CF6)
        ),
        headerConfig = PickerDefaults.headerConfig(
            title = "Schedule Meeting",
            backgroundColor = Color(0xFF8B5CF6)
        ),
        onDoneClick = { dateTime ->
            println("Scheduled for: $dateTime")
            showPicker = false
        },
        onDismiss = { showPicker = false }
    )
}`,
          kmp: `import com.developerstring.jetco_kmp.components.picker.*

@Composable
fun DialogDateTimePicker() {
    var showPicker by remember { mutableStateOf(false) }

    WheelDateTimePickerView(
        visible = showPicker,
        displayMode = PickerDisplayMode.DIALOG,
        startDateTime = LocalDateTime.now(),
        wheelConfig = PickerDefaults.wheelPickerConfig(
            height = 200.dp,
            selectedTextStyle = TextStyle(
                fontSize = 20.sp,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF8B5CF6)
            ),
            selectorColor = Color(0x1A8B5CF6)
        ),
        headerConfig = PickerDefaults.headerConfig(
            title = "Schedule Meeting",
            backgroundColor = Color(0xFF8B5CF6)
        ),
        onDoneClick = { dateTime ->
            println("Scheduled for: $dateTime")
            showPicker = false
        },
        onDismiss = { showPicker = false }
    )
}`,
        },
        {
          name: 'Inline',
          description: 'Inline date & time picker rendered directly in the layout.',
          image: img('date_time_picker.png'),
          android: `import com.developerstring.jetco.ui.components.picker.*

@Composable
fun InlineDateTimePicker() {
    var dateTime by remember { mutableStateOf(LocalDateTime.now()) }

    WheelDateTimePicker(
        startDateTime = dateTime,
        datePickerConfig = PickerDefaults.datePickerConfig(),
        wheelConfig = PickerDefaults.wheelPickerConfig(
            height = 180.dp
        ),
        onDoneClick = { selectedDateTime ->
            dateTime = selectedDateTime
        }
    )
}`,
          kmp: `import com.developerstring.jetco_kmp.components.picker.*

@Composable
fun InlineDateTimePicker() {
    var dateTime by remember { mutableStateOf(LocalDateTime.now()) }

    WheelDateTimePicker(
        startDateTime = dateTime,
        datePickerConfig = PickerDefaults.datePickerConfig(),
        wheelConfig = PickerDefaults.wheelPickerConfig(
            height = 180.dp
        ),
        onDoneClick = { selectedDateTime ->
            dateTime = selectedDateTime
        }
    )
}`,
        },
      ],
    },
    relatedConfigs: ['DatePickerConfig', 'WheelPickerConfig', 'PickerDisplayMode', 'DateOrder', 'PickerDateTime'],
    configDetails: [
      {
        name: 'DatePickerConfig',
        params: [
          { name: 'yearsRange', type: 'IntRange', default: 'IntRange(1922, 2122)', description: 'Allowed year range for selection.' },
          { name: 'dateOrder', type: 'DateOrder', default: 'DateOrder.DAY_MONTH_YEAR', description: 'Column ordering of day, month, year (DAY_MONTH_YEAR, MONTH_DAY_YEAR, YEAR_MONTH_DAY).' },
          { name: 'showShortMonths', type: 'Boolean', default: 'false', description: 'Whether to use abbreviated month names (Jan, Feb…).' },
          { name: 'showMonthAsNumber', type: 'Boolean', default: 'false', description: 'Whether to display months as numbers instead of names.' },
          { name: 'customMonthNames', type: 'List<String>?', default: 'null', description: 'Optional custom list of 12 month names to override defaults.' },
        ],
      },
      {
        name: 'WheelPickerConfig',
        params: [
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
    ],
  },

  'wheel-month-year-picker': {
    name: 'WheelMonthYearPicker',
    category: 'Pickers',
    description: 'A wheel-style month and year picker.',
    image: img('month_year_picker.png'),
    androidImport: 'com.developerstring.jetco.ui.components.picker.WheelMonthYearPickerView',
    kmpImport: 'com.developerstring.jetco_kmp.components.picker.WheelMonthYearPickerView',
    params: [
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the picker.' },
      { name: 'wheelPickerConfig', type: 'WheelPickerConfig', default: 'PickerDefaults.wheelPickerConfig()', description: 'Wheel appearance config.' },
      { name: 'onMonthYearSelected', type: '(Month, Year) -> Unit', default: '—', description: 'Callback with selected month and year.' },
    ],
    codeExamples: {
      android: `import com.developerstring.jetco.ui.components.picker.WheelMonthYearPickerView

@Composable
fun MonthYearPickerExample() {
    WheelMonthYearPickerView(
        onMonthYearSelected = { month, year ->
            println("Selected: $month $year")
        }
    )
}`,
      kmp: `import com.developerstring.jetco_kmp.components.picker.WheelMonthYearPickerView

@Composable
fun MonthYearPickerExample() {
    WheelMonthYearPickerView(
        onMonthYearSelected = { month, year ->
            println("Selected: $month $year")
        }
    )
}`,
    },
    relatedConfigs: ['WheelPickerConfig'],
    configDetails: [
      {
        name: 'WheelPickerConfig',
        params: [
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
    ],
  },

  'wheel-year-picker': {
    name: 'WheelYearPicker',
    category: 'Pickers',
    description: 'A wheel-style year-only picker.',
    image: img('year_picker.png'),
    androidImport: 'com.developerstring.jetco.ui.components.picker.WheelYearPickerView',
    kmpImport: 'com.developerstring.jetco_kmp.components.picker.WheelYearPickerView',
    params: [
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the picker.' },
      { name: 'wheelPickerConfig', type: 'WheelPickerConfig', default: 'PickerDefaults.wheelPickerConfig()', description: 'Wheel config.' },
      { name: 'onYearSelected', type: '(Year) -> Unit', default: '—', description: 'Callback with selected year.' },
    ],
    codeExamples: {
      android: `import com.developerstring.jetco.ui.components.picker.WheelYearPickerView

@Composable
fun YearPickerExample() {
    WheelYearPickerView(
        onYearSelected = { year ->
            println("Selected: $year")
        }
    )
}`,
      kmp: `import com.developerstring.jetco_kmp.components.picker.WheelYearPickerView

@Composable
fun YearPickerExample() {
    WheelYearPickerView(
        onYearSelected = { year ->
            println("Selected: $year")
        }
    )
}`,
    },
    relatedConfigs: ['WheelPickerConfig'],
    configDetails: [
      {
        name: 'WheelPickerConfig',
        params: [
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
    ],
  },

  'wheel-date-range-picker': {
    name: 'WheelDateRangePicker',
    category: 'Pickers',
    description: 'A wheel-style date range picker for selecting start and end dates.',
    image: img('date_range_picker.png'),
    androidImport: 'com.developerstring.jetco.ui.components.picker.WheelDateRangePickerView',
    kmpImport: 'com.developerstring.jetco_kmp.components.picker.WheelDateRangePickerView',
    params: [
      { name: 'modifier', type: 'Modifier', default: 'Modifier', description: 'Modifier for the picker.' },
      { name: 'dateRangePickerConfig', type: 'DateRangePickerConfig', default: 'PickerDefaults.dateRangePickerConfig()', description: 'Date range picker config.' },
      { name: 'wheelPickerConfig', type: 'WheelPickerConfig', default: 'PickerDefaults.wheelPickerConfig()', description: 'Wheel appearance config.' },
      { name: 'onDateRangeSelected', type: '(LocalDate, LocalDate) -> Unit', default: '—', description: 'Callback with start and end dates.' },
    ],
    codeExamples: {
      android: `import com.developerstring.jetco.ui.components.picker.WheelDateRangePickerView

@Composable
fun DateRangePickerExample() {
    WheelDateRangePickerView(
        onDateRangeSelected = { startDate, endDate ->
            println("Range: $startDate - $endDate")
        }
    )
}`,
      kmp: `import com.developerstring.jetco_kmp.components.picker.WheelDateRangePickerView

@Composable
fun DateRangePickerExample() {
    WheelDateRangePickerView(
        onDateRangeSelected = { startDate, endDate ->
            println("Range: $startDate - $endDate")
        }
    )
}`,
    },
    relatedConfigs: ['DateRangePickerConfig', 'WheelPickerConfig', 'PickerDisplayMode', 'PickerDateRange', 'PickerDate'],
    configDetails: [
      {
        name: 'DateRangePickerConfig',
        params: [
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
      {
        name: 'WheelPickerConfig',
        params: [
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
    ],
  },
}

export default components
