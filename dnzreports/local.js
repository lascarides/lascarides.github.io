// Define the tour!
var tour = {
  id: "hello-hopscotch",
  scrollDuration: 500,
  steps: [
    {
      title: "Hi! Let's have a look at searches, shall we?",
      content: "How are people using DigitalNZ to perform searches? What are the differences between the old 'brown and orange' DNZ, and the two flavors of the new 'Kereru' site? Are we on the right track? Take this tour for some highlights, then dive deep into this report on your own.",
      target: "intro",
      placement: "bottom"
    },
    {
      title: "Brown and orange",
      content: "The old, venerable DNZ site had a standard 'filter' panel on every search page that spelled out the options for rights usage, and included a slider for date ranges.",
      target: "screenshot-201610",
      placement: "top"
    },
    {
      title: "Kereru (as launched)",
      content: "The the recent redesign removed filters from the home page, and included a 'multi-tier' filter panel accessible from a 'Filter results' button.",
      target: "screenshot-201710",
      placement: "top"
    },
    {
      title: "Kereru (latest revision)",
      content: "The latest version (launched 1 December 2017) trades the 'Filter results' button for a series of individual dropdowns (a la Google Images).",
      target: "screenshot-201712",
      placement: "top"
    },
    {
      title: "Where did this information come from?",
      content: "We pulled the query strings for every search over three different time periods (corresponding to the three releases of the site shown above) from Google Analytics, and tore them apart using some programming magic to get the reports below.",
      target: "metadata",
      placement: "top"
    },
    {
      title: "What are these numbers?",
      content: "Here are the number of searches in each period. Note December 2017 is a partial month. Because they differ, the following reports express usage as a percentage of a given month's traffic to make apples-apples comparisons.",
      target: "metadata",
      placement: "top"
    },
    {
      title: "Report: Facets/Parameters",
      content: "This report shows a list of how often each search parameter (facet,tab, or search keyword) was used by our patrons. Note that where Kereru changed a parameter default (such as year > decade or sets > stories), we've combined them on to a single line.",
      target: "report-0",
      placement: "bottom"
    },
    {
      title: "Colour key",
      content: "Increases over the original site are shown in green, decreases in red. The bigger the decrease, the redder.",
      target: "report-0",
      placement: "bottom"
    },
    {
      title: "'Keyword' most popular, of course",
      content: "Searches with a keyword are most popular, but becoming less so as the new Explore page offers more search-term-free avenues into search results.",
      target: document.querySelector("#item-0-0 .header-column"),
      placement: "bottom"
    },
    {
      title: "'Images' most popular tab",
      content: "The most frequently used filter is the Images tab. Use of this tab has remained steady across the redesign.",
      target: document.querySelector("#item-0-1 .header-column"),
      placement: "bottom"
    },
    {
      title: "Content Partner & Collection facets",
      content: "The most frequently used non-tab filters. Use of these jumped way up in the initial Kereru redesign, but returned to previous level in the latest. No idea why… I suspect it might have to do with the way the first Kereru design spelled out the top few values for each? Insights welcomed.",
      target: document.querySelector("#item-0-3 .header-column"),
      placement: "bottom"
    },
    {
      title: "Subject",
      content: "Subject searches are up a fair amount, possibly owing to more prominent placement of the Subject links on Kereru item record pages.",
      target: document.querySelector("#item-0-5 .header-column"),
      placement: "bottom"
    },
    {
      title: "Usage",
      content: "I initially had a major panic that use of the Usage facet had fallen 600%, but it was actually a quirk in the data caused by way the old site search worked. With the data problem solved, can see we've actually increased use of this facet a healthy amount.",
      target: document.querySelector("#item-0-7 .header-column"),
      placement: "bottom"
    },
    {
      title: "Report: Facet combinations",
      content: "Because anyone can select more than one facet at a time, it becomes quite interesting to look at the number of individual combinations, sorted here from most to least popular. Tabs are in blue.",
      target: "report-1",
      placement: "top"
    },
    {
      title: "Top: Bare keyword",
      content: "As expected, keyword searches with no filters come out on top, but surprisingly only in the 35-45% range, meaning a clear majority of all DNZ searches include at least one filter.",
      target: document.querySelector("#item-1-0 .header-column"),
      placement: "bottom"
    },
    {
      title: "Top tab: Images",
      content: "About 1/4 of all searches are keyword + images. Consistent across designs.",
      target: document.querySelector("#item-1-1 .header-column"),
      placement: "bottom"
    },
    {
      title: "Top facet: Content Partner AND Collection",
      content: "A surprisingly high number of searches combine keyword with both of these facets. Any clue why this is the case? Seems like it might be a quirk of searching that I am not understanding.",
      target: document.querySelector("#item-1-2 .header-column"),
      placement: "bottom"
    },
    {
      title: "Blank searches",
      content: "A steady 1 out of 100 searches is completely blank: 'Show me everything!'",
      target: document.querySelector("#item-1-9 .header-column"),
      placement: "bottom"
    },
    {
      title: "Usage with images",
      content: "Keyword + images + usage is the most popular combo with Usage in the mix. People are clearly looking for reusable images.",
      target: document.querySelector("#item-1-12 .header-column"),
      placement: "bottom"
    },
    {
      title: "Report: Combination patterns",
      content: "This is a simplified version of the report above, showing just the facet patterns (keyword and one facet, keyword and tab, etc).",
      target: "report-2",
      placement: "top"
    },
    {
      title: "More complexity",
      content: "There's a lot of green down here and red at the top, implying that people are performing more complicated searches on the new site. A positive result!",
      target: document.querySelector("#item-2-7 .header-column"),
      placement: "bottom"
    },
  ]
};

// Start the tour!
hopscotch.startTour(tour);