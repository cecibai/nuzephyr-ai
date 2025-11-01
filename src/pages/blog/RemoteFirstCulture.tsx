import { BlogPostTemplate } from "../../components/BlogPostTemplate";

export function RemoteFirstCulture() {
  return (
    <BlogPostTemplate
      title="Remote-First Culture: One Year In"
      date="June 2025"
      tag="Culture & Team"
      readTime="6 min read"
      author="Operations Team"
      excerpt="Lessons learned from building a distributed healthcare AI company. Our approach to async work, team rituals, and maintaining velocity."
      content={
        <>
          <p>
            When we launched NuZephyrHealth.ai, we knew remote-first wasn't just a logistical
            choice — it was a cultural commitment. One year in, here's what we've learned.
          </p>
          <p>
            Async work works — but only with clarity. We use modular documentation, tagged Figma
            flows, and structured handoffs to keep velocity high and ambiguity low. Every team
            member knows what "done" looks like, and every decision is traceable.
          </p>
          <p>
            Rituals matter. We hold weekly "Zephyr Circles" for cross-functional updates, monthly
            founder AMAs, and quarterly deep dives into product logic. These aren't meetings —
            they're alignment tools.
          </p>
          <p>
            We've also learned to design for time zones. Our workflows prioritize autonomy, and
            our tools (Notion, Slack, Loom) support asynchronous collaboration without
            bottlenecks.
          </p>
          <p>
            Remote-first isn't perfect. But with intention, it's powerful — especially when
            building something as complex and human-centered as healthcare AI.
          </p>
        </>
      }
    />
  );
}
