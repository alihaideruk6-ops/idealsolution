import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function FaqsSection() {
  return (
    <section className="">
      <div className="mx-auto w-[90%] max-w-3xl space-y-7">
        

        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full rounded-lg border shadow"
        >
          {questions.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="px-4 py-4 text-left">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-gray-500">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-gray-500 text-sm">
          Can't find what you're looking for? Contact our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            customer support team
          </a>
        </p>
      </div>
    </section>
  );
}

const questions = [
  {
    id: "item-1",
    title: "What is Efferd?",
    content:
      "Efferd is a collection of beautifully crafted UI blocks designed to help developers build modern websites faster.",
  },
  {
    id: "item-2",
    title: "Who can benefit from Efferd?",
    content:
      "Efferd is built for founders, product teams, and agencies who want speed and quality.",
  },
  {
    id: "item-3",
    title: "What features does Efferd include?",
    content:
      "Reusable UI blocks, collaboration tools, deployment automation, and analytics.",
  },
  {
    id: "item-4",
    title: "Can I customize components?",
    content:
      "Yes, all components are fully customizable to match your brand.",
  },
  {
    id: "item-5",
    title: "Does it integrate with other tools?",
    content:
      "Yes, Efferd integrates with popular design, version control, and cloud tools.",
  },
  {
    id: "item-5",
    title: "Does it integrate with other tools?",
    content:
      "Yes, Efferd integrates with popular design, version control, and cloud tools.",
  },
  {
    id: "item-5",
    title: "Does it integrate with other tools?",
    content:
      "Yes, Efferd integrates with popular design, version control, and cloud tools.",
  },
  {
    id: "item-5",
    title: "Does it integrate with other tools?",
    content:
      "Yes, Efferd integrates with popular design, version control, and cloud tools.",
  },
  {
    id: "item-5",
    title: "Does it integrate with other tools?",
    content:
      "Yes, Efferd integrates with popular design, version control, and cloud tools.",
  },
  {
    id: "item-5",
    title: "Does it integrate with other tools?",
    content:
      "Yes, Efferd integrates with popular design, version control, and cloud tools.",
  },
];
