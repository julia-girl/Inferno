import { matchPrefixes } from "@enitoni/gears"
import { Bot, Adapter, CommandGroup } from "@enitoni/gears-discordjs"
import { funCommandGroup } from "./commands/fun/funGroup"

import { token } from "../config.json"

const adapter = new Adapter({ token })

const prefixGroup = new CommandGroup()
  .match(matchPrefixes("!"))
  .setCommands(funCommandGroup)

const bot = new Bot({ adapter, commands: [prefixGroup] })

bot
  .start()
  .then(() => console.log("Connected!"))
  .catch((e) => console.error(e))
