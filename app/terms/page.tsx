"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Scale, ChevronRight } from "lucide-react";

const SECTIONS = [
  { id: "agreement", title: "Agreement to Terms" },
  { id: "services", title: "Our Services" },
  { id: "use-license", title: "Use License" },
  { id: "user-responsibilities", title: "User Responsibilities" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "user-content", title: "User-Generated Content" },
  { id: "payments", title: "Payments & Billing" },
  { id: "limitation", title: "Limitation of Liability" },
  { id: "warranties", title: "Warranties Disclaimer" },
  { id: "indemnification", title: "Indemnification" },
  { id: "termination", title: "Termination" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes", title: "Changes to Terms" },
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
        visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
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

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark selection:bg-kx-orange/30 selection:text-kx-white">
      <main className="flex-1 pt-20 w-full">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-28 md:pt-40 pb-16 px-6 border-b border-kx-dark-border">
          {/* Blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-150 h-150 rounded-full bg-kx-surface-700/20 blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-100 h-100 rounded-full bg-kx-orange-600/8 blur-[100px]" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)]  bg-size-[32px_32px]" />
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-kx-dark-muted mb-8">
              <Link href="/" className="hover:text-kx-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-kx-white">Terms of Service</span>
            </div>

            <motion.div variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
            }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-kx-surface-950/80 border border-kx-dark-border text-xs text-kx-dark-muted mb-6">
                <Scale className="w-3.5 h-3.5 text-kx-orange" />
                Legal
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-5">
                Terms of <span className="italic font-serif text-kx-orange">Service</span>
              </h1>
              <p className="text-kx-dark-muted text-base max-w-xl leading-relaxed mb-6">
                Plain-language terms that govern your use of Kaizenext&apos;s website and services. Please read them carefully before engaging with us.
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
                  <p className="text-xs text-kx-dark-muted leading-relaxed mb-3">Legal questions?</p>
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
              <motion.div variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
              }} className="w-full h-px bg-linear-to-r from-transparent via-kx-dark-border to-transparent" />

              <Section id="agreement" number="01" title="Agreement to Terms">
                <p>
                  By accessing or using the Kaizenext website or any services we offer, you confirm that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our Services.
                </p>
                <p>
                  These Terms apply to all visitors, clients, and anyone else who accesses or uses our Services.
                </p>
              </Section>

              <Section id="services" number="02" title="Our Services">
                <p>Kaizenext provides AI-powered digital solutions including but not limited to:</p>
                <BulletList items={[
                  "Web and mobile application development",
                  "AI workflow automation",
                  "AI-powered advertising automation",
                  "Voice AI systems and integrations",
                  "Computer vision solutions",
                  "Custom AI product development",
                  "Discovery calls and technical consultations",
                ]} />
                <p className="mt-3">
                  We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time with reasonable notice.
                </p>
              </Section>

              <Section id="use-license" number="03" title="Use License">
                <p>We grant you a limited, non-exclusive, non-transferable, revocable licence to access and use our website for lawful purposes only.</p>
                <p>You may not:</p>
                <BulletList items={[
                  "Copy, reproduce, or redistribute any content without our written consent",
                  "Use our Services to violate any applicable law or regulation",
                  "Attempt to reverse-engineer, decompile, or extract source code from our platform",
                  "Use automated tools to scrape, crawl, or harvest data from our website",
                  "Impersonate Kaizenext or any of our team members",
                  "Transmit malicious code, spam, or unsolicited communications through our Services",
                ]} />
              </Section>

              <Section id="user-responsibilities" number="04" title="User Responsibilities">
                <p>When using our Services, you agree to:</p>
                <BulletList items={[
                  "Provide accurate, complete, and current information",
                  "Maintain the confidentiality of any account credentials",
                  "Notify us immediately at <a href=\"mailto:hello@kaizenext.ai\" class=\"text-kx-orange hover:text-kx-orange-400 transition-colors\">hello@kaizenext.ai</a> of any unauthorised access",
                  "Use the Services only for authorised, lawful purposes",
                  "Comply with all applicable local, national, and international laws",
                  "Respect the intellectual property rights of Kaizenext and third parties",
                ]} />
              </Section>

              <Section id="intellectual-property" number="05" title="Intellectual Property Rights">
                <p>
                  All content, features, and functionality on the Kaizenext website — including but not limited to text, graphics, logos, icons, images, audio clips, and software — are owned by or licensed to Kaizenext and are protected by applicable intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, transmit, display, publish, or create derivative works from any part of our Services without our express prior written consent.
                </p>
                <p>
                  Work created specifically for a client under a signed agreement is governed by the terms of that agreement, which may transfer ownership of deliverables to the client upon full payment.
                </p>
              </Section>

              <Section id="user-content" number="06" title="User-Generated Content">
                <p>
                  If you submit, upload, or share content with us (e.g., project briefs, feedback, testimonials), you grant Kaizenext a worldwide, non-exclusive, royalty-free licence to use, reproduce, and display such content for the purposes of delivering our Services.
                </p>
                <p>
                  You represent and warrant that: (a) you own or have the necessary licences and rights to all content you submit; and (b) the content does not infringe any third-party rights or violate any applicable laws.
                </p>
              </Section>

              <Section id="payments" number="07" title="Payments and Billing">
                <p>Where our Services involve fees:</p>
                <BulletList items={[
                  "Payment terms are specified in the applicable proposal or contract",
                  "All fees are exclusive of applicable taxes unless stated otherwise",
                  "Invoices are due within the timeframe stated in the agreement",
                  "Late payments may incur interest at 1.5% per month or the maximum permitted by law",
                  "We reserve the right to pause or terminate Services for overdue accounts",
                  "Refunds are subject to the terms of the individual project agreement",
                ]} />
              </Section>

              <Section id="limitation" number="08" title="Limitation of Liability">
                <p className="uppercase text-sm font-semibold tracking-wide text-kx-white/60 leading-relaxed">
                  To the fullest extent permitted by applicable law, Kaizenext and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including but not limited to loss of profits, data, goodwill, or use — arising out of or in connection with your use of our Services, even if advised of the possibility of such damages.
                </p>
                <p className="mt-3">
                  Our total cumulative liability for any claim arising from your use of the Services shall not exceed the total amount paid by you to Kaizenext in the 12 months preceding the claim.
                </p>
              </Section>

              <Section id="warranties" number="09" title="Warranties Disclaimer">
                <p className="uppercase text-sm font-semibold tracking-wide text-kx-white/60 leading-relaxed">
                  Our Services are provided on an as is and as available basis. Kaizenext makes no warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, accuracy, or non-infringement.
                </p>
                <p className="mt-3">
                  We do not warrant that our Services will be error-free, uninterrupted, or free from viruses or other harmful components.
                </p>
              </Section>

              <Section id="indemnification" number="10" title="Indemnification">
                <p>
                  You agree to indemnify, defend, and hold harmless Kaizenext, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, judgements, losses, costs, and expenses (including reasonable legal fees) arising from:
                </p>
                <BulletList items={[
                  "Your use of or access to our Services",
                  "Your violation of these Terms",
                  "Your violation of any third-party rights, including intellectual property rights",
                  "Any content you provide to us in connection with the Services",
                ]} />
              </Section>

              <Section id="termination" number="11" title="Termination">
                <p>
                  We reserve the right to terminate or suspend your access to our Services at any time, without prior notice, if we reasonably believe you have violated these Terms or applicable law.
                </p>
                <p>
                  You may terminate your use of our Services at any time by ceasing all use. Provisions that by their nature should survive termination (including intellectual property rights, disclaimers, indemnification, and limitation of liability) will remain in force.
                </p>
              </Section>

              <Section id="governing-law" number="12" title="Governing Law">
                <p>
                  These Terms of Service are governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.
                </p>
                <p>
                  You agree to submit to the exclusive jurisdiction of the courts located in Dhaka, Bangladesh for the resolution of any disputes arising from or relating to these Terms or your use of our Services.
                </p>
              </Section>

              <Section id="changes" number="13" title="Changes to These Terms">
                <p>
                  We may update these Terms of Service from time to time. When we make material changes, we will update the Last updated date at the top of this page. For significant changes, we will make reasonable efforts to notify active clients via email.
                </p>
                <p>
                  Your continued use of our Services after updated Terms are posted constitutes your acceptance of those changes.
                </p>
              </Section>

              <Section id="contact" number="14" title="Contact Us">
                <p>If you have any questions about these Terms of Service, please get in touch:</p>
                <div className="mt-4 p-5 rounded-2xl bg-kx-surface-950/60 border border-kx-dark-border space-y-2">
                  {[
                    { label: "Legal enquiries", value: "legal@kaizenext.ai", href: "mailto:legal@kaizenext.ai" },
                    { label: "General", value: "hello@kaizenext.ai", href: "mailto:hello@kaizenext.ai" },
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
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
              }} className="w-full h-px bg-linear-to-r from-transparent via-kx-dark-border to-transparent" />

              {/* Cross-links */}
              <motion.div variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }} className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/privacy"
                  className="flex-1 group flex items-center justify-between p-5 rounded-2xl bg-kx-surface-950/60 border border-kx-dark-border hover:border-kx-orange/30 hover:shadow-[0_0_24px_rgba(232,89,58,0.06)] transition-all duration-300"
                >
                  <div>
                    <p className="text-xs text-kx-dark-muted mb-1">Also read</p>
                    <p className="font-semibold text-kx-white">Privacy Policy →</p>
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
