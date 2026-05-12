"use client";

import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Copy, Check, Clock, Tag, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Metric { value: string; label: string; sublabel?: string }
interface Step { num: string; title: string; description: string }
interface ResultRow { metric: string; before?: string; after?: string; target?: string; achieved?: string }

interface CaseStudy {
  title: string;
  client: string;
  date: string;
  category: string;
  image: string;
  tagline: string;
  metrics: Metric[];
  challenge: { overview: string; bullets: string[] };
  solution: { overview: string; steps: Step[]; techStack: string[] };
  results: { overview: string; rows: ResultRow[]; impact: string[] };
  timeline: string;
  nextSteps: string;
  relatedProjects: { slug: string; title: string; category: string }[];
}

// ── Data ──────────────────────────────────────────────────────────────────────

const CASE_STUDIES: Record<string, CaseStudy> = {
  "saudi-football-player-tracking": {
    title: "AI-Powered Player Tracking for Saudi Football League",
    client: "Saudi Football League",
    date: "April 2026",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1600",
    tagline: "Real-time computer vision across 18 stadiums — tracking every player, every frame, at broadcast quality.",
    metrics: [
      { value: "97%", label: "Detection accuracy", sublabel: "vs 95% target" },
      { value: "60 fps", label: "Real-time processing", sublabel: "vs 25 fps minimum" },
      { value: "$2M", label: "Broadcast revenue", sublabel: "generated in season 1" },
    ],
    challenge: {
      overview: "The Saudi Football League needed real-time player tracking and analytics across all 18 stadiums. Traditional solutions were expensive, unreliable, and required manual annotation — making live broadcast integration impossible.",
      bullets: [
        "Track all 22 players simultaneously with sub-frame accuracy",
        "Handle occlusion, player collisions, and jersey similarity",
        "Scale across 18 stadiums with varying camera rigs",
        "Deliver results in real-time at 25+ fps for broadcast integration",
        "Stay under $500 per match in infrastructure cost",
      ],
    },
    solution: {
      overview: "We deployed a custom computer vision pipeline combining YOLO v8 with multi-camera tracking logic — processing every frame at 60 fps and feeding live position data into a React dashboard visible to broadcasters and coaching staff.",
      steps: [
        { num: "01", title: "Detection", description: "YOLO v8 runs at 60 fps, detecting all player bounding boxes with 97% accuracy across all lighting conditions." },
        { num: "02", title: "Tracking", description: "ByteTrack algorithm maintains consistent player IDs across frames, surviving occlusion and player clustering." },
        { num: "03", title: "Calibration", description: "Court-based homography maps pixel coordinates to real-world pitch positions in real time." },
        { num: "04", title: "Analytics", description: "Live heatmaps, sprint speed, and distance data are generated per-player and streamed to the broadcast dashboard." },
        { num: "05", title: "Jersey OCR", description: "Optional jersey number recognition eliminates the need for a separate player ID system." },
      ],
      techStack: ["PyTorch", "YOLO v8", "ByteTrack", "OpenCV", "NVIDIA A100", "AWS EC2", "React"],
    },
    results: {
      overview: "Deployed across 6 stadiums in season 1, with full coverage of 500+ matches. The league now sells player heatmap data to broadcasters as a premium feature.",
      rows: [
        { metric: "Players tracked / frame", target: "20", achieved: "22" },
        { metric: "Detection accuracy", target: "95%", achieved: "97%" },
        { metric: "Tracking ID retention", target: "90%", achieved: "96%" },
        { metric: "Processing speed", target: "25 fps", achieved: "60 fps" },
        { metric: "Cost per match", target: "<$500", achieved: "$320" },
      ],
      impact: [
        "500+ matches tracked in season 1",
        "10M+ individual player position data points collected",
        "Broadcast heatmap feature generating $2M in new revenue",
        "Coaching staff adoption across all 18 clubs",
      ],
    },
    timeline: "12 weeks — discovery through full deployment across all stadiums.",
    nextSteps: "Adding jersey-based player ID and integration with broadcast graphics packages (ChyronHego, Ross Video).",
    relatedProjects: [
      { slug: "ecommerce-voice-agent", title: "24/7 Customer Support Voice Agent", category: "Voice AI" },
      { slug: "retail-ad-optimization", title: "Ad Spend Optimization Engine", category: "Ad Automation" },
    ],
  },

  "ecommerce-voice-agent": {
    title: "24/7 Customer Support Voice Agent",
    client: "E-commerce Retailer",
    date: "March 2026",
    category: "Voice AI",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
    tagline: "Replaced a $105K/year support team with a voice agent that never sleeps — without sacrificing customer experience.",
    metrics: [
      { value: "80%", label: "Cost reduction", sublabel: "$8,750 → $1,200/mo" },
      { value: "45s", label: "Avg response time", sublabel: "was 4.2 hours" },
      { value: "$90K", label: "Annual savings", sublabel: "3-week payback" },
    ],
    challenge: {
      overview: "A mid-market e-commerce company was spending $105K/year on a three-person support team with 4–8 hour response times during off-hours. 40% of all calls were repetitive FAQs that needed no human judgment.",
      bullets: [
        "$35K per agent annually, with no ability to scale for peak seasons",
        "Support available only 9am–5pm, Monday–Friday",
        "40% of calls were order status, returns, and FAQ-type queries",
        "Customers frustrated by slow off-hours response",
        "No analytics on call topics or resolution rates",
      ],
    },
    solution: {
      overview: "We built a multilingual voice agent that handles 80% of inbound calls autonomously — integrating directly with their Shopify store, processing returns and refunds, and escalating complex cases to human agents via warm transfer.",
      steps: [
        { num: "01", title: "Inbound routing", description: "Twilio catches all inbound calls and routes them to the voice agent. Human agents receive warm transfers for complex cases." },
        { num: "02", title: "Speech understanding", description: "OpenAI Whisper transcribes speech in real time; Claude handles intent classification and response generation." },
        { num: "03", title: "Shopify integration", description: "Agent queries Shopify in real time for order status, tracking, and account history — personalising every conversation." },
        { num: "04", title: "Action execution", description: "Agent can initiate returns, update shipping addresses, apply discount codes, and log interactions automatically." },
        { num: "05", title: "Voice synthesis", description: "ElevenLabs generates natural, on-brand voice responses with sub-200ms latency." },
      ],
      techStack: ["Claude 3.5 Sonnet", "OpenAI Whisper", "ElevenLabs", "Twilio", "Shopify API", "n8n"],
    },
    results: {
      overview: "Deployed in March 2026. Within 60 days, the agent was handling 71% of all calls without human escalation — with customer satisfaction scores improving for FAQ-type queries.",
      rows: [
        { metric: "Avg response time", before: "4.2 hours", after: "45 seconds" },
        { metric: "Monthly cost", before: "$8,750", after: "$1,200" },
        { metric: "Calls handled autonomously", before: "40%", after: "71%" },
        { metric: "CSAT (FAQ queries)", before: "3.8 / 5", after: "4.6 / 5" },
        { metric: "Availability", before: "40 hrs/wk", after: "168 hrs/wk" },
      ],
      impact: [
        "$7,550 saved every month from day one",
        "3-week ROI payback period",
        "Support team reduced from 3 to 1 — handling only complex issues",
        "24/7 coverage without seasonal hiring spikes",
      ],
    },
    timeline: "6 weeks from kickoff to live calls.",
    nextSteps: "Adding proactive outreach for order delays and email support agent.",
    relatedProjects: [
      { slug: "healthcare-voice-scheduler", title: "Appointment Scheduling Voice Bot", category: "Voice AI" },
      { slug: "saas-invoice-automation", title: "Invoice Processing Automation", category: "Workflow Automation" },
    ],
  },

  "saas-invoice-automation": {
    title: "Invoice Processing Automation",
    client: "B2B SaaS Platform",
    date: "February 2026",
    category: "Workflow Automation",
    image: "https://images.unsplash.com/photo-1578642387509-8ad9d849b04d?auto=format&fit=crop&q=80&w=1600",
    tagline: "Eliminated 152 hours of manual data entry per week — and cut invoice errors from 15% to 1.2%.",
    metrics: [
      { value: "152h", label: "Hours saved/week", sublabel: "160 → 8 manual hours" },
      { value: "1.2%", label: "Error rate", sublabel: "down from 15%" },
      { value: "$30K", label: "Monthly labor freed", sublabel: "reinvested in growth" },
    ],
    challenge: {
      overview: "A B2B SaaS company was manually processing 500+ vendor invoices per week from email attachments. The process required data entry, PO matching, QuickBooks entry, and follow-up emails — all by hand, taking 160 hours per week.",
      bullets: [
        "160 hours/week of manual invoice entry and validation",
        "3–5 day processing delays causing vendor friction",
        "15% error rate requiring rework and duplicate payments",
        "$8,000/week in admin labor costs",
        "No audit trail or compliance reporting",
      ],
    },
    solution: {
      overview: "Built a fully automated invoice workflow using n8n, AWS Textract, and custom validation logic — processing invoices from email receipt to QuickBooks entry in under 2 hours, with a human-in-the-loop for low-confidence cases.",
      steps: [
        { num: "01", title: "Ingestion", description: "Webhook captures incoming emails with invoice attachments. Works with PDFs, scanned images, and email body invoices." },
        { num: "02", title: "Extraction", description: "AWS Textract extracts line items, amounts, dates, and vendor details with confidence scoring." },
        { num: "03", title: "Validation", description: "Python matching logic compares extracted data against existing purchase orders and historical patterns using fuzzy matching." },
        { num: "04", title: "Enrichment", description: "Salesforce API adds customer context, contract terms, and payment history to each invoice record." },
        { num: "05", title: "Integration", description: "Confirmed invoices push to QuickBooks via API with automatic GL categorisation. Discrepancies trigger a Slack alert for human review." },
      ],
      techStack: ["n8n", "AWS Textract", "Python", "QuickBooks API", "Salesforce API", "Slack"],
    },
    results: {
      overview: "Deployed in February 2026. The system now processes all 500+ weekly invoices with minimal human oversight — and the finance team is fully redeployed to strategic work.",
      rows: [
        { metric: "Manual hours/week", before: "160", after: "8" },
        { metric: "Processing time", before: "3–5 days", after: "2 hours" },
        { metric: "Error rate", before: "15%", after: "1.2%" },
        { metric: "Weekly labor cost", before: "$8,000", after: "$400" },
        { metric: "Compliance score", before: "85%", after: "99%" },
      ],
      impact: [
        "608 hours freed per month — all redeployed to strategic finance work",
        "$30,400/month in direct labor savings",
        "Vendor relationship scores up — 2-hour turnaround vs 4-day average",
        "Full audit trail meeting SOC 2 compliance requirements",
      ],
    },
    timeline: "4 weeks from discovery to full automation.",
    nextSteps: "Expanding to purchase order generation and automated payment processing.",
    relatedProjects: [
      { slug: "retail-ad-optimization", title: "Ad Spend Optimization Engine", category: "Ad Automation" },
      { slug: "edtech-knowledge-assistant", title: "RAG-Based Knowledge Assistant", category: "Custom AI" },
    ],
  },

  "edtech-knowledge-assistant": {
    title: "RAG-Based Knowledge Assistant for EdTech",
    client: "EdTech Startup",
    date: "January 2026",
    category: "Custom AI",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
    tagline: "Built a full AI learning platform in 5 weeks — now serving 10,000+ students with 94% query accuracy.",
    metrics: [
      { value: "5 wks", label: "From zero to production", sublabel: "full platform launch" },
      { value: "94%", label: "Query accuracy", sublabel: "across 50K+ documents" },
      { value: "10K+", label: "Daily active users", sublabel: "at launch" },
    ],
    challenge: {
      overview: "An EdTech startup needed to launch an AI-powered learning assistant before their Series A round. They had 50,000+ course documents, lecture transcripts, and assessment materials — but no way to make them searchable or interactive for students.",
      bullets: [
        "50,000+ documents with no unified search or query interface",
        "Students wasting hours searching for answers already in course material",
        "No budget to build a large in-house engineering team",
        "Series A pitch required a live product demo in 5 weeks",
        "Required to stay within EU GDPR compliance for student data",
      ],
    },
    solution: {
      overview: "We built a RAG (Retrieval-Augmented Generation) platform from scratch in 5 weeks — ingesting all course material into a vector database, then serving contextually accurate answers via a chat interface built into their existing LMS.",
      steps: [
        { num: "01", title: "Document ingestion", description: "Automated pipeline ingests PDFs, DOCX, and video transcripts — chunking, cleaning, and embedding 50K+ documents into Pinecone." },
        { num: "02", title: "Vector search", description: "Hybrid dense + sparse retrieval surfaces the top-K most relevant chunks per query with sub-100ms latency." },
        { num: "03", title: "Answer generation", description: "Claude generates precise, source-cited answers from retrieved context — never hallucinating beyond the course material." },
        { num: "04", title: "LMS integration", description: "Embedded chat widget integrates via iframe and REST API into their existing Moodle LMS with SSO." },
        { num: "05", title: "Analytics", description: "Admin dashboard shows most-asked questions, knowledge gaps, and unanswered queries — feeding directly into course improvement." },
      ],
      techStack: ["Claude 3.5 Sonnet", "Pinecone", "LangChain", "OpenAI Embeddings", "Next.js", "Moodle API", "Vercel"],
    },
    results: {
      overview: "Launched on schedule. Within the first month the assistant was answering more questions per day than the entire support team handled per week — with higher satisfaction scores.",
      rows: [
        { metric: "Time to production", target: "8 weeks", achieved: "5 weeks" },
        { metric: "Query accuracy", target: "85%", achieved: "94%" },
        { metric: "Daily active users", target: "5,000", achieved: "10,000+" },
        { metric: "Support ticket volume", before: "1,200/week", after: "190/week" },
        { metric: "Avg response time", before: "6 hours", after: "< 1 second" },
      ],
      impact: [
        "Series A round closed 2 months post-launch, partly attributed to live product",
        "84% reduction in support tickets — team redeployed to curriculum design",
        "94% student satisfaction score for AI-answered queries",
        "Platform now licensed to 3 additional institutions",
      ],
    },
    timeline: "5 weeks — architecture through live production launch.",
    nextSteps: "Adding personalised learning path recommendations and tutor-mode for complex topics.",
    relatedProjects: [
      { slug: "saas-invoice-automation", title: "Invoice Processing Automation", category: "Workflow Automation" },
      { slug: "ecommerce-voice-agent", title: "24/7 Customer Support Voice Agent", category: "Voice AI" },
    ],
  },

  "retail-ad-optimization": {
    title: "AI Ad Spend Optimization Engine",
    client: "Multi-Channel Retailer",
    date: "December 2025",
    category: "Ad Automation",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e9a5a94f?auto=format&fit=crop&q=80&w=1600",
    tagline: "Detected wasted ad spend in real time across Meta, Google, and TikTok — saving $4.2K/month with zero manual work.",
    metrics: [
      { value: "$4.2K", label: "Saved per month", sublabel: "zero manual intervention" },
      { value: "3.8×", label: "ROAS improvement", sublabel: "within 30 days" },
      { value: "24/7", label: "Monitoring", sublabel: "across all channels" },
    ],
    challenge: {
      overview: "A multi-channel retailer was running campaigns across Meta, Google, and TikTok — but had no visibility into cross-channel performance or real-time waste detection. Budget was being burned on underperforming audiences with no automated response.",
      bullets: [
        "Manual daily budget reviews taking 3 hours per day",
        "No real-time alerting for underperforming campaigns",
        "Wasted spend accumulating overnight with no response",
        "Attribution gaps between Meta, Google, and TikTok",
        "No A/B test automation — all creative testing manual",
      ],
    },
    solution: {
      overview: "Built a real-time ad intelligence layer that pulls data from all three platforms every 15 minutes, detects anomalies using ML, and automatically pauses underperforming ad sets — while surfacing actionable insights in a unified dashboard.",
      steps: [
        { num: "01", title: "Data unification", description: "Platform APIs (Meta, Google, TikTok) polled every 15 minutes. All spend, impression, and conversion data normalised into a single schema." },
        { num: "02", title: "Anomaly detection", description: "Time-series ML model flags campaigns where CPA exceeds threshold or ROAS drops below baseline — triggering automated actions." },
        { num: "03", title: "Budget automation", description: "Underperforming ad sets paused automatically. Budget reallocated to top performers based on real-time ROAS signals." },
        { num: "04", title: "Creative testing", description: "Automated A/B test scheduling and significance detection — ending tests early when a winner is statistically clear." },
        { num: "05", title: "Reporting", description: "Daily Slack digest with spend summary, top/bottom performers, and one-click action approvals for edge cases." },
      ],
      techStack: ["Python", "Meta Ads API", "Google Ads API", "TikTok API", "PostgreSQL", "n8n", "Slack", "Retool"],
    },
    results: {
      overview: "Live within 3 weeks. The system now operates 24/7 without any manual budget management — and ROAS improved 3.8x in the first month by eliminating wasted spend and accelerating winning creatives.",
      rows: [
        { metric: "Monthly wasted spend", before: "$4,200", after: "$0" },
        { metric: "ROAS", before: "1.4×", after: "3.8×" },
        { metric: "Daily management time", before: "3 hours", after: "15 minutes" },
        { metric: "A/B test cycle time", before: "2 weeks", after: "3 days" },
        { metric: "Cross-channel visibility", before: "None", after: "Real-time" },
      ],
      impact: [
        "$50K+ in wasted ad spend recovered in year one",
        "3.8× ROAS improvement translating to $180K additional revenue",
        "Zero overnight budget burn events since deployment",
        "Team freed from daily manual reporting entirely",
      ],
    },
    timeline: "3 weeks to full automation across all three ad platforms.",
    nextSteps: "Adding predictive budget forecasting and AI-generated creative briefs based on top-performer analysis.",
    relatedProjects: [
      { slug: "saas-invoice-automation", title: "Invoice Processing Automation", category: "Workflow Automation" },
      { slug: "saudi-football-player-tracking", title: "AI-Powered Player Tracking", category: "Computer Vision" },
    ],
  },

  "healthcare-voice-scheduler": {
    title: "Multilingual Appointment Scheduling Voice Bot",
    client: "Healthcare Provider",
    date: "November 2025",
    category: "Voice AI",
    image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?auto=format&fit=crop&q=80&w=1600",
    tagline: "A voice agent that books 500+ appointments/week across 12 languages — without a single human on the line.",
    metrics: [
      { value: "12", label: "Languages supported", sublabel: "including Arabic, Bangla" },
      { value: "500+", label: "Bookings per week", sublabel: "fully automated" },
      { value: "95%", label: "Scheduling accuracy", sublabel: "no double-bookings" },
    ],
    challenge: {
      overview: "A healthcare provider serving a highly diverse multilingual patient population needed to automate appointment scheduling across 8 departments. Patients were being lost to voicemail and long hold times, particularly for non-English speakers.",
      bullets: [
        "4 receptionists handling 600+ daily calls — constant bottleneck",
        "Non-English speakers often unable to schedule without interpreter",
        "30% of calls dropped or went to voicemail — lost patients",
        "No integration between phone system and EMR (Epic)",
        "HIPAA compliance required throughout the entire call flow",
      ],
    },
    solution: {
      overview: "Deployed a HIPAA-compliant multilingual voice agent integrated directly with Epic EMR — detecting patient language automatically, confirming identity via date of birth, and booking appointments in real time across all 8 departments.",
      steps: [
        { num: "01", title: "Language detection", description: "Whisper identifies spoken language in the first 3 seconds of the call. Agent switches to the detected language automatically — no menu selections required." },
        { num: "02", title: "Identity verification", description: "Patients confirm identity via date of birth and last name — HIPAA-compliant without storing any biometric data." },
        { num: "03", title: "Epic integration", description: "Real-time Epic FHIR API calls retrieve availability, provider schedules, and existing appointments — then write confirmed bookings directly back to the EMR." },
        { num: "04", title: "Smart scheduling", description: "Agent considers patient history, department rules, and provider preferences when suggesting appointment slots." },
        { num: "05", title: "Confirmation & reminders", description: "Automated SMS + email confirmations sent post-call. 24-hour reminder calls reduce no-show rate." },
      ],
      techStack: ["Claude 3.5 Sonnet", "OpenAI Whisper", "ElevenLabs", "Twilio", "Epic FHIR API", "AWS (HIPAA BAA)"],
    },
    results: {
      overview: "Deployed across all 8 departments. The voice bot now handles 85% of inbound scheduling calls autonomously — including full multilingual support with no interpreter costs.",
      rows: [
        { metric: "Calls handled autonomously", before: "0%", after: "85%" },
        { metric: "Bookings per week", before: "320", after: "500+" },
        { metric: "Call drop/voicemail rate", before: "30%", after: "< 3%" },
        { metric: "Interpreter cost/month", before: "$2,800", after: "$0" },
        { metric: "No-show rate", before: "22%", after: "11%" },
      ],
      impact: [
        "500+ appointments booked per week without receptionist involvement",
        "$33,600/year saved on interpreter services alone",
        "No-show rate halved via automated reminder calls",
        "Patient satisfaction for scheduling improved from 3.4 to 4.7 / 5",
      ],
    },
    timeline: "8 weeks including HIPAA compliance audit and Epic certification.",
    nextSteps: "Adding post-appointment follow-up calls for chronic care patients and prescription refill handling.",
    relatedProjects: [
      { slug: "ecommerce-voice-agent", title: "24/7 Customer Support Voice Agent", category: "Voice AI" },
      { slug: "edtech-knowledge-assistant", title: "RAG-Based Knowledge Assistant", category: "Custom AI" },
    ],
  },
};

// ── Sub-components ─────────────────────────────────────────────────────────────

function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="flex-1 min-w-0 p-5 rounded-2xl bg-kx-surface-950/60 border border-kx-dark-border text-center">
      <p className="text-3xl font-bold text-kx-white mb-1">{metric.value}</p>
      <p className="text-sm font-semibold text-kx-white/80">{metric.label}</p>
      {metric.sublabel && <p className="text-xs text-kx-dark-muted mt-0.5">{metric.sublabel}</p>}
    </div>
  );
}

function ResultsTable({ rows }: { rows: ResultRow[] }) {
  const isBefore = rows[0]?.before !== undefined;
  return (
    <div className="rounded-2xl border border-kx-dark-border overflow-hidden">
      <div className="grid grid-cols-3 text-xs font-semibold text-kx-dark-muted uppercase tracking-wider bg-kx-surface-950/60 px-5 py-3 border-b border-kx-dark-border">
        <span>Metric</span>
        <span className="text-center">{isBefore ? "Before" : "Target"}</span>
        <span className="text-center text-kx-orange">{isBefore ? "After" : "Achieved"}</span>
      </div>
      {rows.map((row, i) => (
        <div
          key={row.metric}
          className={`grid grid-cols-3 items-center px-5 py-3.5 text-sm ${i < rows.length - 1 ? "border-b border-kx-dark-border/60" : ""}`}
        >
          <span className="text-kx-dark-muted">{row.metric}</span>
          <span className="text-center text-kx-white/60">{row.before ?? row.target}</span>
          <span className="text-center font-semibold text-kx-orange">{row.after ?? row.achieved}</span>
        </div>
      ))}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = CASE_STUDIES[params.slug];
  const [copied, setCopied] = useState(false);

  if (!study) {
    return (
      <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark items-center justify-center px-6">
        <p className="text-kx-dark-muted mb-2">Page not found</p>
        <h1 className="text-4xl font-bold mb-6">Case study not found</h1>
        <Link href="/work" className="text-kx-orange hover:text-kx-orange-400 transition-colors font-semibold">
          ← Back to all work
        </Link>
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-kx-surface text-kx-white dark selection:bg-kx-orange/30 selection:text-kx-white">
      <main className="flex-1 pt-20 w-full">

        {/* ── Hero image ────────────────────────────────────────────────────── */}
        <section className="relative w-full h-[50vh] min-h-[320px] overflow-hidden">
          <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-kx-surface via-kx-surface/50 to-kx-surface/10" />

          {/* Back button */}
          <div className="absolute top-8 left-0 right-0 px-6">
            <div className="max-w-5xl mx-auto">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kx-surface/70 backdrop-blur-sm border border-kx-dark-border text-sm text-kx-dark-muted hover:text-kx-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                All work
              </Link>
            </div>
          </div>

          {/* Category + title overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
            <div className="max-w-5xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full bg-kx-orange/15 border border-kx-orange/30 text-xs font-bold text-kx-orange uppercase tracking-widest mb-3">
                {study.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
                {study.title}
              </h1>
            </div>
          </div>
        </section>

        {/* ── Meta bar ─────────────────────────────────────────────────────── */}
        <section className="border-b border-kx-dark-border bg-kx-surface-950/40 px-6 py-4">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-kx-dark-muted">
              <User className="w-3.5 h-3.5" />
              <span className="font-semibold text-kx-white">{study.client}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-kx-dark-muted">
              <Clock className="w-3.5 h-3.5" />
              {study.date}
            </div>
            <div className="flex items-center gap-2 text-sm text-kx-dark-muted">
              <Tag className="w-3.5 h-3.5" />
              {study.category}
            </div>
            <div className="ml-auto">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-kx-dark-border text-xs text-kx-dark-muted hover:text-kx-white hover:border-kx-orange/30 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied!" : "Copy link"}
              </button>
            </div>
          </div>
        </section>

        {/* ── Main content ──────────────────────────────────────────────────── */}
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-5xl mx-auto space-y-20">

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-kx-dark-muted leading-relaxed max-w-3xl"
            >
              {study.tagline}
            </motion.p>

            {/* Key metrics */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {study.metrics.map((m) => <MetricCard key={m.label} metric={m} />)}
            </motion.div>

            <div className="w-full h-px bg-linear-to-r from-transparent via-kx-dark-border to-transparent" />

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-bold text-kx-orange uppercase tracking-widest mb-2">01 · The Challenge</p>
              <h2 className="text-2xl font-bold text-kx-white mb-5">What needed solving</h2>
              <p className="text-kx-dark-muted leading-relaxed mb-6">{study.challenge.overview}</p>
              <div className="p-6 rounded-2xl bg-kx-surface-950/60 border border-kx-dark-border space-y-3">
                {study.challenge.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <span className="mt-1.5 w-5 h-5 rounded-md bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    </span>
                    <span className="text-sm text-kx-dark-muted">{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-bold text-kx-orange uppercase tracking-widest mb-2">02 · The Solution</p>
              <h2 className="text-2xl font-bold text-kx-white mb-5">How we built it</h2>
              <p className="text-kx-dark-muted leading-relaxed mb-8">{study.solution.overview}</p>

              {/* Steps */}
              <div className="space-y-4 mb-8">
                {study.solution.steps.map((step) => (
                  <div key={step.num} className="flex gap-5 p-5 rounded-2xl border border-kx-dark-border bg-kx-surface-raised/20 hover:border-kx-orange/20 transition-colors">
                    <span className="shrink-0 w-8 h-8 rounded-lg bg-kx-orange/10 border border-kx-orange/20 flex items-center justify-center text-xs font-bold text-kx-orange">
                      {step.num}
                    </span>
                    <div>
                      <p className="font-semibold text-kx-white mb-1">{step.title}</p>
                      <p className="text-sm text-kx-dark-muted leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div>
                <p className="text-xs font-semibold text-kx-dark-muted uppercase tracking-widest mb-3">Tech stack</p>
                <div className="flex flex-wrap gap-2">
                  {study.solution.techStack.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-full bg-kx-surface-700/50 border border-kx-dark-border text-sm text-kx-dark-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-bold text-kx-orange uppercase tracking-widest mb-2">03 · The Results</p>
              <h2 className="text-2xl font-bold text-kx-white mb-5">Measurable outcomes</h2>
              <p className="text-kx-dark-muted leading-relaxed mb-8">{study.results.overview}</p>

              <ResultsTable rows={study.results.rows} />

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {study.results.impact.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-kx-orange/5 border border-kx-orange/15">
                    <span className="mt-1.5 w-4 h-4 rounded-full bg-kx-orange/20 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-kx-orange" />
                    </span>
                    <span className="text-sm text-kx-dark-muted">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Timeline + Next steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              <div className="p-6 rounded-2xl bg-kx-surface-950/60 border border-kx-dark-border">
                <p className="text-xs font-semibold text-kx-dark-muted uppercase tracking-widest mb-2">Timeline</p>
                <p className="text-kx-white font-semibold">{study.timeline}</p>
              </div>
              <div className="p-6 rounded-2xl bg-kx-surface-950/60 border border-kx-dark-border">
                <p className="text-xs font-semibold text-kx-dark-muted uppercase tracking-widest mb-2">What's next</p>
                <p className="text-kx-white font-semibold">{study.nextSteps}</p>
              </div>
            </motion.div>

            <div className="w-full h-px bg-linear-to-r from-transparent via-kx-dark-border to-transparent" />

            {/* Related projects */}
            {study.relatedProjects.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xs font-semibold text-kx-dark-muted uppercase tracking-widest mb-6">Related work</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {study.relatedProjects.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/work/${p.slug}`}
                      className="group flex items-center justify-between p-5 rounded-2xl border border-kx-dark-border bg-kx-surface-raised/20 hover:border-kx-orange/25 hover:shadow-[0_0_24px_rgba(232,89,58,0.06)] transition-all"
                    >
                      <div>
                        <span className="text-xs font-bold text-kx-orange uppercase tracking-wide">{p.category}</span>
                        <p className="font-semibold text-kx-white mt-1 group-hover:text-kx-orange transition-colors">{p.title}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-kx-dark-muted group-hover:text-kx-orange group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="relative py-24 md:py-32 px-6 border-t border-kx-dark-border bg-kx-surface-950/30">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-kx-orange/5 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-semibold text-kx-orange uppercase tracking-widest mb-4">Ready to ship?</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-5">
                Your story could be <span className="italic font-serif text-kx-orange">next</span>
              </h2>
              <p className="text-kx-dark-muted text-lg mb-10 max-w-lg mx-auto">
                Book a free 30-minute discovery call and let's explore what's possible for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-linear-to-b from-kx-orange-400 to-kx-orange-600 text-white font-bold rounded-xl shadow-[0_6px_24px_rgba(232,89,58,0.35)] hover:-translate-y-1 active:scale-95 transition-all duration-200"
                >
                  Book a call
                </Link>
                <Link
                  href="/work"
                  className="px-8 py-3.5 border border-kx-dark-border text-kx-white font-bold rounded-xl hover:border-kx-orange/50 hover:text-kx-orange transition-all duration-200"
                >
                  View all work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}
