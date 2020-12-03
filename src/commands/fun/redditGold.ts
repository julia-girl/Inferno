import { matchPrefixes } from "@enitoni/gears"
import { Command } from "@enitoni/gears-discordjs"

export const redditGoldCommand = new Command()
  .match(matchPrefixes("redditgold"))
  .use(async (context) => {
    const { message } = context
    const { channel } = message

    await message.delete()

    await channel.messages.fetch({ limit: 2 })

    const [lastMessage] = channel.messages.cache
      .last(5)
      .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))

    lastMessage.react("783526940317188096")

    await channel.send("Thank you for the gold kind stranger!")
  })
