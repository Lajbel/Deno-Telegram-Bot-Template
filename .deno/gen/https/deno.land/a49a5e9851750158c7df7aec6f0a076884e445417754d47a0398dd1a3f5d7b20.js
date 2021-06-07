export class Composer {
    middleware;
    constructor(...middleware) {
        this.middleware = Composer.compose(middleware);
    }
    use(...middleware) {
        this.middleware = Composer.compose([this.middleware, ...middleware]);
    }
    on(updateType, ...middleware) {
        return this.use(Composer.mount(updateType, ...middleware));
    }
    static mount(updateType, ...middleware) {
        return (ctx, next) => {
            const updateTypes = !Array.isArray(updateType)
                ? [updateType]
                : updateType;
            (updateTypes.includes(ctx.updateType) ||
                updateTypes.some((type) => ctx.updateSubTypes.includes(type))) &&
                Composer.compose(middleware)(ctx, next);
        };
    }
    static passThru() {
        return (ctx, next) => next(ctx);
    }
    static compose(middleware) {
        if (middleware.length === 0) {
            return Composer.passThru();
        }
        if (middleware.length === 1) {
            return middleware[0];
        }
        return (ctx, next) => {
            let index = -1;
            async function dispatch(i) {
                if (i <= index) {
                    throw new Error("NextFunction called multiple times");
                }
                index = i;
                await (middleware[i] ?? next)(ctx, dispatch.bind(null, i + 1));
            }
            return dispatch(0);
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wb3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQSxNQUFNLE9BQU8sUUFBUTtJQUNuQixVQUFVLENBQWdCO0lBRTFCLFlBQVksR0FBRyxVQUF3QztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUksVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFHLFVBQXdDO1FBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxFQUFFLENBQ0EsVUFBeUUsRUFDekUsR0FBRyxVQUF3QztRQUUzQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBSSxVQUFVLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUNWLFVBQXlFLEVBQ3pFLEdBQUcsVUFBd0M7UUFFM0MsT0FBTyxDQUFDLEdBQU0sRUFBRSxJQUFxQixFQUFFLEVBQUU7WUFDdkMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztnQkFDNUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO2dCQUNkLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDZixDQUFFLFdBQTRCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQ3JELFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFpQyxFQUFFLEVBQUUsQ0FDckQsR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBc0IsQ0FBQyxDQUNwRCxDQUFDO2dCQUNGLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBUTtRQUNiLE9BQU8sQ0FBQyxHQUFNLEVBQUUsSUFBcUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUNaLFVBQXdDO1FBRXhDLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxRQUFRLENBQUMsUUFBUSxFQUFLLENBQUM7U0FDL0I7UUFFRCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzNCLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO1FBRUQsT0FBTyxDQUFDLEdBQU0sRUFBRSxJQUFxQixFQUFFLEVBQUU7WUFDdkMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFZixLQUFLLFVBQVUsUUFBUSxDQUFDLENBQVM7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRTtvQkFDZCxNQUFNLElBQUksS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7aUJBQ3ZEO2dCQUVELEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBRVYsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsQ0FBQztZQUVELE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRiJ9