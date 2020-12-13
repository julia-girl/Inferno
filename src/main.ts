import { matchPrefixes } from "@enitoni/gears"
import { Bot, Adapter, CommandGroup } from "@enitoni/gears-discordjs"
import { cursedGroup } from "./commands/cursed/cursedGroup"
import { funGroup } from "./commands/fun/funGroup"
import { otherGroup } from "./commands/other/otherGroup"

import { token } from "./config.json"

const adapter = new Adapter({ token })

const prefixGroup = new CommandGroup()
  .match(matchPrefixes("!"))
  .setCommands(funGroup, otherGroup, cursedGroup)

const bot = new Bot({
  adapter,
  commands: [prefixGroup],
})

process.on("SIGTERM", () => {
  console.log("Recieved SIGTERM")
  bot.client.destroy()
})

process.on("SIGINT", () => {
  console.log("Recieved SIGINT")
  bot.client.destroy()
})

async function main() {
  await bot.start()

  console.log("Connected")
  bot.client.user?.setActivity("hentai", { type: "WATCHING" })
}

main()
