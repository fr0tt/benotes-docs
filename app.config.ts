export default defineAppConfig({
  title: 'Hello App Config',
  sidebar: [
    {
      name: 'Installation',
      pages: [
        { name: 'Classic', link: '/docs/installation/classic' },
        { name: 'docker-compose', link: '/docs/installation/docker-compose' },
        { name: 'Docker', link: '/docs/installation/docker' },
        { name: 'docker-compose dev', link: '/docs/installation/docker-compose-dev' },
        { name: 'Heroku', link: '/docs/installation/heroku' }
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