import './Community.css'

export default function Community() {
  return (
    <article className="community">
      <h1>Community &amp; Contributing</h1>
      <p>
        JetCo is an open-source project licensed under <strong>Apache 2.0</strong>. Contributions
        are welcome and encouraged!
      </p>

      <h2>How to Contribute</h2>
      <ol>
        <li>
          <strong>Fork the repository</strong> — Visit{' '}
          <a href="https://github.com/developerchunk/JetCo" target="_blank" rel="noopener noreferrer">
            github.com/developerchunk/JetCo
          </a>{' '}
          and click <strong>Fork</strong>.
        </li>
        <li>
          <strong>Clone your fork</strong>
          <div className="community-code">
            <pre><code>git clone https://github.com/YOUR_USERNAME/JetCo.git</code></pre>
          </div>
        </li>
        <li>
          <strong>Create a feature branch</strong>
          <div className="community-code">
            <pre><code>git checkout -b feature/my-awesome-feature</code></pre>
          </div>
        </li>
        <li>
          <strong>Make your changes</strong> — Follow the existing code style and patterns. Every
          component should have a Config class and a Defaults object.
        </li>
        <li>
          <strong>Test your changes</strong> — Ensure everything compiles and runs correctly on all
          target platforms.
        </li>
        <li>
          <strong>Submit a Pull Request</strong> — Push your branch and open a PR with a clear
          description of the changes.
        </li>
      </ol>

      <h2>Code Guidelines</h2>
      <ul>
        <li>Follow Kotlin coding conventions and the existing codebase style.</li>
        <li>Each component should expose a composable function, a <code>Config</code> data class, and a <code>Defaults</code> object.</li>
        <li>Provide sensible defaults for all optional parameters.</li>
        <li>Add KDoc comments for public APIs.</li>
        <li>Ensure multiplatform compatibility — avoid platform-specific APIs in shared code.</li>
      </ul>

      <h2>Reporting Issues</h2>
      <p>
        Found a bug or have a feature request? Open an issue on{' '}
        <a href="https://github.com/developerchunk/JetCo/issues" target="_blank" rel="noopener noreferrer">
          GitHub Issues
        </a>
        . Please include:
      </p>
      <ul>
        <li>A clear description of the problem or suggestion.</li>
        <li>Steps to reproduce (for bugs).</li>
        <li>JetCo version and target platform.</li>
        <li>Relevant code snippets or screenshots.</li>
      </ul>

      <h2>Links</h2>
      <div className="community-links">
        <a href="https://github.com/developerchunk/JetCo" target="_blank" rel="noopener noreferrer" className="community-link-card">
          <strong>GitHub Repository</strong>
          <span>Source code, releases, issues</span>
        </a>
        <a href="https://github.com/developerchunk/JetCo/releases" target="_blank" rel="noopener noreferrer" className="community-link-card">
          <strong>Release Notes</strong>
          <span>Changelog and version history</span>
        </a>
        <a href="https://github.com/developerchunk/JetCo/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="community-link-card">
          <strong>License</strong>
          <span>Apache License 2.0</span>
        </a>
      </div>
    </article>
  )
}
