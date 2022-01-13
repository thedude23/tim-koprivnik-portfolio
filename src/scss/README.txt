(S)CSS Help

  -- Selectors
    - Next sibling combinator (+): You can look for an element that immediately follows another element by using a + character in your selector.
      .top * + * {
        margin-top: 1.5em;
      }
    - To add space between stacked elements, use the next sibling combinator to add space only if an element is a next sibling of a child element of .top.
    - Subsequent- sibling combinator (~): A subsequent combinator is very similar to a next sibling selector. Instead of a + character however, use a ~ character. How this differs is that an element just has to follow another element with the same parent, rather than being the next element with the same parent.
    - Child combinator (>): A child combinator (also known as direct descendant) allows you more control over the recursion that comes with combinator selectors. By using the > character, you limit the combinator selector to apply only to direct children.
    - Compound selectors: You can combine selectors to increase specificity and readability. For example, to target <a> elements, that also have a class of .my-class, write the following:

  -- Flexbox
    - The flex property is a shorthand for flex-grow, flex-shrink and flex-basis.
      flex: 1 0 auto; 
        ===
      flex-grow: 1;
      flex-shrink: 0;
      flex-basis: auto;

  -- Columns
    - With CSS multicolumn, you can split this into multiple columns to help with both of these issues.
      column-count: 2;
      column-gap: 1em; OR (better): column-width: Npx;
  
  -- Lists (https://web.dev/learn/css/lists/)
    - There are three list-style properties you can use to style your example: list-style-position, list-style-image, and list-style-type.
      - list-style-position: inside/outside;
      - list-style-image: url(image.png); // linear-gradient(to left bottom, pink, teal); 
      - list-style-type: "🛒"; // "space-counter" / disc / circle / "\1F44D" -- thumbs up sign (https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)
    - Shorthand: list-style: <'list-style-type'> || <'list-style-position'> || <'list-style-image'>

