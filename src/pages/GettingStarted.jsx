import { useState } from 'react'
import { FaCheckCircle, FaFlask } from 'react-icons/fa'
import './GettingStarted.css'

// Latest versions
const ANDROID_VERSION = '1.1.0-beta'
const KMP_VERSION = '1.1.0-beta'

export default function GettingStarted() {
  const [kmpPlatform, setKmpPlatform] = useState('common')

  const platformDeps = {
    common: `commonMain.dependencies {
    implementation("com.developerstring.jetco-kmp:ui:<version>")
}`,
    android: `androidMain.dependencies {
    implementation("com.developerstring.jetco-kmp:ui-android:<version>")
}`,
    ios: `iosMain.dependencies {
    implementation("com.developerstring.jetco-kmp:ui-iosarm64:<version>")
    implementation("com.developerstring.jetco-kmp:ui-iossimulatorarm64:<version>")
}`,
    jvm: `jvmMain.dependencies {
    implementation("com.developerstring.jetco-kmp:ui-jvm:<version>")
}`,
    js: `jsMain.dependencies {
    implementation("com.developerstring.jetco-kmp:ui-js:<version>")
}`,
    wasm: `wasmJsMain.dependencies {
    implementation("com.developerstring.jetco-kmp:ui-wasm-js:<version>")
}`,
  }

  return (
    <article className="getting-started">
      <h1>Getting Started</h1>
      <p>
        JetCo is an open-source UI component library for <strong>Jetpack Compose</strong> and
        <strong> Kotlin Multiplatform</strong>. It provides a collection of production-ready
        Charts, Cards, Steppers, Pickers, and more — all fully customizable.
      </p>

      <h2>Requirements</h2>
      <ul>
        <li>Android: <code>minSdk 21</code> (Lollipop)</li>
        <li>Kotlin: <code>1.9+</code></li>
        <li>Compose BOM: <code>2024.x</code> or later</li>
        <li>KMP: Kotlin Multiplatform plugin configured</li>
      </ul>

      <h2>Installation</h2>
      <p style={{ marginBottom: '1rem' }}>
        <strong>Latest Versions:</strong> Android <code>{ANDROID_VERSION}</code> | KMP <code>{KMP_VERSION}</code>
      </p>

      <h3>Android (Groovy)</h3>
      <div className="gs-code-block">
        <pre><code>{`// build.gradle (app)
dependencies {
    implementation 'com.developerstring.jetco:ui:<version>'
}`}</code></pre>
      </div>

      <h3>Android (Kotlin DSL)</h3>
      <div className="gs-code-block">
        <pre><code>{`// build.gradle.kts (app)
dependencies {
    implementation("com.developerstring.jetco:ui:<version>")
}`}</code></pre>
      </div>

      <h3>Kotlin Multiplatform</h3>
      <div style={{ marginBottom: '1rem' }}>
        <div className="platform-tabs">
          {[
            { id: 'common', label: 'Common' },
            { id: 'android', label: 'Android' },
            { id: 'ios', label: 'iOS' },
            { id: 'jvm', label: 'JVM' },
            { id: 'js', label: 'JS' },
            { id: 'wasm', label: 'WASM' },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`platform-tab ${kmpPlatform === tab.id ? 'active' : ''}`}
              onClick={() => setKmpPlatform(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="gs-code-block">
        <pre><code>{`// build.gradle.kts (shared)
kotlin {
    sourceSets {
        ${platformDeps[kmpPlatform]}
    }
}`}</code></pre>
      </div>

      <h2>Platform Targets</h2>
      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Minimum Version</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Android', 'API 21 (Lollipop)', <><FaCheckCircle style={{ color: '#4CAF50' }} /> Stable</>],
            ['iOS', '11+', <><FaCheckCircle style={{ color: '#4CAF50' }} /> Stable</>],
            ['JVM (Desktop)', '11+', <><FaCheckCircle style={{ color: '#4CAF50' }} /> Stable</>],
            ['JS (Browser)', 'ES2015+', <><FaCheckCircle style={{ color: '#4CAF50' }} /> Stable</>],
            ['WASM', '1.0', <><FaFlask style={{ color: '#FF9800' }} /> Experimental</>],
          ].map(([platform, minVer, status]) => (
            <tr key={platform}>
              <td><strong>{platform}</strong></td>
              <td><code>{minVer}</code></td>
              <td>{status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Package Structure</h2>
      <p>JetCo organizes components into clear modules:</p>
      <table>
        <thead>
          <tr>
            <th>Module</th>
            <th>Android Package</th>
            <th>KMP Package</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Charts', 'com.developerstring.jetco.ui.charts.*', 'com.developerstring.jetco_kmp.charts.*'],
            ['Cards', 'com.developerstring.jetco.ui.cards.*', 'com.developerstring.jetco_kmp.cards.*'],
            ['Components', 'com.developerstring.jetco.ui.components.*', 'com.developerstring.jetco_kmp.components.*'],
          ].map(([mod, android, kmp]) => (
            <tr key={mod}>
              <td><strong>{mod}</strong></td>
              <td><code>{android}</code></td>
              <td><code>{kmp}</code></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Usage Pattern</h2>
      <p>
        Every JetCo component follows the same pattern: a composable function with a
        <code>Config</code> class and a <code>Defaults</code> object for sensible default values.
      </p>
      <div className="gs-code-block">
        <pre><code>{`// Typical usage pattern
ComponentName(
    data = ...,
    config = ComponentDefaults.config(
        // override only what you need
        color = Color(0xFF6C5CE7)
    )
)`}</code></pre>
      </div>

      <h2>Next Steps</h2>
      <p>
        Browse the sidebar to explore each component. Every page includes full parameter
        documentation, configuration classes, and code examples with Android & KMP tabs.
      </p>
    </article>
  )
}
