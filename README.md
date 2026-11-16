# Reflection:
Through out the development process, several technical challenges arose. Managing independent filter states between the search bar and the region dropdown initially caused synchronization conflicts. Additionally, ensuring a stable, uniform grid layout across various viewports required fine-tuning Tailwind's responsive utility classes to handle fluid adaptation from mobile screens to desktop monitors.

To resolve these hurles, I implemented dedicated React Context providers(SearchContext and FilterContext and ThemeContext) to decouple global state from component hierarchies. This enabled the CountriesPage component to evaluate search queries and regional constraints simultaneously within a unified filtering function, ensuring instant, synchronized UI updates.

Looking forward to future enhancement, implementing a debounced search input would optimize performance when querying large data sets, while skeleton loading states would improve perceived performance during initial API fetches. Overall, this project significantly strengthened my proficiency in cpomonent-driven architecture, global state management, and styling.
Deployed on Netlify:
Checkout project at:
https://fantastic-scone-2afaf5.netlify.app