export type Metric = { value: string; label: string; sublabel?: string };
export type Step = { num: string; title: string; description: string };
export type ResultRow = {
  metric: string;
  before?: string;
  after?: string;
  target?: string;
  achieved?: string;
};
export type RelatedProject = { slug: string; title: string; category: string };

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  detailTitle?: string;
  client: string;
  date?: string;
  industry?: string;
  timeline?: string;
  category: string;
  tagline: string;
  summary?: string;
  outcome: string;
  stat: { value: string; label: string };
  image: string;
  featured?: boolean;
  link?: string;
  metrics?: Metric[];
  challenge?: { overview: string; bullets: string[] };
  solution?: { overview: string; steps: Step[]; techStack: string[] };
  results?: { overview: string; rows: ResultRow[]; impact: string[] };
  nextSteps?: string;
  relatedProjects?: RelatedProject[];
};

export { caseStudies } from "@/data/case-studies";

import { caseStudies as _caseStudies } from "@/data/case-studies";

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return _caseStudies.find((s) => s.slug === slug);
}

export function hasDetailPage(study: CaseStudy): boolean {
  return Boolean(study.metrics && study.challenge && study.solution && study.results);
}
