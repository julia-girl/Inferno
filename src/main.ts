import { matchPrefixes } from "@enitoni/gears"
import { Bot, Adapter, CommandGroup } from "@enitoni/gears-discordjs"
import { funCommandGroup } from "./commands/fun/funGroup"

import { token } from "./config.json"

const adapter = new Adapter({ token })

const prefixGroup = new CommandGroup()
  .match(matchPrefixes("!"))
  .setCommands(funCommandGroup)

const bot = new Bot({ adapter, commands: [prefixGroup] })

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
