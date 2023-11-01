import chalk from "chalk";
import settings from "../settings";

export default (value: number) => 
    chalk.greenBright.bold(new Intl.NumberFormat(settings.currency.locale,
        settings.currency).format(value));