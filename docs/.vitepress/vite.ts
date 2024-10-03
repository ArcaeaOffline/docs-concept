import { defineConfig } from 'vite'

import { ExternalPackageIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [
    Icons({
      customCollections: {
        ...ExternalPackageIconLoader('@private-icons/ao'),
      },
    }),
  ],
})
