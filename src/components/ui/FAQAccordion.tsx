import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import './FAQAccordion.css'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div
          key={i}
          className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}
        >
          <button
            className="faq-trigger"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            id={`faq-trigger-${i}`}
          >
            <span className="faq-question">{item.question}</span>
            <ChevronDown size={20} className="faq-chevron" />
          </button>
          <div className="faq-content">
            <p className="faq-answer">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
