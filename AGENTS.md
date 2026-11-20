# Agents

<!-- switchyard:start -->
## Working on Switchyard

This repository is a Switchyard project: https://app.switchyard.so/p/commander-js. Each agent works on its own task, and the merge queue merges a task into the default branch once the checks in `.yard/rules.toml` pass and its rules let it merge, or a person approves it.

- Start a task: `yard --project commander-js branch new "<goal>"`, then `yard agent setup --yes` in its checkout.
- Before you code, set a plan (`yard plan` or the `yard_plan` tool) and read the warnings other tasks raise.
- Push to your task, keep it current with `yard sync`, and finish with `yard submit`. Never push to the default branch yourself.
- The `switchyard` MCP server is set up in `.mcp.json` (Claude Code). It reads the task's key from `SWITCHYARD_TOKEN`; never commit a key.
- The skill in `.agents/skills/switchyard/SKILL.md` explains the whole loop.
<!-- switchyard:end -->
