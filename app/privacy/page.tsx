"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Shield, ChevronRight } from "lucide-react";

const SECTIONS = [
  { id: "introduction", title: "Introduction" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Your Information" },
  { id: "sharing", title: "Information Sharing" },
  { id: "data-security", title: "Data Security" },
  { id: "your-rights", title: "Your Privacy Rights" },
  { id: "cookies", title: "Cookies & Tracking" },
  { id: "third-party", title: "Third-Party Links" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "changes", title: "Policy Changes" },
  { id: "contact", title: "Contact Us" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};


function Section({ id, number, title, children }: { id: string; number: string; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      id={id}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
      }}
      className="scroll-mt-28 group"
    >
      <div className="flex items-start gap-4 mb-5">
        <span className="shrink-0 mt-0.5 w-7 h-7 rounded-lg bg-kx-orange/10 border border-kx-orange/20 flex items-center justify-center text-xs font-bold text-kx-orange">
          {number}
        </span>
        <h2 className="text-xl font-bold text-kx-white">{title}</h2>
      </div>
      <div className="pl-11 text-kx-dark-muted leading-relaxed space-y-3">
        {children}
      </div>
    </motion.div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-2 w-1 h-1 rounded-full bg-kx-orange shrink-0" />
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark selection:bg-kx-orange/30 selection:text-kx-white">
      <main className="flex-1 pt-20 w-full">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-28 md:pt-40 pb-16 px-6 border-b border-kx-dark-border">
          {/* Blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -left-40 w-150 h-150 rounded-full bg-kx-surface-700/20 blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 right-0 w-100 h-100 rounded-full bg-kx-orange-600/8 blur-[100px]" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] bg-size-[32px_32px]" />
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-kx-dark-muted mb-8">
              <Link href="/" className="hover:text-kx-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-kx-white">Privacy Policy</span>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-kx-surface-950/80 border border-kx-dark-border text-xs text-kx-dark-muted mb-6">
                <Shield className="w-3.5 h-3.5 text-kx-orange" />
                Legal
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-5">
                Privacy <span className="italic font-serif text-kx-orange">Policy</span>
              </h1>
              <p className="text-kx-dark-muted text-base max-w-xl leading-relaxed mb-6">
                We believe privacy is a right, not a feature. This policy explains clearly what data we collect, why, and how you can control it.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-kx-dark-muted">
                <span className="px-3 py-1 rounded-full bg-kx-surface-700/50 border border-kx-dark-border">
                  Last updated: May 11, 2026
                </span>
                <span className="px-3 py-1 rounded-full bg-kx-surface-700/50 border border-kx-dark-border">
                  Effective: May 11, 2026
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Body ──────────────────────────────────────────────────────────── */}
        <section className="relative py-16 md:py-24 px-6">
          <div className="max-w-6xl mx-auto flex gap-16">

            {/* Sticky ToC — desktop only */}
            <aside className="hidden lg:block w-56 shrink-0">
              <div className="sticky top-28">
                <p className="text-xs font-semibold text-kx-dark-muted uppercase tracking-widest mb-4">Contents</p>
                <nav className="space-y-1">
                  {SECTIONS.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-kx-dark-muted hover:text-kx-white hover:translate-x-1 transition-all duration-150 py-1"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 p-4 rounded-xl bg-kx-surface-950/60 border border-kx-dark-border">
                  <p className="text-xs text-kx-dark-muted leading-relaxed mb-3">Questions about your data?</p>
                  <Link href="/contact" className="text-xs font-semibold text-kx-orange hover:text-kx-orange-400 transition-colors">
                    Contact us →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Content */}
            <motion.div
              className="flex-1 min-w-0 space-y-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Divider */}
              <motion.div variants={{
                hidden: { opacity: 0, scaleX: 0 },
                visible: { opacity: 1, scaleX: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }} className="w-full h-px bg-linear-to-r from-transparent via-kx-dark-border to-transparent" />

              <Section id="introduction" number="01" title="Introduction">
                <p>
                  Kaizenext is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise process your information in connection with our website and services.
                </p>
                <p>
                  By using our Services, you agree to the collection and use of information in accordance with this policy. We process your data lawfully, fairly, and transparently.
                </p>
              </Section>

              <Section id="information-we-collect" number="02" title="Information We Collect">
                <p>We collect information in three ways:</p>
                <div className="mt-3 space-y-4">
                  {[
                    {
                      label: "Information you provide",
                      items: ["Name, email address, and company name via contact forms", "Booking details when you schedule a discovery call", "Messages and attachments you send to us"],
                    },
                    {
                      label: "Automatically collected",
                      items: ["IP address, browser type, operating system", "Pages visited, time spent, referral source", "Device identifiers and session data"],
                    },
                    {
                      label: "From third parties",
                      items: ["Business partners and service providers", "Publicly available sources", "Analytics and advertising platforms (with consent)"],
                    },
                  ].map(({ label, items }) => (
                    <div key={label} className="pl-4 border-l-2 border-kx-orange/30">
                      <p className="font-semibold text-kx-white mb-2">{label}</p>
                      <BulletList items={items} />
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="how-we-use" number="03" title="How We Use Your Information">
                <p>We use the information we collect to:</p>
                <BulletList items={[
                  "Provide, maintain, and improve our Services",
                  "Process and respond to your enquiries and booking requests",
                  "Send transactional communications (confirmations, invoices)",
                  "Send marketing updates — only with your explicit consent",
                  "Understand usage patterns to improve our website",
                  "Comply with legal obligations and protect our rights",
                  "Detect and prevent fraud and security issues",
                ]} />
              </Section>

              <Section id="sharing" number="04" title="Information Sharing and Disclosure">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in these limited circumstances:
                </p>
                <BulletList items={[
                  "<strong class='text-kx-white'>Service providers:</strong> Trusted vendors who help us operate our Services (email, analytics, hosting) under strict data processing agreements",
                  "<strong class='text-kx-white'>Legal requirements:</strong> When required by law, regulation, or court order",
                  "<strong class='text-kx-white'>Rights protection:</strong> To protect the rights, property, or safety of Kaizenext, our clients, or the public",
                  "<strong class='text-kx-white'>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, with prior notice to affected users",
                ]} />
              </Section>

              <Section id="data-security" number="05" title="Data Security">
                <p>
                  We implement appropriate technical and organisational measures to protect your information against unauthorised access, alteration, disclosure, or destruction. These include encrypted transmission (HTTPS/TLS), access controls, and regular security reviews.
                </p>
                <p>
                  However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                </p>
              </Section>

              <Section id="your-rights" number="06" title="Your Privacy Rights">
                <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
                <BulletList items={[
                  "<strong class='text-kx-white'>Access:</strong> Request a copy of the personal data we hold about you",
                  "<strong class='text-kx-white'>Correction:</strong> Request correction of inaccurate or incomplete data",
                  "<strong class='text-kx-white'>Deletion:</strong> Request deletion of your personal data (subject to legal obligations)",
                  "<strong class='text-kx-white'>Portability:</strong> Receive your data in a structured, machine-readable format",
                  "<strong class='text-kx-white'>Objection:</strong> Object to processing based on legitimate interests",
                  "<strong class='text-kx-white'>Opt-out:</strong> Unsubscribe from marketing communications at any time",
                ]} />
                <p className="mt-3">
                  To exercise any of these rights, email us at <a href="mailto:privacy@kaizenext.ai" className="text-kx-orange hover:text-kx-orange-400 transition-colors">privacy@kaizenext.ai</a>. We will respond within 30 days.
                </p>
              </Section>

              <Section id="cookies" number="07" title="Cookies and Tracking">
                <p>
                  Our website uses cookies and similar technologies to remember your preferences, understand traffic patterns, and improve your experience. We use:
                </p>
                <BulletList items={[
                  "<strong class='text-kx-white'>Essential cookies:</strong> Required for the site to function — cannot be disabled",
                  "<strong class='text-kx-white'>Analytics cookies:</strong> Help us understand how visitors interact with the site (e.g. Plausible Analytics — privacy-first, no personal data)",
                  "<strong class='text-kx-white'>Preference cookies:</strong> Remember your settings and choices",
                ]} />
                <p className="mt-3">
                  You can control cookies via your browser settings. Disabling non-essential cookies will not affect core functionality.
                </p>
              </Section>

              <Section id="third-party" number="08" title="Third-Party Links">
                <p>
                  Our website may contain links to third-party websites. We have no control over the content or privacy practices of those sites. We encourage you to review their privacy policies before providing any information. Kaizenext is not responsible for any third-party privacy practices.
                </p>
              </Section>

              <Section id="childrens-privacy" number="09" title="Children's Privacy">
                <p>
                  Our Services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that a child under 13 has provided us with personal data, we will take steps to delete it promptly. If you believe we may have collected data from a child, please contact us immediately.
                </p>
              </Section>

              <Section id="changes" number="10" title="Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. When we make material changes, we will update the Last updated date at the top of this page. We encourage you to review this policy periodically.
                </p>
                <p>
                  Your continued use of our Services after any changes indicates your acceptance of the updated policy.
                </p>
              </Section>

              <Section id="contact" number="11" title="Contact Us">
                <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out:</p>
                <div className="mt-4 p-5 rounded-2xl bg-kx-surface-950/60 border border-kx-dark-border space-y-2">
                  {[
                    { label: "Email", value: "privacy@kaizenext.ai", href: "mailto:privacy@kaizenext.ai" },
                    { label: "General enquiries", value: "hello@kaizenext.ai", href: "mailto:hello@kaizenext.ai" },
                    { label: "Address", value: "Dhaka, Bangladesh" },
                  ].map(({ label, value, href }) => (
                    <div key={label} className="flex gap-3 text-sm">
                      <span className="w-32 shrink-0 text-kx-dark-muted">{label}</span>
                      {href ? (
                        <a href={href} className="text-kx-orange hover:text-kx-orange-400 transition-colors">{value}</a>
                      ) : (
                        <span className="text-kx-white">{value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </Section>

              <motion.div variants={{
                hidden: { opacity: 0, scaleX: 0 },
                visible: { opacity: 1, scaleX: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }} className="w-full h-px bg-linear-to-r from-transparent via-kx-dark-border to-transparent" />

              {/* Cross-links */}
              <motion.div variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }} className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/terms"
                  className="flex-1 group flex items-center justify-between p-5 rounded-2xl bg-kx-surface-950/60 border border-kx-dark-border hover:border-kx-orange/30 hover:shadow-[0_0_24px_rgba(232,89,58,0.06)] transition-all duration-300"
                >
                  <div>
                    <p className="text-xs text-kx-dark-muted mb-1">Also read</p>
                    <p className="font-semibold text-kx-white">Terms of Service →</p>
                  </div>
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 group flex items-center justify-between p-5 rounded-2xl bg-kx-orange/5 border border-kx-orange/20 hover:border-kx-orange/40 hover:bg-kx-orange/10 transition-all duration-300"
                >
                  <div>
                    <p className="text-xs text-kx-dark-muted mb-1">Questions?</p>
                    <p className="font-semibold text-kx-white">Contact our team →</p>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
