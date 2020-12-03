import { matchPrefixes } from "@enitoni/gears"
import { Command } from "@enitoni/gears-discordjs"

export const chooseCommand = new Command()
  .match(matchPrefixes("choose "))
  .use((context) => {
    const { message } = context

    const options = context.content.split("|")

    message.channel.send(options[Math.floor(Math.random() * options.length)])
  })
