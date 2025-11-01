import { BlogPostTemplate } from "../../components/BlogPostTemplate";

export function BuildingZeeAI() {
  return (
    <BlogPostTemplate
      title="Building Zee-AI: The Companion that Listens"
      date="July 2025"
      tag="Product Team"
      readTime="9 min read"
      author="Product Team"
      excerpt="The design philosophy behind our AI companion. How we balance engagement with clinical boundaries and empathy with safety."
      content={
        <>
          <p>
            Zee-AI wasn't built to be a chatbot. It was built to be a clinical companion — one
            that listens, adapts, and respects boundaries. From day one, our product team focused
            on three pillars: engagement, supervision, and safety.
          </p>
          <p>
            We designed Zee-AI to feel conversational without ever crossing into therapeutic
            territory. Every prompt is modular, every response is logged, and every interaction is
            reviewable by providers. Empathy is modeled, not mimicked. We use tone calibration,
            multilingual support, and session continuity to build trust — but we never pretend to
            be human.
          </p>
          <p>
            Clinical boundaries are built into the architecture. Zee-AI doesn't diagnose, doesn't
            prescribe, and doesn't escalate without provider logic. Instead, it supports intake,
            documentation, and engagement with transparency and auditability.
          </p>
          <p>
            The result? A companion that listens, reflects, and respects — built for care, not
            confusion.
          </p>
        </>
      }
    />
  );
}
