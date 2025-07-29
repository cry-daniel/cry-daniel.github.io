// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-mathematical-contest-in-modeling-mcm-outstanding-winner-top-0-15-globally-comap-scholarship-award-4-out-of-27205-teams-3000-person-ams-award-for-details-please-visit-the-official-website-refer-to-2213970",
          title: 'Mathematical Contest in Modeling (MCM) : Outstanding Winner (top 0.15%, globally), COMAP Scholarship...',
          description: "",
          section: "News",},{id: "news-our-paper-a-comprehensive-performance-model-of-sparse-matrix-vector-multiplication-to-guide-kernel-optimization-has-been-accepted-by-tpds-2022-ccf-a",
          title: 'Our paper “A Comprehensive Performance Model of Sparse Matrix-Vector Multiplication to Guide Kernel...',
          description: "",
          section: "News",},{id: "news-our-paper-differential-matching-prefetcher-for-indirect-memory-access-has-been-accepted-by-hpca-2024-ccf-a",
          title: 'Our paper “Differential-Matching Prefetcher for Indirect Memory Access” has been accepted by HPCA...',
          description: "",
          section: "News",},{id: "news-our-paper-gifts-efficient-gcn-inference-framework-on-pytorch-cpu-via-exploring-the-sparsity-has-been-accepted-by-ipdps-2025-ccf-b-first-author-our-code-has-been-open-sourced-and-is-available-at-https-github-com-aca-lab-gifts",
          title: 'Our paper “GIFTS: Efficient GCN Inference Framework on PyTorch-CPU via Exploring the Sparsity”...',
          description: "",
          section: "News",},{id: "news-our-paper-saga-a-memory-efficient-accelerator-for-gann-construction-via-harnessing-vertex-similarity-has-been-accepted-by-dac-2025-ccf-a-first-author",
          title: 'Our paper “SAGA: A Memory-Efficient Accelerator for GANN Construction via Harnessing Vertex Similarity”...',
          description: "",
          section: "News",},{id: "news-our-paper-heat-npu-ndp-heterogeneous-architecture-for-transformer-empowered-graph-neural-networks-has-been-accepted-by-micro-2025-ccf-a-first-author",
          title: 'Our paper “HEAT: NPU-NDP HEterogeneous Architecture for Transformer-Empowered Graph Neural Networks” has been...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%65%6E%72%75%69%79%61%6E%67@%73%6A%74%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-5531-0688", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
