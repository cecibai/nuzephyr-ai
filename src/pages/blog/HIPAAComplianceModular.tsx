import { BlogPostTemplate } from "../../components/BlogPostTemplate";

export function HIPAAComplianceModular() {
  return (
    <BlogPostTemplate
      title="HIPAA Compliance in a Modular World"
      date="August 2025"
      tag="Clinical Insight"
      readTime="7 min read"
      author="Security Team"
      excerpt="How NuZephyrHealth.ai ensures HIPAA compliance across modular endpoints, provider supervision, and audit trail logic."
      content={
        <>
          <p>
            Modular care shouldn't mean fragmented compliance. At NuZephyrHealth.ai, HIPAA is
            built into every endpoint — not bolted on.
          </p>
          <p>
            Our architecture supports encrypted transmission, role-based access, and audit-ready
            logging across intake, triage, documentation, and engagement modules. Every
            interaction is timestamped, attributed, and retrievable. Providers can override,
            annotate, and export logs for supervision and billing.
          </p>
          <p>
            We've designed our APIs to be FHIR-compatible, our documentation flows to reflect SOAP
            standards, and our companion logic to respect clinical boundaries. Even our escalation
            triggers are customizable — ensuring that risk detection aligns with network
            protocols.
          </p>
          <p>
            HIPAA isn't just a checkbox. It's a design principle. And in a modular world, it's the
            glue that holds trust together.
          </p>
        </>
      }
    />
  );
}
