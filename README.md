# Demo PubSub Channel AWS AppSync


## Config file  

Create a file aws-exports.js in root of project and add the next configuration :

```
const awsmobile = {
    "aws_appsync_graphqlEndpoint": [URL_API_APP_SYNC]",
    "aws_appsync_region": [REGION],
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": [API_KEY],
    };
export default awsmobile;
```

## Execute 

```
npm install
```

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Step to create new Api AWS AppSync. 

- Using wizard of AppSync and press “Create Api”
- Select “Create a generic real-time API” is a generic PUB-SUB
- Export Schema schema.graphql (in schema item of menu)
- Copy schema file in the root of project
- Install anplifly 
```
npm i aws-amplify
``` 
- Execute:  
```
amplify add codegen --apiId xxxxxxxxxxxxxxxxxxxxxx --region eu-central-1
```
- To regenerate code 
```
npx amplify codegen
```

## Reference links  
- Docs: https://docs.amplify.aws/lib/graphqlapi/getting-started/q/platform/js/)
