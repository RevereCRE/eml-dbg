`eml-dbg`
=================

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g eml-dbg
$ eml-dbg COMMAND
running command...
$ eml-dbg (--version)
eml-dbg/0.0.0 darwin-arm64 node-v16.13.1
$ eml-dbg --help [COMMAND]
USAGE
  $ eml-dbg COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`eml-dbg help [COMMAND]`](#eml-dbg-help-command)
* [`eml-dbg html extract FILE`](#eml-dbg-html-extract-file)
* [`eml-dbg html update FILE`](#eml-dbg-html-update-file)
* [`eml-dbg plugins`](#eml-dbg-plugins)
* [`eml-dbg plugins:install PLUGIN...`](#eml-dbg-pluginsinstall-plugin)
* [`eml-dbg plugins:inspect PLUGIN...`](#eml-dbg-pluginsinspect-plugin)
* [`eml-dbg plugins:install PLUGIN...`](#eml-dbg-pluginsinstall-plugin-1)
* [`eml-dbg plugins:link PLUGIN`](#eml-dbg-pluginslink-plugin)
* [`eml-dbg plugins:uninstall PLUGIN...`](#eml-dbg-pluginsuninstall-plugin)
* [`eml-dbg plugins:uninstall PLUGIN...`](#eml-dbg-pluginsuninstall-plugin-1)
* [`eml-dbg plugins:uninstall PLUGIN...`](#eml-dbg-pluginsuninstall-plugin-2)
* [`eml-dbg plugins update`](#eml-dbg-plugins-update)

## `eml-dbg help [COMMAND]`

Display help for eml-dbg.

```
USAGE
  $ eml-dbg help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for eml-dbg.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `eml-dbg html extract FILE`

Extracts HTML content from EML

```
USAGE
  $ eml-dbg html extract [FILE] [-o <value>]

ARGUMENTS
  FILE  EML file to extract HMTL contents from

FLAGS
  -o, --out=<value>  File to output HTML to

DESCRIPTION
  Extracts HTML content from EML

EXAMPLES
  $ eml-dbg html extract
```

## `eml-dbg html update FILE`

Updates HTML content in EML

```
USAGE
  $ eml-dbg html update [FILE] --html <value> [-o <value>]

ARGUMENTS
  FILE  EML file to write HTML to

FLAGS
  -o, --out=<value>  File to output updated contents to, defaults to input file
  --html=<value>     (required) New HTML content to write

DESCRIPTION
  Updates HTML content in EML

EXAMPLES
  $ eml-dbg html update
```

## `eml-dbg plugins`

List installed plugins.

```
USAGE
  $ eml-dbg plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ eml-dbg plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `eml-dbg plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ eml-dbg plugins:install PLUGIN...

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
  $ eml-dbg plugins add

EXAMPLES
  $ eml-dbg plugins:install myplugin 

  $ eml-dbg plugins:install https://github.com/someuser/someplugin

  $ eml-dbg plugins:install someuser/someplugin
```

## `eml-dbg plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ eml-dbg plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ eml-dbg plugins:inspect myplugin
```

## `eml-dbg plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ eml-dbg plugins:install PLUGIN...

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
  $ eml-dbg plugins add

EXAMPLES
  $ eml-dbg plugins:install myplugin 

  $ eml-dbg plugins:install https://github.com/someuser/someplugin

  $ eml-dbg plugins:install someuser/someplugin
```

## `eml-dbg plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ eml-dbg plugins:link PLUGIN

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
  $ eml-dbg plugins:link myplugin
```

## `eml-dbg plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ eml-dbg plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ eml-dbg plugins unlink
  $ eml-dbg plugins remove
```

## `eml-dbg plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ eml-dbg plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ eml-dbg plugins unlink
  $ eml-dbg plugins remove
```

## `eml-dbg plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ eml-dbg plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ eml-dbg plugins unlink
  $ eml-dbg plugins remove
```

## `eml-dbg plugins update`

Update installed plugins.

```
USAGE
  $ eml-dbg plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
