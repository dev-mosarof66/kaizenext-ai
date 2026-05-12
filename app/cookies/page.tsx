"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function CookiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark selection:bg-kx-orange/30 selection:text-kx-white">
      <main className="flex-1 pt-20 w-full">
        {/* Hero */}
        <section className="relative pt-32 md:pt-48 pb-12 md:pb-16 px-6 border-b border-kx-dark-border">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Cookie Policy</h1>
              <p className="text-lg text-kx-dark-muted">
                Last updated: May 9, 2026. Effective date: May 9, 2026.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="relative py-16 md:py-24 px-6">
          <div className="w-full max-w-4xl mx-auto space-y-12 prose prose-invert max-w-none text-kx-dark-muted leading-relaxed">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-2xl font-bold text-kx-white mb-4">1. What Are Cookies?</h2>
                <p>
                  Cookies are small text files stored on your device that help us remember your preferences and understand how you interact with our website. They improve your browsing experience and help us optimize our Services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-kx-white mb-4">2. Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-kx-white mb-2">Essential Cookies</h3>
                    <p>
                      These cookies are necessary for our Services to function. They enable you to navigate our website and use its features. Without these cookies, certain services cannot be provided.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-kx-white mb-2">Performance Cookies</h3>
                    <p>
                      These cookies collect information about how you use our Services, such as pages visited and time spent. This data helps us understand user behavior and improve our Services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-kx-white mb-2">Functional Cookies</h3>
                    <p>
                      These cookies remember your preferences and settings, allowing us to provide a more personalized experience. They may include language preferences, theme selections, and account settings.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-kx-white mb-2">Marketing Cookies</h3>
                    <p>
                      These cookies track your activity across websites to deliver targeted advertising. They help us understand your interests and show you relevant content and ads.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-kx-white mb-4">3. Specific Cookies We Use</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-kx-white">Session ID</p>
                    <p className="text-sm">Tracks your session to maintain authentication and security</p>
                  </div>
                  <div>
                    <p className="font-bold text-kx-white">Preferences</p>
                    <p className="text-sm">Stores your language, theme, and other preference settings</p>
                  </div>
                  <div>
                    <p className="font-bold text-kx-white">Analytics</p>
                    <p className="text-sm">Tracks page views, click patterns, and user interactions (via Google Analytics)</p>
                  </div>
                  <div>
                    <p className="font-bold text-kx-white">Marketing</p>
                    <p className="text-sm">Used by advertising partners to show targeted ads based on your interests</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-kx-white mb-4">4. Third-Party Cookies</h2>
                <p className="mb-4">
                  We work with third-party service providers who may set cookies on our Services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> Tracks website traffic and user behavior</li>
                  <li><strong>Facebook Pixel:</strong> Monitors conversions and user interactions for ad targeting</li>
                  <li><strong>LinkedIn Insight Tag:</strong> Tracks professional audience engagement</li>
                  <li><strong>HubSpot:</strong> Manages marketing and customer relationship data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-kx-white mb-4">5. Controlling Cookies</h2>
                <p className="mb-4">
                  You have control over cookies in multiple ways:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or alert you when cookies are being sent</li>
                  <li><strong>Cookie Preferences:</strong> Use our cookie consent banner to manage your preferences</li>
                  <li><strong>Opt-Out:</strong> Visit third-party websites to opt out of their tracking (e.g., Google Analytics opt-out)</li>
                </ul>
                <p className="mt-4">
                  Note: Disabling certain cookies may affect the functionality of our Services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-kx-white mb-4">6. Do Not Track Signals</h2>
                <p>
                  Some browsers include a "Do Not Track" feature. Currently, there is no industry-wide standard for recognizing these signals. We do not respond to DNT signals at this time, but we provide cookie controls that allow you to manage your tracking preferences.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-kx-white mb-4">7. Cookie Retention</h2>
                <p>
                  The length of time cookies remain on your device varies:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent cookies:</strong> Remain for a specified period (typically 1 month to 2 years)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-kx-white mb-4">8. Your Privacy Rights</h2>
                <p>
                  If you have concerns about how we use cookies, you have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Request information about the cookies we use</li>
                  <li>Request deletion of cookie data</li>
                  <li>Opt out of non-essential cookies at any time</li>
                  <li>Contact us with privacy concerns</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-kx-white mb-4">9. Contact Us</h2>
                <p>
                  For questions about our cookie practices or to exercise your privacy rights:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Email: privacy@kaizenext.ai</li>
                  <li>Address: Dhaka, Bangladesh</li>
                  <li>Website: kaizenext.ai/contact</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-kx-white mb-4">10. Changes to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or technology. The "Last updated" date at the top of this page will be modified accordingly. Your continued use of our Services indicates acceptance of any updates.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="relative py-16 px-6 border-t border-kx-dark-border bg-kx-surface-950/30">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-kx-dark-muted mb-4">Questions about our use of cookies?</p>
            <Link
              href="/contact"
              className="inline-block px-6 py-2 text-kx-orange hover:text-kx-orange-400 font-bold transition-colors"
            >
              Contact us →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
