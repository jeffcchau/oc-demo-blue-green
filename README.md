# cf-demo-simple-node

A simple Node.js app for Cloud Foundry, which can be used to demonstrate:

- deployment using manifest files
- deployment of multiple versions

Deploy with:
```
cf push -f manifest.yml
```

Deploy different versions in a blue/green deployment with:
```
cf push -f manifest-v{1/2}.yml
```

Then, perform routing switch as required
