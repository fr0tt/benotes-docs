export default defineAppConfig({
  title: 'Hello App Config',
  sidebar: [
    {
      name: 'Installation',
      pages: [
        { name: 'Classic', link: '/docs/installation/classic' },
        { name: 'docker-compose', link: '/docs/installation/docker-compose' },
        { name: 'Docker', link: '/docs/installation/docker' },
        { name: 'Heroku', link: '/docs/installation/heroku' }
      ]
    },
    {
      name: 'Test',
      pages: [
        { name: 'Test test', link: '/docs/test-test' }
      ]
    }
  ]
})