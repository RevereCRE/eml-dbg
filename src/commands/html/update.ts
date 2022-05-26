import { Command, Flags } from '@oclif/core';
import { readFile, writeFile } from 'fs/promises';
import MailComposer from 'nodemailer/lib/mail-composer';
import { simpleParser, AddressObject } from 'mailparser';

export default class ExtractHtml extends Command {
  static description = 'Updates HTML content in EML';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  static flags = {
    html: Flags.string({
      description: 'New HTML content to write',
      required: true,
    }),
    out: Flags.string({
      char: 'o',
      description: `File to output updated contents to, defaults to input file`,
    }),
  };

  static args = [
    { name: 'file', required: true, description: `EML file to write HTML to` },
  ];

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(ExtractHtml);
    const parsed = await simpleParser(await readFile(args.file));

    const composer = new MailComposer({
      headers: Object.fromEntries(Array.from(parsed.headers)) as {},
      from: parsed.from?.text,
      replyTo: parsed.replyTo?.text,
      to: this.normalizeParsedAddress(parsed.to),
      cc: this.normalizeParsedAddress(parsed.cc),
      bcc: this.normalizeParsedAddress(parsed.bcc),
      text: parsed.text,
      html: await readFile(flags.html),
    });

    const message = composer.compile();
    await writeFile(flags.out ?? args.file, await message.build());
  }

  private normalizeParsedAddress(
    address: AddressObject | AddressObject[] | undefined
  ) {
    if (Array.isArray(address)) {
      return address
        .flatMap((address) => address.value)
        .map((address) => ({
          name: address.name,
          address: address.address ?? '',
        }));
    } else if (address != null) {
      return address.value.map((address) => ({
        name: address.name,
        address: address.address ?? '',
      }));
    } else {
      return [];
    }
  }
}
