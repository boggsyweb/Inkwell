import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import AccordionData from '../components/AccordionData';
import '../styles/sections/faq.css'

const AccordionContext = React.createContext({});
const useAccordion = () => React.useContext(AccordionContext);

function Accordion({ children, multiple, defaultIndex }) {
  const [activeIndex, setActiveIndex] = React.useState(
    multiple ? [defaultIndex] : defaultIndex
  );

  function onChangeIndex(index) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return index === activeIndex ? -1 : index;
      }

      if (currentActiveIndex.includes(index)) {
        return currentActiveIndex.filter((i) => i !== index);
      }

      return currentActiveIndex.concat(index);
    });
  }

  return React.Children.map(children, (child, index) => {
    const isActive =
      multiple && Array.isArray(activeIndex)
        ? activeIndex.includes(index)
        : activeIndex === index;

    return (
      <AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>
        {child}
      </AccordionContext.Provider>
    );
  });
}

function AccordionItem({ children }) {
  return <div className="AccordionItem">{children}</div>;
}

function AccordionHeader({ children }) {
  const { isActive, index, onChangeIndex } = useAccordion();
  const handleKeyDown = (KeyboardEvent) => {
    if (KeyboardEvent.key === 'Enter' || KeyboardEvent.key === ' ') {
      onChangeIndex(index);
    }
  };
  

  return (
    <motion.div
      className={`AccordionHeader ${isActive ? "active" : ""}`}
      onClick={() => onChangeIndex(index)}
      onKeyDown={handleKeyDown}
      tabIndex={0}

    >
      {children}
    </motion.div>
  );
}

function AccordionPanel({ children }) {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        >
          <div className="AccordionPanel">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function FAQAccordion() {
  return (
      <Accordion>
      {AccordionData.map((item, i) => (
          <AccordionItem key={i}>
            <AccordionHeader>{item.header}</AccordionHeader>
            <AccordionPanel>{item.panel}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
  );
}
