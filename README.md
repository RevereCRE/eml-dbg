mailtool
=================

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @reverecre/mailtool
$ mailtool COMMAND
running command...
$ mailtool (--version)
@reverecre/mailtool/0.0.0 darwin-arm64 node-v16.13.1
$ mailtool --help [COMMAND]
USAGE
  $ mailtool COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mailtool help [COMMAND]`](#mailtool-help-command)
* [`mailtool html extract FILE`](#mailtool-html-extract-file)
* [`mailtool html update FILE`](#mailtool-html-update-file)
* [`mailtool plugins`](#mailtool-plugins)
* [`mailtool plugins:install PLUGIN...`](#mailtool-pluginsinstall-plugin)
* [`mailtool plugins:inspect PLUGIN...`](#mailtool-pluginsinspect-plugin)
* [`mailtool plugins:install PLUGIN...`](#mailtool-pluginsinstall-plugin-1)
* [`mailtool plugins:link PLUGIN`](#mailtool-pluginslink-plugin)
* [`mailtool plugins:uninstall PLUGIN...`](#mailtool-pluginsuninstall-plugin)
* [`mailtool plugins:uninstall PLUGIN...`](#mailtool-pluginsuninstall-plugin-1)
* [`mailtool plugins:uninstall PLUGIN...`](#mailtool-pluginsuninstall-plugin-2)
* [`mailtool plugins update`](#mailtool-plugins-update)

## `mailtool help [COMMAND]`

Display help for mailtool.

```
USAGE
  $ mailtool help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for mailtool.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `mailtool html extract FILE`

Extracts HTML content from EML

```
USAGE
  $ mailtool html extract [FILE] [-o <value>]

ARGUMENTS
  FILE  EML file to extract HMTL contents from

FLAGS
  -o, --out=<value>  File to output HTML to

DESCRIPTION
  Extracts HTML content from EML

EXAMPLES
  $ mailtool html extract
```

## `mailtool html update FILE`

Updates HTML content in EML

```
USAGE
  $ mailtool html update [FILE] --html <value> [-o <value>]

ARGUMENTS
  FILE  EML file to write HTML to

FLAGS
  -o, --out=<value>  File to output updated contents to, defaults to input file
  --html=<value>     (required) New HTML content to write

DESCRIPTION
  Updates HTML content in EML

EXAMPLES
  $ mailtool html update
```

## `mailtool plugins`

List installed plugins.

```
USAGE
  $ mailtool plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ mailtool plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `mailtool plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mailtool plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ mailtool plugins add

EXAMPLES
  $ mailtool plugins:install myplugin 

  $ mailtool plugins:install https://github.com/someuser/someplugin

  $ mailtool plugins:install someuser/someplugin
```

## `mailtool plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ mailtool plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ mailtool plugins:inspect myplugin
```

## `mailtool plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mailtool plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ mailtool plugins add

EXAMPLES
  $ mailtool plugins:install myplugin 

  $ mailtool plugins:install https://github.com/someuser/someplugin

  $ mailtool plugins:install someuser/someplugin
```

## `mailtool plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ mailtool plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ mailtool plugins:link myplugin
```

## `mailtool plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mailtool plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mailtool plugins unlink
  $ mailtool plugins remove
```

## `mailtool plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mailtool plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mailtool plugins unlink
  $ mailtool plugins remove
```

## `mailtool plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mailtool plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mailtool plugins unlink
  $ mailtool plugins remove
```

## `mailtool plugins update`

Update installed plugins.

```
USAGE
  $ mailtool plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
