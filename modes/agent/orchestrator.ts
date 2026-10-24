import { isCancel, text } from "@clack/prompts";
import chalk from "chalk";
import { defaultAgentConfig } from "./types";
import { ActionTracker } from "./action_tracker";

export async function runAgentMode() {
    console.log(chalk.bold('\n🤖 Agent Mode\n'));

    const goal = await text({
        message: "WHat wuld like the agent to do?",
        placeholder: "Concrete task for this codebase..."
    });

    if(isCancel(goal) || !goal.trim()) return;

    const config = defaultAgentConfig();
    const tracker = new ActionTracker();

}