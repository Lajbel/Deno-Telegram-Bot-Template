import { Bot } from 'https://deno.land/x/telegram@v0.1.1/mod.ts';
const token = Deno.env.get('TOKEN');
const bot = new Bot(token);
const commands = new Map();
for await (const dir of Deno.readDir('./commands')) {
    if (dir.name.endsWith(".ts")) {
        import(`./commands/${dir.name}`).then((file) => {
            const content = file;
            const name = file.default.name;
            console.log(content, name);
            commands.set(name, content);
        });
    }
    ;
}
;
bot.on('message', (ctx) => {
    console.log(ctx.message);
});
bot.launch();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsR0FBRyxFQUFXLE1BQU0sNENBQTRDLENBQUM7QUFJMUUsTUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFFLENBQUM7QUFDN0MsTUFBTSxHQUFHLEdBQVEsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFaEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQTtBQUkxQixJQUFJLEtBQUssRUFBRSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO0lBQ2hELElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDMUIsTUFBTSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDM0MsTUFBTSxPQUFPLEdBQVEsSUFBSSxDQUFDO1lBQzFCLE1BQU0sSUFBSSxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBRXZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBRTFCLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFBO0tBQ0w7SUFBQSxDQUFDO0NBQ0w7QUFBQSxDQUFDO0FBR0YsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFRLEVBQUUsRUFBRTtJQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyJ9