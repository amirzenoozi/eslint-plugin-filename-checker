# eslint-plugin-filename-checker

Check File Names Format

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-filename-checker`:

```
$ npm install eslint-plugin-filename-checker --save-dev
```


## Usage

Add `filename-checker` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "filename-checker"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "filename-checker/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





