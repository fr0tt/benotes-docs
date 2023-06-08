export default defineAppConfig({
  title: 'Hello App Config',
  sidebar: [
    {
      name: 'Installation',
      pages: [
        { name: 'Classic', link: '/docs/installation/classic' },
        { name: 'Docker', link: '/docs/installation/docker' },
        { name: 'docker-compose', link: '/docs/installation/docker-compose' },
        { name: 'Heroku', link: '/docs/installation/heroku' },
        { name: 'docker-compose dev', link: '/docs/installation/docker-compose-dev' },
      ]
    },
    {
      name: 'Extra Features',
      pages: [
        { name: 'Thumbnails', link: '/docs/extras/thumbnails' },
        { name: 'Backup', link: '/docs/extras/backup' },
        { name: 'Bookmarklet', link: '/docs/extras/bookmarklet' },
      ]
    },
    {
      name: 'Resources',
      pages: [
        { name: 'Help', link: '/docs/resources/help' },
        { name: 'Community', link: '/docs/resources/community' },
        { name: 'Changelog', link: '/docs/resources/changelog' },
      ]
    }
  ]
})
