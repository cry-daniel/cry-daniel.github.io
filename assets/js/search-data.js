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
        },{id: "news-i-was-honored-to-receive-the-outstanding-winner-award-top-0-15-globally-in-the-mathematical-contest-in-modeling-mcm-along-with-the-comap-scholarship-award-4-out-of-27205-teams-3000-per-person-and-the-ams-award-for-details-please-visit-the-official-website-refer-to-2213970",
          title: 'I was honored to receive the Outstanding Winner Award (top 0.15%, globally) in...',
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
          section: "News",},{id: "news-i-am-honored-to-have-received-the-national-scholarship",
          title: 'I am honored to have received the National Scholarship.',
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
