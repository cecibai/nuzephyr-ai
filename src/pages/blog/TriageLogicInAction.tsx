import { BlogPostTemplate } from "../../components/BlogPostTemplate";

export function TriageLogicInAction() {
  return (
    <BlogPostTemplate
      title="Triage Logic in Action"
      date="September 2025"
      tag="Clinical Insight"
      readTime="6 min read"
      author="Clinical Advisory Board"
      excerpt="Behind the scenes of our AI-powered escalation and routing system."
      content="Triage is more than symptom sorting — it's risk detection, escalation logic, and care routing. Our AI models parse intake responses in real time, flag urgent cases, and route them to appropriate modules or providers. Every decision is logged, supervised, and auditable. We've built escalation triggers for suicidality, acute distress, and social determinants — all customizable by network. The result: faster response times, safer workflows, and better outcomes."
    />
  );
}
