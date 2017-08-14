# cf-demo-simple-node

A simple Node.js app for Cloud Foundry, which can be used to demonstrate:

- deployment using manifest files
- deployment of multiple versions

Deploy with:
```
cf push -f manifest.yml
```

## Blue/Green Deployments

Deploy different versions in a blue/green deployment with:
```
cf push -f manifest-v{1/2}.yml
```

Assuming an upgrade from version 1 to version 2, a blue/green deployment involves the addition of version 2 to the same route as the existing version 1 application, followed by the removal of version 1 from the existing route. This results in a switchover from version 1 to version 2 without relative unavailability.

Perform addition of version 2 to common route with:
```
cf map-route cf-demo-simple-node-v2 {domain} --hostname '{hostname}'
```

Perform addition of version 2 to common route with:
```
cf unmap-route cf-demo-simple-node-v1 {domain} --hostname '{hostname}'
```

See [CF Docs](https://docs.cloudfoundry.org/devguide/deploy-apps/blue-green.html) for more
