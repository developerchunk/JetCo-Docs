import { Link } from 'react-router-dom'
import { FaShieldAlt, FaKey, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'
import './Security.css'

export default function Security() {
  return (
    <article className="security">
      <h1><FaShieldAlt className="security__icon" /> Security</h1>
      <p className="security__intro">
        The JetCo team takes security seriously. This page describes how we publish artifacts
        securely and how to report vulnerabilities.
      </p>

      {/* Maven Central */}
      <section className="security__section">
        <h2>Artifact Verification</h2>
        <p>
          All JetCo releases are published to <strong>Maven Central</strong> and signed with a GPG
          key so you can verify their authenticity. You can browse and verify the published
          artifacts at:
        </p>
        <a
          href="https://central.sonatype.com/search?q=g%3Acom.developerstring.jetco"
          target="_blank"
          rel="noopener noreferrer"
          className="security__maven-link"
        >
          <span>Maven Central — com.developerstring.jetco</span>
          <FaExternalLinkAlt />
        </a>
      </section>

      {/* Public Key */}
      <section className="security__section">
        <h2><FaKey className="security__section-icon" /> Public Signing Key</h2>
        <p>
          JetCo artifacts are signed with the following GPG key. You can use it to verify that
          downloads have not been tampered with.
        </p>

        <div className="security__key-card">
          <div className="security__key-row">
            <span className="security__key-label">Key ID</span>
            <code className="security__key-value">1ACC8665</code>
          </div>
          <div className="security__key-row">
            <span className="security__key-label">Full Fingerprint</span>
            <code className="security__key-value security__key-value--mono">
              B2DC 6C74 B394 1F63 CCB2 6F64 C084 1494 1ACC 8665
            </code>
          </div>
        </div>

        <h3>Key Details</h3>
        <table className="security__details-table">
          <tbody>
            <tr>
              <td><strong>Type</strong></td>
              <td>Ed25519 (Elliptic Curve)</td>
            </tr>
            <tr>
              <td><strong>Key Size</strong></td>
              <td>256-bit</td>
            </tr>
            <tr>
              <td><strong>Security Level</strong></td>
              <td>Equivalent to RSA 3072-bit</td>
            </tr>
            <tr>
              <td><strong>Subkey</strong></td>
              <td>cv25519 (Curve25519, 256-bit) for encryption</td>
            </tr>
          </tbody>
        </table>

        <div className="security__note">
          <strong>Why Ed25519?</strong> Ed25519 is a modern elliptic curve algorithm that is more
          secure and efficient than RSA. It is fully supported by Maven Central and GPG
          verification tools. The 256-bit Ed25519 key provides the same security level as a
          3072-bit RSA key but with better performance and smaller signatures.
        </div>
      </section>

      {/* Vulnerability Reporting */}
      <section className="security__section">
        <h2><FaEnvelope className="security__section-icon" /> Reporting Vulnerabilities</h2>
        <p>
          If you discover a security vulnerability in JetCo, please report it responsibly. <strong>Do
          not</strong> open a public GitHub issue for security vulnerabilities.
        </p>
        <p>
          Instead, please send an email to:
        </p>
        <a href="mailto:adityashinde5033@gmail.com" className="security__email-link">
          adityashinde5033@gmail.com
        </a>
        <p className="security__email-note">
          We will acknowledge your report within <strong>48 hours</strong> and work with you to
          understand and address the issue before any public disclosure.
        </p>
      </section>

      {/* Quick links */}
      <section className="security__section">
        <h2>Related Links</h2>
        <div className="security__quick-links">
          <Link to="/getting-started" className="security__quick-link">
            <span>Get Started with JetCo →</span>
          </Link>
        </div>
      </section>
    </article>
  )
}
