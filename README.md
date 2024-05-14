# Utils-nestjs

> A set of small utilities for nestjs. 

## Installation

To install and set up the library, run:

```sh
$ npm install utils-nestjs 
```

Or if you prefer using Yarn:

```sh
$ yarn add utils-nestjs
```

## API

### mLog

```typescript
mLog.log({ source: getPathToCurrentFile(), handler: this.users.name, message: "request for get users list", path: "/users", method: httpMethods.GET});
```

Supported options and result fields for the `mLog` hook are listed below.

#### Options

`sources`

| Type         | Default value |
|--------------|---------------|
| string, null | null          |

`url`

| Type    | Default value |
|---------|---------------|
| string  | ""            |

`handler`

| Type    | Default value |
|---------|---------------|
| string  | ""            |

`message`

| Type    | Default value |
|---------|---------------|
| string  | ""            |

`method`

| Type             | Default value |
|------------------|---------------|
| httpMethods enum | ""            |

`path`

| Type   | Default value |
|--------|---------------|
| string | ""            |

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Authors

* **SashokNaSteroidah** - [JohnDoe](https://github.com/SashokNaSteroidah)