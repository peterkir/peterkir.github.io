# peterkir.github.io

This repository contains the source for the website at [https://peterkir.github.io](https://peterkir.github.io).

## Tech Stack

- Jekyll
- Just the Docs theme
- GitHub Pages-compatible setup

## Local Development

### Prerequisites

- Ruby (recommended: Ruby 3.x)
- Bundler

### Run Locally

1. Install dependencies:

	```bash
	bundle install
	```

2. Start the local server:

	```bash
	bundle exec jekyll serve
	```

	Start with automatic browser reload (LiveReload):

	```bash
	bundle exec jekyll serve --livereload --open-url
	```

	If port 4000 is already in use:

	```bash
	bundle exec jekyll serve --livereload --open-url --port 4001
	```

3. Open:

	```
	http://127.0.0.1:4000
	```

### LiveReload Notes

- LiveReload is available with Jekyll 4.x.
- If automatic reload does not work, verify that your browser or local network setup is not blocking WebSocket connections.
- If the page appears stale after changes, perform a hard reload in the browser.

### Known Warnings (Sass Deprecations)

When starting the local server, you may see Sass deprecation warnings originating from theme dependencies (for example `just-the-docs`).

This repository suppresses these dependency warnings via [_config.yml](_config.yml):

- `sass.quiet_deps: true`
- `sass.silence_deprecations`: `import`, `global-builtin`, `color-functions`

This keeps local output clean while preserving current behavior. The long-term fix is to move to a theme/version stack where these deprecations are resolved upstream.

## Self-Hosting

You can self-host this site on any server that can serve static files.

### Build Static Site

```bash
bundle exec jekyll build
```

The generated website is written to the `_site/` directory.

### Deploy Options

- Nginx or Apache: serve the `_site/` directory as your web root.
- Docker + Nginx: copy `_site/` into an Nginx image and expose port 80.
- Any static host: upload the contents of `_site/`.

### Notes

- `baseurl` is currently set to an empty string in [_config.yml](_config.yml), which is correct for root-domain hosting.
- If you host the site under a subpath, update `baseurl` accordingly.
- In CI deployment, `201410_EclipseCon_Europe/` is excluded from Jekyll processing in [_config.yml](_config.yml) and then copied into `_site/` by [.github/workflows/deploy.yml](.github/workflows/deploy.yml) so it is still published on GitHub Pages.

## Project Conventions

- Site title and browser title: `peterkir`
- Footer branding: Peter Kirschner
- Light/Dark mode toggle and QR code footer are part of the site layout and should remain functional.
