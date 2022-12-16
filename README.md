# Demo PubSub Channel AWS AppSync


## Config file  

Inside /src folder create a file aws-exports.js then add the next configuration :

```
const awsmobile = {
    "aws_appsync_graphqlEndpoint": [URL_API_APP_SYNC],
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

## Docker image

```
docker compose up 
```     

## Step to create new Api AWS AppSync. 

- Using wizard of AppSync and press “Create Api”
- Select “Create a generic real-time API” (generic PUB-SUB)
- Export Schema schema.graphql (in schema item of menu)
- Create new project react
- Copy schema file in the root of project
- Install amplifly 
```
npm i aws-amplify
``` 
- Execute next code that create files .graphqlconfig.yml and folder graphql
```
amplify add codegen --apiId xxxxxxxxxxxxxxxxxxxxxx --region eu-central-1
```
- To regenerate code 
```
npx amplify codegen
```

## Reference links  
- Amplify: https://docs.amplify.aws/lib/graphqlapi/getting-started/q/platform/js/
- AWS Samples: https://github.com/aws-samples

