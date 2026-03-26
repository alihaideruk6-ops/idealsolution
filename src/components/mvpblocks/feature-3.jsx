import React from 'react';

// SVG Icons as components (stroke color controlled via parent)
const PhoneIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const FileTextIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const MessageSquareIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const ScaleIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);

const leftFeatures = [
  {
    icon: PhoneIcon,
    title: "Step 1: Contact Us",
    description: "Reach us by phone, email, or online form. Share details about your concern, account info, and any previous communication. We'll review and aim to resolve within a few working days.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-br-[2px]",
  },
  {
    icon: CheckCircleIcon,
    title: "Step 2: Acknowledgement",
    description: "We'll acknowledge your complaint via phone, email, or post. A dedicated dispute handler will be assigned, and you'll receive a reference number to track progress.",
    position: "left",
    cornerStyle: "sm:-translate-x-4 sm:rounded-br-[2px]",
  },
  {
    icon: SearchIcon,
    title: "Step 3: Investigation",
    description: "Our Quality Assurance Team reviews all aspects. We aim to resolve within 7 working days, though cases involving third parties may take longer. You'll be updated throughout.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-tr-[2px]",
  },
];

const rightFeatures = [
  {
    icon: FileTextIcon,
    title: "Step 4: Outcome",
    description: "You'll receive a final response detailing our findings and proposed resolution. Our priority is a fair, transparent outcome. If no agreement is reached, the complaint will be marked as deadlock.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    icon: MessageSquareIcon,
    title: "Step 5: Challenge",
    description: "If you disagree with our findings, you may challenge the outcome by providing additional information or evidence for review.",
    position: "right",
    cornerStyle: "sm:translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    icon: ScaleIcon,
    title: "Step 6: Ombudsman Services",
    description: "If unresolved after 8 weeks or at deadlock, escalate to the independent Energy Ombudsman. This free, impartial service ensures fair resolution.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-tl-[2px]",
  },
];

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;
  return (
    <div>
      <div
        className={`relative rounded-2xl px-4 pt-4 pb-4 text-sm bg-[var(--primary-500)]/5 ring-1 ring-[var(--primary-500)]/30 hover:ring-[var(--primary-500)] hover:shadow-lg transition-all duration-300 ${feature.cornerStyle}`}
      >
        <div className="mb-3 text-[var(--primary-600)">
          <Icon />
        </div>
        <h2 className="mb-2.5 text-2xl font-semibold text-[var(--text-dark)]">{feature.title}</h2>
        <p className="text-base text-[var(--text-muted)] leading-relaxed">
          {feature.description}
        </p>
        {/* Decorative elements */}
        <span className="absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--primary-500)] to-transparent opacity-60"></span>
        <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,var(--primary-500)/15_0%,transparent_100%)] opacity-60 rounded-2xl"></span>
      </div>
    </div>
  );
};

export default function ComplaintsProcess() {
  return (
    <section className="pt-20 pb-8 bg-[var(--bg-white)] relative overflow-hidden" id="complaints">
      {/* Decorative blur circles */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--primary-500)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[var(--secondary-500)]/10 rounded-full blur-3xl" />
      
      <div className="mx-6 max-w-[90%] pt-2 pb-16 max-[300px]:mx-4 min-[1150px]:mx-auto relative z-10">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={`left-feature-${index}`} feature={feature} />
            ))}
          </div>

          {/* Center column */}
          <div className="order-1 mb-6 self-center sm:order-0 md:mb-0">
            {/* Decorative badge */}
            <div className="relative mx-auto mb-4 w-fit rounded-full rounded-bl-sm px-4 py-2 text-sm bg-[var(--secondary-500)]/10 text-[var(--text-dark)] ring-1 ring-[var(--secondary-500)]/40">
              <span className="relative z-10 flex items-center gap-2 font-medium">
                Our Process
              </span>
              <span className="absolute -bottom-px left-1/2 h-px w-2/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--secondary-500)] to-transparent"></span>
              <span className="absolute inset-0 bg-[radial-gradient(30%_40%_at_50%_100%,var(--secondary-500)/25_0%,transparent_100%)] rounded-full"></span>
            </div>
            
            <h2 className="mb-2 text-center text-2xl sm:mb-2.5 md:text-3xl text-[var(--text-dark)] font-bold">
              Complaints Resolution Process
            </h2>
            <p className="mx-auto max-w-[20rem] text-center text-[var(--text-muted)] leading-relaxed mb-8">
              We take your concerns seriously and follow a structured, transparent process to ensure fair resolution.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={`right-feature-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}