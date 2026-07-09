# AI Agent Configuration

This file defines repository-specific guidance for coding agents working on this project.

## Language Policy

- All generated content must be in English.
- Commit messages, documentation updates, and code comments should be written in English.

## Branding and UI Requirements

- Keep site title as `peterkir`.
- Keep browser title as `peterkir`.
- Keep footer branding focused on Peter Kirschner.
- Preserve the Light/Dark mode toggle behavior.
- Preserve QR code rendering in the navigation footer.

## Documentation Requirements

- Keep the self-hosting section in [README.md](README.md) accurate and up to date.
- If deployment, build, or base path behavior changes, update [README.md](README.md) accordingly.

## Jekyll Configuration Guardrails

- Main configuration lives in [_config.yml](_config.yml).
- Validate Jekyll configuration changes with a local build when possible:

  ```bash
  bundle exec jekyll build
  ```

## Delivery Checklist for Agents

- Update docs when behavior changes.
- Keep changes minimal and focused.
- Do not remove existing Light/Dark mode or QR code features.
- Ensure all newly added text is English.
