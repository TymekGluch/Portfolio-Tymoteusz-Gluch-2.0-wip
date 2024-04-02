import { createClient } from 'contentful'

const client = createClient({
    space: import.meta.env.VITE_CONTENTFULL_SPACE,
    environment: 'master', 
    accessToken: import.meta.env.VITE_API_ACCESS_TOKEN,
  })

export { client };
