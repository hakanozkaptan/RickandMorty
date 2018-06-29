# Rick and Morty

## Install

* **Note: requires a node version >= 7 and an npm version >= 4.**

First, clone the repo via git:

```bash
git clone 
```

## Run
For direct running:

```bash
$ yarn
$ yarn test # for testing purposes
$ yarn start
```

For Docker Container:

```bash
$ docker build -t rickandmorty .
$ docker run -p 3000:3000 rickandmorty
```