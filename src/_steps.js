/* 
**steps for creating backend:

*cli - mkdir folder-name(project-name)
*cli - cd folder-name(project-name)
*cli - npm init -y
*cli - npm i express cors mongodb dotenv



** steps in backend
* step 1.1: import express
* step 1.2: create app by express
* step 1.3: create port
* step 1.4: import cors
* step 1.5: import dotenv 



*  step 2.1: use cors middle ware
* step 2.2: use express.json() middle ware
* step 2.3: app.listen(port, ()=>{ console.log(port)}



* step 3.1: copy the connect code and paste
*  3.2: delete connect coder from client.connect to end



* step 4.1: create a async function named run
* step 4.1: call the function end



* step 5:find all data( service) 
* step 5.1: app.get for find, set a route where get ,async req,res
* step 5.2 : for find all data query will empty object
* step 5.3: create cursor database.find(query)
* steps create data(services) from await cursor.toArray() and then send the data res.send



*step 6: find a data get( service)
* step 6.1: app.get for find, set a route where get ,async req,res
* step 6.2: get id from req.params
* step 6.3: create query for one {_id:ObjectId(id)}
* step 6.4: get one database.findOne(query)
* step 6.5: res.send the data



* step 7: post a data or create a data
* step 7.1: app.post , set route from where get , async
* step 7.2: get that from req.body and create  newData
* step 7.3: insert that await database.insertOne(newData)
* step 7.4: send data



* step 8:Delete a data 
* step 8.1: app.delete
* step 8.2: get id from params
* step 8.3: create a query {_id: ObjectId(id)}
* step 8.4: create result and await deleteOne
* step 8.5: send result
*/

/* 
**** Steps in client end
* step 1: post or create a data form the client 
* step 1.2 : say method : 'POST'
* step 1.3 : say headers and 'content-type':'application/json'
* step 1.4 : say body send data JSON.
* step 1.5: then then then ,, we've done 

**step 2: delete a data from database
* step 2.1: get the id that to delete
* step 2.2  : make a dynamic route with 
* step 2.3 : fetch , put the url
* step 2.4: say method "DELETE"
* step 2.5 : than, than we've done before

*/