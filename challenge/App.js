import { useState } from "react";
f

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
        buttonPosition="right" // Button on the right
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander
        expanded={true}
        className="box"
        buttonPosition="top" // Button above text
      >
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>

      <TextExpander
        expanded={true}
        className="box"
        buttonPosition="left" // Button above text
      >
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className,
  buttonPosition = "bottom", // Default button position
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  // Split the text into words
  const words = children ? children.split(" ") : [];

  // Determine the display text based on the expanded state
  const displayText = isExpanded
    ? words.join(" ")
    : words.slice(0, collapsedNumWords).join(" ") +
      (words.length > collapsedNumWords ? "..." : "");

  // Toggle expanded state
  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={`${className || ""} box`}>
      <div className={`text-expander button-${buttonPosition}`}>
        <span>{displayText}</span>
        {words.length > collapsedNumWords && (
          <button
            onClick={toggleExpanded}
            style={{ color: buttonColor }}
            // aria-label={isExpanded ? collapseButtonText : expandButtonText}
          >
            {isExpanded ? collapseButtonText : expandButtonText}
          </button>
        )}
      </div>
    </div>
  );
}
