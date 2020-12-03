import { matchPrefixes } from "@enitoni/gears"
import { Command } from "@enitoni/gears-discordjs"

export const cumCommand = new Command()
  .match(matchPrefixes("cum"))
  .use((context) => {
    context.message.channel.send(":yum:")
  })
