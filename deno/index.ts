//reading file
// const decoder = new TextDecoder('utf-8');
// const data = await Deno.readFile('tasin.txt');
// console.log(decoder.decode(data));

// const data =  await Deno.readTextFile('tasin.txt');

//writing file
// const encoder = new TextEncoder();
// const text = encoder.encode('Hi');
// await Deno.writeFile('tasin.txt',text);

//renaming and removing file
// await Deno.rename('tasin.txt', 'rohann.txt')
// await Deno.remove('rohann.txt')

//fetch api
// const res = await fetch('https://swapi.dev/api/films');
// const data = res.json();
// console.log(data);

//uid module
// import { v4 } from 'https://deno.land/std/uuid/mod.ts';

// const uid = v4.generate();
// console.log(uid);

//fs module
// import { readJsonSync } from "https://deno.land/std@0.76.0/fs/mod.ts";
// const jsonObj = await readJsonSync("tasin.json");
// console.log(jsonObj);

// import { serve } from "https://deno.land/std@0.112.0/http/server_legacy.ts";

// const server = serve({ port: 8000 });
// console.log("http://localhost:8000/");
// for await (const req of server) {
//     req.respond({ body: "nothing World\n" });
// }

import { getAllBooks, getBook, createBook, deleteBook } from './controllers/bookController.ts';

import { Application } from "https://deno.land/x/abc@v1.3.3/mod.ts";

const app = new Application();

//static files
app.static('/','./public')
//routes

app.get('/',async (ctx)=>{
    await ctx.file('./public/index.html')
})

app
   .get('/books', getAllBooks)
   .get('/books/:id', getBook)
   .post('/books', createBook)
   .delete('/books/:id', deleteBook) 

//listen to port 
console.log('http://localhost:3300');
app.start({ port: 3300 });