import { Command, Flags } from '@oclif/core';
import { simpleParser } from 'mailparser';
import { readFile, writeFile } from 'fs/promises';

export default class ExtractHtml extends Command {
  static description = 'Extracts HTML content from EML';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  static flags = {
    out: Flags.string({
      char: 'o',
      description: 'File to output HTML to',
    }),
  };

  static args = [
    {
      name: 'file',
      required: true,
      description: `EML file to extract HMTL contents from`,
    },
  ];

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(ExtractHtml);
    const parsed = await simpleParser(await readFile(args.file));

    if (!parsed.html) {
      this.error('Email contained no HTML contents', { exit: 0 });
    }

    if (flags.out) {
      await writeFile(flags.out, parsed.html);
    } else {
      process.stdout.write(parsed.html);
    }
  }
}
