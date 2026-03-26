import TestimonialsColumn from "../components/data/TestimonialsColumn";
import FaqsSection from "./FaqsSection";

const testimonials = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "Highly recommend for its intuitive interface.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Our workflow is now much faster.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "Excellent performance and support.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Business performance improved greatly.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They understood our needs perfectly.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Conversions increased significantly.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const first = testimonials.slice(0, 3);
const second = testimonials.slice(3, 6);
const third = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="py-16 bg-[var(--bg-light)]">
      <div className="mx-auto w-[90%] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* ================= LEFT — TESTIMONIALS ================= */}
          <div>
            {/* Testimonials Heading */}
            <div className="mb-8 lg:ml-20">
              <span className="inline-block rounded-md border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--primary-600)]">
                Testimonials
              </span>
              <h2 className="mt-4 text-3xl font-bold text-[var(--text-dark)]">
                What our users say
              </h2>
              <p className="mt-2 text-sm text-[var(--text-muted)] max-w-md">
                Real feedback from businesses and professionals using our
                platform.
              </p>
            </div>

            {/* Testimonials Content */}
            <div className="overflow-hidden max-h-[740px]">
              <div className="flex justify-center gap-6">
                <TestimonialsColumn testimonials={first} duration={16} />
                <TestimonialsColumn
                  className="hidden md:block"
                  testimonials={second}
                  duration={20}
                />
              </div>
            </div>
          </div>

          {/* ================= RIGHT — FAQs ================= */}
          <div>
            {/* FAQs Heading */}
            <div className="mb-8 lg:ml-12">
              <span className="inline-block rounded-md border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--secondary-600)]">
                FAQs
              </span>
              <h2 className="mt-4 text-3xl font-bold text-[var(--text-dark)]">
                Frequently asked questions
              </h2>
              <p className="mt-2 text-sm text-[var(--text-muted)] max-w-md">
                Answers to common questions to help you get started quickly.
              </p>
            </div>

            {/* FAQs Content */}
            <FaqsSection />
          </div>
        </div>
      </div>
    </section>
  );
}
