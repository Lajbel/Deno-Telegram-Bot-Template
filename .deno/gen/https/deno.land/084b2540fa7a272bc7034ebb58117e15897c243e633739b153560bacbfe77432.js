import { encoder } from "./mod.ts";
export class Logger {
    #prefix;
    constructor(prefix) {
        this.#prefix = prefix;
    }
    set prefix(value) {
        this.#prefix = value;
    }
    #formatDate = (date) => {
        const s = date.toISOString();
        return `${s.slice(0, 10).replaceAll("-", "/")} ${s.slice(11, 19)}`;
    };
    print(s) {
        const date = this.#formatDate(new Date());
        Deno.stdout.write(encoder.encode(`${this.#prefix ?? ""}${date} ${s}\n`));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbkMsTUFBTSxPQUFPLE1BQU07SUFDakIsT0FBTyxDQUFVO0lBRWpCLFlBQVksTUFBZTtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxNQUFNLENBQUMsS0FBdUI7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVcsR0FBRyxDQUFDLElBQW9CLEVBQVUsRUFBRTtRQUM3QyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyRSxDQUFDLENBQUM7SUFFRixLQUFLLENBQUMsQ0FBbUI7UUFDdkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztDQUNGIn0=