import { matchPrefixes } from "@enitoni/gears"
import { Command } from "@enitoni/gears-discordjs"

import { gitRepoLink } from "../../config.json"

export const gitCommand = new Command()
  .match(matchPrefixes("git", "repo"))
  .use((context) => {
    context.message.channel.send(gitRepoLink)
  })
