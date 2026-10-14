# Agents

<!-- switchyard:start -->
## Working on Switchyard

This repository is a Switchyard project: https://app.switch-yard.dev/p/commander-js. Each agent works in its own workspace, and the merge queue merges a workspace on the default branch once the checks in `.yard/rules.toml` pass and its rules let the workspace merge, or a person approves it.

- Start a workspace: `yard --project commander-js workspace new "<task>"`, then `yard agent setup --yes` in the workspace's checkout.
- Before you code, set a plan (`yard plan` or the `yard_plan` tool) and read the warnings other workspaces raise.
- Push to your workspace, keep it current with `yard sync`, and finish with `yard submit`. Never push to the default branch yourself.
- The `switchyard` MCP server is set up in `.mcp.json` (Claude Code). It reads the workspace token from `SWITCHYARD_TOKEN`; never commit a token.
- The skill in `.agents/skills/switchyard/SKILL.md` explains the whole loop.
<!-- switchyard:end -->
