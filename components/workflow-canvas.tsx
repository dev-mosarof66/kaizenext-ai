"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail, Search, Cpu, Zap, Database, TrendingUp, Clock, Code,
  CheckCircle2, AlertCircle, Loader2, Play, RotateCcw
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

interface WorkflowNode {
  id: string;
  x: number;   // percentage of canvas width
  y: number;   // percentage of canvas height
  label: string;
  type: string; // "trigger" | "action" | "ai" | "output"
  icon: React.ReactNode;
  app: string;
  color: string;
  execLog?: string;
}

interface WorkflowEdge {
  from: string;
  to: string;
}

interface Workflow {
  id: string;
  label: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  trigger: string;
}

// ── Workflow data ─────────────────────────────────────────────────────────────

const WORKFLOWS: Workflow[] = [
  {
    id: "sales",
    label: "Sales & CRM",
    trigger: "New form submission received",
    nodes: [
      { id: "n1", x: 5, y: 38, label: "Typeform Trigger", type: "trigger", icon: <Mail className="w-4 h-4" />, app: "Typeform", color: "#E8593A", execLog: '{"lead":"Ahmed K.","company":"RetailCo","email":"ahmed@retailco.com"}' },
      { id: "n2", x: 30, y: 20, label: "LinkedIn Lookup", type: "action", icon: <Search className="w-4 h-4" />, app: "LinkedIn", color: "#0A66C2", execLog: '{"role":"Head of Ops","connections":523,"verified":true}' },
      { id: "n3", x: 30, y: 56, label: "CRM – Create Contact", type: "action", icon: <Database className="w-4 h-4" />, app: "HubSpot", color: "#FF7A59", execLog: '{"contactId":"hs_00492","pipeline":"Inbound"}' },
      { id: "n4", x: 58, y: 38, label: "GPT-4 Draft Email", type: "ai", icon: <Cpu className="w-4 h-4" />, app: "OpenAI", color: "#10a37f", execLog: '"Hi Ahmed, saw your ops role at RetailCo…"' },
      { id: "n5", x: 82, y: 20, label: "Send via Gmail", type: "output", icon: <Mail className="w-4 h-4" />, app: "Gmail", color: "#EA4335", execLog: '{"messageId":"msg_8a2f","status":"sent"}' },
      { id: "n6", x: 82, y: 56, label: "Slack – Notify SDR", type: "output", icon: <Zap className="w-4 h-4" />, app: "Slack", color: "#4A154B", execLog: '{"channel":"#new-leads","ts":"1715283901"}' },
    ],
    edges: [
      { from: "n1", to: "n2" }, { from: "n1", to: "n3" },
      { from: "n2", to: "n4" }, { from: "n3", to: "n4" },
      { from: "n4", to: "n5" }, { from: "n4", to: "n6" },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    trigger: "Patient intake form submitted",
    nodes: [
      { id: "n1", x: 5, y: 50, label: "Patient Form", type: "trigger", icon: <Mail className="w-4 h-4" />, app: "JotForm", color: "#E8593A", execLog: '{"name":"Sara M.","age":34,"symptoms":"chest tightness, fatigue"}' },
      { id: "n2", x: 30, y: 50, label: "AI Urgency Score", type: "ai", icon: <Cpu className="w-4 h-4" />, app: "OpenAI", color: "#10a37f", execLog: '{"urgency":"HIGH","score":0.87,"reason":"cardiac keywords detected"}' },
      { id: "n3", x: 58, y: 25, label: "Book Priority Slot", type: "action", icon: <Clock className="w-4 h-4" />, app: "Cal.com", color: "#4F46E5", execLog: '{"slot":"2026-05-10 09:30","doctor":"Dr. Patel"}' },
      { id: "n4", x: 58, y: 70, label: "Flag – Low Priority", type: "action", icon: <Database className="w-4 h-4" />, app: "Airtable", color: "#FFBF00", execLog: '{"queue":"routine","eta":"3 days"}' },
      { id: "n5", x: 82, y: 50, label: "SMS Confirmation", type: "output", icon: <Zap className="w-4 h-4" />, app: "Twilio", color: "#F22F46", execLog: '{"status":"delivered","to":"+8801XXXXXXX"}' },
    ],
    edges: [
      { from: "n1", to: "n2" },
      { from: "n2", to: "n3" }, { from: "n2", to: "n4" },
      { from: "n3", to: "n5" }, { from: "n4", to: "n5" },
    ],
  },
  {
    id: "education",
    label: "Education",
    trigger: "Assignment file uploaded to Google Drive",
    nodes: [
      { id: "n1", x: 5, y: 50, label: "Drive Upload", type: "trigger", icon: <Database className="w-4 h-4" />, app: "Google Drive", color: "#E8593A", execLog: '{"file":"essay_unit4.pdf","student":"Yuki T.","class":"ENG201"}' },
      { id: "n2", x: 28, y: 50, label: "Extract PDF Text", type: "action", icon: <Code className="w-4 h-4" />, app: "PDF.co", color: "#8B5CF6", execLog: '{"chars":4821,"pages":3}' },
      { id: "n3", x: 54, y: 50, label: "GPT-4 Grade & Review", type: "ai", icon: <Cpu className="w-4 h-4" />, app: "OpenAI", color: "#10a37f", execLog: '{"grade":"B+","feedback":"Strong thesis, weak conclusion.","score":82}' },
      { id: "n4", x: 79, y: 28, label: "Update LMS Grade", type: "output", icon: <CheckCircle2 className="w-4 h-4" />, app: "Canvas LMS", color: "#E66000", execLog: '{"grade_posted":true,"notify_student":true}' },
      { id: "n5", x: 79, y: 70, label: "Email Feedback", type: "output", icon: <Mail className="w-4 h-4" />, app: "Gmail", color: "#EA4335", execLog: '{"to":"yuki@uni.edu","subject":"Your ENG201 Grade"}' },
    ],
    edges: [
      { from: "n1", to: "n2" }, { from: "n2", to: "n3" },
      { from: "n3", to: "n4" }, { from: "n3", to: "n5" },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    trigger: "Invoice email received in Gmail",
    nodes: [
      { id: "n1", x: 4, y: 50, label: "Gmail – Invoice In", type: "trigger", icon: <Mail className="w-4 h-4" />, app: "Gmail", color: "#E8593A", execLog: '{"from":"vendor@acme.com","subject":"Invoice #5582","has_attachment":true}' },
      { id: "n2", x: 27, y: 50, label: "OCR Extract Fields", type: "action", icon: <Search className="w-4 h-4" />, app: "Mindee", color: "#0EA5E9", execLog: '{"amount":14200,"vendor":"Acme Ltd","due":"2026-06-01","currency":"USD"}' },
      { id: "n3", x: 52, y: 30, label: "Match vs PO", type: "action", icon: <Database className="w-4 h-4" />, app: "Airtable", color: "#FFBF00", execLog: '{"po_match":true,"po_id":"PO-3821","delta":0}' },
      { id: "n4", x: 52, y: 68, label: "Fraud Risk Score", type: "ai", icon: <Cpu className="w-4 h-4" />, app: "OpenAI", color: "#10a37f", execLog: '{"risk":"LOW","score":0.12,"reason":"known vendor, typical amount"}' },
      { id: "n5", x: 78, y: 30, label: "Auto Approve Payment", type: "output", icon: <TrendingUp className="w-4 h-4" />, app: "Stripe", color: "#635BFF", execLog: '{"payment_id":"py_xx92","scheduled":"2026-06-01","status":"queued"}' },
      { id: "n6", x: 78, y: 68, label: "Notify CFO – Slack", type: "output", icon: <Zap className="w-4 h-4" />, app: "Slack", color: "#4A154B", execLog: '{"channel":"#finance","msg":"Invoice #5582 approved $14,200"}' },
    ],
    edges: [
      { from: "n1", to: "n2" },
      { from: "n2", to: "n3" }, { from: "n2", to: "n4" },
      { from: "n3", to: "n5" }, { from: "n4", to: "n6" },
      { from: "n5", to: "n6" },
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Build execution order via topological BFS */
function buildExecOrder(workflow: Workflow): string[][] {
  const { nodes, edges } = workflow;
  const inDegree: Record<string, number> = {};
  const adj: Record<string, string[]> = {};
  nodes.forEach(n => { inDegree[n.id] = 0; adj[n.id] = []; });
  edges.forEach(e => { adj[e.from].push(e.to); inDegree[e.to]++; });

  const levels: string[][] = [];
  let queue = nodes.filter(n => inDegree[n.id] === 0).map(n => n.id);
  while (queue.length) {
    levels.push([...queue]);
    const next: string[] = [];
    queue.forEach(id => {
      adj[id].forEach(nid => {
        inDegree[nid]--;
        if (inDegree[nid] === 0) next.push(nid);
      });
    });
    queue = next;
  }
  return levels;
}

/** Build a cubic bezier path string between two nodes (% coords on a ref box) */
function bezierPath(
  a: WorkflowNode, b: WorkflowNode,
  W: number, H: number,
  nodeW = 148, nodeH = 68
): string {
  const ax = (a.x / 100) * W + nodeW;       // right port of node a
  const ay = (a.y / 100) * H + nodeH / 2;
  const bx = (b.x / 100) * W;               // left port of node b
  const by = (b.y / 100) * H + nodeH / 2;
  const cx = ax + (bx - ax) * 0.5;
  return `M ${ax} ${ay} C ${cx} ${ay}, ${cx} ${by}, ${bx} ${by}`;
}

// ── Sub-components ────────────────────────────────────────────────────────────

function NodeCard({
  node, active, done, running
}: {
  node: WorkflowNode;
  active: boolean;
  done: boolean;
  running: boolean;
}) {
  const typeColors: Record<string, string> = {
    trigger: "#E8593A",
    action: "#3B82F6",
    ai: "#10a37f",
    output: "#8B5CF6",
  };
  const barColor = typeColors[node.type] ?? "#E8593A";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      style={{
        position: "absolute",
        left: `${node.x}%`,
        top: `${node.y}%`,
        width: 148,
        transform: "translate(0, -34px)",   // vertical-center on the % point
      }}
      className={cn(
        "rounded-xl overflow-hidden shadow-2xl border transition-all duration-300 select-none",
        active ? "border-kx-orange scale-105 shadow-[0_0_20px_rgba(232,89,58,0.5)]" : "",
        done && !active ? "border-green-500/60" : "",
        !active && !done ? "border-white/10" : "",
      )}
    >
      {/* Colored header bar */}
      <div style={{ background: barColor, height: 3 }} />

      <div className="bg-[#1e1e2e] p-3">
        {/* App name row */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{node.app}</span>
          {running && active && <Loader2 className="w-3 h-3 text-kx-orange animate-spin" />}
          {done && !active && <CheckCircle2 className="w-3 h-3 text-green-500" />}
          {!done && !active && !running && <AlertCircle className="w-3 h-3 text-white/20" />}
        </div>

        {/* Icon + Label */}
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: barColor + "33", color: barColor }}
          >
            {node.icon}
          </div>
          <span className="text-[11px] font-bold text-white leading-tight">{node.label}</span>
        </div>

        {/* Log output when done */}
        <AnimatePresence>
          {done && node.execLog && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-2 overflow-hidden"
            >
              <pre className="text-[8px] font-mono text-green-400/70 bg-black/30 rounded p-1.5 leading-relaxed overflow-x-auto whitespace-pre-wrap break-all">
                {node.execLog}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Active pulse bar */}
      {active && (
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          style={{ background: barColor, height: 2 }}
        />
      )}
    </motion.div>
  );
}

// ── Main Canvas ───────────────────────────────────────────────────────────────

export function WorkflowCanvas({ workflowId }: { workflowId: string }) {
  const workflow = WORKFLOWS.find(w => w.id === workflowId) ?? WORKFLOWS[0];
  const execLevels = buildExecOrder(workflow);

  const canvasRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 800, h: 320 });
  const [execStep, setExecStep] = useState(-1);   // which level is running
  const [doneNodes, setDoneNodes] = useState<Set<string>>(new Set());
  const [running, setRunning] = useState(false);
  const [started, setStarted] = useState(false);

  // Track canvas dimensions
  useEffect(() => {
    const update = () => {
      if (canvasRef.current) {
        setDims({ w: canvasRef.current.clientWidth, h: canvasRef.current.clientHeight });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Reset when workflow changes
  useEffect(() => {
    const handleReset = () => {
      setExecStep(-1);
      setDoneNodes(new Set());
      setRunning(false);
      setStarted(false);
    }

    handleReset();
  }, [workflowId]);

  // Auto-advance through levels
  useEffect(() => {
    if (!running || execStep < 0 || execStep >= execLevels.length) return;
    const level = execLevels[execStep] ?? [];
    const isLast = execStep === execLevels.length - 1;
    const t = setTimeout(() => {
      setDoneNodes(prev => {
        const next = new Set(prev);
        level.forEach(id => next.add(id));
        return next;
      });
      if (isLast) {
        setRunning(false);
        setExecStep(execLevels.length);
      } else {
        setExecStep(s => s + 1);
      }
    }, 1400);
    return () => clearTimeout(t);
  }, [running, execStep, execLevels]);

  function startRun() {
    setDoneNodes(new Set());
    setExecStep(0);
    setRunning(true);
    setStarted(true);
  }

  function resetRun() {
    setDoneNodes(new Set());
    setExecStep(-1);
    setRunning(false);
    setStarted(false);
  }

  const activeNodes = execStep >= 0 && execStep < execLevels.length
    ? new Set(execLevels[execStep])
    : new Set<string>();

  return (
    <div className="flex flex-col h-full">
      {/* ── Canvas toolbar ── */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-[#12121a] shrink-0">
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-2 h-2 rounded-full",
            running ? "bg-kx-orange animate-pulse" : doneNodes.size > 0 ? "bg-green-500" : "bg-white/20"
          )} />
          <span className={cn("text-xs font-mono text-white/50", running ? "animate-pulse" : "", doneNodes.size > 0 ? "text-green-400" : "")}>
            {running ? "EXECUTING…" : doneNodes.size > 0 ? "WORKFLOW COMPLETE" : "READY"}
          </span>
        </div>
        <div className="flex gap-2">
          {started && (
            <button
              onClick={resetRun}
              className="flex items-center gap-1.5 text-[10px] font-mono text-white/40 hover:text-white/70 transition-colors px-2 py-1 border border-white/10 rounded-md"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          )}
          <button
            onClick={startRun}
            disabled={running}
            className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-white bg-kx-orange hover:bg-kx-orange-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors px-3 py-1.5 rounded-md"
          >
            <Play className="w-3 h-3 fill-white" /> {started ? "Re-run" : "Run workflow"}
          </button>
        </div>
      </div>

      {/* ── Trigger label ── */}
      <div className="px-5 py-2 bg-kx-surface-950/60 border-b border-white/5 text-[10px] font-mono text-kx-orange/80 shrink-0">
        ⚡ TRIGGER: {workflow.trigger}
      </div>

      {/* ── The Canvas ── */}
      <div
        ref={canvasRef}
        className="flex-1 relative overflow-hidden bg-[#0d0d18]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* SVG edges */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="rgba(255,255,255,0.15)" />
            </marker>
          </defs>

          {workflow.edges.map((edge, i) => {
            const a = workflow.nodes.find(n => n.id === edge.from)!;
            const b = workflow.nodes.find(n => n.id === edge.to)!;
            const d = bezierPath(a, b, dims.w, dims.h);
            const isDone = doneNodes.has(edge.from) && doneNodes.has(edge.to);
            const isActive = activeNodes.has(edge.from) || activeNodes.has(edge.to);

            return (
              <g key={i}>
                {/* Base wire */}
                <path d={d} stroke="rgba(255,255,255,0.06)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

                {/* Active/done coloring */}
                {(isDone || isActive) && (
                  <path
                    d={d}
                    stroke={isDone ? "rgba(34,197,94,0.5)" : "rgba(232,89,58,0.6)"}
                    strokeWidth="2"
                    fill="none"
                  />
                )}

                {/* Animated data packet */}
                {isActive && running && (
                  <motion.circle
                    r={4}
                    fill="#E8593A"
                    filter="url(#glow)"
                    initial={{ offsetDistance: "0%" }}
                    animate={{ offsetDistance: "100%" }}
                    transition={{ duration: 0.9, ease: "easeInOut", repeat: 2 }}
                    style={{ offsetPath: `path('${d}')` } as React.CSSProperties}
                  />
                )}
              </g>
            );
          })}

          {/* Glow filter */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Nodes */}
        {workflow.nodes.map(node => (
          <NodeCard
            key={node.id}
            node={node}
            active={activeNodes.has(node.id)}
            done={doneNodes.has(node.id)}
            running={running}
          />
        ))}

        {/* Empty state */}
        {!started && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <p className="text-white/20 text-sm font-mono mb-2">Click Run workflow to simulate</p>
            </div>
          </div>
        )}
      </div>

      {/* ── CTA footer ── */}
      <div className="px-5 py-4 border-t border-white/5 bg-[#12121a] flex items-center justify-between shrink-0">
        <p className="text-[11px] text-white/40 font-mono hidden md:block">
          We build this for your stack in 5 days.
        </p>
        <Link href="/contact">
          <button className="flex items-center gap-2 text-xs font-bold text-kx-orange hover:text-kx-orange-400 transition-colors group">
            Build this workflow for us <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </div>
  );
}
