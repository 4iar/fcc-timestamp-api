# Timestamp microservice (api)
[FreeCodeCamp project](https://www.freecodecamp.com/challenges/timestamp-microservice)

## Deployment
Hosted on https://fcc-timestamp-service-4iar.herokuapp.com/

## Usage

**Get time from unix timestamp**
```
curl https://fcc-timestamp-service-4iar.herokuapp.com/1450137600
```
Response
```
{"natural": "December 15, 2015", "unix": 1450137600}
```


**Get time from natural language date**
```
curl https://fcc-timestamp-service-4iar.herokuapp.com/2015-december-15
```
Response
```
{"natural": "December 15, 2015", "unix": 1450137600}
```


**Invalid requests**
```
curl https://fcc-timestamp-service-4iar.herokuapp.com/i-am-an-invalid
```
Response
```
{"natural": null, "unix": null}
```





