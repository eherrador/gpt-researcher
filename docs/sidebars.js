/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

 module.exports = {
  docsSidebar: [
    'welcome',
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        'gpt-researcher/getting-started/introduction',
        'gpt-researcher/getting-started/how-to-choose',
        'gpt-researcher/getting-started/getting-started',
        'gpt-researcher/getting-started/cli',
        'gpt-researcher/getting-started/getting-started-with-docker',
        'gpt-researcher/getting-started/linux-deployment',
      ]
    },
    {
      type: 'category',
      label: 'Comex AI',
      collapsible: true,
      collapsed: true,
      items: [
        'gpt-researcher/gptr/pip-package',
        'gpt-researcher/gptr/npm-package',
        'gpt-researcher/gptr/example',
        'gpt-researcher/gptr/deep_research',
        'gpt-researcher/gptr/config',
        'gpt-researcher/gptr/scraping',
        'gpt-researcher/gptr/querying-the-backend',
        'gpt-researcher/gptr/automated-tests',
        'gpt-researcher/gptr/troubleshooting'
      ],
    },
    {
      type: 'category',
      label: 'Frontend',
      collapsible: true,
      collapsed: true,
      items: [
        'gpt-researcher/frontend/introduction',
        'gpt-researcher/frontend/nextjs-frontend',
        'gpt-researcher/frontend/react-package',
        'gpt-researcher/frontend/embed-script',
        'gpt-researcher/frontend/vanilla-js-frontend',
        'gpt-researcher/frontend/discord-bot',
        'gpt-researcher/frontend/visualizing-websockets'
      ],
    },
    {
      type: 'category',
      label: 'Custom Context',
      collapsible: true,
      collapsed: true,
      items: [
        'gpt-researcher/context/tailored-research',
        'gpt-researcher/context/local-docs',
        'gpt-researcher/context/azure-storage',
        'gpt-researcher/context/filtering-by-domain',
        'gpt-researcher/context/vector-stores',
        'gpt-researcher/context/data-ingestion'
        ]
    },
    {
      type: 'category',
      label: 'Handling Logs',
      collapsible: true,
      collapsed: true,
      items: [
        'gpt-researcher/handling-logs/all-about-logs',
        'gpt-researcher/handling-logs/simple-logs-example',
        'gpt-researcher/handling-logs/langsmith-logs'
        ]
    },
    {
      type: 'category',
      label: 'LLM Providers',
      collapsible: true,
      collapsed: true,
      items: [
        'gpt-researcher/llms/llms',
        'gpt-researcher/llms/supported-llms',
        'gpt-researcher/llms/testing-your-llm',
        'gpt-researcher/llms/running-with-azure',
        'gpt-researcher/llms/running-with-ollama'
      ]
    },
    {
      type: 'category',
      label: 'Search Engines',
      collapsible: true,
      collapsed: true,
      items: [
        'gpt-researcher/search-engines/retrievers',
        'gpt-researcher/search-engines/test-your-retriever'
        ]
    },
    {
      type: 'category',
      label: 'Multi-Agent Frameworks',
      collapsible: true,
      collapsed: true,
      items: [
        'gpt-researcher/multi_agents/langgraph',
        ]
    },
    {
      type: 'category',
      label: 'MCP Server',
      collapsible: true,
      collapsed: true,
      items: [
        'gpt-researcher/mcp-server/getting-started',
        'gpt-researcher/mcp-server/advanced-usage',
        'gpt-researcher/mcp-server/claude-integration',
        ]
    },
    {'Examples': [{type: 'autogenerated', dirName: 'examples'}]},
    'contribute',
    'roadmap',
    'faq',
  ],
  // Removing empty Reference category that was causing the build error
  referenceSideBar: []
};
