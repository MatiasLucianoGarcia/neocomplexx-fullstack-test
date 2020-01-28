using Nancy;
using Nancy.Bootstrapper;
using Nancy.TinyIoc;
using System.Diagnostics;
using System;

namespace webapi{ 
    public class myBootstrapper : DefaultNancyBootstrapper
    {
        private Stopwatch watch = new Stopwatch();

        protected override void ApplicationStartup(TinyIoCContainer container, IPipelines pipelines)
        {
            pipelines.AfterRequest.AddItemToEndOfPipeline((ctx) =>{
                        ctx.Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:4200");
                        ctx.Response.Headers.Add("Access-Control-Allow-Methods", "POST,GET,DELETE,PUT,OPTIONS");
                        ctx.Response.Headers.Add("Access-Control-Allow-Credentials", "true");
                        ctx.Response.Headers.Add("Access-Control-Allow-Headers", "Accept,Origin,Content-type");
                        ctx.Response.Headers.Add("Access-Control-Expose-Headers", "Accept,Origin,Content-type");
            });            

            pipelines.BeforeRequest += (ctx)=>{
                watch.Restart();
                return null;
            };

            pipelines.AfterRequest += (ctx)=>{
                watch.Stop();
                var r = ctx.Request;
                Console.Write($"{r.Method} {r.Path} "); 
                Console.WriteLine("Duracion Request: {0}ms",watch.ElapsedMilliseconds);
            };
        }
    }
}