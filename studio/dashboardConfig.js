export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62588c70db5b6b19e10dd83c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hrqfk36a',
                  apiId: '1d98c971-ded1-4d72-a20d-3d8ce005ae75'
                },
                {
                  buildHookId: '62588c7096eb300e52550d0c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pugo4mzv',
                  apiId: 'd1c0e452-e172-4b99-bdc4-6cad85c1b6a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dmurauyova/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pugo4mzv.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
